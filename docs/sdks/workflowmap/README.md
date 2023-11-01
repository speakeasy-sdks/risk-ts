# WorkflowMap
(*workflowMap*)

## Overview

A [Workflow Map](https://help.logicgate.com/hc/en-us/articles/4402683117588) represents a relationship between two Workflows

### Available Operations

* [create](#create) - Create a workflow map
* [delete](#delete) - Delete a workflow map
* [read](#read) - Retrieve a workflow map
* [readAll](#readall) - Retrieve workflow maps
* [update](#update) - Update a workflow map

## create

**Permissions:** [Build Access to parent applications](https://help.logicgate.com/hc/en-us/articles/4402683190164-Control-Build-Access-for-Applications)

Create a workflow map from a JSON request body.

### Example Usage

```typescript
import { RiskCloudAPI } from "Risk-Cloud-API";
import { WorkflowMapApiCreateInRelationship } from "Risk-Cloud-API/dist/sdk/models/shared";

(async() => {
  const sdk = new RiskCloudAPI({
    security: {
      basic: {
        password: "",
        username: "",
      },
    },
  });

  const res = await sdk.workflowMap.create({
    workflowMapApiCreateIn: {
      from: "a1b2c3d4",
      relationship: WorkflowMapApiCreateInRelationship.OneToMany,
      to: "a1b2c3d4",
    },
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.CreateWorkflowMapRequest](../../models/operations/createworkflowmaprequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.CreateWorkflowMapResponse](../../models/operations/createworkflowmapresponse.md)>**


## delete

**Permissions:** [Build Access to a parent application](https://help.logicgate.com/hc/en-us/articles/4402683190164-Control-Build-Access-for-Applications)

Delete a workflow map specified by the ID in the URL path.

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

  const res = await sdk.workflowMap.delete({
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.DeleteWorkflowMapRequest](../../models/operations/deleteworkflowmaprequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.DeleteWorkflowMapResponse](../../models/operations/deleteworkflowmapresponse.md)>**


## read

**Permissions:** [Build Access to a parent application](https://help.logicgate.com/hc/en-us/articles/4402683190164-Control-Build-Access-for-Applications)

Retrieve a workflow map specified by the ID in the URL path.

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

  const res = await sdk.workflowMap.read({
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.ReadWorkflowMapRequest](../../models/operations/readworkflowmaprequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.ReadWorkflowMapResponse](../../models/operations/readworkflowmapresponse.md)>**


## readAll

**Permissions:** [Build Access](https://help.logicgate.com/hc/en-us/articles/4402683190164-Control-Build-Access-for-Applications)

Retrieve a page of all workflow maps that the current user has [Build Access to a parent application](https://help.logicgate.com/hc/en-us/articles/4402683190164-Control-Build-Access-for-Applications) to.

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

  const res = await sdk.workflowMap.readAll({});


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.ReadAllWorkflowMapsRequest](../../models/operations/readallworkflowmapsrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.ReadAllWorkflowMapsResponse](../../models/operations/readallworkflowmapsresponse.md)>**


## update

**Permissions:** [Build Access to a parent application](https://help.logicgate.com/hc/en-us/articles/4402683190164-Control-Build-Access-for-Applications)

Update a workflow map specified by the ID in the URL path from a JSON request body. Only present properties with non-empty values are updated.

### Example Usage

```typescript
import { RiskCloudAPI } from "Risk-Cloud-API";
import { WorkflowMapApiUpdateInRelationship } from "Risk-Cloud-API/dist/sdk/models/shared";

(async() => {
  const sdk = new RiskCloudAPI({
    security: {
      basic: {
        password: "",
        username: "",
      },
    },
  });

  const res = await sdk.workflowMap.update({
    workflowMapApiUpdateIn: {
      relationship: WorkflowMapApiUpdateInRelationship.ManyToMany,
    },
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.UpdateWorkflowMapRequest](../../models/operations/updateworkflowmaprequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.UpdateWorkflowMapResponse](../../models/operations/updateworkflowmapresponse.md)>**

