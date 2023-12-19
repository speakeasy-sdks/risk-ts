# Workflow
(*workflow*)

## Overview

A [Workflow](https://help.logicgate.com/hc/en-us/articles/4402683108756-Create-a-new-Workflow) is a combination of Steps, Paths, Fields, and routing logic that combine to form a system in an Application

### Available Operations

* [create](#create) - Create a workflow
* [delete](#delete) - Delete a workflow
* [read](#read) - Retrieve a workflow
* [readAll](#readall) - Retrieve workflows
* [update](#update) - Update a workflow

## create

**Permissions:** [Build Access to parent application](https://help.logicgate.com/hc/en-us/articles/4402683190164-Control-Build-Access-for-Applications)

Create a workflow from a JSON request body. The workflow will contain a Default Origin step and a Default End step.

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

  const res = await sdk.workflow.create({
    workflowApiCreateIn: {
      applicationId: "a1b2c3d4",
      name: "Risk Assessments",
      recordPrefix: "Assessment",
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

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.CreateWorkflowRequest](../../sdk/models/operations/createworkflowrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.CreateWorkflowResponse](../../sdk/models/operations/createworkflowresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## delete

**Permissions:** [Build Access to parent application](https://help.logicgate.com/hc/en-us/articles/4402683190164-Control-Build-Access-for-Applications)

Delete a workflow specified by the ID in the URL path.

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

  const res = await sdk.workflow.delete({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.DeleteWorkflowRequest](../../sdk/models/operations/deleteworkflowrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.DeleteWorkflowResponse](../../sdk/models/operations/deleteworkflowresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## read

**Permissions:** [Build Access to parent application](https://help.logicgate.com/hc/en-us/articles/4402683190164-Control-Build-Access-for-Applications)

Retrieve a workflow specified by the ID in the URL path.

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

  const res = await sdk.workflow.read({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.ReadWorkflowRequest](../../sdk/models/operations/readworkflowrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.ReadWorkflowResponse](../../sdk/models/operations/readworkflowresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## readAll

**Permissions:** [Build Access](https://help.logicgate.com/hc/en-us/articles/4402683190164-Control-Build-Access-for-Applications)

Retrieve a page of all workflows that the current user has [Build Access to parent application](https://help.logicgate.com/hc/en-us/articles/4402683190164-Control-Build-Access-for-Applications) to.

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

  const res = await sdk.workflow.readAll({});

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.ReadAllWorkflowsRequest](../../sdk/models/operations/readallworkflowsrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.ReadAllWorkflowsResponse](../../sdk/models/operations/readallworkflowsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## update

**Permissions:** [Build Access to parent application](https://help.logicgate.com/hc/en-us/articles/4402683190164-Control-Build-Access-for-Applications)

Update a workflow specified by the ID in the URL path from a JSON request body. Only present properties with non-empty values are updated.

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

  const res = await sdk.workflow.update({
    workflowApiUpdateIn: {
      name: "Risk Assessments",
      recordPrefix: "Assessment",
      xpos: 20,
      ypos: 20,
    },
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.UpdateWorkflowRequest](../../sdk/models/operations/updateworkflowrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.UpdateWorkflowResponse](../../sdk/models/operations/updateworkflowresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
