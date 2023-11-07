# Authentication
(*.authentication*)

## Overview

Getting Started: How to create an [API Access Token](https://www.logicgate.com/developer/risk-cloud-api-authentication/) to begin integrating with the Risk Cloud API

### Available Operations

* [getApiToken](#getapitoken) - Create an API Access Token

## getApiToken

**Permissions:** Authenticated User

Generates a new, expiring access token from the provided Client and Secret keys.

### Example Usage

```typescript
import { RiskCloudAPI } from "Risk-Cloud-API";
import { GetApiTokenSecurity } from "Risk-Cloud-API/dist/sdk/models/operations";

(async() => {
  const sdk = new RiskCloudAPI();
const operationSecurity: GetApiTokenSecurity = {
  password: "",
  username: "",
};

  const res = await sdk.authentication.getApiToken({}, operationSecurity);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.GetApiTokenRequest](../../models/operations/getapitokenrequest.md)   | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `security`                                                                       | [operations.GetApiTokenSecurity](../../models/operations/getapitokensecurity.md) | :heavy_check_mark:                                                               | The security requirements to use for the request.                                |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.GetApiTokenResponse](../../models/operations/getapitokenresponse.md)>**

