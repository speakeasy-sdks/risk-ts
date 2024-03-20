<!-- Start SDK Example Usage [usage] -->
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

    const res = await sdk.authentication.getApiToken({});

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End SDK Example Usage [usage] -->