/// <reference types="node" />
import { OAuth2Client, JWT, Compute, UserRefreshClient, BaseExternalAccountClient, GaxiosPromise, GoogleConfigurable, MethodOptions, StreamMethodOptions, GlobalOptions, GoogleAuth, BodyResponseCallback, APIRequestContext } from 'googleapis-common';
import { Readable } from 'stream';
export declare namespace firebasestorage_v1beta {
    export interface Options extends GlobalOptions {
        version: 'v1beta';
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
     * Cloud Storage for Firebase API
     *
     * The Cloud Storage for Firebase API enables programmatic management of Cloud Storage buckets for use in Firebase projects
     *
     * @example
     * ```js
     * const {google} = require('googleapis');
     * const firebasestorage = google.firebasestorage('v1beta');
     * ```
     */
    export class Firebasestorage {
        context: APIRequestContext;
        projects: Resource$Projects;
        constructor(options: GlobalOptions, google?: GoogleConfigurable);
    }
    /**
     * The request used to link a Google Cloud Storage bucket to a Firebase project.
     */
    export interface Schema$AddFirebaseRequest {
    }
    /**
     * A storage bucket and its relation to a parent Firebase project.
     */
    export interface Schema$Bucket {
        /**
         * Output only. Location of the storage bucket.
         */
        location?: string | null;
        /**
         * Resource name of the bucket.
         */
        name?: string | null;
        /**
         * Output only. Represents whether a bucket is being moved to a new location, in which case reconciling is set to true.
         */
        reconciling?: boolean | null;
    }
    /**
     * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \} The JSON representation for `Empty` is empty JSON object `{\}`.
     */
    export interface Schema$Empty {
    }
    /**
     * Metadata for MigrateLocationDestructively LRO.
     */
    export interface Schema$GoogleFirebaseStorageControlplaneV1alphaMigrateLocationDestructivelyMetadata {
        /**
         * The time the LRO was created.
         */
        createTime?: string | null;
        /**
         * The time the LRO was last updated.
         */
        lastUpdateTime?: string | null;
        /**
         * The current state of the migration.
         */
        state?: string | null;
    }
    /**
     * Metadata for MigrateLocationDestructively LRO.
     */
    export interface Schema$GoogleFirebaseStorageControlplaneV1betaMigrateLocationDestructivelyMetadata {
        /**
         * The time the LRO was created.
         */
        createTime?: string | null;
        /**
         * The time the LRO was last updated.
         */
        lastUpdateTime?: string | null;
        /**
         * The current state of the migration.
         */
        state?: string | null;
    }
    /**
     * The response returned by `ListBuckets`.
     */
    export interface Schema$ListBucketsResponse {
        /**
         * The list of linked buckets.
         */
        buckets?: Schema$Bucket[];
        /**
         * A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
         */
        nextPageToken?: string | null;
    }
    /**
     * The request used to unlink a Google Cloud Storage bucket from a Firebase project.
     */
    export interface Schema$RemoveFirebaseRequest {
    }
    export class Resource$Projects {
        context: APIRequestContext;
        buckets: Resource$Projects$Buckets;
        constructor(context: APIRequestContext);
    }
    export class Resource$Projects$Buckets {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Links a Google Cloud Storage bucket to a Firebase project.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/firebasestorage.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const firebasestorage = google.firebasestorage('v1beta');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/firebase',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await firebasestorage.projects.buckets.addFirebase({
         *     // Required. Resource name of the bucket, mirrors the ID of the underlying Google Cloud Storage bucket, `projects/{project_number\}/buckets/{bucket_id\}`.
         *     bucket: 'projects/my-project/buckets/my-bucket',
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
         *   //   "location": "my_location",
         *   //   "name": "my_name",
         *   //   "reconciling": false
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
        addFirebase(params: Params$Resource$Projects$Buckets$Addfirebase, options: StreamMethodOptions): GaxiosPromise<Readable>;
        addFirebase(params?: Params$Resource$Projects$Buckets$Addfirebase, options?: MethodOptions): GaxiosPromise<Schema$Bucket>;
        addFirebase(params: Params$Resource$Projects$Buckets$Addfirebase, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        addFirebase(params: Params$Resource$Projects$Buckets$Addfirebase, options: MethodOptions | BodyResponseCallback<Schema$Bucket>, callback: BodyResponseCallback<Schema$Bucket>): void;
        addFirebase(params: Params$Resource$Projects$Buckets$Addfirebase, callback: BodyResponseCallback<Schema$Bucket>): void;
        addFirebase(callback: BodyResponseCallback<Schema$Bucket>): void;
        /**
         * Gets a single linked storage bucket.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/firebasestorage.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const firebasestorage = google.firebasestorage('v1beta');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/firebase',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await firebasestorage.projects.buckets.get({
         *     // Required. Resource name of the bucket, mirrors the ID of the underlying Google Cloud Storage bucket, `projects/{project_number\}/buckets/{bucket_id\}`.
         *     name: 'projects/my-project/buckets/my-bucket',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "location": "my_location",
         *   //   "name": "my_name",
         *   //   "reconciling": false
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
        get(params: Params$Resource$Projects$Buckets$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Projects$Buckets$Get, options?: MethodOptions): GaxiosPromise<Schema$Bucket>;
        get(params: Params$Resource$Projects$Buckets$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Projects$Buckets$Get, options: MethodOptions | BodyResponseCallback<Schema$Bucket>, callback: BodyResponseCallback<Schema$Bucket>): void;
        get(params: Params$Resource$Projects$Buckets$Get, callback: BodyResponseCallback<Schema$Bucket>): void;
        get(callback: BodyResponseCallback<Schema$Bucket>): void;
        /**
         * Lists the linked storage buckets for a project.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/firebasestorage.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const firebasestorage = google.firebasestorage('v1beta');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/firebase',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await firebasestorage.projects.buckets.list({
         *     // The maximum number of buckets to return. If not set, the server will use a reasonable default.
         *     pageSize: 'placeholder-value',
         *     // A page token, received from a previous `ListBuckets` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListBuckets` must match the call that provided the page token.
         *     pageToken: 'placeholder-value',
         *     // Required. Resource name of the parent Firebase project, `projects/{project_number\}`.
         *     parent: 'projects/my-project',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "buckets": [],
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
        list(params: Params$Resource$Projects$Buckets$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Projects$Buckets$List, options?: MethodOptions): GaxiosPromise<Schema$ListBucketsResponse>;
        list(params: Params$Resource$Projects$Buckets$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Projects$Buckets$List, options: MethodOptions | BodyResponseCallback<Schema$ListBucketsResponse>, callback: BodyResponseCallback<Schema$ListBucketsResponse>): void;
        list(params: Params$Resource$Projects$Buckets$List, callback: BodyResponseCallback<Schema$ListBucketsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListBucketsResponse>): void;
        /**
         * Unlinks a linked Google Cloud Storage bucket from a Firebase project.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/firebasestorage.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const firebasestorage = google.firebasestorage('v1beta');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/firebase',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await firebasestorage.projects.buckets.removeFirebase({
         *     // Required. Resource name of the bucket, mirrors the ID of the underlying Google Cloud Storage bucket, `projects/{project_number\}/buckets/{bucket_id\}`.
         *     bucket: 'projects/my-project/buckets/my-bucket',
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
        removeFirebase(params: Params$Resource$Projects$Buckets$Removefirebase, options: StreamMethodOptions): GaxiosPromise<Readable>;
        removeFirebase(params?: Params$Resource$Projects$Buckets$Removefirebase, options?: MethodOptions): GaxiosPromise<Schema$Empty>;
        removeFirebase(params: Params$Resource$Projects$Buckets$Removefirebase, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        removeFirebase(params: Params$Resource$Projects$Buckets$Removefirebase, options: MethodOptions | BodyResponseCallback<Schema$Empty>, callback: BodyResponseCallback<Schema$Empty>): void;
        removeFirebase(params: Params$Resource$Projects$Buckets$Removefirebase, callback: BodyResponseCallback<Schema$Empty>): void;
        removeFirebase(callback: BodyResponseCallback<Schema$Empty>): void;
    }
    export interface Params$Resource$Projects$Buckets$Addfirebase extends StandardParameters {
        /**
         * Required. Resource name of the bucket, mirrors the ID of the underlying Google Cloud Storage bucket, `projects/{project_number\}/buckets/{bucket_id\}`.
         */
        bucket?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$AddFirebaseRequest;
    }
    export interface Params$Resource$Projects$Buckets$Get extends StandardParameters {
        /**
         * Required. Resource name of the bucket, mirrors the ID of the underlying Google Cloud Storage bucket, `projects/{project_number\}/buckets/{bucket_id\}`.
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Buckets$List extends StandardParameters {
        /**
         * The maximum number of buckets to return. If not set, the server will use a reasonable default.
         */
        pageSize?: number;
        /**
         * A page token, received from a previous `ListBuckets` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListBuckets` must match the call that provided the page token.
         */
        pageToken?: string;
        /**
         * Required. Resource name of the parent Firebase project, `projects/{project_number\}`.
         */
        parent?: string;
    }
    export interface Params$Resource$Projects$Buckets$Removefirebase extends StandardParameters {
        /**
         * Required. Resource name of the bucket, mirrors the ID of the underlying Google Cloud Storage bucket, `projects/{project_number\}/buckets/{bucket_id\}`.
         */
        bucket?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$RemoveFirebaseRequest;
    }
    export {};
}
