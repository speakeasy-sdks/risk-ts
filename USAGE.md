<!-- Start SDK Example Usage -->


```typescript
import { RiskCloudAPI } from "Risk-Cloud-API";
import {
    ApplicationApiCreateInIcon,
    ApplicationApiCreateInType,
} from "Risk-Cloud-API/dist/sdk/models/shared";

(async () => {
    const sdk = new RiskCloudAPI({
        security: {
            basic: {
                password: "",
                username: "",
            },
        },
    });

    const res = await sdk.application.create({
        applicationApiCreateIn: {
            color: "#00a3de",
            icon: ApplicationApiCreateInIcon.Cubes,
            name: "Cyber Risk Management Application",
            type: ApplicationApiCreateInType.ControlsCompliance,
        },
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->