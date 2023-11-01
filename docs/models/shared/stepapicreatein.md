# StepApiCreateIn

Step (Create)


## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `assignableUserType`                                                                             | [StepApiCreateInAssignableUserType](../../models/shared/stepapicreateinassignableusertype.md)    | :heavy_minus_sign:                                                                               | Indicates which users are allowed to be assigned this step on a record (defaults to APP_USERS)   | APP_USERS                                                                                        |
| `enableComments`                                                                                 | *boolean*                                                                                        | :heavy_minus_sign:                                                                               | Whether comments are displayed on a step (defaults to false)                                     | false                                                                                            |
| `externalUserMfaRequired`                                                                        | *boolean*                                                                                        | :heavy_minus_sign:                                                                               | Whether MFA is required for external users to access this step. (defaults to false)              | false                                                                                            |
| `name`                                                                                           | *string*                                                                                         | :heavy_check_mark:                                                                               | The name of the step                                                                             | Identify Risk                                                                                    |
| `workflowId`                                                                                     | *string*                                                                                         | :heavy_check_mark:                                                                               | The unique ID of the parent workflow of the step                                                 | a1b2c3d4                                                                                         |
| `xpos`                                                                                           | *number*                                                                                         | :heavy_minus_sign:                                                                               | The x-coordinate of the step in the application builder (must not be less than 0, defaults to 0) | 20                                                                                               |
| `ypos`                                                                                           | *number*                                                                                         | :heavy_minus_sign:                                                                               | The y-coordinate of the step in the application builder (must not be less than 0, defaults to 0) | 20                                                                                               |