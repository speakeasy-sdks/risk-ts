/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class ReadAllRecordsRequest extends SpeakeasyBase {
    /**
     * The unique ID of an application where, if provided, the response will only contain records from the identified application
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=application-id" })
    applicationId?: string;

    /**
     * The zero-indexed page number (must not be less than 0, defaults to 0)
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
    page?: number;

    /**
     * The size of the page and maximum number of items to be returned (must not be less than 1, defaults to 20)
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=size" })
    size?: number;

    /**
     * The unique ID of a step where, if provided, the response will only contain records on the identified step
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=step-id" })
    stepId?: string;

    /**
     * A timestamp measured in milliseconds since the Unix epoch where, if provided, the response will only contain records that have been modified since the given timestamp
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updated-min" })
    updatedMin?: number;

    /**
     * The unique ID of a workflow where, if provided, the response will only contain records from the identified workflow
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=workflow-id" })
    workflowId?: string;
}

export class ReadAllRecordsResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * OK
     */
    @SpeakeasyMetadata()
    pageModelOutRecordApiOut?: shared.PageModelOutRecordApiOut;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}