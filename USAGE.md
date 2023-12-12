<!-- Start SDK Example Usage [usage] -->
```typescript
import { RiskCloudAPI } from "Risk-Cloud-API";
import { GetApiTokenSecurity } from "Risk-Cloud-API/dist/sdk/models/operations";

async function run() {
    const sdk = new RiskCloudAPI();
    const operationSecurity: GetApiTokenSecurity = {
        password: "<YOUR_PASSWORD_HERE>",
        username: "<YOUR_USERNAME_HERE>",
    };

    const res = await sdk.authentication.getApiToken({}, operationSecurity);

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End SDK Example Usage [usage] -->