/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as shared from "../sdk/models/shared";
import { Application } from "./application";
import { Authentication } from "./authentication";
import { Field } from "./field";
import { RecordT } from "./record";
import { Step } from "./step";
import { Workflow } from "./workflow";
import { WorkflowMap } from "./workflowmap";
import axios from "axios";
import { AxiosInstance } from "axios";

/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = ["http://localhost"] as const;

/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security | (() => Promise<shared.Security>);

    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;

    /**
     * Allows overriding the default server used by the SDK
     */
    serverIdx?: number;

    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
    /**
     * Allows overriding the default retry config used by the SDK
     */
    retryConfig?: utils.RetryConfig;
};

export class SDKConfiguration {
    defaultClient: AxiosInstance;
    security?: shared.Security | (() => Promise<shared.Security>);
    serverURL: string;
    serverDefaults: any;
    language = "typescript";
    openapiDocVersion = "v2023.10.0";
    sdkVersion = "0.2.2";
    genVersion = "2.187.7";
    userAgent = "speakeasy-sdk/typescript 0.2.2 2.187.7 v2023.10.0 Risk-Cloud-API";
    retryConfig?: utils.RetryConfig;
    public constructor(init?: Partial<SDKConfiguration>) {
        Object.assign(this, init);
    }
}

/**
 * Risk Cloud API: Welcome to the Risk Cloud API v2! This is a collection of new API-first and RESTful API endpoints to streamline the creation of custom integrations with the Risk Cloud.
 *
 * @remarks
 *
 * **Note**: These endpoints are currently in **open alpha**, meaning that backwards compatibility is not guaranteed and breaking changes are to be expected as the endpoints are finalized. The full release of these new v2 endpoints is anticipated for late 2023.
 *
 * For our existing collections of v1 endpoints,
 * please feel free to reference [Risk Cloud API v1](https://docs.logicgate.com).
 *
 * @see {@link https://www.logicgate.com/developer/} - Developer Portal
 */
export class RiskCloudAPI {
    /**
     * Getting Started: How to create an [API Access Token](https://www.logicgate.com/developer/risk-cloud-api-authentication/) to begin integrating with the Risk Cloud API
     */
    public authentication: Authentication;
    /**
     * An [Application](https://help.logicgate.com/hc/en-us/articles/4402674055572-Create-a-new-Application) is a collection of Workflows, Steps, and logic that collectively solve a business use case
     */
    public application: Application;
    /**
     * A [Field](https://help.logicgate.com/hc/en-us/articles/4402674064020-Create-Fields) is used to capture information from and display information to users in a Workflow
     */
    public field: Field;
    /**
     * A [Record](https://help.logicgate.com/hc/en-us/articles/4402683104020-Complete-a-Record) is a form that can capture information, store cataloged data, and link to other Records as it moves through each Step of a Workflow
     */
    public record: RecordT;
    /**
     * A [Step](https://help.logicgate.com/hc/en-us/articles/4402674059668-Create-a-Step) lives in a Workflow and is configured with a set of Sections, Subsections and Fields to create a form
     */
    public step: Step;
    /**
     * A [Workflow Map](https://help.logicgate.com/hc/en-us/articles/4402683117588) represents a relationship between two Workflows
     */
    public workflowMap: WorkflowMap;
    /**
     * A [Workflow](https://help.logicgate.com/hc/en-us/articles/4402683108756-Create-a-new-Workflow) is a combination of Steps, Paths, Fields, and routing logic that combine to form a system in an Application
     */
    public workflow: Workflow;

    private sdkConfiguration: SDKConfiguration;

    constructor(props?: SDKProps) {
        let serverURL = props?.serverURL;
        const serverIdx = props?.serverIdx ?? 0;

        if (!serverURL) {
            serverURL = ServerList[serverIdx];
        }

        const defaultClient = props?.defaultClient ?? axios.create();
        this.sdkConfiguration = new SDKConfiguration({
            defaultClient: defaultClient,
            security: props?.security,
            serverURL: serverURL,
            retryConfig: props?.retryConfig,
        });

        this.authentication = new Authentication(this.sdkConfiguration);
        this.application = new Application(this.sdkConfiguration);
        this.field = new Field(this.sdkConfiguration);
        this.record = new RecordT(this.sdkConfiguration);
        this.step = new Step(this.sdkConfiguration);
        this.workflowMap = new WorkflowMap(this.sdkConfiguration);
        this.workflow = new Workflow(this.sdkConfiguration);
    }
}
