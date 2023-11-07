<!-- Start SDK Example Usage -->


```typescript
import { RiskCloudAPI } from "Risk-Cloud-API";
import { GetApiTokenSecurity } from "Risk-Cloud-API/dist/sdk/models/operations";

(async () => {
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
<!-- End SDK Example Usage -->