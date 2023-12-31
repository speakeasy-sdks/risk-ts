/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Indicates which users are allowed to be assigned this step on a record
 */
export enum StepApiUpdateInAssignableUserType {
    AppAndExternalUsers = "APP_AND_EXTERNAL_USERS",
    AppUsers = "APP_USERS",
    ExternalUsers = "EXTERNAL_USERS",
}

/**
 * The type of the step (for END steps, this property cannot be updated since there would be no outgoing default next paths)
 */
export enum StepApiUpdateInType {
    Origin = "ORIGIN",
    Chain = "CHAIN",
    End = "END",
}

/**
 * Step (Update)
 */
export class StepApiUpdateIn extends SpeakeasyBase {
    /**
     * Indicates which users are allowed to be assigned this step on a record
     */
    @SpeakeasyMetadata()
    @Expose({ name: "assignableUserType" })
    assignableUserType?: StepApiUpdateInAssignableUserType;

    /**
     * Whether comments are displayed on a step
     */
    @SpeakeasyMetadata()
    @Expose({ name: "enableComments" })
    enableComments?: boolean;

    /**
     * Whether MFA is required for external users to access this step.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "externalUserMfaRequired" })
    externalUserMfaRequired?: boolean;

    /**
     * The name of the step
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    /**
     * The type of the step (for END steps, this property cannot be updated since there would be no outgoing default next paths)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type?: StepApiUpdateInType;

    /**
     * The x-coordinate of the step in the application builder (must not be less than 0)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "xpos" })
    xpos?: number;

    /**
     * The y-coordinate of the step in the application builder (must not be less than 0)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "ypos" })
    ypos?: number;
}
