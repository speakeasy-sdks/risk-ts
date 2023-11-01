/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * The type of the step
 */
export enum StepPropertyApiOutType {
    Origin = "ORIGIN",
    Chain = "CHAIN",
    End = "END",
}

/**
 * The origin step of the record
 */
export class StepPropertyApiOut extends SpeakeasyBase {
    /**
     * The unique ID of this Risk Cloud resource
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    /**
     * The name of the step
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    /**
     * Identifies the type of object this data represents
     */
    @SpeakeasyMetadata()
    @Expose({ name: "object" })
    object?: string;

    /**
     * The type of the step
     */
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type?: StepPropertyApiOutType;
}
