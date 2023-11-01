# Step
(*step*)

## Overview

A [Step](https://help.logicgate.com/hc/en-us/articles/4402674059668-Create-a-Step) lives in a Workflow and is configured with a set of Sections, Subsections and Fields to create a form

### Available Operations

* [create](#create) - Create a step
* [delete](#delete) - Delete a step
* [read](#read) - Retrieve a step
* [readAll](#readall) - Retrieve steps
* [update](#update) - Update a step

## create

**Permissions:** [Build Access to parent application](https://help.logicgate.com/hc/en-us/articles/4402683190164-Control-Build-Access-for-Applications)

Create a step from a JSON request body.

### Example Usage

```typescript
import { RiskCloudAPI } from "Risk-Cloud-API";
import { StepApiCreateInAssignableUserType } from "Risk-Cloud-API/dist/sdk/models/shared";

(async() => {
  const sdk = new RiskCloudAPI({
    security: {
      basic: {
        password: "",
        username: "",
      },
    },
  });

  const res = await sdk.step.create({
    stepApiCreateIn: {
      assignableUserType: StepApiCreateInAssignableUserType.AppUsers,
      enableComments: false,
      externalUserMfaRequired: false,
      name: "Identify Risk",
      workflowId: "a1b2c3d4",
      xpos: 20,
      ypos: 20,
    },
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.CreateStepRequest](../../models/operations/createsteprequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.CreateStepResponse](../../models/operations/createstepresponse.md)>**


## delete

**Permissions:** [Build Access to parent application](https://help.logicgate.com/hc/en-us/articles/4402683190164-Control-Build-Access-for-Applications)

Delete a step specified by the ID in the URL path.

### Example Usage

```typescript
import { RiskCloudAPI } from "Risk-Cloud-API";

(async() => {
  const sdk = new RiskCloudAPI({
    security: {
      basic: {
        password: "",
        username: "",
      },
    },
  });

  const res = await sdk.step.delete({
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.DeleteStepRequest](../../models/operations/deletesteprequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.DeleteStepResponse](../../models/operations/deletestepresponse.md)>**


## read

**Permissions:** [Build Access to parent application](https://help.logicgate.com/hc/en-us/articles/4402683190164-Control-Build-Access-for-Applications)

Retrieve a step specified by the ID in the URL path.

### Example Usage

```typescript
import { RiskCloudAPI } from "Risk-Cloud-API";

(async() => {
  const sdk = new RiskCloudAPI({
    security: {
      basic: {
        password: "",
        username: "",
      },
    },
  });

  const res = await sdk.step.read({
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `request`                                                                | [operations.ReadStepRequest](../../models/operations/readsteprequest.md) | :heavy_check_mark:                                                       | The request object to use for the request.                               |
| `config`                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)             | :heavy_minus_sign:                                                       | Available config options for making requests.                            |


### Response

**Promise<[operations.ReadStepResponse](../../models/operations/readstepresponse.md)>**


## readAll

**Permissions:** [Build Access](https://help.logicgate.com/hc/en-us/articles/4402683190164-Control-Build-Access-for-Applications)

Retrieve a page of all steps that the current user has [Build Access to parent application](https://help.logicgate.com/hc/en-us/articles/4402683190164-Control-Build-Access-for-Applications) to.

### Example Usage

```typescript
import { RiskCloudAPI } from "Risk-Cloud-API";

(async() => {
  const sdk = new RiskCloudAPI({
    security: {
      basic: {
        password: "",
        username: "",
      },
    },
  });

  const res = await sdk.step.readAll({});


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.ReadAllStepsRequest](../../models/operations/readallstepsrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.ReadAllStepsResponse](../../models/operations/readallstepsresponse.md)>**


## update

**Permissions:** [Build Access to parent application](https://help.logicgate.com/hc/en-us/articles/4402683190164-Control-Build-Access-for-Applications)

Update a step specified by the ID in the URL path from a JSON request body. Only present properties with non-empty values are updated.

### Example Usage

```typescript
import { RiskCloudAPI } from "Risk-Cloud-API";
import { StepApiUpdateInAssignableUserType, StepApiUpdateInType } from "Risk-Cloud-API/dist/sdk/models/shared";

(async() => {
  const sdk = new RiskCloudAPI({
    security: {
      basic: {
        password: "",
        username: "",
      },
    },
  });

  const res = await sdk.step.update({
    stepApiUpdateIn: {
      assignableUserType: StepApiUpdateInAssignableUserType.AppUsers,
      enableComments: false,
      externalUserMfaRequired: false,
      name: "Identify Risk",
      type: StepApiUpdateInType.Origin,
      xpos: 20,
      ypos: 20,
    },
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                            | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `request`                                                            | [operations.UpdateRequest](../../models/operations/updaterequest.md) | :heavy_check_mark:                                                   | The request object to use for the request.                           |
| `config`                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)         | :heavy_minus_sign:                                                   | Available config options for making requests.                        |


### Response

**Promise<[operations.UpdateResponse](../../models/operations/updateresponse.md)>**

