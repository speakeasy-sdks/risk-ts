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
import { AssignableUserType } from "Risk-Cloud-API/dist/sdk/models/shared";

async function run() {
  const sdk = new RiskCloudAPI({
    security: {
      basic: {
        password: "<YOUR_PASSWORD_HERE>",
        username: "<YOUR_USERNAME_HERE>",
      },
    },
  });

  const res = await sdk.step.create({
    stepApiCreateIn: {
      assignableUserType: AssignableUserType.AppUsers,
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
}

run();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.CreateStepRequest](../../sdk/models/operations/createsteprequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.CreateStepResponse](../../sdk/models/operations/createstepresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## delete

**Permissions:** [Build Access to parent application](https://help.logicgate.com/hc/en-us/articles/4402683190164-Control-Build-Access-for-Applications)

Delete a step specified by the ID in the URL path.

### Example Usage

```typescript
import { RiskCloudAPI } from "Risk-Cloud-API";

async function run() {
  const sdk = new RiskCloudAPI({
    security: {
      basic: {
        password: "<YOUR_PASSWORD_HERE>",
        username: "<YOUR_USERNAME_HERE>",
      },
    },
  });

  const res = await sdk.step.delete({
    id: "<id>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.DeleteStepRequest](../../sdk/models/operations/deletesteprequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.DeleteStepResponse](../../sdk/models/operations/deletestepresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## read

**Permissions:** [Build Access to parent application](https://help.logicgate.com/hc/en-us/articles/4402683190164-Control-Build-Access-for-Applications)

Retrieve a step specified by the ID in the URL path.

### Example Usage

```typescript
import { RiskCloudAPI } from "Risk-Cloud-API";

async function run() {
  const sdk = new RiskCloudAPI({
    security: {
      basic: {
        password: "<YOUR_PASSWORD_HERE>",
        username: "<YOUR_USERNAME_HERE>",
      },
    },
  });

  const res = await sdk.step.read({
    id: "<id>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.ReadStepRequest](../../sdk/models/operations/readsteprequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.ReadStepResponse](../../sdk/models/operations/readstepresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## readAll

**Permissions:** [Build Access](https://help.logicgate.com/hc/en-us/articles/4402683190164-Control-Build-Access-for-Applications)

Retrieve a page of all steps that the current user has [Build Access to parent application](https://help.logicgate.com/hc/en-us/articles/4402683190164-Control-Build-Access-for-Applications) to.

### Example Usage

```typescript
import { RiskCloudAPI } from "Risk-Cloud-API";

async function run() {
  const sdk = new RiskCloudAPI({
    security: {
      basic: {
        password: "<YOUR_PASSWORD_HERE>",
        username: "<YOUR_USERNAME_HERE>",
      },
    },
  });

  const res = await sdk.step.readAll({});

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.ReadAllStepsRequest](../../sdk/models/operations/readallstepsrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.ReadAllStepsResponse](../../sdk/models/operations/readallstepsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## update

**Permissions:** [Build Access to parent application](https://help.logicgate.com/hc/en-us/articles/4402683190164-Control-Build-Access-for-Applications)

Update a step specified by the ID in the URL path from a JSON request body. Only present properties with non-empty values are updated.

### Example Usage

```typescript
import { RiskCloudAPI } from "Risk-Cloud-API";
import { StepApiUpdateInAssignableUserType, StepApiUpdateInType } from "Risk-Cloud-API/dist/sdk/models/shared";

async function run() {
  const sdk = new RiskCloudAPI({
    security: {
      basic: {
        password: "<YOUR_PASSWORD_HERE>",
        username: "<YOUR_USERNAME_HERE>",
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
    id: "<id>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `request`                                                                | [operations.UpdateRequest](../../sdk/models/operations/updaterequest.md) | :heavy_check_mark:                                                       | The request object to use for the request.                               |
| `config`                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)             | :heavy_minus_sign:                                                       | Available config options for making requests.                            |


### Response

**Promise<[operations.UpdateResponse](../../sdk/models/operations/updateresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
