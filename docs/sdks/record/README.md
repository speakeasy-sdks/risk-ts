# RecordT
(*record*)

## Overview

A [Record](https://help.logicgate.com/hc/en-us/articles/4402683104020-Complete-a-Record) is a form that can capture information, store cataloged data, and link to other Records as it moves through each Step of a Workflow

### Available Operations

* [readAll](#readall) - Retrieve records

## readAll

**Permissions:** Authenticated User

Retrieve a page of all records that the current user has [Read or Write access](https://help.logicgate.com/hc/en-us/articles/4402683227156-Permission-Sets-) to.

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

  const res = await sdk.record.readAll({});

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.ReadAllRecordsRequest](../../sdk/models/operations/readallrecordsrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.ReadAllRecordsResponse](../../sdk/models/operations/readallrecordsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
