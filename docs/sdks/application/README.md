# Application
(*application*)

## Overview

An [Application](https://help.logicgate.com/hc/en-us/articles/4402674055572-Create-a-new-Application) is a collection of Workflows, Steps, and logic that collectively solve a business use case

### Available Operations

* [create](#create) - Create an application
* [delete](#delete) - Delete an application
* [read](#read) - Retrieve an application
* [readAll](#readall) - Retrieve applications
* [update](#update) - Update an application

## create

**Permissions:** [Build Access](https://help.logicgate.com/hc/en-us/articles/4402683190164-Control-Build-Access-for-Applications)

Create an application from a JSON request body.

### Example Usage

```typescript
import { RiskCloudAPI } from "Risk-Cloud-API";
import { Icon, TypeT } from "Risk-Cloud-API/dist/sdk/models/shared";

async function run() {
  const sdk = new RiskCloudAPI({
    security: {
      basic: {
        password: "<YOUR_PASSWORD_HERE>",
        username: "<YOUR_USERNAME_HERE>",
      },
    },
  });

  const res = await sdk.application.create({
    applicationApiCreateIn: {
      color: "#00a3de",
      icon: Icon.Cubes,
      name: "Cyber Risk Management Application",
      type: TypeT.ControlsCompliance,
    },
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.CreateApplicationRequest](../../sdk/models/operations/createapplicationrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.CreateApplicationResponse](../../sdk/models/operations/createapplicationresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## delete

**Permissions:** [Build Access to application](https://help.logicgate.com/hc/en-us/articles/4402683190164-Control-Build-Access-for-Applications)

Delete an application specified by the ID in the URL path.

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

  const res = await sdk.application.delete({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.DeleteApplicationRequest](../../sdk/models/operations/deleteapplicationrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.DeleteApplicationResponse](../../sdk/models/operations/deleteapplicationresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## read

**Permissions:** [Build Access to application](https://help.logicgate.com/hc/en-us/articles/4402683190164-Control-Build-Access-for-Applications)

Retrieve an application specified by the ID in the URL path.

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

  const res = await sdk.application.read({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.ReadApplicationRequest](../../sdk/models/operations/readapplicationrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.ReadApplicationResponse](../../sdk/models/operations/readapplicationresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## readAll

**Permissions:** [Build Access](https://help.logicgate.com/hc/en-us/articles/4402683190164-Control-Build-Access-for-Applications)

Retrieve a page of all applications that the current user has [Build Access](https://help.logicgate.com/hc/en-us/articles/4402683190164-Control-Build-Access-for-Applications) to.

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

  const res = await sdk.application.readAll({});

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.ReadAllApplicationsRequest](../../sdk/models/operations/readallapplicationsrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.ReadAllApplicationsResponse](../../sdk/models/operations/readallapplicationsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## update

**Permissions:** [Build Access to application](https://help.logicgate.com/hc/en-us/articles/4402683190164-Control-Build-Access-for-Applications)

Update an application specified by the ID in the URL path from a JSON request body. Only present properties with non-empty values are updated.

### Example Usage

```typescript
import { RiskCloudAPI } from "Risk-Cloud-API";
import { ApplicationApiUpdateInIcon, ApplicationApiUpdateInType } from "Risk-Cloud-API/dist/sdk/models/shared";

async function run() {
  const sdk = new RiskCloudAPI({
    security: {
      basic: {
        password: "<YOUR_PASSWORD_HERE>",
        username: "<YOUR_USERNAME_HERE>",
      },
    },
  });

  const res = await sdk.application.update({
    applicationApiUpdateIn: {
      color: "#00a3de",
      icon: ApplicationApiUpdateInIcon.Cubes,
      live: false,
      name: "Cyber Risk Management Application",
      restrictBuildAccess: false,
      type: ApplicationApiUpdateInType.ControlsCompliance,
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

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [operations.Update1Request](../../sdk/models/operations/update1request.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.Update1Response](../../sdk/models/operations/update1response.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
