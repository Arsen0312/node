/// <reference types="node" />
import { OAuth2Client, JWT, Compute, UserRefreshClient, BaseExternalAccountClient, GaxiosPromise, GoogleConfigurable, MethodOptions, StreamMethodOptions, GlobalOptions, GoogleAuth, BodyResponseCallback, APIRequestContext } from 'googleapis-common';
import { Readable } from 'stream';
export declare namespace dialogflow_v3beta1 {
    export interface Options extends GlobalOptions {
        version: 'v3beta1';
    }
    interface StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient | BaseExternalAccountClient | GoogleAuth;
        /**
         * V1 error format.
         */
        '$.xgafv'?: string;
        /**
         * OAuth access token.
         */
        access_token?: string;
        /**
         * Data format for response.
         */
        alt?: string;
        /**
         * JSONP
         */
        callback?: string;
        /**
         * Selector specifying which fields to include in a partial response.
         */
        fields?: string;
        /**
         * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
         */
        key?: string;
        /**
         * OAuth 2.0 token for the current user.
         */
        oauth_token?: string;
        /**
         * Returns response with indentations and line breaks.
         */
        prettyPrint?: boolean;
        /**
         * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
         */
        quotaUser?: string;
        /**
         * Legacy upload protocol for media (e.g. "media", "multipart").
         */
        uploadType?: string;
        /**
         * Upload protocol for media (e.g. "raw", "multipart").
         */
        upload_protocol?: string;
    }
    /**
     * Dialogflow API
     *
     * Builds conversational interfaces (for example, chatbots, and voice-powered apps and devices).
     *
     * @example
     * ```js
     * const {google} = require('googleapis');
     * const dialogflow = google.dialogflow('v3beta1');
     * ```
     */
    export class Dialogflow {
        context: APIRequestContext;
        projects: Resource$Projects;
        constructor(options: GlobalOptions, google?: GoogleConfigurable);
    }
    /**
     * Represents the natural speech audio to be processed.
     */
    export interface Schema$GoogleCloudDialogflowCxV3AudioInput {
        /**
         * The natural language speech audio to be processed. A single request can contain up to 1 minute of speech audio data. The transcribed text cannot contain more than 256 bytes. For non-streaming audio detect intent, both `config` and `audio` must be provided. For streaming audio detect intent, `config` must be provided in the first request and `audio` must be provided in all following requests.
         */
        audio?: string | null;
        /**
         * Required. Instructs the speech recognizer how to process the speech audio.
         */
        config?: Schema$GoogleCloudDialogflowCxV3InputAudioConfig;
    }
    /**
     * Metadata returned for the TestCases.BatchRunTestCases long running operation.
     */
    export interface Schema$GoogleCloudDialogflowCxV3BatchRunTestCasesMetadata {
        /**
         * The test errors.
         */
        errors?: Schema$GoogleCloudDialogflowCxV3TestError[];
    }
    /**
     * The response message for TestCases.BatchRunTestCases.
     */
    export interface Schema$GoogleCloudDialogflowCxV3BatchRunTestCasesResponse {
        /**
         * The test case results. The detailed conversation turns are empty in this response.
         */
        results?: Schema$GoogleCloudDialogflowCxV3TestCaseResult[];
    }
    /**
     * Hierarchical advanced settings for agent/flow/page/fulfillment/parameter. Settings exposed at lower level overrides the settings exposed at higher level. Hierarchy: Agent-\>Flow-\>Page-\>Fulfillment/Parameter.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1AdvancedSettings {
        /**
         * Settings for logging. Settings for Dialogflow History, Contact Center messages, StackDriver logs, and speech logging. Exposed at the following levels: - Agent level.
         */
        loggingSettings?: Schema$GoogleCloudDialogflowCxV3beta1AdvancedSettingsLoggingSettings;
    }
    /**
     * Define behaviors on logging.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1AdvancedSettingsLoggingSettings {
        /**
         * If true, DF Interaction logging is currently enabled.
         */
        enableInteractionLogging?: boolean | null;
        /**
         * If true, StackDriver logging is currently enabled.
         */
        enableStackdriverLogging?: boolean | null;
    }
    /**
     * Agents are best described as Natural Language Understanding (NLU) modules that transform user requests into actionable data. You can include agents in your app, product, or service to determine user intent and respond to the user in a natural way. After you create an agent, you can add Intents, Entity Types, Flows, Fulfillments, Webhooks, and so on to manage the conversation flows..
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1Agent {
        /**
         * Hierarchical advanced settings for this agent. The settings exposed at the lower level overrides the settings exposed at the higher level.
         */
        advancedSettings?: Schema$GoogleCloudDialogflowCxV3beta1AdvancedSettings;
        /**
         * The URI of the agent's avatar. Avatars are used throughout the Dialogflow console and in the self-hosted [Web Demo](https://cloud.google.com/dialogflow/docs/integrations/web-demo) integration.
         */
        avatarUri?: string | null;
        /**
         * Required. Immutable. The default language of the agent as a language tag. See [Language Support](https://cloud.google.com/dialogflow/cx/docs/reference/language) for a list of the currently supported language codes. This field cannot be set by the Agents.UpdateAgent method.
         */
        defaultLanguageCode?: string | null;
        /**
         * The description of the agent. The maximum length is 500 characters. If exceeded, the request is rejected.
         */
        description?: string | null;
        /**
         * Required. The human-readable name of the agent, unique within the location.
         */
        displayName?: string | null;
        /**
         * Indicates if automatic spell correction is enabled in detect intent requests.
         */
        enableSpellCorrection?: boolean | null;
        /**
         * Indicates if stackdriver logging is enabled for the agent. Please use agent.advanced_settings instead.
         */
        enableStackdriverLogging?: boolean | null;
        /**
         * The unique identifier of the agent. Required for the Agents.UpdateAgent method. Agents.CreateAgent populates the name automatically. Format: `projects//locations//agents/`.
         */
        name?: string | null;
        /**
         * Name of the SecuritySettings reference for the agent. Format: `projects//locations//securitySettings/`.
         */
        securitySettings?: string | null;
        /**
         * Speech recognition related settings.
         */
        speechToTextSettings?: Schema$GoogleCloudDialogflowCxV3beta1SpeechToTextSettings;
        /**
         * Immutable. Name of the start flow in this agent. A start flow will be automatically created when the agent is created, and can only be deleted by deleting the agent. Format: `projects//locations//agents//flows/`.
         */
        startFlow?: string | null;
        /**
         * The list of all languages supported by the agent (except for the `default_language_code`).
         */
        supportedLanguageCodes?: string[] | null;
        /**
         * Required. The time zone of the agent from the [time zone database](https://www.iana.org/time-zones), e.g., America/New_York, Europe/Paris.
         */
        timeZone?: string | null;
    }
    /**
     * The response message for Agents.GetAgentValidationResult.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1AgentValidationResult {
        /**
         * Contains all flow validation results.
         */
        flowValidationResults?: Schema$GoogleCloudDialogflowCxV3beta1FlowValidationResult[];
        /**
         * The unique identifier of the agent validation result. Format: `projects//locations//agents//validationResult`.
         */
        name?: string | null;
    }
    /**
     * Represents the natural speech audio to be processed.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1AudioInput {
        /**
         * The natural language speech audio to be processed. A single request can contain up to 1 minute of speech audio data. The transcribed text cannot contain more than 256 bytes. For non-streaming audio detect intent, both `config` and `audio` must be provided. For streaming audio detect intent, `config` must be provided in the first request and `audio` must be provided in all following requests.
         */
        audio?: string | null;
        /**
         * Required. Instructs the speech recognizer how to process the speech audio.
         */
        config?: Schema$GoogleCloudDialogflowCxV3beta1InputAudioConfig;
    }
    /**
     * The request message for TestCases.BatchDeleteTestCases.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1BatchDeleteTestCasesRequest {
        /**
         * Required. Format of test case names: `projects//locations/ /agents//testCases/`.
         */
        names?: string[] | null;
    }
    /**
     * Metadata returned for the TestCases.BatchRunTestCases long running operation.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1BatchRunTestCasesMetadata {
        /**
         * The test errors.
         */
        errors?: Schema$GoogleCloudDialogflowCxV3beta1TestError[];
    }
    /**
     * The request message for TestCases.BatchRunTestCases.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1BatchRunTestCasesRequest {
        /**
         * Optional. If not set, draft environment is assumed. Format: `projects//locations//agents//environments/`.
         */
        environment?: string | null;
        /**
         * Required. Format: `projects//locations//agents//testCases/`.
         */
        testCases?: string[] | null;
    }
    /**
     * The response message for TestCases.BatchRunTestCases.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1BatchRunTestCasesResponse {
        /**
         * The test case results. The detailed conversation turns are empty in this response.
         */
        results?: Schema$GoogleCloudDialogflowCxV3beta1TestCaseResult[];
    }
    /**
     * The response message for TestCases.CalculateCoverage.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1CalculateCoverageResponse {
        /**
         * The agent to calculate coverage for. Format: `projects//locations//agents/`.
         */
        agent?: string | null;
        /**
         * Intent coverage.
         */
        intentCoverage?: Schema$GoogleCloudDialogflowCxV3beta1IntentCoverage;
        /**
         * Transition route group coverage.
         */
        routeGroupCoverage?: Schema$GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverage;
        /**
         * Transition (excluding transition route groups) coverage.
         */
        transitionCoverage?: Schema$GoogleCloudDialogflowCxV3beta1TransitionCoverage;
    }
    /**
     * Changelogs represents a change made to a given agent.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1Changelog {
        /**
         * The action of the change.
         */
        action?: string | null;
        /**
         * The timestamp of the change.
         */
        createTime?: string | null;
        /**
         * The affected resource display name of the change.
         */
        displayName?: string | null;
        /**
         * The unique identifier of the changelog. Format: `projects//locations//agents//changelogs/`.
         */
        name?: string | null;
        /**
         * The affected resource name of the change.
         */
        resource?: string | null;
        /**
         * The affected resource type.
         */
        type?: string | null;
        /**
         * Email address of the authenticated user.
         */
        userEmail?: string | null;
    }
    /**
     * The request message for Versions.CompareVersions.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1CompareVersionsRequest {
        /**
         * The language to compare the flow versions for. If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
         */
        languageCode?: string | null;
        /**
         * Required. Name of the target flow version to compare with the base version. Use version ID `0` to indicate the draft version of the specified flow. Format: `projects//locations//agents//flows//versions/`.
         */
        targetVersion?: string | null;
    }
    /**
     * The response message for Versions.CompareVersions.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1CompareVersionsResponse {
        /**
         * JSON representation of the base version content.
         */
        baseVersionContentJson?: string | null;
        /**
         * The timestamp when the two version compares.
         */
        compareTime?: string | null;
        /**
         * JSON representation of the target version content.
         */
        targetVersionContentJson?: string | null;
    }
    /**
     * Represents a result from running a test case in an agent environment.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1ContinuousTestResult {
        /**
         * The resource name for the continuous test result. Format: `projects//locations//agents//environments//continuousTestResults/`.
         */
        name?: string | null;
        /**
         * The result of this continuous test run, i.e. whether all the tests in this continuous test run pass or not.
         */
        result?: string | null;
        /**
         * Time when the continuous testing run starts.
         */
        runTime?: string | null;
        /**
         * A list of individual test case results names in this continuous test run.
         */
        testCaseResults?: string[] | null;
    }
    /**
     * One interaction between a human and virtual agent. The human provides some input and the virtual agent provides a response.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1ConversationTurn {
        /**
         * The user input.
         */
        userInput?: Schema$GoogleCloudDialogflowCxV3beta1ConversationTurnUserInput;
        /**
         * The virtual agent output.
         */
        virtualAgentOutput?: Schema$GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutput;
    }
    /**
     * The input from the human user.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1ConversationTurnUserInput {
        /**
         * Whether sentiment analysis is enabled.
         */
        enableSentimentAnalysis?: boolean | null;
        /**
         * Parameters that need to be injected into the conversation during intent detection.
         */
        injectedParameters?: {
            [key: string]: any;
        } | null;
        /**
         * Supports text input, event input, dtmf input in the test case.
         */
        input?: Schema$GoogleCloudDialogflowCxV3beta1QueryInput;
        /**
         * If webhooks should be allowed to trigger in response to the user utterance. Often if parameters are injected, webhooks should not be enabled.
         */
        isWebhookEnabled?: boolean | null;
    }
    /**
     * The output from the virtual agent.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutput {
        /**
         * The Page on which the utterance was spoken. Only name and displayName will be set.
         */
        currentPage?: Schema$GoogleCloudDialogflowCxV3beta1Page;
        /**
         * Required. Input only. The diagnostic info output for the turn. Required to calculate the testing coverage.
         */
        diagnosticInfo?: {
            [key: string]: any;
        } | null;
        /**
         * Output only. If this is part of a result conversation turn, the list of differences between the original run and the replay for this output, if any.
         */
        differences?: Schema$GoogleCloudDialogflowCxV3beta1TestRunDifference[];
        /**
         * The session parameters available to the bot at this point.
         */
        sessionParameters?: {
            [key: string]: any;
        } | null;
        /**
         * Response error from the agent in the test result. If set, other output is empty.
         */
        status?: Schema$GoogleRpcStatus;
        /**
         * The text responses from the agent for the turn.
         */
        textResponses?: Schema$GoogleCloudDialogflowCxV3beta1ResponseMessageText[];
        /**
         * The Intent that triggered the response. Only name and displayName will be set.
         */
        triggeredIntent?: Schema$GoogleCloudDialogflowCxV3beta1Intent;
    }
    /**
     * Metadata for CreateDocument operation.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1CreateDocumentOperationMetadata {
        /**
         * The generic information of the operation.
         */
        genericMetadata?: Schema$GoogleCloudDialogflowCxV3beta1GenericKnowledgeOperationMetadata;
    }
    /**
     * Metadata associated with the long running operation for Versions.CreateVersion.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1CreateVersionOperationMetadata {
        /**
         * Name of the created version. Format: `projects//locations//agents//flows//versions/`.
         */
        version?: string | null;
    }
    /**
     * Metadata for DeleteDocument operation.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1DeleteDocumentOperationMetadata {
        /**
         * The generic information of the operation.
         */
        genericMetadata?: Schema$GoogleCloudDialogflowCxV3beta1GenericKnowledgeOperationMetadata;
    }
    /**
     * Metadata returned for the Environments.DeployFlow long running operation.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1DeployFlowMetadata {
        /**
         * Errors of running deployment tests.
         */
        testErrors?: Schema$GoogleCloudDialogflowCxV3beta1TestError[];
    }
    /**
     * The request message for Environments.DeployFlow.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1DeployFlowRequest {
        /**
         * Required. The flow version to deploy. Format: `projects//locations//agents// flows//versions/`.
         */
        flowVersion?: string | null;
    }
    /**
     * The response message for Environments.DeployFlow.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1DeployFlowResponse {
        /**
         * The name of the flow version deployment. Format: `projects//locations//agents// environments//deployments/`.
         */
        deployment?: string | null;
        /**
         * The updated environment where the flow is deployed.
         */
        environment?: Schema$GoogleCloudDialogflowCxV3beta1Environment;
    }
    /**
     * Represents an deployment in an environment. A deployment happens when a flow version configured to be active in the environment. You can configure running pre-deployment steps, e.g. running validation test cases, experiment auto-rollout, etc.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1Deployment {
        /**
         * End time of this deployment.
         */
        endTime?: string | null;
        /**
         * The name of the flow version for this deployment. Format: projects//locations//agents//flows//versions/.
         */
        flowVersion?: string | null;
        /**
         * The name of the deployment. Format: projects//locations//agents//environments//deployments/.
         */
        name?: string | null;
        /**
         * Result of the deployment.
         */
        result?: Schema$GoogleCloudDialogflowCxV3beta1DeploymentResult;
        /**
         * Start time of this deployment.
         */
        startTime?: string | null;
        /**
         * The current state of the deployment.
         */
        state?: string | null;
    }
    /**
     * Result of the deployment.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1DeploymentResult {
        /**
         * Results of test cases running before the deployment. Format: `projects//locations//agents//testCases//results/`.
         */
        deploymentTestResults?: string[] | null;
        /**
         * The name of the experiment triggered by this deployment. Format: projects//locations//agents//environments//experiments/.
         */
        experiment?: string | null;
    }
    /**
     * The request to detect user's intent.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1DetectIntentRequest {
        /**
         * Instructs the speech synthesizer how to generate the output audio.
         */
        outputAudioConfig?: Schema$GoogleCloudDialogflowCxV3beta1OutputAudioConfig;
        /**
         * Required. The input specification.
         */
        queryInput?: Schema$GoogleCloudDialogflowCxV3beta1QueryInput;
        /**
         * The parameters of this query.
         */
        queryParams?: Schema$GoogleCloudDialogflowCxV3beta1QueryParameters;
    }
    /**
     * The message returned from the DetectIntent method.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1DetectIntentResponse {
        /**
         * Indicates whether the partial response can be cancelled when a later response arrives. e.g. if the agent specified some music as partial response, it can be cancelled.
         */
        allowCancellation?: boolean | null;
        /**
         * The audio data bytes encoded as specified in the request. Note: The output audio is generated based on the values of default platform text responses found in the `query_result.response_messages` field. If multiple default text responses exist, they will be concatenated when generating audio. If no default platform text responses exist, the generated audio content will be empty. In some scenarios, multiple output audio fields may be present in the response structure. In these cases, only the top-most-level audio output has content.
         */
        outputAudio?: string | null;
        /**
         * The config used by the speech synthesizer to generate the output audio.
         */
        outputAudioConfig?: Schema$GoogleCloudDialogflowCxV3beta1OutputAudioConfig;
        /**
         * The result of the conversational query.
         */
        queryResult?: Schema$GoogleCloudDialogflowCxV3beta1QueryResult;
        /**
         * Output only. The unique identifier of the response. It can be used to locate a response in the training example set or for reporting issues.
         */
        responseId?: string | null;
        /**
         * Response type.
         */
        responseType?: string | null;
    }
    /**
     * Represents the input for dtmf event.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1DtmfInput {
        /**
         * The dtmf digits.
         */
        digits?: string | null;
        /**
         * The finish digit (if any).
         */
        finishDigit?: string | null;
    }
    /**
     * Entities are extracted from user input and represent parameters that are meaningful to your application. For example, a date range, a proper name such as a geographic location or landmark, and so on. Entities represent actionable data for your application. When you define an entity, you can also include synonyms that all map to that entity. For example, "soft drink", "soda", "pop", and so on. There are three types of entities: * **System** - entities that are defined by the Dialogflow API for common data types such as date, time, currency, and so on. A system entity is represented by the `EntityType` type. * **Custom** - entities that are defined by you that represent actionable data that is meaningful to your application. For example, you could define a `pizza.sauce` entity for red or white pizza sauce, a `pizza.cheese` entity for the different types of cheese on a pizza, a `pizza.topping` entity for different toppings, and so on. A custom entity is represented by the `EntityType` type. * **User** - entities that are built for an individual user such as favorites, preferences, playlists, and so on. A user entity is represented by the SessionEntityType type. For more information about entity types, see the [Dialogflow documentation](https://cloud.google.com/dialogflow/docs/entities-overview).
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1EntityType {
        /**
         * Indicates whether the entity type can be automatically expanded.
         */
        autoExpansionMode?: string | null;
        /**
         * Required. The human-readable name of the entity type, unique within the agent.
         */
        displayName?: string | null;
        /**
         * Enables fuzzy entity extraction during classification.
         */
        enableFuzzyExtraction?: boolean | null;
        /**
         * The collection of entity entries associated with the entity type.
         */
        entities?: Schema$GoogleCloudDialogflowCxV3beta1EntityTypeEntity[];
        /**
         * Collection of exceptional words and phrases that shouldn't be matched. For example, if you have a size entity type with entry `giant`(an adjective), you might consider adding `giants`(a noun) as an exclusion. If the kind of entity type is `KIND_MAP`, then the phrases specified by entities and excluded phrases should be mutually exclusive.
         */
        excludedPhrases?: Schema$GoogleCloudDialogflowCxV3beta1EntityTypeExcludedPhrase[];
        /**
         * Required. Indicates the kind of entity type.
         */
        kind?: string | null;
        /**
         * The unique identifier of the entity type. Required for EntityTypes.UpdateEntityType. Format: `projects//locations//agents//entityTypes/`.
         */
        name?: string | null;
        /**
         * Indicates whether parameters of the entity type should be redacted in log. If redaction is enabled, page parameters and intent parameters referring to the entity type will be replaced by parameter name during logging.
         */
        redact?: boolean | null;
    }
    /**
     * An **entity entry** for an associated entity type.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1EntityTypeEntity {
        /**
         * Required. A collection of value synonyms. For example, if the entity type is *vegetable*, and `value` is *scallions*, a synonym could be *green onions*. For `KIND_LIST` entity types: * This collection must contain exactly one synonym equal to `value`.
         */
        synonyms?: string[] | null;
        /**
         * Required. The primary value associated with this entity entry. For example, if the entity type is *vegetable*, the value could be *scallions*. For `KIND_MAP` entity types: * A canonical value to be used in place of synonyms. For `KIND_LIST` entity types: * A string that can contain references to other entity types (with or without aliases).
         */
        value?: string | null;
    }
    /**
     * An excluded entity phrase that should not be matched.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1EntityTypeExcludedPhrase {
        /**
         * Required. The word or phrase to be excluded.
         */
        value?: string | null;
    }
    /**
     * Represents an environment for an agent. You can create multiple versions of your agent and publish them to separate environments. When you edit an agent, you are editing the draft agent. At any point, you can save the draft agent as an agent version, which is an immutable snapshot of your agent. When you save the draft agent, it is published to the default environment. When you create agent versions, you can publish them to custom environments. You can create a variety of custom environments for testing, development, production, etc.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1Environment {
        /**
         * The human-readable description of the environment. The maximum length is 500 characters. If exceeded, the request is rejected.
         */
        description?: string | null;
        /**
         * Required. The human-readable name of the environment (unique in an agent). Limit of 64 characters.
         */
        displayName?: string | null;
        /**
         * The name of the environment. Format: `projects//locations//agents//environments/`.
         */
        name?: string | null;
        /**
         * The test cases config for continuous tests of this environment.
         */
        testCasesConfig?: Schema$GoogleCloudDialogflowCxV3beta1EnvironmentTestCasesConfig;
        /**
         * Output only. Update time of this environment.
         */
        updateTime?: string | null;
        /**
         * Required. A list of configurations for flow versions. You should include version configs for all flows that are reachable from `Start Flow` in the agent. Otherwise, an error will be returned.
         */
        versionConfigs?: Schema$GoogleCloudDialogflowCxV3beta1EnvironmentVersionConfig[];
    }
    /**
     * The configuration for continuous tests.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1EnvironmentTestCasesConfig {
        /**
         * Whether to run test cases in TestCasesConfig.test_cases periodically. Default false. If set to true, run once a day.
         */
        enableContinuousRun?: boolean | null;
        /**
         * Whether to run test cases in TestCasesConfig.test_cases before deploying a flow version to the environment. Default false.
         */
        enablePredeploymentRun?: boolean | null;
        /**
         * A list of test case names to run. They should be under the same agent. Format of each test case name: `projects//locations/ /agents//testCases/`
         */
        testCases?: string[] | null;
    }
    /**
     * Configuration for the version.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1EnvironmentVersionConfig {
        /**
         * Required. Format: projects//locations//agents//flows//versions/.
         */
        version?: string | null;
    }
    /**
     * An event handler specifies an event that can be handled during a session. When the specified event happens, the following actions are taken in order: * If there is a `trigger_fulfillment` associated with the event, it will be called. * If there is a `target_page` associated with the event, the session will transition into the specified page. * If there is a `target_flow` associated with the event, the session will transition into the specified flow.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1EventHandler {
        /**
         * Required. The name of the event to handle.
         */
        event?: string | null;
        /**
         * Output only. The unique identifier of this event handler.
         */
        name?: string | null;
        /**
         * The target flow to transition to. Format: `projects//locations//agents//flows/`.
         */
        targetFlow?: string | null;
        /**
         * The target page to transition to. Format: `projects//locations//agents//flows//pages/`.
         */
        targetPage?: string | null;
        /**
         * The fulfillment to call when the event occurs. Handling webhook errors with a fulfillment enabled with webhook could cause infinite loop. It is invalid to specify such fulfillment for a handler handling webhooks.
         */
        triggerFulfillment?: Schema$GoogleCloudDialogflowCxV3beta1Fulfillment;
    }
    /**
     * Represents the event to trigger.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1EventInput {
        /**
         * Name of the event.
         */
        event?: string | null;
    }
    /**
     * Represents an experiment in an environment.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1Experiment {
        /**
         * Creation time of this experiment.
         */
        createTime?: string | null;
        /**
         * The definition of the experiment.
         */
        definition?: Schema$GoogleCloudDialogflowCxV3beta1ExperimentDefinition;
        /**
         * The human-readable description of the experiment.
         */
        description?: string | null;
        /**
         * Required. The human-readable name of the experiment (unique in an environment). Limit of 64 characters.
         */
        displayName?: string | null;
        /**
         * End time of this experiment.
         */
        endTime?: string | null;
        /**
         * Maximum number of days to run the experiment. If auto-rollout is not enabled, default value and maximum will be 30 days. If auto-rollout is enabled, default value and maximum will be 6 days.
         */
        experimentLength?: string | null;
        /**
         * Last update time of this experiment.
         */
        lastUpdateTime?: string | null;
        /**
         * The name of the experiment. Format: projects//locations//agents//environments//experiments/..
         */
        name?: string | null;
        /**
         * Inference result of the experiment.
         */
        result?: Schema$GoogleCloudDialogflowCxV3beta1ExperimentResult;
        /**
         * The configuration for auto rollout. If set, there should be exactly two variants in the experiment (control variant being the default version of the flow), the traffic allocation for the non-control variant will gradually increase to 100% when conditions are met, and eventually replace the control variant to become the default version of the flow.
         */
        rolloutConfig?: Schema$GoogleCloudDialogflowCxV3beta1RolloutConfig;
        /**
         * The reason why rollout has failed. Should only be set when state is ROLLOUT_FAILED.
         */
        rolloutFailureReason?: string | null;
        /**
         * State of the auto rollout process.
         */
        rolloutState?: Schema$GoogleCloudDialogflowCxV3beta1RolloutState;
        /**
         * Start time of this experiment.
         */
        startTime?: string | null;
        /**
         * The current state of the experiment. Transition triggered by Experiments.StartExperiment: DRAFT-\>RUNNING. Transition triggered by Experiments.CancelExperiment: DRAFT-\>DONE or RUNNING-\>DONE.
         */
        state?: string | null;
        /**
         * The history of updates to the experiment variants.
         */
        variantsHistory?: Schema$GoogleCloudDialogflowCxV3beta1VariantsHistory[];
    }
    /**
     * Definition of the experiment.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1ExperimentDefinition {
        /**
         * The condition defines which subset of sessions are selected for this experiment. If not specified, all sessions are eligible. E.g. "query_input.language_code=en" See the [conditions reference](https://cloud.google.com/dialogflow/cx/docs/reference/condition).
         */
        condition?: string | null;
        /**
         * The flow versions as the variants of this experiment.
         */
        versionVariants?: Schema$GoogleCloudDialogflowCxV3beta1VersionVariants;
    }
    /**
     * The inference result which includes an objective metric to optimize and the confidence interval.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1ExperimentResult {
        /**
         * The last time the experiment's stats data was updated. Will have default value if stats have never been computed for this experiment.
         */
        lastUpdateTime?: string | null;
        /**
         * Version variants and metrics.
         */
        versionMetrics?: Schema$GoogleCloudDialogflowCxV3beta1ExperimentResultVersionMetrics[];
    }
    /**
     * A confidence interval is a range of possible values for the experiment objective you are trying to measure.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1ExperimentResultConfidenceInterval {
        /**
         * The confidence level used to construct the interval, i.e. there is X% chance that the true value is within this interval.
         */
        confidenceLevel?: number | null;
        /**
         * Lower bound of the interval.
         */
        lowerBound?: number | null;
        /**
         * The percent change between an experiment metric's value and the value for its control.
         */
        ratio?: number | null;
        /**
         * Upper bound of the interval.
         */
        upperBound?: number | null;
    }
    /**
     * Metric and corresponding confidence intervals.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1ExperimentResultMetric {
        /**
         * The probability that the treatment is better than all other treatments in the experiment
         */
        confidenceInterval?: Schema$GoogleCloudDialogflowCxV3beta1ExperimentResultConfidenceInterval;
        /**
         * Count value of a metric.
         */
        count?: number | null;
        /**
         * Count-based metric type. Only one of type or count_type is specified in each Metric.
         */
        countType?: string | null;
        /**
         * Ratio value of a metric.
         */
        ratio?: number | null;
        /**
         * Ratio-based metric type. Only one of type or count_type is specified in each Metric.
         */
        type?: string | null;
    }
    /**
     * Version variant and associated metrics.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1ExperimentResultVersionMetrics {
        /**
         * The metrics and corresponding confidence intervals in the inference result.
         */
        metrics?: Schema$GoogleCloudDialogflowCxV3beta1ExperimentResultMetric[];
        /**
         * Number of sessions that were allocated to this version.
         */
        sessionCount?: number | null;
        /**
         * The name of the flow Version. Format: `projects//locations//agents//flows//versions/`.
         */
        version?: string | null;
    }
    /**
     * The request message for Agents.ExportAgent.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1ExportAgentRequest {
        /**
         * Optional. The [Google Cloud Storage](https://cloud.google.com/storage/docs/) URI to export the agent to. The format of this URI must be `gs:///`. If left unspecified, the serialized agent is returned inline.
         */
        agentUri?: string | null;
        /**
         * Optional. Environment name. If not set, draft environment is assumed. Format: `projects//locations//agents//environments/`.
         */
        environment?: string | null;
    }
    /**
     * The response message for Agents.ExportAgent.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1ExportAgentResponse {
        /**
         * Uncompressed raw byte content for agent.
         */
        agentContent?: string | null;
        /**
         * The URI to a file containing the exported agent. This field is populated only if `agent_uri` is specified in ExportAgentRequest.
         */
        agentUri?: string | null;
    }
    /**
     * The request message for Flows.ExportFlow.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1ExportFlowRequest {
        /**
         * Optional. The [Google Cloud Storage](https://cloud.google.com/storage/docs/) URI to export the flow to. The format of this URI must be `gs:///`. If left unspecified, the serialized flow is returned inline.
         */
        flowUri?: string | null;
        /**
         * Optional. Whether to export flows referenced by the specified flow.
         */
        includeReferencedFlows?: boolean | null;
    }
    /**
     * The response message for Flows.ExportFlow.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1ExportFlowResponse {
        /**
         * Uncompressed raw byte content for flow.
         */
        flowContent?: string | null;
        /**
         * The URI to a file containing the exported flow. This field is populated only if `flow_uri` is specified in ExportFlowRequest.
         */
        flowUri?: string | null;
    }
    /**
     * Metadata returned for the TestCases.ExportTestCases long running operation. This message currently has no fields.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1ExportTestCasesMetadata {
    }
    /**
     * The request message for TestCases.ExportTestCases.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1ExportTestCasesRequest {
        /**
         * The data format of the exported test cases. If not specified, `BLOB` is assumed.
         */
        dataFormat?: string | null;
        /**
         * The filter expression used to filter exported test cases, see [API Filtering](https://aip.dev/160). The expression is case insensitive and supports the following syntax: name = [OR name = ] ... For example: * "name = t1 OR name = t2" matches the test case with the exact resource name "t1" or "t2".
         */
        filter?: string | null;
        /**
         * The [Google Cloud Storage](https://cloud.google.com/storage/docs/) URI to export the test cases to. The format of this URI must be `gs:///`. If unspecified, the serialized test cases is returned inline.
         */
        gcsUri?: string | null;
    }
    /**
     * The response message for TestCases.ExportTestCases.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1ExportTestCasesResponse {
        /**
         * Uncompressed raw byte content for test cases.
         */
        content?: string | null;
        /**
         * The URI to a file containing the exported test cases. This field is populated only if `gcs_uri` is specified in ExportTestCasesRequest.
         */
        gcsUri?: string | null;
    }
    /**
     * Flows represents the conversation flows when you build your chatbot agent. A flow consists of many pages connected by the transition routes. Conversations always start with the built-in Start Flow (with an all-0 ID). Transition routes can direct the conversation session from the current flow (parent flow) to another flow (sub flow). When the sub flow is finished, Dialogflow will bring the session back to the parent flow, where the sub flow is started. Usually, when a transition route is followed by a matched intent, the intent will be "consumed". This means the intent won't activate more transition routes. However, when the followed transition route moves the conversation session into a different flow, the matched intent can be carried over and to be consumed in the target flow.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1Flow {
        /**
         * The description of the flow. The maximum length is 500 characters. If exceeded, the request is rejected.
         */
        description?: string | null;
        /**
         * Required. The human-readable name of the flow.
         */
        displayName?: string | null;
        /**
         * A flow's event handlers serve two purposes: * They are responsible for handling events (e.g. no match, webhook errors) in the flow. * They are inherited by every page's event handlers, which can be used to handle common events regardless of the current page. Event handlers defined in the page have higher priority than those defined in the flow. Unlike transition_routes, these handlers are evaluated on a first-match basis. The first one that matches the event get executed, with the rest being ignored.
         */
        eventHandlers?: Schema$GoogleCloudDialogflowCxV3beta1EventHandler[];
        /**
         * The unique identifier of the flow. Format: `projects//locations//agents//flows/`.
         */
        name?: string | null;
        /**
         * NLU related settings of the flow.
         */
        nluSettings?: Schema$GoogleCloudDialogflowCxV3beta1NluSettings;
        /**
         * A flow's transition route group serve two purposes: * They are responsible for matching the user's first utterances in the flow. * They are inherited by every page's transition route groups. Transition route groups defined in the page have higher priority than those defined in the flow. Format:`projects//locations//agents//flows//transitionRouteGroups/`.
         */
        transitionRouteGroups?: string[] | null;
        /**
         * A flow's transition routes serve two purposes: * They are responsible for matching the user's first utterances in the flow. * They are inherited by every page's transition routes and can support use cases such as the user saying "help" or "can I talk to a human?", which can be handled in a common way regardless of the current page. Transition routes defined in the page have higher priority than those defined in the flow. TransitionRoutes are evalauted in the following order: * TransitionRoutes with intent specified.. * TransitionRoutes with only condition specified. TransitionRoutes with intent specified are inherited by pages in the flow.
         */
        transitionRoutes?: Schema$GoogleCloudDialogflowCxV3beta1TransitionRoute[];
    }
    /**
     * The response message for Flows.GetFlowValidationResult.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1FlowValidationResult {
        /**
         * The unique identifier of the flow validation result. Format: `projects//locations//agents//flows//validationResult`.
         */
        name?: string | null;
        /**
         * Last time the flow was validated.
         */
        updateTime?: string | null;
        /**
         * Contains all validation messages.
         */
        validationMessages?: Schema$GoogleCloudDialogflowCxV3beta1ValidationMessage[];
    }
    /**
     * A form is a data model that groups related parameters that can be collected from the user. The process in which the agent prompts the user and collects parameter values from the user is called form filling. A form can be added to a page. When form filling is done, the filled parameters will be written to the session.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1Form {
        /**
         * Parameters to collect from the user.
         */
        parameters?: Schema$GoogleCloudDialogflowCxV3beta1FormParameter[];
    }
    /**
     * Represents a form parameter.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1FormParameter {
        /**
         * The default value of an optional parameter. If the parameter is required, the default value will be ignored.
         */
        defaultValue?: any | null;
        /**
         * Required. The human-readable name of the parameter, unique within the form.
         */
        displayName?: string | null;
        /**
         * Required. The entity type of the parameter. Format: `projects/-/locations/-/agents/-/entityTypes/` for system entity types (for example, `projects/-/locations/-/agents/-/entityTypes/sys.date`), or `projects//locations//agents//entityTypes/` for developer entity types.
         */
        entityType?: string | null;
        /**
         * Required. Defines fill behavior for the parameter.
         */
        fillBehavior?: Schema$GoogleCloudDialogflowCxV3beta1FormParameterFillBehavior;
        /**
         * Indicates whether the parameter represents a list of values.
         */
        isList?: boolean | null;
        /**
         * Indicates whether the parameter content should be redacted in log. If redaction is enabled, the parameter content will be replaced by parameter name during logging. Note: the parameter content is subject to redaction if either parameter level redaction or entity type level redaction is enabled.
         */
        redact?: boolean | null;
        /**
         * Indicates whether the parameter is required. Optional parameters will not trigger prompts; however, they are filled if the user specifies them. Required parameters must be filled before form filling concludes.
         */
        required?: boolean | null;
    }
    /**
     * Configuration for how the filling of a parameter should be handled.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1FormParameterFillBehavior {
        /**
         * Required. The fulfillment to provide the initial prompt that the agent can present to the user in order to fill the parameter.
         */
        initialPromptFulfillment?: Schema$GoogleCloudDialogflowCxV3beta1Fulfillment;
        /**
         * The handlers for parameter-level events, used to provide reprompt for the parameter or transition to a different page/flow. The supported events are: * `sys.no-match-`, where N can be from 1 to 6 * `sys.no-match-default` * `sys.no-input-`, where N can be from 1 to 6 * `sys.no-input-default` * `sys.invalid-parameter` `initial_prompt_fulfillment` provides the first prompt for the parameter. If the user's response does not fill the parameter, a no-match/no-input event will be triggered, and the fulfillment associated with the `sys.no-match-1`/`sys.no-input-1` handler (if defined) will be called to provide a prompt. The `sys.no-match-2`/`sys.no-input-2` handler (if defined) will respond to the next no-match/no-input event, and so on. A `sys.no-match-default` or `sys.no-input-default` handler will be used to handle all following no-match/no-input events after all numbered no-match/no-input handlers for the parameter are consumed. A `sys.invalid-parameter` handler can be defined to handle the case where the parameter values have been `invalidated` by webhook. For example, if the user's response fill the parameter, however the parameter was invalidated by webhook, the fulfillment associated with the `sys.invalid-parameter` handler (if defined) will be called to provide a prompt. If the event handler for the corresponding event can't be found on the parameter, `initial_prompt_fulfillment` will be re-prompted.
         */
        repromptEventHandlers?: Schema$GoogleCloudDialogflowCxV3beta1EventHandler[];
    }
    /**
     * Request of FulfillIntent
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1FulfillIntentRequest {
        /**
         * The matched intent/event to fulfill.
         */
        match?: Schema$GoogleCloudDialogflowCxV3beta1Match;
        /**
         * Must be same as the corresponding MatchIntent request, otherwise the behavior is undefined.
         */
        matchIntentRequest?: Schema$GoogleCloudDialogflowCxV3beta1MatchIntentRequest;
        /**
         * Instructs the speech synthesizer how to generate output audio.
         */
        outputAudioConfig?: Schema$GoogleCloudDialogflowCxV3beta1OutputAudioConfig;
    }
    /**
     * Response of FulfillIntent
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1FulfillIntentResponse {
        /**
         * The audio data bytes encoded as specified in the request. Note: The output audio is generated based on the values of default platform text responses found in the `query_result.response_messages` field. If multiple default text responses exist, they will be concatenated when generating audio. If no default platform text responses exist, the generated audio content will be empty. In some scenarios, multiple output audio fields may be present in the response structure. In these cases, only the top-most-level audio output has content.
         */
        outputAudio?: string | null;
        /**
         * The config used by the speech synthesizer to generate the output audio.
         */
        outputAudioConfig?: Schema$GoogleCloudDialogflowCxV3beta1OutputAudioConfig;
        /**
         * The result of the conversational query.
         */
        queryResult?: Schema$GoogleCloudDialogflowCxV3beta1QueryResult;
        /**
         * Output only. The unique identifier of the response. It can be used to locate a response in the training example set or for reporting issues.
         */
        responseId?: string | null;
    }
    /**
     * A fulfillment can do one or more of the following actions at the same time: * Generate rich message responses. * Set parameter values. * Call the webhook. Fulfillments can be called at various stages in the Page or Form lifecycle. For example, when a DetectIntentRequest drives a session to enter a new page, the page's entry fulfillment can add a static response to the QueryResult in the returning DetectIntentResponse, call the webhook (for example, to load user data from a database), or both.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1Fulfillment {
        /**
         * Conditional cases for this fulfillment.
         */
        conditionalCases?: Schema$GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCases[];
        /**
         * The list of rich message responses to present to the user.
         */
        messages?: Schema$GoogleCloudDialogflowCxV3beta1ResponseMessage[];
        /**
         * Whether Dialogflow should return currently queued fulfillment response messages in streaming APIs. If a webhook is specified, it happens before Dialogflow invokes webhook. Warning: 1) This flag only affects streaming API. Responses are still queued and returned once in non-streaming API. 2) The flag can be enabled in any fulfillment but only the first 3 partial responses will be returned. You may only want to apply it to fulfillments that have slow webhooks.
         */
        returnPartialResponses?: boolean | null;
        /**
         * Set parameter values before executing the webhook.
         */
        setParameterActions?: Schema$GoogleCloudDialogflowCxV3beta1FulfillmentSetParameterAction[];
        /**
         * The tag used by the webhook to identify which fulfillment is being called. This field is required if `webhook` is specified.
         */
        tag?: string | null;
        /**
         * The webhook to call. Format: `projects//locations//agents//webhooks/`.
         */
        webhook?: string | null;
    }
    /**
     * A list of cascading if-else conditions. Cases are mutually exclusive. The first one with a matching condition is selected, all the rest ignored.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCases {
        /**
         * A list of cascading if-else conditions.
         */
        cases?: Schema$GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCase[];
    }
    /**
     * Each case has a Boolean condition. When it is evaluated to be True, the corresponding messages will be selected and evaluated recursively.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCase {
        /**
         * A list of case content.
         */
        caseContent?: Schema$GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCaseCaseContent[];
        /**
         * The condition to activate and select this case. Empty means the condition is always true. The condition is evaluated against form parameters or session parameters. See the [conditions reference](https://cloud.google.com/dialogflow/cx/docs/reference/condition).
         */
        condition?: string | null;
    }
    /**
     * The list of messages or conditional cases to activate for this case.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCaseCaseContent {
        /**
         * Additional cases to be evaluated.
         */
        additionalCases?: Schema$GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCases;
        /**
         * Returned message.
         */
        message?: Schema$GoogleCloudDialogflowCxV3beta1ResponseMessage;
    }
    /**
     * Setting a parameter value.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1FulfillmentSetParameterAction {
        /**
         * Display name of the parameter.
         */
        parameter?: string | null;
        /**
         * The new value of the parameter. A null value clears the parameter.
         */
        value?: any | null;
    }
    /**
     * Metadata in google::longrunning::Operation for Knowledge operations.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1GenericKnowledgeOperationMetadata {
        /**
         * Required. Output only. The current state of this operation.
         */
        state?: string | null;
    }
    /**
     * Metadata for ImportDocuments operation.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1ImportDocumentsOperationMetadata {
        /**
         * The generic information of the operation.
         */
        genericMetadata?: Schema$GoogleCloudDialogflowCxV3beta1GenericKnowledgeOperationMetadata;
    }
    /**
     * Response message for Documents.ImportDocuments.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1ImportDocumentsResponse {
        /**
         * Includes details about skipped documents or any other warnings.
         */
        warnings?: Schema$GoogleRpcStatus[];
    }
    /**
     * The request message for Flows.ImportFlow.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1ImportFlowRequest {
        /**
         * Uncompressed raw byte content for flow.
         */
        flowContent?: string | null;
        /**
         * The [Google Cloud Storage](https://cloud.google.com/storage/docs/) URI to import flow from. The format of this URI must be `gs:///`.
         */
        flowUri?: string | null;
        /**
         * Flow import mode. If not specified, `KEEP` is assumed.
         */
        importOption?: string | null;
    }
    /**
     * The response message for Flows.ImportFlow.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1ImportFlowResponse {
        /**
         * The unique identifier of the new flow. Format: `projects//locations//agents//flows/`.
         */
        flow?: string | null;
    }
    /**
     * Metadata returned for the TestCases.ImportTestCases long running operation.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1ImportTestCasesMetadata {
        /**
         * Errors for failed test cases.
         */
        errors?: Schema$GoogleCloudDialogflowCxV3beta1TestCaseError[];
    }
    /**
     * The request message for TestCases.ImportTestCases.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1ImportTestCasesRequest {
        /**
         * Uncompressed raw byte content for test cases.
         */
        content?: string | null;
        /**
         * The [Google Cloud Storage](https://cloud.google.com/storage/docs/) URI to import test cases from. The format of this URI must be `gs:///`.
         */
        gcsUri?: string | null;
    }
    /**
     * The response message for TestCases.ImportTestCases.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1ImportTestCasesResponse {
        /**
         * The unique identifiers of the new test cases. Format: `projects//locations//agents//testCases/`.
         */
        names?: string[] | null;
    }
    /**
     * Instructs the speech recognizer on how to process the audio content.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1InputAudioConfig {
        /**
         * Required. Audio encoding of the audio content to process.
         */
        audioEncoding?: string | null;
        /**
         * Optional. If `true`, Dialogflow returns SpeechWordInfo in StreamingRecognitionResult with information about the recognized speech words, e.g. start and end time offsets. If false or unspecified, Speech doesn't return any word-level information.
         */
        enableWordInfo?: boolean | null;
        /**
         * Optional. Which Speech model to select for the given request. Select the model best suited to your domain to get best results. If a model is not explicitly specified, then we auto-select a model based on the parameters in the InputAudioConfig. If enhanced speech model is enabled for the agent and an enhanced version of the specified model for the language does not exist, then the speech is recognized using the standard version of the specified model. Refer to [Cloud Speech API documentation](https://cloud.google.com/speech-to-text/docs/basics#select-model) for more details.
         */
        model?: string | null;
        /**
         * Optional. Which variant of the Speech model to use.
         */
        modelVariant?: string | null;
        /**
         * Optional. A list of strings containing words and phrases that the speech recognizer should recognize with higher likelihood. See [the Cloud Speech documentation](https://cloud.google.com/speech-to-text/docs/basics#phrase-hints) for more details.
         */
        phraseHints?: string[] | null;
        /**
         * Sample rate (in Hertz) of the audio content sent in the query. Refer to [Cloud Speech API documentation](https://cloud.google.com/speech-to-text/docs/basics) for more details.
         */
        sampleRateHertz?: number | null;
        /**
         * Optional. If `false` (default), recognition does not cease until the client closes the stream. If `true`, the recognizer will detect a single spoken utterance in input audio. Recognition ceases when it detects the audio's voice has stopped or paused. In this case, once a detected intent is received, the client should close the stream and start a new request with a new stream as needed. Note: This setting is relevant only for streaming methods.
         */
        singleUtterance?: boolean | null;
    }
    /**
     * An intent represents a user's intent to interact with a conversational agent. You can provide information for the Dialogflow API to use to match user input to an intent by adding training phrases (i.e., examples of user input) to your intent.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1Intent {
        /**
         * Human readable description for better understanding an intent like its scope, content, result etc. Maximum character limit: 140 characters.
         */
        description?: string | null;
        /**
         * Required. The human-readable name of the intent, unique within the agent.
         */
        displayName?: string | null;
        /**
         * Indicates whether this is a fallback intent. Currently only default fallback intent is allowed in the agent, which is added upon agent creation. Adding training phrases to fallback intent is useful in the case of requests that are mistakenly matched, since training phrases assigned to fallback intents act as negative examples that triggers no-match event.
         */
        isFallback?: boolean | null;
        /**
         * The key/value metadata to label an intent. Labels can contain lowercase letters, digits and the symbols '-' and '_'. International characters are allowed, including letters from unicase alphabets. Keys must start with a letter. Keys and values can be no longer than 63 characters and no more than 128 bytes. Prefix "sys-" is reserved for Dialogflow defined labels. Currently allowed Dialogflow defined labels include: * sys-head * sys-contextual The above labels do not require value. "sys-head" means the intent is a head intent. "sys-contextual" means the intent is a contextual intent.
         */
        labels?: {
            [key: string]: string;
        } | null;
        /**
         * The unique identifier of the intent. Required for the Intents.UpdateIntent method. Intents.CreateIntent populates the name automatically. Format: `projects//locations//agents//intents/`.
         */
        name?: string | null;
        /**
         * The collection of parameters associated with the intent.
         */
        parameters?: Schema$GoogleCloudDialogflowCxV3beta1IntentParameter[];
        /**
         * The priority of this intent. Higher numbers represent higher priorities. - If the supplied value is unspecified or 0, the service translates the value to 500,000, which corresponds to the `Normal` priority in the console. - If the supplied value is negative, the intent is ignored in runtime detect intent requests.
         */
        priority?: number | null;
        /**
         * The collection of training phrases the agent is trained on to identify the intent.
         */
        trainingPhrases?: Schema$GoogleCloudDialogflowCxV3beta1IntentTrainingPhrase[];
    }
    /**
     * Intent coverage represents the percentage of all possible intents in the agent that are triggered in any of a parent's test cases.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1IntentCoverage {
        /**
         * The percent of intents in the agent that are covered.
         */
        coverageScore?: number | null;
        /**
         * The list of Intents present in the agent
         */
        intents?: Schema$GoogleCloudDialogflowCxV3beta1IntentCoverageIntent[];
    }
    /**
     * The agent's intent.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1IntentCoverageIntent {
        /**
         * Whether or not the intent is covered by at least one of the agent's test cases.
         */
        covered?: boolean | null;
        /**
         * The intent full resource name
         */
        intent?: string | null;
    }
    /**
     * Represents the intent to trigger programmatically rather than as a result of natural language processing.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1IntentInput {
        /**
         * Required. The unique identifier of the intent. Format: `projects//locations//agents//intents/`.
         */
        intent?: string | null;
    }
    /**
     * Represents an intent parameter.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1IntentParameter {
        /**
         * Required. The entity type of the parameter. Format: `projects/-/locations/-/agents/-/entityTypes/` for system entity types (for example, `projects/-/locations/-/agents/-/entityTypes/sys.date`), or `projects//locations//agents//entityTypes/` for developer entity types.
         */
        entityType?: string | null;
        /**
         * Required. The unique identifier of the parameter. This field is used by training phrases to annotate their parts.
         */
        id?: string | null;
        /**
         * Indicates whether the parameter represents a list of values.
         */
        isList?: boolean | null;
        /**
         * Indicates whether the parameter content should be redacted in log. If redaction is enabled, the parameter content will be replaced by parameter name during logging. Note: the parameter content is subject to redaction if either parameter level redaction or entity type level redaction is enabled.
         */
        redact?: boolean | null;
    }
    /**
     * Represents an example that the agent is trained on to identify the intent.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1IntentTrainingPhrase {
        /**
         * Output only. The unique identifier of the training phrase.
         */
        id?: string | null;
        /**
         * Required. The ordered list of training phrase parts. The parts are concatenated in order to form the training phrase. Note: The API does not automatically annotate training phrases like the Dialogflow Console does. Note: Do not forget to include whitespace at part boundaries, so the training phrase is well formatted when the parts are concatenated. If the training phrase does not need to be annotated with parameters, you just need a single part with only the Part.text field set. If you want to annotate the training phrase, you must create multiple parts, where the fields of each part are populated in one of two ways: - `Part.text` is set to a part of the phrase that has no parameters. - `Part.text` is set to a part of the phrase that you want to annotate, and the `parameter_id` field is set.
         */
        parts?: Schema$GoogleCloudDialogflowCxV3beta1IntentTrainingPhrasePart[];
        /**
         * Indicates how many times this example was added to the intent.
         */
        repeatCount?: number | null;
    }
    /**
     * Represents a part of a training phrase.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1IntentTrainingPhrasePart {
        /**
         * The parameter used to annotate this part of the training phrase. This field is required for annotated parts of the training phrase.
         */
        parameterId?: string | null;
        /**
         * Required. The text for this part.
         */
        text?: string | null;
    }
    /**
     * The response message for Agents.ListAgents.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1ListAgentsResponse {
        /**
         * The list of agents. There will be a maximum number of items returned based on the page_size field in the request.
         */
        agents?: Schema$GoogleCloudDialogflowCxV3beta1Agent[];
        /**
         * Token to retrieve the next page of results, or empty if there are no more results in the list.
         */
        nextPageToken?: string | null;
    }
    /**
     * The response message for Changelogs.ListChangelogs.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1ListChangelogsResponse {
        /**
         * The list of changelogs. There will be a maximum number of items returned based on the page_size field in the request. The changelogs will be ordered by timestamp.
         */
        changelogs?: Schema$GoogleCloudDialogflowCxV3beta1Changelog[];
        /**
         * Token to retrieve the next page of results, or empty if there are no more results in the list.
         */
        nextPageToken?: string | null;
    }
    /**
     * The response message for Environments.ListTestCaseResults.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1ListContinuousTestResultsResponse {
        /**
         * The list of continuous test results.
         */
        continuousTestResults?: Schema$GoogleCloudDialogflowCxV3beta1ContinuousTestResult[];
        /**
         * Token to retrieve the next page of results, or empty if there are no more results in the list.
         */
        nextPageToken?: string | null;
    }
    /**
     * The response message for Deployments.ListDeployments.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1ListDeploymentsResponse {
        /**
         * The list of deployments. There will be a maximum number of items returned based on the page_size field in the request. The list may in some cases be empty or contain fewer entries than page_size even if this isn't the last page.
         */
        deployments?: Schema$GoogleCloudDialogflowCxV3beta1Deployment[];
        /**
         * Token to retrieve the next page of results, or empty if there are no more results in the list.
         */
        nextPageToken?: string | null;
    }
    /**
     * The response message for EntityTypes.ListEntityTypes.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1ListEntityTypesResponse {
        /**
         * The list of entity types. There will be a maximum number of items returned based on the page_size field in the request.
         */
        entityTypes?: Schema$GoogleCloudDialogflowCxV3beta1EntityType[];
        /**
         * Token to retrieve the next page of results, or empty if there are no more results in the list.
         */
        nextPageToken?: string | null;
    }
    /**
     * The response message for Environments.ListEnvironments.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1ListEnvironmentsResponse {
        /**
         * The list of environments. There will be a maximum number of items returned based on the page_size field in the request. The list may in some cases be empty or contain fewer entries than page_size even if this isn't the last page.
         */
        environments?: Schema$GoogleCloudDialogflowCxV3beta1Environment[];
        /**
         * Token to retrieve the next page of results, or empty if there are no more results in the list.
         */
        nextPageToken?: string | null;
    }
    /**
     * The response message for Experiments.ListExperiments.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1ListExperimentsResponse {
        /**
         * The list of experiments. There will be a maximum number of items returned based on the page_size field in the request. The list may in some cases be empty or contain fewer entries than page_size even if this isn't the last page.
         */
        experiments?: Schema$GoogleCloudDialogflowCxV3beta1Experiment[];
        /**
         * Token to retrieve the next page of results, or empty if there are no more results in the list.
         */
        nextPageToken?: string | null;
    }
    /**
     * The response message for Flows.ListFlows.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1ListFlowsResponse {
        /**
         * The list of flows. There will be a maximum number of items returned based on the page_size field in the request.
         */
        flows?: Schema$GoogleCloudDialogflowCxV3beta1Flow[];
        /**
         * Token to retrieve the next page of results, or empty if there are no more results in the list.
         */
        nextPageToken?: string | null;
    }
    /**
     * The response message for Intents.ListIntents.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1ListIntentsResponse {
        /**
         * The list of intents. There will be a maximum number of items returned based on the page_size field in the request.
         */
        intents?: Schema$GoogleCloudDialogflowCxV3beta1Intent[];
        /**
         * Token to retrieve the next page of results, or empty if there are no more results in the list.
         */
        nextPageToken?: string | null;
    }
    /**
     * The response message for Pages.ListPages.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1ListPagesResponse {
        /**
         * Token to retrieve the next page of results, or empty if there are no more results in the list.
         */
        nextPageToken?: string | null;
        /**
         * The list of pages. There will be a maximum number of items returned based on the page_size field in the request.
         */
        pages?: Schema$GoogleCloudDialogflowCxV3beta1Page[];
    }
    /**
     * The response message for SecuritySettings.ListSecuritySettings.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1ListSecuritySettingsResponse {
        /**
         * Token to retrieve the next page of results, or empty if there are no more results in the list.
         */
        nextPageToken?: string | null;
        /**
         * The list of security settings.
         */
        securitySettings?: Schema$GoogleCloudDialogflowCxV3beta1SecuritySettings[];
    }
    /**
     * The response message for SessionEntityTypes.ListSessionEntityTypes.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1ListSessionEntityTypesResponse {
        /**
         * Token to retrieve the next page of results, or empty if there are no more results in the list.
         */
        nextPageToken?: string | null;
        /**
         * The list of session entity types. There will be a maximum number of items returned based on the page_size field in the request.
         */
        sessionEntityTypes?: Schema$GoogleCloudDialogflowCxV3beta1SessionEntityType[];
    }
    /**
     * The response message for TestCases.ListTestCaseResults.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1ListTestCaseResultsResponse {
        /**
         * Token to retrieve the next page of results, or empty if there are no more results in the list.
         */
        nextPageToken?: string | null;
        /**
         * The list of test case results.
         */
        testCaseResults?: Schema$GoogleCloudDialogflowCxV3beta1TestCaseResult[];
    }
    /**
     * The response message for TestCases.ListTestCases.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1ListTestCasesResponse {
        /**
         * Token to retrieve the next page of results, or empty if there are no more results in the list.
         */
        nextPageToken?: string | null;
        /**
         * The list of test cases. There will be a maximum number of items returned based on the page_size field in the request.
         */
        testCases?: Schema$GoogleCloudDialogflowCxV3beta1TestCase[];
    }
    /**
     * The response message for TransitionRouteGroups.ListTransitionRouteGroups.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1ListTransitionRouteGroupsResponse {
        /**
         * Token to retrieve the next page of results, or empty if there are no more results in the list.
         */
        nextPageToken?: string | null;
        /**
         * The list of transition route groups. There will be a maximum number of items returned based on the page_size field in the request. The list may in some cases be empty or contain fewer entries than page_size even if this isn't the last page.
         */
        transitionRouteGroups?: Schema$GoogleCloudDialogflowCxV3beta1TransitionRouteGroup[];
    }
    /**
     * The response message for Versions.ListVersions.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1ListVersionsResponse {
        /**
         * Token to retrieve the next page of results, or empty if there are no more results in the list.
         */
        nextPageToken?: string | null;
        /**
         * A list of versions. There will be a maximum number of items returned based on the page_size field in the request. The list may in some cases be empty or contain fewer entries than page_size even if this isn't the last page.
         */
        versions?: Schema$GoogleCloudDialogflowCxV3beta1Version[];
    }
    /**
     * The response message for Webhooks.ListWebhooks.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1ListWebhooksResponse {
        /**
         * Token to retrieve the next page of results, or empty if there are no more results in the list.
         */
        nextPageToken?: string | null;
        /**
         * The list of webhooks. There will be a maximum number of items returned based on the page_size field in the request.
         */
        webhooks?: Schema$GoogleCloudDialogflowCxV3beta1Webhook[];
    }
    /**
     * The request message for Versions.LoadVersion.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1LoadVersionRequest {
        /**
         * This field is used to prevent accidental overwrite of other agent resources, which can potentially impact other flow's behavior. If `allow_override_agent_resources` is false, conflicted agent-level resources will not be overridden (i.e. intents, entities, webhooks).
         */
        allowOverrideAgentResources?: boolean | null;
    }
    /**
     * The response message for Environments.LookupEnvironmentHistory.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1LookupEnvironmentHistoryResponse {
        /**
         * Represents a list of snapshots for an environment. Time of the snapshots is stored in `update_time`.
         */
        environments?: Schema$GoogleCloudDialogflowCxV3beta1Environment[];
        /**
         * Token to retrieve the next page of results, or empty if there are no more results in the list.
         */
        nextPageToken?: string | null;
    }
    /**
     * Represents one match result of MatchIntent.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1Match {
        /**
         * The confidence of this match. Values range from 0.0 (completely uncertain) to 1.0 (completely certain). This value is for informational purpose only and is only used to help match the best intent within the classification threshold. This value may change for the same end-user expression at any time due to a model retraining or change in implementation.
         */
        confidence?: number | null;
        /**
         * The event that matched the query. Only filled for `EVENT` match type.
         */
        event?: string | null;
        /**
         * The Intent that matched the query. Some, not all fields are filled in this message, including but not limited to: `name` and `display_name`. Only filled for `INTENT` match type.
         */
        intent?: Schema$GoogleCloudDialogflowCxV3beta1Intent;
        /**
         * Type of this Match.
         */
        matchType?: string | null;
        /**
         * The collection of parameters extracted from the query. Depending on your protocol or client library language, this is a map, associative array, symbol table, dictionary, or JSON object composed of a collection of (MapKey, MapValue) pairs: - MapKey type: string - MapKey value: parameter name - MapValue type: - If parameter's entity type is a composite entity: map - Else: depending on parameter value type, could be one of string, number, boolean, null, list or map - MapValue value: - If parameter's entity type is a composite entity: map from composite entity property names to property values - Else: parameter value
         */
        parameters?: {
            [key: string]: any;
        } | null;
        /**
         * Final text input which was matched during MatchIntent. This value can be different from original input sent in request because of spelling correction or other processing.
         */
        resolvedInput?: string | null;
    }
    /**
     * Request of MatchIntent.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1MatchIntentRequest {
        /**
         * Required. The input specification.
         */
        queryInput?: Schema$GoogleCloudDialogflowCxV3beta1QueryInput;
        /**
         * The parameters of this query.
         */
        queryParams?: Schema$GoogleCloudDialogflowCxV3beta1QueryParameters;
    }
    /**
     * Response of MatchIntent.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1MatchIntentResponse {
        /**
         * The current Page. Some, not all fields are filled in this message, including but not limited to `name` and `display_name`.
         */
        currentPage?: Schema$GoogleCloudDialogflowCxV3beta1Page;
        /**
         * Match results, if more than one, ordered descendingly by the confidence we have that the particular intent matches the query.
         */
        matches?: Schema$GoogleCloudDialogflowCxV3beta1Match[];
        /**
         * If natural language text was provided as input, this field will contain a copy of the text.
         */
        text?: string | null;
        /**
         * If natural language speech audio was provided as input, this field will contain the transcript for the audio.
         */
        transcript?: string | null;
        /**
         * If an event was provided as input, this field will contain a copy of the event name.
         */
        triggerEvent?: string | null;
        /**
         * If an intent was provided as input, this field will contain a copy of the intent identifier. Format: `projects//locations//agents//intents/`.
         */
        triggerIntent?: string | null;
    }
    /**
     * Settings related to NLU.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1NluSettings {
        /**
         * To filter out false positive results and still get variety in matched natural language inputs for your agent, you can tune the machine learning classification threshold. If the returned score value is less than the threshold value, then a no-match event will be triggered. The score values range from 0.0 (completely uncertain) to 1.0 (completely certain). If set to 0.0, the default of 0.3 is used.
         */
        classificationThreshold?: number | null;
        /**
         * Indicates NLU model training mode.
         */
        modelTrainingMode?: string | null;
        /**
         * Indicates the type of NLU model.
         */
        modelType?: string | null;
    }
    /**
     * Instructs the speech synthesizer how to generate the output audio content.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1OutputAudioConfig {
        /**
         * Required. Audio encoding of the synthesized audio content.
         */
        audioEncoding?: string | null;
        /**
         * Optional. The synthesis sample rate (in hertz) for this audio. If not provided, then the synthesizer will use the default sample rate based on the audio encoding. If this is different from the voice's natural sample rate, then the synthesizer will honor this request by converting to the desired sample rate (which might result in worse audio quality).
         */
        sampleRateHertz?: number | null;
        /**
         * Optional. Configuration of how speech should be synthesized.
         */
        synthesizeSpeechConfig?: Schema$GoogleCloudDialogflowCxV3beta1SynthesizeSpeechConfig;
    }
    /**
     * A Dialogflow CX conversation (session) can be described and visualized as a state machine. The states of a CX session are represented by pages. For each flow, you define many pages, where your combined pages can handle a complete conversation on the topics the flow is designed for. At any given moment, exactly one page is the current page, the current page is considered active, and the flow associated with that page is considered active. Every flow has a special start page. When a flow initially becomes active, the start page page becomes the current page. For each conversational turn, the current page will either stay the same or transition to another page. You configure each page to collect information from the end-user that is relevant for the conversational state represented by the page. For more information, see the [Page guide](https://cloud.google.com/dialogflow/cx/docs/concept/page).
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1Page {
        /**
         * Required. The human-readable name of the page, unique within the agent.
         */
        displayName?: string | null;
        /**
         * The fulfillment to call when the session is entering the page.
         */
        entryFulfillment?: Schema$GoogleCloudDialogflowCxV3beta1Fulfillment;
        /**
         * Handlers associated with the page to handle events such as webhook errors, no match or no input.
         */
        eventHandlers?: Schema$GoogleCloudDialogflowCxV3beta1EventHandler[];
        /**
         * The form associated with the page, used for collecting parameters relevant to the page.
         */
        form?: Schema$GoogleCloudDialogflowCxV3beta1Form;
        /**
         * The unique identifier of the page. Required for the Pages.UpdatePage method. Pages.CreatePage populates the name automatically. Format: `projects//locations//agents//flows//pages/`.
         */
        name?: string | null;
        /**
         * Ordered list of `TransitionRouteGroups` associated with the page. Transition route groups must be unique within a page. * If multiple transition routes within a page scope refer to the same intent, then the precedence order is: page's transition route -\> page's transition route group -\> flow's transition routes. * If multiple transition route groups within a page contain the same intent, then the first group in the ordered list takes precedence. Format:`projects//locations//agents//flows//transitionRouteGroups/`.
         */
        transitionRouteGroups?: string[] | null;
        /**
         * A list of transitions for the transition rules of this page. They route the conversation to another page in the same flow, or another flow. When we are in a certain page, the TransitionRoutes are evalauted in the following order: * TransitionRoutes defined in the page with intent specified. * TransitionRoutes defined in the transition route groups with intent specified. * TransitionRoutes defined in flow with intent specified. * TransitionRoutes defined in the transition route groups with intent specified. * TransitionRoutes defined in the page with only condition specified. * TransitionRoutes defined in the transition route groups with only condition specified.
         */
        transitionRoutes?: Schema$GoogleCloudDialogflowCxV3beta1TransitionRoute[];
    }
    /**
     * Represents page information communicated to and from the webhook.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1PageInfo {
        /**
         * Always present for WebhookRequest. Ignored for WebhookResponse. The unique identifier of the current page. Format: `projects//locations//agents//flows//pages/`.
         */
        currentPage?: string | null;
        /**
         * Optional for both WebhookRequest and WebhookResponse. Information about the form.
         */
        formInfo?: Schema$GoogleCloudDialogflowCxV3beta1PageInfoFormInfo;
    }
    /**
     * Represents form information.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1PageInfoFormInfo {
        /**
         * Optional for both WebhookRequest and WebhookResponse. The parameters contained in the form. Note that the webhook cannot add or remove any form parameter.
         */
        parameterInfo?: Schema$GoogleCloudDialogflowCxV3beta1PageInfoFormInfoParameterInfo[];
    }
    /**
     * Represents parameter information.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1PageInfoFormInfoParameterInfo {
        /**
         * Always present for WebhookRequest. Required for WebhookResponse. The human-readable name of the parameter, unique within the form. This field cannot be modified by the webhook.
         */
        displayName?: string | null;
        /**
         * Optional for WebhookRequest. Ignored for WebhookResponse. Indicates if the parameter value was just collected on the last conversation turn.
         */
        justCollected?: boolean | null;
        /**
         * Optional for both WebhookRequest and WebhookResponse. Indicates whether the parameter is required. Optional parameters will not trigger prompts; however, they are filled if the user specifies them. Required parameters must be filled before form filling concludes.
         */
        required?: boolean | null;
        /**
         * Always present for WebhookRequest. Required for WebhookResponse. The state of the parameter. This field can be set to INVALID by the webhook to invalidate the parameter; other values set by the webhook will be ignored.
         */
        state?: string | null;
        /**
         * Optional for both WebhookRequest and WebhookResponse. The value of the parameter. This field can be set by the webhook to change the parameter value.
         */
        value?: any | null;
    }
    /**
     * Represents the query input. It can contain one of: 1. A conversational query in the form of text. 2. An intent query that specifies which intent to trigger. 3. Natural language speech audio to be processed. 4. An event to be triggered.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1QueryInput {
        /**
         * The natural language speech audio to be processed.
         */
        audio?: Schema$GoogleCloudDialogflowCxV3beta1AudioInput;
        /**
         * The DTMF event to be handled.
         */
        dtmf?: Schema$GoogleCloudDialogflowCxV3beta1DtmfInput;
        /**
         * The event to be triggered.
         */
        event?: Schema$GoogleCloudDialogflowCxV3beta1EventInput;
        /**
         * The intent to be triggered.
         */
        intent?: Schema$GoogleCloudDialogflowCxV3beta1IntentInput;
        /**
         * Required. The language of the input. See [Language Support](https://cloud.google.com/dialogflow/cx/docs/reference/language) for a list of the currently supported language codes. Note that queries in the same session do not necessarily need to specify the same language.
         */
        languageCode?: string | null;
        /**
         * The natural language text to be processed.
         */
        text?: Schema$GoogleCloudDialogflowCxV3beta1TextInput;
    }
    /**
     * Represents the parameters of a conversational query.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1QueryParameters {
        /**
         * Configures whether sentiment analysis should be performed. If not provided, sentiment analysis is not performed.
         */
        analyzeQueryTextSentiment?: boolean | null;
        /**
         * The unique identifier of the page to override the current page in the session. Format: `projects//locations//agents//flows//pages/`. If `current_page` is specified, the previous state of the session will be ignored by Dialogflow, including the previous page and the previous session parameters. In most cases, current_page and parameters should be configured together to direct a session to a specific state.
         */
        currentPage?: string | null;
        /**
         * Whether to disable webhook calls for this request.
         */
        disableWebhook?: boolean | null;
        /**
         * A list of flow versions to override for the request. Format: `projects//locations//agents//flows//versions/`. If version 1 of flow X is included in this list, the traffic of flow X will go through version 1 regardless of the version configuration in the environment. Each flow can have at most one version specified in this list.
         */
        flowVersions?: string[] | null;
        /**
         * The geo location of this conversational query.
         */
        geoLocation?: Schema$GoogleTypeLatLng;
        /**
         * Additional parameters to be put into session parameters. To remove a parameter from the session, clients should explicitly set the parameter value to null. You can reference the session parameters in the agent with the following format: $session.params.parameter-id. Depending on your protocol or client library language, this is a map, associative array, symbol table, dictionary, or JSON object composed of a collection of (MapKey, MapValue) pairs: - MapKey type: string - MapKey value: parameter name - MapValue type: - If parameter's entity type is a composite entity: map - Else: depending on parameter value type, could be one of string, number, boolean, null, list or map - MapValue value: - If parameter's entity type is a composite entity: map from composite entity property names to property values - Else: parameter value
         */
        parameters?: {
            [key: string]: any;
        } | null;
        /**
         * This field can be used to pass custom data into the webhook associated with the agent. Arbitrary JSON objects are supported. Some integrations that query a Dialogflow agent may provide additional information in the payload. In particular, for the Dialogflow Phone Gateway integration, this field has the form: ``` { "telephony": { "caller_id": "+18558363987" \} \} ```
         */
        payload?: {
            [key: string]: any;
        } | null;
        /**
         * Additional session entity types to replace or extend developer entity types with. The entity synonyms apply to all languages and persist for the session of this query.
         */
        sessionEntityTypes?: Schema$GoogleCloudDialogflowCxV3beta1SessionEntityType[];
        /**
         * The time zone of this conversational query from the [time zone database](https://www.iana.org/time-zones), e.g., America/New_York, Europe/Paris. If not provided, the time zone specified in the agent is used.
         */
        timeZone?: string | null;
        /**
         * This field can be used to pass HTTP headers for a webhook call. These headers will be sent to webhook along with the headers that have been configured through Dialogflow web console. The headers defined within this field will overwrite the headers configured through Dialogflow console if there is a conflict. Header names are case-insensitive. Google's specified headers are not allowed. Including: "Host", "Content-Length", "Connection", "From", "User-Agent", "Accept-Encoding", "If-Modified-Since", "If-None-Match", "X-Forwarded-For", etc.
         */
        webhookHeaders?: {
            [key: string]: string;
        } | null;
    }
    /**
     * Represents the result of a conversational query.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1QueryResult {
        /**
         * The current Page. Some, not all fields are filled in this message, including but not limited to `name` and `display_name`.
         */
        currentPage?: Schema$GoogleCloudDialogflowCxV3beta1Page;
        /**
         * The free-form diagnostic info. For example, this field could contain webhook call latency. The string keys of the Struct's fields map can change without notice.
         */
        diagnosticInfo?: {
            [key: string]: any;
        } | null;
        /**
         * If a DTMF was provided as input, this field will contain a copy of the DTMFInput.
         */
        dtmf?: Schema$GoogleCloudDialogflowCxV3beta1DtmfInput;
        /**
         * The Intent that matched the conversational query. Some, not all fields are filled in this message, including but not limited to: `name` and `display_name`. This field is deprecated, please use QueryResult.match instead.
         */
        intent?: Schema$GoogleCloudDialogflowCxV3beta1Intent;
        /**
         * The intent detection confidence. Values range from 0.0 (completely uncertain) to 1.0 (completely certain). This value is for informational purpose only and is only used to help match the best intent within the classification threshold. This value may change for the same end-user expression at any time due to a model retraining or change in implementation. This field is deprecated, please use QueryResult.match instead.
         */
        intentDetectionConfidence?: number | null;
        /**
         * The language that was triggered during intent detection. See [Language Support](https://cloud.google.com/dialogflow/cx/docs/reference/language) for a list of the currently supported language codes.
         */
        languageCode?: string | null;
        /**
         * Intent match result, could be an intent or an event.
         */
        match?: Schema$GoogleCloudDialogflowCxV3beta1Match;
        /**
         * The collected session parameters. Depending on your protocol or client library language, this is a map, associative array, symbol table, dictionary, or JSON object composed of a collection of (MapKey, MapValue) pairs: - MapKey type: string - MapKey value: parameter name - MapValue type: - If parameter's entity type is a composite entity: map - Else: depending on parameter value type, could be one of string, number, boolean, null, list or map - MapValue value: - If parameter's entity type is a composite entity: map from composite entity property names to property values - Else: parameter value
         */
        parameters?: {
            [key: string]: any;
        } | null;
        /**
         * The list of rich messages returned to the client. Responses vary from simple text messages to more sophisticated, structured payloads used to drive complex logic.
         */
        responseMessages?: Schema$GoogleCloudDialogflowCxV3beta1ResponseMessage[];
        /**
         * The sentiment analyss result, which depends on `analyze_query_text_sentiment`, specified in the request.
         */
        sentimentAnalysisResult?: Schema$GoogleCloudDialogflowCxV3beta1SentimentAnalysisResult;
        /**
         * If natural language text was provided as input, this field will contain a copy of the text.
         */
        text?: string | null;
        /**
         * If natural language speech audio was provided as input, this field will contain the transcript for the audio.
         */
        transcript?: string | null;
        /**
         * If an event was provided as input, this field will contain the name of the event.
         */
        triggerEvent?: string | null;
        /**
         * If an intent was provided as input, this field will contain a copy of the intent identifier. Format: `projects//locations//agents//intents/`.
         */
        triggerIntent?: string | null;
        /**
         * The list of webhook payload in WebhookResponse.payload, in the order of call sequence. If some webhook call fails or doesn't return any payload, an empty `Struct` would be used instead.
         */
        webhookPayloads?: Array<{
            [key: string]: any;
        }> | null;
        /**
         * The list of webhook call status in the order of call sequence.
         */
        webhookStatuses?: Schema$GoogleRpcStatus[];
    }
    /**
     * Metadata for ReloadDocument operation.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1ReloadDocumentOperationMetadata {
        /**
         * The generic information of the operation.
         */
        genericMetadata?: Schema$GoogleCloudDialogflowCxV3beta1GenericKnowledgeOperationMetadata;
    }
    /**
     * Resource name and display name.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1ResourceName {
        /**
         * Display name.
         */
        displayName?: string | null;
        /**
         * Name.
         */
        name?: string | null;
    }
    /**
     * Represents a response message that can be returned by a conversational agent. Response messages are also used for output audio synthesis. The approach is as follows: * If at least one OutputAudioText response is present, then all OutputAudioText responses are linearly concatenated, and the result is used for output audio synthesis. * If the OutputAudioText responses are a mixture of text and SSML, then the concatenated result is treated as SSML; otherwise, the result is treated as either text or SSML as appropriate. The agent designer should ideally use either text or SSML consistently throughout the bot design. * Otherwise, all Text responses are linearly concatenated, and the result is used for output audio synthesis. This approach allows for more sophisticated user experience scenarios, where the text displayed to the user may differ from what is heard.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1ResponseMessage {
        /**
         * Indicates that the conversation succeeded.
         */
        conversationSuccess?: Schema$GoogleCloudDialogflowCxV3beta1ResponseMessageConversationSuccess;
        /**
         * Output only. A signal that indicates the interaction with the Dialogflow agent has ended. This message is generated by Dialogflow only when the conversation reaches `END_SESSION` page. It is not supposed to be defined by the user. It's guaranteed that there is at most one such message in each response.
         */
        endInteraction?: Schema$GoogleCloudDialogflowCxV3beta1ResponseMessageEndInteraction;
        /**
         * Hands off conversation to a human agent.
         */
        liveAgentHandoff?: Schema$GoogleCloudDialogflowCxV3beta1ResponseMessageLiveAgentHandoff;
        /**
         * Output only. An audio response message composed of both the synthesized Dialogflow agent responses and responses defined via play_audio. This message is generated by Dialogflow only and not supposed to be defined by the user.
         */
        mixedAudio?: Schema$GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudio;
        /**
         * A text or ssml response that is preferentially used for TTS output audio synthesis, as described in the comment on the ResponseMessage message.
         */
        outputAudioText?: Schema$GoogleCloudDialogflowCxV3beta1ResponseMessageOutputAudioText;
        /**
         * Returns a response containing a custom, platform-specific payload.
         */
        payload?: {
            [key: string]: any;
        } | null;
        /**
         * Signal that the client should play an audio clip hosted at a client-specific URI. Dialogflow uses this to construct mixed_audio. However, Dialogflow itself does not try to read or process the URI in any way.
         */
        playAudio?: Schema$GoogleCloudDialogflowCxV3beta1ResponseMessagePlayAudio;
        /**
         * Returns a text response.
         */
        text?: Schema$GoogleCloudDialogflowCxV3beta1ResponseMessageText;
    }
    /**
     * Indicates that the conversation succeeded, i.e., the bot handled the issue that the customer talked to it about. Dialogflow only uses this to determine which conversations should be counted as successful and doesn't process the metadata in this message in any way. Note that Dialogflow also considers conversations that get to the conversation end page as successful even if they don't return ConversationSuccess. You may set this, for example: * In the entry_fulfillment of a Page if entering the page indicates that the conversation succeeded. * In a webhook response when you determine that you handled the customer issue.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1ResponseMessageConversationSuccess {
        /**
         * Custom metadata. Dialogflow doesn't impose any structure on this.
         */
        metadata?: {
            [key: string]: any;
        } | null;
    }
    /**
     * Indicates that interaction with the Dialogflow agent has ended. This message is generated by Dialogflow only and not supposed to be defined by the user.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1ResponseMessageEndInteraction {
    }
    /**
     * Indicates that the conversation should be handed off to a live agent. Dialogflow only uses this to determine which conversations were handed off to a human agent for measurement purposes. What else to do with this signal is up to you and your handoff procedures. You may set this, for example: * In the entry_fulfillment of a Page if entering the page indicates something went extremely wrong in the conversation. * In a webhook response when you determine that the customer issue can only be handled by a human.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1ResponseMessageLiveAgentHandoff {
        /**
         * Custom metadata for your handoff procedure. Dialogflow doesn't impose any structure on this.
         */
        metadata?: {
            [key: string]: any;
        } | null;
    }
    /**
     * Represents an audio message that is composed of both segments synthesized from the Dialogflow agent prompts and ones hosted externally at the specified URIs. The external URIs are specified via play_audio. This message is generated by Dialogflow only and not supposed to be defined by the user.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudio {
        /**
         * Segments this audio response is composed of.
         */
        segments?: Schema$GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudioSegment[];
    }
    /**
     * Represents one segment of audio.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudioSegment {
        /**
         * Output only. Whether the playback of this segment can be interrupted by the end user's speech and the client should then start the next Dialogflow request.
         */
        allowPlaybackInterruption?: boolean | null;
        /**
         * Raw audio synthesized from the Dialogflow agent's response using the output config specified in the request.
         */
        audio?: string | null;
        /**
         * Client-specific URI that points to an audio clip accessible to the client. Dialogflow does not impose any validation on it.
         */
        uri?: string | null;
    }
    /**
     * A text or ssml response that is preferentially used for TTS output audio synthesis, as described in the comment on the ResponseMessage message.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1ResponseMessageOutputAudioText {
        /**
         * Output only. Whether the playback of this message can be interrupted by the end user's speech and the client can then starts the next Dialogflow request.
         */
        allowPlaybackInterruption?: boolean | null;
        /**
         * The SSML text to be synthesized. For more information, see [SSML](/speech/text-to-speech/docs/ssml).
         */
        ssml?: string | null;
        /**
         * The raw text to be synthesized.
         */
        text?: string | null;
    }
    /**
     * Specifies an audio clip to be played by the client as part of the response.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1ResponseMessagePlayAudio {
        /**
         * Output only. Whether the playback of this message can be interrupted by the end user's speech and the client can then starts the next Dialogflow request.
         */
        allowPlaybackInterruption?: boolean | null;
        /**
         * Required. URI of the audio clip. Dialogflow does not impose any validation on this value. It is specific to the client that reads it.
         */
        audioUri?: string | null;
    }
    /**
     * The text response message.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1ResponseMessageText {
        /**
         * Output only. Whether the playback of this message can be interrupted by the end user's speech and the client can then starts the next Dialogflow request.
         */
        allowPlaybackInterruption?: boolean | null;
        /**
         * Required. A collection of text responses.
         */
        text?: string[] | null;
    }
    /**
     * The request message for Agents.RestoreAgent.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1RestoreAgentRequest {
        /**
         * Uncompressed raw byte content for agent.
         */
        agentContent?: string | null;
        /**
         * The [Google Cloud Storage](https://cloud.google.com/storage/docs/) URI to restore agent from. The format of this URI must be `gs:///`.
         */
        agentUri?: string | null;
        /**
         * Agent restore mode. If not specified, `KEEP` is assumed.
         */
        restoreOption?: string | null;
    }
    /**
     * The configuration for auto rollout.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1RolloutConfig {
        /**
         * The conditions that are used to evaluate the failure of a rollout step. If not specified, no rollout steps will fail. E.g. "containment_rate < 10% OR average_turn_count < 3". See the [conditions reference](https://cloud.google.com/dialogflow/cx/docs/reference/condition).
         */
        failureCondition?: string | null;
        /**
         * The conditions that are used to evaluate the success of a rollout step. If not specified, all rollout steps will proceed to the next one unless failure conditions are met. E.g. "containment_rate \> 60% AND callback_rate < 20%". See the [conditions reference](https://cloud.google.com/dialogflow/cx/docs/reference/condition).
         */
        rolloutCondition?: string | null;
        /**
         * Steps to roll out a flow version. Steps should be sorted by percentage in ascending order.
         */
        rolloutSteps?: Schema$GoogleCloudDialogflowCxV3beta1RolloutConfigRolloutStep[];
    }
    /**
     * A single rollout step with specified traffic allocation.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1RolloutConfigRolloutStep {
        /**
         * The name of the rollout step;
         */
        displayName?: string | null;
        /**
         * The minimum time that this step should last. Should be longer than 1 hour. If not set, the default minimum duration for each step will be 1 hour.
         */
        minDuration?: string | null;
        /**
         * The percentage of traffic allocated to the flow version of this rollout step. (0%, 100%].
         */
        trafficPercent?: number | null;
    }
    /**
     * State of the auto-rollout process.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1RolloutState {
        /**
         * Start time of the current step.
         */
        startTime?: string | null;
        /**
         * Display name of the current auto rollout step.
         */
        step?: string | null;
        /**
         * Index of the current step in the auto rollout steps list.
         */
        stepIndex?: number | null;
    }
    /**
     * Metadata returned for the Environments.RunContinuousTest long running operation.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1RunContinuousTestMetadata {
        /**
         * The test errors.
         */
        errors?: Schema$GoogleCloudDialogflowCxV3beta1TestError[];
    }
    /**
     * The request message for Environments.RunContinuousTest.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1RunContinuousTestRequest {
    }
    /**
     * The response message for Environments.RunContinuousTest.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1RunContinuousTestResponse {
        /**
         * The result for a continuous test run.
         */
        continuousTestResult?: Schema$GoogleCloudDialogflowCxV3beta1ContinuousTestResult;
    }
    /**
     * Metadata returned for the TestCases.RunTestCase long running operation. This message currently has no fields.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1RunTestCaseMetadata {
    }
    /**
     * The request message for TestCases.RunTestCase.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1RunTestCaseRequest {
        /**
         * Optional. Environment name. If not set, draft environment is assumed. Format: `projects//locations//agents//environments/`.
         */
        environment?: string | null;
    }
    /**
     * The response message for TestCases.RunTestCase.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1RunTestCaseResponse {
        /**
         * The result.
         */
        result?: Schema$GoogleCloudDialogflowCxV3beta1TestCaseResult;
    }
    /**
     * Represents the settings related to security issues, such as data redaction and data retention. It may take hours for updates on the settings to propagate to all the related components and take effect.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1SecuritySettings {
        /**
         * [DLP](https://cloud.google.com/dlp/docs) deidentify template name. Use this template to define de-identification configuration for the content. The `DLP De-identify Templates Reader` role is needed on the Dialogflow service identity service account (has the form `service-PROJECT_NUMBER@gcp-sa-dialogflow.iam.gserviceaccount.com`) for your agent's project. If empty, Dialogflow replaces sensitive info with `[redacted]` text. The template name will have one of the following formats: `projects//locations//deidentifyTemplates/` OR `organizations//locations//deidentifyTemplates/` Note: `deidentify_template` must be located in the same region as the `SecuritySettings`.
         */
        deidentifyTemplate?: string | null;
        /**
         * Required. The human-readable name of the security settings, unique within the location.
         */
        displayName?: string | null;
        /**
         * Controls conversation exporting settings to Insights after conversation is completed. If retention_strategy is set to REMOVE_AFTER_CONVERSATION, Insights export is disabled no matter what you configure here.
         */
        insightsExportSettings?: Schema$GoogleCloudDialogflowCxV3beta1SecuritySettingsInsightsExportSettings;
        /**
         * [DLP](https://cloud.google.com/dlp/docs) inspect template name. Use this template to define inspect base settings. The `DLP Inspect Templates Reader` role is needed on the Dialogflow service identity service account (has the form `service-PROJECT_NUMBER@gcp-sa-dialogflow.iam.gserviceaccount.com`) for your agent's project. If empty, we use the default DLP inspect config. The template name will have one of the following formats: `projects//locations//inspectTemplates/` OR `organizations//locations//inspectTemplates/` Note: `inspect_template` must be located in the same region as the `SecuritySettings`.
         */
        inspectTemplate?: string | null;
        /**
         * Resource name of the settings. Required for the SecuritySettingsService.UpdateSecuritySettings method. SecuritySettingsService.CreateSecuritySettings populates the name automatically. Format: `projects//locations//securitySettings/`.
         */
        name?: string | null;
        /**
         * List of types of data to remove when retention settings triggers purge.
         */
        purgeDataTypes?: string[] | null;
        /**
         * Defines the data for which Dialogflow applies redaction. Dialogflow does not redact data that it does not have access to – for example, Cloud logging.
         */
        redactionScope?: string | null;
        /**
         * Strategy that defines how we do redaction.
         */
        redactionStrategy?: string | null;
        /**
         * Retains data in interaction logging for the specified number of days. This does not apply to Cloud logging, which is owned by the user - not Dialogflow. User must set a value lower than Dialogflow's default 365d TTL. Setting a value higher than that has no effect. A missing value or setting to 0 also means we use Dialogflow's default TTL. Note: Interaction logging is a limited access feature. Talk to your Google representative to check availability for you.
         */
        retentionWindowDays?: number | null;
    }
    /**
     * Settings for exporting conversations to [Insights](https://cloud.google.com/dialogflow/priv/docs/insights).
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1SecuritySettingsInsightsExportSettings {
        /**
         * If enabled, we will automatically exports conversations to Insights and Insights runs its analyzers.
         */
        enableInsightsExport?: boolean | null;
    }
    /**
     * The result of sentiment analysis. Sentiment analysis inspects user input and identifies the prevailing subjective opinion, especially to determine a user's attitude as positive, negative, or neutral.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1SentimentAnalysisResult {
        /**
         * A non-negative number in the [0, +inf) range, which represents the absolute magnitude of sentiment, regardless of score (positive or negative).
         */
        magnitude?: number | null;
        /**
         * Sentiment score between -1.0 (negative sentiment) and 1.0 (positive sentiment).
         */
        score?: number | null;
    }
    /**
     * Session entity types are referred to as **User** entity types and are entities that are built for an individual user such as favorites, preferences, playlists, and so on. You can redefine a session entity type at the session level to extend or replace a custom entity type at the user session level (we refer to the entity types defined at the agent level as "custom entity types"). Note: session entity types apply to all queries, regardless of the language. For more information about entity types, see the [Dialogflow documentation](https://cloud.google.com/dialogflow/docs/entities-overview).
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1SessionEntityType {
        /**
         * Required. The collection of entities to override or supplement the custom entity type.
         */
        entities?: Schema$GoogleCloudDialogflowCxV3beta1EntityTypeEntity[];
        /**
         * Required. Indicates whether the additional data should override or supplement the custom entity type definition.
         */
        entityOverrideMode?: string | null;
        /**
         * Required. The unique identifier of the session entity type. Format: `projects//locations//agents//sessions//entityTypes/` or `projects//locations//agents//environments//sessions//entityTypes/`. If `Environment ID` is not specified, we assume default 'draft' environment.
         */
        name?: string | null;
    }
    /**
     * Represents session information communicated to and from the webhook.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1SessionInfo {
        /**
         * Optional for WebhookRequest. Optional for WebhookResponse. All parameters collected from forms and intents during the session. Parameters can be created, updated, or removed by the webhook. To remove a parameter from the session, the webhook should explicitly set the parameter value to null in WebhookResponse. The map is keyed by parameters' display names.
         */
        parameters?: {
            [key: string]: any;
        } | null;
        /**
         * Always present for WebhookRequest. Ignored for WebhookResponse. The unique identifier of the session. This field can be used by the webhook to identify a session. Format: `projects//locations//agents//sessions/` or `projects//locations//agents//environments//sessions/` if environment is specified.
         */
        session?: string | null;
    }
    /**
     * Settings related to speech recognition.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1SpeechToTextSettings {
        /**
         * Whether to use speech adaptation for speech recognition.
         */
        enableSpeechAdaptation?: boolean | null;
    }
    /**
     * The request message for Experiments.StartExperiment.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1StartExperimentRequest {
    }
    /**
     * The request message for Experiments.StopExperiment.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1StopExperimentRequest {
    }
    /**
     * Configuration of how speech should be synthesized.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1SynthesizeSpeechConfig {
        /**
         * Optional. An identifier which selects 'audio effects' profiles that are applied on (post synthesized) text to speech. Effects are applied on top of each other in the order they are given.
         */
        effectsProfileId?: string[] | null;
        /**
         * Optional. Speaking pitch, in the range [-20.0, 20.0]. 20 means increase 20 semitones from the original pitch. -20 means decrease 20 semitones from the original pitch.
         */
        pitch?: number | null;
        /**
         * Optional. Speaking rate/speed, in the range [0.25, 4.0]. 1.0 is the normal native speed supported by the specific voice. 2.0 is twice as fast, and 0.5 is half as fast. If unset(0.0), defaults to the native 1.0 speed. Any other values < 0.25 or \> 4.0 will return an error.
         */
        speakingRate?: number | null;
        /**
         * Optional. The desired voice of the synthesized audio.
         */
        voice?: Schema$GoogleCloudDialogflowCxV3beta1VoiceSelectionParams;
        /**
         * Optional. Volume gain (in dB) of the normal native volume supported by the specific voice, in the range [-96.0, 16.0]. If unset, or set to a value of 0.0 (dB), will play at normal native signal amplitude. A value of -6.0 (dB) will play at approximately half the amplitude of the normal native signal amplitude. A value of +6.0 (dB) will play at approximately twice the amplitude of the normal native signal amplitude. We strongly recommend not to exceed +10 (dB) as there's usually no effective increase in loudness for any value greater than that.
         */
        volumeGainDb?: number | null;
    }
    /**
     * Represents a test case.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1TestCase {
        /**
         * Output only. When the test was created.
         */
        creationTime?: string | null;
        /**
         * Required. The human-readable name of the test case, unique within the agent. Limit of 200 characters.
         */
        displayName?: string | null;
        /**
         * The latest test result.
         */
        lastTestResult?: Schema$GoogleCloudDialogflowCxV3beta1TestCaseResult;
        /**
         * The unique identifier of the test case. TestCases.CreateTestCase will populate the name automatically. Otherwise use format: `projects//locations//agents/ /testCases/`.
         */
        name?: string | null;
        /**
         * Additional freeform notes about the test case. Limit of 400 characters.
         */
        notes?: string | null;
        /**
         * Tags are short descriptions that users may apply to test cases for organizational and filtering purposes. Each tag should start with "#" and has a limit of 30 characters.
         */
        tags?: string[] | null;
        /**
         * The conversation turns uttered when the test case was created, in chronological order. These include the canonical set of agent utterances that should occur when the agent is working properly.
         */
        testCaseConversationTurns?: Schema$GoogleCloudDialogflowCxV3beta1ConversationTurn[];
        /**
         * Config for the test case.
         */
        testConfig?: Schema$GoogleCloudDialogflowCxV3beta1TestConfig;
    }
    /**
     * Error info for importing a test.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1TestCaseError {
        /**
         * The status associated with the test case.
         */
        status?: Schema$GoogleRpcStatus;
        /**
         * The test case.
         */
        testCase?: Schema$GoogleCloudDialogflowCxV3beta1TestCase;
    }
    /**
     * Represents a result from running a test case in an agent environment.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1TestCaseResult {
        /**
         * The conversation turns uttered during the test case replay in chronological order.
         */
        conversationTurns?: Schema$GoogleCloudDialogflowCxV3beta1ConversationTurn[];
        /**
         * Environment where the test was run. If not set, it indicates the draft environment.
         */
        environment?: string | null;
        /**
         * The resource name for the test case result. Format: `projects//locations//agents//testCases/ /results/`.
         */
        name?: string | null;
        /**
         * Whether the test case passed in the agent environment.
         */
        testResult?: string | null;
        /**
         * The time that the test was run.
         */
        testTime?: string | null;
    }
    /**
     * Represents configurations for a test case.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1TestConfig {
        /**
         * Flow name. If not set, default start flow is assumed. Format: `projects//locations//agents//flows/`.
         */
        flow?: string | null;
        /**
         * Session parameters to be compared when calculating differences.
         */
        trackingParameters?: string[] | null;
    }
    /**
     * Error info for running a test.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1TestError {
        /**
         * The status associated with the test.
         */
        status?: Schema$GoogleRpcStatus;
        /**
         * The test case resource name.
         */
        testCase?: string | null;
        /**
         * The timestamp when the test was completed.
         */
        testTime?: string | null;
    }
    /**
     * The description of differences between original and replayed agent output.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1TestRunDifference {
        /**
         * A description of the diff, showing the actual output vs expected output.
         */
        description?: string | null;
        /**
         * The type of diff.
         */
        type?: string | null;
    }
    /**
     * Represents the natural language text to be processed.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1TextInput {
        /**
         * Required. The UTF-8 encoded natural language text to be processed. Text length must not exceed 256 characters.
         */
        text?: string | null;
    }
    /**
     * The request message for Flows.TrainFlow.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1TrainFlowRequest {
    }
    /**
     * Transition coverage represents the percentage of all possible page transitions (page-level transition routes and event handlers, excluding transition route groups) present within any of a parent's test cases.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1TransitionCoverage {
        /**
         * The percent of transitions in the agent that are covered.
         */
        coverageScore?: number | null;
        /**
         * The list of Transitions present in the agent.
         */
        transitions?: Schema$GoogleCloudDialogflowCxV3beta1TransitionCoverageTransition[];
    }
    /**
     * A transition in a page.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1TransitionCoverageTransition {
        /**
         * Whether or not the transition is covered by at least one of the agent's test cases.
         */
        covered?: boolean | null;
        /**
         * Event handler.
         */
        eventHandler?: Schema$GoogleCloudDialogflowCxV3beta1EventHandler;
        /**
         * The index of a transition in the transition list. Starting from 0.
         */
        index?: number | null;
        /**
         * The start node of a transition.
         */
        source?: Schema$GoogleCloudDialogflowCxV3beta1TransitionCoverageTransitionNode;
        /**
         * The end node of a transition.
         */
        target?: Schema$GoogleCloudDialogflowCxV3beta1TransitionCoverageTransitionNode;
        /**
         * Intent route or condition route.
         */
        transitionRoute?: Schema$GoogleCloudDialogflowCxV3beta1TransitionRoute;
    }
    /**
     * The source or target of a transition.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1TransitionCoverageTransitionNode {
        /**
         * Indicates a transition to a Flow. Only some fields such as name and displayname will be set.
         */
        flow?: Schema$GoogleCloudDialogflowCxV3beta1Flow;
        /**
         * Indicates a transition to a Page. Only some fields such as name and displayname will be set.
         */
        page?: Schema$GoogleCloudDialogflowCxV3beta1Page;
    }
    /**
     * A transition route specifies a intent that can be matched and/or a data condition that can be evaluated during a session. When a specified transition is matched, the following actions are taken in order: * If there is a `trigger_fulfillment` associated with the transition, it will be called. * If there is a `target_page` associated with the transition, the session will transition into the specified page. * If there is a `target_flow` associated with the transition, the session will transition into the specified flow.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1TransitionRoute {
        /**
         * The condition to evaluate against form parameters or session parameters. See the [conditions reference](https://cloud.google.com/dialogflow/cx/docs/reference/condition). At least one of `intent` or `condition` must be specified. When both `intent` and `condition` are specified, the transition can only happen when both are fulfilled.
         */
        condition?: string | null;
        /**
         * The unique identifier of an Intent. Format: `projects//locations//agents//intents/`. Indicates that the transition can only happen when the given intent is matched. At least one of `intent` or `condition` must be specified. When both `intent` and `condition` are specified, the transition can only happen when both are fulfilled.
         */
        intent?: string | null;
        /**
         * Output only. The unique identifier of this transition route.
         */
        name?: string | null;
        /**
         * The target flow to transition to. Format: `projects//locations//agents//flows/`.
         */
        targetFlow?: string | null;
        /**
         * The target page to transition to. Format: `projects//locations//agents//flows//pages/`.
         */
        targetPage?: string | null;
        /**
         * The fulfillment to call when the condition is satisfied. At least one of `trigger_fulfillment` and `target` must be specified. When both are defined, `trigger_fulfillment` is executed first.
         */
        triggerFulfillment?: Schema$GoogleCloudDialogflowCxV3beta1Fulfillment;
    }
    /**
     * An TransitionRouteGroup represents a group of `TransitionRoutes` to be used by a Page.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1TransitionRouteGroup {
        /**
         * Required. The human-readable name of the transition route group, unique within the Agent. The display name can be no longer than 30 characters.
         */
        displayName?: string | null;
        /**
         * The unique identifier of the transition route group. TransitionRouteGroups.CreateTransitionRouteGroup populates the name automatically. Format: `projects//locations//agents//flows//transitionRouteGroups/`.
         */
        name?: string | null;
        /**
         * Transition routes associated with the TransitionRouteGroup.
         */
        transitionRoutes?: Schema$GoogleCloudDialogflowCxV3beta1TransitionRoute[];
    }
    /**
     * Transition route group coverage represents the percentage of all possible transition routes present within any of a parent's test cases. The results are grouped by the transition route group.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverage {
        /**
         * Transition route group coverages.
         */
        coverages?: Schema$GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverageCoverage[];
        /**
         * The percent of transition routes in all the transition route groups that are covered.
         */
        coverageScore?: number | null;
    }
    /**
     * Coverage result message for one transition route group.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverageCoverage {
        /**
         * The percent of transition routes in the transition route group that are covered.
         */
        coverageScore?: number | null;
        /**
         * Transition route group metadata. Only name and displayName will be set.
         */
        routeGroup?: Schema$GoogleCloudDialogflowCxV3beta1TransitionRouteGroup;
        /**
         * The list of transition routes and coverage in the transition route group.
         */
        transitions?: Schema$GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverageCoverageTransition[];
    }
    /**
     * A transition coverage in a transition route group.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverageCoverageTransition {
        /**
         * Whether or not the transition route is covered by at least one of the agent's test cases.
         */
        covered?: boolean | null;
        /**
         * Intent route or condition route.
         */
        transitionRoute?: Schema$GoogleCloudDialogflowCxV3beta1TransitionRoute;
    }
    /**
     * Metadata for UpdateDocument operation.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1UpdateDocumentOperationMetadata {
        /**
         * The generic information of the operation.
         */
        genericMetadata?: Schema$GoogleCloudDialogflowCxV3beta1GenericKnowledgeOperationMetadata;
    }
    /**
     * The request message for Agents.ValidateAgent.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1ValidateAgentRequest {
        /**
         * If not specified, the agent's default language is used.
         */
        languageCode?: string | null;
    }
    /**
     * The request message for Flows.ValidateFlow.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1ValidateFlowRequest {
        /**
         * If not specified, the agent's default language is used.
         */
        languageCode?: string | null;
    }
    /**
     * Agent/flow validation message.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1ValidationMessage {
        /**
         * The message detail.
         */
        detail?: string | null;
        /**
         * The resource names of the resources where the message is found.
         */
        resourceNames?: Schema$GoogleCloudDialogflowCxV3beta1ResourceName[];
        /**
         * The names of the resources where the message is found.
         */
        resources?: string[] | null;
        /**
         * The type of the resources where the message is found.
         */
        resourceType?: string | null;
        /**
         * Indicates the severity of the message.
         */
        severity?: string | null;
    }
    /**
     * The history of variants update.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1VariantsHistory {
        /**
         * Update time of the variants.
         */
        updateTime?: string | null;
        /**
         * The flow versions as the variants.
         */
        versionVariants?: Schema$GoogleCloudDialogflowCxV3beta1VersionVariants;
    }
    /**
     * Represents a version of a flow.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1Version {
        /**
         * Output only. Create time of the version.
         */
        createTime?: string | null;
        /**
         * The description of the version. The maximum length is 500 characters. If exceeded, the request is rejected.
         */
        description?: string | null;
        /**
         * Required. The human-readable name of the version. Limit of 64 characters.
         */
        displayName?: string | null;
        /**
         * Format: projects//locations//agents//flows//versions/. Version ID is a self-increasing number generated by Dialogflow upon version creation.
         */
        name?: string | null;
        /**
         * Output only. The NLU settings of the flow at version creation.
         */
        nluSettings?: Schema$GoogleCloudDialogflowCxV3beta1NluSettings;
        /**
         * Output only. The state of this version. This field is read-only and cannot be set by create and update methods.
         */
        state?: string | null;
    }
    /**
     * A list of flow version variants.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1VersionVariants {
        /**
         * A list of flow version variants.
         */
        variants?: Schema$GoogleCloudDialogflowCxV3beta1VersionVariantsVariant[];
    }
    /**
     * A single flow version with specified traffic allocation.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1VersionVariantsVariant {
        /**
         * Whether the variant is for the control group.
         */
        isControlGroup?: boolean | null;
        /**
         * Percentage of the traffic which should be routed to this version of flow. Traffic allocation for a single flow must sum up to 1.0.
         */
        trafficAllocation?: number | null;
        /**
         * The name of the flow version. Format: `projects//locations//agents//flows//versions/`.
         */
        version?: string | null;
    }
    /**
     * Description of which voice to use for speech synthesis.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1VoiceSelectionParams {
        /**
         * Optional. The name of the voice. If not set, the service will choose a voice based on the other parameters such as language_code and ssml_gender. For the list of available voices, please refer to [Supported voices and languages](https://cloud.google.com/text-to-speech/docs/voices).
         */
        name?: string | null;
        /**
         * Optional. The preferred gender of the voice. If not set, the service will choose a voice based on the other parameters such as language_code and name. Note that this is only a preference, not requirement. If a voice of the appropriate gender is not available, the synthesizer should substitute a voice with a different gender rather than failing the request.
         */
        ssmlGender?: string | null;
    }
    /**
     * Webhooks host the developer's business logic. During a session, webhooks allow the developer to use the data extracted by Dialogflow's natural language processing to generate dynamic responses, validate collected data, or trigger actions on the backend.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1Webhook {
        /**
         * Indicates whether the webhook is disabled.
         */
        disabled?: boolean | null;
        /**
         * Required. The human-readable name of the webhook, unique within the agent.
         */
        displayName?: string | null;
        /**
         * Configuration for a generic web service.
         */
        genericWebService?: Schema$GoogleCloudDialogflowCxV3beta1WebhookGenericWebService;
        /**
         * The unique identifier of the webhook. Required for the Webhooks.UpdateWebhook method. Webhooks.CreateWebhook populates the name automatically. Format: `projects//locations//agents//webhooks/`.
         */
        name?: string | null;
        /**
         * Configuration for a [Service Directory](https://cloud.google.com/service-directory) service.
         */
        serviceDirectory?: Schema$GoogleCloudDialogflowCxV3beta1WebhookServiceDirectoryConfig;
        /**
         * Webhook execution timeout. Execution is considered failed if Dialogflow doesn't receive a response from webhook at the end of the timeout period. Defaults to 5 seconds, maximum allowed timeout is 30 seconds.
         */
        timeout?: string | null;
    }
    /**
     * Represents configuration for a generic web service.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1WebhookGenericWebService {
        /**
         * Optional. Specifies a list of allowed custom CA certificates (in DER format) for HTTPS verification. This overrides the default SSL trust store. If this is empty or unspecified, Dialogflow will use Google's default trust store to verify certificates. N.B. Make sure the HTTPS server certificates are signed with "subject alt name". For instance a certificate can be self-signed using the following command, openssl x509 -req -days 200 -in example.com.csr \ -signkey example.com.key \ -out example.com.crt \ -extfile <(printf "\nsubjectAltName='DNS:www.example.com'")
         */
        allowedCaCerts?: string[] | null;
        /**
         * The password for HTTP Basic authentication.
         */
        password?: string | null;
        /**
         * The HTTP request headers to send together with webhook requests.
         */
        requestHeaders?: {
            [key: string]: string;
        } | null;
        /**
         * Required. The webhook URI for receiving POST requests. It must use https protocol.
         */
        uri?: string | null;
        /**
         * The user name for HTTP Basic authentication.
         */
        username?: string | null;
    }
    /**
     * The request message for a webhook call. The request is sent as a JSON object and the field names will be presented in camel cases.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1WebhookRequest {
        /**
         * Always present. The unique identifier of the DetectIntentResponse that will be returned to the API caller.
         */
        detectIntentResponseId?: string | null;
        /**
         * Always present. Information about the fulfillment that triggered this webhook call.
         */
        fulfillmentInfo?: Schema$GoogleCloudDialogflowCxV3beta1WebhookRequestFulfillmentInfo;
        /**
         * Information about the last matched intent.
         */
        intentInfo?: Schema$GoogleCloudDialogflowCxV3beta1WebhookRequestIntentInfo;
        /**
         * The language code specified in the original request.
         */
        languageCode?: string | null;
        /**
         * The list of rich message responses to present to the user. Webhook can choose to append or replace this list in WebhookResponse.fulfillment_response;
         */
        messages?: Schema$GoogleCloudDialogflowCxV3beta1ResponseMessage[];
        /**
         * Information about page status.
         */
        pageInfo?: Schema$GoogleCloudDialogflowCxV3beta1PageInfo;
        /**
         * Custom data set in QueryParameters.payload.
         */
        payload?: {
            [key: string]: any;
        } | null;
        /**
         * The sentiment analysis result of the current user request. The field is filled when sentiment analysis is configured to be enabled for the request.
         */
        sentimentAnalysisResult?: Schema$GoogleCloudDialogflowCxV3beta1WebhookRequestSentimentAnalysisResult;
        /**
         * Information about session status.
         */
        sessionInfo?: Schema$GoogleCloudDialogflowCxV3beta1SessionInfo;
        /**
         * If natural language text was provided as input, this field will contain a copy of the text.
         */
        text?: string | null;
        /**
         * If natural language speech audio was provided as input, this field will contain the transcript for the audio.
         */
        transcript?: string | null;
        /**
         * If an event was provided as input, this field will contain the name of the event.
         */
        triggerEvent?: string | null;
        /**
         * If an intent was provided as input, this field will contain a copy of the intent identifier. Format: `projects//locations//agents//intents/`.
         */
        triggerIntent?: string | null;
    }
    /**
     * Represents fulfillment information communicated to the webhook.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1WebhookRequestFulfillmentInfo {
        /**
         * Always present. The tag used to identify which fulfillment is being called.
         */
        tag?: string | null;
    }
    /**
     * Represents intent information communicated to the webhook.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1WebhookRequestIntentInfo {
        /**
         * The confidence of the matched intent. Values range from 0.0 (completely uncertain) to 1.0 (completely certain).
         */
        confidence?: number | null;
        /**
         * Always present. The display name of the last matched intent.
         */
        displayName?: string | null;
        /**
         * Always present. The unique identifier of the last matched intent. Format: `projects//locations//agents//intents/`.
         */
        lastMatchedIntent?: string | null;
        /**
         * Parameters identified as a result of intent matching. This is a map of the name of the identified parameter to the value of the parameter identified from the user's utterance. All parameters defined in the matched intent that are identified will be surfaced here.
         */
        parameters?: {
            [key: string]: Schema$GoogleCloudDialogflowCxV3beta1WebhookRequestIntentInfoIntentParameterValue;
        } | null;
    }
    /**
     * Represents a value for an intent parameter.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1WebhookRequestIntentInfoIntentParameterValue {
        /**
         * Always present. Original text value extracted from user utterance.
         */
        originalValue?: string | null;
        /**
         * Always present. Structured value for the parameter extracted from user utterance.
         */
        resolvedValue?: any | null;
    }
    /**
     * Represents the result of sentiment analysis.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1WebhookRequestSentimentAnalysisResult {
        /**
         * A non-negative number in the [0, +inf) range, which represents the absolute magnitude of sentiment, regardless of score (positive or negative).
         */
        magnitude?: number | null;
        /**
         * Sentiment score between -1.0 (negative sentiment) and 1.0 (positive sentiment).
         */
        score?: number | null;
    }
    /**
     * The response message for a webhook call.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1WebhookResponse {
        /**
         * The fulfillment response to send to the user. This field can be omitted by the webhook if it does not intend to send any response to the user.
         */
        fulfillmentResponse?: Schema$GoogleCloudDialogflowCxV3beta1WebhookResponseFulfillmentResponse;
        /**
         * Information about page status. This field can be omitted by the webhook if it does not intend to modify page status.
         */
        pageInfo?: Schema$GoogleCloudDialogflowCxV3beta1PageInfo;
        /**
         * Value to append directly to QueryResult.webhook_payloads.
         */
        payload?: {
            [key: string]: any;
        } | null;
        /**
         * Information about session status. This field can be omitted by the webhook if it does not intend to modify session status.
         */
        sessionInfo?: Schema$GoogleCloudDialogflowCxV3beta1SessionInfo;
        /**
         * The target flow to transition to. Format: `projects//locations//agents//flows/`.
         */
        targetFlow?: string | null;
        /**
         * The target page to transition to. Format: `projects//locations//agents//flows//pages/`.
         */
        targetPage?: string | null;
    }
    /**
     * Represents a fulfillment response to the user.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1WebhookResponseFulfillmentResponse {
        /**
         * Merge behavior for `messages`.
         */
        mergeBehavior?: string | null;
        /**
         * The list of rich message responses to present to the user.
         */
        messages?: Schema$GoogleCloudDialogflowCxV3beta1ResponseMessage[];
    }
    /**
     * Represents configuration for a [Service Directory](https://cloud.google.com/service-directory) service.
     */
    export interface Schema$GoogleCloudDialogflowCxV3beta1WebhookServiceDirectoryConfig {
        /**
         * Generic Service configuration of this webhook.
         */
        genericWebService?: Schema$GoogleCloudDialogflowCxV3beta1WebhookGenericWebService;
        /**
         * Required. The name of [Service Directory](https://cloud.google.com/service-directory) service. Format: `projects//locations//namespaces//services/`. `Location ID` of the service directory must be the same as the location of the agent.
         */
        service?: string | null;
    }
    /**
     * Represents a result from running a test case in an agent environment.
     */
    export interface Schema$GoogleCloudDialogflowCxV3ContinuousTestResult {
        /**
         * The resource name for the continuous test result. Format: `projects//locations//agents//environments//continuousTestResults/`.
         */
        name?: string | null;
        /**
         * The result of this continuous test run, i.e. whether all the tests in this continuous test run pass or not.
         */
        result?: string | null;
        /**
         * Time when the continuous testing run starts.
         */
        runTime?: string | null;
        /**
         * A list of individual test case results names in this continuous test run.
         */
        testCaseResults?: string[] | null;
    }
    /**
     * One interaction between a human and virtual agent. The human provides some input and the virtual agent provides a response.
     */
    export interface Schema$GoogleCloudDialogflowCxV3ConversationTurn {
        /**
         * The user input.
         */
        userInput?: Schema$GoogleCloudDialogflowCxV3ConversationTurnUserInput;
        /**
         * The virtual agent output.
         */
        virtualAgentOutput?: Schema$GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutput;
    }
    /**
     * The input from the human user.
     */
    export interface Schema$GoogleCloudDialogflowCxV3ConversationTurnUserInput {
        /**
         * Whether sentiment analysis is enabled.
         */
        enableSentimentAnalysis?: boolean | null;
        /**
         * Parameters that need to be injected into the conversation during intent detection.
         */
        injectedParameters?: {
            [key: string]: any;
        } | null;
        /**
         * Supports text input, event input, dtmf input in the test case.
         */
        input?: Schema$GoogleCloudDialogflowCxV3QueryInput;
        /**
         * If webhooks should be allowed to trigger in response to the user utterance. Often if parameters are injected, webhooks should not be enabled.
         */
        isWebhookEnabled?: boolean | null;
    }
    /**
     * The output from the virtual agent.
     */
    export interface Schema$GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutput {
        /**
         * The Page on which the utterance was spoken. Only name and displayName will be set.
         */
        currentPage?: Schema$GoogleCloudDialogflowCxV3Page;
        /**
         * Required. Input only. The diagnostic info output for the turn. Required to calculate the testing coverage.
         */
        diagnosticInfo?: {
            [key: string]: any;
        } | null;
        /**
         * Output only. If this is part of a result conversation turn, the list of differences between the original run and the replay for this output, if any.
         */
        differences?: Schema$GoogleCloudDialogflowCxV3TestRunDifference[];
        /**
         * The session parameters available to the bot at this point.
         */
        sessionParameters?: {
            [key: string]: any;
        } | null;
        /**
         * Response error from the agent in the test result. If set, other output is empty.
         */
        status?: Schema$GoogleRpcStatus;
        /**
         * The text responses from the agent for the turn.
         */
        textResponses?: Schema$GoogleCloudDialogflowCxV3ResponseMessageText[];
        /**
         * The Intent that triggered the response. Only name and displayName will be set.
         */
        triggeredIntent?: Schema$GoogleCloudDialogflowCxV3Intent;
    }
    /**
     * Metadata for CreateDocument operation.
     */
    export interface Schema$GoogleCloudDialogflowCxV3CreateDocumentOperationMetadata {
        /**
         * The generic information of the operation.
         */
        genericMetadata?: Schema$GoogleCloudDialogflowCxV3GenericKnowledgeOperationMetadata;
    }
    /**
     * Metadata associated with the long running operation for Versions.CreateVersion.
     */
    export interface Schema$GoogleCloudDialogflowCxV3CreateVersionOperationMetadata {
        /**
         * Name of the created version. Format: `projects//locations//agents//flows//versions/`.
         */
        version?: string | null;
    }
    /**
     * Metadata for DeleteDocument operation.
     */
    export interface Schema$GoogleCloudDialogflowCxV3DeleteDocumentOperationMetadata {
        /**
         * The generic information of the operation.
         */
        genericMetadata?: Schema$GoogleCloudDialogflowCxV3GenericKnowledgeOperationMetadata;
    }
    /**
     * Metadata returned for the Environments.DeployFlow long running operation.
     */
    export interface Schema$GoogleCloudDialogflowCxV3DeployFlowMetadata {
        /**
         * Errors of running deployment tests.
         */
        testErrors?: Schema$GoogleCloudDialogflowCxV3TestError[];
    }
    /**
     * The response message for Environments.DeployFlow.
     */
    export interface Schema$GoogleCloudDialogflowCxV3DeployFlowResponse {
        /**
         * The name of the flow version Deployment. Format: `projects//locations//agents// environments//deployments/`.
         */
        deployment?: string | null;
        /**
         * The updated environment where the flow is deployed.
         */
        environment?: Schema$GoogleCloudDialogflowCxV3Environment;
    }
    /**
     * Represents the input for dtmf event.
     */
    export interface Schema$GoogleCloudDialogflowCxV3DtmfInput {
        /**
         * The dtmf digits.
         */
        digits?: string | null;
        /**
         * The finish digit (if any).
         */
        finishDigit?: string | null;
    }
    /**
     * Represents an environment for an agent. You can create multiple versions of your agent and publish them to separate environments. When you edit an agent, you are editing the draft agent. At any point, you can save the draft agent as an agent version, which is an immutable snapshot of your agent. When you save the draft agent, it is published to the default environment. When you create agent versions, you can publish them to custom environments. You can create a variety of custom environments for testing, development, production, etc.
     */
    export interface Schema$GoogleCloudDialogflowCxV3Environment {
        /**
         * The human-readable description of the environment. The maximum length is 500 characters. If exceeded, the request is rejected.
         */
        description?: string | null;
        /**
         * Required. The human-readable name of the environment (unique in an agent). Limit of 64 characters.
         */
        displayName?: string | null;
        /**
         * The name of the environment. Format: `projects//locations//agents//environments/`.
         */
        name?: string | null;
        /**
         * The test cases config for continuous tests of this environment.
         */
        testCasesConfig?: Schema$GoogleCloudDialogflowCxV3EnvironmentTestCasesConfig;
        /**
         * Output only. Update time of this environment.
         */
        updateTime?: string | null;
        /**
         * Required. A list of configurations for flow versions. You should include version configs for all flows that are reachable from `Start Flow` in the agent. Otherwise, an error will be returned.
         */
        versionConfigs?: Schema$GoogleCloudDialogflowCxV3EnvironmentVersionConfig[];
    }
    /**
     * The configuration for continuous tests.
     */
    export interface Schema$GoogleCloudDialogflowCxV3EnvironmentTestCasesConfig {
        /**
         * Whether to run test cases in TestCasesConfig.test_cases periodically. Default false. If set to ture, run once a day.
         */
        enableContinuousRun?: boolean | null;
        /**
         * Whether to run test cases in TestCasesConfig.test_cases before deploying a flow version to the environment. Default false.
         */
        enablePredeploymentRun?: boolean | null;
        /**
         * A list of test case names to run. They should be under the same agent. Format of each test case name: `projects//locations/ /agents//testCases/`
         */
        testCases?: string[] | null;
    }
    /**
     * Configuration for the version.
     */
    export interface Schema$GoogleCloudDialogflowCxV3EnvironmentVersionConfig {
        /**
         * Required. Format: projects//locations//agents//flows//versions/.
         */
        version?: string | null;
    }
    /**
     * An event handler specifies an event that can be handled during a session. When the specified event happens, the following actions are taken in order: * If there is a `trigger_fulfillment` associated with the event, it will be called. * If there is a `target_page` associated with the event, the session will transition into the specified page. * If there is a `target_flow` associated with the event, the session will transition into the specified flow.
     */
    export interface Schema$GoogleCloudDialogflowCxV3EventHandler {
        /**
         * Required. The name of the event to handle.
         */
        event?: string | null;
        /**
         * Output only. The unique identifier of this event handler.
         */
        name?: string | null;
        /**
         * The target flow to transition to. Format: `projects//locations//agents//flows/`.
         */
        targetFlow?: string | null;
        /**
         * The target page to transition to. Format: `projects//locations//agents//flows//pages/`.
         */
        targetPage?: string | null;
        /**
         * The fulfillment to call when the event occurs. Handling webhook errors with a fulfillment enabled with webhook could cause infinite loop. It is invalid to specify such fulfillment for a handler handling webhooks.
         */
        triggerFulfillment?: Schema$GoogleCloudDialogflowCxV3Fulfillment;
    }
    /**
     * Represents the event to trigger.
     */
    export interface Schema$GoogleCloudDialogflowCxV3EventInput {
        /**
         * Name of the event.
         */
        event?: string | null;
    }
    /**
     * The response message for Agents.ExportAgent.
     */
    export interface Schema$GoogleCloudDialogflowCxV3ExportAgentResponse {
        /**
         * Uncompressed raw byte content for agent.
         */
        agentContent?: string | null;
        /**
         * The URI to a file containing the exported agent. This field is populated only if `agent_uri` is specified in ExportAgentRequest.
         */
        agentUri?: string | null;
    }
    /**
     * The response message for Flows.ExportFlow.
     */
    export interface Schema$GoogleCloudDialogflowCxV3ExportFlowResponse {
        /**
         * Uncompressed raw byte content for flow.
         */
        flowContent?: string | null;
        /**
         * The URI to a file containing the exported flow. This field is populated only if `flow_uri` is specified in ExportFlowRequest.
         */
        flowUri?: string | null;
    }
    /**
     * Metadata returned for the TestCases.ExportTestCases long running operation. This message currently has no fields.
     */
    export interface Schema$GoogleCloudDialogflowCxV3ExportTestCasesMetadata {
    }
    /**
     * The response message for TestCases.ExportTestCases.
     */
    export interface Schema$GoogleCloudDialogflowCxV3ExportTestCasesResponse {
        /**
         * Uncompressed raw byte content for test cases.
         */
        content?: string | null;
        /**
         * The URI to a file containing the exported test cases. This field is populated only if `gcs_uri` is specified in ExportTestCasesRequest.
         */
        gcsUri?: string | null;
    }
    /**
     * A form is a data model that groups related parameters that can be collected from the user. The process in which the agent prompts the user and collects parameter values from the user is called form filling. A form can be added to a page. When form filling is done, the filled parameters will be written to the session.
     */
    export interface Schema$GoogleCloudDialogflowCxV3Form {
        /**
         * Parameters to collect from the user.
         */
        parameters?: Schema$GoogleCloudDialogflowCxV3FormParameter[];
    }
    /**
     * Represents a form parameter.
     */
    export interface Schema$GoogleCloudDialogflowCxV3FormParameter {
        /**
         * The default value of an optional parameter. If the parameter is required, the default value will be ignored.
         */
        defaultValue?: any | null;
        /**
         * Required. The human-readable name of the parameter, unique within the form.
         */
        displayName?: string | null;
        /**
         * Required. The entity type of the parameter. Format: `projects/-/locations/-/agents/-/entityTypes/` for system entity types (for example, `projects/-/locations/-/agents/-/entityTypes/sys.date`), or `projects//locations//agents//entityTypes/` for developer entity types.
         */
        entityType?: string | null;
        /**
         * Required. Defines fill behavior for the parameter.
         */
        fillBehavior?: Schema$GoogleCloudDialogflowCxV3FormParameterFillBehavior;
        /**
         * Indicates whether the parameter represents a list of values.
         */
        isList?: boolean | null;
        /**
         * Indicates whether the parameter content should be redacted in log. If redaction is enabled, the parameter content will be replaced by parameter name during logging. Note: the parameter content is subject to redaction if either parameter level redaction or entity type level redaction is enabled.
         */
        redact?: boolean | null;
        /**
         * Indicates whether the parameter is required. Optional parameters will not trigger prompts; however, they are filled if the user specifies them. Required parameters must be filled before form filling concludes.
         */
        required?: boolean | null;
    }
    /**
     * Configuration for how the filling of a parameter should be handled.
     */
    export interface Schema$GoogleCloudDialogflowCxV3FormParameterFillBehavior {
        /**
         * Required. The fulfillment to provide the initial prompt that the agent can present to the user in order to fill the parameter.
         */
        initialPromptFulfillment?: Schema$GoogleCloudDialogflowCxV3Fulfillment;
        /**
         * The handlers for parameter-level events, used to provide reprompt for the parameter or transition to a different page/flow. The supported events are: * `sys.no-match-`, where N can be from 1 to 6 * `sys.no-match-default` * `sys.no-input-`, where N can be from 1 to 6 * `sys.no-input-default` * `sys.invalid-parameter` `initial_prompt_fulfillment` provides the first prompt for the parameter. If the user's response does not fill the parameter, a no-match/no-input event will be triggered, and the fulfillment associated with the `sys.no-match-1`/`sys.no-input-1` handler (if defined) will be called to provide a prompt. The `sys.no-match-2`/`sys.no-input-2` handler (if defined) will respond to the next no-match/no-input event, and so on. A `sys.no-match-default` or `sys.no-input-default` handler will be used to handle all following no-match/no-input events after all numbered no-match/no-input handlers for the parameter are consumed. A `sys.invalid-parameter` handler can be defined to handle the case where the parameter values have been `invalidated` by webhook. For example, if the user's response fill the parameter, however the parameter was invalidated by webhook, the fulfillment associated with the `sys.invalid-parameter` handler (if defined) will be called to provide a prompt. If the event handler for the corresponding event can't be found on the parameter, `initial_prompt_fulfillment` will be re-prompted.
         */
        repromptEventHandlers?: Schema$GoogleCloudDialogflowCxV3EventHandler[];
    }
    /**
     * A fulfillment can do one or more of the following actions at the same time: * Generate rich message responses. * Set parameter values. * Call the webhook. Fulfillments can be called at various stages in the Page or Form lifecycle. For example, when a DetectIntentRequest drives a session to enter a new page, the page's entry fulfillment can add a static response to the QueryResult in the returning DetectIntentResponse, call the webhook (for example, to load user data from a database), or both.
     */
    export interface Schema$GoogleCloudDialogflowCxV3Fulfillment {
        /**
         * Conditional cases for this fulfillment.
         */
        conditionalCases?: Schema$GoogleCloudDialogflowCxV3FulfillmentConditionalCases[];
        /**
         * The list of rich message responses to present to the user.
         */
        messages?: Schema$GoogleCloudDialogflowCxV3ResponseMessage[];
        /**
         * Whether Dialogflow should return currently queued fulfillment response messages in streaming APIs. If a webhook is specified, it happens before Dialogflow invokes webhook. Warning: 1) This flag only affects streaming API. Responses are still queued and returned once in non-streaming API. 2) The flag can be enabled in any fulfillment but only the first 3 partial responses will be returned. You may only want to apply it to fulfillments that have slow webhooks.
         */
        returnPartialResponses?: boolean | null;
        /**
         * Set parameter values before executing the webhook.
         */
        setParameterActions?: Schema$GoogleCloudDialogflowCxV3FulfillmentSetParameterAction[];
        /**
         * The tag used by the webhook to identify which fulfillment is being called. This field is required if `webhook` is specified.
         */
        tag?: string | null;
        /**
         * The webhook to call. Format: `projects//locations//agents//webhooks/`.
         */
        webhook?: string | null;
    }
    /**
     * A list of cascading if-else conditions. Cases are mutually exclusive. The first one with a matching condition is selected, all the rest ignored.
     */
    export interface Schema$GoogleCloudDialogflowCxV3FulfillmentConditionalCases {
        /**
         * A list of cascading if-else conditions.
         */
        cases?: Schema$GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCase[];
    }
    /**
     * Each case has a Boolean condition. When it is evaluated to be True, the corresponding messages will be selected and evaluated recursively.
     */
    export interface Schema$GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCase {
        /**
         * A list of case content.
         */
        caseContent?: Schema$GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseCaseContent[];
        /**
         * The condition to activate and select this case. Empty means the condition is always true. The condition is evaluated against form parameters or session parameters. See the [conditions reference](https://cloud.google.com/dialogflow/cx/docs/reference/condition).
         */
        condition?: string | null;
    }
    /**
     * The list of messages or conditional cases to activate for this case.
     */
    export interface Schema$GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseCaseContent {
        /**
         * Additional cases to be evaluated.
         */
        additionalCases?: Schema$GoogleCloudDialogflowCxV3FulfillmentConditionalCases;
        /**
         * Returned message.
         */
        message?: Schema$GoogleCloudDialogflowCxV3ResponseMessage;
    }
    /**
     * Setting a parameter value.
     */
    export interface Schema$GoogleCloudDialogflowCxV3FulfillmentSetParameterAction {
        /**
         * Display name of the parameter.
         */
        parameter?: string | null;
        /**
         * The new value of the parameter. A null value clears the parameter.
         */
        value?: any | null;
    }
    /**
     * Metadata in google::longrunning::Operation for Knowledge operations.
     */
    export interface Schema$GoogleCloudDialogflowCxV3GenericKnowledgeOperationMetadata {
        /**
         * Required. Output only. The current state of this operation.
         */
        state?: string | null;
    }
    /**
     * Metadata for ImportDocuments operation.
     */
    export interface Schema$GoogleCloudDialogflowCxV3ImportDocumentsOperationMetadata {
        /**
         * The generic information of the operation.
         */
        genericMetadata?: Schema$GoogleCloudDialogflowCxV3GenericKnowledgeOperationMetadata;
    }
    /**
     * Response message for Documents.ImportDocuments.
     */
    export interface Schema$GoogleCloudDialogflowCxV3ImportDocumentsResponse {
        /**
         * Includes details about skipped documents or any other warnings.
         */
        warnings?: Schema$GoogleRpcStatus[];
    }
    /**
     * The response message for Flows.ImportFlow.
     */
    export interface Schema$GoogleCloudDialogflowCxV3ImportFlowResponse {
        /**
         * The unique identifier of the new flow. Format: `projects//locations//agents//flows/`.
         */
        flow?: string | null;
    }
    /**
     * Metadata returned for the TestCases.ImportTestCases long running operation.
     */
    export interface Schema$GoogleCloudDialogflowCxV3ImportTestCasesMetadata {
        /**
         * Errors for failed test cases.
         */
        errors?: Schema$GoogleCloudDialogflowCxV3TestCaseError[];
    }
    /**
     * The response message for TestCases.ImportTestCases.
     */
    export interface Schema$GoogleCloudDialogflowCxV3ImportTestCasesResponse {
        /**
         * The unique identifiers of the new test cases. Format: `projects//locations//agents//testCases/`.
         */
        names?: string[] | null;
    }
    /**
     * Instructs the speech recognizer on how to process the audio content.
     */
    export interface Schema$GoogleCloudDialogflowCxV3InputAudioConfig {
        /**
         * Required. Audio encoding of the audio content to process.
         */
        audioEncoding?: string | null;
        /**
         * Optional. If `true`, Dialogflow returns SpeechWordInfo in StreamingRecognitionResult with information about the recognized speech words, e.g. start and end time offsets. If false or unspecified, Speech doesn't return any word-level information.
         */
        enableWordInfo?: boolean | null;
        /**
         * Optional. Which Speech model to select for the given request. Select the model best suited to your domain to get best results. If a model is not explicitly specified, then we auto-select a model based on the parameters in the InputAudioConfig. If enhanced speech model is enabled for the agent and an enhanced version of the specified model for the language does not exist, then the speech is recognized using the standard version of the specified model. Refer to [Cloud Speech API documentation](https://cloud.google.com/speech-to-text/docs/basics#select-model) for more details.
         */
        model?: string | null;
        /**
         * Optional. Which variant of the Speech model to use.
         */
        modelVariant?: string | null;
        /**
         * Optional. A list of strings containing words and phrases that the speech recognizer should recognize with higher likelihood. See [the Cloud Speech documentation](https://cloud.google.com/speech-to-text/docs/basics#phrase-hints) for more details.
         */
        phraseHints?: string[] | null;
        /**
         * Sample rate (in Hertz) of the audio content sent in the query. Refer to [Cloud Speech API documentation](https://cloud.google.com/speech-to-text/docs/basics) for more details.
         */
        sampleRateHertz?: number | null;
        /**
         * Optional. If `false` (default), recognition does not cease until the client closes the stream. If `true`, the recognizer will detect a single spoken utterance in input audio. Recognition ceases when it detects the audio's voice has stopped or paused. In this case, once a detected intent is received, the client should close the stream and start a new request with a new stream as needed. Note: This setting is relevant only for streaming methods.
         */
        singleUtterance?: boolean | null;
    }
    /**
     * An intent represents a user's intent to interact with a conversational agent. You can provide information for the Dialogflow API to use to match user input to an intent by adding training phrases (i.e., examples of user input) to your intent.
     */
    export interface Schema$GoogleCloudDialogflowCxV3Intent {
        /**
         * Human readable description for better understanding an intent like its scope, content, result etc. Maximum character limit: 140 characters.
         */
        description?: string | null;
        /**
         * Required. The human-readable name of the intent, unique within the agent.
         */
        displayName?: string | null;
        /**
         * Indicates whether this is a fallback intent. Currently only default fallback intent is allowed in the agent, which is added upon agent creation. Adding training phrases to fallback intent is useful in the case of requests that are mistakenly matched, since training phrases assigned to fallback intents act as negative examples that triggers no-match event.
         */
        isFallback?: boolean | null;
        /**
         * The key/value metadata to label an intent. Labels can contain lowercase letters, digits and the symbols '-' and '_'. International characters are allowed, including letters from unicase alphabets. Keys must start with a letter. Keys and values can be no longer than 63 characters and no more than 128 bytes. Prefix "sys-" is reserved for Dialogflow defined labels. Currently allowed Dialogflow defined labels include: * sys-head * sys-contextual The above labels do not require value. "sys-head" means the intent is a head intent. "sys.contextual" means the intent is a contextual intent.
         */
        labels?: {
            [key: string]: string;
        } | null;
        /**
         * The unique identifier of the intent. Required for the Intents.UpdateIntent method. Intents.CreateIntent populates the name automatically. Format: `projects//locations//agents//intents/`.
         */
        name?: string | null;
        /**
         * The collection of parameters associated with the intent.
         */
        parameters?: Schema$GoogleCloudDialogflowCxV3IntentParameter[];
        /**
         * The priority of this intent. Higher numbers represent higher priorities. - If the supplied value is unspecified or 0, the service translates the value to 500,000, which corresponds to the `Normal` priority in the console. - If the supplied value is negative, the intent is ignored in runtime detect intent requests.
         */
        priority?: number | null;
        /**
         * The collection of training phrases the agent is trained on to identify the intent.
         */
        trainingPhrases?: Schema$GoogleCloudDialogflowCxV3IntentTrainingPhrase[];
    }
    /**
     * Represents the intent to trigger programmatically rather than as a result of natural language processing.
     */
    export interface Schema$GoogleCloudDialogflowCxV3IntentInput {
        /**
         * Required. The unique identifier of the intent. Format: `projects//locations//agents//intents/`.
         */
        intent?: string | null;
    }
    /**
     * Represents an intent parameter.
     */
    export interface Schema$GoogleCloudDialogflowCxV3IntentParameter {
        /**
         * Required. The entity type of the parameter. Format: `projects/-/locations/-/agents/-/entityTypes/` for system entity types (for example, `projects/-/locations/-/agents/-/entityTypes/sys.date`), or `projects//locations//agents//entityTypes/` for developer entity types.
         */
        entityType?: string | null;
        /**
         * Required. The unique identifier of the parameter. This field is used by training phrases to annotate their parts.
         */
        id?: string | null;
        /**
         * Indicates whether the parameter represents a list of values.
         */
        isList?: boolean | null;
        /**
         * Indicates whether the parameter content should be redacted in log. If redaction is enabled, the parameter content will be replaced by parameter name during logging. Note: the parameter content is subject to redaction if either parameter level redaction or entity type level redaction is enabled.
         */
        redact?: boolean | null;
    }
    /**
     * Represents an example that the agent is trained on to identify the intent.
     */
    export interface Schema$GoogleCloudDialogflowCxV3IntentTrainingPhrase {
        /**
         * Output only. The unique identifier of the training phrase.
         */
        id?: string | null;
        /**
         * Required. The ordered list of training phrase parts. The parts are concatenated in order to form the training phrase. Note: The API does not automatically annotate training phrases like the Dialogflow Console does. Note: Do not forget to include whitespace at part boundaries, so the training phrase is well formatted when the parts are concatenated. If the training phrase does not need to be annotated with parameters, you just need a single part with only the Part.text field set. If you want to annotate the training phrase, you must create multiple parts, where the fields of each part are populated in one of two ways: - `Part.text` is set to a part of the phrase that has no parameters. - `Part.text` is set to a part of the phrase that you want to annotate, and the `parameter_id` field is set.
         */
        parts?: Schema$GoogleCloudDialogflowCxV3IntentTrainingPhrasePart[];
        /**
         * Indicates how many times this example was added to the intent.
         */
        repeatCount?: number | null;
    }
    /**
     * Represents a part of a training phrase.
     */
    export interface Schema$GoogleCloudDialogflowCxV3IntentTrainingPhrasePart {
        /**
         * The parameter used to annotate this part of the training phrase. This field is required for annotated parts of the training phrase.
         */
        parameterId?: string | null;
        /**
         * Required. The text for this part.
         */
        text?: string | null;
    }
    /**
     * A Dialogflow CX conversation (session) can be described and visualized as a state machine. The states of a CX session are represented by pages. For each flow, you define many pages, where your combined pages can handle a complete conversation on the topics the flow is designed for. At any given moment, exactly one page is the current page, the current page is considered active, and the flow associated with that page is considered active. Every flow has a special start page. When a flow initially becomes active, the start page page becomes the current page. For each conversational turn, the current page will either stay the same or transition to another page. You configure each page to collect information from the end-user that is relevant for the conversational state represented by the page. For more information, see the [Page guide](https://cloud.google.com/dialogflow/cx/docs/concept/page).
     */
    export interface Schema$GoogleCloudDialogflowCxV3Page {
        /**
         * Required. The human-readable name of the page, unique within the agent.
         */
        displayName?: string | null;
        /**
         * The fulfillment to call when the session is entering the page.
         */
        entryFulfillment?: Schema$GoogleCloudDialogflowCxV3Fulfillment;
        /**
         * Handlers associated with the page to handle events such as webhook errors, no match or no input.
         */
        eventHandlers?: Schema$GoogleCloudDialogflowCxV3EventHandler[];
        /**
         * The form associated with the page, used for collecting parameters relevant to the page.
         */
        form?: Schema$GoogleCloudDialogflowCxV3Form;
        /**
         * The unique identifier of the page. Required for the Pages.UpdatePage method. Pages.CreatePage populates the name automatically. Format: `projects//locations//agents//flows//pages/`.
         */
        name?: string | null;
        /**
         * Ordered list of `TransitionRouteGroups` associated with the page. Transition route groups must be unique within a page. * If multiple transition routes within a page scope refer to the same intent, then the precedence order is: page's transition route -\> page's transition route group -\> flow's transition routes. * If multiple transition route groups within a page contain the same intent, then the first group in the ordered list takes precedence. Format:`projects//locations//agents//flows//transitionRouteGroups/`.
         */
        transitionRouteGroups?: string[] | null;
        /**
         * A list of transitions for the transition rules of this page. They route the conversation to another page in the same flow, or another flow. When we are in a certain page, the TransitionRoutes are evalauted in the following order: * TransitionRoutes defined in the page with intent specified. * TransitionRoutes defined in the transition route groups with intent specified. * TransitionRoutes defined in flow with intent specified. * TransitionRoutes defined in the transition route groups with intent specified. * TransitionRoutes defined in the page with only condition specified. * TransitionRoutes defined in the transition route groups with only condition specified.
         */
        transitionRoutes?: Schema$GoogleCloudDialogflowCxV3TransitionRoute[];
    }
    /**
     * Represents page information communicated to and from the webhook.
     */
    export interface Schema$GoogleCloudDialogflowCxV3PageInfo {
        /**
         * Always present for WebhookRequest. Ignored for WebhookResponse. The unique identifier of the current page. Format: `projects//locations//agents//flows//pages/`.
         */
        currentPage?: string | null;
        /**
         * Optional for both WebhookRequest and WebhookResponse. Information about the form.
         */
        formInfo?: Schema$GoogleCloudDialogflowCxV3PageInfoFormInfo;
    }
    /**
     * Represents form information.
     */
    export interface Schema$GoogleCloudDialogflowCxV3PageInfoFormInfo {
        /**
         * Optional for both WebhookRequest and WebhookResponse. The parameters contained in the form. Note that the webhook cannot add or remove any form parameter.
         */
        parameterInfo?: Schema$GoogleCloudDialogflowCxV3PageInfoFormInfoParameterInfo[];
    }
    /**
     * Represents parameter information.
     */
    export interface Schema$GoogleCloudDialogflowCxV3PageInfoFormInfoParameterInfo {
        /**
         * Always present for WebhookRequest. Required for WebhookResponse. The human-readable name of the parameter, unique within the form. This field cannot be modified by the webhook.
         */
        displayName?: string | null;
        /**
         * Optional for WebhookRequest. Ignored for WebhookResponse. Indicates if the parameter value was just collected on the last conversation turn.
         */
        justCollected?: boolean | null;
        /**
         * Optional for both WebhookRequest and WebhookResponse. Indicates whether the parameter is required. Optional parameters will not trigger prompts; however, they are filled if the user specifies them. Required parameters must be filled before form filling concludes.
         */
        required?: boolean | null;
        /**
         * Always present for WebhookRequest. Required for WebhookResponse. The state of the parameter. This field can be set to INVALID by the webhook to invalidate the parameter; other values set by the webhook will be ignored.
         */
        state?: string | null;
        /**
         * Optional for both WebhookRequest and WebhookResponse. The value of the parameter. This field can be set by the webhook to change the parameter value.
         */
        value?: any | null;
    }
    /**
     * Represents the query input. It can contain one of: 1. A conversational query in the form of text. 2. An intent query that specifies which intent to trigger. 3. Natural language speech audio to be processed. 4. An event to be triggered.
     */
    export interface Schema$GoogleCloudDialogflowCxV3QueryInput {
        /**
         * The natural language speech audio to be processed.
         */
        audio?: Schema$GoogleCloudDialogflowCxV3AudioInput;
        /**
         * The DTMF event to be handled.
         */
        dtmf?: Schema$GoogleCloudDialogflowCxV3DtmfInput;
        /**
         * The event to be triggered.
         */
        event?: Schema$GoogleCloudDialogflowCxV3EventInput;
        /**
         * The intent to be triggered.
         */
        intent?: Schema$GoogleCloudDialogflowCxV3IntentInput;
        /**
         * Required. The language of the input. See [Language Support](https://cloud.google.com/dialogflow/cx/docs/reference/language) for a list of the currently supported language codes. Note that queries in the same session do not necessarily need to specify the same language.
         */
        languageCode?: string | null;
        /**
         * The natural language text to be processed.
         */
        text?: Schema$GoogleCloudDialogflowCxV3TextInput;
    }
    /**
     * Metadata for ReloadDocument operation.
     */
    export interface Schema$GoogleCloudDialogflowCxV3ReloadDocumentOperationMetadata {
        /**
         * The generic information of the operation.
         */
        genericMetadata?: Schema$GoogleCloudDialogflowCxV3GenericKnowledgeOperationMetadata;
    }
    /**
     * Represents a response message that can be returned by a conversational agent. Response messages are also used for output audio synthesis. The approach is as follows: * If at least one OutputAudioText response is present, then all OutputAudioText responses are linearly concatenated, and the result is used for output audio synthesis. * If the OutputAudioText responses are a mixture of text and SSML, then the concatenated result is treated as SSML; otherwise, the result is treated as either text or SSML as appropriate. The agent designer should ideally use either text or SSML consistently throughout the bot design. * Otherwise, all Text responses are linearly concatenated, and the result is used for output audio synthesis. This approach allows for more sophisticated user experience scenarios, where the text displayed to the user may differ from what is heard.
     */
    export interface Schema$GoogleCloudDialogflowCxV3ResponseMessage {
        /**
         * Indicates that the conversation succeeded.
         */
        conversationSuccess?: Schema$GoogleCloudDialogflowCxV3ResponseMessageConversationSuccess;
        /**
         * Output only. A signal that indicates the interaction with the Dialogflow agent has ended. This message is generated by Dialogflow only when the conversation reaches `END_SESSION` page. It is not supposed to be defined by the user. It's guaranteed that there is at most one such message in each response.
         */
        endInteraction?: Schema$GoogleCloudDialogflowCxV3ResponseMessageEndInteraction;
        /**
         * Hands off conversation to a human agent.
         */
        liveAgentHandoff?: Schema$GoogleCloudDialogflowCxV3ResponseMessageLiveAgentHandoff;
        /**
         * Output only. An audio response message composed of both the synthesized Dialogflow agent responses and responses defined via play_audio. This message is generated by Dialogflow only and not supposed to be defined by the user.
         */
        mixedAudio?: Schema$GoogleCloudDialogflowCxV3ResponseMessageMixedAudio;
        /**
         * A text or ssml response that is preferentially used for TTS output audio synthesis, as described in the comment on the ResponseMessage message.
         */
        outputAudioText?: Schema$GoogleCloudDialogflowCxV3ResponseMessageOutputAudioText;
        /**
         * Returns a response containing a custom, platform-specific payload.
         */
        payload?: {
            [key: string]: any;
        } | null;
        /**
         * Signal that the client should play an audio clip hosted at a client-specific URI. Dialogflow uses this to construct mixed_audio. However, Dialogflow itself does not try to read or process the URI in any way.
         */
        playAudio?: Schema$GoogleCloudDialogflowCxV3ResponseMessagePlayAudio;
        /**
         * Returns a text response.
         */
        text?: Schema$GoogleCloudDialogflowCxV3ResponseMessageText;
    }
    /**
     * Indicates that the conversation succeeded, i.e., the bot handled the issue that the customer talked to it about. Dialogflow only uses this to determine which conversations should be counted as successful and doesn't process the metadata in this message in any way. Note that Dialogflow also considers conversations that get to the conversation end page as successful even if they don't return ConversationSuccess. You may set this, for example: * In the entry_fulfillment of a Page if entering the page indicates that the conversation succeeded. * In a webhook response when you determine that you handled the customer issue.
     */
    export interface Schema$GoogleCloudDialogflowCxV3ResponseMessageConversationSuccess {
        /**
         * Custom metadata. Dialogflow doesn't impose any structure on this.
         */
        metadata?: {
            [key: string]: any;
        } | null;
    }
    /**
     * Indicates that interaction with the Dialogflow agent has ended. This message is generated by Dialogflow only and not supposed to be defined by the user.
     */
    export interface Schema$GoogleCloudDialogflowCxV3ResponseMessageEndInteraction {
    }
    /**
     * Indicates that the conversation should be handed off to a live agent. Dialogflow only uses this to determine which conversations were handed off to a human agent for measurement purposes. What else to do with this signal is up to you and your handoff procedures. You may set this, for example: * In the entry_fulfillment of a Page if entering the page indicates something went extremely wrong in the conversation. * In a webhook response when you determine that the customer issue can only be handled by a human.
     */
    export interface Schema$GoogleCloudDialogflowCxV3ResponseMessageLiveAgentHandoff {
        /**
         * Custom metadata for your handoff procedure. Dialogflow doesn't impose any structure on this.
         */
        metadata?: {
            [key: string]: any;
        } | null;
    }
    /**
     * Represents an audio message that is composed of both segments synthesized from the Dialogflow agent prompts and ones hosted externally at the specified URIs. The external URIs are specified via play_audio. This message is generated by Dialogflow only and not supposed to be defined by the user.
     */
    export interface Schema$GoogleCloudDialogflowCxV3ResponseMessageMixedAudio {
        /**
         * Segments this audio response is composed of.
         */
        segments?: Schema$GoogleCloudDialogflowCxV3ResponseMessageMixedAudioSegment[];
    }
    /**
     * Represents one segment of audio.
     */
    export interface Schema$GoogleCloudDialogflowCxV3ResponseMessageMixedAudioSegment {
        /**
         * Output only. Whether the playback of this segment can be interrupted by the end user's speech and the client should then start the next Dialogflow request.
         */
        allowPlaybackInterruption?: boolean | null;
        /**
         * Raw audio synthesized from the Dialogflow agent's response using the output config specified in the request.
         */
        audio?: string | null;
        /**
         * Client-specific URI that points to an audio clip accessible to the client. Dialogflow does not impose any validation on it.
         */
        uri?: string | null;
    }
    /**
     * A text or ssml response that is preferentially used for TTS output audio synthesis, as described in the comment on the ResponseMessage message.
     */
    export interface Schema$GoogleCloudDialogflowCxV3ResponseMessageOutputAudioText {
        /**
         * Output only. Whether the playback of this message can be interrupted by the end user's speech and the client can then starts the next Dialogflow request.
         */
        allowPlaybackInterruption?: boolean | null;
        /**
         * The SSML text to be synthesized. For more information, see [SSML](/speech/text-to-speech/docs/ssml).
         */
        ssml?: string | null;
        /**
         * The raw text to be synthesized.
         */
        text?: string | null;
    }
    /**
     * Specifies an audio clip to be played by the client as part of the response.
     */
    export interface Schema$GoogleCloudDialogflowCxV3ResponseMessagePlayAudio {
        /**
         * Output only. Whether the playback of this message can be interrupted by the end user's speech and the client can then starts the next Dialogflow request.
         */
        allowPlaybackInterruption?: boolean | null;
        /**
         * Required. URI of the audio clip. Dialogflow does not impose any validation on this value. It is specific to the client that reads it.
         */
        audioUri?: string | null;
    }
    /**
     * The text response message.
     */
    export interface Schema$GoogleCloudDialogflowCxV3ResponseMessageText {
        /**
         * Output only. Whether the playback of this message can be interrupted by the end user's speech and the client can then starts the next Dialogflow request.
         */
        allowPlaybackInterruption?: boolean | null;
        /**
         * Required. A collection of text responses.
         */
        text?: string[] | null;
    }
    /**
     * Metadata returned for the Environments.RunContinuousTest long running operation.
     */
    export interface Schema$GoogleCloudDialogflowCxV3RunContinuousTestMetadata {
        /**
         * The test errors.
         */
        errors?: Schema$GoogleCloudDialogflowCxV3TestError[];
    }
    /**
     * The response message for Environments.RunContinuousTest.
     */
    export interface Schema$GoogleCloudDialogflowCxV3RunContinuousTestResponse {
        /**
         * The result for a continuous test run.
         */
        continuousTestResult?: Schema$GoogleCloudDialogflowCxV3ContinuousTestResult;
    }
    /**
     * Metadata returned for the TestCases.RunTestCase long running operation. This message currently has no fields.
     */
    export interface Schema$GoogleCloudDialogflowCxV3RunTestCaseMetadata {
    }
    /**
     * The response message for TestCases.RunTestCase.
     */
    export interface Schema$GoogleCloudDialogflowCxV3RunTestCaseResponse {
        /**
         * The result.
         */
        result?: Schema$GoogleCloudDialogflowCxV3TestCaseResult;
    }
    /**
     * Represents session information communicated to and from the webhook.
     */
    export interface Schema$GoogleCloudDialogflowCxV3SessionInfo {
        /**
         * Optional for WebhookRequest. Optional for WebhookResponse. All parameters collected from forms and intents during the session. Parameters can be created, updated, or removed by the webhook. To remove a parameter from the session, the webhook should explicitly set the parameter value to null in WebhookResponse. The map is keyed by parameters' display names.
         */
        parameters?: {
            [key: string]: any;
        } | null;
        /**
         * Always present for WebhookRequest. Ignored for WebhookResponse. The unique identifier of the session. This field can be used by the webhook to identify a session. Format: `projects//locations//agents//sessions/` or `projects//locations//agents//environments//sessions/` if environment is specified.
         */
        session?: string | null;
    }
    /**
     * Represents a test case.
     */
    export interface Schema$GoogleCloudDialogflowCxV3TestCase {
        /**
         * Output only. When the test was created.
         */
        creationTime?: string | null;
        /**
         * Required. The human-readable name of the test case, unique within the agent. Limit of 200 characters.
         */
        displayName?: string | null;
        /**
         * The latest test result.
         */
        lastTestResult?: Schema$GoogleCloudDialogflowCxV3TestCaseResult;
        /**
         * The unique identifier of the test case. TestCases.CreateTestCase will populate the name automatically. Otherwise use format: `projects//locations//agents/ /testCases/`.
         */
        name?: string | null;
        /**
         * Additional freeform notes about the test case. Limit of 400 characters.
         */
        notes?: string | null;
        /**
         * Tags are short descriptions that users may apply to test cases for organizational and filtering purposes. Each tag should start with "#" and has a limit of 30 characters.
         */
        tags?: string[] | null;
        /**
         * The conversation turns uttered when the test case was created, in chronological order. These include the canonical set of agent utterances that should occur when the agent is working properly.
         */
        testCaseConversationTurns?: Schema$GoogleCloudDialogflowCxV3ConversationTurn[];
        /**
         * Config for the test case.
         */
        testConfig?: Schema$GoogleCloudDialogflowCxV3TestConfig;
    }
    /**
     * Error info for importing a test.
     */
    export interface Schema$GoogleCloudDialogflowCxV3TestCaseError {
        /**
         * The status associated with the test case.
         */
        status?: Schema$GoogleRpcStatus;
        /**
         * The test case.
         */
        testCase?: Schema$GoogleCloudDialogflowCxV3TestCase;
    }
    /**
     * Represents a result from running a test case in an agent environment.
     */
    export interface Schema$GoogleCloudDialogflowCxV3TestCaseResult {
        /**
         * The conversation turns uttered during the test case replay in chronological order.
         */
        conversationTurns?: Schema$GoogleCloudDialogflowCxV3ConversationTurn[];
        /**
         * Environment where the test was run. If not set, it indicates the draft environment.
         */
        environment?: string | null;
        /**
         * The resource name for the test case result. Format: `projects//locations//agents//testCases/ /results/`.
         */
        name?: string | null;
        /**
         * Whether the test case passed in the agent environment.
         */
        testResult?: string | null;
        /**
         * The time that the test was run.
         */
        testTime?: string | null;
    }
    /**
     * Represents configurations for a test case.
     */
    export interface Schema$GoogleCloudDialogflowCxV3TestConfig {
        /**
         * Flow name. If not set, default start flow is assumed. Format: `projects//locations//agents//flows/`.
         */
        flow?: string | null;
        /**
         * Session parameters to be compared when calculating differences.
         */
        trackingParameters?: string[] | null;
    }
    /**
     * Error info for running a test.
     */
    export interface Schema$GoogleCloudDialogflowCxV3TestError {
        /**
         * The status associated with the test.
         */
        status?: Schema$GoogleRpcStatus;
        /**
         * The test case resource name.
         */
        testCase?: string | null;
        /**
         * The timestamp when the test was completed.
         */
        testTime?: string | null;
    }
    /**
     * The description of differences between original and replayed agent output.
     */
    export interface Schema$GoogleCloudDialogflowCxV3TestRunDifference {
        /**
         * A description of the diff, showing the actual output vs expected output.
         */
        description?: string | null;
        /**
         * The type of diff.
         */
        type?: string | null;
    }
    /**
     * Represents the natural language text to be processed.
     */
    export interface Schema$GoogleCloudDialogflowCxV3TextInput {
        /**
         * Required. The UTF-8 encoded natural language text to be processed. Text length must not exceed 256 characters.
         */
        text?: string | null;
    }
    /**
     * A transition route specifies a intent that can be matched and/or a data condition that can be evaluated during a session. When a specified transition is matched, the following actions are taken in order: * If there is a `trigger_fulfillment` associated with the transition, it will be called. * If there is a `target_page` associated with the transition, the session will transition into the specified page. * If there is a `target_flow` associated with the transition, the session will transition into the specified flow.
     */
    export interface Schema$GoogleCloudDialogflowCxV3TransitionRoute {
        /**
         * The condition to evaluate against form parameters or session parameters. See the [conditions reference](https://cloud.google.com/dialogflow/cx/docs/reference/condition). At least one of `intent` or `condition` must be specified. When both `intent` and `condition` are specified, the transition can only happen when both are fulfilled.
         */
        condition?: string | null;
        /**
         * The unique identifier of an Intent. Format: `projects//locations//agents//intents/`. Indicates that the transition can only happen when the given intent is matched. At least one of `intent` or `condition` must be specified. When both `intent` and `condition` are specified, the transition can only happen when both are fulfilled.
         */
        intent?: string | null;
        /**
         * Output only. The unique identifier of this transition route.
         */
        name?: string | null;
        /**
         * The target flow to transition to. Format: `projects//locations//agents//flows/`.
         */
        targetFlow?: string | null;
        /**
         * The target page to transition to. Format: `projects//locations//agents//flows//pages/`.
         */
        targetPage?: string | null;
        /**
         * The fulfillment to call when the condition is satisfied. At least one of `trigger_fulfillment` and `target` must be specified. When both are defined, `trigger_fulfillment` is executed first.
         */
        triggerFulfillment?: Schema$GoogleCloudDialogflowCxV3Fulfillment;
    }
    /**
     * Metadata for UpdateDocument operation.
     */
    export interface Schema$GoogleCloudDialogflowCxV3UpdateDocumentOperationMetadata {
        /**
         * The generic information of the operation.
         */
        genericMetadata?: Schema$GoogleCloudDialogflowCxV3GenericKnowledgeOperationMetadata;
    }
    /**
     * The request message for a webhook call. The request is sent as a JSON object and the field names will be presented in camel cases.
     */
    export interface Schema$GoogleCloudDialogflowCxV3WebhookRequest {
        /**
         * Always present. The unique identifier of the DetectIntentResponse that will be returned to the API caller.
         */
        detectIntentResponseId?: string | null;
        /**
         * Always present. Information about the fulfillment that triggered this webhook call.
         */
        fulfillmentInfo?: Schema$GoogleCloudDialogflowCxV3WebhookRequestFulfillmentInfo;
        /**
         * Information about the last matched intent.
         */
        intentInfo?: Schema$GoogleCloudDialogflowCxV3WebhookRequestIntentInfo;
        /**
         * The language code specified in the original request.
         */
        languageCode?: string | null;
        /**
         * The list of rich message responses to present to the user. Webhook can choose to append or replace this list in WebhookResponse.fulfillment_response;
         */
        messages?: Schema$GoogleCloudDialogflowCxV3ResponseMessage[];
        /**
         * Information about page status.
         */
        pageInfo?: Schema$GoogleCloudDialogflowCxV3PageInfo;
        /**
         * Custom data set in QueryParameters.payload.
         */
        payload?: {
            [key: string]: any;
        } | null;
        /**
         * The sentiment analysis result of the current user request. The field is filled when sentiment analysis is configured to be enabled for the request.
         */
        sentimentAnalysisResult?: Schema$GoogleCloudDialogflowCxV3WebhookRequestSentimentAnalysisResult;
        /**
         * Information about session status.
         */
        sessionInfo?: Schema$GoogleCloudDialogflowCxV3SessionInfo;
        /**
         * If natural language text was provided as input, this field will contain a copy of the text.
         */
        text?: string | null;
        /**
         * If natural language speech audio was provided as input, this field will contain the transcript for the audio.
         */
        transcript?: string | null;
        /**
         * If an event was provided as input, this field will contain the name of the event.
         */
        triggerEvent?: string | null;
        /**
         * If an intent was provided as input, this field will contain a copy of the intent identifier. Format: `projects//locations//agents//intents/`.
         */
        triggerIntent?: string | null;
    }
    /**
     * Represents fulfillment information communicated to the webhook.
     */
    export interface Schema$GoogleCloudDialogflowCxV3WebhookRequestFulfillmentInfo {
        /**
         * Always present. The tag used to identify which fulfillment is being called.
         */
        tag?: string | null;
    }
    /**
     * Represents intent information communicated to the webhook.
     */
    export interface Schema$GoogleCloudDialogflowCxV3WebhookRequestIntentInfo {
        /**
         * The confidence of the matched intent. Values range from 0.0 (completely uncertain) to 1.0 (completely certain).
         */
        confidence?: number | null;
        /**
         * Always present. The display name of the last matched intent.
         */
        displayName?: string | null;
        /**
         * Always present. The unique identifier of the last matched intent. Format: `projects//locations//agents//intents/`.
         */
        lastMatchedIntent?: string | null;
        /**
         * Parameters identified as a result of intent matching. This is a map of the name of the identified parameter to the value of the parameter identified from the user's utterance. All parameters defined in the matched intent that are identified will be surfaced here.
         */
        parameters?: {
            [key: string]: Schema$GoogleCloudDialogflowCxV3WebhookRequestIntentInfoIntentParameterValue;
        } | null;
    }
    /**
     * Represents a value for an intent parameter.
     */
    export interface Schema$GoogleCloudDialogflowCxV3WebhookRequestIntentInfoIntentParameterValue {
        /**
         * Always present. Original text value extracted from user utterance.
         */
        originalValue?: string | null;
        /**
         * Always present. Structured value for the parameter extracted from user utterance.
         */
        resolvedValue?: any | null;
    }
    /**
     * Represents the result of sentiment analysis.
     */
    export interface Schema$GoogleCloudDialogflowCxV3WebhookRequestSentimentAnalysisResult {
        /**
         * A non-negative number in the [0, +inf) range, which represents the absolute magnitude of sentiment, regardless of score (positive or negative).
         */
        magnitude?: number | null;
        /**
         * Sentiment score between -1.0 (negative sentiment) and 1.0 (positive sentiment).
         */
        score?: number | null;
    }
    /**
     * The response message for a webhook call.
     */
    export interface Schema$GoogleCloudDialogflowCxV3WebhookResponse {
        /**
         * The fulfillment response to send to the user. This field can be omitted by the webhook if it does not intend to send any response to the user.
         */
        fulfillmentResponse?: Schema$GoogleCloudDialogflowCxV3WebhookResponseFulfillmentResponse;
        /**
         * Information about page status. This field can be omitted by the webhook if it does not intend to modify page status.
         */
        pageInfo?: Schema$GoogleCloudDialogflowCxV3PageInfo;
        /**
         * Value to append directly to QueryResult.webhook_payloads.
         */
        payload?: {
            [key: string]: any;
        } | null;
        /**
         * Information about session status. This field can be omitted by the webhook if it does not intend to modify session status.
         */
        sessionInfo?: Schema$GoogleCloudDialogflowCxV3SessionInfo;
        /**
         * The target flow to transition to. Format: `projects//locations//agents//flows/`.
         */
        targetFlow?: string | null;
        /**
         * The target page to transition to. Format: `projects//locations//agents//flows//pages/`.
         */
        targetPage?: string | null;
    }
    /**
     * Represents a fulfillment response to the user.
     */
    export interface Schema$GoogleCloudDialogflowCxV3WebhookResponseFulfillmentResponse {
        /**
         * Merge behavior for `messages`.
         */
        mergeBehavior?: string | null;
        /**
         * The list of rich message responses to present to the user.
         */
        messages?: Schema$GoogleCloudDialogflowCxV3ResponseMessage[];
    }
    /**
     * Represents a part of a message possibly annotated with an entity. The part can be an entity or purely a part of the message between two entities or message start/end.
     */
    export interface Schema$GoogleCloudDialogflowV2AnnotatedMessagePart {
        /**
         * The [Dialogflow system entity type](https://cloud.google.com/dialogflow/docs/reference/system-entities) of this message part. If this is empty, Dialogflow could not annotate the phrase part with a system entity.
         */
        entityType?: string | null;
        /**
         * The [Dialogflow system entity formatted value ](https://cloud.google.com/dialogflow/docs/reference/system-entities) of this message part. For example for a system entity of type `@sys.unit-currency`, this may contain: { "amount": 5, "currency": "USD" \}
         */
        formattedValue?: any | null;
        /**
         * A part of a message possibly annotated with an entity.
         */
        text?: string | null;
    }
    /**
     * Represents article answer.
     */
    export interface Schema$GoogleCloudDialogflowV2ArticleAnswer {
        /**
         * The name of answer record, in the format of "projects//locations//answerRecords/"
         */
        answerRecord?: string | null;
        /**
         * Article match confidence. The system's confidence score that this article is a good match for this conversation, as a value from 0.0 (completely uncertain) to 1.0 (completely certain).
         */
        confidence?: number | null;
        /**
         * A map that contains metadata about the answer and the document from which it originates.
         */
        metadata?: {
            [key: string]: string;
        } | null;
        /**
         * Article snippets.
         */
        snippets?: string[] | null;
        /**
         * The article title.
         */
        title?: string | null;
        /**
         * The article URI.
         */
        uri?: string | null;
    }
    /**
     * The response message for EntityTypes.BatchUpdateEntityTypes.
     */
    export interface Schema$GoogleCloudDialogflowV2BatchUpdateEntityTypesResponse {
        /**
         * The collection of updated or created entity types.
         */
        entityTypes?: Schema$GoogleCloudDialogflowV2EntityType[];
    }
    /**
     * The response message for Intents.BatchUpdateIntents.
     */
    export interface Schema$GoogleCloudDialogflowV2BatchUpdateIntentsResponse {
        /**
         * The collection of updated or created intents.
         */
        intents?: Schema$GoogleCloudDialogflowV2Intent[];
    }
    /**
     * Represents a part of a message possibly annotated with an entity. The part can be an entity or purely a part of the message between two entities or message start/end.
     */
    export interface Schema$GoogleCloudDialogflowV2beta1AnnotatedMessagePart {
        /**
         * Optional. The [Dialogflow system entity type](https://cloud.google.com/dialogflow/docs/reference/system-entities) of this message part. If this is empty, Dialogflow could not annotate the phrase part with a system entity.
         */
        entityType?: string | null;
        /**
         * Optional. The [Dialogflow system entity formatted value ](https://cloud.google.com/dialogflow/docs/reference/system-entities) of this message part. For example for a system entity of type `@sys.unit-currency`, this may contain: { "amount": 5, "currency": "USD" \}
         */
        formattedValue?: any | null;
        /**
         * Required. A part of a message possibly annotated with an entity.
         */
        text?: string | null;
    }
    /**
     * Represents article answer.
     */
    export interface Schema$GoogleCloudDialogflowV2beta1ArticleAnswer {
        /**
         * The name of answer record, in the format of "projects//locations//answerRecords/"
         */
        answerRecord?: string | null;
        /**
         * A map that contains metadata about the answer and the document from which it originates.
         */
        metadata?: {
            [key: string]: string;
        } | null;
        /**
         * Output only. Article snippets.
         */
        snippets?: string[] | null;
        /**
         * The article title.
         */
        title?: string | null;
        /**
         * The article URI.
         */
        uri?: string | null;
    }
    /**
     * The response message for EntityTypes.BatchUpdateEntityTypes.
     */
    export interface Schema$GoogleCloudDialogflowV2beta1BatchUpdateEntityTypesResponse {
        /**
         * The collection of updated or created entity types.
         */
        entityTypes?: Schema$GoogleCloudDialogflowV2beta1EntityType[];
    }
    /**
     * The response message for Intents.BatchUpdateIntents.
     */
    export interface Schema$GoogleCloudDialogflowV2beta1BatchUpdateIntentsResponse {
        /**
         * The collection of updated or created intents.
         */
        intents?: Schema$GoogleCloudDialogflowV2beta1Intent[];
    }
    /**
     * Dialogflow contexts are similar to natural language context. If a person says to you "they are orange", you need context in order to understand what "they" is referring to. Similarly, for Dialogflow to handle an end-user expression like that, it needs to be provided with context in order to correctly match an intent. Using contexts, you can control the flow of a conversation. You can configure contexts for an intent by setting input and output contexts, which are identified by string names. When an intent is matched, any configured output contexts for that intent become active. While any contexts are active, Dialogflow is more likely to match intents that are configured with input contexts that correspond to the currently active contexts. For more information about context, see the [Contexts guide](https://cloud.google.com/dialogflow/docs/contexts-overview).
     */
    export interface Schema$GoogleCloudDialogflowV2beta1Context {
        /**
         * Optional. The number of conversational query requests after which the context expires. The default is `0`. If set to `0`, the context expires immediately. Contexts expire automatically after 20 minutes if there are no matching queries.
         */
        lifespanCount?: number | null;
        /**
         * Required. The unique identifier of the context. Supported formats: - `projects//agent/sessions//contexts/`, - `projects//locations//agent/sessions//contexts/`, - `projects//agent/environments//users//sessions//contexts/`, - `projects//locations//agent/environments//users//sessions//contexts/`, The `Context ID` is always converted to lowercase, may only contain characters in a-zA-Z0-9_-% and may be at most 250 bytes long. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user. The following context names are reserved for internal use by Dialogflow. You should not use these contexts or create contexts with these names: * `__system_counters__` * `*_id_dialog_context` * `*_dialog_params_size`
         */
        name?: string | null;
        /**
         * Optional. The collection of parameters associated with this context. Depending on your protocol or client library language, this is a map, associative array, symbol table, dictionary, or JSON object composed of a collection of (MapKey, MapValue) pairs: - MapKey type: string - MapKey value: parameter name - MapValue type: - If parameter's entity type is a composite entity: map - Else: depending on parameter value type, could be one of string, number, boolean, null, list or map - MapValue value: - If parameter's entity type is a composite entity: map from composite entity property names to property values - Else: parameter value
         */
        parameters?: {
            [key: string]: any;
        } | null;
    }
    /**
     * Represents a notification sent to Pub/Sub subscribers for conversation lifecycle events.
     */
    export interface Schema$GoogleCloudDialogflowV2beta1ConversationEvent {
        /**
         * Required. The unique identifier of the conversation this notification refers to. Format: `projects//conversations/`.
         */
        conversation?: string | null;
        /**
         * Optional. More detailed information about an error. Only set for type UNRECOVERABLE_ERROR_IN_PHONE_CALL.
         */
        errorStatus?: Schema$GoogleRpcStatus;
        /**
         * Payload of NEW_MESSAGE event.
         */
        newMessagePayload?: Schema$GoogleCloudDialogflowV2beta1Message;
        /**
         * Required. The type of the event that this notification refers to.
         */
        type?: string | null;
    }
    /**
     * Each intent parameter has a type, called the entity type, which dictates exactly how data from an end-user expression is extracted. Dialogflow provides predefined system entities that can match many common types of data. For example, there are system entities for matching dates, times, colors, email addresses, and so on. You can also create your own custom entities for matching custom data. For example, you could define a vegetable entity that can match the types of vegetables available for purchase with a grocery store agent. For more information, see the [Entity guide](https://cloud.google.com/dialogflow/docs/entities-overview).
     */
    export interface Schema$GoogleCloudDialogflowV2beta1EntityType {
        /**
         * Optional. Indicates whether the entity type can be automatically expanded.
         */
        autoExpansionMode?: string | null;
        /**
         * Required. The name of the entity type.
         */
        displayName?: string | null;
        /**
         * Optional. Enables fuzzy entity extraction during classification.
         */
        enableFuzzyExtraction?: boolean | null;
        /**
         * Optional. The collection of entity entries associated with the entity type.
         */
        entities?: Schema$GoogleCloudDialogflowV2beta1EntityTypeEntity[];
        /**
         * Required. Indicates the kind of entity type.
         */
        kind?: string | null;
        /**
         * The unique identifier of the entity type. Required for EntityTypes.UpdateEntityType and EntityTypes.BatchUpdateEntityTypes methods. Supported formats: - `projects//agent/entityTypes/` - `projects//locations//agent/entityTypes/`
         */
        name?: string | null;
    }
    /**
     * An **entity entry** for an associated entity type.
     */
    export interface Schema$GoogleCloudDialogflowV2beta1EntityTypeEntity {
        /**
         * Required. A collection of value synonyms. For example, if the entity type is *vegetable*, and `value` is *scallions*, a synonym could be *green onions*. For `KIND_LIST` entity types: * This collection must contain exactly one synonym equal to `value`.
         */
        synonyms?: string[] | null;
        /**
         * Required. The primary value associated with this entity entry. For example, if the entity type is *vegetable*, the value could be *scallions*. For `KIND_MAP` entity types: * A reference value to be used in place of synonyms. For `KIND_LIST` entity types: * A string that can contain references to other entity types (with or without aliases).
         */
        value?: string | null;
    }
    /**
     * Events allow for matching intents by event name instead of the natural language input. For instance, input `` can trigger a personalized welcome response. The parameter `name` may be used by the agent in the response: `"Hello #welcome_event.name! What can I do for you today?"`.
     */
    export interface Schema$GoogleCloudDialogflowV2beta1EventInput {
        /**
         * Required. The language of this query. See [Language Support](https://cloud.google.com/dialogflow/docs/reference/language) for a list of the currently supported language codes. Note that queries in the same session do not necessarily need to specify the same language.
         */
        languageCode?: string | null;
        /**
         * Required. The unique identifier of the event.
         */
        name?: string | null;
        /**
         * The collection of parameters associated with the event. Depending on your protocol or client library language, this is a map, associative array, symbol table, dictionary, or JSON object composed of a collection of (MapKey, MapValue) pairs: - MapKey type: string - MapKey value: parameter name - MapValue type: - If parameter's entity type is a composite entity: map - Else: depending on parameter value type, could be one of string, number, boolean, null, list or map - MapValue value: - If parameter's entity type is a composite entity: map from composite entity property names to property values - Else: parameter value
         */
        parameters?: {
            [key: string]: any;
        } | null;
    }
    /**
     * The response message for Agents.ExportAgent.
     */
    export interface Schema$GoogleCloudDialogflowV2beta1ExportAgentResponse {
        /**
         * Zip compressed raw byte content for agent.
         */
        agentContent?: string | null;
        /**
         * The URI to a file containing the exported agent. This field is populated only if `agent_uri` is specified in `ExportAgentRequest`.
         */
        agentUri?: string | null;
    }
    /**
     * Represents answer from "frequently asked questions".
     */
    export interface Schema$GoogleCloudDialogflowV2beta1FaqAnswer {
        /**
         * The piece of text from the `source` knowledge base document.
         */
        answer?: string | null;
        /**
         * The name of answer record, in the format of "projects//locations//answerRecords/"
         */
        answerRecord?: string | null;
        /**
         * The system's confidence score that this Knowledge answer is a good match for this conversational query, range from 0.0 (completely uncertain) to 1.0 (completely certain).
         */
        confidence?: number | null;
        /**
         * A map that contains metadata about the answer and the document from which it originates.
         */
        metadata?: {
            [key: string]: string;
        } | null;
        /**
         * The corresponding FAQ question.
         */
        question?: string | null;
        /**
         * Indicates which Knowledge Document this answer was extracted from. Format: `projects//locations//agent/knowledgeBases//documents/`.
         */
        source?: string | null;
    }
    /**
     * Output only. Represents a notification sent to Pub/Sub subscribers for agent assistant events in a specific conversation.
     */
    export interface Schema$GoogleCloudDialogflowV2beta1HumanAgentAssistantEvent {
        /**
         * The conversation this notification refers to. Format: `projects//conversations/`.
         */
        conversation?: string | null;
        /**
         * The participant that the suggestion is compiled for. And This field is used to call Participants.ListSuggestions API. Format: `projects//conversations//participants/`. It will not be set in legacy workflow. HumanAgentAssistantConfig.name for more information.
         */
        participant?: string | null;
        /**
         * The suggestion results payload that this notification refers to. It will only be set when HumanAgentAssistantConfig.SuggestionConfig.group_suggestion_responses sets to true.
         */
        suggestionResults?: Schema$GoogleCloudDialogflowV2beta1SuggestionResult[];
    }
    /**
     * Response message for Documents.ImportDocuments.
     */
    export interface Schema$GoogleCloudDialogflowV2beta1ImportDocumentsResponse {
        /**
         * Includes details about skipped documents or any other warnings.
         */
        warnings?: Schema$GoogleRpcStatus[];
    }
    /**
     * An intent categorizes an end-user's intention for one conversation turn. For each agent, you define many intents, where your combined intents can handle a complete conversation. When an end-user writes or says something, referred to as an end-user expression or end-user input, Dialogflow matches the end-user input to the best intent in your agent. Matching an intent is also known as intent classification. For more information, see the [intent guide](https://cloud.google.com/dialogflow/docs/intents-overview).
     */
    export interface Schema$GoogleCloudDialogflowV2beta1Intent {
        /**
         * Optional. The name of the action associated with the intent. Note: The action name must not contain whitespaces.
         */
        action?: string | null;
        /**
         * Optional. The list of platforms for which the first responses will be copied from the messages in PLATFORM_UNSPECIFIED (i.e. default platform).
         */
        defaultResponsePlatforms?: string[] | null;
        /**
         * Required. The name of this intent.
         */
        displayName?: string | null;
        /**
         * Optional. Indicates that this intent ends an interaction. Some integrations (e.g., Actions on Google or Dialogflow phone gateway) use this information to close interaction with an end user. Default is false.
         */
        endInteraction?: boolean | null;
        /**
         * Optional. The collection of event names that trigger the intent. If the collection of input contexts is not empty, all of the contexts must be present in the active user session for an event to trigger this intent. Event names are limited to 150 characters.
         */
        events?: string[] | null;
        /**
         * Output only. Information about all followup intents that have this intent as a direct or indirect parent. We populate this field only in the output.
         */
        followupIntentInfo?: Schema$GoogleCloudDialogflowV2beta1IntentFollowupIntentInfo[];
        /**
         * Optional. The list of context names required for this intent to be triggered. Formats: - `projects//agent/sessions/-/contexts/` - `projects//locations//agent/sessions/-/contexts/`
         */
        inputContextNames?: string[] | null;
        /**
         * Optional. Indicates whether this is a fallback intent.
         */
        isFallback?: boolean | null;
        /**
         * Optional. Indicates that a live agent should be brought in to handle the interaction with the user. In most cases, when you set this flag to true, you would also want to set end_interaction to true as well. Default is false.
         */
        liveAgentHandoff?: boolean | null;
        /**
         * Optional. The collection of rich messages corresponding to the `Response` field in the Dialogflow console.
         */
        messages?: Schema$GoogleCloudDialogflowV2beta1IntentMessage[];
        /**
         * Optional. Indicates whether Machine Learning is disabled for the intent. Note: If `ml_disabled` setting is set to true, then this intent is not taken into account during inference in `ML ONLY` match mode. Also, auto-markup in the UI is turned off.
         */
        mlDisabled?: boolean | null;
        /**
         * Optional. Indicates whether Machine Learning is enabled for the intent. Note: If `ml_enabled` setting is set to false, then this intent is not taken into account during inference in `ML ONLY` match mode. Also, auto-markup in the UI is turned off. DEPRECATED! Please use `ml_disabled` field instead. NOTE: If both `ml_enabled` and `ml_disabled` are either not set or false, then the default value is determined as follows: - Before April 15th, 2018 the default is: ml_enabled = false / ml_disabled = true. - After April 15th, 2018 the default is: ml_enabled = true / ml_disabled = false.
         */
        mlEnabled?: boolean | null;
        /**
         * Optional. The unique identifier of this intent. Required for Intents.UpdateIntent and Intents.BatchUpdateIntents methods. Supported formats: - `projects//agent/intents/` - `projects//locations//agent/intents/`
         */
        name?: string | null;
        /**
         * Optional. The collection of contexts that are activated when the intent is matched. Context messages in this collection should not set the parameters field. Setting the `lifespan_count` to 0 will reset the context when the intent is matched. Format: `projects//agent/sessions/-/contexts/`.
         */
        outputContexts?: Schema$GoogleCloudDialogflowV2beta1Context[];
        /**
         * Optional. The collection of parameters associated with the intent.
         */
        parameters?: Schema$GoogleCloudDialogflowV2beta1IntentParameter[];
        /**
         * Optional. The unique identifier of the parent intent in the chain of followup intents. You can set this field when creating an intent, for example with CreateIntent or BatchUpdateIntents, in order to make this intent a followup intent. It identifies the parent followup intent. Format: `projects//agent/intents/`.
         */
        parentFollowupIntentName?: string | null;
        /**
         * Optional. The priority of this intent. Higher numbers represent higher priorities. - If the supplied value is unspecified or 0, the service translates the value to 500,000, which corresponds to the `Normal` priority in the console. - If the supplied value is negative, the intent is ignored in runtime detect intent requests.
         */
        priority?: number | null;
        /**
         * Optional. Indicates whether to delete all contexts in the current session when this intent is matched.
         */
        resetContexts?: boolean | null;
        /**
         * Output only. The unique identifier of the root intent in the chain of followup intents. It identifies the correct followup intents chain for this intent. Format: `projects//agent/intents/`.
         */
        rootFollowupIntentName?: string | null;
        /**
         * Optional. The collection of examples that the agent is trained on.
         */
        trainingPhrases?: Schema$GoogleCloudDialogflowV2beta1IntentTrainingPhrase[];
        /**
         * Optional. Indicates whether webhooks are enabled for the intent.
         */
        webhookState?: string | null;
    }
    /**
     * Represents a single followup intent in the chain.
     */
    export interface Schema$GoogleCloudDialogflowV2beta1IntentFollowupIntentInfo {
        /**
         * The unique identifier of the followup intent. Format: `projects//agent/intents/`.
         */
        followupIntentName?: string | null;
        /**
         * The unique identifier of the followup intent's parent. Format: `projects//agent/intents/`.
         */
        parentFollowupIntentName?: string | null;
    }
    /**
     * Corresponds to the `Response` field in the Dialogflow console.
     */
    export interface Schema$GoogleCloudDialogflowV2beta1IntentMessage {
        /**
         * Displays a basic card for Actions on Google.
         */
        basicCard?: Schema$GoogleCloudDialogflowV2beta1IntentMessageBasicCard;
        /**
         * Browse carousel card for Actions on Google.
         */
        browseCarouselCard?: Schema$GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCard;
        /**
         * Displays a card.
         */
        card?: Schema$GoogleCloudDialogflowV2beta1IntentMessageCard;
        /**
         * Displays a carousel card for Actions on Google.
         */
        carouselSelect?: Schema$GoogleCloudDialogflowV2beta1IntentMessageCarouselSelect;
        /**
         * Displays an image.
         */
        image?: Schema$GoogleCloudDialogflowV2beta1IntentMessageImage;
        /**
         * Displays a link out suggestion chip for Actions on Google.
         */
        linkOutSuggestion?: Schema$GoogleCloudDialogflowV2beta1IntentMessageLinkOutSuggestion;
        /**
         * Displays a list card for Actions on Google.
         */
        listSelect?: Schema$GoogleCloudDialogflowV2beta1IntentMessageListSelect;
        /**
         * The media content card for Actions on Google.
         */
        mediaContent?: Schema$GoogleCloudDialogflowV2beta1IntentMessageMediaContent;
        /**
         * A custom platform-specific response.
         */
        payload?: {
            [key: string]: any;
        } | null;
        /**
         * Optional. The platform that this message is intended for.
         */
        platform?: string | null;
        /**
         * Displays quick replies.
         */
        quickReplies?: Schema$GoogleCloudDialogflowV2beta1IntentMessageQuickReplies;
        /**
         * Rich Business Messaging (RBM) carousel rich card response.
         */
        rbmCarouselRichCard?: Schema$GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCard;
        /**
         * Standalone Rich Business Messaging (RBM) rich card response.
         */
        rbmStandaloneRichCard?: Schema$GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCard;
        /**
         * Rich Business Messaging (RBM) text response. RBM allows businesses to send enriched and branded versions of SMS. See https://jibe.google.com/business-messaging.
         */
        rbmText?: Schema$GoogleCloudDialogflowV2beta1IntentMessageRbmText;
        /**
         * Returns a voice or text-only response for Actions on Google.
         */
        simpleResponses?: Schema$GoogleCloudDialogflowV2beta1IntentMessageSimpleResponses;
        /**
         * Displays suggestion chips for Actions on Google.
         */
        suggestions?: Schema$GoogleCloudDialogflowV2beta1IntentMessageSuggestions;
        /**
         * Table card for Actions on Google.
         */
        tableCard?: Schema$GoogleCloudDialogflowV2beta1IntentMessageTableCard;
        /**
         * Plays audio from a file in Telephony Gateway.
         */
        telephonyPlayAudio?: Schema$GoogleCloudDialogflowV2beta1IntentMessageTelephonyPlayAudio;
        /**
         * Synthesizes speech in Telephony Gateway.
         */
        telephonySynthesizeSpeech?: Schema$GoogleCloudDialogflowV2beta1IntentMessageTelephonySynthesizeSpeech;
        /**
         * Transfers the call in Telephony Gateway.
         */
        telephonyTransferCall?: Schema$GoogleCloudDialogflowV2beta1IntentMessageTelephonyTransferCall;
        /**
         * Returns a text response.
         */
        text?: Schema$GoogleCloudDialogflowV2beta1IntentMessageText;
    }
    /**
     * The basic card message. Useful for displaying information.
     */
    export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageBasicCard {
        /**
         * Optional. The collection of card buttons.
         */
        buttons?: Schema$GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton[];
        /**
         * Required, unless image is present. The body text of the card.
         */
        formattedText?: string | null;
        /**
         * Optional. The image for the card.
         */
        image?: Schema$GoogleCloudDialogflowV2beta1IntentMessageImage;
        /**
         * Optional. The subtitle of the card.
         */
        subtitle?: string | null;
        /**
         * Optional. The title of the card.
         */
        title?: string | null;
    }
    /**
     * The button object that appears at the bottom of a card.
     */
    export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton {
        /**
         * Required. Action to take when a user taps on the button.
         */
        openUriAction?: Schema$GoogleCloudDialogflowV2beta1IntentMessageBasicCardButtonOpenUriAction;
        /**
         * Required. The title of the button.
         */
        title?: string | null;
    }
    /**
     * Opens the given URI.
     */
    export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageBasicCardButtonOpenUriAction {
        /**
         * Required. The HTTP or HTTPS scheme URI.
         */
        uri?: string | null;
    }
    /**
     * Browse Carousel Card for Actions on Google. https://developers.google.com/actions/assistant/responses#browsing_carousel
     */
    export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCard {
        /**
         * Optional. Settings for displaying the image. Applies to every image in items.
         */
        imageDisplayOptions?: string | null;
        /**
         * Required. List of items in the Browse Carousel Card. Minimum of two items, maximum of ten.
         */
        items?: Schema$GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItem[];
    }
    /**
     * Browsing carousel tile
     */
    export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItem {
        /**
         * Optional. Description of the carousel item. Maximum of four lines of text.
         */
        description?: string | null;
        /**
         * Optional. Text that appears at the bottom of the Browse Carousel Card. Maximum of one line of text.
         */
        footer?: string | null;
        /**
         * Optional. Hero image for the carousel item.
         */
        image?: Schema$GoogleCloudDialogflowV2beta1IntentMessageImage;
        /**
         * Required. Action to present to the user.
         */
        openUriAction?: Schema$GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction;
        /**
         * Required. Title of the carousel item. Maximum of two lines of text.
         */
        title?: string | null;
    }
    /**
     * Actions on Google action to open a given url.
     */
    export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction {
        /**
         * Required. URL
         */
        url?: string | null;
        /**
         * Optional. Specifies the type of viewer that is used when opening the URL. Defaults to opening via web browser.
         */
        urlTypeHint?: string | null;
    }
    /**
     * The card response message.
     */
    export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageCard {
        /**
         * Optional. The collection of card buttons.
         */
        buttons?: Schema$GoogleCloudDialogflowV2beta1IntentMessageCardButton[];
        /**
         * Optional. The public URI to an image file for the card.
         */
        imageUri?: string | null;
        /**
         * Optional. The subtitle of the card.
         */
        subtitle?: string | null;
        /**
         * Optional. The title of the card.
         */
        title?: string | null;
    }
    /**
     * Optional. Contains information about a button.
     */
    export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageCardButton {
        /**
         * Optional. The text to send back to the Dialogflow API or a URI to open.
         */
        postback?: string | null;
        /**
         * Optional. The text to show on the button.
         */
        text?: string | null;
    }
    /**
     * The card for presenting a carousel of options to select from.
     */
    export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageCarouselSelect {
        /**
         * Required. Carousel items.
         */
        items?: Schema$GoogleCloudDialogflowV2beta1IntentMessageCarouselSelectItem[];
    }
    /**
     * An item in the carousel.
     */
    export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageCarouselSelectItem {
        /**
         * Optional. The body text of the card.
         */
        description?: string | null;
        /**
         * Optional. The image to display.
         */
        image?: Schema$GoogleCloudDialogflowV2beta1IntentMessageImage;
        /**
         * Required. Additional info about the option item.
         */
        info?: Schema$GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo;
        /**
         * Required. Title of the carousel item.
         */
        title?: string | null;
    }
    /**
     * Column properties for TableCard.
     */
    export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageColumnProperties {
        /**
         * Required. Column heading.
         */
        header?: string | null;
        /**
         * Optional. Defines text alignment for all cells in this column.
         */
        horizontalAlignment?: string | null;
    }
    /**
     * The image response message.
     */
    export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageImage {
        /**
         * A text description of the image to be used for accessibility, e.g., screen readers. Required if image_uri is set for CarouselSelect.
         */
        accessibilityText?: string | null;
        /**
         * Optional. The public URI to an image file.
         */
        imageUri?: string | null;
    }
    /**
     * The suggestion chip message that allows the user to jump out to the app or website associated with this agent.
     */
    export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageLinkOutSuggestion {
        /**
         * Required. The name of the app or site this chip is linking to.
         */
        destinationName?: string | null;
        /**
         * Required. The URI of the app or site to open when the user taps the suggestion chip.
         */
        uri?: string | null;
    }
    /**
     * The card for presenting a list of options to select from.
     */
    export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageListSelect {
        /**
         * Required. List items.
         */
        items?: Schema$GoogleCloudDialogflowV2beta1IntentMessageListSelectItem[];
        /**
         * Optional. Subtitle of the list.
         */
        subtitle?: string | null;
        /**
         * Optional. The overall title of the list.
         */
        title?: string | null;
    }
    /**
     * An item in the list.
     */
    export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageListSelectItem {
        /**
         * Optional. The main text describing the item.
         */
        description?: string | null;
        /**
         * Optional. The image to display.
         */
        image?: Schema$GoogleCloudDialogflowV2beta1IntentMessageImage;
        /**
         * Required. Additional information about this option.
         */
        info?: Schema$GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo;
        /**
         * Required. The title of the list item.
         */
        title?: string | null;
    }
    /**
     * The media content card for Actions on Google.
     */
    export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageMediaContent {
        /**
         * Required. List of media objects.
         */
        mediaObjects?: Schema$GoogleCloudDialogflowV2beta1IntentMessageMediaContentResponseMediaObject[];
        /**
         * Optional. What type of media is the content (ie "audio").
         */
        mediaType?: string | null;
    }
    /**
     * Response media object for media content card.
     */
    export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageMediaContentResponseMediaObject {
        /**
         * Required. Url where the media is stored.
         */
        contentUrl?: string | null;
        /**
         * Optional. Description of media card.
         */
        description?: string | null;
        /**
         * Optional. Icon to display above media content.
         */
        icon?: Schema$GoogleCloudDialogflowV2beta1IntentMessageImage;
        /**
         * Optional. Image to display above media content.
         */
        largeImage?: Schema$GoogleCloudDialogflowV2beta1IntentMessageImage;
        /**
         * Required. Name of media card.
         */
        name?: string | null;
    }
    /**
     * The quick replies response message.
     */
    export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageQuickReplies {
        /**
         * Optional. The collection of quick replies.
         */
        quickReplies?: string[] | null;
        /**
         * Optional. The title of the collection of quick replies.
         */
        title?: string | null;
    }
    /**
     * Rich Business Messaging (RBM) Card content
     */
    export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent {
        /**
         * Optional. Description of the card (at most 2000 bytes). At least one of the title, description or media must be set.
         */
        description?: string | null;
        /**
         * Optional. However at least one of the title, description or media must be set. Media (image, GIF or a video) to include in the card.
         */
        media?: Schema$GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia;
        /**
         * Optional. List of suggestions to include in the card.
         */
        suggestions?: Schema$GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion[];
        /**
         * Optional. Title of the card (at most 200 bytes). At least one of the title, description or media must be set.
         */
        title?: string | null;
    }
    /**
     * Rich Business Messaging (RBM) Media displayed in Cards The following media-types are currently supported: Image Types * image/jpeg * image/jpg' * image/gif * image/png Video Types * video/h263 * video/m4v * video/mp4 * video/mpeg * video/mpeg4 * video/webm
     */
    export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia {
        /**
         * Required. Publicly reachable URI of the file. The RBM platform determines the MIME type of the file from the content-type field in the HTTP headers when the platform fetches the file. The content-type field must be present and accurate in the HTTP response from the URL.
         */
        fileUri?: string | null;
        /**
         * Required for cards with vertical orientation. The height of the media within a rich card with a vertical layout. For a standalone card with horizontal layout, height is not customizable, and this field is ignored.
         */
        height?: string | null;
        /**
         * Optional. Publicly reachable URI of the thumbnail.If you don't provide a thumbnail URI, the RBM platform displays a blank placeholder thumbnail until the user's device downloads the file. Depending on the user's setting, the file may not download automatically and may require the user to tap a download button.
         */
        thumbnailUri?: string | null;
    }
    /**
     * Carousel Rich Business Messaging (RBM) rich card. Rich cards allow you to respond to users with more vivid content, e.g. with media and suggestions. If you want to show a single card with more control over the layout, please use RbmStandaloneCard instead.
     */
    export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCard {
        /**
         * Required. The cards in the carousel. A carousel must have at least 2 cards and at most 10.
         */
        cardContents?: Schema$GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent[];
        /**
         * Required. The width of the cards in the carousel.
         */
        cardWidth?: string | null;
    }
    /**
     * Standalone Rich Business Messaging (RBM) rich card. Rich cards allow you to respond to users with more vivid content, e.g. with media and suggestions. You can group multiple rich cards into one using RbmCarouselCard but carousel cards will give you less control over the card layout.
     */
    export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCard {
        /**
         * Required. Card content.
         */
        cardContent?: Schema$GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent;
        /**
         * Required. Orientation of the card.
         */
        cardOrientation?: string | null;
        /**
         * Required if orientation is horizontal. Image preview alignment for standalone cards with horizontal layout.
         */
        thumbnailImageAlignment?: string | null;
    }
    /**
     * Rich Business Messaging (RBM) suggested client-side action that the user can choose from the card.
     */
    export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction {
        /**
         * Suggested client side action: Dial a phone number
         */
        dial?: Schema$GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial;
        /**
         * Suggested client side action: Open a URI on device
         */
        openUrl?: Schema$GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenUri;
        /**
         * Opaque payload that the Dialogflow receives in a user event when the user taps the suggested action. This data will be also forwarded to webhook to allow performing custom business logic.
         */
        postbackData?: string | null;
        /**
         * Suggested client side action: Share user location
         */
        shareLocation?: Schema$GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionShareLocation;
        /**
         * Text to display alongside the action.
         */
        text?: string | null;
    }
    /**
     * Opens the user's default dialer app with the specified phone number but does not dial automatically.
     */
    export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial {
        /**
         * Required. The phone number to fill in the default dialer app. This field should be in [E.164](https://en.wikipedia.org/wiki/E.164) format. An example of a correctly formatted phone number: +15556767888.
         */
        phoneNumber?: string | null;
    }
    /**
     * Opens the user's default web browser app to the specified uri If the user has an app installed that is registered as the default handler for the URL, then this app will be opened instead, and its icon will be used in the suggested action UI.
     */
    export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenUri {
        /**
         * Required. The uri to open on the user device
         */
        uri?: string | null;
    }
    /**
     * Opens the device's location chooser so the user can pick a location to send back to the agent.
     */
    export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionShareLocation {
    }
    /**
     * Rich Business Messaging (RBM) suggested reply that the user can click instead of typing in their own response.
     */
    export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply {
        /**
         * Opaque payload that the Dialogflow receives in a user event when the user taps the suggested reply. This data will be also forwarded to webhook to allow performing custom business logic.
         */
        postbackData?: string | null;
        /**
         * Suggested reply text.
         */
        text?: string | null;
    }
    /**
     * Rich Business Messaging (RBM) suggestion. Suggestions allow user to easily select/click a predefined response or perform an action (like opening a web uri).
     */
    export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion {
        /**
         * Predefined client side actions that user can choose
         */
        action?: Schema$GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction;
        /**
         * Predefined replies for user to select instead of typing
         */
        reply?: Schema$GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply;
    }
    /**
     * Rich Business Messaging (RBM) text response with suggestions.
     */
    export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageRbmText {
        /**
         * Optional. One or more suggestions to show to the user.
         */
        rbmSuggestion?: Schema$GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion[];
        /**
         * Required. Text sent and displayed to the user.
         */
        text?: string | null;
    }
    /**
     * Additional info about the select item for when it is triggered in a dialog.
     */
    export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo {
        /**
         * Required. A unique key that will be sent back to the agent if this response is given.
         */
        key?: string | null;
        /**
         * Optional. A list of synonyms that can also be used to trigger this item in dialog.
         */
        synonyms?: string[] | null;
    }
    /**
     * The simple response message containing speech or text.
     */
    export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageSimpleResponse {
        /**
         * Optional. The text to display.
         */
        displayText?: string | null;
        /**
         * One of text_to_speech or ssml must be provided. Structured spoken response to the user in the SSML format. Mutually exclusive with text_to_speech.
         */
        ssml?: string | null;
        /**
         * One of text_to_speech or ssml must be provided. The plain text of the speech output. Mutually exclusive with ssml.
         */
        textToSpeech?: string | null;
    }
    /**
     * The collection of simple response candidates. This message in `QueryResult.fulfillment_messages` and `WebhookResponse.fulfillment_messages` should contain only one `SimpleResponse`.
     */
    export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageSimpleResponses {
        /**
         * Required. The list of simple responses.
         */
        simpleResponses?: Schema$GoogleCloudDialogflowV2beta1IntentMessageSimpleResponse[];
    }
    /**
     * The suggestion chip message that the user can tap to quickly post a reply to the conversation.
     */
    export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageSuggestion {
        /**
         * Required. The text shown the in the suggestion chip.
         */
        title?: string | null;
    }
    /**
     * The collection of suggestions.
     */
    export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageSuggestions {
        /**
         * Required. The list of suggested replies.
         */
        suggestions?: Schema$GoogleCloudDialogflowV2beta1IntentMessageSuggestion[];
    }
    /**
     * Table card for Actions on Google.
     */
    export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageTableCard {
        /**
         * Optional. List of buttons for the card.
         */
        buttons?: Schema$GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton[];
        /**
         * Optional. Display properties for the columns in this table.
         */
        columnProperties?: Schema$GoogleCloudDialogflowV2beta1IntentMessageColumnProperties[];
        /**
         * Optional. Image which should be displayed on the card.
         */
        image?: Schema$GoogleCloudDialogflowV2beta1IntentMessageImage;
        /**
         * Optional. Rows in this table of data.
         */
        rows?: Schema$GoogleCloudDialogflowV2beta1IntentMessageTableCardRow[];
        /**
         * Optional. Subtitle to the title.
         */
        subtitle?: string | null;
        /**
         * Required. Title of the card.
         */
        title?: string | null;
    }
    /**
     * Cell of TableCardRow.
     */
    export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageTableCardCell {
        /**
         * Required. Text in this cell.
         */
        text?: string | null;
    }
    /**
     * Row of TableCard.
     */
    export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageTableCardRow {
        /**
         * Optional. List of cells that make up this row.
         */
        cells?: Schema$GoogleCloudDialogflowV2beta1IntentMessageTableCardCell[];
        /**
         * Optional. Whether to add a visual divider after this row.
         */
        dividerAfter?: boolean | null;
    }
    /**
     * Plays audio from a file in Telephony Gateway.
     */
    export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageTelephonyPlayAudio {
        /**
         * Required. URI to a Google Cloud Storage object containing the audio to play, e.g., "gs://bucket/object". The object must contain a single channel (mono) of linear PCM audio (2 bytes / sample) at 8kHz. This object must be readable by the `service-@gcp-sa-dialogflow.iam.gserviceaccount.com` service account where is the number of the Telephony Gateway project (usually the same as the Dialogflow agent project). If the Google Cloud Storage bucket is in the Telephony Gateway project, this permission is added by default when enabling the Dialogflow V2 API. For audio from other sources, consider using the `TelephonySynthesizeSpeech` message with SSML.
         */
        audioUri?: string | null;
    }
    /**
     * Synthesizes speech and plays back the synthesized audio to the caller in Telephony Gateway. Telephony Gateway takes the synthesizer settings from `DetectIntentResponse.output_audio_config` which can either be set at request-level or can come from the agent-level synthesizer config.
     */
    export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageTelephonySynthesizeSpeech {
        /**
         * The SSML to be synthesized. For more information, see [SSML](https://developers.google.com/actions/reference/ssml).
         */
        ssml?: string | null;
        /**
         * The raw text to be synthesized.
         */
        text?: string | null;
    }
    /**
     * Transfers the call in Telephony Gateway.
     */
    export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageTelephonyTransferCall {
        /**
         * Required. The phone number to transfer the call to in [E.164 format](https://en.wikipedia.org/wiki/E.164). We currently only allow transferring to US numbers (+1xxxyyyzzzz).
         */
        phoneNumber?: string | null;
    }
    /**
     * The text response message.
     */
    export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageText {
        /**
         * Optional. The collection of the agent's responses.
         */
        text?: string[] | null;
    }
    /**
     * Represents intent parameters.
     */
    export interface Schema$GoogleCloudDialogflowV2beta1IntentParameter {
        /**
         * Optional. The default value to use when the `value` yields an empty result. Default values can be extracted from contexts by using the following syntax: `#context_name.parameter_name`.
         */
        defaultValue?: string | null;
        /**
         * Required. The name of the parameter.
         */
        displayName?: string | null;
        /**
         * Optional. The name of the entity type, prefixed with `@`, that describes values of the parameter. If the parameter is required, this must be provided.
         */
        entityTypeDisplayName?: string | null;
        /**
         * Optional. Indicates whether the parameter represents a list of values.
         */
        isList?: boolean | null;
        /**
         * Optional. Indicates whether the parameter is required. That is, whether the intent cannot be completed without collecting the parameter value.
         */
        mandatory?: boolean | null;
        /**
         * The unique identifier of this parameter.
         */
        name?: string | null;
        /**
         * Optional. The collection of prompts that the agent can present to the user in order to collect a value for the parameter.
         */
        prompts?: string[] | null;
        /**
         * Optional. The definition of the parameter value. It can be: - a constant string, - a parameter value defined as `$parameter_name`, - an original parameter value defined as `$parameter_name.original`, - a parameter value from some context defined as `#context_name.parameter_name`.
         */
        value?: string | null;
    }
    /**
     * Represents an example that the agent is trained on.
     */
    export interface Schema$GoogleCloudDialogflowV2beta1IntentTrainingPhrase {
        /**
         * Output only. The unique identifier of this training phrase.
         */
        name?: string | null;
        /**
         * Required. The ordered list of training phrase parts. The parts are concatenated in order to form the training phrase. Note: The API does not automatically annotate training phrases like the Dialogflow Console does. Note: Do not forget to include whitespace at part boundaries, so the training phrase is well formatted when the parts are concatenated. If the training phrase does not need to be annotated with parameters, you just need a single part with only the Part.text field set. If you want to annotate the training phrase, you must create multiple parts, where the fields of each part are populated in one of two ways: - `Part.text` is set to a part of the phrase that has no parameters. - `Part.text` is set to a part of the phrase that you want to annotate, and the `entity_type`, `alias`, and `user_defined` fields are all set.
         */
        parts?: Schema$GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart[];
        /**
         * Optional. Indicates how many times this example was added to the intent. Each time a developer adds an existing sample by editing an intent or training, this counter is increased.
         */
        timesAddedCount?: number | null;
        /**
         * Required. The type of the training phrase.
         */
        type?: string | null;
    }
    /**
     * Represents a part of a training phrase.
     */
    export interface Schema$GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart {
        /**
         * Optional. The parameter name for the value extracted from the annotated part of the example. This field is required for annotated parts of the training phrase.
         */
        alias?: string | null;
        /**
         * Optional. The entity type name prefixed with `@`. This field is required for annotated parts of the training phrase.
         */
        entityType?: string | null;
        /**
         * Required. The text for this part.
         */
        text?: string | null;
        /**
         * Optional. Indicates whether the text was manually annotated. This field is set to true when the Dialogflow Console is used to manually annotate the part. When creating an annotated part with the API, you must set this to true.
         */
        userDefined?: boolean | null;
    }
    /**
     * Represents the result of querying a Knowledge base.
     */
    export interface Schema$GoogleCloudDialogflowV2beta1KnowledgeAnswers {
        /**
         * A list of answers from Knowledge Connector.
         */
        answers?: Schema$GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswer[];
    }
    /**
     * An answer from Knowledge Connector.
     */
    export interface Schema$GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswer {
        /**
         * The piece of text from the `source` knowledge base document that answers this conversational query.
         */
        answer?: string | null;
        /**
         * The corresponding FAQ question if the answer was extracted from a FAQ Document, empty otherwise.
         */
        faqQuestion?: string | null;
        /**
         * The system's confidence score that this Knowledge answer is a good match for this conversational query. The range is from 0.0 (completely uncertain) to 1.0 (completely certain). Note: The confidence score is likely to vary somewhat (possibly even for identical requests), as the underlying model is under constant improvement. It may be deprecated in the future. We recommend using `match_confidence_level` which should be generally more stable.
         */
        matchConfidence?: number | null;
        /**
         * The system's confidence level that this knowledge answer is a good match for this conversational query. NOTE: The confidence level for a given `` pair may change without notice, as it depends on models that are constantly being improved. However, it will change less frequently than the confidence score below, and should be preferred for referencing the quality of an answer.
         */
        matchConfidenceLevel?: string | null;
        /**
         * Indicates which Knowledge Document this answer was extracted from. Format: `projects//knowledgeBases//documents/`.
         */
        source?: string | null;
    }
    /**
     * Metadata in google::longrunning::Operation for Knowledge operations.
     */
    export interface Schema$GoogleCloudDialogflowV2beta1KnowledgeOperationMetadata {
        /**
         * Required. Output only. The current state of this operation.
         */
        state?: string | null;
    }
    /**
     * Represents a message posted into a conversation.
     */
    export interface Schema$GoogleCloudDialogflowV2beta1Message {
        /**
         * Required. The message content.
         */
        content?: string | null;
        /**
         * Output only. The time when the message was created in Contact Center AI.
         */
        createTime?: string | null;
        /**
         * Optional. The message language. This should be a [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag. Example: "en-US".
         */
        languageCode?: string | null;
        /**
         * Output only. The annotation for the message.
         */
        messageAnnotation?: Schema$GoogleCloudDialogflowV2beta1MessageAnnotation;
        /**
         * Optional. The unique identifier of the message. Format: `projects//locations//conversations//messages/`.
         */
        name?: string | null;
        /**
         * Output only. The participant that sends this message.
         */
        participant?: string | null;
        /**
         * Output only. The role of the participant.
         */
        participantRole?: string | null;
        /**
         * Optional. The time when the message was sent.
         */
        sendTime?: string | null;
        /**
         * Output only. The sentiment analysis result for the message.
         */
        sentimentAnalysis?: Schema$GoogleCloudDialogflowV2beta1SentimentAnalysisResult;
    }
    /**
     * Represents the result of annotation for the message.
     */
    export interface Schema$GoogleCloudDialogflowV2beta1MessageAnnotation {
        /**
         * Required. Indicates whether the text message contains entities.
         */
        containEntities?: boolean | null;
        /**
         * Optional. The collection of annotated message parts ordered by their position in the message. You can recover the annotated message by concatenating [AnnotatedMessagePart.text].
         */
        parts?: Schema$GoogleCloudDialogflowV2beta1AnnotatedMessagePart[];
    }
    /**
     * Represents the contents of the original request that was passed to the `[Streaming]DetectIntent` call.
     */
    export interface Schema$GoogleCloudDialogflowV2beta1OriginalDetectIntentRequest {
        /**
         * Optional. This field is set to the value of the `QueryParameters.payload` field passed in the request. Some integrations that query a Dialogflow agent may provide additional information in the payload. In particular, for the Dialogflow Phone Gateway integration, this field has the form: { "telephony": { "caller_id": "+18558363987" \} \} Note: The caller ID field (`caller_id`) will be redacted for Trial Edition agents and populated with the caller ID in [E.164 format](https://en.wikipedia.org/wiki/E.164) for Essentials Edition agents.
         */
        payload?: {
            [key: string]: any;
        } | null;
        /**
         * The source of this request, e.g., `google`, `facebook`, `slack`. It is set by Dialogflow-owned servers.
         */
        source?: string | null;
        /**
         * Optional. The version of the protocol used for this request. This field is AoG-specific.
         */
        version?: string | null;
    }
    /**
     * Represents the result of conversational query or event processing.
     */
    export interface Schema$GoogleCloudDialogflowV2beta1QueryResult {
        /**
         * The action name from the matched intent.
         */
        action?: string | null;
        /**
         * This field is set to: - `false` if the matched intent has required parameters and not all of the required parameter values have been collected. - `true` if all required parameter values have been collected, or if the matched intent doesn't contain any required parameters.
         */
        allRequiredParamsPresent?: boolean | null;
        /**
         * Indicates whether the conversational query triggers a cancellation for slot filling.
         */
        cancelsSlotFilling?: boolean | null;
        /**
         * Free-form diagnostic information for the associated detect intent request. The fields of this data can change without notice, so you should not write code that depends on its structure. The data may contain: - webhook call latency - webhook errors
         */
        diagnosticInfo?: {
            [key: string]: any;
        } | null;
        /**
         * The collection of rich messages to present to the user.
         */
        fulfillmentMessages?: Schema$GoogleCloudDialogflowV2beta1IntentMessage[];
        /**
         * The text to be pronounced to the user or shown on the screen. Note: This is a legacy field, `fulfillment_messages` should be preferred.
         */
        fulfillmentText?: string | null;
        /**
         * The intent that matched the conversational query. Some, not all fields are filled in this message, including but not limited to: `name`, `display_name`, `end_interaction` and `is_fallback`.
         */
        intent?: Schema$GoogleCloudDialogflowV2beta1Intent;
        /**
         * The intent detection confidence. Values range from 0.0 (completely uncertain) to 1.0 (completely certain). This value is for informational purpose only and is only used to help match the best intent within the classification threshold. This value may change for the same end-user expression at any time due to a model retraining or change in implementation. If there are `multiple knowledge_answers` messages, this value is set to the greatest `knowledgeAnswers.match_confidence` value in the list.
         */
        intentDetectionConfidence?: number | null;
        /**
         * The result from Knowledge Connector (if any), ordered by decreasing `KnowledgeAnswers.match_confidence`.
         */
        knowledgeAnswers?: Schema$GoogleCloudDialogflowV2beta1KnowledgeAnswers;
        /**
         * The language that was triggered during intent detection. See [Language Support](https://cloud.google.com/dialogflow/docs/reference/language) for a list of the currently supported language codes.
         */
        languageCode?: string | null;
        /**
         * The collection of output contexts. If applicable, `output_contexts.parameters` contains entries with name `.original` containing the original parameter values before the query.
         */
        outputContexts?: Schema$GoogleCloudDialogflowV2beta1Context[];
        /**
         * The collection of extracted parameters. Depending on your protocol or client library language, this is a map, associative array, symbol table, dictionary, or JSON object composed of a collection of (MapKey, MapValue) pairs: - MapKey type: string - MapKey value: parameter name - MapValue type: - If parameter's entity type is a composite entity: map - Else: depending on parameter value type, could be one of string, number, boolean, null, list or map - MapValue value: - If parameter's entity type is a composite entity: map from composite entity property names to property values - Else: parameter value
         */
        parameters?: {
            [key: string]: any;
        } | null;
        /**
         * The original conversational query text: - If natural language text was provided as input, `query_text` contains a copy of the input. - If natural language speech audio was provided as input, `query_text` contains the speech recognition result. If speech recognizer produced multiple alternatives, a particular one is picked. - If automatic spell correction is enabled, `query_text` will contain the corrected user input.
         */
        queryText?: string | null;
        /**
         * The sentiment analysis result, which depends on the `sentiment_analysis_request_config` specified in the request.
         */
        sentimentAnalysisResult?: Schema$GoogleCloudDialogflowV2beta1SentimentAnalysisResult;
        /**
         * The Speech recognition confidence between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. The default of 0.0 is a sentinel value indicating that confidence was not set. This field is not guaranteed to be accurate or set. In particular this field isn't set for StreamingDetectIntent since the streaming endpoint has separate confidence estimates per portion of the audio in StreamingRecognitionResult.
         */
        speechRecognitionConfidence?: number | null;
        /**
         * If the query was fulfilled by a webhook call, this field is set to the value of the `payload` field returned in the webhook response.
         */
        webhookPayload?: {
            [key: string]: any;
        } | null;
        /**
         * If the query was fulfilled by a webhook call, this field is set to the value of the `source` field returned in the webhook response.
         */
        webhookSource?: string | null;
    }
    /**
     * The sentiment, such as positive/negative feeling or association, for a unit of analysis, such as the query text.
     */
    export interface Schema$GoogleCloudDialogflowV2beta1Sentiment {
        /**
         * A non-negative number in the [0, +inf) range, which represents the absolute magnitude of sentiment, regardless of score (positive or negative).
         */
        magnitude?: number | null;
        /**
         * Sentiment score between -1.0 (negative sentiment) and 1.0 (positive sentiment).
         */
        score?: number | null;
    }
    /**
     * The result of sentiment analysis. Sentiment analysis inspects user input and identifies the prevailing subjective opinion, especially to determine a user's attitude as positive, negative, or neutral. For Participants.DetectIntent, it needs to be configured in DetectIntentRequest.query_params. For Participants.StreamingDetectIntent, it needs to be configured in StreamingDetectIntentRequest.query_params. And for Participants.AnalyzeContent and Participants.StreamingAnalyzeContent, it needs to be configured in ConversationProfile.human_agent_assistant_config
     */
    export interface Schema$GoogleCloudDialogflowV2beta1SentimentAnalysisResult {
        /**
         * The sentiment analysis result for `query_text`.
         */
        queryTextSentiment?: Schema$GoogleCloudDialogflowV2beta1Sentiment;
    }
    /**
     * A session represents a conversation between a Dialogflow agent and an end-user. You can create special entities, called session entities, during a session. Session entities can extend or replace custom entity types and only exist during the session that they were created for. All session data, including session entities, is stored by Dialogflow for 20 minutes. For more information, see the [session entity guide](https://cloud.google.com/dialogflow/docs/entities-session).
     */
    export interface Schema$GoogleCloudDialogflowV2beta1SessionEntityType {
        /**
         * Required. The collection of entities associated with this session entity type.
         */
        entities?: Schema$GoogleCloudDialogflowV2beta1EntityTypeEntity[];
        /**
         * Required. Indicates whether the additional data should override or supplement the custom entity type definition.
         */
        entityOverrideMode?: string | null;
        /**
         * Required. The unique identifier of this session entity type. Supported formats: - `projects//agent/sessions//entityTypes/` - `projects//locations//agent/sessions//entityTypes/` - `projects//agent/environments//users//sessions//entityTypes/` - `projects//locations//agent/environments/ /users//sessions//entityTypes/` If `Location ID` is not specified we assume default 'us' location. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user. `` must be the display name of an existing entity type in the same agent that will be overridden or supplemented.
         */
        name?: string | null;
    }
    /**
     * Represents a smart reply answer.
     */
    export interface Schema$GoogleCloudDialogflowV2beta1SmartReplyAnswer {
        /**
         * The name of answer record, in the format of "projects//locations//answerRecords/"
         */
        answerRecord?: string | null;
        /**
         * Smart reply confidence. The system's confidence score that this reply is a good match for this conversation, as a value from 0.0 (completely uncertain) to 1.0 (completely certain).
         */
        confidence?: number | null;
        /**
         * The content of the reply.
         */
        reply?: string | null;
    }
    /**
     * The response message for Participants.SuggestArticles.
     */
    export interface Schema$GoogleCloudDialogflowV2beta1SuggestArticlesResponse {
        /**
         * Output only. Articles ordered by score in descending order.
         */
        articleAnswers?: Schema$GoogleCloudDialogflowV2beta1ArticleAnswer[];
        /**
         * Number of messages prior to and including latest_message to compile the suggestion. It may be smaller than the SuggestArticlesResponse.context_size field in the request if there aren't that many messages in the conversation.
         */
        contextSize?: number | null;
        /**
         * The name of the latest conversation message used to compile suggestion for. Format: `projects//locations//conversations//messages/`.
         */
        latestMessage?: string | null;
    }
    /**
     * The request message for Participants.SuggestFaqAnswers.
     */
    export interface Schema$GoogleCloudDialogflowV2beta1SuggestFaqAnswersResponse {
        /**
         * Number of messages prior to and including latest_message to compile the suggestion. It may be smaller than the SuggestFaqAnswersRequest.context_size field in the request if there aren't that many messages in the conversation.
         */
        contextSize?: number | null;
        /**
         * Output only. Answers extracted from FAQ documents.
         */
        faqAnswers?: Schema$GoogleCloudDialogflowV2beta1FaqAnswer[];
        /**
         * The name of the latest conversation message used to compile suggestion for. Format: `projects//locations//conversations//messages/`.
         */
        latestMessage?: string | null;
    }
    /**
     * One response of different type of suggestion response which is used in the response of Participants.AnalyzeContent and Participants.AnalyzeContent, as well as HumanAgentAssistantEvent.
     */
    export interface Schema$GoogleCloudDialogflowV2beta1SuggestionResult {
        /**
         * Error status if the request failed.
         */
        error?: Schema$GoogleRpcStatus;
        /**
         * SuggestArticlesResponse if request is for ARTICLE_SUGGESTION.
         */
        suggestArticlesResponse?: Schema$GoogleCloudDialogflowV2beta1SuggestArticlesResponse;
        /**
         * SuggestFaqAnswersResponse if request is for FAQ_ANSWER.
         */
        suggestFaqAnswersResponse?: Schema$GoogleCloudDialogflowV2beta1SuggestFaqAnswersResponse;
        /**
         * SuggestSmartRepliesResponse if request is for SMART_REPLY.
         */
        suggestSmartRepliesResponse?: Schema$GoogleCloudDialogflowV2beta1SuggestSmartRepliesResponse;
    }
    /**
     * The response message for Participants.SuggestSmartReplies.
     */
    export interface Schema$GoogleCloudDialogflowV2beta1SuggestSmartRepliesResponse {
        /**
         * Number of messages prior to and including latest_message to compile the suggestion. It may be smaller than the SuggestSmartRepliesRequest.context_size field in the request if there aren't that many messages in the conversation.
         */
        contextSize?: number | null;
        /**
         * The name of the latest conversation message used to compile suggestion for. Format: `projects//locations//conversations//messages/`.
         */
        latestMessage?: string | null;
        /**
         * Output only. Multiple reply options provided by smart reply service. The order is based on the rank of the model prediction. The maximum number of the returned replies is set in SmartReplyConfig.
         */
        smartReplyAnswers?: Schema$GoogleCloudDialogflowV2beta1SmartReplyAnswer[];
    }
    /**
     * The request message for a webhook call.
     */
    export interface Schema$GoogleCloudDialogflowV2beta1WebhookRequest {
        /**
         * Alternative query results from KnowledgeService.
         */
        alternativeQueryResults?: Schema$GoogleCloudDialogflowV2beta1QueryResult[];
        /**
         * Optional. The contents of the original request that was passed to `[Streaming]DetectIntent` call.
         */
        originalDetectIntentRequest?: Schema$GoogleCloudDialogflowV2beta1OriginalDetectIntentRequest;
        /**
         * The result of the conversational query or event processing. Contains the same value as `[Streaming]DetectIntentResponse.query_result`.
         */
        queryResult?: Schema$GoogleCloudDialogflowV2beta1QueryResult;
        /**
         * The unique identifier of the response. Contains the same value as `[Streaming]DetectIntentResponse.response_id`.
         */
        responseId?: string | null;
        /**
         * The unique identifier of detectIntent request session. Can be used to identify end-user inside webhook implementation. Supported formats: - `projects//agent/sessions/, - `projects//locations//agent/sessions/`, - `projects//agent/environments//users//sessions/`, - `projects//locations//agent/environments//users//sessions/`,
         */
        session?: string | null;
    }
    /**
     * The response message for a webhook call. This response is validated by the Dialogflow server. If validation fails, an error will be returned in the QueryResult.diagnostic_info field. Setting JSON fields to an empty value with the wrong type is a common error. To avoid this error: - Use `""` for empty strings - Use `{\}` or `null` for empty objects - Use `[]` or `null` for empty arrays For more information, see the [Protocol Buffers Language Guide](https://developers.google.com/protocol-buffers/docs/proto3#json).
     */
    export interface Schema$GoogleCloudDialogflowV2beta1WebhookResponse {
        /**
         * Optional. Indicates that this intent ends an interaction. Some integrations (e.g., Actions on Google or Dialogflow phone gateway) use this information to close interaction with an end user. Default is false.
         */
        endInteraction?: boolean | null;
        /**
         * Optional. Invokes the supplied events. When this field is set, Dialogflow ignores the `fulfillment_text`, `fulfillment_messages`, and `payload` fields.
         */
        followupEventInput?: Schema$GoogleCloudDialogflowV2beta1EventInput;
        /**
         * Optional. The rich response messages intended for the end-user. When provided, Dialogflow uses this field to populate QueryResult.fulfillment_messages sent to the integration or API caller.
         */
        fulfillmentMessages?: Schema$GoogleCloudDialogflowV2beta1IntentMessage[];
        /**
         * Optional. The text response message intended for the end-user. It is recommended to use `fulfillment_messages.text.text[0]` instead. When provided, Dialogflow uses this field to populate QueryResult.fulfillment_text sent to the integration or API caller.
         */
        fulfillmentText?: string | null;
        /**
         * Indicates that a live agent should be brought in to handle the interaction with the user. In most cases, when you set this flag to true, you would also want to set end_interaction to true as well. Default is false.
         */
        liveAgentHandoff?: boolean | null;
        /**
         * Optional. The collection of output contexts that will overwrite currently active contexts for the session and reset their lifespans. When provided, Dialogflow uses this field to populate QueryResult.output_contexts sent to the integration or API caller.
         */
        outputContexts?: Schema$GoogleCloudDialogflowV2beta1Context[];
        /**
         * Optional. This field can be used to pass custom data from your webhook to the integration or API caller. Arbitrary JSON objects are supported. When provided, Dialogflow uses this field to populate QueryResult.webhook_payload sent to the integration or API caller. This field is also used by the [Google Assistant integration](https://cloud.google.com/dialogflow/docs/integrations/aog) for rich response messages. See the format definition at [Google Assistant Dialogflow webhook format](https://developers.google.com/assistant/actions/build/json/dialogflow-webhook-json)
         */
        payload?: {
            [key: string]: any;
        } | null;
        /**
         * Optional. Additional session entity types to replace or extend developer entity types with. The entity synonyms apply to all languages and persist for the session. Setting this data from a webhook overwrites the session entity types that have been set using `detectIntent`, `streamingDetectIntent` or SessionEntityType management methods.
         */
        sessionEntityTypes?: Schema$GoogleCloudDialogflowV2beta1SessionEntityType[];
        /**
         * Optional. A custom field used to identify the webhook source. Arbitrary strings are supported. When provided, Dialogflow uses this field to populate QueryResult.webhook_source sent to the integration or API caller.
         */
        source?: string | null;
    }
    /**
     * Dialogflow contexts are similar to natural language context. If a person says to you "they are orange", you need context in order to understand what "they" is referring to. Similarly, for Dialogflow to handle an end-user expression like that, it needs to be provided with context in order to correctly match an intent. Using contexts, you can control the flow of a conversation. You can configure contexts for an intent by setting input and output contexts, which are identified by string names. When an intent is matched, any configured output contexts for that intent become active. While any contexts are active, Dialogflow is more likely to match intents that are configured with input contexts that correspond to the currently active contexts. For more information about context, see the [Contexts guide](https://cloud.google.com/dialogflow/docs/contexts-overview).
     */
    export interface Schema$GoogleCloudDialogflowV2Context {
        /**
         * Optional. The number of conversational query requests after which the context expires. The default is `0`. If set to `0`, the context expires immediately. Contexts expire automatically after 20 minutes if there are no matching queries.
         */
        lifespanCount?: number | null;
        /**
         * Required. The unique identifier of the context. Format: `projects//agent/sessions//contexts/`, or `projects//agent/environments//users//sessions//contexts/`. The `Context ID` is always converted to lowercase, may only contain characters in a-zA-Z0-9_-% and may be at most 250 bytes long. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user. The following context names are reserved for internal use by Dialogflow. You should not use these contexts or create contexts with these names: * `__system_counters__` * `*_id_dialog_context` * `*_dialog_params_size`
         */
        name?: string | null;
        /**
         * Optional. The collection of parameters associated with this context. Depending on your protocol or client library language, this is a map, associative array, symbol table, dictionary, or JSON object composed of a collection of (MapKey, MapValue) pairs: - MapKey type: string - MapKey value: parameter name - MapValue type: - If parameter's entity type is a composite entity: map - Else: depending on parameter value type, could be one of string, number, boolean, null, list or map - MapValue value: - If parameter's entity type is a composite entity: map from composite entity property names to property values - Else: parameter value
         */
        parameters?: {
            [key: string]: any;
        } | null;
    }
    /**
     * Represents a notification sent to Pub/Sub subscribers for conversation lifecycle events.
     */
    export interface Schema$GoogleCloudDialogflowV2ConversationEvent {
        /**
         * The unique identifier of the conversation this notification refers to. Format: `projects//conversations/`.
         */
        conversation?: string | null;
        /**
         * More detailed information about an error. Only set for type UNRECOVERABLE_ERROR_IN_PHONE_CALL.
         */
        errorStatus?: Schema$GoogleRpcStatus;
        /**
         * Payload of NEW_MESSAGE event.
         */
        newMessagePayload?: Schema$GoogleCloudDialogflowV2Message;
        /**
         * The type of the event that this notification refers to.
         */
        type?: string | null;
    }
    /**
     * Each intent parameter has a type, called the entity type, which dictates exactly how data from an end-user expression is extracted. Dialogflow provides predefined system entities that can match many common types of data. For example, there are system entities for matching dates, times, colors, email addresses, and so on. You can also create your own custom entities for matching custom data. For example, you could define a vegetable entity that can match the types of vegetables available for purchase with a grocery store agent. For more information, see the [Entity guide](https://cloud.google.com/dialogflow/docs/entities-overview).
     */
    export interface Schema$GoogleCloudDialogflowV2EntityType {
        /**
         * Optional. Indicates whether the entity type can be automatically expanded.
         */
        autoExpansionMode?: string | null;
        /**
         * Required. The name of the entity type.
         */
        displayName?: string | null;
        /**
         * Optional. Enables fuzzy entity extraction during classification.
         */
        enableFuzzyExtraction?: boolean | null;
        /**
         * Optional. The collection of entity entries associated with the entity type.
         */
        entities?: Schema$GoogleCloudDialogflowV2EntityTypeEntity[];
        /**
         * Required. Indicates the kind of entity type.
         */
        kind?: string | null;
        /**
         * The unique identifier of the entity type. Required for EntityTypes.UpdateEntityType and EntityTypes.BatchUpdateEntityTypes methods. Format: `projects//agent/entityTypes/`.
         */
        name?: string | null;
    }
    /**
     * An **entity entry** for an associated entity type.
     */
    export interface Schema$GoogleCloudDialogflowV2EntityTypeEntity {
        /**
         * Required. A collection of value synonyms. For example, if the entity type is *vegetable*, and `value` is *scallions*, a synonym could be *green onions*. For `KIND_LIST` entity types: * This collection must contain exactly one synonym equal to `value`.
         */
        synonyms?: string[] | null;
        /**
         * Required. The primary value associated with this entity entry. For example, if the entity type is *vegetable*, the value could be *scallions*. For `KIND_MAP` entity types: * A reference value to be used in place of synonyms. For `KIND_LIST` entity types: * A string that can contain references to other entity types (with or without aliases).
         */
        value?: string | null;
    }
    /**
     * Events allow for matching intents by event name instead of the natural language input. For instance, input `` can trigger a personalized welcome response. The parameter `name` may be used by the agent in the response: `"Hello #welcome_event.name! What can I do for you today?"`.
     */
    export interface Schema$GoogleCloudDialogflowV2EventInput {
        /**
         * Required. The language of this query. See [Language Support](https://cloud.google.com/dialogflow/docs/reference/language) for a list of the currently supported language codes. Note that queries in the same session do not necessarily need to specify the same language.
         */
        languageCode?: string | null;
        /**
         * Required. The unique identifier of the event.
         */
        name?: string | null;
        /**
         * The collection of parameters associated with the event. Depending on your protocol or client library language, this is a map, associative array, symbol table, dictionary, or JSON object composed of a collection of (MapKey, MapValue) pairs: - MapKey type: string - MapKey value: parameter name - MapValue type: - If parameter's entity type is a composite entity: map - Else: depending on parameter value type, could be one of string, number, boolean, null, list or map - MapValue value: - If parameter's entity type is a composite entity: map from composite entity property names to property values - Else: parameter value
         */
        parameters?: {
            [key: string]: any;
        } | null;
    }
    /**
     * The response message for Agents.ExportAgent.
     */
    export interface Schema$GoogleCloudDialogflowV2ExportAgentResponse {
        /**
         * Zip compressed raw byte content for agent.
         */
        agentContent?: string | null;
        /**
         * The URI to a file containing the exported agent. This field is populated only if `agent_uri` is specified in `ExportAgentRequest`.
         */
        agentUri?: string | null;
    }
    /**
     * Represents answer from "frequently asked questions".
     */
    export interface Schema$GoogleCloudDialogflowV2FaqAnswer {
        /**
         * The piece of text from the `source` knowledge base document.
         */
        answer?: string | null;
        /**
         * The name of answer record, in the format of "projects//locations//answerRecords/"
         */
        answerRecord?: string | null;
        /**
         * The system's confidence score that this Knowledge answer is a good match for this conversational query, range from 0.0 (completely uncertain) to 1.0 (completely certain).
         */
        confidence?: number | null;
        /**
         * A map that contains metadata about the answer and the document from which it originates.
         */
        metadata?: {
            [key: string]: string;
        } | null;
        /**
         * The corresponding FAQ question.
         */
        question?: string | null;
        /**
         * Indicates which Knowledge Document this answer was extracted from. Format: `projects//locations//agent/knowledgeBases//documents/`.
         */
        source?: string | null;
    }
    /**
     * Represents a notification sent to Cloud Pub/Sub subscribers for human agent assistant events in a specific conversation.
     */
    export interface Schema$GoogleCloudDialogflowV2HumanAgentAssistantEvent {
        /**
         * The conversation this notification refers to. Format: `projects//conversations/`.
         */
        conversation?: string | null;
        /**
         * The participant that the suggestion is compiled for. Format: `projects//conversations//participants/`. It will not be set in legacy workflow.
         */
        participant?: string | null;
        /**
         * The suggestion results payload that this notification refers to.
         */
        suggestionResults?: Schema$GoogleCloudDialogflowV2SuggestionResult[];
    }
    /**
     * An intent categorizes an end-user's intention for one conversation turn. For each agent, you define many intents, where your combined intents can handle a complete conversation. When an end-user writes or says something, referred to as an end-user expression or end-user input, Dialogflow matches the end-user input to the best intent in your agent. Matching an intent is also known as intent classification. For more information, see the [intent guide](https://cloud.google.com/dialogflow/docs/intents-overview).
     */
    export interface Schema$GoogleCloudDialogflowV2Intent {
        /**
         * Optional. The name of the action associated with the intent. Note: The action name must not contain whitespaces.
         */
        action?: string | null;
        /**
         * Optional. The list of platforms for which the first responses will be copied from the messages in PLATFORM_UNSPECIFIED (i.e. default platform).
         */
        defaultResponsePlatforms?: string[] | null;
        /**
         * Required. The name of this intent.
         */
        displayName?: string | null;
        /**
         * Optional. Indicates that this intent ends an interaction. Some integrations (e.g., Actions on Google or Dialogflow phone gateway) use this information to close interaction with an end user. Default is false.
         */
        endInteraction?: boolean | null;
        /**
         * Optional. The collection of event names that trigger the intent. If the collection of input contexts is not empty, all of the contexts must be present in the active user session for an event to trigger this intent. Event names are limited to 150 characters.
         */
        events?: string[] | null;
        /**
         * Output only. Read-only. Information about all followup intents that have this intent as a direct or indirect parent. We populate this field only in the output.
         */
        followupIntentInfo?: Schema$GoogleCloudDialogflowV2IntentFollowupIntentInfo[];
        /**
         * Optional. The list of context names required for this intent to be triggered. Format: `projects//agent/sessions/-/contexts/`.
         */
        inputContextNames?: string[] | null;
        /**
         * Optional. Indicates whether this is a fallback intent.
         */
        isFallback?: boolean | null;
        /**
         * Optional. Indicates that a live agent should be brought in to handle the interaction with the user. In most cases, when you set this flag to true, you would also want to set end_interaction to true as well. Default is false.
         */
        liveAgentHandoff?: boolean | null;
        /**
         * Optional. The collection of rich messages corresponding to the `Response` field in the Dialogflow console.
         */
        messages?: Schema$GoogleCloudDialogflowV2IntentMessage[];
        /**
         * Optional. Indicates whether Machine Learning is disabled for the intent. Note: If `ml_disabled` setting is set to true, then this intent is not taken into account during inference in `ML ONLY` match mode. Also, auto-markup in the UI is turned off.
         */
        mlDisabled?: boolean | null;
        /**
         * Optional. The unique identifier of this intent. Required for Intents.UpdateIntent and Intents.BatchUpdateIntents methods. Format: `projects//agent/intents/`.
         */
        name?: string | null;
        /**
         * Optional. The collection of contexts that are activated when the intent is matched. Context messages in this collection should not set the parameters field. Setting the `lifespan_count` to 0 will reset the context when the intent is matched. Format: `projects//agent/sessions/-/contexts/`.
         */
        outputContexts?: Schema$GoogleCloudDialogflowV2Context[];
        /**
         * Optional. The collection of parameters associated with the intent.
         */
        parameters?: Schema$GoogleCloudDialogflowV2IntentParameter[];
        /**
         * Read-only after creation. The unique identifier of the parent intent in the chain of followup intents. You can set this field when creating an intent, for example with CreateIntent or BatchUpdateIntents, in order to make this intent a followup intent. It identifies the parent followup intent. Format: `projects//agent/intents/`.
         */
        parentFollowupIntentName?: string | null;
        /**
         * Optional. The priority of this intent. Higher numbers represent higher priorities. - If the supplied value is unspecified or 0, the service translates the value to 500,000, which corresponds to the `Normal` priority in the console. - If the supplied value is negative, the intent is ignored in runtime detect intent requests.
         */
        priority?: number | null;
        /**
         * Optional. Indicates whether to delete all contexts in the current session when this intent is matched.
         */
        resetContexts?: boolean | null;
        /**
         * Output only. Read-only. The unique identifier of the root intent in the chain of followup intents. It identifies the correct followup intents chain for this intent. We populate this field only in the output. Format: `projects//agent/intents/`.
         */
        rootFollowupIntentName?: string | null;
        /**
         * Optional. The collection of examples that the agent is trained on.
         */
        trainingPhrases?: Schema$GoogleCloudDialogflowV2IntentTrainingPhrase[];
        /**
         * Optional. Indicates whether webhooks are enabled for the intent.
         */
        webhookState?: string | null;
    }
    /**
     * Represents a single followup intent in the chain.
     */
    export interface Schema$GoogleCloudDialogflowV2IntentFollowupIntentInfo {
        /**
         * The unique identifier of the followup intent. Format: `projects//agent/intents/`.
         */
        followupIntentName?: string | null;
        /**
         * The unique identifier of the followup intent's parent. Format: `projects//agent/intents/`.
         */
        parentFollowupIntentName?: string | null;
    }
    /**
     * A rich response message. Corresponds to the intent `Response` field in the Dialogflow console. For more information, see [Rich response messages](https://cloud.google.com/dialogflow/docs/intents-rich-messages).
     */
    export interface Schema$GoogleCloudDialogflowV2IntentMessage {
        /**
         * The basic card response for Actions on Google.
         */
        basicCard?: Schema$GoogleCloudDialogflowV2IntentMessageBasicCard;
        /**
         * Browse carousel card for Actions on Google.
         */
        browseCarouselCard?: Schema$GoogleCloudDialogflowV2IntentMessageBrowseCarouselCard;
        /**
         * The card response.
         */
        card?: Schema$GoogleCloudDialogflowV2IntentMessageCard;
        /**
         * The carousel card response for Actions on Google.
         */
        carouselSelect?: Schema$GoogleCloudDialogflowV2IntentMessageCarouselSelect;
        /**
         * The image response.
         */
        image?: Schema$GoogleCloudDialogflowV2IntentMessageImage;
        /**
         * The link out suggestion chip for Actions on Google.
         */
        linkOutSuggestion?: Schema$GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion;
        /**
         * The list card response for Actions on Google.
         */
        listSelect?: Schema$GoogleCloudDialogflowV2IntentMessageListSelect;
        /**
         * The media content card for Actions on Google.
         */
        mediaContent?: Schema$GoogleCloudDialogflowV2IntentMessageMediaContent;
        /**
         * A custom platform-specific response.
         */
        payload?: {
            [key: string]: any;
        } | null;
        /**
         * Optional. The platform that this message is intended for.
         */
        platform?: string | null;
        /**
         * The quick replies response.
         */
        quickReplies?: Schema$GoogleCloudDialogflowV2IntentMessageQuickReplies;
        /**
         * The voice and text-only responses for Actions on Google.
         */
        simpleResponses?: Schema$GoogleCloudDialogflowV2IntentMessageSimpleResponses;
        /**
         * The suggestion chips for Actions on Google.
         */
        suggestions?: Schema$GoogleCloudDialogflowV2IntentMessageSuggestions;
        /**
         * Table card for Actions on Google.
         */
        tableCard?: Schema$GoogleCloudDialogflowV2IntentMessageTableCard;
        /**
         * The text response.
         */
        text?: Schema$GoogleCloudDialogflowV2IntentMessageText;
    }
    /**
     * The basic card message. Useful for displaying information.
     */
    export interface Schema$GoogleCloudDialogflowV2IntentMessageBasicCard {
        /**
         * Optional. The collection of card buttons.
         */
        buttons?: Schema$GoogleCloudDialogflowV2IntentMessageBasicCardButton[];
        /**
         * Required, unless image is present. The body text of the card.
         */
        formattedText?: string | null;
        /**
         * Optional. The image for the card.
         */
        image?: Schema$GoogleCloudDialogflowV2IntentMessageImage;
        /**
         * Optional. The subtitle of the card.
         */
        subtitle?: string | null;
        /**
         * Optional. The title of the card.
         */
        title?: string | null;
    }
    /**
     * The button object that appears at the bottom of a card.
     */
    export interface Schema$GoogleCloudDialogflowV2IntentMessageBasicCardButton {
        /**
         * Required. Action to take when a user taps on the button.
         */
        openUriAction?: Schema$GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction;
        /**
         * Required. The title of the button.
         */
        title?: string | null;
    }
    /**
     * Opens the given URI.
     */
    export interface Schema$GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction {
        /**
         * Required. The HTTP or HTTPS scheme URI.
         */
        uri?: string | null;
    }
    /**
     * Browse Carousel Card for Actions on Google. https://developers.google.com/actions/assistant/responses#browsing_carousel
     */
    export interface Schema$GoogleCloudDialogflowV2IntentMessageBrowseCarouselCard {
        /**
         * Optional. Settings for displaying the image. Applies to every image in items.
         */
        imageDisplayOptions?: string | null;
        /**
         * Required. List of items in the Browse Carousel Card. Minimum of two items, maximum of ten.
         */
        items?: Schema$GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem[];
    }
    /**
     * Browsing carousel tile
     */
    export interface Schema$GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem {
        /**
         * Optional. Description of the carousel item. Maximum of four lines of text.
         */
        description?: string | null;
        /**
         * Optional. Text that appears at the bottom of the Browse Carousel Card. Maximum of one line of text.
         */
        footer?: string | null;
        /**
         * Optional. Hero image for the carousel item.
         */
        image?: Schema$GoogleCloudDialogflowV2IntentMessageImage;
        /**
         * Required. Action to present to the user.
         */
        openUriAction?: Schema$GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction;
        /**
         * Required. Title of the carousel item. Maximum of two lines of text.
         */
        title?: string | null;
    }
    /**
     * Actions on Google action to open a given url.
     */
    export interface Schema$GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction {
        /**
         * Required. URL
         */
        url?: string | null;
        /**
         * Optional. Specifies the type of viewer that is used when opening the URL. Defaults to opening via web browser.
         */
        urlTypeHint?: string | null;
    }
    /**
     * The card response message.
     */
    export interface Schema$GoogleCloudDialogflowV2IntentMessageCard {
        /**
         * Optional. The collection of card buttons.
         */
        buttons?: Schema$GoogleCloudDialogflowV2IntentMessageCardButton[];
        /**
         * Optional. The public URI to an image file for the card.
         */
        imageUri?: string | null;
        /**
         * Optional. The subtitle of the card.
         */
        subtitle?: string | null;
        /**
         * Optional. The title of the card.
         */
        title?: string | null;
    }
    /**
     * Contains information about a button.
     */
    export interface Schema$GoogleCloudDialogflowV2IntentMessageCardButton {
        /**
         * Optional. The text to send back to the Dialogflow API or a URI to open.
         */
        postback?: string | null;
        /**
         * Optional. The text to show on the button.
         */
        text?: string | null;
    }
    /**
     * The card for presenting a carousel of options to select from.
     */
    export interface Schema$GoogleCloudDialogflowV2IntentMessageCarouselSelect {
        /**
         * Required. Carousel items.
         */
        items?: Schema$GoogleCloudDialogflowV2IntentMessageCarouselSelectItem[];
    }
    /**
     * An item in the carousel.
     */
    export interface Schema$GoogleCloudDialogflowV2IntentMessageCarouselSelectItem {
        /**
         * Optional. The body text of the card.
         */
        description?: string | null;
        /**
         * Optional. The image to display.
         */
        image?: Schema$GoogleCloudDialogflowV2IntentMessageImage;
        /**
         * Required. Additional info about the option item.
         */
        info?: Schema$GoogleCloudDialogflowV2IntentMessageSelectItemInfo;
        /**
         * Required. Title of the carousel item.
         */
        title?: string | null;
    }
    /**
     * Column properties for TableCard.
     */
    export interface Schema$GoogleCloudDialogflowV2IntentMessageColumnProperties {
        /**
         * Required. Column heading.
         */
        header?: string | null;
        /**
         * Optional. Defines text alignment for all cells in this column.
         */
        horizontalAlignment?: string | null;
    }
    /**
     * The image response message.
     */
    export interface Schema$GoogleCloudDialogflowV2IntentMessageImage {
        /**
         * Optional. A text description of the image to be used for accessibility, e.g., screen readers.
         */
        accessibilityText?: string | null;
        /**
         * Optional. The public URI to an image file.
         */
        imageUri?: string | null;
    }
    /**
     * The suggestion chip message that allows the user to jump out to the app or website associated with this agent.
     */
    export interface Schema$GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion {
        /**
         * Required. The name of the app or site this chip is linking to.
         */
        destinationName?: string | null;
        /**
         * Required. The URI of the app or site to open when the user taps the suggestion chip.
         */
        uri?: string | null;
    }
    /**
     * The card for presenting a list of options to select from.
     */
    export interface Schema$GoogleCloudDialogflowV2IntentMessageListSelect {
        /**
         * Required. List items.
         */
        items?: Schema$GoogleCloudDialogflowV2IntentMessageListSelectItem[];
        /**
         * Optional. Subtitle of the list.
         */
        subtitle?: string | null;
        /**
         * Optional. The overall title of the list.
         */
        title?: string | null;
    }
    /**
     * An item in the list.
     */
    export interface Schema$GoogleCloudDialogflowV2IntentMessageListSelectItem {
        /**
         * Optional. The main text describing the item.
         */
        description?: string | null;
        /**
         * Optional. The image to display.
         */
        image?: Schema$GoogleCloudDialogflowV2IntentMessageImage;
        /**
         * Required. Additional information about this option.
         */
        info?: Schema$GoogleCloudDialogflowV2IntentMessageSelectItemInfo;
        /**
         * Required. The title of the list item.
         */
        title?: string | null;
    }
    /**
     * The media content card for Actions on Google.
     */
    export interface Schema$GoogleCloudDialogflowV2IntentMessageMediaContent {
        /**
         * Required. List of media objects.
         */
        mediaObjects?: Schema$GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject[];
        /**
         * Optional. What type of media is the content (ie "audio").
         */
        mediaType?: string | null;
    }
    /**
     * Response media object for media content card.
     */
    export interface Schema$GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject {
        /**
         * Required. Url where the media is stored.
         */
        contentUrl?: string | null;
        /**
         * Optional. Description of media card.
         */
        description?: string | null;
        /**
         * Optional. Icon to display above media content.
         */
        icon?: Schema$GoogleCloudDialogflowV2IntentMessageImage;
        /**
         * Optional. Image to display above media content.
         */
        largeImage?: Schema$GoogleCloudDialogflowV2IntentMessageImage;
        /**
         * Required. Name of media card.
         */
        name?: string | null;
    }
    /**
     * The quick replies response message.
     */
    export interface Schema$GoogleCloudDialogflowV2IntentMessageQuickReplies {
        /**
         * Optional. The collection of quick replies.
         */
        quickReplies?: string[] | null;
        /**
         * Optional. The title of the collection of quick replies.
         */
        title?: string | null;
    }
    /**
     * Additional info about the select item for when it is triggered in a dialog.
     */
    export interface Schema$GoogleCloudDialogflowV2IntentMessageSelectItemInfo {
        /**
         * Required. A unique key that will be sent back to the agent if this response is given.
         */
        key?: string | null;
        /**
         * Optional. A list of synonyms that can also be used to trigger this item in dialog.
         */
        synonyms?: string[] | null;
    }
    /**
     * The simple response message containing speech or text.
     */
    export interface Schema$GoogleCloudDialogflowV2IntentMessageSimpleResponse {
        /**
         * Optional. The text to display.
         */
        displayText?: string | null;
        /**
         * One of text_to_speech or ssml must be provided. Structured spoken response to the user in the SSML format. Mutually exclusive with text_to_speech.
         */
        ssml?: string | null;
        /**
         * One of text_to_speech or ssml must be provided. The plain text of the speech output. Mutually exclusive with ssml.
         */
        textToSpeech?: string | null;
    }
    /**
     * The collection of simple response candidates. This message in `QueryResult.fulfillment_messages` and `WebhookResponse.fulfillment_messages` should contain only one `SimpleResponse`.
     */
    export interface Schema$GoogleCloudDialogflowV2IntentMessageSimpleResponses {
        /**
         * Required. The list of simple responses.
         */
        simpleResponses?: Schema$GoogleCloudDialogflowV2IntentMessageSimpleResponse[];
    }
    /**
     * The suggestion chip message that the user can tap to quickly post a reply to the conversation.
     */
    export interface Schema$GoogleCloudDialogflowV2IntentMessageSuggestion {
        /**
         * Required. The text shown the in the suggestion chip.
         */
        title?: string | null;
    }
    /**
     * The collection of suggestions.
     */
    export interface Schema$GoogleCloudDialogflowV2IntentMessageSuggestions {
        /**
         * Required. The list of suggested replies.
         */
        suggestions?: Schema$GoogleCloudDialogflowV2IntentMessageSuggestion[];
    }
    /**
     * Table card for Actions on Google.
     */
    export interface Schema$GoogleCloudDialogflowV2IntentMessageTableCard {
        /**
         * Optional. List of buttons for the card.
         */
        buttons?: Schema$GoogleCloudDialogflowV2IntentMessageBasicCardButton[];
        /**
         * Optional. Display properties for the columns in this table.
         */
        columnProperties?: Schema$GoogleCloudDialogflowV2IntentMessageColumnProperties[];
        /**
         * Optional. Image which should be displayed on the card.
         */
        image?: Schema$GoogleCloudDialogflowV2IntentMessageImage;
        /**
         * Optional. Rows in this table of data.
         */
        rows?: Schema$GoogleCloudDialogflowV2IntentMessageTableCardRow[];
        /**
         * Optional. Subtitle to the title.
         */
        subtitle?: string | null;
        /**
         * Required. Title of the card.
         */
        title?: string | null;
    }
    /**
     * Cell of TableCardRow.
     */
    export interface Schema$GoogleCloudDialogflowV2IntentMessageTableCardCell {
        /**
         * Required. Text in this cell.
         */
        text?: string | null;
    }
    /**
     * Row of TableCard.
     */
    export interface Schema$GoogleCloudDialogflowV2IntentMessageTableCardRow {
        /**
         * Optional. List of cells that make up this row.
         */
        cells?: Schema$GoogleCloudDialogflowV2IntentMessageTableCardCell[];
        /**
         * Optional. Whether to add a visual divider after this row.
         */
        dividerAfter?: boolean | null;
    }
    /**
     * The text response message.
     */
    export interface Schema$GoogleCloudDialogflowV2IntentMessageText {
        /**
         * Optional. The collection of the agent's responses.
         */
        text?: string[] | null;
    }
    /**
     * Represents intent parameters.
     */
    export interface Schema$GoogleCloudDialogflowV2IntentParameter {
        /**
         * Optional. The default value to use when the `value` yields an empty result. Default values can be extracted from contexts by using the following syntax: `#context_name.parameter_name`.
         */
        defaultValue?: string | null;
        /**
         * Required. The name of the parameter.
         */
        displayName?: string | null;
        /**
         * Optional. The name of the entity type, prefixed with `@`, that describes values of the parameter. If the parameter is required, this must be provided.
         */
        entityTypeDisplayName?: string | null;
        /**
         * Optional. Indicates whether the parameter represents a list of values.
         */
        isList?: boolean | null;
        /**
         * Optional. Indicates whether the parameter is required. That is, whether the intent cannot be completed without collecting the parameter value.
         */
        mandatory?: boolean | null;
        /**
         * The unique identifier of this parameter.
         */
        name?: string | null;
        /**
         * Optional. The collection of prompts that the agent can present to the user in order to collect a value for the parameter.
         */
        prompts?: string[] | null;
        /**
         * Optional. The definition of the parameter value. It can be: - a constant string, - a parameter value defined as `$parameter_name`, - an original parameter value defined as `$parameter_name.original`, - a parameter value from some context defined as `#context_name.parameter_name`.
         */
        value?: string | null;
    }
    /**
     * Represents an example that the agent is trained on.
     */
    export interface Schema$GoogleCloudDialogflowV2IntentTrainingPhrase {
        /**
         * Output only. The unique identifier of this training phrase.
         */
        name?: string | null;
        /**
         * Required. The ordered list of training phrase parts. The parts are concatenated in order to form the training phrase. Note: The API does not automatically annotate training phrases like the Dialogflow Console does. Note: Do not forget to include whitespace at part boundaries, so the training phrase is well formatted when the parts are concatenated. If the training phrase does not need to be annotated with parameters, you just need a single part with only the Part.text field set. If you want to annotate the training phrase, you must create multiple parts, where the fields of each part are populated in one of two ways: - `Part.text` is set to a part of the phrase that has no parameters. - `Part.text` is set to a part of the phrase that you want to annotate, and the `entity_type`, `alias`, and `user_defined` fields are all set.
         */
        parts?: Schema$GoogleCloudDialogflowV2IntentTrainingPhrasePart[];
        /**
         * Optional. Indicates how many times this example was added to the intent. Each time a developer adds an existing sample by editing an intent or training, this counter is increased.
         */
        timesAddedCount?: number | null;
        /**
         * Required. The type of the training phrase.
         */
        type?: string | null;
    }
    /**
     * Represents a part of a training phrase.
     */
    export interface Schema$GoogleCloudDialogflowV2IntentTrainingPhrasePart {
        /**
         * Optional. The parameter name for the value extracted from the annotated part of the example. This field is required for annotated parts of the training phrase.
         */
        alias?: string | null;
        /**
         * Optional. The entity type name prefixed with `@`. This field is required for annotated parts of the training phrase.
         */
        entityType?: string | null;
        /**
         * Required. The text for this part.
         */
        text?: string | null;
        /**
         * Optional. Indicates whether the text was manually annotated. This field is set to true when the Dialogflow Console is used to manually annotate the part. When creating an annotated part with the API, you must set this to true.
         */
        userDefined?: boolean | null;
    }
    /**
     * Metadata in google::longrunning::Operation for Knowledge operations.
     */
    export interface Schema$GoogleCloudDialogflowV2KnowledgeOperationMetadata {
        /**
         * Output only. The current state of this operation.
         */
        state?: string | null;
    }
    /**
     * Represents a message posted into a conversation.
     */
    export interface Schema$GoogleCloudDialogflowV2Message {
        /**
         * Required. The message content.
         */
        content?: string | null;
        /**
         * Output only. The time when the message was created.
         */
        createTime?: string | null;
        /**
         * Optional. The message language. This should be a [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag. Example: "en-US".
         */
        languageCode?: string | null;
        /**
         * Output only. The annotation for the message.
         */
        messageAnnotation?: Schema$GoogleCloudDialogflowV2MessageAnnotation;
        /**
         * The unique identifier of the message. Format: `projects//locations//conversations//messages/`.
         */
        name?: string | null;
        /**
         * Output only. The participant that sends this message.
         */
        participant?: string | null;
        /**
         * Output only. The role of the participant.
         */
        participantRole?: string | null;
    }
    /**
     * Represents the result of annotation for the message.
     */
    export interface Schema$GoogleCloudDialogflowV2MessageAnnotation {
        /**
         * Indicates whether the text message contains entities.
         */
        containEntities?: boolean | null;
        /**
         * The collection of annotated message parts ordered by their position in the message. You can recover the annotated message by concatenating [AnnotatedMessagePart.text].
         */
        parts?: Schema$GoogleCloudDialogflowV2AnnotatedMessagePart[];
    }
    /**
     * Represents the contents of the original request that was passed to the `[Streaming]DetectIntent` call.
     */
    export interface Schema$GoogleCloudDialogflowV2OriginalDetectIntentRequest {
        /**
         * Optional. This field is set to the value of the `QueryParameters.payload` field passed in the request. Some integrations that query a Dialogflow agent may provide additional information in the payload. In particular, for the Dialogflow Phone Gateway integration, this field has the form: { "telephony": { "caller_id": "+18558363987" \} \} Note: The caller ID field (`caller_id`) will be redacted for Trial Edition agents and populated with the caller ID in [E.164 format](https://en.wikipedia.org/wiki/E.164) for Essentials Edition agents.
         */
        payload?: {
            [key: string]: any;
        } | null;
        /**
         * The source of this request, e.g., `google`, `facebook`, `slack`. It is set by Dialogflow-owned servers.
         */
        source?: string | null;
        /**
         * Optional. The version of the protocol used for this request. This field is AoG-specific.
         */
        version?: string | null;
    }
    /**
     * Represents the result of conversational query or event processing.
     */
    export interface Schema$GoogleCloudDialogflowV2QueryResult {
        /**
         * The action name from the matched intent.
         */
        action?: string | null;
        /**
         * This field is set to: - `false` if the matched intent has required parameters and not all of the required parameter values have been collected. - `true` if all required parameter values have been collected, or if the matched intent doesn't contain any required parameters.
         */
        allRequiredParamsPresent?: boolean | null;
        /**
         * Indicates whether the conversational query triggers a cancellation for slot filling.
         */
        cancelsSlotFilling?: boolean | null;
        /**
         * Free-form diagnostic information for the associated detect intent request. The fields of this data can change without notice, so you should not write code that depends on its structure. The data may contain: - webhook call latency - webhook errors
         */
        diagnosticInfo?: {
            [key: string]: any;
        } | null;
        /**
         * The collection of rich messages to present to the user.
         */
        fulfillmentMessages?: Schema$GoogleCloudDialogflowV2IntentMessage[];
        /**
         * The text to be pronounced to the user or shown on the screen. Note: This is a legacy field, `fulfillment_messages` should be preferred.
         */
        fulfillmentText?: string | null;
        /**
         * The intent that matched the conversational query. Some, not all fields are filled in this message, including but not limited to: `name`, `display_name`, `end_interaction` and `is_fallback`.
         */
        intent?: Schema$GoogleCloudDialogflowV2Intent;
        /**
         * The intent detection confidence. Values range from 0.0 (completely uncertain) to 1.0 (completely certain). This value is for informational purpose only and is only used to help match the best intent within the classification threshold. This value may change for the same end-user expression at any time due to a model retraining or change in implementation. If there are `multiple knowledge_answers` messages, this value is set to the greatest `knowledgeAnswers.match_confidence` value in the list.
         */
        intentDetectionConfidence?: number | null;
        /**
         * The language that was triggered during intent detection. See [Language Support](https://cloud.google.com/dialogflow/docs/reference/language) for a list of the currently supported language codes.
         */
        languageCode?: string | null;
        /**
         * The collection of output contexts. If applicable, `output_contexts.parameters` contains entries with name `.original` containing the original parameter values before the query.
         */
        outputContexts?: Schema$GoogleCloudDialogflowV2Context[];
        /**
         * The collection of extracted parameters. Depending on your protocol or client library language, this is a map, associative array, symbol table, dictionary, or JSON object composed of a collection of (MapKey, MapValue) pairs: - MapKey type: string - MapKey value: parameter name - MapValue type: - If parameter's entity type is a composite entity: map - Else: depending on parameter value type, could be one of string, number, boolean, null, list or map - MapValue value: - If parameter's entity type is a composite entity: map from composite entity property names to property values - Else: parameter value
         */
        parameters?: {
            [key: string]: any;
        } | null;
        /**
         * The original conversational query text: - If natural language text was provided as input, `query_text` contains a copy of the input. - If natural language speech audio was provided as input, `query_text` contains the speech recognition result. If speech recognizer produced multiple alternatives, a particular one is picked. - If automatic spell correction is enabled, `query_text` will contain the corrected user input.
         */
        queryText?: string | null;
        /**
         * The sentiment analysis result, which depends on the `sentiment_analysis_request_config` specified in the request.
         */
        sentimentAnalysisResult?: Schema$GoogleCloudDialogflowV2SentimentAnalysisResult;
        /**
         * The Speech recognition confidence between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. The default of 0.0 is a sentinel value indicating that confidence was not set. This field is not guaranteed to be accurate or set. In particular this field isn't set for StreamingDetectIntent since the streaming endpoint has separate confidence estimates per portion of the audio in StreamingRecognitionResult.
         */
        speechRecognitionConfidence?: number | null;
        /**
         * If the query was fulfilled by a webhook call, this field is set to the value of the `payload` field returned in the webhook response.
         */
        webhookPayload?: {
            [key: string]: any;
        } | null;
        /**
         * If the query was fulfilled by a webhook call, this field is set to the value of the `source` field returned in the webhook response.
         */
        webhookSource?: string | null;
    }
    /**
     * The sentiment, such as positive/negative feeling or association, for a unit of analysis, such as the query text.
     */
    export interface Schema$GoogleCloudDialogflowV2Sentiment {
        /**
         * A non-negative number in the [0, +inf) range, which represents the absolute magnitude of sentiment, regardless of score (positive or negative).
         */
        magnitude?: number | null;
        /**
         * Sentiment score between -1.0 (negative sentiment) and 1.0 (positive sentiment).
         */
        score?: number | null;
    }
    /**
     * The result of sentiment analysis. Sentiment analysis inspects user input and identifies the prevailing subjective opinion, especially to determine a user's attitude as positive, negative, or neutral. For Participants.DetectIntent, it needs to be configured in DetectIntentRequest.query_params. For Participants.StreamingDetectIntent, it needs to be configured in StreamingDetectIntentRequest.query_params. And for Participants.AnalyzeContent and Participants.StreamingAnalyzeContent, it needs to be configured in ConversationProfile.human_agent_assistant_config
     */
    export interface Schema$GoogleCloudDialogflowV2SentimentAnalysisResult {
        /**
         * The sentiment analysis result for `query_text`.
         */
        queryTextSentiment?: Schema$GoogleCloudDialogflowV2Sentiment;
    }
    /**
     * A session represents a conversation between a Dialogflow agent and an end-user. You can create special entities, called session entities, during a session. Session entities can extend or replace custom entity types and only exist during the session that they were created for. All session data, including session entities, is stored by Dialogflow for 20 minutes. For more information, see the [session entity guide](https://cloud.google.com/dialogflow/docs/entities-session).
     */
    export interface Schema$GoogleCloudDialogflowV2SessionEntityType {
        /**
         * Required. The collection of entities associated with this session entity type.
         */
        entities?: Schema$GoogleCloudDialogflowV2EntityTypeEntity[];
        /**
         * Required. Indicates whether the additional data should override or supplement the custom entity type definition.
         */
        entityOverrideMode?: string | null;
        /**
         * Required. The unique identifier of this session entity type. Format: `projects//agent/sessions//entityTypes/`, or `projects//agent/environments//users//sessions//entityTypes/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user. `` must be the display name of an existing entity type in the same agent that will be overridden or supplemented.
         */
        name?: string | null;
    }
    /**
     * The response message for Participants.SuggestArticles.
     */
    export interface Schema$GoogleCloudDialogflowV2SuggestArticlesResponse {
        /**
         * Articles ordered by score in descending order.
         */
        articleAnswers?: Schema$GoogleCloudDialogflowV2ArticleAnswer[];
        /**
         * Number of messages prior to and including latest_message to compile the suggestion. It may be smaller than the SuggestArticlesRequest.context_size field in the request if there aren't that many messages in the conversation.
         */
        contextSize?: number | null;
        /**
         * The name of the latest conversation message used to compile suggestion for. Format: `projects//locations//conversations//messages/`.
         */
        latestMessage?: string | null;
    }
    /**
     * The request message for Participants.SuggestFaqAnswers.
     */
    export interface Schema$GoogleCloudDialogflowV2SuggestFaqAnswersResponse {
        /**
         * Number of messages prior to and including latest_message to compile the suggestion. It may be smaller than the SuggestFaqAnswersRequest.context_size field in the request if there aren't that many messages in the conversation.
         */
        contextSize?: number | null;
        /**
         * Answers extracted from FAQ documents.
         */
        faqAnswers?: Schema$GoogleCloudDialogflowV2FaqAnswer[];
        /**
         * The name of the latest conversation message used to compile suggestion for. Format: `projects//locations//conversations//messages/`.
         */
        latestMessage?: string | null;
    }
    /**
     * One response of different type of suggestion response which is used in the response of Participants.AnalyzeContent and Participants.AnalyzeContent, as well as HumanAgentAssistantEvent.
     */
    export interface Schema$GoogleCloudDialogflowV2SuggestionResult {
        /**
         * Error status if the request failed.
         */
        error?: Schema$GoogleRpcStatus;
        /**
         * SuggestArticlesResponse if request is for ARTICLE_SUGGESTION.
         */
        suggestArticlesResponse?: Schema$GoogleCloudDialogflowV2SuggestArticlesResponse;
        /**
         * SuggestFaqAnswersResponse if request is for FAQ_ANSWER.
         */
        suggestFaqAnswersResponse?: Schema$GoogleCloudDialogflowV2SuggestFaqAnswersResponse;
    }
    /**
     * The request message for a webhook call.
     */
    export interface Schema$GoogleCloudDialogflowV2WebhookRequest {
        /**
         * Optional. The contents of the original request that was passed to `[Streaming]DetectIntent` call.
         */
        originalDetectIntentRequest?: Schema$GoogleCloudDialogflowV2OriginalDetectIntentRequest;
        /**
         * The result of the conversational query or event processing. Contains the same value as `[Streaming]DetectIntentResponse.query_result`.
         */
        queryResult?: Schema$GoogleCloudDialogflowV2QueryResult;
        /**
         * The unique identifier of the response. Contains the same value as `[Streaming]DetectIntentResponse.response_id`.
         */
        responseId?: string | null;
        /**
         * The unique identifier of detectIntent request session. Can be used to identify end-user inside webhook implementation. Format: `projects//agent/sessions/`, or `projects//agent/environments//users//sessions/`.
         */
        session?: string | null;
    }
    /**
     * The response message for a webhook call. This response is validated by the Dialogflow server. If validation fails, an error will be returned in the QueryResult.diagnostic_info field. Setting JSON fields to an empty value with the wrong type is a common error. To avoid this error: - Use `""` for empty strings - Use `{\}` or `null` for empty objects - Use `[]` or `null` for empty arrays For more information, see the [Protocol Buffers Language Guide](https://developers.google.com/protocol-buffers/docs/proto3#json).
     */
    export interface Schema$GoogleCloudDialogflowV2WebhookResponse {
        /**
         * Optional. Invokes the supplied events. When this field is set, Dialogflow ignores the `fulfillment_text`, `fulfillment_messages`, and `payload` fields.
         */
        followupEventInput?: Schema$GoogleCloudDialogflowV2EventInput;
        /**
         * Optional. The rich response messages intended for the end-user. When provided, Dialogflow uses this field to populate QueryResult.fulfillment_messages sent to the integration or API caller.
         */
        fulfillmentMessages?: Schema$GoogleCloudDialogflowV2IntentMessage[];
        /**
         * Optional. The text response message intended for the end-user. It is recommended to use `fulfillment_messages.text.text[0]` instead. When provided, Dialogflow uses this field to populate QueryResult.fulfillment_text sent to the integration or API caller.
         */
        fulfillmentText?: string | null;
        /**
         * Optional. The collection of output contexts that will overwrite currently active contexts for the session and reset their lifespans. When provided, Dialogflow uses this field to populate QueryResult.output_contexts sent to the integration or API caller.
         */
        outputContexts?: Schema$GoogleCloudDialogflowV2Context[];
        /**
         * Optional. This field can be used to pass custom data from your webhook to the integration or API caller. Arbitrary JSON objects are supported. When provided, Dialogflow uses this field to populate QueryResult.webhook_payload sent to the integration or API caller. This field is also used by the [Google Assistant integration](https://cloud.google.com/dialogflow/docs/integrations/aog) for rich response messages. See the format definition at [Google Assistant Dialogflow webhook format](https://developers.google.com/assistant/actions/build/json/dialogflow-webhook-json)
         */
        payload?: {
            [key: string]: any;
        } | null;
        /**
         * Optional. Additional session entity types to replace or extend developer entity types with. The entity synonyms apply to all languages and persist for the session. Setting this data from a webhook overwrites the session entity types that have been set using `detectIntent`, `streamingDetectIntent` or SessionEntityType management methods.
         */
        sessionEntityTypes?: Schema$GoogleCloudDialogflowV2SessionEntityType[];
        /**
         * Optional. A custom field used to identify the webhook source. Arbitrary strings are supported. When provided, Dialogflow uses this field to populate QueryResult.webhook_source sent to the integration or API caller.
         */
        source?: string | null;
    }
    /**
     * Metadata for CreateDocument operation.
     */
    export interface Schema$GoogleCloudDialogflowV3alpha1CreateDocumentOperationMetadata {
        /**
         * The generic information of the operation.
         */
        genericMetadata?: Schema$GoogleCloudDialogflowV3alpha1GenericKnowledgeOperationMetadata;
    }
    /**
     * Metadata for DeleteDocument operation.
     */
    export interface Schema$GoogleCloudDialogflowV3alpha1DeleteDocumentOperationMetadata {
        /**
         * The generic information of the operation.
         */
        genericMetadata?: Schema$GoogleCloudDialogflowV3alpha1GenericKnowledgeOperationMetadata;
    }
    /**
     * Metadata in google::longrunning::Operation for Knowledge operations.
     */
    export interface Schema$GoogleCloudDialogflowV3alpha1GenericKnowledgeOperationMetadata {
        /**
         * Required. Output only. The current state of this operation.
         */
        state?: string | null;
    }
    /**
     * Metadata for ImportDocuments operation.
     */
    export interface Schema$GoogleCloudDialogflowV3alpha1ImportDocumentsOperationMetadata {
        /**
         * The generic information of the operation.
         */
        genericMetadata?: Schema$GoogleCloudDialogflowV3alpha1GenericKnowledgeOperationMetadata;
    }
    /**
     * Response message for Documents.ImportDocuments.
     */
    export interface Schema$GoogleCloudDialogflowV3alpha1ImportDocumentsResponse {
        /**
         * Includes details about skipped documents or any other warnings.
         */
        warnings?: Schema$GoogleRpcStatus[];
    }
    /**
     * Metadata for ReloadDocument operation.
     */
    export interface Schema$GoogleCloudDialogflowV3alpha1ReloadDocumentOperationMetadata {
        /**
         * The generic information of the operation.
         */
        genericMetadata?: Schema$GoogleCloudDialogflowV3alpha1GenericKnowledgeOperationMetadata;
    }
    /**
     * Metadata for UpdateDocument operation.
     */
    export interface Schema$GoogleCloudDialogflowV3alpha1UpdateDocumentOperationMetadata {
        /**
         * The generic information of the operation.
         */
        genericMetadata?: Schema$GoogleCloudDialogflowV3alpha1GenericKnowledgeOperationMetadata;
    }
    /**
     * The response message for Locations.ListLocations.
     */
    export interface Schema$GoogleCloudLocationListLocationsResponse {
        /**
         * A list of locations that matches the specified filter in the request.
         */
        locations?: Schema$GoogleCloudLocationLocation[];
        /**
         * The standard List next-page token.
         */
        nextPageToken?: string | null;
    }
    /**
     * A resource that represents Google Cloud Platform location.
     */
    export interface Schema$GoogleCloudLocationLocation {
        /**
         * The friendly name for this location, typically a nearby city name. For example, "Tokyo".
         */
        displayName?: string | null;
        /**
         * Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"\}
         */
        labels?: {
            [key: string]: string;
        } | null;
        /**
         * The canonical id for this location. For example: `"us-east1"`.
         */
        locationId?: string | null;
        /**
         * Service-specific metadata. For example the available capacity at the given location.
         */
        metadata?: {
            [key: string]: any;
        } | null;
        /**
         * Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"`
         */
        name?: string | null;
    }
    /**
     * The response message for Operations.ListOperations.
     */
    export interface Schema$GoogleLongrunningListOperationsResponse {
        /**
         * The standard List next-page token.
         */
        nextPageToken?: string | null;
        /**
         * A list of operations that matches the specified filter in the request.
         */
        operations?: Schema$GoogleLongrunningOperation[];
    }
    /**
     * This resource represents a long-running operation that is the result of a network API call.
     */
    export interface Schema$GoogleLongrunningOperation {
        /**
         * If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.
         */
        done?: boolean | null;
        /**
         * The error result of the operation in case of failure or cancellation.
         */
        error?: Schema$GoogleRpcStatus;
        /**
         * Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.
         */
        metadata?: {
            [key: string]: any;
        } | null;
        /**
         * The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id\}`.
         */
        name?: string | null;
        /**
         * The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.
         */
        response?: {
            [key: string]: any;
        } | null;
    }
    /**
     * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \} The JSON representation for `Empty` is empty JSON object `{\}`.
     */
    export interface Schema$GoogleProtobufEmpty {
    }
    /**
     * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
     */
    export interface Schema$GoogleRpcStatus {
        /**
         * The status code, which should be an enum value of google.rpc.Code.
         */
        code?: number | null;
        /**
         * A list of messages that carry the error details. There is a common set of message types for APIs to use.
         */
        details?: Array<{
            [key: string]: any;
        }> | null;
        /**
         * A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.
         */
        message?: string | null;
    }
    /**
     * An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this object must conform to the WGS84 standard. Values must be within normalized ranges.
     */
    export interface Schema$GoogleTypeLatLng {
        /**
         * The latitude in degrees. It must be in the range [-90.0, +90.0].
         */
        latitude?: number | null;
        /**
         * The longitude in degrees. It must be in the range [-180.0, +180.0].
         */
        longitude?: number | null;
    }
    export class Resource$Projects {
        context: APIRequestContext;
        locations: Resource$Projects$Locations;
        operations: Resource$Projects$Operations;
        constructor(context: APIRequestContext);
    }
    export class Resource$Projects$Locations {
        context: APIRequestContext;
        agents: Resource$Projects$Locations$Agents;
        operations: Resource$Projects$Locations$Operations;
        securitySettings: Resource$Projects$Locations$Securitysettings;
        constructor(context: APIRequestContext);
        /**
         * Gets information about a location.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await dialogflow.projects.locations.get({
         *     // Resource name for the location.
         *     name: 'projects/my-project/locations/my-location',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "displayName": "my_displayName",
         *   //   "labels": {},
         *   //   "locationId": "my_locationId",
         *   //   "metadata": {},
         *   //   "name": "my_name"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Projects$Locations$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Projects$Locations$Get, options?: MethodOptions): GaxiosPromise<Schema$GoogleCloudLocationLocation>;
        get(params: Params$Resource$Projects$Locations$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Projects$Locations$Get, options: MethodOptions | BodyResponseCallback<Schema$GoogleCloudLocationLocation>, callback: BodyResponseCallback<Schema$GoogleCloudLocationLocation>): void;
        get(params: Params$Resource$Projects$Locations$Get, callback: BodyResponseCallback<Schema$GoogleCloudLocationLocation>): void;
        get(callback: BodyResponseCallback<Schema$GoogleCloudLocationLocation>): void;
        /**
         * Lists information about the supported locations for this service.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await dialogflow.projects.locations.list({
         *     // A filter to narrow down results to a preferred subset. The filtering language accepts strings like "displayName=tokyo", and is documented in more detail in [AIP-160](https://google.aip.dev/160).
         *     filter: 'placeholder-value',
         *     // The resource that owns the locations collection, if applicable.
         *     name: 'projects/my-project',
         *     // The maximum number of results to return. If not set, the service selects a default.
         *     pageSize: 'placeholder-value',
         *     // A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
         *     pageToken: 'placeholder-value',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "locations": [],
         *   //   "nextPageToken": "my_nextPageToken"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Projects$Locations$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Projects$Locations$List, options?: MethodOptions): GaxiosPromise<Schema$GoogleCloudLocationListLocationsResponse>;
        list(params: Params$Resource$Projects$Locations$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Projects$Locations$List, options: MethodOptions | BodyResponseCallback<Schema$GoogleCloudLocationListLocationsResponse>, callback: BodyResponseCallback<Schema$GoogleCloudLocationListLocationsResponse>): void;
        list(params: Params$Resource$Projects$Locations$List, callback: BodyResponseCallback<Schema$GoogleCloudLocationListLocationsResponse>): void;
        list(callback: BodyResponseCallback<Schema$GoogleCloudLocationListLocationsResponse>): void;
    }
    export interface Params$Resource$Projects$Locations$Get extends StandardParameters {
        /**
         * Resource name for the location.
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$List extends StandardParameters {
        /**
         * A filter to narrow down results to a preferred subset. The filtering language accepts strings like "displayName=tokyo", and is documented in more detail in [AIP-160](https://google.aip.dev/160).
         */
        filter?: string;
        /**
         * The resource that owns the locations collection, if applicable.
         */
        name?: string;
        /**
         * The maximum number of results to return. If not set, the service selects a default.
         */
        pageSize?: number;
        /**
         * A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
         */
        pageToken?: string;
    }
    export class Resource$Projects$Locations$Agents {
        context: APIRequestContext;
        changelogs: Resource$Projects$Locations$Agents$Changelogs;
        entityTypes: Resource$Projects$Locations$Agents$Entitytypes;
        environments: Resource$Projects$Locations$Agents$Environments;
        flows: Resource$Projects$Locations$Agents$Flows;
        intents: Resource$Projects$Locations$Agents$Intents;
        sessions: Resource$Projects$Locations$Agents$Sessions;
        testCases: Resource$Projects$Locations$Agents$Testcases;
        webhooks: Resource$Projects$Locations$Agents$Webhooks;
        constructor(context: APIRequestContext);
        /**
         * Creates an agent in the specified location. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await dialogflow.projects.locations.agents.create({
         *     // Required. The location to create a agent for. Format: `projects//locations/`.
         *     parent: 'projects/my-project/locations/my-location',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "advancedSettings": {},
         *       //   "avatarUri": "my_avatarUri",
         *       //   "defaultLanguageCode": "my_defaultLanguageCode",
         *       //   "description": "my_description",
         *       //   "displayName": "my_displayName",
         *       //   "enableSpellCorrection": false,
         *       //   "enableStackdriverLogging": false,
         *       //   "name": "my_name",
         *       //   "securitySettings": "my_securitySettings",
         *       //   "speechToTextSettings": {},
         *       //   "startFlow": "my_startFlow",
         *       //   "supportedLanguageCodes": [],
         *       //   "timeZone": "my_timeZone"
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "advancedSettings": {},
         *   //   "avatarUri": "my_avatarUri",
         *   //   "defaultLanguageCode": "my_defaultLanguageCode",
         *   //   "description": "my_description",
         *   //   "displayName": "my_displayName",
         *   //   "enableSpellCorrection": false,
         *   //   "enableStackdriverLogging": false,
         *   //   "name": "my_name",
         *   //   "securitySettings": "my_securitySettings",
         *   //   "speechToTextSettings": {},
         *   //   "startFlow": "my_startFlow",
         *   //   "supportedLanguageCodes": [],
         *   //   "timeZone": "my_timeZone"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Projects$Locations$Agents$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Projects$Locations$Agents$Create, options?: MethodOptions): GaxiosPromise<Schema$GoogleCloudDialogflowCxV3beta1Agent>;
        create(params: Params$Resource$Projects$Locations$Agents$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Projects$Locations$Agents$Create, options: MethodOptions | BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Agent>, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Agent>): void;
        create(params: Params$Resource$Projects$Locations$Agents$Create, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Agent>): void;
        create(callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Agent>): void;
        /**
         * Deletes the specified agent.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await dialogflow.projects.locations.agents.delete({
         *     // Required. The name of the agent to delete. Format: `projects//locations//agents/`.
         *     name: 'projects/my-project/locations/my-location/agents/my-agent',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {}
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Projects$Locations$Agents$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Projects$Locations$Agents$Delete, options?: MethodOptions): GaxiosPromise<Schema$GoogleProtobufEmpty>;
        delete(params: Params$Resource$Projects$Locations$Agents$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Projects$Locations$Agents$Delete, options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>, callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
        delete(params: Params$Resource$Projects$Locations$Agents$Delete, callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
        delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
        /**
         * Exports the specified agent to a binary file. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: ExportAgentResponse
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await dialogflow.projects.locations.agents.export({
         *     // Required. The name of the agent to export. Format: `projects//locations//agents/`.
         *     name: 'projects/my-project/locations/my-location/agents/my-agent',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "agentUri": "my_agentUri",
         *       //   "environment": "my_environment"
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "done": false,
         *   //   "error": {},
         *   //   "metadata": {},
         *   //   "name": "my_name",
         *   //   "response": {}
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        export(params: Params$Resource$Projects$Locations$Agents$Export, options: StreamMethodOptions): GaxiosPromise<Readable>;
        export(params?: Params$Resource$Projects$Locations$Agents$Export, options?: MethodOptions): GaxiosPromise<Schema$GoogleLongrunningOperation>;
        export(params: Params$Resource$Projects$Locations$Agents$Export, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        export(params: Params$Resource$Projects$Locations$Agents$Export, options: MethodOptions | BodyResponseCallback<Schema$GoogleLongrunningOperation>, callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>): void;
        export(params: Params$Resource$Projects$Locations$Agents$Export, callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>): void;
        export(callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>): void;
        /**
         * Retrieves the specified agent.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await dialogflow.projects.locations.agents.get({
         *     // Required. The name of the agent. Format: `projects//locations//agents/`.
         *     name: 'projects/my-project/locations/my-location/agents/my-agent',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "advancedSettings": {},
         *   //   "avatarUri": "my_avatarUri",
         *   //   "defaultLanguageCode": "my_defaultLanguageCode",
         *   //   "description": "my_description",
         *   //   "displayName": "my_displayName",
         *   //   "enableSpellCorrection": false,
         *   //   "enableStackdriverLogging": false,
         *   //   "name": "my_name",
         *   //   "securitySettings": "my_securitySettings",
         *   //   "speechToTextSettings": {},
         *   //   "startFlow": "my_startFlow",
         *   //   "supportedLanguageCodes": [],
         *   //   "timeZone": "my_timeZone"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Projects$Locations$Agents$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Projects$Locations$Agents$Get, options?: MethodOptions): GaxiosPromise<Schema$GoogleCloudDialogflowCxV3beta1Agent>;
        get(params: Params$Resource$Projects$Locations$Agents$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Projects$Locations$Agents$Get, options: MethodOptions | BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Agent>, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Agent>): void;
        get(params: Params$Resource$Projects$Locations$Agents$Get, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Agent>): void;
        get(callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Agent>): void;
        /**
         * Gets the latest agent validation result. Agent validation is performed when ValidateAgent is called.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await dialogflow.projects.locations.agents.getValidationResult({
         *     // If not specified, the agent's default language is used.
         *     languageCode: 'placeholder-value',
         *     // Required. The agent name. Format: `projects//locations//agents//validationResult`.
         *     name: 'projects/my-project/locations/my-location/agents/my-agent/validationResult',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "flowValidationResults": [],
         *   //   "name": "my_name"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        getValidationResult(params: Params$Resource$Projects$Locations$Agents$Getvalidationresult, options: StreamMethodOptions): GaxiosPromise<Readable>;
        getValidationResult(params?: Params$Resource$Projects$Locations$Agents$Getvalidationresult, options?: MethodOptions): GaxiosPromise<Schema$GoogleCloudDialogflowCxV3beta1AgentValidationResult>;
        getValidationResult(params: Params$Resource$Projects$Locations$Agents$Getvalidationresult, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        getValidationResult(params: Params$Resource$Projects$Locations$Agents$Getvalidationresult, options: MethodOptions | BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1AgentValidationResult>, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1AgentValidationResult>): void;
        getValidationResult(params: Params$Resource$Projects$Locations$Agents$Getvalidationresult, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1AgentValidationResult>): void;
        getValidationResult(callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1AgentValidationResult>): void;
        /**
         * Returns the list of all agents in the specified location.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await dialogflow.projects.locations.agents.list({
         *     // The maximum number of items to return in a single page. By default 100 and at most 1000.
         *     pageSize: 'placeholder-value',
         *     // The next_page_token value returned from a previous list request.
         *     pageToken: 'placeholder-value',
         *     // Required. The location to list all agents for. Format: `projects//locations/`.
         *     parent: 'projects/my-project/locations/my-location',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "agents": [],
         *   //   "nextPageToken": "my_nextPageToken"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Projects$Locations$Agents$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Projects$Locations$Agents$List, options?: MethodOptions): GaxiosPromise<Schema$GoogleCloudDialogflowCxV3beta1ListAgentsResponse>;
        list(params: Params$Resource$Projects$Locations$Agents$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Projects$Locations$Agents$List, options: MethodOptions | BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1ListAgentsResponse>, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1ListAgentsResponse>): void;
        list(params: Params$Resource$Projects$Locations$Agents$List, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1ListAgentsResponse>): void;
        list(callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1ListAgentsResponse>): void;
        /**
         * Updates the specified agent. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await dialogflow.projects.locations.agents.patch({
         *     // The unique identifier of the agent. Required for the Agents.UpdateAgent method. Agents.CreateAgent populates the name automatically. Format: `projects//locations//agents/`.
         *     name: 'projects/my-project/locations/my-location/agents/my-agent',
         *     // The mask to control which fields get updated. If the mask is not present, all fields will be updated.
         *     updateMask: 'placeholder-value',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "advancedSettings": {},
         *       //   "avatarUri": "my_avatarUri",
         *       //   "defaultLanguageCode": "my_defaultLanguageCode",
         *       //   "description": "my_description",
         *       //   "displayName": "my_displayName",
         *       //   "enableSpellCorrection": false,
         *       //   "enableStackdriverLogging": false,
         *       //   "name": "my_name",
         *       //   "securitySettings": "my_securitySettings",
         *       //   "speechToTextSettings": {},
         *       //   "startFlow": "my_startFlow",
         *       //   "supportedLanguageCodes": [],
         *       //   "timeZone": "my_timeZone"
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "advancedSettings": {},
         *   //   "avatarUri": "my_avatarUri",
         *   //   "defaultLanguageCode": "my_defaultLanguageCode",
         *   //   "description": "my_description",
         *   //   "displayName": "my_displayName",
         *   //   "enableSpellCorrection": false,
         *   //   "enableStackdriverLogging": false,
         *   //   "name": "my_name",
         *   //   "securitySettings": "my_securitySettings",
         *   //   "speechToTextSettings": {},
         *   //   "startFlow": "my_startFlow",
         *   //   "supportedLanguageCodes": [],
         *   //   "timeZone": "my_timeZone"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        patch(params: Params$Resource$Projects$Locations$Agents$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Projects$Locations$Agents$Patch, options?: MethodOptions): GaxiosPromise<Schema$GoogleCloudDialogflowCxV3beta1Agent>;
        patch(params: Params$Resource$Projects$Locations$Agents$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Projects$Locations$Agents$Patch, options: MethodOptions | BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Agent>, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Agent>): void;
        patch(params: Params$Resource$Projects$Locations$Agents$Patch, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Agent>): void;
        patch(callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Agent>): void;
        /**
         * Restores the specified agent from a binary file. Replaces the current agent with a new one. Note that all existing resources in agent (e.g. intents, entity types, flows) will be removed. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await dialogflow.projects.locations.agents.restore({
         *     // Required. The name of the agent to restore into. Format: `projects//locations//agents/`.
         *     name: 'projects/my-project/locations/my-location/agents/my-agent',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "agentContent": "my_agentContent",
         *       //   "agentUri": "my_agentUri",
         *       //   "restoreOption": "my_restoreOption"
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "done": false,
         *   //   "error": {},
         *   //   "metadata": {},
         *   //   "name": "my_name",
         *   //   "response": {}
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        restore(params: Params$Resource$Projects$Locations$Agents$Restore, options: StreamMethodOptions): GaxiosPromise<Readable>;
        restore(params?: Params$Resource$Projects$Locations$Agents$Restore, options?: MethodOptions): GaxiosPromise<Schema$GoogleLongrunningOperation>;
        restore(params: Params$Resource$Projects$Locations$Agents$Restore, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        restore(params: Params$Resource$Projects$Locations$Agents$Restore, options: MethodOptions | BodyResponseCallback<Schema$GoogleLongrunningOperation>, callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>): void;
        restore(params: Params$Resource$Projects$Locations$Agents$Restore, callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>): void;
        restore(callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>): void;
        /**
         * Validates the specified agent and creates or updates validation results. The agent in draft version is validated. Please call this API after the training is completed to get the complete validation results.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await dialogflow.projects.locations.agents.validate({
         *     // Required. The agent to validate. Format: `projects//locations//agents/`.
         *     name: 'projects/my-project/locations/my-location/agents/my-agent',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "languageCode": "my_languageCode"
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "flowValidationResults": [],
         *   //   "name": "my_name"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        validate(params: Params$Resource$Projects$Locations$Agents$Validate, options: StreamMethodOptions): GaxiosPromise<Readable>;
        validate(params?: Params$Resource$Projects$Locations$Agents$Validate, options?: MethodOptions): GaxiosPromise<Schema$GoogleCloudDialogflowCxV3beta1AgentValidationResult>;
        validate(params: Params$Resource$Projects$Locations$Agents$Validate, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        validate(params: Params$Resource$Projects$Locations$Agents$Validate, options: MethodOptions | BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1AgentValidationResult>, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1AgentValidationResult>): void;
        validate(params: Params$Resource$Projects$Locations$Agents$Validate, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1AgentValidationResult>): void;
        validate(callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1AgentValidationResult>): void;
    }
    export interface Params$Resource$Projects$Locations$Agents$Create extends StandardParameters {
        /**
         * Required. The location to create a agent for. Format: `projects//locations/`.
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleCloudDialogflowCxV3beta1Agent;
    }
    export interface Params$Resource$Projects$Locations$Agents$Delete extends StandardParameters {
        /**
         * Required. The name of the agent to delete. Format: `projects//locations//agents/`.
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Agents$Export extends StandardParameters {
        /**
         * Required. The name of the agent to export. Format: `projects//locations//agents/`.
         */
        name?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleCloudDialogflowCxV3beta1ExportAgentRequest;
    }
    export interface Params$Resource$Projects$Locations$Agents$Get extends StandardParameters {
        /**
         * Required. The name of the agent. Format: `projects//locations//agents/`.
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Agents$Getvalidationresult extends StandardParameters {
        /**
         * If not specified, the agent's default language is used.
         */
        languageCode?: string;
        /**
         * Required. The agent name. Format: `projects//locations//agents//validationResult`.
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Agents$List extends StandardParameters {
        /**
         * The maximum number of items to return in a single page. By default 100 and at most 1000.
         */
        pageSize?: number;
        /**
         * The next_page_token value returned from a previous list request.
         */
        pageToken?: string;
        /**
         * Required. The location to list all agents for. Format: `projects//locations/`.
         */
        parent?: string;
    }
    export interface Params$Resource$Projects$Locations$Agents$Patch extends StandardParameters {
        /**
         * The unique identifier of the agent. Required for the Agents.UpdateAgent method. Agents.CreateAgent populates the name automatically. Format: `projects//locations//agents/`.
         */
        name?: string;
        /**
         * The mask to control which fields get updated. If the mask is not present, all fields will be updated.
         */
        updateMask?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleCloudDialogflowCxV3beta1Agent;
    }
    export interface Params$Resource$Projects$Locations$Agents$Restore extends StandardParameters {
        /**
         * Required. The name of the agent to restore into. Format: `projects//locations//agents/`.
         */
        name?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleCloudDialogflowCxV3beta1RestoreAgentRequest;
    }
    export interface Params$Resource$Projects$Locations$Agents$Validate extends StandardParameters {
        /**
         * Required. The agent to validate. Format: `projects//locations//agents/`.
         */
        name?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleCloudDialogflowCxV3beta1ValidateAgentRequest;
    }
    export class Resource$Projects$Locations$Agents$Changelogs {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Retrieves the specified Changelog.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await dialogflow.projects.locations.agents.changelogs.get({
         *     // Required. The name of the changelog to get. Format: `projects//locations//agents//changelogs/`.
         *     name: 'projects/my-project/locations/my-location/agents/my-agent/changelogs/my-changelog',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "action": "my_action",
         *   //   "createTime": "my_createTime",
         *   //   "displayName": "my_displayName",
         *   //   "name": "my_name",
         *   //   "resource": "my_resource",
         *   //   "type": "my_type",
         *   //   "userEmail": "my_userEmail"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Projects$Locations$Agents$Changelogs$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Projects$Locations$Agents$Changelogs$Get, options?: MethodOptions): GaxiosPromise<Schema$GoogleCloudDialogflowCxV3beta1Changelog>;
        get(params: Params$Resource$Projects$Locations$Agents$Changelogs$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Projects$Locations$Agents$Changelogs$Get, options: MethodOptions | BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Changelog>, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Changelog>): void;
        get(params: Params$Resource$Projects$Locations$Agents$Changelogs$Get, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Changelog>): void;
        get(callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Changelog>): void;
        /**
         * Returns the list of Changelogs.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await dialogflow.projects.locations.agents.changelogs.list({
         *     // The filter string. Supports filter by user_email, resource, type and create_time. Some examples: 1. By user email: user_email = "someone@google.com" 2. By resource name: resource = "projects/123/locations/global/agents/456/flows/789" 3. By resource display name: display_name = "my agent" 4. By action: action = "Create" 5. By type: type = "flows" 6. By create time. Currently predicates on `create_time` and `create_time_epoch_seconds` are supported: create_time_epoch_seconds \> 1551790877 AND create_time <= 2017-01-15T01:30:15.01Z 7. Combination of above filters: resource = "projects/123/locations/global/agents/456/flows/789" AND user_email = "someone@google.com" AND create_time <= 2017-01-15T01:30:15.01Z
         *     filter: 'placeholder-value',
         *     // The maximum number of items to return in a single page. By default 100 and at most 1000.
         *     pageSize: 'placeholder-value',
         *     // The next_page_token value returned from a previous list request.
         *     pageToken: 'placeholder-value',
         *     // Required. The agent containing the changelogs. Format: `projects//locations//agents/`.
         *     parent: 'projects/my-project/locations/my-location/agents/my-agent',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "changelogs": [],
         *   //   "nextPageToken": "my_nextPageToken"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Projects$Locations$Agents$Changelogs$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Projects$Locations$Agents$Changelogs$List, options?: MethodOptions): GaxiosPromise<Schema$GoogleCloudDialogflowCxV3beta1ListChangelogsResponse>;
        list(params: Params$Resource$Projects$Locations$Agents$Changelogs$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Projects$Locations$Agents$Changelogs$List, options: MethodOptions | BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1ListChangelogsResponse>, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1ListChangelogsResponse>): void;
        list(params: Params$Resource$Projects$Locations$Agents$Changelogs$List, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1ListChangelogsResponse>): void;
        list(callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1ListChangelogsResponse>): void;
    }
    export interface Params$Resource$Projects$Locations$Agents$Changelogs$Get extends StandardParameters {
        /**
         * Required. The name of the changelog to get. Format: `projects//locations//agents//changelogs/`.
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Agents$Changelogs$List extends StandardParameters {
        /**
         * The filter string. Supports filter by user_email, resource, type and create_time. Some examples: 1. By user email: user_email = "someone@google.com" 2. By resource name: resource = "projects/123/locations/global/agents/456/flows/789" 3. By resource display name: display_name = "my agent" 4. By action: action = "Create" 5. By type: type = "flows" 6. By create time. Currently predicates on `create_time` and `create_time_epoch_seconds` are supported: create_time_epoch_seconds \> 1551790877 AND create_time <= 2017-01-15T01:30:15.01Z 7. Combination of above filters: resource = "projects/123/locations/global/agents/456/flows/789" AND user_email = "someone@google.com" AND create_time <= 2017-01-15T01:30:15.01Z
         */
        filter?: string;
        /**
         * The maximum number of items to return in a single page. By default 100 and at most 1000.
         */
        pageSize?: number;
        /**
         * The next_page_token value returned from a previous list request.
         */
        pageToken?: string;
        /**
         * Required. The agent containing the changelogs. Format: `projects//locations//agents/`.
         */
        parent?: string;
    }
    export class Resource$Projects$Locations$Agents$Entitytypes {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Creates an entity type in the specified agent.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await dialogflow.projects.locations.agents.entityTypes.create({
         *     // The language of the following fields in `entity_type`: * `EntityType.entities.value` * `EntityType.entities.synonyms` * `EntityType.excluded_phrases.value` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
         *     languageCode: 'placeholder-value',
         *     // Required. The agent to create a entity type for. Format: `projects//locations//agents/`.
         *     parent: 'projects/my-project/locations/my-location/agents/my-agent',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "autoExpansionMode": "my_autoExpansionMode",
         *       //   "displayName": "my_displayName",
         *       //   "enableFuzzyExtraction": false,
         *       //   "entities": [],
         *       //   "excludedPhrases": [],
         *       //   "kind": "my_kind",
         *       //   "name": "my_name",
         *       //   "redact": false
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "autoExpansionMode": "my_autoExpansionMode",
         *   //   "displayName": "my_displayName",
         *   //   "enableFuzzyExtraction": false,
         *   //   "entities": [],
         *   //   "excludedPhrases": [],
         *   //   "kind": "my_kind",
         *   //   "name": "my_name",
         *   //   "redact": false
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Projects$Locations$Agents$Entitytypes$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Projects$Locations$Agents$Entitytypes$Create, options?: MethodOptions): GaxiosPromise<Schema$GoogleCloudDialogflowCxV3beta1EntityType>;
        create(params: Params$Resource$Projects$Locations$Agents$Entitytypes$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Projects$Locations$Agents$Entitytypes$Create, options: MethodOptions | BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1EntityType>, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1EntityType>): void;
        create(params: Params$Resource$Projects$Locations$Agents$Entitytypes$Create, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1EntityType>): void;
        create(callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1EntityType>): void;
        /**
         * Deletes the specified entity type. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await dialogflow.projects.locations.agents.entityTypes.delete({
         *     // This field has no effect for entity type not being used. For entity types that are used by intents or pages: * If `force` is set to false, an error will be returned with message indicating the referencing resources. * If `force` is set to true, Dialogflow will remove the entity type, as well as any references to the entity type (i.e. Page parameter of the entity type will be changed to '@sys.any' and intent parameter of the entity type will be removed).
         *     force: 'placeholder-value',
         *     // Required. The name of the entity type to delete. Format: `projects//locations//agents//entityTypes/`.
         *     name: 'projects/my-project/locations/my-location/agents/my-agent/entityTypes/my-entityType',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {}
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Projects$Locations$Agents$Entitytypes$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Projects$Locations$Agents$Entitytypes$Delete, options?: MethodOptions): GaxiosPromise<Schema$GoogleProtobufEmpty>;
        delete(params: Params$Resource$Projects$Locations$Agents$Entitytypes$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Projects$Locations$Agents$Entitytypes$Delete, options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>, callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
        delete(params: Params$Resource$Projects$Locations$Agents$Entitytypes$Delete, callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
        delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
        /**
         * Retrieves the specified entity type.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await dialogflow.projects.locations.agents.entityTypes.get({
         *     // The language to retrieve the entity type for. The following fields are language dependent: * `EntityType.entities.value` * `EntityType.entities.synonyms` * `EntityType.excluded_phrases.value` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
         *     languageCode: 'placeholder-value',
         *     // Required. The name of the entity type. Format: `projects//locations//agents//entityTypes/`.
         *     name: 'projects/my-project/locations/my-location/agents/my-agent/entityTypes/my-entityType',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "autoExpansionMode": "my_autoExpansionMode",
         *   //   "displayName": "my_displayName",
         *   //   "enableFuzzyExtraction": false,
         *   //   "entities": [],
         *   //   "excludedPhrases": [],
         *   //   "kind": "my_kind",
         *   //   "name": "my_name",
         *   //   "redact": false
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Projects$Locations$Agents$Entitytypes$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Projects$Locations$Agents$Entitytypes$Get, options?: MethodOptions): GaxiosPromise<Schema$GoogleCloudDialogflowCxV3beta1EntityType>;
        get(params: Params$Resource$Projects$Locations$Agents$Entitytypes$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Projects$Locations$Agents$Entitytypes$Get, options: MethodOptions | BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1EntityType>, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1EntityType>): void;
        get(params: Params$Resource$Projects$Locations$Agents$Entitytypes$Get, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1EntityType>): void;
        get(callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1EntityType>): void;
        /**
         * Returns the list of all entity types in the specified agent.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await dialogflow.projects.locations.agents.entityTypes.list({
         *     // The language to list entity types for. The following fields are language dependent: * `EntityType.entities.value` * `EntityType.entities.synonyms` * `EntityType.excluded_phrases.value` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
         *     languageCode: 'placeholder-value',
         *     // The maximum number of items to return in a single page. By default 100 and at most 1000.
         *     pageSize: 'placeholder-value',
         *     // The next_page_token value returned from a previous list request.
         *     pageToken: 'placeholder-value',
         *     // Required. The agent to list all entity types for. Format: `projects//locations//agents/`.
         *     parent: 'projects/my-project/locations/my-location/agents/my-agent',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "entityTypes": [],
         *   //   "nextPageToken": "my_nextPageToken"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Projects$Locations$Agents$Entitytypes$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Projects$Locations$Agents$Entitytypes$List, options?: MethodOptions): GaxiosPromise<Schema$GoogleCloudDialogflowCxV3beta1ListEntityTypesResponse>;
        list(params: Params$Resource$Projects$Locations$Agents$Entitytypes$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Projects$Locations$Agents$Entitytypes$List, options: MethodOptions | BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1ListEntityTypesResponse>, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1ListEntityTypesResponse>): void;
        list(params: Params$Resource$Projects$Locations$Agents$Entitytypes$List, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1ListEntityTypesResponse>): void;
        list(callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1ListEntityTypesResponse>): void;
        /**
         * Updates the specified entity type. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await dialogflow.projects.locations.agents.entityTypes.patch({
         *     // The language of the following fields in `entity_type`: * `EntityType.entities.value` * `EntityType.entities.synonyms` * `EntityType.excluded_phrases.value` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
         *     languageCode: 'placeholder-value',
         *     // The unique identifier of the entity type. Required for EntityTypes.UpdateEntityType. Format: `projects//locations//agents//entityTypes/`.
         *     name: 'projects/my-project/locations/my-location/agents/my-agent/entityTypes/my-entityType',
         *     // The mask to control which fields get updated.
         *     updateMask: 'placeholder-value',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "autoExpansionMode": "my_autoExpansionMode",
         *       //   "displayName": "my_displayName",
         *       //   "enableFuzzyExtraction": false,
         *       //   "entities": [],
         *       //   "excludedPhrases": [],
         *       //   "kind": "my_kind",
         *       //   "name": "my_name",
         *       //   "redact": false
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "autoExpansionMode": "my_autoExpansionMode",
         *   //   "displayName": "my_displayName",
         *   //   "enableFuzzyExtraction": false,
         *   //   "entities": [],
         *   //   "excludedPhrases": [],
         *   //   "kind": "my_kind",
         *   //   "name": "my_name",
         *   //   "redact": false
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        patch(params: Params$Resource$Projects$Locations$Agents$Entitytypes$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Projects$Locations$Agents$Entitytypes$Patch, options?: MethodOptions): GaxiosPromise<Schema$GoogleCloudDialogflowCxV3beta1EntityType>;
        patch(params: Params$Resource$Projects$Locations$Agents$Entitytypes$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Projects$Locations$Agents$Entitytypes$Patch, options: MethodOptions | BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1EntityType>, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1EntityType>): void;
        patch(params: Params$Resource$Projects$Locations$Agents$Entitytypes$Patch, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1EntityType>): void;
        patch(callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1EntityType>): void;
    }
    export interface Params$Resource$Projects$Locations$Agents$Entitytypes$Create extends StandardParameters {
        /**
         * The language of the following fields in `entity_type`: * `EntityType.entities.value` * `EntityType.entities.synonyms` * `EntityType.excluded_phrases.value` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
         */
        languageCode?: string;
        /**
         * Required. The agent to create a entity type for. Format: `projects//locations//agents/`.
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleCloudDialogflowCxV3beta1EntityType;
    }
    export interface Params$Resource$Projects$Locations$Agents$Entitytypes$Delete extends StandardParameters {
        /**
         * This field has no effect for entity type not being used. For entity types that are used by intents or pages: * If `force` is set to false, an error will be returned with message indicating the referencing resources. * If `force` is set to true, Dialogflow will remove the entity type, as well as any references to the entity type (i.e. Page parameter of the entity type will be changed to '@sys.any' and intent parameter of the entity type will be removed).
         */
        force?: boolean;
        /**
         * Required. The name of the entity type to delete. Format: `projects//locations//agents//entityTypes/`.
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Agents$Entitytypes$Get extends StandardParameters {
        /**
         * The language to retrieve the entity type for. The following fields are language dependent: * `EntityType.entities.value` * `EntityType.entities.synonyms` * `EntityType.excluded_phrases.value` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
         */
        languageCode?: string;
        /**
         * Required. The name of the entity type. Format: `projects//locations//agents//entityTypes/`.
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Agents$Entitytypes$List extends StandardParameters {
        /**
         * The language to list entity types for. The following fields are language dependent: * `EntityType.entities.value` * `EntityType.entities.synonyms` * `EntityType.excluded_phrases.value` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
         */
        languageCode?: string;
        /**
         * The maximum number of items to return in a single page. By default 100 and at most 1000.
         */
        pageSize?: number;
        /**
         * The next_page_token value returned from a previous list request.
         */
        pageToken?: string;
        /**
         * Required. The agent to list all entity types for. Format: `projects//locations//agents/`.
         */
        parent?: string;
    }
    export interface Params$Resource$Projects$Locations$Agents$Entitytypes$Patch extends StandardParameters {
        /**
         * The language of the following fields in `entity_type`: * `EntityType.entities.value` * `EntityType.entities.synonyms` * `EntityType.excluded_phrases.value` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
         */
        languageCode?: string;
        /**
         * The unique identifier of the entity type. Required for EntityTypes.UpdateEntityType. Format: `projects//locations//agents//entityTypes/`.
         */
        name?: string;
        /**
         * The mask to control which fields get updated.
         */
        updateMask?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleCloudDialogflowCxV3beta1EntityType;
    }
    export class Resource$Projects$Locations$Agents$Environments {
        context: APIRequestContext;
        continuousTestResults: Resource$Projects$Locations$Agents$Environments$Continuoustestresults;
        deployments: Resource$Projects$Locations$Agents$Environments$Deployments;
        experiments: Resource$Projects$Locations$Agents$Environments$Experiments;
        sessions: Resource$Projects$Locations$Agents$Environments$Sessions;
        constructor(context: APIRequestContext);
        /**
         * Creates an Environment in the specified Agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: Environment
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await dialogflow.projects.locations.agents.environments.create({
         *     // Required. The Agent to create an Environment for. Format: `projects//locations//agents/`.
         *     parent: 'projects/my-project/locations/my-location/agents/my-agent',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "description": "my_description",
         *       //   "displayName": "my_displayName",
         *       //   "name": "my_name",
         *       //   "testCasesConfig": {},
         *       //   "updateTime": "my_updateTime",
         *       //   "versionConfigs": []
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "done": false,
         *   //   "error": {},
         *   //   "metadata": {},
         *   //   "name": "my_name",
         *   //   "response": {}
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Projects$Locations$Agents$Environments$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Projects$Locations$Agents$Environments$Create, options?: MethodOptions): GaxiosPromise<Schema$GoogleLongrunningOperation>;
        create(params: Params$Resource$Projects$Locations$Agents$Environments$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Projects$Locations$Agents$Environments$Create, options: MethodOptions | BodyResponseCallback<Schema$GoogleLongrunningOperation>, callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>): void;
        create(params: Params$Resource$Projects$Locations$Agents$Environments$Create, callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>): void;
        create(callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>): void;
        /**
         * Deletes the specified Environment.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await dialogflow.projects.locations.agents.environments.delete({
         *     // Required. The name of the Environment to delete. Format: `projects//locations//agents//environments/`.
         *     name: 'projects/my-project/locations/my-location/agents/my-agent/environments/my-environment',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {}
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Projects$Locations$Agents$Environments$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Projects$Locations$Agents$Environments$Delete, options?: MethodOptions): GaxiosPromise<Schema$GoogleProtobufEmpty>;
        delete(params: Params$Resource$Projects$Locations$Agents$Environments$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Projects$Locations$Agents$Environments$Delete, options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>, callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
        delete(params: Params$Resource$Projects$Locations$Agents$Environments$Delete, callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
        delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
        /**
         * Deploys a flow to the specified Environment. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: DeployFlowMetadata - `response`: DeployFlowResponse
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res =
         *     await dialogflow.projects.locations.agents.environments.deployFlow({
         *       // Required. The environment to deploy the flow to. Format: `projects//locations//agents// environments/`.
         *       environment:
         *         'projects/my-project/locations/my-location/agents/my-agent/environments/my-environment',
         *
         *       // Request body metadata
         *       requestBody: {
         *         // request body parameters
         *         // {
         *         //   "flowVersion": "my_flowVersion"
         *         // }
         *       },
         *     });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "done": false,
         *   //   "error": {},
         *   //   "metadata": {},
         *   //   "name": "my_name",
         *   //   "response": {}
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        deployFlow(params: Params$Resource$Projects$Locations$Agents$Environments$Deployflow, options: StreamMethodOptions): GaxiosPromise<Readable>;
        deployFlow(params?: Params$Resource$Projects$Locations$Agents$Environments$Deployflow, options?: MethodOptions): GaxiosPromise<Schema$GoogleLongrunningOperation>;
        deployFlow(params: Params$Resource$Projects$Locations$Agents$Environments$Deployflow, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        deployFlow(params: Params$Resource$Projects$Locations$Agents$Environments$Deployflow, options: MethodOptions | BodyResponseCallback<Schema$GoogleLongrunningOperation>, callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>): void;
        deployFlow(params: Params$Resource$Projects$Locations$Agents$Environments$Deployflow, callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>): void;
        deployFlow(callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>): void;
        /**
         * Retrieves the specified Environment.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await dialogflow.projects.locations.agents.environments.get({
         *     // Required. The name of the Environment. Format: `projects//locations//agents//environments/`.
         *     name: 'projects/my-project/locations/my-location/agents/my-agent/environments/my-environment',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "description": "my_description",
         *   //   "displayName": "my_displayName",
         *   //   "name": "my_name",
         *   //   "testCasesConfig": {},
         *   //   "updateTime": "my_updateTime",
         *   //   "versionConfigs": []
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Projects$Locations$Agents$Environments$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Projects$Locations$Agents$Environments$Get, options?: MethodOptions): GaxiosPromise<Schema$GoogleCloudDialogflowCxV3beta1Environment>;
        get(params: Params$Resource$Projects$Locations$Agents$Environments$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Projects$Locations$Agents$Environments$Get, options: MethodOptions | BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Environment>, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Environment>): void;
        get(params: Params$Resource$Projects$Locations$Agents$Environments$Get, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Environment>): void;
        get(callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Environment>): void;
        /**
         * Returns the list of all environments in the specified Agent.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await dialogflow.projects.locations.agents.environments.list({
         *     // The maximum number of items to return in a single page. By default 20 and at most 100.
         *     pageSize: 'placeholder-value',
         *     // The next_page_token value returned from a previous list request.
         *     pageToken: 'placeholder-value',
         *     // Required. The Agent to list all environments for. Format: `projects//locations//agents/`.
         *     parent: 'projects/my-project/locations/my-location/agents/my-agent',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "environments": [],
         *   //   "nextPageToken": "my_nextPageToken"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Projects$Locations$Agents$Environments$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Projects$Locations$Agents$Environments$List, options?: MethodOptions): GaxiosPromise<Schema$GoogleCloudDialogflowCxV3beta1ListEnvironmentsResponse>;
        list(params: Params$Resource$Projects$Locations$Agents$Environments$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Projects$Locations$Agents$Environments$List, options: MethodOptions | BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1ListEnvironmentsResponse>, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1ListEnvironmentsResponse>): void;
        list(params: Params$Resource$Projects$Locations$Agents$Environments$List, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1ListEnvironmentsResponse>): void;
        list(callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1ListEnvironmentsResponse>): void;
        /**
         * Looks up the history of the specified Environment.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res =
         *     await dialogflow.projects.locations.agents.environments.lookupEnvironmentHistory(
         *       {
         *         // Required. Resource name of the environment to look up the history for. Format: `projects//locations//agents//environments/`.
         *         name: 'projects/my-project/locations/my-location/agents/my-agent/environments/my-environment',
         *         // The maximum number of items to return in a single page. By default 100 and at most 1000.
         *         pageSize: 'placeholder-value',
         *         // The next_page_token value returned from a previous list request.
         *         pageToken: 'placeholder-value',
         *       }
         *     );
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "environments": [],
         *   //   "nextPageToken": "my_nextPageToken"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        lookupEnvironmentHistory(params: Params$Resource$Projects$Locations$Agents$Environments$Lookupenvironmenthistory, options: StreamMethodOptions): GaxiosPromise<Readable>;
        lookupEnvironmentHistory(params?: Params$Resource$Projects$Locations$Agents$Environments$Lookupenvironmenthistory, options?: MethodOptions): GaxiosPromise<Schema$GoogleCloudDialogflowCxV3beta1LookupEnvironmentHistoryResponse>;
        lookupEnvironmentHistory(params: Params$Resource$Projects$Locations$Agents$Environments$Lookupenvironmenthistory, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        lookupEnvironmentHistory(params: Params$Resource$Projects$Locations$Agents$Environments$Lookupenvironmenthistory, options: MethodOptions | BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1LookupEnvironmentHistoryResponse>, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1LookupEnvironmentHistoryResponse>): void;
        lookupEnvironmentHistory(params: Params$Resource$Projects$Locations$Agents$Environments$Lookupenvironmenthistory, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1LookupEnvironmentHistoryResponse>): void;
        lookupEnvironmentHistory(callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1LookupEnvironmentHistoryResponse>): void;
        /**
         * Updates the specified Environment. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: Environment
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await dialogflow.projects.locations.agents.environments.patch({
         *     // The name of the environment. Format: `projects//locations//agents//environments/`.
         *     name: 'projects/my-project/locations/my-location/agents/my-agent/environments/my-environment',
         *     // Required. The mask to control which fields get updated.
         *     updateMask: 'placeholder-value',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "description": "my_description",
         *       //   "displayName": "my_displayName",
         *       //   "name": "my_name",
         *       //   "testCasesConfig": {},
         *       //   "updateTime": "my_updateTime",
         *       //   "versionConfigs": []
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "done": false,
         *   //   "error": {},
         *   //   "metadata": {},
         *   //   "name": "my_name",
         *   //   "response": {}
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        patch(params: Params$Resource$Projects$Locations$Agents$Environments$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Projects$Locations$Agents$Environments$Patch, options?: MethodOptions): GaxiosPromise<Schema$GoogleLongrunningOperation>;
        patch(params: Params$Resource$Projects$Locations$Agents$Environments$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Projects$Locations$Agents$Environments$Patch, options: MethodOptions | BodyResponseCallback<Schema$GoogleLongrunningOperation>, callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>): void;
        patch(params: Params$Resource$Projects$Locations$Agents$Environments$Patch, callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>): void;
        patch(callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>): void;
        /**
         * Kicks off a continuous test under the specified Environment. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: RunContinuousTestMetadata - `response`: RunContinuousTestResponse
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res =
         *     await dialogflow.projects.locations.agents.environments.runContinuousTest({
         *       // Required. Format: `projects//locations//agents//environments/`.
         *       environment:
         *         'projects/my-project/locations/my-location/agents/my-agent/environments/my-environment',
         *
         *       // Request body metadata
         *       requestBody: {
         *         // request body parameters
         *         // {}
         *       },
         *     });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "done": false,
         *   //   "error": {},
         *   //   "metadata": {},
         *   //   "name": "my_name",
         *   //   "response": {}
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        runContinuousTest(params: Params$Resource$Projects$Locations$Agents$Environments$Runcontinuoustest, options: StreamMethodOptions): GaxiosPromise<Readable>;
        runContinuousTest(params?: Params$Resource$Projects$Locations$Agents$Environments$Runcontinuoustest, options?: MethodOptions): GaxiosPromise<Schema$GoogleLongrunningOperation>;
        runContinuousTest(params: Params$Resource$Projects$Locations$Agents$Environments$Runcontinuoustest, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        runContinuousTest(params: Params$Resource$Projects$Locations$Agents$Environments$Runcontinuoustest, options: MethodOptions | BodyResponseCallback<Schema$GoogleLongrunningOperation>, callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>): void;
        runContinuousTest(params: Params$Resource$Projects$Locations$Agents$Environments$Runcontinuoustest, callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>): void;
        runContinuousTest(callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>): void;
    }
    export interface Params$Resource$Projects$Locations$Agents$Environments$Create extends StandardParameters {
        /**
         * Required. The Agent to create an Environment for. Format: `projects//locations//agents/`.
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleCloudDialogflowCxV3beta1Environment;
    }
    export interface Params$Resource$Projects$Locations$Agents$Environments$Delete extends StandardParameters {
        /**
         * Required. The name of the Environment to delete. Format: `projects//locations//agents//environments/`.
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Agents$Environments$Deployflow extends StandardParameters {
        /**
         * Required. The environment to deploy the flow to. Format: `projects//locations//agents// environments/`.
         */
        environment?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleCloudDialogflowCxV3beta1DeployFlowRequest;
    }
    export interface Params$Resource$Projects$Locations$Agents$Environments$Get extends StandardParameters {
        /**
         * Required. The name of the Environment. Format: `projects//locations//agents//environments/`.
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Agents$Environments$List extends StandardParameters {
        /**
         * The maximum number of items to return in a single page. By default 20 and at most 100.
         */
        pageSize?: number;
        /**
         * The next_page_token value returned from a previous list request.
         */
        pageToken?: string;
        /**
         * Required. The Agent to list all environments for. Format: `projects//locations//agents/`.
         */
        parent?: string;
    }
    export interface Params$Resource$Projects$Locations$Agents$Environments$Lookupenvironmenthistory extends StandardParameters {
        /**
         * Required. Resource name of the environment to look up the history for. Format: `projects//locations//agents//environments/`.
         */
        name?: string;
        /**
         * The maximum number of items to return in a single page. By default 100 and at most 1000.
         */
        pageSize?: number;
        /**
         * The next_page_token value returned from a previous list request.
         */
        pageToken?: string;
    }
    export interface Params$Resource$Projects$Locations$Agents$Environments$Patch extends StandardParameters {
        /**
         * The name of the environment. Format: `projects//locations//agents//environments/`.
         */
        name?: string;
        /**
         * Required. The mask to control which fields get updated.
         */
        updateMask?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleCloudDialogflowCxV3beta1Environment;
    }
    export interface Params$Resource$Projects$Locations$Agents$Environments$Runcontinuoustest extends StandardParameters {
        /**
         * Required. Format: `projects//locations//agents//environments/`.
         */
        environment?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleCloudDialogflowCxV3beta1RunContinuousTestRequest;
    }
    export class Resource$Projects$Locations$Agents$Environments$Continuoustestresults {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Fetches a list of continuous test results for a given environment.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res =
         *     await dialogflow.projects.locations.agents.environments.continuousTestResults.list(
         *       {
         *         // The maximum number of items to return in a single page. By default 100 and at most 1000.
         *         pageSize: 'placeholder-value',
         *         // The next_page_token value returned from a previous list request.
         *         pageToken: 'placeholder-value',
         *         // Required. The environment to list results for. Format: `projects//locations//agents// environments/`.
         *         parent:
         *           'projects/my-project/locations/my-location/agents/my-agent/environments/my-environment',
         *       }
         *     );
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "continuousTestResults": [],
         *   //   "nextPageToken": "my_nextPageToken"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Projects$Locations$Agents$Environments$Continuoustestresults$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Projects$Locations$Agents$Environments$Continuoustestresults$List, options?: MethodOptions): GaxiosPromise<Schema$GoogleCloudDialogflowCxV3beta1ListContinuousTestResultsResponse>;
        list(params: Params$Resource$Projects$Locations$Agents$Environments$Continuoustestresults$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Projects$Locations$Agents$Environments$Continuoustestresults$List, options: MethodOptions | BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1ListContinuousTestResultsResponse>, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1ListContinuousTestResultsResponse>): void;
        list(params: Params$Resource$Projects$Locations$Agents$Environments$Continuoustestresults$List, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1ListContinuousTestResultsResponse>): void;
        list(callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1ListContinuousTestResultsResponse>): void;
    }
    export interface Params$Resource$Projects$Locations$Agents$Environments$Continuoustestresults$List extends StandardParameters {
        /**
         * The maximum number of items to return in a single page. By default 100 and at most 1000.
         */
        pageSize?: number;
        /**
         * The next_page_token value returned from a previous list request.
         */
        pageToken?: string;
        /**
         * Required. The environment to list results for. Format: `projects//locations//agents// environments/`.
         */
        parent?: string;
    }
    export class Resource$Projects$Locations$Agents$Environments$Deployments {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Retrieves the specified Deployment.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res =
         *     await dialogflow.projects.locations.agents.environments.deployments.get({
         *       // Required. The name of the Deployment. Format: `projects//locations//agents//environments//deployments/`.
         *       name: 'projects/my-project/locations/my-location/agents/my-agent/environments/my-environment/deployments/my-deployment',
         *     });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "endTime": "my_endTime",
         *   //   "flowVersion": "my_flowVersion",
         *   //   "name": "my_name",
         *   //   "result": {},
         *   //   "startTime": "my_startTime",
         *   //   "state": "my_state"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Projects$Locations$Agents$Environments$Deployments$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Projects$Locations$Agents$Environments$Deployments$Get, options?: MethodOptions): GaxiosPromise<Schema$GoogleCloudDialogflowCxV3beta1Deployment>;
        get(params: Params$Resource$Projects$Locations$Agents$Environments$Deployments$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Projects$Locations$Agents$Environments$Deployments$Get, options: MethodOptions | BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Deployment>, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Deployment>): void;
        get(params: Params$Resource$Projects$Locations$Agents$Environments$Deployments$Get, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Deployment>): void;
        get(callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Deployment>): void;
        /**
         * Returns the list of all deployments in the specified Environment.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res =
         *     await dialogflow.projects.locations.agents.environments.deployments.list({
         *       // The maximum number of items to return in a single page. By default 20 and at most 100.
         *       pageSize: 'placeholder-value',
         *       // The next_page_token value returned from a previous list request.
         *       pageToken: 'placeholder-value',
         *       // Required. The Environment to list all environments for. Format: `projects//locations//agents//environments/`.
         *       parent:
         *         'projects/my-project/locations/my-location/agents/my-agent/environments/my-environment',
         *     });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "deployments": [],
         *   //   "nextPageToken": "my_nextPageToken"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Projects$Locations$Agents$Environments$Deployments$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Projects$Locations$Agents$Environments$Deployments$List, options?: MethodOptions): GaxiosPromise<Schema$GoogleCloudDialogflowCxV3beta1ListDeploymentsResponse>;
        list(params: Params$Resource$Projects$Locations$Agents$Environments$Deployments$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Projects$Locations$Agents$Environments$Deployments$List, options: MethodOptions | BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1ListDeploymentsResponse>, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1ListDeploymentsResponse>): void;
        list(params: Params$Resource$Projects$Locations$Agents$Environments$Deployments$List, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1ListDeploymentsResponse>): void;
        list(callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1ListDeploymentsResponse>): void;
    }
    export interface Params$Resource$Projects$Locations$Agents$Environments$Deployments$Get extends StandardParameters {
        /**
         * Required. The name of the Deployment. Format: `projects//locations//agents//environments//deployments/`.
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Agents$Environments$Deployments$List extends StandardParameters {
        /**
         * The maximum number of items to return in a single page. By default 20 and at most 100.
         */
        pageSize?: number;
        /**
         * The next_page_token value returned from a previous list request.
         */
        pageToken?: string;
        /**
         * Required. The Environment to list all environments for. Format: `projects//locations//agents//environments/`.
         */
        parent?: string;
    }
    export class Resource$Projects$Locations$Agents$Environments$Experiments {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Creates an Experiment in the specified Environment.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res =
         *     await dialogflow.projects.locations.agents.environments.experiments.create({
         *       // Required. The Agent to create an Environment for. Format: `projects//locations//agents//environments/`.
         *       parent:
         *         'projects/my-project/locations/my-location/agents/my-agent/environments/my-environment',
         *
         *       // Request body metadata
         *       requestBody: {
         *         // request body parameters
         *         // {
         *         //   "createTime": "my_createTime",
         *         //   "definition": {},
         *         //   "description": "my_description",
         *         //   "displayName": "my_displayName",
         *         //   "endTime": "my_endTime",
         *         //   "experimentLength": "my_experimentLength",
         *         //   "lastUpdateTime": "my_lastUpdateTime",
         *         //   "name": "my_name",
         *         //   "result": {},
         *         //   "rolloutConfig": {},
         *         //   "rolloutFailureReason": "my_rolloutFailureReason",
         *         //   "rolloutState": {},
         *         //   "startTime": "my_startTime",
         *         //   "state": "my_state",
         *         //   "variantsHistory": []
         *         // }
         *       },
         *     });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "createTime": "my_createTime",
         *   //   "definition": {},
         *   //   "description": "my_description",
         *   //   "displayName": "my_displayName",
         *   //   "endTime": "my_endTime",
         *   //   "experimentLength": "my_experimentLength",
         *   //   "lastUpdateTime": "my_lastUpdateTime",
         *   //   "name": "my_name",
         *   //   "result": {},
         *   //   "rolloutConfig": {},
         *   //   "rolloutFailureReason": "my_rolloutFailureReason",
         *   //   "rolloutState": {},
         *   //   "startTime": "my_startTime",
         *   //   "state": "my_state",
         *   //   "variantsHistory": []
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Projects$Locations$Agents$Environments$Experiments$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Projects$Locations$Agents$Environments$Experiments$Create, options?: MethodOptions): GaxiosPromise<Schema$GoogleCloudDialogflowCxV3beta1Experiment>;
        create(params: Params$Resource$Projects$Locations$Agents$Environments$Experiments$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Projects$Locations$Agents$Environments$Experiments$Create, options: MethodOptions | BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Experiment>, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Experiment>): void;
        create(params: Params$Resource$Projects$Locations$Agents$Environments$Experiments$Create, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Experiment>): void;
        create(callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Experiment>): void;
        /**
         * Deletes the specified Experiment.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res =
         *     await dialogflow.projects.locations.agents.environments.experiments.delete({
         *       // Required. The name of the Environment to delete. Format: `projects//locations//agents//environments//experiments/`.
         *       name: 'projects/my-project/locations/my-location/agents/my-agent/environments/my-environment/experiments/my-experiment',
         *     });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {}
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Projects$Locations$Agents$Environments$Experiments$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Projects$Locations$Agents$Environments$Experiments$Delete, options?: MethodOptions): GaxiosPromise<Schema$GoogleProtobufEmpty>;
        delete(params: Params$Resource$Projects$Locations$Agents$Environments$Experiments$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Projects$Locations$Agents$Environments$Experiments$Delete, options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>, callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
        delete(params: Params$Resource$Projects$Locations$Agents$Environments$Experiments$Delete, callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
        delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
        /**
         * Retrieves the specified Experiment.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res =
         *     await dialogflow.projects.locations.agents.environments.experiments.get({
         *       // Required. The name of the Environment. Format: `projects//locations//agents//environments//experiments/`.
         *       name: 'projects/my-project/locations/my-location/agents/my-agent/environments/my-environment/experiments/my-experiment',
         *     });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "createTime": "my_createTime",
         *   //   "definition": {},
         *   //   "description": "my_description",
         *   //   "displayName": "my_displayName",
         *   //   "endTime": "my_endTime",
         *   //   "experimentLength": "my_experimentLength",
         *   //   "lastUpdateTime": "my_lastUpdateTime",
         *   //   "name": "my_name",
         *   //   "result": {},
         *   //   "rolloutConfig": {},
         *   //   "rolloutFailureReason": "my_rolloutFailureReason",
         *   //   "rolloutState": {},
         *   //   "startTime": "my_startTime",
         *   //   "state": "my_state",
         *   //   "variantsHistory": []
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Projects$Locations$Agents$Environments$Experiments$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Projects$Locations$Agents$Environments$Experiments$Get, options?: MethodOptions): GaxiosPromise<Schema$GoogleCloudDialogflowCxV3beta1Experiment>;
        get(params: Params$Resource$Projects$Locations$Agents$Environments$Experiments$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Projects$Locations$Agents$Environments$Experiments$Get, options: MethodOptions | BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Experiment>, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Experiment>): void;
        get(params: Params$Resource$Projects$Locations$Agents$Environments$Experiments$Get, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Experiment>): void;
        get(callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Experiment>): void;
        /**
         * Returns the list of all experiments in the specified Environment.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res =
         *     await dialogflow.projects.locations.agents.environments.experiments.list({
         *       // The maximum number of items to return in a single page. By default 20 and at most 100.
         *       pageSize: 'placeholder-value',
         *       // The next_page_token value returned from a previous list request.
         *       pageToken: 'placeholder-value',
         *       // Required. The Environment to list all environments for. Format: `projects//locations//agents//environments/`.
         *       parent:
         *         'projects/my-project/locations/my-location/agents/my-agent/environments/my-environment',
         *     });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "experiments": [],
         *   //   "nextPageToken": "my_nextPageToken"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Projects$Locations$Agents$Environments$Experiments$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Projects$Locations$Agents$Environments$Experiments$List, options?: MethodOptions): GaxiosPromise<Schema$GoogleCloudDialogflowCxV3beta1ListExperimentsResponse>;
        list(params: Params$Resource$Projects$Locations$Agents$Environments$Experiments$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Projects$Locations$Agents$Environments$Experiments$List, options: MethodOptions | BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1ListExperimentsResponse>, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1ListExperimentsResponse>): void;
        list(params: Params$Resource$Projects$Locations$Agents$Environments$Experiments$List, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1ListExperimentsResponse>): void;
        list(callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1ListExperimentsResponse>): void;
        /**
         * Updates the specified Experiment.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res =
         *     await dialogflow.projects.locations.agents.environments.experiments.patch({
         *       // The name of the experiment. Format: projects//locations//agents//environments//experiments/..
         *       name: 'projects/my-project/locations/my-location/agents/my-agent/environments/my-environment/experiments/my-experiment',
         *       // Required. The mask to control which fields get updated.
         *       updateMask: 'placeholder-value',
         *
         *       // Request body metadata
         *       requestBody: {
         *         // request body parameters
         *         // {
         *         //   "createTime": "my_createTime",
         *         //   "definition": {},
         *         //   "description": "my_description",
         *         //   "displayName": "my_displayName",
         *         //   "endTime": "my_endTime",
         *         //   "experimentLength": "my_experimentLength",
         *         //   "lastUpdateTime": "my_lastUpdateTime",
         *         //   "name": "my_name",
         *         //   "result": {},
         *         //   "rolloutConfig": {},
         *         //   "rolloutFailureReason": "my_rolloutFailureReason",
         *         //   "rolloutState": {},
         *         //   "startTime": "my_startTime",
         *         //   "state": "my_state",
         *         //   "variantsHistory": []
         *         // }
         *       },
         *     });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "createTime": "my_createTime",
         *   //   "definition": {},
         *   //   "description": "my_description",
         *   //   "displayName": "my_displayName",
         *   //   "endTime": "my_endTime",
         *   //   "experimentLength": "my_experimentLength",
         *   //   "lastUpdateTime": "my_lastUpdateTime",
         *   //   "name": "my_name",
         *   //   "result": {},
         *   //   "rolloutConfig": {},
         *   //   "rolloutFailureReason": "my_rolloutFailureReason",
         *   //   "rolloutState": {},
         *   //   "startTime": "my_startTime",
         *   //   "state": "my_state",
         *   //   "variantsHistory": []
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        patch(params: Params$Resource$Projects$Locations$Agents$Environments$Experiments$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Projects$Locations$Agents$Environments$Experiments$Patch, options?: MethodOptions): GaxiosPromise<Schema$GoogleCloudDialogflowCxV3beta1Experiment>;
        patch(params: Params$Resource$Projects$Locations$Agents$Environments$Experiments$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Projects$Locations$Agents$Environments$Experiments$Patch, options: MethodOptions | BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Experiment>, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Experiment>): void;
        patch(params: Params$Resource$Projects$Locations$Agents$Environments$Experiments$Patch, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Experiment>): void;
        patch(callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Experiment>): void;
        /**
         * Starts the specified Experiment. This rpc only changes the state of experiment from PENDING to RUNNING.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res =
         *     await dialogflow.projects.locations.agents.environments.experiments.start({
         *       // Required. Resource name of the experiment to start. Format: `projects//locations//agents//environments//experiments/`.
         *       name: 'projects/my-project/locations/my-location/agents/my-agent/environments/my-environment/experiments/my-experiment',
         *
         *       // Request body metadata
         *       requestBody: {
         *         // request body parameters
         *         // {}
         *       },
         *     });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "createTime": "my_createTime",
         *   //   "definition": {},
         *   //   "description": "my_description",
         *   //   "displayName": "my_displayName",
         *   //   "endTime": "my_endTime",
         *   //   "experimentLength": "my_experimentLength",
         *   //   "lastUpdateTime": "my_lastUpdateTime",
         *   //   "name": "my_name",
         *   //   "result": {},
         *   //   "rolloutConfig": {},
         *   //   "rolloutFailureReason": "my_rolloutFailureReason",
         *   //   "rolloutState": {},
         *   //   "startTime": "my_startTime",
         *   //   "state": "my_state",
         *   //   "variantsHistory": []
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        start(params: Params$Resource$Projects$Locations$Agents$Environments$Experiments$Start, options: StreamMethodOptions): GaxiosPromise<Readable>;
        start(params?: Params$Resource$Projects$Locations$Agents$Environments$Experiments$Start, options?: MethodOptions): GaxiosPromise<Schema$GoogleCloudDialogflowCxV3beta1Experiment>;
        start(params: Params$Resource$Projects$Locations$Agents$Environments$Experiments$Start, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        start(params: Params$Resource$Projects$Locations$Agents$Environments$Experiments$Start, options: MethodOptions | BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Experiment>, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Experiment>): void;
        start(params: Params$Resource$Projects$Locations$Agents$Environments$Experiments$Start, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Experiment>): void;
        start(callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Experiment>): void;
        /**
         * Stops the specified Experiment. This rpc only changes the state of experiment from RUNNING to DONE.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res =
         *     await dialogflow.projects.locations.agents.environments.experiments.stop({
         *       // Required. Resource name of the experiment to stop. Format: `projects//locations//agents//environments//experiments/`.
         *       name: 'projects/my-project/locations/my-location/agents/my-agent/environments/my-environment/experiments/my-experiment',
         *
         *       // Request body metadata
         *       requestBody: {
         *         // request body parameters
         *         // {}
         *       },
         *     });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "createTime": "my_createTime",
         *   //   "definition": {},
         *   //   "description": "my_description",
         *   //   "displayName": "my_displayName",
         *   //   "endTime": "my_endTime",
         *   //   "experimentLength": "my_experimentLength",
         *   //   "lastUpdateTime": "my_lastUpdateTime",
         *   //   "name": "my_name",
         *   //   "result": {},
         *   //   "rolloutConfig": {},
         *   //   "rolloutFailureReason": "my_rolloutFailureReason",
         *   //   "rolloutState": {},
         *   //   "startTime": "my_startTime",
         *   //   "state": "my_state",
         *   //   "variantsHistory": []
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        stop(params: Params$Resource$Projects$Locations$Agents$Environments$Experiments$Stop, options: StreamMethodOptions): GaxiosPromise<Readable>;
        stop(params?: Params$Resource$Projects$Locations$Agents$Environments$Experiments$Stop, options?: MethodOptions): GaxiosPromise<Schema$GoogleCloudDialogflowCxV3beta1Experiment>;
        stop(params: Params$Resource$Projects$Locations$Agents$Environments$Experiments$Stop, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        stop(params: Params$Resource$Projects$Locations$Agents$Environments$Experiments$Stop, options: MethodOptions | BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Experiment>, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Experiment>): void;
        stop(params: Params$Resource$Projects$Locations$Agents$Environments$Experiments$Stop, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Experiment>): void;
        stop(callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Experiment>): void;
    }
    export interface Params$Resource$Projects$Locations$Agents$Environments$Experiments$Create extends StandardParameters {
        /**
         * Required. The Agent to create an Environment for. Format: `projects//locations//agents//environments/`.
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleCloudDialogflowCxV3beta1Experiment;
    }
    export interface Params$Resource$Projects$Locations$Agents$Environments$Experiments$Delete extends StandardParameters {
        /**
         * Required. The name of the Environment to delete. Format: `projects//locations//agents//environments//experiments/`.
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Agents$Environments$Experiments$Get extends StandardParameters {
        /**
         * Required. The name of the Environment. Format: `projects//locations//agents//environments//experiments/`.
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Agents$Environments$Experiments$List extends StandardParameters {
        /**
         * The maximum number of items to return in a single page. By default 20 and at most 100.
         */
        pageSize?: number;
        /**
         * The next_page_token value returned from a previous list request.
         */
        pageToken?: string;
        /**
         * Required. The Environment to list all environments for. Format: `projects//locations//agents//environments/`.
         */
        parent?: string;
    }
    export interface Params$Resource$Projects$Locations$Agents$Environments$Experiments$Patch extends StandardParameters {
        /**
         * The name of the experiment. Format: projects//locations//agents//environments//experiments/..
         */
        name?: string;
        /**
         * Required. The mask to control which fields get updated.
         */
        updateMask?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleCloudDialogflowCxV3beta1Experiment;
    }
    export interface Params$Resource$Projects$Locations$Agents$Environments$Experiments$Start extends StandardParameters {
        /**
         * Required. Resource name of the experiment to start. Format: `projects//locations//agents//environments//experiments/`.
         */
        name?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleCloudDialogflowCxV3beta1StartExperimentRequest;
    }
    export interface Params$Resource$Projects$Locations$Agents$Environments$Experiments$Stop extends StandardParameters {
        /**
         * Required. Resource name of the experiment to stop. Format: `projects//locations//agents//environments//experiments/`.
         */
        name?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleCloudDialogflowCxV3beta1StopExperimentRequest;
    }
    export class Resource$Projects$Locations$Agents$Environments$Sessions {
        context: APIRequestContext;
        entityTypes: Resource$Projects$Locations$Agents$Environments$Sessions$Entitytypes;
        constructor(context: APIRequestContext);
        /**
         * Processes a natural language query and returns structured, actionable data as a result. This method is not idempotent, because it may cause session entity types to be updated, which in turn might affect results of future queries. Note: Always use agent versions for production traffic. See [Versions and environments](https://cloud.google.com/dialogflow/cx/docs/concept/version).
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res =
         *     await dialogflow.projects.locations.agents.environments.sessions.detectIntent(
         *       {
         *         // Required. The name of the session this query is sent to. Format: `projects//locations//agents//sessions/` or `projects//locations//agents//environments//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. It's up to the API caller to choose an appropriate `Session ID`. It can be a random number or some type of session identifiers (preferably hashed). The length of the `Session ID` must not exceed 36 characters. For more information, see the [sessions guide](https://cloud.google.com/dialogflow/cx/docs/concept/session). Note: Always use agent versions for production traffic. See [Versions and environments](https://cloud.google.com/dialogflow/cx/docs/concept/version).
         *         session:
         *           'projects/my-project/locations/my-location/agents/my-agent/environments/my-environment/sessions/my-session',
         *
         *         // Request body metadata
         *         requestBody: {
         *           // request body parameters
         *           // {
         *           //   "outputAudioConfig": {},
         *           //   "queryInput": {},
         *           //   "queryParams": {}
         *           // }
         *         },
         *       }
         *     );
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "allowCancellation": false,
         *   //   "outputAudio": "my_outputAudio",
         *   //   "outputAudioConfig": {},
         *   //   "queryResult": {},
         *   //   "responseId": "my_responseId",
         *   //   "responseType": "my_responseType"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        detectIntent(params: Params$Resource$Projects$Locations$Agents$Environments$Sessions$Detectintent, options: StreamMethodOptions): GaxiosPromise<Readable>;
        detectIntent(params?: Params$Resource$Projects$Locations$Agents$Environments$Sessions$Detectintent, options?: MethodOptions): GaxiosPromise<Schema$GoogleCloudDialogflowCxV3beta1DetectIntentResponse>;
        detectIntent(params: Params$Resource$Projects$Locations$Agents$Environments$Sessions$Detectintent, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        detectIntent(params: Params$Resource$Projects$Locations$Agents$Environments$Sessions$Detectintent, options: MethodOptions | BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1DetectIntentResponse>, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1DetectIntentResponse>): void;
        detectIntent(params: Params$Resource$Projects$Locations$Agents$Environments$Sessions$Detectintent, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1DetectIntentResponse>): void;
        detectIntent(callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1DetectIntentResponse>): void;
        /**
         * Fulfills a matched intent returned by MatchIntent. Must be called after MatchIntent, with input from MatchIntentResponse. Otherwise, the behavior is undefined.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res =
         *     await dialogflow.projects.locations.agents.environments.sessions.fulfillIntent(
         *       {
         *         // Required. The name of the session this query is sent to. Format: `projects//locations//agents//sessions/` or `projects//locations//agents//environments//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. It's up to the API caller to choose an appropriate `Session ID`. It can be a random number or some type of session identifiers (preferably hashed). The length of the `Session ID` must not exceed 36 characters. For more information, see the [sessions guide](https://cloud.google.com/dialogflow/cx/docs/concept/session).
         *         session:
         *           'projects/my-project/locations/my-location/agents/my-agent/environments/my-environment/sessions/my-session',
         *
         *         // Request body metadata
         *         requestBody: {
         *           // request body parameters
         *           // {
         *           //   "match": {},
         *           //   "matchIntentRequest": {},
         *           //   "outputAudioConfig": {}
         *           // }
         *         },
         *       }
         *     );
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "outputAudio": "my_outputAudio",
         *   //   "outputAudioConfig": {},
         *   //   "queryResult": {},
         *   //   "responseId": "my_responseId"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        fulfillIntent(params: Params$Resource$Projects$Locations$Agents$Environments$Sessions$Fulfillintent, options: StreamMethodOptions): GaxiosPromise<Readable>;
        fulfillIntent(params?: Params$Resource$Projects$Locations$Agents$Environments$Sessions$Fulfillintent, options?: MethodOptions): GaxiosPromise<Schema$GoogleCloudDialogflowCxV3beta1FulfillIntentResponse>;
        fulfillIntent(params: Params$Resource$Projects$Locations$Agents$Environments$Sessions$Fulfillintent, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        fulfillIntent(params: Params$Resource$Projects$Locations$Agents$Environments$Sessions$Fulfillintent, options: MethodOptions | BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1FulfillIntentResponse>, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1FulfillIntentResponse>): void;
        fulfillIntent(params: Params$Resource$Projects$Locations$Agents$Environments$Sessions$Fulfillintent, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1FulfillIntentResponse>): void;
        fulfillIntent(callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1FulfillIntentResponse>): void;
        /**
         * Returns preliminary intent match results, doesn't change the session status.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res =
         *     await dialogflow.projects.locations.agents.environments.sessions.matchIntent(
         *       {
         *         // Required. The name of the session this query is sent to. Format: `projects//locations//agents//sessions/` or `projects//locations//agents//environments//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. It's up to the API caller to choose an appropriate `Session ID`. It can be a random number or some type of session identifiers (preferably hashed). The length of the `Session ID` must not exceed 36 characters. For more information, see the [sessions guide](https://cloud.google.com/dialogflow/cx/docs/concept/session).
         *         session:
         *           'projects/my-project/locations/my-location/agents/my-agent/environments/my-environment/sessions/my-session',
         *
         *         // Request body metadata
         *         requestBody: {
         *           // request body parameters
         *           // {
         *           //   "queryInput": {},
         *           //   "queryParams": {}
         *           // }
         *         },
         *       }
         *     );
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "currentPage": {},
         *   //   "matches": [],
         *   //   "text": "my_text",
         *   //   "transcript": "my_transcript",
         *   //   "triggerEvent": "my_triggerEvent",
         *   //   "triggerIntent": "my_triggerIntent"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        matchIntent(params: Params$Resource$Projects$Locations$Agents$Environments$Sessions$Matchintent, options: StreamMethodOptions): GaxiosPromise<Readable>;
        matchIntent(params?: Params$Resource$Projects$Locations$Agents$Environments$Sessions$Matchintent, options?: MethodOptions): GaxiosPromise<Schema$GoogleCloudDialogflowCxV3beta1MatchIntentResponse>;
        matchIntent(params: Params$Resource$Projects$Locations$Agents$Environments$Sessions$Matchintent, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        matchIntent(params: Params$Resource$Projects$Locations$Agents$Environments$Sessions$Matchintent, options: MethodOptions | BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1MatchIntentResponse>, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1MatchIntentResponse>): void;
        matchIntent(params: Params$Resource$Projects$Locations$Agents$Environments$Sessions$Matchintent, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1MatchIntentResponse>): void;
        matchIntent(callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1MatchIntentResponse>): void;
    }
    export interface Params$Resource$Projects$Locations$Agents$Environments$Sessions$Detectintent extends StandardParameters {
        /**
         * Required. The name of the session this query is sent to. Format: `projects//locations//agents//sessions/` or `projects//locations//agents//environments//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. It's up to the API caller to choose an appropriate `Session ID`. It can be a random number or some type of session identifiers (preferably hashed). The length of the `Session ID` must not exceed 36 characters. For more information, see the [sessions guide](https://cloud.google.com/dialogflow/cx/docs/concept/session). Note: Always use agent versions for production traffic. See [Versions and environments](https://cloud.google.com/dialogflow/cx/docs/concept/version).
         */
        session?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleCloudDialogflowCxV3beta1DetectIntentRequest;
    }
    export interface Params$Resource$Projects$Locations$Agents$Environments$Sessions$Fulfillintent extends StandardParameters {
        /**
         * Required. The name of the session this query is sent to. Format: `projects//locations//agents//sessions/` or `projects//locations//agents//environments//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. It's up to the API caller to choose an appropriate `Session ID`. It can be a random number or some type of session identifiers (preferably hashed). The length of the `Session ID` must not exceed 36 characters. For more information, see the [sessions guide](https://cloud.google.com/dialogflow/cx/docs/concept/session).
         */
        session?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleCloudDialogflowCxV3beta1FulfillIntentRequest;
    }
    export interface Params$Resource$Projects$Locations$Agents$Environments$Sessions$Matchintent extends StandardParameters {
        /**
         * Required. The name of the session this query is sent to. Format: `projects//locations//agents//sessions/` or `projects//locations//agents//environments//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. It's up to the API caller to choose an appropriate `Session ID`. It can be a random number or some type of session identifiers (preferably hashed). The length of the `Session ID` must not exceed 36 characters. For more information, see the [sessions guide](https://cloud.google.com/dialogflow/cx/docs/concept/session).
         */
        session?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleCloudDialogflowCxV3beta1MatchIntentRequest;
    }
    export class Resource$Projects$Locations$Agents$Environments$Sessions$Entitytypes {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Creates a session entity type.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res =
         *     await dialogflow.projects.locations.agents.environments.sessions.entityTypes.create(
         *       {
         *         // Required. The session to create a session entity type for. Format: `projects//locations//agents//sessions/` or `projects//locations//agents//environments//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment.
         *         parent:
         *           'projects/my-project/locations/my-location/agents/my-agent/environments/my-environment/sessions/my-session',
         *
         *         // Request body metadata
         *         requestBody: {
         *           // request body parameters
         *           // {
         *           //   "entities": [],
         *           //   "entityOverrideMode": "my_entityOverrideMode",
         *           //   "name": "my_name"
         *           // }
         *         },
         *       }
         *     );
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "entities": [],
         *   //   "entityOverrideMode": "my_entityOverrideMode",
         *   //   "name": "my_name"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Projects$Locations$Agents$Environments$Sessions$Entitytypes$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Projects$Locations$Agents$Environments$Sessions$Entitytypes$Create, options?: MethodOptions): GaxiosPromise<Schema$GoogleCloudDialogflowCxV3beta1SessionEntityType>;
        create(params: Params$Resource$Projects$Locations$Agents$Environments$Sessions$Entitytypes$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Projects$Locations$Agents$Environments$Sessions$Entitytypes$Create, options: MethodOptions | BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1SessionEntityType>, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1SessionEntityType>): void;
        create(params: Params$Resource$Projects$Locations$Agents$Environments$Sessions$Entitytypes$Create, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1SessionEntityType>): void;
        create(callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1SessionEntityType>): void;
        /**
         * Deletes the specified session entity type.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res =
         *     await dialogflow.projects.locations.agents.environments.sessions.entityTypes.delete(
         *       {
         *         // Required. The name of the session entity type to delete. Format: `projects//locations//agents//sessions//entityTypes/` or `projects//locations//agents//environments//sessions//entityTypes/`. If `Environment ID` is not specified, we assume default 'draft' environment.
         *         name: 'projects/my-project/locations/my-location/agents/my-agent/environments/my-environment/sessions/my-session/entityTypes/my-entityType',
         *       }
         *     );
         *   console.log(res.data);
         *
         *   // Example response
         *   // {}
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Projects$Locations$Agents$Environments$Sessions$Entitytypes$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Projects$Locations$Agents$Environments$Sessions$Entitytypes$Delete, options?: MethodOptions): GaxiosPromise<Schema$GoogleProtobufEmpty>;
        delete(params: Params$Resource$Projects$Locations$Agents$Environments$Sessions$Entitytypes$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Projects$Locations$Agents$Environments$Sessions$Entitytypes$Delete, options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>, callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
        delete(params: Params$Resource$Projects$Locations$Agents$Environments$Sessions$Entitytypes$Delete, callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
        delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
        /**
         * Retrieves the specified session entity type.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res =
         *     await dialogflow.projects.locations.agents.environments.sessions.entityTypes.get(
         *       {
         *         // Required. The name of the session entity type. Format: `projects//locations//agents//sessions//entityTypes/` or `projects//locations//agents//environments//sessions//entityTypes/`. If `Environment ID` is not specified, we assume default 'draft' environment.
         *         name: 'projects/my-project/locations/my-location/agents/my-agent/environments/my-environment/sessions/my-session/entityTypes/my-entityType',
         *       }
         *     );
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "entities": [],
         *   //   "entityOverrideMode": "my_entityOverrideMode",
         *   //   "name": "my_name"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Projects$Locations$Agents$Environments$Sessions$Entitytypes$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Projects$Locations$Agents$Environments$Sessions$Entitytypes$Get, options?: MethodOptions): GaxiosPromise<Schema$GoogleCloudDialogflowCxV3beta1SessionEntityType>;
        get(params: Params$Resource$Projects$Locations$Agents$Environments$Sessions$Entitytypes$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Projects$Locations$Agents$Environments$Sessions$Entitytypes$Get, options: MethodOptions | BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1SessionEntityType>, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1SessionEntityType>): void;
        get(params: Params$Resource$Projects$Locations$Agents$Environments$Sessions$Entitytypes$Get, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1SessionEntityType>): void;
        get(callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1SessionEntityType>): void;
        /**
         * Returns the list of all session entity types in the specified session.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res =
         *     await dialogflow.projects.locations.agents.environments.sessions.entityTypes.list(
         *       {
         *         // The maximum number of items to return in a single page. By default 100 and at most 1000.
         *         pageSize: 'placeholder-value',
         *         // The next_page_token value returned from a previous list request.
         *         pageToken: 'placeholder-value',
         *         // Required. The session to list all session entity types from. Format: `projects//locations//agents//sessions/` or `projects//locations//agents//environments//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment.
         *         parent:
         *           'projects/my-project/locations/my-location/agents/my-agent/environments/my-environment/sessions/my-session',
         *       }
         *     );
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "nextPageToken": "my_nextPageToken",
         *   //   "sessionEntityTypes": []
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Projects$Locations$Agents$Environments$Sessions$Entitytypes$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Projects$Locations$Agents$Environments$Sessions$Entitytypes$List, options?: MethodOptions): GaxiosPromise<Schema$GoogleCloudDialogflowCxV3beta1ListSessionEntityTypesResponse>;
        list(params: Params$Resource$Projects$Locations$Agents$Environments$Sessions$Entitytypes$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Projects$Locations$Agents$Environments$Sessions$Entitytypes$List, options: MethodOptions | BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1ListSessionEntityTypesResponse>, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1ListSessionEntityTypesResponse>): void;
        list(params: Params$Resource$Projects$Locations$Agents$Environments$Sessions$Entitytypes$List, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1ListSessionEntityTypesResponse>): void;
        list(callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1ListSessionEntityTypesResponse>): void;
        /**
         * Updates the specified session entity type.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res =
         *     await dialogflow.projects.locations.agents.environments.sessions.entityTypes.patch(
         *       {
         *         // Required. The unique identifier of the session entity type. Format: `projects//locations//agents//sessions//entityTypes/` or `projects//locations//agents//environments//sessions//entityTypes/`. If `Environment ID` is not specified, we assume default 'draft' environment.
         *         name: 'projects/my-project/locations/my-location/agents/my-agent/environments/my-environment/sessions/my-session/entityTypes/my-entityType',
         *         // The mask to control which fields get updated.
         *         updateMask: 'placeholder-value',
         *
         *         // Request body metadata
         *         requestBody: {
         *           // request body parameters
         *           // {
         *           //   "entities": [],
         *           //   "entityOverrideMode": "my_entityOverrideMode",
         *           //   "name": "my_name"
         *           // }
         *         },
         *       }
         *     );
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "entities": [],
         *   //   "entityOverrideMode": "my_entityOverrideMode",
         *   //   "name": "my_name"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        patch(params: Params$Resource$Projects$Locations$Agents$Environments$Sessions$Entitytypes$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Projects$Locations$Agents$Environments$Sessions$Entitytypes$Patch, options?: MethodOptions): GaxiosPromise<Schema$GoogleCloudDialogflowCxV3beta1SessionEntityType>;
        patch(params: Params$Resource$Projects$Locations$Agents$Environments$Sessions$Entitytypes$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Projects$Locations$Agents$Environments$Sessions$Entitytypes$Patch, options: MethodOptions | BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1SessionEntityType>, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1SessionEntityType>): void;
        patch(params: Params$Resource$Projects$Locations$Agents$Environments$Sessions$Entitytypes$Patch, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1SessionEntityType>): void;
        patch(callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1SessionEntityType>): void;
    }
    export interface Params$Resource$Projects$Locations$Agents$Environments$Sessions$Entitytypes$Create extends StandardParameters {
        /**
         * Required. The session to create a session entity type for. Format: `projects//locations//agents//sessions/` or `projects//locations//agents//environments//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment.
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleCloudDialogflowCxV3beta1SessionEntityType;
    }
    export interface Params$Resource$Projects$Locations$Agents$Environments$Sessions$Entitytypes$Delete extends StandardParameters {
        /**
         * Required. The name of the session entity type to delete. Format: `projects//locations//agents//sessions//entityTypes/` or `projects//locations//agents//environments//sessions//entityTypes/`. If `Environment ID` is not specified, we assume default 'draft' environment.
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Agents$Environments$Sessions$Entitytypes$Get extends StandardParameters {
        /**
         * Required. The name of the session entity type. Format: `projects//locations//agents//sessions//entityTypes/` or `projects//locations//agents//environments//sessions//entityTypes/`. If `Environment ID` is not specified, we assume default 'draft' environment.
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Agents$Environments$Sessions$Entitytypes$List extends StandardParameters {
        /**
         * The maximum number of items to return in a single page. By default 100 and at most 1000.
         */
        pageSize?: number;
        /**
         * The next_page_token value returned from a previous list request.
         */
        pageToken?: string;
        /**
         * Required. The session to list all session entity types from. Format: `projects//locations//agents//sessions/` or `projects//locations//agents//environments//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment.
         */
        parent?: string;
    }
    export interface Params$Resource$Projects$Locations$Agents$Environments$Sessions$Entitytypes$Patch extends StandardParameters {
        /**
         * Required. The unique identifier of the session entity type. Format: `projects//locations//agents//sessions//entityTypes/` or `projects//locations//agents//environments//sessions//entityTypes/`. If `Environment ID` is not specified, we assume default 'draft' environment.
         */
        name?: string;
        /**
         * The mask to control which fields get updated.
         */
        updateMask?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleCloudDialogflowCxV3beta1SessionEntityType;
    }
    export class Resource$Projects$Locations$Agents$Flows {
        context: APIRequestContext;
        pages: Resource$Projects$Locations$Agents$Flows$Pages;
        transitionRouteGroups: Resource$Projects$Locations$Agents$Flows$Transitionroutegroups;
        versions: Resource$Projects$Locations$Agents$Flows$Versions;
        constructor(context: APIRequestContext);
        /**
         * Creates a flow in the specified agent. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await dialogflow.projects.locations.agents.flows.create({
         *     // The language of the following fields in `flow`: * `Flow.event_handlers.trigger_fulfillment.messages` * `Flow.event_handlers.trigger_fulfillment.conditional_cases` * `Flow.transition_routes.trigger_fulfillment.messages` * `Flow.transition_routes.trigger_fulfillment.conditional_cases` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
         *     languageCode: 'placeholder-value',
         *     // Required. The agent to create a flow for. Format: `projects//locations//agents/`.
         *     parent: 'projects/my-project/locations/my-location/agents/my-agent',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "description": "my_description",
         *       //   "displayName": "my_displayName",
         *       //   "eventHandlers": [],
         *       //   "name": "my_name",
         *       //   "nluSettings": {},
         *       //   "transitionRouteGroups": [],
         *       //   "transitionRoutes": []
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "description": "my_description",
         *   //   "displayName": "my_displayName",
         *   //   "eventHandlers": [],
         *   //   "name": "my_name",
         *   //   "nluSettings": {},
         *   //   "transitionRouteGroups": [],
         *   //   "transitionRoutes": []
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Projects$Locations$Agents$Flows$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Projects$Locations$Agents$Flows$Create, options?: MethodOptions): GaxiosPromise<Schema$GoogleCloudDialogflowCxV3beta1Flow>;
        create(params: Params$Resource$Projects$Locations$Agents$Flows$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Projects$Locations$Agents$Flows$Create, options: MethodOptions | BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Flow>, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Flow>): void;
        create(params: Params$Resource$Projects$Locations$Agents$Flows$Create, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Flow>): void;
        create(callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Flow>): void;
        /**
         * Deletes a specified flow.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await dialogflow.projects.locations.agents.flows.delete({
         *     // This field has no effect for flows with no incoming transitions. For flows with incoming transitions: * If `force` is set to false, an error will be returned with message indicating the incoming transitions. * If `force` is set to true, Dialogflow will remove the flow, as well as any transitions to the flow (i.e. Target flow in event handlers or Target flow in transition routes that point to this flow will be cleared).
         *     force: 'placeholder-value',
         *     // Required. The name of the flow to delete. Format: `projects//locations//agents//flows/`.
         *     name: 'projects/my-project/locations/my-location/agents/my-agent/flows/my-flow',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {}
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Projects$Locations$Agents$Flows$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Projects$Locations$Agents$Flows$Delete, options?: MethodOptions): GaxiosPromise<Schema$GoogleProtobufEmpty>;
        delete(params: Params$Resource$Projects$Locations$Agents$Flows$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Projects$Locations$Agents$Flows$Delete, options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>, callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
        delete(params: Params$Resource$Projects$Locations$Agents$Flows$Delete, callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
        delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
        /**
         * Exports the specified flow to a binary file. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: ExportFlowResponse Note that resources (e.g. intents, entities, webhooks) that the flow references will also be exported.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await dialogflow.projects.locations.agents.flows.export({
         *     // Required. The name of the flow to export. Format: `projects//locations//agents//flows/`.
         *     name: 'projects/my-project/locations/my-location/agents/my-agent/flows/my-flow',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "flowUri": "my_flowUri",
         *       //   "includeReferencedFlows": false
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "done": false,
         *   //   "error": {},
         *   //   "metadata": {},
         *   //   "name": "my_name",
         *   //   "response": {}
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        export(params: Params$Resource$Projects$Locations$Agents$Flows$Export, options: StreamMethodOptions): GaxiosPromise<Readable>;
        export(params?: Params$Resource$Projects$Locations$Agents$Flows$Export, options?: MethodOptions): GaxiosPromise<Schema$GoogleLongrunningOperation>;
        export(params: Params$Resource$Projects$Locations$Agents$Flows$Export, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        export(params: Params$Resource$Projects$Locations$Agents$Flows$Export, options: MethodOptions | BodyResponseCallback<Schema$GoogleLongrunningOperation>, callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>): void;
        export(params: Params$Resource$Projects$Locations$Agents$Flows$Export, callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>): void;
        export(callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>): void;
        /**
         * Retrieves the specified flow.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await dialogflow.projects.locations.agents.flows.get({
         *     // The language to retrieve the flow for. The following fields are language dependent: * `Flow.event_handlers.trigger_fulfillment.messages` * `Flow.event_handlers.trigger_fulfillment.conditional_cases` * `Flow.transition_routes.trigger_fulfillment.messages` * `Flow.transition_routes.trigger_fulfillment.conditional_cases` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
         *     languageCode: 'placeholder-value',
         *     // Required. The name of the flow to get. Format: `projects//locations//agents//flows/`.
         *     name: 'projects/my-project/locations/my-location/agents/my-agent/flows/my-flow',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "description": "my_description",
         *   //   "displayName": "my_displayName",
         *   //   "eventHandlers": [],
         *   //   "name": "my_name",
         *   //   "nluSettings": {},
         *   //   "transitionRouteGroups": [],
         *   //   "transitionRoutes": []
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Projects$Locations$Agents$Flows$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Projects$Locations$Agents$Flows$Get, options?: MethodOptions): GaxiosPromise<Schema$GoogleCloudDialogflowCxV3beta1Flow>;
        get(params: Params$Resource$Projects$Locations$Agents$Flows$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Projects$Locations$Agents$Flows$Get, options: MethodOptions | BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Flow>, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Flow>): void;
        get(params: Params$Resource$Projects$Locations$Agents$Flows$Get, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Flow>): void;
        get(callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Flow>): void;
        /**
         * Gets the latest flow validation result. Flow validation is performed when ValidateFlow is called.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res =
         *     await dialogflow.projects.locations.agents.flows.getValidationResult({
         *       // If not specified, the agent's default language is used.
         *       languageCode: 'placeholder-value',
         *       // Required. The flow name. Format: `projects//locations//agents//flows//validationResult`.
         *       name: 'projects/my-project/locations/my-location/agents/my-agent/flows/my-flow/validationResult',
         *     });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "name": "my_name",
         *   //   "updateTime": "my_updateTime",
         *   //   "validationMessages": []
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        getValidationResult(params: Params$Resource$Projects$Locations$Agents$Flows$Getvalidationresult, options: StreamMethodOptions): GaxiosPromise<Readable>;
        getValidationResult(params?: Params$Resource$Projects$Locations$Agents$Flows$Getvalidationresult, options?: MethodOptions): GaxiosPromise<Schema$GoogleCloudDialogflowCxV3beta1FlowValidationResult>;
        getValidationResult(params: Params$Resource$Projects$Locations$Agents$Flows$Getvalidationresult, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        getValidationResult(params: Params$Resource$Projects$Locations$Agents$Flows$Getvalidationresult, options: MethodOptions | BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1FlowValidationResult>, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1FlowValidationResult>): void;
        getValidationResult(params: Params$Resource$Projects$Locations$Agents$Flows$Getvalidationresult, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1FlowValidationResult>): void;
        getValidationResult(callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1FlowValidationResult>): void;
        /**
         * Imports the specified flow to the specified agent from a binary file. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: ImportFlowResponse Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await dialogflow.projects.locations.agents.flows.import({
         *     // Required. The agent to import the flow into. Format: `projects//locations//agents/`.
         *     parent: 'projects/my-project/locations/my-location/agents/my-agent',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "flowContent": "my_flowContent",
         *       //   "flowUri": "my_flowUri",
         *       //   "importOption": "my_importOption"
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "done": false,
         *   //   "error": {},
         *   //   "metadata": {},
         *   //   "name": "my_name",
         *   //   "response": {}
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        import(params: Params$Resource$Projects$Locations$Agents$Flows$Import, options: StreamMethodOptions): GaxiosPromise<Readable>;
        import(params?: Params$Resource$Projects$Locations$Agents$Flows$Import, options?: MethodOptions): GaxiosPromise<Schema$GoogleLongrunningOperation>;
        import(params: Params$Resource$Projects$Locations$Agents$Flows$Import, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        import(params: Params$Resource$Projects$Locations$Agents$Flows$Import, options: MethodOptions | BodyResponseCallback<Schema$GoogleLongrunningOperation>, callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>): void;
        import(params: Params$Resource$Projects$Locations$Agents$Flows$Import, callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>): void;
        import(callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>): void;
        /**
         * Returns the list of all flows in the specified agent.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await dialogflow.projects.locations.agents.flows.list({
         *     // The language to list flows for. The following fields are language dependent: * `Flow.event_handlers.trigger_fulfillment.messages` * `Flow.event_handlers.trigger_fulfillment.conditional_cases` * `Flow.transition_routes.trigger_fulfillment.messages` * `Flow.transition_routes.trigger_fulfillment.conditional_cases` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
         *     languageCode: 'placeholder-value',
         *     // The maximum number of items to return in a single page. By default 100 and at most 1000.
         *     pageSize: 'placeholder-value',
         *     // The next_page_token value returned from a previous list request.
         *     pageToken: 'placeholder-value',
         *     // Required. The agent containing the flows. Format: `projects//locations//agents/`.
         *     parent: 'projects/my-project/locations/my-location/agents/my-agent',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "flows": [],
         *   //   "nextPageToken": "my_nextPageToken"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Projects$Locations$Agents$Flows$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Projects$Locations$Agents$Flows$List, options?: MethodOptions): GaxiosPromise<Schema$GoogleCloudDialogflowCxV3beta1ListFlowsResponse>;
        list(params: Params$Resource$Projects$Locations$Agents$Flows$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Projects$Locations$Agents$Flows$List, options: MethodOptions | BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1ListFlowsResponse>, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1ListFlowsResponse>): void;
        list(params: Params$Resource$Projects$Locations$Agents$Flows$List, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1ListFlowsResponse>): void;
        list(callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1ListFlowsResponse>): void;
        /**
         * Updates the specified flow. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await dialogflow.projects.locations.agents.flows.patch({
         *     // The language of the following fields in `flow`: * `Flow.event_handlers.trigger_fulfillment.messages` * `Flow.event_handlers.trigger_fulfillment.conditional_cases` * `Flow.transition_routes.trigger_fulfillment.messages` * `Flow.transition_routes.trigger_fulfillment.conditional_cases` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
         *     languageCode: 'placeholder-value',
         *     // The unique identifier of the flow. Format: `projects//locations//agents//flows/`.
         *     name: 'projects/my-project/locations/my-location/agents/my-agent/flows/my-flow',
         *     // The mask to control which fields get updated. If the mask is not present, all fields will be updated.
         *     updateMask: 'placeholder-value',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "description": "my_description",
         *       //   "displayName": "my_displayName",
         *       //   "eventHandlers": [],
         *       //   "name": "my_name",
         *       //   "nluSettings": {},
         *       //   "transitionRouteGroups": [],
         *       //   "transitionRoutes": []
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "description": "my_description",
         *   //   "displayName": "my_displayName",
         *   //   "eventHandlers": [],
         *   //   "name": "my_name",
         *   //   "nluSettings": {},
         *   //   "transitionRouteGroups": [],
         *   //   "transitionRoutes": []
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        patch(params: Params$Resource$Projects$Locations$Agents$Flows$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Projects$Locations$Agents$Flows$Patch, options?: MethodOptions): GaxiosPromise<Schema$GoogleCloudDialogflowCxV3beta1Flow>;
        patch(params: Params$Resource$Projects$Locations$Agents$Flows$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Projects$Locations$Agents$Flows$Patch, options: MethodOptions | BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Flow>, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Flow>): void;
        patch(params: Params$Resource$Projects$Locations$Agents$Flows$Patch, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Flow>): void;
        patch(callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Flow>): void;
        /**
         * Trains the specified flow. Note that only the flow in 'draft' environment is trained. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await dialogflow.projects.locations.agents.flows.train({
         *     // Required. The flow to train. Format: `projects//locations//agents//flows/`.
         *     name: 'projects/my-project/locations/my-location/agents/my-agent/flows/my-flow',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {}
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "done": false,
         *   //   "error": {},
         *   //   "metadata": {},
         *   //   "name": "my_name",
         *   //   "response": {}
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        train(params: Params$Resource$Projects$Locations$Agents$Flows$Train, options: StreamMethodOptions): GaxiosPromise<Readable>;
        train(params?: Params$Resource$Projects$Locations$Agents$Flows$Train, options?: MethodOptions): GaxiosPromise<Schema$GoogleLongrunningOperation>;
        train(params: Params$Resource$Projects$Locations$Agents$Flows$Train, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        train(params: Params$Resource$Projects$Locations$Agents$Flows$Train, options: MethodOptions | BodyResponseCallback<Schema$GoogleLongrunningOperation>, callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>): void;
        train(params: Params$Resource$Projects$Locations$Agents$Flows$Train, callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>): void;
        train(callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>): void;
        /**
         * Validates the specified flow and creates or updates validation results. Please call this API after the training is completed to get the complete validation results.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await dialogflow.projects.locations.agents.flows.validate({
         *     // Required. The flow to validate. Format: `projects//locations//agents//flows/`.
         *     name: 'projects/my-project/locations/my-location/agents/my-agent/flows/my-flow',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "languageCode": "my_languageCode"
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "name": "my_name",
         *   //   "updateTime": "my_updateTime",
         *   //   "validationMessages": []
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        validate(params: Params$Resource$Projects$Locations$Agents$Flows$Validate, options: StreamMethodOptions): GaxiosPromise<Readable>;
        validate(params?: Params$Resource$Projects$Locations$Agents$Flows$Validate, options?: MethodOptions): GaxiosPromise<Schema$GoogleCloudDialogflowCxV3beta1FlowValidationResult>;
        validate(params: Params$Resource$Projects$Locations$Agents$Flows$Validate, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        validate(params: Params$Resource$Projects$Locations$Agents$Flows$Validate, options: MethodOptions | BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1FlowValidationResult>, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1FlowValidationResult>): void;
        validate(params: Params$Resource$Projects$Locations$Agents$Flows$Validate, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1FlowValidationResult>): void;
        validate(callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1FlowValidationResult>): void;
    }
    export interface Params$Resource$Projects$Locations$Agents$Flows$Create extends StandardParameters {
        /**
         * The language of the following fields in `flow`: * `Flow.event_handlers.trigger_fulfillment.messages` * `Flow.event_handlers.trigger_fulfillment.conditional_cases` * `Flow.transition_routes.trigger_fulfillment.messages` * `Flow.transition_routes.trigger_fulfillment.conditional_cases` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
         */
        languageCode?: string;
        /**
         * Required. The agent to create a flow for. Format: `projects//locations//agents/`.
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleCloudDialogflowCxV3beta1Flow;
    }
    export interface Params$Resource$Projects$Locations$Agents$Flows$Delete extends StandardParameters {
        /**
         * This field has no effect for flows with no incoming transitions. For flows with incoming transitions: * If `force` is set to false, an error will be returned with message indicating the incoming transitions. * If `force` is set to true, Dialogflow will remove the flow, as well as any transitions to the flow (i.e. Target flow in event handlers or Target flow in transition routes that point to this flow will be cleared).
         */
        force?: boolean;
        /**
         * Required. The name of the flow to delete. Format: `projects//locations//agents//flows/`.
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Agents$Flows$Export extends StandardParameters {
        /**
         * Required. The name of the flow to export. Format: `projects//locations//agents//flows/`.
         */
        name?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleCloudDialogflowCxV3beta1ExportFlowRequest;
    }
    export interface Params$Resource$Projects$Locations$Agents$Flows$Get extends StandardParameters {
        /**
         * The language to retrieve the flow for. The following fields are language dependent: * `Flow.event_handlers.trigger_fulfillment.messages` * `Flow.event_handlers.trigger_fulfillment.conditional_cases` * `Flow.transition_routes.trigger_fulfillment.messages` * `Flow.transition_routes.trigger_fulfillment.conditional_cases` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
         */
        languageCode?: string;
        /**
         * Required. The name of the flow to get. Format: `projects//locations//agents//flows/`.
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Agents$Flows$Getvalidationresult extends StandardParameters {
        /**
         * If not specified, the agent's default language is used.
         */
        languageCode?: string;
        /**
         * Required. The flow name. Format: `projects//locations//agents//flows//validationResult`.
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Agents$Flows$Import extends StandardParameters {
        /**
         * Required. The agent to import the flow into. Format: `projects//locations//agents/`.
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleCloudDialogflowCxV3beta1ImportFlowRequest;
    }
    export interface Params$Resource$Projects$Locations$Agents$Flows$List extends StandardParameters {
        /**
         * The language to list flows for. The following fields are language dependent: * `Flow.event_handlers.trigger_fulfillment.messages` * `Flow.event_handlers.trigger_fulfillment.conditional_cases` * `Flow.transition_routes.trigger_fulfillment.messages` * `Flow.transition_routes.trigger_fulfillment.conditional_cases` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
         */
        languageCode?: string;
        /**
         * The maximum number of items to return in a single page. By default 100 and at most 1000.
         */
        pageSize?: number;
        /**
         * The next_page_token value returned from a previous list request.
         */
        pageToken?: string;
        /**
         * Required. The agent containing the flows. Format: `projects//locations//agents/`.
         */
        parent?: string;
    }
    export interface Params$Resource$Projects$Locations$Agents$Flows$Patch extends StandardParameters {
        /**
         * The language of the following fields in `flow`: * `Flow.event_handlers.trigger_fulfillment.messages` * `Flow.event_handlers.trigger_fulfillment.conditional_cases` * `Flow.transition_routes.trigger_fulfillment.messages` * `Flow.transition_routes.trigger_fulfillment.conditional_cases` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
         */
        languageCode?: string;
        /**
         * The unique identifier of the flow. Format: `projects//locations//agents//flows/`.
         */
        name?: string;
        /**
         * The mask to control which fields get updated. If the mask is not present, all fields will be updated.
         */
        updateMask?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleCloudDialogflowCxV3beta1Flow;
    }
    export interface Params$Resource$Projects$Locations$Agents$Flows$Train extends StandardParameters {
        /**
         * Required. The flow to train. Format: `projects//locations//agents//flows/`.
         */
        name?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleCloudDialogflowCxV3beta1TrainFlowRequest;
    }
    export interface Params$Resource$Projects$Locations$Agents$Flows$Validate extends StandardParameters {
        /**
         * Required. The flow to validate. Format: `projects//locations//agents//flows/`.
         */
        name?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleCloudDialogflowCxV3beta1ValidateFlowRequest;
    }
    export class Resource$Projects$Locations$Agents$Flows$Pages {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Creates a page in the specified flow.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await dialogflow.projects.locations.agents.flows.pages.create({
         *     // The language of the following fields in `page`: * `Page.entry_fulfillment.messages` * `Page.entry_fulfillment.conditional_cases` * `Page.event_handlers.trigger_fulfillment.messages` * `Page.event_handlers.trigger_fulfillment.conditional_cases` * `Page.form.parameters.fill_behavior.initial_prompt_fulfillment.messages` * `Page.form.parameters.fill_behavior.initial_prompt_fulfillment.conditional_cases` * `Page.form.parameters.fill_behavior.reprompt_event_handlers.messages` * `Page.form.parameters.fill_behavior.reprompt_event_handlers.conditional_cases` * `Page.transition_routes.trigger_fulfillment.messages` * `Page.transition_routes.trigger_fulfillment.conditional_cases` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
         *     languageCode: 'placeholder-value',
         *     // Required. The flow to create a page for. Format: `projects//locations//agents//flows/`.
         *     parent:
         *       'projects/my-project/locations/my-location/agents/my-agent/flows/my-flow',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "displayName": "my_displayName",
         *       //   "entryFulfillment": {},
         *       //   "eventHandlers": [],
         *       //   "form": {},
         *       //   "name": "my_name",
         *       //   "transitionRouteGroups": [],
         *       //   "transitionRoutes": []
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "displayName": "my_displayName",
         *   //   "entryFulfillment": {},
         *   //   "eventHandlers": [],
         *   //   "form": {},
         *   //   "name": "my_name",
         *   //   "transitionRouteGroups": [],
         *   //   "transitionRoutes": []
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Projects$Locations$Agents$Flows$Pages$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Projects$Locations$Agents$Flows$Pages$Create, options?: MethodOptions): GaxiosPromise<Schema$GoogleCloudDialogflowCxV3beta1Page>;
        create(params: Params$Resource$Projects$Locations$Agents$Flows$Pages$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Projects$Locations$Agents$Flows$Pages$Create, options: MethodOptions | BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Page>, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Page>): void;
        create(params: Params$Resource$Projects$Locations$Agents$Flows$Pages$Create, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Page>): void;
        create(callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Page>): void;
        /**
         * Deletes the specified page.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await dialogflow.projects.locations.agents.flows.pages.delete({
         *     // This field has no effect for pages with no incoming transitions. For pages with incoming transitions: * If `force` is set to false, an error will be returned with message indicating the incoming transitions. * If `force` is set to true, Dialogflow will remove the page, as well as any transitions to the page (i.e. Target page in event handlers or Target page in transition routes that point to this page will be cleared).
         *     force: 'placeholder-value',
         *     // Required. The name of the page to delete. Format: `projects//locations//agents//Flows//pages/`.
         *     name: 'projects/my-project/locations/my-location/agents/my-agent/flows/my-flow/pages/my-page',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {}
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Projects$Locations$Agents$Flows$Pages$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Projects$Locations$Agents$Flows$Pages$Delete, options?: MethodOptions): GaxiosPromise<Schema$GoogleProtobufEmpty>;
        delete(params: Params$Resource$Projects$Locations$Agents$Flows$Pages$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Projects$Locations$Agents$Flows$Pages$Delete, options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>, callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
        delete(params: Params$Resource$Projects$Locations$Agents$Flows$Pages$Delete, callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
        delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
        /**
         * Retrieves the specified page.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await dialogflow.projects.locations.agents.flows.pages.get({
         *     // The language to retrieve the page for. The following fields are language dependent: * `Page.entry_fulfillment.messages` * `Page.entry_fulfillment.conditional_cases` * `Page.event_handlers.trigger_fulfillment.messages` * `Page.event_handlers.trigger_fulfillment.conditional_cases` * `Page.form.parameters.fill_behavior.initial_prompt_fulfillment.messages` * `Page.form.parameters.fill_behavior.initial_prompt_fulfillment.conditional_cases` * `Page.form.parameters.fill_behavior.reprompt_event_handlers.messages` * `Page.form.parameters.fill_behavior.reprompt_event_handlers.conditional_cases` * `Page.transition_routes.trigger_fulfillment.messages` * `Page.transition_routes.trigger_fulfillment.conditional_cases` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
         *     languageCode: 'placeholder-value',
         *     // Required. The name of the page. Format: `projects//locations//agents//flows//pages/`.
         *     name: 'projects/my-project/locations/my-location/agents/my-agent/flows/my-flow/pages/my-page',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "displayName": "my_displayName",
         *   //   "entryFulfillment": {},
         *   //   "eventHandlers": [],
         *   //   "form": {},
         *   //   "name": "my_name",
         *   //   "transitionRouteGroups": [],
         *   //   "transitionRoutes": []
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Projects$Locations$Agents$Flows$Pages$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Projects$Locations$Agents$Flows$Pages$Get, options?: MethodOptions): GaxiosPromise<Schema$GoogleCloudDialogflowCxV3beta1Page>;
        get(params: Params$Resource$Projects$Locations$Agents$Flows$Pages$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Projects$Locations$Agents$Flows$Pages$Get, options: MethodOptions | BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Page>, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Page>): void;
        get(params: Params$Resource$Projects$Locations$Agents$Flows$Pages$Get, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Page>): void;
        get(callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Page>): void;
        /**
         * Returns the list of all pages in the specified flow.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await dialogflow.projects.locations.agents.flows.pages.list({
         *     // The language to list pages for. The following fields are language dependent: * `Page.entry_fulfillment.messages` * `Page.entry_fulfillment.conditional_cases` * `Page.event_handlers.trigger_fulfillment.messages` * `Page.event_handlers.trigger_fulfillment.conditional_cases` * `Page.form.parameters.fill_behavior.initial_prompt_fulfillment.messages` * `Page.form.parameters.fill_behavior.initial_prompt_fulfillment.conditional_cases` * `Page.form.parameters.fill_behavior.reprompt_event_handlers.messages` * `Page.form.parameters.fill_behavior.reprompt_event_handlers.conditional_cases` * `Page.transition_routes.trigger_fulfillment.messages` * `Page.transition_routes.trigger_fulfillment.conditional_cases` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
         *     languageCode: 'placeholder-value',
         *     // The maximum number of items to return in a single page. By default 100 and at most 1000.
         *     pageSize: 'placeholder-value',
         *     // The next_page_token value returned from a previous list request.
         *     pageToken: 'placeholder-value',
         *     // Required. The flow to list all pages for. Format: `projects//locations//agents//flows/`.
         *     parent:
         *       'projects/my-project/locations/my-location/agents/my-agent/flows/my-flow',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "nextPageToken": "my_nextPageToken",
         *   //   "pages": []
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Projects$Locations$Agents$Flows$Pages$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Projects$Locations$Agents$Flows$Pages$List, options?: MethodOptions): GaxiosPromise<Schema$GoogleCloudDialogflowCxV3beta1ListPagesResponse>;
        list(params: Params$Resource$Projects$Locations$Agents$Flows$Pages$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Projects$Locations$Agents$Flows$Pages$List, options: MethodOptions | BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1ListPagesResponse>, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1ListPagesResponse>): void;
        list(params: Params$Resource$Projects$Locations$Agents$Flows$Pages$List, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1ListPagesResponse>): void;
        list(callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1ListPagesResponse>): void;
        /**
         * Updates the specified page.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await dialogflow.projects.locations.agents.flows.pages.patch({
         *     // The language of the following fields in `page`: * `Page.entry_fulfillment.messages` * `Page.entry_fulfillment.conditional_cases` * `Page.event_handlers.trigger_fulfillment.messages` * `Page.event_handlers.trigger_fulfillment.conditional_cases` * `Page.form.parameters.fill_behavior.initial_prompt_fulfillment.messages` * `Page.form.parameters.fill_behavior.initial_prompt_fulfillment.conditional_cases` * `Page.form.parameters.fill_behavior.reprompt_event_handlers.messages` * `Page.form.parameters.fill_behavior.reprompt_event_handlers.conditional_cases` * `Page.transition_routes.trigger_fulfillment.messages` * `Page.transition_routes.trigger_fulfillment.conditional_cases` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
         *     languageCode: 'placeholder-value',
         *     // The unique identifier of the page. Required for the Pages.UpdatePage method. Pages.CreatePage populates the name automatically. Format: `projects//locations//agents//flows//pages/`.
         *     name: 'projects/my-project/locations/my-location/agents/my-agent/flows/my-flow/pages/my-page',
         *     // The mask to control which fields get updated. If the mask is not present, all fields will be updated.
         *     updateMask: 'placeholder-value',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "displayName": "my_displayName",
         *       //   "entryFulfillment": {},
         *       //   "eventHandlers": [],
         *       //   "form": {},
         *       //   "name": "my_name",
         *       //   "transitionRouteGroups": [],
         *       //   "transitionRoutes": []
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "displayName": "my_displayName",
         *   //   "entryFulfillment": {},
         *   //   "eventHandlers": [],
         *   //   "form": {},
         *   //   "name": "my_name",
         *   //   "transitionRouteGroups": [],
         *   //   "transitionRoutes": []
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        patch(params: Params$Resource$Projects$Locations$Agents$Flows$Pages$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Projects$Locations$Agents$Flows$Pages$Patch, options?: MethodOptions): GaxiosPromise<Schema$GoogleCloudDialogflowCxV3beta1Page>;
        patch(params: Params$Resource$Projects$Locations$Agents$Flows$Pages$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Projects$Locations$Agents$Flows$Pages$Patch, options: MethodOptions | BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Page>, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Page>): void;
        patch(params: Params$Resource$Projects$Locations$Agents$Flows$Pages$Patch, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Page>): void;
        patch(callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Page>): void;
    }
    export interface Params$Resource$Projects$Locations$Agents$Flows$Pages$Create extends StandardParameters {
        /**
         * The language of the following fields in `page`: * `Page.entry_fulfillment.messages` * `Page.entry_fulfillment.conditional_cases` * `Page.event_handlers.trigger_fulfillment.messages` * `Page.event_handlers.trigger_fulfillment.conditional_cases` * `Page.form.parameters.fill_behavior.initial_prompt_fulfillment.messages` * `Page.form.parameters.fill_behavior.initial_prompt_fulfillment.conditional_cases` * `Page.form.parameters.fill_behavior.reprompt_event_handlers.messages` * `Page.form.parameters.fill_behavior.reprompt_event_handlers.conditional_cases` * `Page.transition_routes.trigger_fulfillment.messages` * `Page.transition_routes.trigger_fulfillment.conditional_cases` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
         */
        languageCode?: string;
        /**
         * Required. The flow to create a page for. Format: `projects//locations//agents//flows/`.
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleCloudDialogflowCxV3beta1Page;
    }
    export interface Params$Resource$Projects$Locations$Agents$Flows$Pages$Delete extends StandardParameters {
        /**
         * This field has no effect for pages with no incoming transitions. For pages with incoming transitions: * If `force` is set to false, an error will be returned with message indicating the incoming transitions. * If `force` is set to true, Dialogflow will remove the page, as well as any transitions to the page (i.e. Target page in event handlers or Target page in transition routes that point to this page will be cleared).
         */
        force?: boolean;
        /**
         * Required. The name of the page to delete. Format: `projects//locations//agents//Flows//pages/`.
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Agents$Flows$Pages$Get extends StandardParameters {
        /**
         * The language to retrieve the page for. The following fields are language dependent: * `Page.entry_fulfillment.messages` * `Page.entry_fulfillment.conditional_cases` * `Page.event_handlers.trigger_fulfillment.messages` * `Page.event_handlers.trigger_fulfillment.conditional_cases` * `Page.form.parameters.fill_behavior.initial_prompt_fulfillment.messages` * `Page.form.parameters.fill_behavior.initial_prompt_fulfillment.conditional_cases` * `Page.form.parameters.fill_behavior.reprompt_event_handlers.messages` * `Page.form.parameters.fill_behavior.reprompt_event_handlers.conditional_cases` * `Page.transition_routes.trigger_fulfillment.messages` * `Page.transition_routes.trigger_fulfillment.conditional_cases` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
         */
        languageCode?: string;
        /**
         * Required. The name of the page. Format: `projects//locations//agents//flows//pages/`.
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Agents$Flows$Pages$List extends StandardParameters {
        /**
         * The language to list pages for. The following fields are language dependent: * `Page.entry_fulfillment.messages` * `Page.entry_fulfillment.conditional_cases` * `Page.event_handlers.trigger_fulfillment.messages` * `Page.event_handlers.trigger_fulfillment.conditional_cases` * `Page.form.parameters.fill_behavior.initial_prompt_fulfillment.messages` * `Page.form.parameters.fill_behavior.initial_prompt_fulfillment.conditional_cases` * `Page.form.parameters.fill_behavior.reprompt_event_handlers.messages` * `Page.form.parameters.fill_behavior.reprompt_event_handlers.conditional_cases` * `Page.transition_routes.trigger_fulfillment.messages` * `Page.transition_routes.trigger_fulfillment.conditional_cases` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
         */
        languageCode?: string;
        /**
         * The maximum number of items to return in a single page. By default 100 and at most 1000.
         */
        pageSize?: number;
        /**
         * The next_page_token value returned from a previous list request.
         */
        pageToken?: string;
        /**
         * Required. The flow to list all pages for. Format: `projects//locations//agents//flows/`.
         */
        parent?: string;
    }
    export interface Params$Resource$Projects$Locations$Agents$Flows$Pages$Patch extends StandardParameters {
        /**
         * The language of the following fields in `page`: * `Page.entry_fulfillment.messages` * `Page.entry_fulfillment.conditional_cases` * `Page.event_handlers.trigger_fulfillment.messages` * `Page.event_handlers.trigger_fulfillment.conditional_cases` * `Page.form.parameters.fill_behavior.initial_prompt_fulfillment.messages` * `Page.form.parameters.fill_behavior.initial_prompt_fulfillment.conditional_cases` * `Page.form.parameters.fill_behavior.reprompt_event_handlers.messages` * `Page.form.parameters.fill_behavior.reprompt_event_handlers.conditional_cases` * `Page.transition_routes.trigger_fulfillment.messages` * `Page.transition_routes.trigger_fulfillment.conditional_cases` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
         */
        languageCode?: string;
        /**
         * The unique identifier of the page. Required for the Pages.UpdatePage method. Pages.CreatePage populates the name automatically. Format: `projects//locations//agents//flows//pages/`.
         */
        name?: string;
        /**
         * The mask to control which fields get updated. If the mask is not present, all fields will be updated.
         */
        updateMask?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleCloudDialogflowCxV3beta1Page;
    }
    export class Resource$Projects$Locations$Agents$Flows$Transitionroutegroups {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Creates an TransitionRouteGroup in the specified flow. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res =
         *     await dialogflow.projects.locations.agents.flows.transitionRouteGroups.create(
         *       {
         *         // The language of the following fields in `TransitionRouteGroup`: * `TransitionRouteGroup.transition_routes.trigger_fulfillment.messages` * `TransitionRouteGroup.transition_routes.trigger_fulfillment.conditional_cases` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
         *         languageCode: 'placeholder-value',
         *         // Required. The flow to create an TransitionRouteGroup for. Format: `projects//locations//agents//flows/`.
         *         parent:
         *           'projects/my-project/locations/my-location/agents/my-agent/flows/my-flow',
         *
         *         // Request body metadata
         *         requestBody: {
         *           // request body parameters
         *           // {
         *           //   "displayName": "my_displayName",
         *           //   "name": "my_name",
         *           //   "transitionRoutes": []
         *           // }
         *         },
         *       }
         *     );
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "displayName": "my_displayName",
         *   //   "name": "my_name",
         *   //   "transitionRoutes": []
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Projects$Locations$Agents$Flows$Transitionroutegroups$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Projects$Locations$Agents$Flows$Transitionroutegroups$Create, options?: MethodOptions): GaxiosPromise<Schema$GoogleCloudDialogflowCxV3beta1TransitionRouteGroup>;
        create(params: Params$Resource$Projects$Locations$Agents$Flows$Transitionroutegroups$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Projects$Locations$Agents$Flows$Transitionroutegroups$Create, options: MethodOptions | BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1TransitionRouteGroup>, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1TransitionRouteGroup>): void;
        create(params: Params$Resource$Projects$Locations$Agents$Flows$Transitionroutegroups$Create, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1TransitionRouteGroup>): void;
        create(callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1TransitionRouteGroup>): void;
        /**
         * Deletes the specified TransitionRouteGroup. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res =
         *     await dialogflow.projects.locations.agents.flows.transitionRouteGroups.delete(
         *       {
         *         // This field has no effect for transition route group that no page is using. If the transition route group is referenced by any page: * If `force` is set to false, an error will be returned with message indicating pages that reference the transition route group. * If `force` is set to true, Dialogflow will remove the transition route group, as well as any reference to it.
         *         force: 'placeholder-value',
         *         // Required. The name of the TransitionRouteGroup to delete. Format: `projects//locations//agents//flows//transitionRouteGroups/`.
         *         name: 'projects/my-project/locations/my-location/agents/my-agent/flows/my-flow/transitionRouteGroups/my-transitionRouteGroup',
         *       }
         *     );
         *   console.log(res.data);
         *
         *   // Example response
         *   // {}
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Projects$Locations$Agents$Flows$Transitionroutegroups$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Projects$Locations$Agents$Flows$Transitionroutegroups$Delete, options?: MethodOptions): GaxiosPromise<Schema$GoogleProtobufEmpty>;
        delete(params: Params$Resource$Projects$Locations$Agents$Flows$Transitionroutegroups$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Projects$Locations$Agents$Flows$Transitionroutegroups$Delete, options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>, callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
        delete(params: Params$Resource$Projects$Locations$Agents$Flows$Transitionroutegroups$Delete, callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
        delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
        /**
         * Retrieves the specified TransitionRouteGroup.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res =
         *     await dialogflow.projects.locations.agents.flows.transitionRouteGroups.get({
         *       // The language to retrieve the transition route group for. The following fields are language dependent: * `TransitionRouteGroup.transition_routes.trigger_fulfillment.messages` * `TransitionRouteGroup.transition_routes.trigger_fulfillment.conditional_cases` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
         *       languageCode: 'placeholder-value',
         *       // Required. The name of the TransitionRouteGroup. Format: `projects//locations//agents//flows//transitionRouteGroups/`.
         *       name: 'projects/my-project/locations/my-location/agents/my-agent/flows/my-flow/transitionRouteGroups/my-transitionRouteGroup',
         *     });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "displayName": "my_displayName",
         *   //   "name": "my_name",
         *   //   "transitionRoutes": []
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Projects$Locations$Agents$Flows$Transitionroutegroups$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Projects$Locations$Agents$Flows$Transitionroutegroups$Get, options?: MethodOptions): GaxiosPromise<Schema$GoogleCloudDialogflowCxV3beta1TransitionRouteGroup>;
        get(params: Params$Resource$Projects$Locations$Agents$Flows$Transitionroutegroups$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Projects$Locations$Agents$Flows$Transitionroutegroups$Get, options: MethodOptions | BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1TransitionRouteGroup>, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1TransitionRouteGroup>): void;
        get(params: Params$Resource$Projects$Locations$Agents$Flows$Transitionroutegroups$Get, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1TransitionRouteGroup>): void;
        get(callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1TransitionRouteGroup>): void;
        /**
         * Returns the list of all transition route groups in the specified flow.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res =
         *     await dialogflow.projects.locations.agents.flows.transitionRouteGroups.list(
         *       {
         *         // The language to list transition route groups for. The following fields are language dependent: * `TransitionRouteGroup.transition_routes.trigger_fulfillment.messages` * `TransitionRouteGroup.transition_routes.trigger_fulfillment.conditional_cases` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
         *         languageCode: 'placeholder-value',
         *         // The maximum number of items to return in a single page. By default 100 and at most 1000.
         *         pageSize: 'placeholder-value',
         *         // The next_page_token value returned from a previous list request.
         *         pageToken: 'placeholder-value',
         *         // Required. The flow to list all transition route groups for. Format: `projects//locations//agents//flows/`.
         *         parent:
         *           'projects/my-project/locations/my-location/agents/my-agent/flows/my-flow',
         *       }
         *     );
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "nextPageToken": "my_nextPageToken",
         *   //   "transitionRouteGroups": []
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Projects$Locations$Agents$Flows$Transitionroutegroups$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Projects$Locations$Agents$Flows$Transitionroutegroups$List, options?: MethodOptions): GaxiosPromise<Schema$GoogleCloudDialogflowCxV3beta1ListTransitionRouteGroupsResponse>;
        list(params: Params$Resource$Projects$Locations$Agents$Flows$Transitionroutegroups$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Projects$Locations$Agents$Flows$Transitionroutegroups$List, options: MethodOptions | BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1ListTransitionRouteGroupsResponse>, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1ListTransitionRouteGroupsResponse>): void;
        list(params: Params$Resource$Projects$Locations$Agents$Flows$Transitionroutegroups$List, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1ListTransitionRouteGroupsResponse>): void;
        list(callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1ListTransitionRouteGroupsResponse>): void;
        /**
         * Updates the specified TransitionRouteGroup. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res =
         *     await dialogflow.projects.locations.agents.flows.transitionRouteGroups.patch(
         *       {
         *         // The language of the following fields in `TransitionRouteGroup`: * `TransitionRouteGroup.transition_routes.trigger_fulfillment.messages` * `TransitionRouteGroup.transition_routes.trigger_fulfillment.conditional_cases` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
         *         languageCode: 'placeholder-value',
         *         // The unique identifier of the transition route group. TransitionRouteGroups.CreateTransitionRouteGroup populates the name automatically. Format: `projects//locations//agents//flows//transitionRouteGroups/`.
         *         name: 'projects/my-project/locations/my-location/agents/my-agent/flows/my-flow/transitionRouteGroups/my-transitionRouteGroup',
         *         // The mask to control which fields get updated.
         *         updateMask: 'placeholder-value',
         *
         *         // Request body metadata
         *         requestBody: {
         *           // request body parameters
         *           // {
         *           //   "displayName": "my_displayName",
         *           //   "name": "my_name",
         *           //   "transitionRoutes": []
         *           // }
         *         },
         *       }
         *     );
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "displayName": "my_displayName",
         *   //   "name": "my_name",
         *   //   "transitionRoutes": []
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        patch(params: Params$Resource$Projects$Locations$Agents$Flows$Transitionroutegroups$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Projects$Locations$Agents$Flows$Transitionroutegroups$Patch, options?: MethodOptions): GaxiosPromise<Schema$GoogleCloudDialogflowCxV3beta1TransitionRouteGroup>;
        patch(params: Params$Resource$Projects$Locations$Agents$Flows$Transitionroutegroups$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Projects$Locations$Agents$Flows$Transitionroutegroups$Patch, options: MethodOptions | BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1TransitionRouteGroup>, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1TransitionRouteGroup>): void;
        patch(params: Params$Resource$Projects$Locations$Agents$Flows$Transitionroutegroups$Patch, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1TransitionRouteGroup>): void;
        patch(callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1TransitionRouteGroup>): void;
    }
    export interface Params$Resource$Projects$Locations$Agents$Flows$Transitionroutegroups$Create extends StandardParameters {
        /**
         * The language of the following fields in `TransitionRouteGroup`: * `TransitionRouteGroup.transition_routes.trigger_fulfillment.messages` * `TransitionRouteGroup.transition_routes.trigger_fulfillment.conditional_cases` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
         */
        languageCode?: string;
        /**
         * Required. The flow to create an TransitionRouteGroup for. Format: `projects//locations//agents//flows/`.
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleCloudDialogflowCxV3beta1TransitionRouteGroup;
    }
    export interface Params$Resource$Projects$Locations$Agents$Flows$Transitionroutegroups$Delete extends StandardParameters {
        /**
         * This field has no effect for transition route group that no page is using. If the transition route group is referenced by any page: * If `force` is set to false, an error will be returned with message indicating pages that reference the transition route group. * If `force` is set to true, Dialogflow will remove the transition route group, as well as any reference to it.
         */
        force?: boolean;
        /**
         * Required. The name of the TransitionRouteGroup to delete. Format: `projects//locations//agents//flows//transitionRouteGroups/`.
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Agents$Flows$Transitionroutegroups$Get extends StandardParameters {
        /**
         * The language to retrieve the transition route group for. The following fields are language dependent: * `TransitionRouteGroup.transition_routes.trigger_fulfillment.messages` * `TransitionRouteGroup.transition_routes.trigger_fulfillment.conditional_cases` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
         */
        languageCode?: string;
        /**
         * Required. The name of the TransitionRouteGroup. Format: `projects//locations//agents//flows//transitionRouteGroups/`.
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Agents$Flows$Transitionroutegroups$List extends StandardParameters {
        /**
         * The language to list transition route groups for. The following fields are language dependent: * `TransitionRouteGroup.transition_routes.trigger_fulfillment.messages` * `TransitionRouteGroup.transition_routes.trigger_fulfillment.conditional_cases` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
         */
        languageCode?: string;
        /**
         * The maximum number of items to return in a single page. By default 100 and at most 1000.
         */
        pageSize?: number;
        /**
         * The next_page_token value returned from a previous list request.
         */
        pageToken?: string;
        /**
         * Required. The flow to list all transition route groups for. Format: `projects//locations//agents//flows/`.
         */
        parent?: string;
    }
    export interface Params$Resource$Projects$Locations$Agents$Flows$Transitionroutegroups$Patch extends StandardParameters {
        /**
         * The language of the following fields in `TransitionRouteGroup`: * `TransitionRouteGroup.transition_routes.trigger_fulfillment.messages` * `TransitionRouteGroup.transition_routes.trigger_fulfillment.conditional_cases` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
         */
        languageCode?: string;
        /**
         * The unique identifier of the transition route group. TransitionRouteGroups.CreateTransitionRouteGroup populates the name automatically. Format: `projects//locations//agents//flows//transitionRouteGroups/`.
         */
        name?: string;
        /**
         * The mask to control which fields get updated.
         */
        updateMask?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleCloudDialogflowCxV3beta1TransitionRouteGroup;
    }
    export class Resource$Projects$Locations$Agents$Flows$Versions {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Compares the specified base version with target version.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res =
         *     await dialogflow.projects.locations.agents.flows.versions.compareVersions({
         *       // Required. Name of the base flow version to compare with the target version. Use version ID `0` to indicate the draft version of the specified flow. Format: `projects//locations//agents/ /flows//versions/`.
         *       baseVersion:
         *         'projects/my-project/locations/my-location/agents/my-agent/flows/my-flow/versions/my-version',
         *
         *       // Request body metadata
         *       requestBody: {
         *         // request body parameters
         *         // {
         *         //   "languageCode": "my_languageCode",
         *         //   "targetVersion": "my_targetVersion"
         *         // }
         *       },
         *     });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "baseVersionContentJson": "my_baseVersionContentJson",
         *   //   "compareTime": "my_compareTime",
         *   //   "targetVersionContentJson": "my_targetVersionContentJson"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        compareVersions(params: Params$Resource$Projects$Locations$Agents$Flows$Versions$Compareversions, options: StreamMethodOptions): GaxiosPromise<Readable>;
        compareVersions(params?: Params$Resource$Projects$Locations$Agents$Flows$Versions$Compareversions, options?: MethodOptions): GaxiosPromise<Schema$GoogleCloudDialogflowCxV3beta1CompareVersionsResponse>;
        compareVersions(params: Params$Resource$Projects$Locations$Agents$Flows$Versions$Compareversions, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        compareVersions(params: Params$Resource$Projects$Locations$Agents$Flows$Versions$Compareversions, options: MethodOptions | BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1CompareVersionsResponse>, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1CompareVersionsResponse>): void;
        compareVersions(params: Params$Resource$Projects$Locations$Agents$Flows$Versions$Compareversions, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1CompareVersionsResponse>): void;
        compareVersions(callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1CompareVersionsResponse>): void;
        /**
         * Creates a Version in the specified Flow. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: CreateVersionOperationMetadata - `response`: Version
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await dialogflow.projects.locations.agents.flows.versions.create({
         *     // Required. The Flow to create an Version for. Format: `projects//locations//agents//flows/`.
         *     parent:
         *       'projects/my-project/locations/my-location/agents/my-agent/flows/my-flow',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "createTime": "my_createTime",
         *       //   "description": "my_description",
         *       //   "displayName": "my_displayName",
         *       //   "name": "my_name",
         *       //   "nluSettings": {},
         *       //   "state": "my_state"
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "done": false,
         *   //   "error": {},
         *   //   "metadata": {},
         *   //   "name": "my_name",
         *   //   "response": {}
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Projects$Locations$Agents$Flows$Versions$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Projects$Locations$Agents$Flows$Versions$Create, options?: MethodOptions): GaxiosPromise<Schema$GoogleLongrunningOperation>;
        create(params: Params$Resource$Projects$Locations$Agents$Flows$Versions$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Projects$Locations$Agents$Flows$Versions$Create, options: MethodOptions | BodyResponseCallback<Schema$GoogleLongrunningOperation>, callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>): void;
        create(params: Params$Resource$Projects$Locations$Agents$Flows$Versions$Create, callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>): void;
        create(callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>): void;
        /**
         * Deletes the specified Version.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await dialogflow.projects.locations.agents.flows.versions.delete({
         *     // Required. The name of the Version to delete. Format: `projects//locations//agents//flows//versions/`.
         *     name: 'projects/my-project/locations/my-location/agents/my-agent/flows/my-flow/versions/my-version',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {}
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Projects$Locations$Agents$Flows$Versions$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Projects$Locations$Agents$Flows$Versions$Delete, options?: MethodOptions): GaxiosPromise<Schema$GoogleProtobufEmpty>;
        delete(params: Params$Resource$Projects$Locations$Agents$Flows$Versions$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Projects$Locations$Agents$Flows$Versions$Delete, options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>, callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
        delete(params: Params$Resource$Projects$Locations$Agents$Flows$Versions$Delete, callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
        delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
        /**
         * Retrieves the specified Version.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await dialogflow.projects.locations.agents.flows.versions.get({
         *     // Required. The name of the Version. Format: `projects//locations//agents//flows//versions/`.
         *     name: 'projects/my-project/locations/my-location/agents/my-agent/flows/my-flow/versions/my-version',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "createTime": "my_createTime",
         *   //   "description": "my_description",
         *   //   "displayName": "my_displayName",
         *   //   "name": "my_name",
         *   //   "nluSettings": {},
         *   //   "state": "my_state"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Projects$Locations$Agents$Flows$Versions$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Projects$Locations$Agents$Flows$Versions$Get, options?: MethodOptions): GaxiosPromise<Schema$GoogleCloudDialogflowCxV3beta1Version>;
        get(params: Params$Resource$Projects$Locations$Agents$Flows$Versions$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Projects$Locations$Agents$Flows$Versions$Get, options: MethodOptions | BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Version>, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Version>): void;
        get(params: Params$Resource$Projects$Locations$Agents$Flows$Versions$Get, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Version>): void;
        get(callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Version>): void;
        /**
         * Returns the list of all versions in the specified Flow.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await dialogflow.projects.locations.agents.flows.versions.list({
         *     // The maximum number of items to return in a single page. By default 20 and at most 100.
         *     pageSize: 'placeholder-value',
         *     // The next_page_token value returned from a previous list request.
         *     pageToken: 'placeholder-value',
         *     // Required. The Flow to list all versions for. Format: `projects//locations//agents//flows/`.
         *     parent:
         *       'projects/my-project/locations/my-location/agents/my-agent/flows/my-flow',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "nextPageToken": "my_nextPageToken",
         *   //   "versions": []
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Projects$Locations$Agents$Flows$Versions$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Projects$Locations$Agents$Flows$Versions$List, options?: MethodOptions): GaxiosPromise<Schema$GoogleCloudDialogflowCxV3beta1ListVersionsResponse>;
        list(params: Params$Resource$Projects$Locations$Agents$Flows$Versions$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Projects$Locations$Agents$Flows$Versions$List, options: MethodOptions | BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1ListVersionsResponse>, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1ListVersionsResponse>): void;
        list(params: Params$Resource$Projects$Locations$Agents$Flows$Versions$List, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1ListVersionsResponse>): void;
        list(callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1ListVersionsResponse>): void;
        /**
         * Loads resources in the specified version to the draft flow. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await dialogflow.projects.locations.agents.flows.versions.load({
         *     // Required. The Version to be loaded to draft flow. Format: `projects//locations//agents//flows//versions/`.
         *     name: 'projects/my-project/locations/my-location/agents/my-agent/flows/my-flow/versions/my-version',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "allowOverrideAgentResources": false
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "done": false,
         *   //   "error": {},
         *   //   "metadata": {},
         *   //   "name": "my_name",
         *   //   "response": {}
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        load(params: Params$Resource$Projects$Locations$Agents$Flows$Versions$Load, options: StreamMethodOptions): GaxiosPromise<Readable>;
        load(params?: Params$Resource$Projects$Locations$Agents$Flows$Versions$Load, options?: MethodOptions): GaxiosPromise<Schema$GoogleLongrunningOperation>;
        load(params: Params$Resource$Projects$Locations$Agents$Flows$Versions$Load, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        load(params: Params$Resource$Projects$Locations$Agents$Flows$Versions$Load, options: MethodOptions | BodyResponseCallback<Schema$GoogleLongrunningOperation>, callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>): void;
        load(params: Params$Resource$Projects$Locations$Agents$Flows$Versions$Load, callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>): void;
        load(callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>): void;
        /**
         * Updates the specified Version.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await dialogflow.projects.locations.agents.flows.versions.patch({
         *     // Format: projects//locations//agents//flows//versions/. Version ID is a self-increasing number generated by Dialogflow upon version creation.
         *     name: 'projects/my-project/locations/my-location/agents/my-agent/flows/my-flow/versions/my-version',
         *     // Required. The mask to control which fields get updated. Currently only `description` and `display_name` can be updated.
         *     updateMask: 'placeholder-value',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "createTime": "my_createTime",
         *       //   "description": "my_description",
         *       //   "displayName": "my_displayName",
         *       //   "name": "my_name",
         *       //   "nluSettings": {},
         *       //   "state": "my_state"
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "createTime": "my_createTime",
         *   //   "description": "my_description",
         *   //   "displayName": "my_displayName",
         *   //   "name": "my_name",
         *   //   "nluSettings": {},
         *   //   "state": "my_state"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        patch(params: Params$Resource$Projects$Locations$Agents$Flows$Versions$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Projects$Locations$Agents$Flows$Versions$Patch, options?: MethodOptions): GaxiosPromise<Schema$GoogleCloudDialogflowCxV3beta1Version>;
        patch(params: Params$Resource$Projects$Locations$Agents$Flows$Versions$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Projects$Locations$Agents$Flows$Versions$Patch, options: MethodOptions | BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Version>, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Version>): void;
        patch(params: Params$Resource$Projects$Locations$Agents$Flows$Versions$Patch, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Version>): void;
        patch(callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Version>): void;
    }
    export interface Params$Resource$Projects$Locations$Agents$Flows$Versions$Compareversions extends StandardParameters {
        /**
         * Required. Name of the base flow version to compare with the target version. Use version ID `0` to indicate the draft version of the specified flow. Format: `projects//locations//agents/ /flows//versions/`.
         */
        baseVersion?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleCloudDialogflowCxV3beta1CompareVersionsRequest;
    }
    export interface Params$Resource$Projects$Locations$Agents$Flows$Versions$Create extends StandardParameters {
        /**
         * Required. The Flow to create an Version for. Format: `projects//locations//agents//flows/`.
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleCloudDialogflowCxV3beta1Version;
    }
    export interface Params$Resource$Projects$Locations$Agents$Flows$Versions$Delete extends StandardParameters {
        /**
         * Required. The name of the Version to delete. Format: `projects//locations//agents//flows//versions/`.
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Agents$Flows$Versions$Get extends StandardParameters {
        /**
         * Required. The name of the Version. Format: `projects//locations//agents//flows//versions/`.
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Agents$Flows$Versions$List extends StandardParameters {
        /**
         * The maximum number of items to return in a single page. By default 20 and at most 100.
         */
        pageSize?: number;
        /**
         * The next_page_token value returned from a previous list request.
         */
        pageToken?: string;
        /**
         * Required. The Flow to list all versions for. Format: `projects//locations//agents//flows/`.
         */
        parent?: string;
    }
    export interface Params$Resource$Projects$Locations$Agents$Flows$Versions$Load extends StandardParameters {
        /**
         * Required. The Version to be loaded to draft flow. Format: `projects//locations//agents//flows//versions/`.
         */
        name?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleCloudDialogflowCxV3beta1LoadVersionRequest;
    }
    export interface Params$Resource$Projects$Locations$Agents$Flows$Versions$Patch extends StandardParameters {
        /**
         * Format: projects//locations//agents//flows//versions/. Version ID is a self-increasing number generated by Dialogflow upon version creation.
         */
        name?: string;
        /**
         * Required. The mask to control which fields get updated. Currently only `description` and `display_name` can be updated.
         */
        updateMask?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleCloudDialogflowCxV3beta1Version;
    }
    export class Resource$Projects$Locations$Agents$Intents {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Creates an intent in the specified agent. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await dialogflow.projects.locations.agents.intents.create({
         *     // The language of the following fields in `intent`: * `Intent.training_phrases.parts.text` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
         *     languageCode: 'placeholder-value',
         *     // Required. The agent to create an intent for. Format: `projects//locations//agents/`.
         *     parent: 'projects/my-project/locations/my-location/agents/my-agent',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "description": "my_description",
         *       //   "displayName": "my_displayName",
         *       //   "isFallback": false,
         *       //   "labels": {},
         *       //   "name": "my_name",
         *       //   "parameters": [],
         *       //   "priority": 0,
         *       //   "trainingPhrases": []
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "description": "my_description",
         *   //   "displayName": "my_displayName",
         *   //   "isFallback": false,
         *   //   "labels": {},
         *   //   "name": "my_name",
         *   //   "parameters": [],
         *   //   "priority": 0,
         *   //   "trainingPhrases": []
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Projects$Locations$Agents$Intents$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Projects$Locations$Agents$Intents$Create, options?: MethodOptions): GaxiosPromise<Schema$GoogleCloudDialogflowCxV3beta1Intent>;
        create(params: Params$Resource$Projects$Locations$Agents$Intents$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Projects$Locations$Agents$Intents$Create, options: MethodOptions | BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Intent>, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Intent>): void;
        create(params: Params$Resource$Projects$Locations$Agents$Intents$Create, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Intent>): void;
        create(callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Intent>): void;
        /**
         * Deletes the specified intent. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await dialogflow.projects.locations.agents.intents.delete({
         *     // Required. The name of the intent to delete. Format: `projects//locations//agents//intents/`.
         *     name: 'projects/my-project/locations/my-location/agents/my-agent/intents/my-intent',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {}
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Projects$Locations$Agents$Intents$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Projects$Locations$Agents$Intents$Delete, options?: MethodOptions): GaxiosPromise<Schema$GoogleProtobufEmpty>;
        delete(params: Params$Resource$Projects$Locations$Agents$Intents$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Projects$Locations$Agents$Intents$Delete, options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>, callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
        delete(params: Params$Resource$Projects$Locations$Agents$Intents$Delete, callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
        delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
        /**
         * Retrieves the specified intent.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await dialogflow.projects.locations.agents.intents.get({
         *     // The language to retrieve the intent for. The following fields are language dependent: * `Intent.training_phrases.parts.text` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
         *     languageCode: 'placeholder-value',
         *     // Required. The name of the intent. Format: `projects//locations//agents//intents/`.
         *     name: 'projects/my-project/locations/my-location/agents/my-agent/intents/my-intent',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "description": "my_description",
         *   //   "displayName": "my_displayName",
         *   //   "isFallback": false,
         *   //   "labels": {},
         *   //   "name": "my_name",
         *   //   "parameters": [],
         *   //   "priority": 0,
         *   //   "trainingPhrases": []
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Projects$Locations$Agents$Intents$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Projects$Locations$Agents$Intents$Get, options?: MethodOptions): GaxiosPromise<Schema$GoogleCloudDialogflowCxV3beta1Intent>;
        get(params: Params$Resource$Projects$Locations$Agents$Intents$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Projects$Locations$Agents$Intents$Get, options: MethodOptions | BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Intent>, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Intent>): void;
        get(params: Params$Resource$Projects$Locations$Agents$Intents$Get, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Intent>): void;
        get(callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Intent>): void;
        /**
         * Returns the list of all intents in the specified agent.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await dialogflow.projects.locations.agents.intents.list({
         *     // The resource view to apply to the returned intent.
         *     intentView: 'placeholder-value',
         *     // The language to list intents for. The following fields are language dependent: * `Intent.training_phrases.parts.text` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
         *     languageCode: 'placeholder-value',
         *     // The maximum number of items to return in a single page. By default 100 and at most 1000.
         *     pageSize: 'placeholder-value',
         *     // The next_page_token value returned from a previous list request.
         *     pageToken: 'placeholder-value',
         *     // Required. The agent to list all intents for. Format: `projects//locations//agents/`.
         *     parent: 'projects/my-project/locations/my-location/agents/my-agent',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "intents": [],
         *   //   "nextPageToken": "my_nextPageToken"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Projects$Locations$Agents$Intents$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Projects$Locations$Agents$Intents$List, options?: MethodOptions): GaxiosPromise<Schema$GoogleCloudDialogflowCxV3beta1ListIntentsResponse>;
        list(params: Params$Resource$Projects$Locations$Agents$Intents$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Projects$Locations$Agents$Intents$List, options: MethodOptions | BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1ListIntentsResponse>, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1ListIntentsResponse>): void;
        list(params: Params$Resource$Projects$Locations$Agents$Intents$List, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1ListIntentsResponse>): void;
        list(callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1ListIntentsResponse>): void;
        /**
         * Updates the specified intent. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await dialogflow.projects.locations.agents.intents.patch({
         *     // The language of the following fields in `intent`: * `Intent.training_phrases.parts.text` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
         *     languageCode: 'placeholder-value',
         *     // The unique identifier of the intent. Required for the Intents.UpdateIntent method. Intents.CreateIntent populates the name automatically. Format: `projects//locations//agents//intents/`.
         *     name: 'projects/my-project/locations/my-location/agents/my-agent/intents/my-intent',
         *     // The mask to control which fields get updated. If the mask is not present, all fields will be updated.
         *     updateMask: 'placeholder-value',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "description": "my_description",
         *       //   "displayName": "my_displayName",
         *       //   "isFallback": false,
         *       //   "labels": {},
         *       //   "name": "my_name",
         *       //   "parameters": [],
         *       //   "priority": 0,
         *       //   "trainingPhrases": []
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "description": "my_description",
         *   //   "displayName": "my_displayName",
         *   //   "isFallback": false,
         *   //   "labels": {},
         *   //   "name": "my_name",
         *   //   "parameters": [],
         *   //   "priority": 0,
         *   //   "trainingPhrases": []
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        patch(params: Params$Resource$Projects$Locations$Agents$Intents$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Projects$Locations$Agents$Intents$Patch, options?: MethodOptions): GaxiosPromise<Schema$GoogleCloudDialogflowCxV3beta1Intent>;
        patch(params: Params$Resource$Projects$Locations$Agents$Intents$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Projects$Locations$Agents$Intents$Patch, options: MethodOptions | BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Intent>, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Intent>): void;
        patch(params: Params$Resource$Projects$Locations$Agents$Intents$Patch, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Intent>): void;
        patch(callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Intent>): void;
    }
    export interface Params$Resource$Projects$Locations$Agents$Intents$Create extends StandardParameters {
        /**
         * The language of the following fields in `intent`: * `Intent.training_phrases.parts.text` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
         */
        languageCode?: string;
        /**
         * Required. The agent to create an intent for. Format: `projects//locations//agents/`.
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleCloudDialogflowCxV3beta1Intent;
    }
    export interface Params$Resource$Projects$Locations$Agents$Intents$Delete extends StandardParameters {
        /**
         * Required. The name of the intent to delete. Format: `projects//locations//agents//intents/`.
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Agents$Intents$Get extends StandardParameters {
        /**
         * The language to retrieve the intent for. The following fields are language dependent: * `Intent.training_phrases.parts.text` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
         */
        languageCode?: string;
        /**
         * Required. The name of the intent. Format: `projects//locations//agents//intents/`.
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Agents$Intents$List extends StandardParameters {
        /**
         * The resource view to apply to the returned intent.
         */
        intentView?: string;
        /**
         * The language to list intents for. The following fields are language dependent: * `Intent.training_phrases.parts.text` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
         */
        languageCode?: string;
        /**
         * The maximum number of items to return in a single page. By default 100 and at most 1000.
         */
        pageSize?: number;
        /**
         * The next_page_token value returned from a previous list request.
         */
        pageToken?: string;
        /**
         * Required. The agent to list all intents for. Format: `projects//locations//agents/`.
         */
        parent?: string;
    }
    export interface Params$Resource$Projects$Locations$Agents$Intents$Patch extends StandardParameters {
        /**
         * The language of the following fields in `intent`: * `Intent.training_phrases.parts.text` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
         */
        languageCode?: string;
        /**
         * The unique identifier of the intent. Required for the Intents.UpdateIntent method. Intents.CreateIntent populates the name automatically. Format: `projects//locations//agents//intents/`.
         */
        name?: string;
        /**
         * The mask to control which fields get updated. If the mask is not present, all fields will be updated.
         */
        updateMask?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleCloudDialogflowCxV3beta1Intent;
    }
    export class Resource$Projects$Locations$Agents$Sessions {
        context: APIRequestContext;
        entityTypes: Resource$Projects$Locations$Agents$Sessions$Entitytypes;
        constructor(context: APIRequestContext);
        /**
         * Processes a natural language query and returns structured, actionable data as a result. This method is not idempotent, because it may cause session entity types to be updated, which in turn might affect results of future queries. Note: Always use agent versions for production traffic. See [Versions and environments](https://cloud.google.com/dialogflow/cx/docs/concept/version).
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await dialogflow.projects.locations.agents.sessions.detectIntent({
         *     // Required. The name of the session this query is sent to. Format: `projects//locations//agents//sessions/` or `projects//locations//agents//environments//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. It's up to the API caller to choose an appropriate `Session ID`. It can be a random number or some type of session identifiers (preferably hashed). The length of the `Session ID` must not exceed 36 characters. For more information, see the [sessions guide](https://cloud.google.com/dialogflow/cx/docs/concept/session). Note: Always use agent versions for production traffic. See [Versions and environments](https://cloud.google.com/dialogflow/cx/docs/concept/version).
         *     session:
         *       'projects/my-project/locations/my-location/agents/my-agent/sessions/my-session',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "outputAudioConfig": {},
         *       //   "queryInput": {},
         *       //   "queryParams": {}
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "allowCancellation": false,
         *   //   "outputAudio": "my_outputAudio",
         *   //   "outputAudioConfig": {},
         *   //   "queryResult": {},
         *   //   "responseId": "my_responseId",
         *   //   "responseType": "my_responseType"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        detectIntent(params: Params$Resource$Projects$Locations$Agents$Sessions$Detectintent, options: StreamMethodOptions): GaxiosPromise<Readable>;
        detectIntent(params?: Params$Resource$Projects$Locations$Agents$Sessions$Detectintent, options?: MethodOptions): GaxiosPromise<Schema$GoogleCloudDialogflowCxV3beta1DetectIntentResponse>;
        detectIntent(params: Params$Resource$Projects$Locations$Agents$Sessions$Detectintent, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        detectIntent(params: Params$Resource$Projects$Locations$Agents$Sessions$Detectintent, options: MethodOptions | BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1DetectIntentResponse>, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1DetectIntentResponse>): void;
        detectIntent(params: Params$Resource$Projects$Locations$Agents$Sessions$Detectintent, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1DetectIntentResponse>): void;
        detectIntent(callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1DetectIntentResponse>): void;
        /**
         * Fulfills a matched intent returned by MatchIntent. Must be called after MatchIntent, with input from MatchIntentResponse. Otherwise, the behavior is undefined.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await dialogflow.projects.locations.agents.sessions.fulfillIntent(
         *     {
         *       // Required. The name of the session this query is sent to. Format: `projects//locations//agents//sessions/` or `projects//locations//agents//environments//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. It's up to the API caller to choose an appropriate `Session ID`. It can be a random number or some type of session identifiers (preferably hashed). The length of the `Session ID` must not exceed 36 characters. For more information, see the [sessions guide](https://cloud.google.com/dialogflow/cx/docs/concept/session).
         *       session:
         *         'projects/my-project/locations/my-location/agents/my-agent/sessions/my-session',
         *
         *       // Request body metadata
         *       requestBody: {
         *         // request body parameters
         *         // {
         *         //   "match": {},
         *         //   "matchIntentRequest": {},
         *         //   "outputAudioConfig": {}
         *         // }
         *       },
         *     }
         *   );
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "outputAudio": "my_outputAudio",
         *   //   "outputAudioConfig": {},
         *   //   "queryResult": {},
         *   //   "responseId": "my_responseId"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        fulfillIntent(params: Params$Resource$Projects$Locations$Agents$Sessions$Fulfillintent, options: StreamMethodOptions): GaxiosPromise<Readable>;
        fulfillIntent(params?: Params$Resource$Projects$Locations$Agents$Sessions$Fulfillintent, options?: MethodOptions): GaxiosPromise<Schema$GoogleCloudDialogflowCxV3beta1FulfillIntentResponse>;
        fulfillIntent(params: Params$Resource$Projects$Locations$Agents$Sessions$Fulfillintent, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        fulfillIntent(params: Params$Resource$Projects$Locations$Agents$Sessions$Fulfillintent, options: MethodOptions | BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1FulfillIntentResponse>, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1FulfillIntentResponse>): void;
        fulfillIntent(params: Params$Resource$Projects$Locations$Agents$Sessions$Fulfillintent, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1FulfillIntentResponse>): void;
        fulfillIntent(callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1FulfillIntentResponse>): void;
        /**
         * Returns preliminary intent match results, doesn't change the session status.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await dialogflow.projects.locations.agents.sessions.matchIntent({
         *     // Required. The name of the session this query is sent to. Format: `projects//locations//agents//sessions/` or `projects//locations//agents//environments//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. It's up to the API caller to choose an appropriate `Session ID`. It can be a random number or some type of session identifiers (preferably hashed). The length of the `Session ID` must not exceed 36 characters. For more information, see the [sessions guide](https://cloud.google.com/dialogflow/cx/docs/concept/session).
         *     session:
         *       'projects/my-project/locations/my-location/agents/my-agent/sessions/my-session',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "queryInput": {},
         *       //   "queryParams": {}
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "currentPage": {},
         *   //   "matches": [],
         *   //   "text": "my_text",
         *   //   "transcript": "my_transcript",
         *   //   "triggerEvent": "my_triggerEvent",
         *   //   "triggerIntent": "my_triggerIntent"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        matchIntent(params: Params$Resource$Projects$Locations$Agents$Sessions$Matchintent, options: StreamMethodOptions): GaxiosPromise<Readable>;
        matchIntent(params?: Params$Resource$Projects$Locations$Agents$Sessions$Matchintent, options?: MethodOptions): GaxiosPromise<Schema$GoogleCloudDialogflowCxV3beta1MatchIntentResponse>;
        matchIntent(params: Params$Resource$Projects$Locations$Agents$Sessions$Matchintent, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        matchIntent(params: Params$Resource$Projects$Locations$Agents$Sessions$Matchintent, options: MethodOptions | BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1MatchIntentResponse>, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1MatchIntentResponse>): void;
        matchIntent(params: Params$Resource$Projects$Locations$Agents$Sessions$Matchintent, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1MatchIntentResponse>): void;
        matchIntent(callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1MatchIntentResponse>): void;
    }
    export interface Params$Resource$Projects$Locations$Agents$Sessions$Detectintent extends StandardParameters {
        /**
         * Required. The name of the session this query is sent to. Format: `projects//locations//agents//sessions/` or `projects//locations//agents//environments//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. It's up to the API caller to choose an appropriate `Session ID`. It can be a random number or some type of session identifiers (preferably hashed). The length of the `Session ID` must not exceed 36 characters. For more information, see the [sessions guide](https://cloud.google.com/dialogflow/cx/docs/concept/session). Note: Always use agent versions for production traffic. See [Versions and environments](https://cloud.google.com/dialogflow/cx/docs/concept/version).
         */
        session?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleCloudDialogflowCxV3beta1DetectIntentRequest;
    }
    export interface Params$Resource$Projects$Locations$Agents$Sessions$Fulfillintent extends StandardParameters {
        /**
         * Required. The name of the session this query is sent to. Format: `projects//locations//agents//sessions/` or `projects//locations//agents//environments//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. It's up to the API caller to choose an appropriate `Session ID`. It can be a random number or some type of session identifiers (preferably hashed). The length of the `Session ID` must not exceed 36 characters. For more information, see the [sessions guide](https://cloud.google.com/dialogflow/cx/docs/concept/session).
         */
        session?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleCloudDialogflowCxV3beta1FulfillIntentRequest;
    }
    export interface Params$Resource$Projects$Locations$Agents$Sessions$Matchintent extends StandardParameters {
        /**
         * Required. The name of the session this query is sent to. Format: `projects//locations//agents//sessions/` or `projects//locations//agents//environments//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. It's up to the API caller to choose an appropriate `Session ID`. It can be a random number or some type of session identifiers (preferably hashed). The length of the `Session ID` must not exceed 36 characters. For more information, see the [sessions guide](https://cloud.google.com/dialogflow/cx/docs/concept/session).
         */
        session?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleCloudDialogflowCxV3beta1MatchIntentRequest;
    }
    export class Resource$Projects$Locations$Agents$Sessions$Entitytypes {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Creates a session entity type.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res =
         *     await dialogflow.projects.locations.agents.sessions.entityTypes.create({
         *       // Required. The session to create a session entity type for. Format: `projects//locations//agents//sessions/` or `projects//locations//agents//environments//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment.
         *       parent:
         *         'projects/my-project/locations/my-location/agents/my-agent/sessions/my-session',
         *
         *       // Request body metadata
         *       requestBody: {
         *         // request body parameters
         *         // {
         *         //   "entities": [],
         *         //   "entityOverrideMode": "my_entityOverrideMode",
         *         //   "name": "my_name"
         *         // }
         *       },
         *     });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "entities": [],
         *   //   "entityOverrideMode": "my_entityOverrideMode",
         *   //   "name": "my_name"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Projects$Locations$Agents$Sessions$Entitytypes$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Projects$Locations$Agents$Sessions$Entitytypes$Create, options?: MethodOptions): GaxiosPromise<Schema$GoogleCloudDialogflowCxV3beta1SessionEntityType>;
        create(params: Params$Resource$Projects$Locations$Agents$Sessions$Entitytypes$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Projects$Locations$Agents$Sessions$Entitytypes$Create, options: MethodOptions | BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1SessionEntityType>, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1SessionEntityType>): void;
        create(params: Params$Resource$Projects$Locations$Agents$Sessions$Entitytypes$Create, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1SessionEntityType>): void;
        create(callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1SessionEntityType>): void;
        /**
         * Deletes the specified session entity type.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res =
         *     await dialogflow.projects.locations.agents.sessions.entityTypes.delete({
         *       // Required. The name of the session entity type to delete. Format: `projects//locations//agents//sessions//entityTypes/` or `projects//locations//agents//environments//sessions//entityTypes/`. If `Environment ID` is not specified, we assume default 'draft' environment.
         *       name: 'projects/my-project/locations/my-location/agents/my-agent/sessions/my-session/entityTypes/my-entityType',
         *     });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {}
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Projects$Locations$Agents$Sessions$Entitytypes$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Projects$Locations$Agents$Sessions$Entitytypes$Delete, options?: MethodOptions): GaxiosPromise<Schema$GoogleProtobufEmpty>;
        delete(params: Params$Resource$Projects$Locations$Agents$Sessions$Entitytypes$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Projects$Locations$Agents$Sessions$Entitytypes$Delete, options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>, callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
        delete(params: Params$Resource$Projects$Locations$Agents$Sessions$Entitytypes$Delete, callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
        delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
        /**
         * Retrieves the specified session entity type.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res =
         *     await dialogflow.projects.locations.agents.sessions.entityTypes.get({
         *       // Required. The name of the session entity type. Format: `projects//locations//agents//sessions//entityTypes/` or `projects//locations//agents//environments//sessions//entityTypes/`. If `Environment ID` is not specified, we assume default 'draft' environment.
         *       name: 'projects/my-project/locations/my-location/agents/my-agent/sessions/my-session/entityTypes/my-entityType',
         *     });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "entities": [],
         *   //   "entityOverrideMode": "my_entityOverrideMode",
         *   //   "name": "my_name"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Projects$Locations$Agents$Sessions$Entitytypes$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Projects$Locations$Agents$Sessions$Entitytypes$Get, options?: MethodOptions): GaxiosPromise<Schema$GoogleCloudDialogflowCxV3beta1SessionEntityType>;
        get(params: Params$Resource$Projects$Locations$Agents$Sessions$Entitytypes$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Projects$Locations$Agents$Sessions$Entitytypes$Get, options: MethodOptions | BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1SessionEntityType>, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1SessionEntityType>): void;
        get(params: Params$Resource$Projects$Locations$Agents$Sessions$Entitytypes$Get, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1SessionEntityType>): void;
        get(callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1SessionEntityType>): void;
        /**
         * Returns the list of all session entity types in the specified session.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res =
         *     await dialogflow.projects.locations.agents.sessions.entityTypes.list({
         *       // The maximum number of items to return in a single page. By default 100 and at most 1000.
         *       pageSize: 'placeholder-value',
         *       // The next_page_token value returned from a previous list request.
         *       pageToken: 'placeholder-value',
         *       // Required. The session to list all session entity types from. Format: `projects//locations//agents//sessions/` or `projects//locations//agents//environments//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment.
         *       parent:
         *         'projects/my-project/locations/my-location/agents/my-agent/sessions/my-session',
         *     });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "nextPageToken": "my_nextPageToken",
         *   //   "sessionEntityTypes": []
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Projects$Locations$Agents$Sessions$Entitytypes$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Projects$Locations$Agents$Sessions$Entitytypes$List, options?: MethodOptions): GaxiosPromise<Schema$GoogleCloudDialogflowCxV3beta1ListSessionEntityTypesResponse>;
        list(params: Params$Resource$Projects$Locations$Agents$Sessions$Entitytypes$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Projects$Locations$Agents$Sessions$Entitytypes$List, options: MethodOptions | BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1ListSessionEntityTypesResponse>, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1ListSessionEntityTypesResponse>): void;
        list(params: Params$Resource$Projects$Locations$Agents$Sessions$Entitytypes$List, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1ListSessionEntityTypesResponse>): void;
        list(callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1ListSessionEntityTypesResponse>): void;
        /**
         * Updates the specified session entity type.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res =
         *     await dialogflow.projects.locations.agents.sessions.entityTypes.patch({
         *       // Required. The unique identifier of the session entity type. Format: `projects//locations//agents//sessions//entityTypes/` or `projects//locations//agents//environments//sessions//entityTypes/`. If `Environment ID` is not specified, we assume default 'draft' environment.
         *       name: 'projects/my-project/locations/my-location/agents/my-agent/sessions/my-session/entityTypes/my-entityType',
         *       // The mask to control which fields get updated.
         *       updateMask: 'placeholder-value',
         *
         *       // Request body metadata
         *       requestBody: {
         *         // request body parameters
         *         // {
         *         //   "entities": [],
         *         //   "entityOverrideMode": "my_entityOverrideMode",
         *         //   "name": "my_name"
         *         // }
         *       },
         *     });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "entities": [],
         *   //   "entityOverrideMode": "my_entityOverrideMode",
         *   //   "name": "my_name"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        patch(params: Params$Resource$Projects$Locations$Agents$Sessions$Entitytypes$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Projects$Locations$Agents$Sessions$Entitytypes$Patch, options?: MethodOptions): GaxiosPromise<Schema$GoogleCloudDialogflowCxV3beta1SessionEntityType>;
        patch(params: Params$Resource$Projects$Locations$Agents$Sessions$Entitytypes$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Projects$Locations$Agents$Sessions$Entitytypes$Patch, options: MethodOptions | BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1SessionEntityType>, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1SessionEntityType>): void;
        patch(params: Params$Resource$Projects$Locations$Agents$Sessions$Entitytypes$Patch, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1SessionEntityType>): void;
        patch(callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1SessionEntityType>): void;
    }
    export interface Params$Resource$Projects$Locations$Agents$Sessions$Entitytypes$Create extends StandardParameters {
        /**
         * Required. The session to create a session entity type for. Format: `projects//locations//agents//sessions/` or `projects//locations//agents//environments//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment.
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleCloudDialogflowCxV3beta1SessionEntityType;
    }
    export interface Params$Resource$Projects$Locations$Agents$Sessions$Entitytypes$Delete extends StandardParameters {
        /**
         * Required. The name of the session entity type to delete. Format: `projects//locations//agents//sessions//entityTypes/` or `projects//locations//agents//environments//sessions//entityTypes/`. If `Environment ID` is not specified, we assume default 'draft' environment.
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Agents$Sessions$Entitytypes$Get extends StandardParameters {
        /**
         * Required. The name of the session entity type. Format: `projects//locations//agents//sessions//entityTypes/` or `projects//locations//agents//environments//sessions//entityTypes/`. If `Environment ID` is not specified, we assume default 'draft' environment.
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Agents$Sessions$Entitytypes$List extends StandardParameters {
        /**
         * The maximum number of items to return in a single page. By default 100 and at most 1000.
         */
        pageSize?: number;
        /**
         * The next_page_token value returned from a previous list request.
         */
        pageToken?: string;
        /**
         * Required. The session to list all session entity types from. Format: `projects//locations//agents//sessions/` or `projects//locations//agents//environments//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment.
         */
        parent?: string;
    }
    export interface Params$Resource$Projects$Locations$Agents$Sessions$Entitytypes$Patch extends StandardParameters {
        /**
         * Required. The unique identifier of the session entity type. Format: `projects//locations//agents//sessions//entityTypes/` or `projects//locations//agents//environments//sessions//entityTypes/`. If `Environment ID` is not specified, we assume default 'draft' environment.
         */
        name?: string;
        /**
         * The mask to control which fields get updated.
         */
        updateMask?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleCloudDialogflowCxV3beta1SessionEntityType;
    }
    export class Resource$Projects$Locations$Agents$Testcases {
        context: APIRequestContext;
        results: Resource$Projects$Locations$Agents$Testcases$Results;
        constructor(context: APIRequestContext);
        /**
         * Batch deletes test cases.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await dialogflow.projects.locations.agents.testCases.batchDelete({
         *     // Required. The agent to delete test cases from. Format: `projects//locations//agents/`.
         *     parent: 'projects/my-project/locations/my-location/agents/my-agent',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "names": []
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {}
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        batchDelete(params: Params$Resource$Projects$Locations$Agents$Testcases$Batchdelete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        batchDelete(params?: Params$Resource$Projects$Locations$Agents$Testcases$Batchdelete, options?: MethodOptions): GaxiosPromise<Schema$GoogleProtobufEmpty>;
        batchDelete(params: Params$Resource$Projects$Locations$Agents$Testcases$Batchdelete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        batchDelete(params: Params$Resource$Projects$Locations$Agents$Testcases$Batchdelete, options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>, callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
        batchDelete(params: Params$Resource$Projects$Locations$Agents$Testcases$Batchdelete, callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
        batchDelete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
        /**
         * Kicks off a batch run of test cases. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: BatchRunTestCasesMetadata - `response`: BatchRunTestCasesResponse
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await dialogflow.projects.locations.agents.testCases.batchRun({
         *     // Required. Agent name. Format: `projects//locations//agents/ `.
         *     parent: 'projects/my-project/locations/my-location/agents/my-agent',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "environment": "my_environment",
         *       //   "testCases": []
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "done": false,
         *   //   "error": {},
         *   //   "metadata": {},
         *   //   "name": "my_name",
         *   //   "response": {}
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        batchRun(params: Params$Resource$Projects$Locations$Agents$Testcases$Batchrun, options: StreamMethodOptions): GaxiosPromise<Readable>;
        batchRun(params?: Params$Resource$Projects$Locations$Agents$Testcases$Batchrun, options?: MethodOptions): GaxiosPromise<Schema$GoogleLongrunningOperation>;
        batchRun(params: Params$Resource$Projects$Locations$Agents$Testcases$Batchrun, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        batchRun(params: Params$Resource$Projects$Locations$Agents$Testcases$Batchrun, options: MethodOptions | BodyResponseCallback<Schema$GoogleLongrunningOperation>, callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>): void;
        batchRun(params: Params$Resource$Projects$Locations$Agents$Testcases$Batchrun, callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>): void;
        batchRun(callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>): void;
        /**
         * Calculates the test coverage for an agent.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res =
         *     await dialogflow.projects.locations.agents.testCases.calculateCoverage({
         *       // Required. The agent to calculate coverage for. Format: `projects//locations//agents/`.
         *       agent: 'projects/my-project/locations/my-location/agents/my-agent',
         *       // Required. The type of coverage requested.
         *       type: 'placeholder-value',
         *     });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "agent": "my_agent",
         *   //   "intentCoverage": {},
         *   //   "routeGroupCoverage": {},
         *   //   "transitionCoverage": {}
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        calculateCoverage(params: Params$Resource$Projects$Locations$Agents$Testcases$Calculatecoverage, options: StreamMethodOptions): GaxiosPromise<Readable>;
        calculateCoverage(params?: Params$Resource$Projects$Locations$Agents$Testcases$Calculatecoverage, options?: MethodOptions): GaxiosPromise<Schema$GoogleCloudDialogflowCxV3beta1CalculateCoverageResponse>;
        calculateCoverage(params: Params$Resource$Projects$Locations$Agents$Testcases$Calculatecoverage, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        calculateCoverage(params: Params$Resource$Projects$Locations$Agents$Testcases$Calculatecoverage, options: MethodOptions | BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1CalculateCoverageResponse>, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1CalculateCoverageResponse>): void;
        calculateCoverage(params: Params$Resource$Projects$Locations$Agents$Testcases$Calculatecoverage, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1CalculateCoverageResponse>): void;
        calculateCoverage(callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1CalculateCoverageResponse>): void;
        /**
         * Creates a test case for the given agent.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await dialogflow.projects.locations.agents.testCases.create({
         *     // Required. The agent to create the test case for. Format: `projects//locations//agents/`.
         *     parent: 'projects/my-project/locations/my-location/agents/my-agent',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "creationTime": "my_creationTime",
         *       //   "displayName": "my_displayName",
         *       //   "lastTestResult": {},
         *       //   "name": "my_name",
         *       //   "notes": "my_notes",
         *       //   "tags": [],
         *       //   "testCaseConversationTurns": [],
         *       //   "testConfig": {}
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "creationTime": "my_creationTime",
         *   //   "displayName": "my_displayName",
         *   //   "lastTestResult": {},
         *   //   "name": "my_name",
         *   //   "notes": "my_notes",
         *   //   "tags": [],
         *   //   "testCaseConversationTurns": [],
         *   //   "testConfig": {}
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Projects$Locations$Agents$Testcases$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Projects$Locations$Agents$Testcases$Create, options?: MethodOptions): GaxiosPromise<Schema$GoogleCloudDialogflowCxV3beta1TestCase>;
        create(params: Params$Resource$Projects$Locations$Agents$Testcases$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Projects$Locations$Agents$Testcases$Create, options: MethodOptions | BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1TestCase>, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1TestCase>): void;
        create(params: Params$Resource$Projects$Locations$Agents$Testcases$Create, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1TestCase>): void;
        create(callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1TestCase>): void;
        /**
         * Exports the test cases under the agent to a Cloud Storage bucket or a local file. Filter can be applied to export a subset of test cases. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: ExportTestCasesMetadata - `response`: ExportTestCasesResponse
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await dialogflow.projects.locations.agents.testCases.export({
         *     // Required. The agent where to export test cases from. Format: `projects//locations//agents/`.
         *     parent: 'projects/my-project/locations/my-location/agents/my-agent',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "dataFormat": "my_dataFormat",
         *       //   "filter": "my_filter",
         *       //   "gcsUri": "my_gcsUri"
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "done": false,
         *   //   "error": {},
         *   //   "metadata": {},
         *   //   "name": "my_name",
         *   //   "response": {}
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        export(params: Params$Resource$Projects$Locations$Agents$Testcases$Export, options: StreamMethodOptions): GaxiosPromise<Readable>;
        export(params?: Params$Resource$Projects$Locations$Agents$Testcases$Export, options?: MethodOptions): GaxiosPromise<Schema$GoogleLongrunningOperation>;
        export(params: Params$Resource$Projects$Locations$Agents$Testcases$Export, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        export(params: Params$Resource$Projects$Locations$Agents$Testcases$Export, options: MethodOptions | BodyResponseCallback<Schema$GoogleLongrunningOperation>, callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>): void;
        export(params: Params$Resource$Projects$Locations$Agents$Testcases$Export, callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>): void;
        export(callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>): void;
        /**
         * Gets a test case.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await dialogflow.projects.locations.agents.testCases.get({
         *     // Required. The name of the testcase. Format: `projects//locations//agents//testCases/`.
         *     name: 'projects/my-project/locations/my-location/agents/my-agent/testCases/my-testCase',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "creationTime": "my_creationTime",
         *   //   "displayName": "my_displayName",
         *   //   "lastTestResult": {},
         *   //   "name": "my_name",
         *   //   "notes": "my_notes",
         *   //   "tags": [],
         *   //   "testCaseConversationTurns": [],
         *   //   "testConfig": {}
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Projects$Locations$Agents$Testcases$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Projects$Locations$Agents$Testcases$Get, options?: MethodOptions): GaxiosPromise<Schema$GoogleCloudDialogflowCxV3beta1TestCase>;
        get(params: Params$Resource$Projects$Locations$Agents$Testcases$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Projects$Locations$Agents$Testcases$Get, options: MethodOptions | BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1TestCase>, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1TestCase>): void;
        get(params: Params$Resource$Projects$Locations$Agents$Testcases$Get, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1TestCase>): void;
        get(callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1TestCase>): void;
        /**
         * Imports the test cases from a Cloud Storage bucket or a local file. It always creates new test cases and won't overwite any existing ones. The provided ID in the imported test case is neglected. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: ImportTestCasesMetadata - `response`: ImportTestCasesResponse
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await dialogflow.projects.locations.agents.testCases.import({
         *     // Required. The agent to import test cases to. Format: `projects//locations//agents/`.
         *     parent: 'projects/my-project/locations/my-location/agents/my-agent',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "content": "my_content",
         *       //   "gcsUri": "my_gcsUri"
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "done": false,
         *   //   "error": {},
         *   //   "metadata": {},
         *   //   "name": "my_name",
         *   //   "response": {}
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        import(params: Params$Resource$Projects$Locations$Agents$Testcases$Import, options: StreamMethodOptions): GaxiosPromise<Readable>;
        import(params?: Params$Resource$Projects$Locations$Agents$Testcases$Import, options?: MethodOptions): GaxiosPromise<Schema$GoogleLongrunningOperation>;
        import(params: Params$Resource$Projects$Locations$Agents$Testcases$Import, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        import(params: Params$Resource$Projects$Locations$Agents$Testcases$Import, options: MethodOptions | BodyResponseCallback<Schema$GoogleLongrunningOperation>, callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>): void;
        import(params: Params$Resource$Projects$Locations$Agents$Testcases$Import, callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>): void;
        import(callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>): void;
        /**
         * Fetches a list of test cases for a given agent.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await dialogflow.projects.locations.agents.testCases.list({
         *     // The maximum number of items to return in a single page. By default 20. Note that when TestCaseView = FULL, the maximum page size allowed is 20. When TestCaseView = BASIC, the maximum page size allowed is 500.
         *     pageSize: 'placeholder-value',
         *     // The next_page_token value returned from a previous list request.
         *     pageToken: 'placeholder-value',
         *     // Required. The agent to list all pages for. Format: `projects//locations//agents/`.
         *     parent: 'projects/my-project/locations/my-location/agents/my-agent',
         *     // Specifies whether response should include all fields or just the metadata.
         *     view: 'placeholder-value',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "nextPageToken": "my_nextPageToken",
         *   //   "testCases": []
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Projects$Locations$Agents$Testcases$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Projects$Locations$Agents$Testcases$List, options?: MethodOptions): GaxiosPromise<Schema$GoogleCloudDialogflowCxV3beta1ListTestCasesResponse>;
        list(params: Params$Resource$Projects$Locations$Agents$Testcases$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Projects$Locations$Agents$Testcases$List, options: MethodOptions | BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1ListTestCasesResponse>, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1ListTestCasesResponse>): void;
        list(params: Params$Resource$Projects$Locations$Agents$Testcases$List, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1ListTestCasesResponse>): void;
        list(callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1ListTestCasesResponse>): void;
        /**
         * Updates the specified test case.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await dialogflow.projects.locations.agents.testCases.patch({
         *     // The unique identifier of the test case. TestCases.CreateTestCase will populate the name automatically. Otherwise use format: `projects//locations//agents/ /testCases/`.
         *     name: 'projects/my-project/locations/my-location/agents/my-agent/testCases/my-testCase',
         *     // Required. The mask to specify which fields should be updated. The `creationTime` and `lastTestResult` cannot be updated.
         *     updateMask: 'placeholder-value',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "creationTime": "my_creationTime",
         *       //   "displayName": "my_displayName",
         *       //   "lastTestResult": {},
         *       //   "name": "my_name",
         *       //   "notes": "my_notes",
         *       //   "tags": [],
         *       //   "testCaseConversationTurns": [],
         *       //   "testConfig": {}
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "creationTime": "my_creationTime",
         *   //   "displayName": "my_displayName",
         *   //   "lastTestResult": {},
         *   //   "name": "my_name",
         *   //   "notes": "my_notes",
         *   //   "tags": [],
         *   //   "testCaseConversationTurns": [],
         *   //   "testConfig": {}
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        patch(params: Params$Resource$Projects$Locations$Agents$Testcases$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Projects$Locations$Agents$Testcases$Patch, options?: MethodOptions): GaxiosPromise<Schema$GoogleCloudDialogflowCxV3beta1TestCase>;
        patch(params: Params$Resource$Projects$Locations$Agents$Testcases$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Projects$Locations$Agents$Testcases$Patch, options: MethodOptions | BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1TestCase>, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1TestCase>): void;
        patch(params: Params$Resource$Projects$Locations$Agents$Testcases$Patch, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1TestCase>): void;
        patch(callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1TestCase>): void;
        /**
         * Kicks off a test case run. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: RunTestCaseMetadata - `response`: RunTestCaseResponse
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await dialogflow.projects.locations.agents.testCases.run({
         *     // Required. Format of test case name to run: `projects//locations/ /agents//testCases/`.
         *     name: 'projects/my-project/locations/my-location/agents/my-agent/testCases/my-testCase',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "environment": "my_environment"
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "done": false,
         *   //   "error": {},
         *   //   "metadata": {},
         *   //   "name": "my_name",
         *   //   "response": {}
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        run(params: Params$Resource$Projects$Locations$Agents$Testcases$Run, options: StreamMethodOptions): GaxiosPromise<Readable>;
        run(params?: Params$Resource$Projects$Locations$Agents$Testcases$Run, options?: MethodOptions): GaxiosPromise<Schema$GoogleLongrunningOperation>;
        run(params: Params$Resource$Projects$Locations$Agents$Testcases$Run, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        run(params: Params$Resource$Projects$Locations$Agents$Testcases$Run, options: MethodOptions | BodyResponseCallback<Schema$GoogleLongrunningOperation>, callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>): void;
        run(params: Params$Resource$Projects$Locations$Agents$Testcases$Run, callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>): void;
        run(callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>): void;
    }
    export interface Params$Resource$Projects$Locations$Agents$Testcases$Batchdelete extends StandardParameters {
        /**
         * Required. The agent to delete test cases from. Format: `projects//locations//agents/`.
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleCloudDialogflowCxV3beta1BatchDeleteTestCasesRequest;
    }
    export interface Params$Resource$Projects$Locations$Agents$Testcases$Batchrun extends StandardParameters {
        /**
         * Required. Agent name. Format: `projects//locations//agents/ `.
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleCloudDialogflowCxV3beta1BatchRunTestCasesRequest;
    }
    export interface Params$Resource$Projects$Locations$Agents$Testcases$Calculatecoverage extends StandardParameters {
        /**
         * Required. The agent to calculate coverage for. Format: `projects//locations//agents/`.
         */
        agent?: string;
        /**
         * Required. The type of coverage requested.
         */
        type?: string;
    }
    export interface Params$Resource$Projects$Locations$Agents$Testcases$Create extends StandardParameters {
        /**
         * Required. The agent to create the test case for. Format: `projects//locations//agents/`.
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleCloudDialogflowCxV3beta1TestCase;
    }
    export interface Params$Resource$Projects$Locations$Agents$Testcases$Export extends StandardParameters {
        /**
         * Required. The agent where to export test cases from. Format: `projects//locations//agents/`.
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleCloudDialogflowCxV3beta1ExportTestCasesRequest;
    }
    export interface Params$Resource$Projects$Locations$Agents$Testcases$Get extends StandardParameters {
        /**
         * Required. The name of the testcase. Format: `projects//locations//agents//testCases/`.
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Agents$Testcases$Import extends StandardParameters {
        /**
         * Required. The agent to import test cases to. Format: `projects//locations//agents/`.
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleCloudDialogflowCxV3beta1ImportTestCasesRequest;
    }
    export interface Params$Resource$Projects$Locations$Agents$Testcases$List extends StandardParameters {
        /**
         * The maximum number of items to return in a single page. By default 20. Note that when TestCaseView = FULL, the maximum page size allowed is 20. When TestCaseView = BASIC, the maximum page size allowed is 500.
         */
        pageSize?: number;
        /**
         * The next_page_token value returned from a previous list request.
         */
        pageToken?: string;
        /**
         * Required. The agent to list all pages for. Format: `projects//locations//agents/`.
         */
        parent?: string;
        /**
         * Specifies whether response should include all fields or just the metadata.
         */
        view?: string;
    }
    export interface Params$Resource$Projects$Locations$Agents$Testcases$Patch extends StandardParameters {
        /**
         * The unique identifier of the test case. TestCases.CreateTestCase will populate the name automatically. Otherwise use format: `projects//locations//agents/ /testCases/`.
         */
        name?: string;
        /**
         * Required. The mask to specify which fields should be updated. The `creationTime` and `lastTestResult` cannot be updated.
         */
        updateMask?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleCloudDialogflowCxV3beta1TestCase;
    }
    export interface Params$Resource$Projects$Locations$Agents$Testcases$Run extends StandardParameters {
        /**
         * Required. Format of test case name to run: `projects//locations/ /agents//testCases/`.
         */
        name?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleCloudDialogflowCxV3beta1RunTestCaseRequest;
    }
    export class Resource$Projects$Locations$Agents$Testcases$Results {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Gets a test case result.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await dialogflow.projects.locations.agents.testCases.results.get({
         *     // Required. The name of the testcase. Format: `projects//locations//agents//testCases//results/`.
         *     name: 'projects/my-project/locations/my-location/agents/my-agent/testCases/my-testCase/results/my-result',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "conversationTurns": [],
         *   //   "environment": "my_environment",
         *   //   "name": "my_name",
         *   //   "testResult": "my_testResult",
         *   //   "testTime": "my_testTime"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Projects$Locations$Agents$Testcases$Results$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Projects$Locations$Agents$Testcases$Results$Get, options?: MethodOptions): GaxiosPromise<Schema$GoogleCloudDialogflowCxV3beta1TestCaseResult>;
        get(params: Params$Resource$Projects$Locations$Agents$Testcases$Results$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Projects$Locations$Agents$Testcases$Results$Get, options: MethodOptions | BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1TestCaseResult>, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1TestCaseResult>): void;
        get(params: Params$Resource$Projects$Locations$Agents$Testcases$Results$Get, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1TestCaseResult>): void;
        get(callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1TestCaseResult>): void;
        /**
         * Fetches a list of results for a given test case.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await dialogflow.projects.locations.agents.testCases.results.list(
         *     {
         *       // The filter expression used to filter test case results. See [API Filtering](https://aip.dev/160). The expression is case insensitive. Only 'AND' is supported for logical operators. The supported syntax is listed below in detail: [AND ] ... [AND latest] The supported fields and operators are: field operator `environment` `=`, `IN` (Use value `draft` for draft environment) `test_time` `\>`, `<` `latest` only returns the latest test result in all results for each test case. Examples: * "environment=draft AND latest" matches the latest test result for each test case in the draft environment. * "environment IN (e1,e2)" matches any test case results with an environment resource name of either "e1" or "e2". * "test_time \> 1602540713" matches any test case results with test time later than a unix timestamp in seconds 1602540713.
         *       filter: 'placeholder-value',
         *       // The maximum number of items to return in a single page. By default 100 and at most 1000.
         *       pageSize: 'placeholder-value',
         *       // The next_page_token value returned from a previous list request.
         *       pageToken: 'placeholder-value',
         *       // Required. The test case to list results for. Format: `projects//locations//agents// testCases/`. Specify a `-` as a wildcard for TestCase ID to list results across multiple test cases.
         *       parent:
         *         'projects/my-project/locations/my-location/agents/my-agent/testCases/my-testCase',
         *     }
         *   );
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "nextPageToken": "my_nextPageToken",
         *   //   "testCaseResults": []
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Projects$Locations$Agents$Testcases$Results$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Projects$Locations$Agents$Testcases$Results$List, options?: MethodOptions): GaxiosPromise<Schema$GoogleCloudDialogflowCxV3beta1ListTestCaseResultsResponse>;
        list(params: Params$Resource$Projects$Locations$Agents$Testcases$Results$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Projects$Locations$Agents$Testcases$Results$List, options: MethodOptions | BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1ListTestCaseResultsResponse>, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1ListTestCaseResultsResponse>): void;
        list(params: Params$Resource$Projects$Locations$Agents$Testcases$Results$List, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1ListTestCaseResultsResponse>): void;
        list(callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1ListTestCaseResultsResponse>): void;
    }
    export interface Params$Resource$Projects$Locations$Agents$Testcases$Results$Get extends StandardParameters {
        /**
         * Required. The name of the testcase. Format: `projects//locations//agents//testCases//results/`.
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Agents$Testcases$Results$List extends StandardParameters {
        /**
         * The filter expression used to filter test case results. See [API Filtering](https://aip.dev/160). The expression is case insensitive. Only 'AND' is supported for logical operators. The supported syntax is listed below in detail: [AND ] ... [AND latest] The supported fields and operators are: field operator `environment` `=`, `IN` (Use value `draft` for draft environment) `test_time` `\>`, `<` `latest` only returns the latest test result in all results for each test case. Examples: * "environment=draft AND latest" matches the latest test result for each test case in the draft environment. * "environment IN (e1,e2)" matches any test case results with an environment resource name of either "e1" or "e2". * "test_time \> 1602540713" matches any test case results with test time later than a unix timestamp in seconds 1602540713.
         */
        filter?: string;
        /**
         * The maximum number of items to return in a single page. By default 100 and at most 1000.
         */
        pageSize?: number;
        /**
         * The next_page_token value returned from a previous list request.
         */
        pageToken?: string;
        /**
         * Required. The test case to list results for. Format: `projects//locations//agents// testCases/`. Specify a `-` as a wildcard for TestCase ID to list results across multiple test cases.
         */
        parent?: string;
    }
    export class Resource$Projects$Locations$Agents$Webhooks {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Creates a webhook in the specified agent.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await dialogflow.projects.locations.agents.webhooks.create({
         *     // Required. The agent to create a webhook for. Format: `projects//locations//agents/`.
         *     parent: 'projects/my-project/locations/my-location/agents/my-agent',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "disabled": false,
         *       //   "displayName": "my_displayName",
         *       //   "genericWebService": {},
         *       //   "name": "my_name",
         *       //   "serviceDirectory": {},
         *       //   "timeout": "my_timeout"
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "disabled": false,
         *   //   "displayName": "my_displayName",
         *   //   "genericWebService": {},
         *   //   "name": "my_name",
         *   //   "serviceDirectory": {},
         *   //   "timeout": "my_timeout"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Projects$Locations$Agents$Webhooks$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Projects$Locations$Agents$Webhooks$Create, options?: MethodOptions): GaxiosPromise<Schema$GoogleCloudDialogflowCxV3beta1Webhook>;
        create(params: Params$Resource$Projects$Locations$Agents$Webhooks$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Projects$Locations$Agents$Webhooks$Create, options: MethodOptions | BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Webhook>, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Webhook>): void;
        create(params: Params$Resource$Projects$Locations$Agents$Webhooks$Create, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Webhook>): void;
        create(callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Webhook>): void;
        /**
         * Deletes the specified webhook.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await dialogflow.projects.locations.agents.webhooks.delete({
         *     // This field has no effect for webhook not being used. For webhooks that are used by pages/flows/transition route groups: * If `force` is set to false, an error will be returned with message indicating the referenced resources. * If `force` is set to true, Dialogflow will remove the webhook, as well as any references to the webhook (i.e. Webhook and tagin fulfillments that point to this webhook will be removed).
         *     force: 'placeholder-value',
         *     // Required. The name of the webhook to delete. Format: `projects//locations//agents//webhooks/`.
         *     name: 'projects/my-project/locations/my-location/agents/my-agent/webhooks/my-webhook',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {}
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Projects$Locations$Agents$Webhooks$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Projects$Locations$Agents$Webhooks$Delete, options?: MethodOptions): GaxiosPromise<Schema$GoogleProtobufEmpty>;
        delete(params: Params$Resource$Projects$Locations$Agents$Webhooks$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Projects$Locations$Agents$Webhooks$Delete, options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>, callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
        delete(params: Params$Resource$Projects$Locations$Agents$Webhooks$Delete, callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
        delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
        /**
         * Retrieves the specified webhook.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await dialogflow.projects.locations.agents.webhooks.get({
         *     // Required. The name of the webhook. Format: `projects//locations//agents//webhooks/`.
         *     name: 'projects/my-project/locations/my-location/agents/my-agent/webhooks/my-webhook',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "disabled": false,
         *   //   "displayName": "my_displayName",
         *   //   "genericWebService": {},
         *   //   "name": "my_name",
         *   //   "serviceDirectory": {},
         *   //   "timeout": "my_timeout"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Projects$Locations$Agents$Webhooks$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Projects$Locations$Agents$Webhooks$Get, options?: MethodOptions): GaxiosPromise<Schema$GoogleCloudDialogflowCxV3beta1Webhook>;
        get(params: Params$Resource$Projects$Locations$Agents$Webhooks$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Projects$Locations$Agents$Webhooks$Get, options: MethodOptions | BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Webhook>, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Webhook>): void;
        get(params: Params$Resource$Projects$Locations$Agents$Webhooks$Get, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Webhook>): void;
        get(callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Webhook>): void;
        /**
         * Returns the list of all webhooks in the specified agent.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await dialogflow.projects.locations.agents.webhooks.list({
         *     // The maximum number of items to return in a single page. By default 100 and at most 1000.
         *     pageSize: 'placeholder-value',
         *     // The next_page_token value returned from a previous list request.
         *     pageToken: 'placeholder-value',
         *     // Required. The agent to list all webhooks for. Format: `projects//locations//agents/`.
         *     parent: 'projects/my-project/locations/my-location/agents/my-agent',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "nextPageToken": "my_nextPageToken",
         *   //   "webhooks": []
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Projects$Locations$Agents$Webhooks$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Projects$Locations$Agents$Webhooks$List, options?: MethodOptions): GaxiosPromise<Schema$GoogleCloudDialogflowCxV3beta1ListWebhooksResponse>;
        list(params: Params$Resource$Projects$Locations$Agents$Webhooks$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Projects$Locations$Agents$Webhooks$List, options: MethodOptions | BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1ListWebhooksResponse>, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1ListWebhooksResponse>): void;
        list(params: Params$Resource$Projects$Locations$Agents$Webhooks$List, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1ListWebhooksResponse>): void;
        list(callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1ListWebhooksResponse>): void;
        /**
         * Updates the specified webhook.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await dialogflow.projects.locations.agents.webhooks.patch({
         *     // The unique identifier of the webhook. Required for the Webhooks.UpdateWebhook method. Webhooks.CreateWebhook populates the name automatically. Format: `projects//locations//agents//webhooks/`.
         *     name: 'projects/my-project/locations/my-location/agents/my-agent/webhooks/my-webhook',
         *     // The mask to control which fields get updated. If the mask is not present, all fields will be updated.
         *     updateMask: 'placeholder-value',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "disabled": false,
         *       //   "displayName": "my_displayName",
         *       //   "genericWebService": {},
         *       //   "name": "my_name",
         *       //   "serviceDirectory": {},
         *       //   "timeout": "my_timeout"
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "disabled": false,
         *   //   "displayName": "my_displayName",
         *   //   "genericWebService": {},
         *   //   "name": "my_name",
         *   //   "serviceDirectory": {},
         *   //   "timeout": "my_timeout"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        patch(params: Params$Resource$Projects$Locations$Agents$Webhooks$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Projects$Locations$Agents$Webhooks$Patch, options?: MethodOptions): GaxiosPromise<Schema$GoogleCloudDialogflowCxV3beta1Webhook>;
        patch(params: Params$Resource$Projects$Locations$Agents$Webhooks$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Projects$Locations$Agents$Webhooks$Patch, options: MethodOptions | BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Webhook>, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Webhook>): void;
        patch(params: Params$Resource$Projects$Locations$Agents$Webhooks$Patch, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Webhook>): void;
        patch(callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1Webhook>): void;
    }
    export interface Params$Resource$Projects$Locations$Agents$Webhooks$Create extends StandardParameters {
        /**
         * Required. The agent to create a webhook for. Format: `projects//locations//agents/`.
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleCloudDialogflowCxV3beta1Webhook;
    }
    export interface Params$Resource$Projects$Locations$Agents$Webhooks$Delete extends StandardParameters {
        /**
         * This field has no effect for webhook not being used. For webhooks that are used by pages/flows/transition route groups: * If `force` is set to false, an error will be returned with message indicating the referenced resources. * If `force` is set to true, Dialogflow will remove the webhook, as well as any references to the webhook (i.e. Webhook and tagin fulfillments that point to this webhook will be removed).
         */
        force?: boolean;
        /**
         * Required. The name of the webhook to delete. Format: `projects//locations//agents//webhooks/`.
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Agents$Webhooks$Get extends StandardParameters {
        /**
         * Required. The name of the webhook. Format: `projects//locations//agents//webhooks/`.
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Agents$Webhooks$List extends StandardParameters {
        /**
         * The maximum number of items to return in a single page. By default 100 and at most 1000.
         */
        pageSize?: number;
        /**
         * The next_page_token value returned from a previous list request.
         */
        pageToken?: string;
        /**
         * Required. The agent to list all webhooks for. Format: `projects//locations//agents/`.
         */
        parent?: string;
    }
    export interface Params$Resource$Projects$Locations$Agents$Webhooks$Patch extends StandardParameters {
        /**
         * The unique identifier of the webhook. Required for the Webhooks.UpdateWebhook method. Webhooks.CreateWebhook populates the name automatically. Format: `projects//locations//agents//webhooks/`.
         */
        name?: string;
        /**
         * The mask to control which fields get updated. If the mask is not present, all fields will be updated.
         */
        updateMask?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleCloudDialogflowCxV3beta1Webhook;
    }
    export class Resource$Projects$Locations$Operations {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await dialogflow.projects.locations.operations.cancel({
         *     // The name of the operation resource to be cancelled.
         *     name: 'projects/my-project/locations/my-location/operations/my-operation',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {}
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        cancel(params: Params$Resource$Projects$Locations$Operations$Cancel, options: StreamMethodOptions): GaxiosPromise<Readable>;
        cancel(params?: Params$Resource$Projects$Locations$Operations$Cancel, options?: MethodOptions): GaxiosPromise<Schema$GoogleProtobufEmpty>;
        cancel(params: Params$Resource$Projects$Locations$Operations$Cancel, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        cancel(params: Params$Resource$Projects$Locations$Operations$Cancel, options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>, callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
        cancel(params: Params$Resource$Projects$Locations$Operations$Cancel, callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
        cancel(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
        /**
         * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await dialogflow.projects.locations.operations.get({
         *     // The name of the operation resource.
         *     name: 'projects/my-project/locations/my-location/operations/my-operation',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "done": false,
         *   //   "error": {},
         *   //   "metadata": {},
         *   //   "name": "my_name",
         *   //   "response": {}
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Projects$Locations$Operations$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Projects$Locations$Operations$Get, options?: MethodOptions): GaxiosPromise<Schema$GoogleLongrunningOperation>;
        get(params: Params$Resource$Projects$Locations$Operations$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Projects$Locations$Operations$Get, options: MethodOptions | BodyResponseCallback<Schema$GoogleLongrunningOperation>, callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>): void;
        get(params: Params$Resource$Projects$Locations$Operations$Get, callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>): void;
        get(callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>): void;
        /**
         * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/x/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/x\}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await dialogflow.projects.locations.operations.list({
         *     // The standard list filter.
         *     filter: 'placeholder-value',
         *     // The name of the operation's parent resource.
         *     name: 'projects/my-project/locations/my-location',
         *     // The standard list page size.
         *     pageSize: 'placeholder-value',
         *     // The standard list page token.
         *     pageToken: 'placeholder-value',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "nextPageToken": "my_nextPageToken",
         *   //   "operations": []
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Projects$Locations$Operations$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Projects$Locations$Operations$List, options?: MethodOptions): GaxiosPromise<Schema$GoogleLongrunningListOperationsResponse>;
        list(params: Params$Resource$Projects$Locations$Operations$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Projects$Locations$Operations$List, options: MethodOptions | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>, callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>): void;
        list(params: Params$Resource$Projects$Locations$Operations$List, callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>): void;
        list(callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>): void;
    }
    export interface Params$Resource$Projects$Locations$Operations$Cancel extends StandardParameters {
        /**
         * The name of the operation resource to be cancelled.
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Operations$Get extends StandardParameters {
        /**
         * The name of the operation resource.
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Operations$List extends StandardParameters {
        /**
         * The standard list filter.
         */
        filter?: string;
        /**
         * The name of the operation's parent resource.
         */
        name?: string;
        /**
         * The standard list page size.
         */
        pageSize?: number;
        /**
         * The standard list page token.
         */
        pageToken?: string;
    }
    export class Resource$Projects$Locations$Securitysettings {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Create security settings in the specified location.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await dialogflow.projects.locations.securitySettings.create({
         *     // Required. The location to create an SecuritySettings for. Format: `projects//locations/`.
         *     parent: 'projects/my-project/locations/my-location',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "deidentifyTemplate": "my_deidentifyTemplate",
         *       //   "displayName": "my_displayName",
         *       //   "insightsExportSettings": {},
         *       //   "inspectTemplate": "my_inspectTemplate",
         *       //   "name": "my_name",
         *       //   "purgeDataTypes": [],
         *       //   "redactionScope": "my_redactionScope",
         *       //   "redactionStrategy": "my_redactionStrategy",
         *       //   "retentionWindowDays": 0
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "deidentifyTemplate": "my_deidentifyTemplate",
         *   //   "displayName": "my_displayName",
         *   //   "insightsExportSettings": {},
         *   //   "inspectTemplate": "my_inspectTemplate",
         *   //   "name": "my_name",
         *   //   "purgeDataTypes": [],
         *   //   "redactionScope": "my_redactionScope",
         *   //   "redactionStrategy": "my_redactionStrategy",
         *   //   "retentionWindowDays": 0
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Projects$Locations$Securitysettings$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Projects$Locations$Securitysettings$Create, options?: MethodOptions): GaxiosPromise<Schema$GoogleCloudDialogflowCxV3beta1SecuritySettings>;
        create(params: Params$Resource$Projects$Locations$Securitysettings$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Projects$Locations$Securitysettings$Create, options: MethodOptions | BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1SecuritySettings>, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1SecuritySettings>): void;
        create(params: Params$Resource$Projects$Locations$Securitysettings$Create, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1SecuritySettings>): void;
        create(callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1SecuritySettings>): void;
        /**
         * Deletes the specified SecuritySettings.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await dialogflow.projects.locations.securitySettings.delete({
         *     // Required. The name of the SecuritySettings to delete. Format: `projects//locations//securitySettings/`.
         *     name: 'projects/my-project/locations/my-location/securitySettings/my-securitySetting',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {}
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Projects$Locations$Securitysettings$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Projects$Locations$Securitysettings$Delete, options?: MethodOptions): GaxiosPromise<Schema$GoogleProtobufEmpty>;
        delete(params: Params$Resource$Projects$Locations$Securitysettings$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Projects$Locations$Securitysettings$Delete, options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>, callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
        delete(params: Params$Resource$Projects$Locations$Securitysettings$Delete, callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
        delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
        /**
         * Retrieves the specified SecuritySettings. The returned settings may be stale by up to 1 minute.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await dialogflow.projects.locations.securitySettings.get({
         *     // Required. Resource name of the settings. Format: `projects//locations//securitySettings/`.
         *     name: 'projects/my-project/locations/my-location/securitySettings/my-securitySetting',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "deidentifyTemplate": "my_deidentifyTemplate",
         *   //   "displayName": "my_displayName",
         *   //   "insightsExportSettings": {},
         *   //   "inspectTemplate": "my_inspectTemplate",
         *   //   "name": "my_name",
         *   //   "purgeDataTypes": [],
         *   //   "redactionScope": "my_redactionScope",
         *   //   "redactionStrategy": "my_redactionStrategy",
         *   //   "retentionWindowDays": 0
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Projects$Locations$Securitysettings$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Projects$Locations$Securitysettings$Get, options?: MethodOptions): GaxiosPromise<Schema$GoogleCloudDialogflowCxV3beta1SecuritySettings>;
        get(params: Params$Resource$Projects$Locations$Securitysettings$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Projects$Locations$Securitysettings$Get, options: MethodOptions | BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1SecuritySettings>, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1SecuritySettings>): void;
        get(params: Params$Resource$Projects$Locations$Securitysettings$Get, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1SecuritySettings>): void;
        get(callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1SecuritySettings>): void;
        /**
         * Returns the list of all security settings in the specified location.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await dialogflow.projects.locations.securitySettings.list({
         *     // The maximum number of items to return in a single page. By default 20 and at most 100.
         *     pageSize: 'placeholder-value',
         *     // The next_page_token value returned from a previous list request.
         *     pageToken: 'placeholder-value',
         *     // Required. The location to list all security settings for. Format: `projects//locations/`.
         *     parent: 'projects/my-project/locations/my-location',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "nextPageToken": "my_nextPageToken",
         *   //   "securitySettings": []
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Projects$Locations$Securitysettings$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Projects$Locations$Securitysettings$List, options?: MethodOptions): GaxiosPromise<Schema$GoogleCloudDialogflowCxV3beta1ListSecuritySettingsResponse>;
        list(params: Params$Resource$Projects$Locations$Securitysettings$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Projects$Locations$Securitysettings$List, options: MethodOptions | BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1ListSecuritySettingsResponse>, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1ListSecuritySettingsResponse>): void;
        list(params: Params$Resource$Projects$Locations$Securitysettings$List, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1ListSecuritySettingsResponse>): void;
        list(callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1ListSecuritySettingsResponse>): void;
        /**
         * Updates the specified SecuritySettings.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await dialogflow.projects.locations.securitySettings.patch({
         *     // Resource name of the settings. Required for the SecuritySettingsService.UpdateSecuritySettings method. SecuritySettingsService.CreateSecuritySettings populates the name automatically. Format: `projects//locations//securitySettings/`.
         *     name: 'projects/my-project/locations/my-location/securitySettings/my-securitySetting',
         *     // Required. The mask to control which fields get updated. If the mask is not present, all fields will be updated.
         *     updateMask: 'placeholder-value',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "deidentifyTemplate": "my_deidentifyTemplate",
         *       //   "displayName": "my_displayName",
         *       //   "insightsExportSettings": {},
         *       //   "inspectTemplate": "my_inspectTemplate",
         *       //   "name": "my_name",
         *       //   "purgeDataTypes": [],
         *       //   "redactionScope": "my_redactionScope",
         *       //   "redactionStrategy": "my_redactionStrategy",
         *       //   "retentionWindowDays": 0
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "deidentifyTemplate": "my_deidentifyTemplate",
         *   //   "displayName": "my_displayName",
         *   //   "insightsExportSettings": {},
         *   //   "inspectTemplate": "my_inspectTemplate",
         *   //   "name": "my_name",
         *   //   "purgeDataTypes": [],
         *   //   "redactionScope": "my_redactionScope",
         *   //   "redactionStrategy": "my_redactionStrategy",
         *   //   "retentionWindowDays": 0
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        patch(params: Params$Resource$Projects$Locations$Securitysettings$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Projects$Locations$Securitysettings$Patch, options?: MethodOptions): GaxiosPromise<Schema$GoogleCloudDialogflowCxV3beta1SecuritySettings>;
        patch(params: Params$Resource$Projects$Locations$Securitysettings$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Projects$Locations$Securitysettings$Patch, options: MethodOptions | BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1SecuritySettings>, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1SecuritySettings>): void;
        patch(params: Params$Resource$Projects$Locations$Securitysettings$Patch, callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1SecuritySettings>): void;
        patch(callback: BodyResponseCallback<Schema$GoogleCloudDialogflowCxV3beta1SecuritySettings>): void;
    }
    export interface Params$Resource$Projects$Locations$Securitysettings$Create extends StandardParameters {
        /**
         * Required. The location to create an SecuritySettings for. Format: `projects//locations/`.
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleCloudDialogflowCxV3beta1SecuritySettings;
    }
    export interface Params$Resource$Projects$Locations$Securitysettings$Delete extends StandardParameters {
        /**
         * Required. The name of the SecuritySettings to delete. Format: `projects//locations//securitySettings/`.
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Securitysettings$Get extends StandardParameters {
        /**
         * Required. Resource name of the settings. Format: `projects//locations//securitySettings/`.
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Securitysettings$List extends StandardParameters {
        /**
         * The maximum number of items to return in a single page. By default 20 and at most 100.
         */
        pageSize?: number;
        /**
         * The next_page_token value returned from a previous list request.
         */
        pageToken?: string;
        /**
         * Required. The location to list all security settings for. Format: `projects//locations/`.
         */
        parent?: string;
    }
    export interface Params$Resource$Projects$Locations$Securitysettings$Patch extends StandardParameters {
        /**
         * Resource name of the settings. Required for the SecuritySettingsService.UpdateSecuritySettings method. SecuritySettingsService.CreateSecuritySettings populates the name automatically. Format: `projects//locations//securitySettings/`.
         */
        name?: string;
        /**
         * Required. The mask to control which fields get updated. If the mask is not present, all fields will be updated.
         */
        updateMask?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleCloudDialogflowCxV3beta1SecuritySettings;
    }
    export class Resource$Projects$Operations {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await dialogflow.projects.operations.cancel({
         *     // The name of the operation resource to be cancelled.
         *     name: 'projects/my-project/operations/my-operation',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {}
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        cancel(params: Params$Resource$Projects$Operations$Cancel, options: StreamMethodOptions): GaxiosPromise<Readable>;
        cancel(params?: Params$Resource$Projects$Operations$Cancel, options?: MethodOptions): GaxiosPromise<Schema$GoogleProtobufEmpty>;
        cancel(params: Params$Resource$Projects$Operations$Cancel, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        cancel(params: Params$Resource$Projects$Operations$Cancel, options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>, callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
        cancel(params: Params$Resource$Projects$Operations$Cancel, callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
        cancel(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
        /**
         * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await dialogflow.projects.operations.get({
         *     // The name of the operation resource.
         *     name: 'projects/my-project/operations/my-operation',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "done": false,
         *   //   "error": {},
         *   //   "metadata": {},
         *   //   "name": "my_name",
         *   //   "response": {}
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Projects$Operations$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Projects$Operations$Get, options?: MethodOptions): GaxiosPromise<Schema$GoogleLongrunningOperation>;
        get(params: Params$Resource$Projects$Operations$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Projects$Operations$Get, options: MethodOptions | BodyResponseCallback<Schema$GoogleLongrunningOperation>, callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>): void;
        get(params: Params$Resource$Projects$Operations$Get, callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>): void;
        get(callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>): void;
        /**
         * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/x/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/x\}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const dialogflow = google.dialogflow('v3beta1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/dialogflow',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await dialogflow.projects.operations.list({
         *     // The standard list filter.
         *     filter: 'placeholder-value',
         *     // The name of the operation's parent resource.
         *     name: 'projects/my-project',
         *     // The standard list page size.
         *     pageSize: 'placeholder-value',
         *     // The standard list page token.
         *     pageToken: 'placeholder-value',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "nextPageToken": "my_nextPageToken",
         *   //   "operations": []
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Projects$Operations$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Projects$Operations$List, options?: MethodOptions): GaxiosPromise<Schema$GoogleLongrunningListOperationsResponse>;
        list(params: Params$Resource$Projects$Operations$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Projects$Operations$List, options: MethodOptions | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>, callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>): void;
        list(params: Params$Resource$Projects$Operations$List, callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>): void;
        list(callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>): void;
    }
    export interface Params$Resource$Projects$Operations$Cancel extends StandardParameters {
        /**
         * The name of the operation resource to be cancelled.
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Operations$Get extends StandardParameters {
        /**
         * The name of the operation resource.
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Operations$List extends StandardParameters {
        /**
         * The standard list filter.
         */
        filter?: string;
        /**
         * The name of the operation's parent resource.
         */
        name?: string;
        /**
         * The standard list page size.
         */
        pageSize?: number;
        /**
         * The standard list page token.
         */
        pageToken?: string;
    }
    export {};
}