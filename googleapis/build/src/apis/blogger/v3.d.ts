/// <reference types="node" />
import { OAuth2Client, JWT, Compute, UserRefreshClient, BaseExternalAccountClient, GaxiosPromise, GoogleConfigurable, MethodOptions, StreamMethodOptions, GlobalOptions, GoogleAuth, BodyResponseCallback, APIRequestContext } from 'googleapis-common';
import { Readable } from 'stream';
export declare namespace blogger_v3 {
    export interface Options extends GlobalOptions {
        version: 'v3';
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
     * Blogger API v3
     *
     * The Blogger API provides access to posts, comments and pages of a Blogger blog.
     *
     * @example
     * ```js
     * const {google} = require('googleapis');
     * const blogger = google.blogger('v3');
     * ```
     */
    export class Blogger {
        context: APIRequestContext;
        blogs: Resource$Blogs;
        blogUserInfos: Resource$Bloguserinfos;
        comments: Resource$Comments;
        pages: Resource$Pages;
        pageViews: Resource$Pageviews;
        posts: Resource$Posts;
        postUserInfos: Resource$Postuserinfos;
        users: Resource$Users;
        constructor(options: GlobalOptions, google?: GoogleConfigurable);
    }
    export interface Schema$Blog {
        /**
         * The JSON custom meta-data for the Blog.
         */
        customMetaData?: string | null;
        /**
         * The description of this blog. This is displayed underneath the title.
         */
        description?: string | null;
        /**
         * The identifier for this resource.
         */
        id?: string | null;
        /**
         * The kind of this entry. Always blogger#blog.
         */
        kind?: string | null;
        /**
         * The locale this Blog is set to.
         */
        locale?: {
            country?: string;
            language?: string;
            variant?: string;
        } | null;
        /**
         * The name of this blog. This is displayed as the title.
         */
        name?: string | null;
        /**
         * The container of pages in this blog.
         */
        pages?: {
            selfLink?: string;
            totalItems?: number;
        } | null;
        /**
         * The container of posts in this blog.
         */
        posts?: {
            items?: Schema$Post[];
            selfLink?: string;
            totalItems?: number;
        } | null;
        /**
         * RFC 3339 date-time when this blog was published.
         */
        published?: string | null;
        /**
         * The API REST URL to fetch this resource from.
         */
        selfLink?: string | null;
        /**
         * The status of the blog.
         */
        status?: string | null;
        /**
         * RFC 3339 date-time when this blog was last updated.
         */
        updated?: string | null;
        /**
         * The URL where this blog is published.
         */
        url?: string | null;
    }
    export interface Schema$BlogList {
        /**
         * Admin level list of blog per-user information.
         */
        blogUserInfos?: Schema$BlogUserInfo[];
        /**
         * The list of Blogs this user has Authorship or Admin rights over.
         */
        items?: Schema$Blog[];
        /**
         * The kind of this entity. Always blogger#blogList.
         */
        kind?: string | null;
    }
    export interface Schema$BlogPerUserInfo {
        /**
         * ID of the Blog resource.
         */
        blogId?: string | null;
        /**
         * True if the user has Admin level access to the blog.
         */
        hasAdminAccess?: boolean | null;
        /**
         * The kind of this entity. Always blogger#blogPerUserInfo.
         */
        kind?: string | null;
        /**
         * The Photo Album Key for the user when adding photos to the blog.
         */
        photosAlbumKey?: string | null;
        /**
         * Access permissions that the user has for the blog (ADMIN, AUTHOR, or READER).
         */
        role?: string | null;
        /**
         * ID of the User.
         */
        userId?: string | null;
    }
    export interface Schema$BlogUserInfo {
        /**
         * The Blog resource.
         */
        blog?: Schema$Blog;
        /**
         * Information about a User for the Blog.
         */
        blog_user_info?: Schema$BlogPerUserInfo;
        /**
         * The kind of this entity. Always blogger#blogUserInfo.
         */
        kind?: string | null;
    }
    export interface Schema$Comment {
        /**
         * The author of this Comment.
         */
        author?: {
            displayName?: string;
            id?: string;
            image?: {
                url?: string;
            };
            url?: string;
        } | null;
        /**
         * Data about the blog containing this comment.
         */
        blog?: {
            id?: string;
        } | null;
        /**
         * The actual content of the comment. May include HTML markup.
         */
        content?: string | null;
        /**
         * The identifier for this resource.
         */
        id?: string | null;
        /**
         * Data about the comment this is in reply to.
         */
        inReplyTo?: {
            id?: string;
        } | null;
        /**
         * The kind of this entry. Always blogger#comment.
         */
        kind?: string | null;
        /**
         * Data about the post containing this comment.
         */
        post?: {
            id?: string;
        } | null;
        /**
         * RFC 3339 date-time when this comment was published.
         */
        published?: string | null;
        /**
         * The API REST URL to fetch this resource from.
         */
        selfLink?: string | null;
        /**
         * The status of the comment (only populated for admin users).
         */
        status?: string | null;
        /**
         * RFC 3339 date-time when this comment was last updated.
         */
        updated?: string | null;
    }
    export interface Schema$CommentList {
        /**
         * Etag of the response.
         */
        etag?: string | null;
        /**
         * The List of Comments for a Post.
         */
        items?: Schema$Comment[];
        /**
         * The kind of this entry. Always blogger#commentList.
         */
        kind?: string | null;
        /**
         * Pagination token to fetch the next page, if one exists.
         */
        nextPageToken?: string | null;
        /**
         * Pagination token to fetch the previous page, if one exists.
         */
        prevPageToken?: string | null;
    }
    export interface Schema$Page {
        /**
         * The author of this Page.
         */
        author?: {
            displayName?: string;
            id?: string;
            image?: {
                url?: string;
            };
            url?: string;
        } | null;
        /**
         * Data about the blog containing this Page.
         */
        blog?: {
            id?: string;
        } | null;
        /**
         * The body content of this Page, in HTML.
         */
        content?: string | null;
        /**
         * Etag of the resource.
         */
        etag?: string | null;
        /**
         * The identifier for this resource.
         */
        id?: string | null;
        /**
         * The kind of this entity. Always blogger#page.
         */
        kind?: string | null;
        /**
         * RFC 3339 date-time when this Page was published.
         */
        published?: string | null;
        /**
         * The API REST URL to fetch this resource from.
         */
        selfLink?: string | null;
        /**
         * The status of the page for admin resources (either LIVE or DRAFT).
         */
        status?: string | null;
        /**
         * The title of this entity. This is the name displayed in the Admin user interface.
         */
        title?: string | null;
        /**
         * RFC 3339 date-time when this Page was last updated.
         */
        updated?: string | null;
        /**
         * The URL that this Page is displayed at.
         */
        url?: string | null;
    }
    export interface Schema$PageList {
        /**
         * Etag of the response.
         */
        etag?: string | null;
        /**
         * The list of Pages for a Blog.
         */
        items?: Schema$Page[];
        /**
         * The kind of this entity. Always blogger#pageList.
         */
        kind?: string | null;
        /**
         * Pagination token to fetch the next page, if one exists.
         */
        nextPageToken?: string | null;
    }
    export interface Schema$Pageviews {
        /**
         * Blog Id.
         */
        blogId?: string | null;
        /**
         * The container of posts in this blog.
         */
        counts?: Array<{
            count?: string;
            timeRange?: string;
        }> | null;
        /**
         * The kind of this entry. Always blogger#page_views.
         */
        kind?: string | null;
    }
    export interface Schema$Post {
        /**
         * The author of this Post.
         */
        author?: {
            displayName?: string;
            id?: string;
            image?: {
                url?: string;
            };
            url?: string;
        } | null;
        /**
         * Data about the blog containing this Post.
         */
        blog?: {
            id?: string;
        } | null;
        /**
         * The content of the Post. May contain HTML markup.
         */
        content?: string | null;
        /**
         * The JSON meta-data for the Post.
         */
        customMetaData?: string | null;
        /**
         * Etag of the resource.
         */
        etag?: string | null;
        /**
         * The identifier of this Post.
         */
        id?: string | null;
        /**
         * Display image for the Post.
         */
        images?: Array<{
            url?: string;
        }> | null;
        /**
         * The kind of this entity. Always blogger#post.
         */
        kind?: string | null;
        /**
         * The list of labels this Post was tagged with.
         */
        labels?: string[] | null;
        /**
         * The location for geotagged posts.
         */
        location?: {
            lat?: number;
            lng?: number;
            name?: string;
            span?: string;
        } | null;
        /**
         * RFC 3339 date-time when this Post was published.
         */
        published?: string | null;
        /**
         * Comment control and display setting for readers of this post.
         */
        readerComments?: string | null;
        /**
         * The container of comments on this Post.
         */
        replies?: {
            items?: Schema$Comment[];
            selfLink?: string;
            totalItems?: string;
        } | null;
        /**
         * The API REST URL to fetch this resource from.
         */
        selfLink?: string | null;
        /**
         * Status of the post. Only set for admin-level requests.
         */
        status?: string | null;
        /**
         * The title of the Post.
         */
        title?: string | null;
        /**
         * The title link URL, similar to atom's related link.
         */
        titleLink?: string | null;
        /**
         * RFC 3339 date-time when this Post was last updated.
         */
        updated?: string | null;
        /**
         * The URL where this Post is displayed.
         */
        url?: string | null;
    }
    export interface Schema$PostList {
        /**
         * Etag of the response.
         */
        etag?: string | null;
        /**
         * The list of Posts for this Blog.
         */
        items?: Schema$Post[];
        /**
         * The kind of this entity. Always blogger#postList.
         */
        kind?: string | null;
        /**
         * Pagination token to fetch the next page, if one exists.
         */
        nextPageToken?: string | null;
        /**
         * Pagination token to fetch the previous page, if one exists.
         */
        prevPageToken?: string | null;
    }
    export interface Schema$PostPerUserInfo {
        /**
         * ID of the Blog that the post resource belongs to.
         */
        blogId?: string | null;
        /**
         * True if the user has Author level access to the post.
         */
        hasEditAccess?: boolean | null;
        /**
         * The kind of this entity. Always blogger#postPerUserInfo.
         */
        kind?: string | null;
        /**
         * ID of the Post resource.
         */
        postId?: string | null;
        /**
         * ID of the User.
         */
        userId?: string | null;
    }
    export interface Schema$PostUserInfo {
        /**
         * The kind of this entity. Always blogger#postUserInfo.
         */
        kind?: string | null;
        /**
         * The Post resource.
         */
        post?: Schema$Post;
        /**
         * Information about a User for the Post.
         */
        post_user_info?: Schema$PostPerUserInfo;
    }
    export interface Schema$PostUserInfosList {
        /**
         * The list of Posts with User information for the post, for this Blog.
         */
        items?: Schema$PostUserInfo[];
        /**
         * The kind of this entity. Always blogger#postList.
         */
        kind?: string | null;
        /**
         * Pagination token to fetch the next page, if one exists.
         */
        nextPageToken?: string | null;
    }
    export interface Schema$User {
        /**
         * Profile summary information.
         */
        about?: string | null;
        /**
         * The container of blogs for this user.
         */
        blogs?: {
            selfLink?: string;
        } | null;
        /**
         * The timestamp of when this profile was created, in seconds since epoch.
         */
        created?: string | null;
        /**
         * The display name.
         */
        displayName?: string | null;
        /**
         * The identifier for this User.
         */
        id?: string | null;
        /**
         * The kind of this entity. Always blogger#user.
         */
        kind?: string | null;
        /**
         * This user's locale
         */
        locale?: {
            country?: string;
            language?: string;
            variant?: string;
        } | null;
        /**
         * The API REST URL to fetch this resource from.
         */
        selfLink?: string | null;
        /**
         * The user's profile page.
         */
        url?: string | null;
    }
    export class Resource$Blogs {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Gets a blog by id.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/blogger.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const blogger = google.blogger('v3');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/blogger',
         *       'https://www.googleapis.com/auth/blogger.readonly',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await blogger.blogs.get({
         *     blogId: 'placeholder-value',
         *
         *     maxPosts: 'placeholder-value',
         *
         *     view: 'placeholder-value',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "customMetaData": "my_customMetaData",
         *   //   "description": "my_description",
         *   //   "id": "my_id",
         *   //   "kind": "my_kind",
         *   //   "locale": {},
         *   //   "name": "my_name",
         *   //   "pages": {},
         *   //   "posts": {},
         *   //   "published": "my_published",
         *   //   "selfLink": "my_selfLink",
         *   //   "status": "my_status",
         *   //   "updated": "my_updated",
         *   //   "url": "my_url"
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
        get(params: Params$Resource$Blogs$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Blogs$Get, options?: MethodOptions): GaxiosPromise<Schema$Blog>;
        get(params: Params$Resource$Blogs$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Blogs$Get, options: MethodOptions | BodyResponseCallback<Schema$Blog>, callback: BodyResponseCallback<Schema$Blog>): void;
        get(params: Params$Resource$Blogs$Get, callback: BodyResponseCallback<Schema$Blog>): void;
        get(callback: BodyResponseCallback<Schema$Blog>): void;
        /**
         * Gets a blog by url.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/blogger.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const blogger = google.blogger('v3');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/blogger',
         *       'https://www.googleapis.com/auth/blogger.readonly',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await blogger.blogs.getByUrl({
         *     url: 'placeholder-value',
         *
         *     view: 'placeholder-value',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "customMetaData": "my_customMetaData",
         *   //   "description": "my_description",
         *   //   "id": "my_id",
         *   //   "kind": "my_kind",
         *   //   "locale": {},
         *   //   "name": "my_name",
         *   //   "pages": {},
         *   //   "posts": {},
         *   //   "published": "my_published",
         *   //   "selfLink": "my_selfLink",
         *   //   "status": "my_status",
         *   //   "updated": "my_updated",
         *   //   "url": "my_url"
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
        getByUrl(params: Params$Resource$Blogs$Getbyurl, options: StreamMethodOptions): GaxiosPromise<Readable>;
        getByUrl(params?: Params$Resource$Blogs$Getbyurl, options?: MethodOptions): GaxiosPromise<Schema$Blog>;
        getByUrl(params: Params$Resource$Blogs$Getbyurl, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        getByUrl(params: Params$Resource$Blogs$Getbyurl, options: MethodOptions | BodyResponseCallback<Schema$Blog>, callback: BodyResponseCallback<Schema$Blog>): void;
        getByUrl(params: Params$Resource$Blogs$Getbyurl, callback: BodyResponseCallback<Schema$Blog>): void;
        getByUrl(callback: BodyResponseCallback<Schema$Blog>): void;
        /**
         * Lists blogs by user.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/blogger.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const blogger = google.blogger('v3');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/blogger',
         *       'https://www.googleapis.com/auth/blogger.readonly',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await blogger.blogs.listByUser({
         *     fetchUserInfo: 'placeholder-value',
         *
         *     role: 'placeholder-value',
         *     // Default value of status is LIVE.
         *     status: 'placeholder-value',
         *
         *     userId: 'placeholder-value',
         *
         *     view: 'placeholder-value',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "blogUserInfos": [],
         *   //   "items": [],
         *   //   "kind": "my_kind"
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
        listByUser(params: Params$Resource$Blogs$Listbyuser, options: StreamMethodOptions): GaxiosPromise<Readable>;
        listByUser(params?: Params$Resource$Blogs$Listbyuser, options?: MethodOptions): GaxiosPromise<Schema$BlogList>;
        listByUser(params: Params$Resource$Blogs$Listbyuser, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        listByUser(params: Params$Resource$Blogs$Listbyuser, options: MethodOptions | BodyResponseCallback<Schema$BlogList>, callback: BodyResponseCallback<Schema$BlogList>): void;
        listByUser(params: Params$Resource$Blogs$Listbyuser, callback: BodyResponseCallback<Schema$BlogList>): void;
        listByUser(callback: BodyResponseCallback<Schema$BlogList>): void;
    }
    export interface Params$Resource$Blogs$Get extends StandardParameters {
        /**
         *
         */
        blogId?: string;
        /**
         *
         */
        maxPosts?: number;
        /**
         *
         */
        view?: string;
    }
    export interface Params$Resource$Blogs$Getbyurl extends StandardParameters {
        /**
         *
         */
        url?: string;
        /**
         *
         */
        view?: string;
    }
    export interface Params$Resource$Blogs$Listbyuser extends StandardParameters {
        /**
         *
         */
        fetchUserInfo?: boolean;
        /**
         *
         */
        role?: string[];
        /**
         * Default value of status is LIVE.
         */
        status?: string[];
        /**
         *
         */
        userId?: string;
        /**
         *
         */
        view?: string;
    }
    export class Resource$Bloguserinfos {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Gets one blog and user info pair by blog id and user id.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/blogger.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const blogger = google.blogger('v3');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/blogger',
         *       'https://www.googleapis.com/auth/blogger.readonly',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await blogger.blogUserInfos.get({
         *     blogId: 'placeholder-value',
         *
         *     maxPosts: 'placeholder-value',
         *
         *     userId: 'placeholder-value',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "blog": {},
         *   //   "blog_user_info": {},
         *   //   "kind": "my_kind"
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
        get(params: Params$Resource$Bloguserinfos$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Bloguserinfos$Get, options?: MethodOptions): GaxiosPromise<Schema$BlogUserInfo>;
        get(params: Params$Resource$Bloguserinfos$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Bloguserinfos$Get, options: MethodOptions | BodyResponseCallback<Schema$BlogUserInfo>, callback: BodyResponseCallback<Schema$BlogUserInfo>): void;
        get(params: Params$Resource$Bloguserinfos$Get, callback: BodyResponseCallback<Schema$BlogUserInfo>): void;
        get(callback: BodyResponseCallback<Schema$BlogUserInfo>): void;
    }
    export interface Params$Resource$Bloguserinfos$Get extends StandardParameters {
        /**
         *
         */
        blogId?: string;
        /**
         *
         */
        maxPosts?: number;
        /**
         *
         */
        userId?: string;
    }
    export class Resource$Comments {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Marks a comment as not spam by blog id, post id and comment id.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/blogger.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const blogger = google.blogger('v3');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/blogger'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await blogger.comments.approve({
         *     blogId: 'placeholder-value',
         *
         *     commentId: 'placeholder-value',
         *
         *     postId: 'placeholder-value',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "author": {},
         *   //   "blog": {},
         *   //   "content": "my_content",
         *   //   "id": "my_id",
         *   //   "inReplyTo": {},
         *   //   "kind": "my_kind",
         *   //   "post": {},
         *   //   "published": "my_published",
         *   //   "selfLink": "my_selfLink",
         *   //   "status": "my_status",
         *   //   "updated": "my_updated"
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
        approve(params: Params$Resource$Comments$Approve, options: StreamMethodOptions): GaxiosPromise<Readable>;
        approve(params?: Params$Resource$Comments$Approve, options?: MethodOptions): GaxiosPromise<Schema$Comment>;
        approve(params: Params$Resource$Comments$Approve, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        approve(params: Params$Resource$Comments$Approve, options: MethodOptions | BodyResponseCallback<Schema$Comment>, callback: BodyResponseCallback<Schema$Comment>): void;
        approve(params: Params$Resource$Comments$Approve, callback: BodyResponseCallback<Schema$Comment>): void;
        approve(callback: BodyResponseCallback<Schema$Comment>): void;
        /**
         * Deletes a comment by blog id, post id and comment id.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/blogger.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const blogger = google.blogger('v3');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/blogger'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await blogger.comments.delete({
         *     blogId: 'placeholder-value',
         *
         *     commentId: 'placeholder-value',
         *
         *     postId: 'placeholder-value',
         *   });
         *   console.log(res.data);
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
        delete(params: Params$Resource$Comments$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Comments$Delete, options?: MethodOptions): GaxiosPromise<void>;
        delete(params: Params$Resource$Comments$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Comments$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Comments$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * Gets a comment by id.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/blogger.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const blogger = google.blogger('v3');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/blogger',
         *       'https://www.googleapis.com/auth/blogger.readonly',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await blogger.comments.get({
         *     blogId: 'placeholder-value',
         *
         *     commentId: 'placeholder-value',
         *
         *     postId: 'placeholder-value',
         *
         *     view: 'placeholder-value',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "author": {},
         *   //   "blog": {},
         *   //   "content": "my_content",
         *   //   "id": "my_id",
         *   //   "inReplyTo": {},
         *   //   "kind": "my_kind",
         *   //   "post": {},
         *   //   "published": "my_published",
         *   //   "selfLink": "my_selfLink",
         *   //   "status": "my_status",
         *   //   "updated": "my_updated"
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
        get(params: Params$Resource$Comments$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Comments$Get, options?: MethodOptions): GaxiosPromise<Schema$Comment>;
        get(params: Params$Resource$Comments$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Comments$Get, options: MethodOptions | BodyResponseCallback<Schema$Comment>, callback: BodyResponseCallback<Schema$Comment>): void;
        get(params: Params$Resource$Comments$Get, callback: BodyResponseCallback<Schema$Comment>): void;
        get(callback: BodyResponseCallback<Schema$Comment>): void;
        /**
         * Lists comments.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/blogger.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const blogger = google.blogger('v3');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/blogger',
         *       'https://www.googleapis.com/auth/blogger.readonly',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await blogger.comments.list({
         *     blogId: 'placeholder-value',
         *
         *     endDate: 'placeholder-value',
         *
         *     fetchBodies: 'placeholder-value',
         *
         *     maxResults: 'placeholder-value',
         *
         *     pageToken: 'placeholder-value',
         *
         *     postId: 'placeholder-value',
         *
         *     startDate: 'placeholder-value',
         *
         *     status: 'placeholder-value',
         *
         *     view: 'placeholder-value',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "etag": "my_etag",
         *   //   "items": [],
         *   //   "kind": "my_kind",
         *   //   "nextPageToken": "my_nextPageToken",
         *   //   "prevPageToken": "my_prevPageToken"
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
        list(params: Params$Resource$Comments$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Comments$List, options?: MethodOptions): GaxiosPromise<Schema$CommentList>;
        list(params: Params$Resource$Comments$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Comments$List, options: MethodOptions | BodyResponseCallback<Schema$CommentList>, callback: BodyResponseCallback<Schema$CommentList>): void;
        list(params: Params$Resource$Comments$List, callback: BodyResponseCallback<Schema$CommentList>): void;
        list(callback: BodyResponseCallback<Schema$CommentList>): void;
        /**
         * Lists comments by blog.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/blogger.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const blogger = google.blogger('v3');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/blogger',
         *       'https://www.googleapis.com/auth/blogger.readonly',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await blogger.comments.listByBlog({
         *     blogId: 'placeholder-value',
         *
         *     endDate: 'placeholder-value',
         *
         *     fetchBodies: 'placeholder-value',
         *
         *     maxResults: 'placeholder-value',
         *
         *     pageToken: 'placeholder-value',
         *
         *     startDate: 'placeholder-value',
         *
         *     status: 'placeholder-value',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "etag": "my_etag",
         *   //   "items": [],
         *   //   "kind": "my_kind",
         *   //   "nextPageToken": "my_nextPageToken",
         *   //   "prevPageToken": "my_prevPageToken"
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
        listByBlog(params: Params$Resource$Comments$Listbyblog, options: StreamMethodOptions): GaxiosPromise<Readable>;
        listByBlog(params?: Params$Resource$Comments$Listbyblog, options?: MethodOptions): GaxiosPromise<Schema$CommentList>;
        listByBlog(params: Params$Resource$Comments$Listbyblog, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        listByBlog(params: Params$Resource$Comments$Listbyblog, options: MethodOptions | BodyResponseCallback<Schema$CommentList>, callback: BodyResponseCallback<Schema$CommentList>): void;
        listByBlog(params: Params$Resource$Comments$Listbyblog, callback: BodyResponseCallback<Schema$CommentList>): void;
        listByBlog(callback: BodyResponseCallback<Schema$CommentList>): void;
        /**
         * Marks a comment as spam by blog id, post id and comment id.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/blogger.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const blogger = google.blogger('v3');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/blogger'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await blogger.comments.markAsSpam({
         *     blogId: 'placeholder-value',
         *
         *     commentId: 'placeholder-value',
         *
         *     postId: 'placeholder-value',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "author": {},
         *   //   "blog": {},
         *   //   "content": "my_content",
         *   //   "id": "my_id",
         *   //   "inReplyTo": {},
         *   //   "kind": "my_kind",
         *   //   "post": {},
         *   //   "published": "my_published",
         *   //   "selfLink": "my_selfLink",
         *   //   "status": "my_status",
         *   //   "updated": "my_updated"
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
        markAsSpam(params: Params$Resource$Comments$Markasspam, options: StreamMethodOptions): GaxiosPromise<Readable>;
        markAsSpam(params?: Params$Resource$Comments$Markasspam, options?: MethodOptions): GaxiosPromise<Schema$Comment>;
        markAsSpam(params: Params$Resource$Comments$Markasspam, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        markAsSpam(params: Params$Resource$Comments$Markasspam, options: MethodOptions | BodyResponseCallback<Schema$Comment>, callback: BodyResponseCallback<Schema$Comment>): void;
        markAsSpam(params: Params$Resource$Comments$Markasspam, callback: BodyResponseCallback<Schema$Comment>): void;
        markAsSpam(callback: BodyResponseCallback<Schema$Comment>): void;
        /**
         * Removes the content of a comment by blog id, post id and comment id.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/blogger.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const blogger = google.blogger('v3');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/blogger'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await blogger.comments.removeContent({
         *     blogId: 'placeholder-value',
         *
         *     commentId: 'placeholder-value',
         *
         *     postId: 'placeholder-value',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "author": {},
         *   //   "blog": {},
         *   //   "content": "my_content",
         *   //   "id": "my_id",
         *   //   "inReplyTo": {},
         *   //   "kind": "my_kind",
         *   //   "post": {},
         *   //   "published": "my_published",
         *   //   "selfLink": "my_selfLink",
         *   //   "status": "my_status",
         *   //   "updated": "my_updated"
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
        removeContent(params: Params$Resource$Comments$Removecontent, options: StreamMethodOptions): GaxiosPromise<Readable>;
        removeContent(params?: Params$Resource$Comments$Removecontent, options?: MethodOptions): GaxiosPromise<Schema$Comment>;
        removeContent(params: Params$Resource$Comments$Removecontent, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        removeContent(params: Params$Resource$Comments$Removecontent, options: MethodOptions | BodyResponseCallback<Schema$Comment>, callback: BodyResponseCallback<Schema$Comment>): void;
        removeContent(params: Params$Resource$Comments$Removecontent, callback: BodyResponseCallback<Schema$Comment>): void;
        removeContent(callback: BodyResponseCallback<Schema$Comment>): void;
    }
    export interface Params$Resource$Comments$Approve extends StandardParameters {
        /**
         *
         */
        blogId?: string;
        /**
         *
         */
        commentId?: string;
        /**
         *
         */
        postId?: string;
    }
    export interface Params$Resource$Comments$Delete extends StandardParameters {
        /**
         *
         */
        blogId?: string;
        /**
         *
         */
        commentId?: string;
        /**
         *
         */
        postId?: string;
    }
    export interface Params$Resource$Comments$Get extends StandardParameters {
        /**
         *
         */
        blogId?: string;
        /**
         *
         */
        commentId?: string;
        /**
         *
         */
        postId?: string;
        /**
         *
         */
        view?: string;
    }
    export interface Params$Resource$Comments$List extends StandardParameters {
        /**
         *
         */
        blogId?: string;
        /**
         *
         */
        endDate?: string;
        /**
         *
         */
        fetchBodies?: boolean;
        /**
         *
         */
        maxResults?: number;
        /**
         *
         */
        pageToken?: string;
        /**
         *
         */
        postId?: string;
        /**
         *
         */
        startDate?: string;
        /**
         *
         */
        status?: string;
        /**
         *
         */
        view?: string;
    }
    export interface Params$Resource$Comments$Listbyblog extends StandardParameters {
        /**
         *
         */
        blogId?: string;
        /**
         *
         */
        endDate?: string;
        /**
         *
         */
        fetchBodies?: boolean;
        /**
         *
         */
        maxResults?: number;
        /**
         *
         */
        pageToken?: string;
        /**
         *
         */
        startDate?: string;
        /**
         *
         */
        status?: string[];
    }
    export interface Params$Resource$Comments$Markasspam extends StandardParameters {
        /**
         *
         */
        blogId?: string;
        /**
         *
         */
        commentId?: string;
        /**
         *
         */
        postId?: string;
    }
    export interface Params$Resource$Comments$Removecontent extends StandardParameters {
        /**
         *
         */
        blogId?: string;
        /**
         *
         */
        commentId?: string;
        /**
         *
         */
        postId?: string;
    }
    export class Resource$Pages {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Deletes a page by blog id and page id.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/blogger.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const blogger = google.blogger('v3');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/blogger'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await blogger.pages.delete({
         *     blogId: 'placeholder-value',
         *
         *     pageId: 'placeholder-value',
         *   });
         *   console.log(res.data);
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
        delete(params: Params$Resource$Pages$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Pages$Delete, options?: MethodOptions): GaxiosPromise<void>;
        delete(params: Params$Resource$Pages$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Pages$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Pages$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * Gets a page by blog id and page id.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/blogger.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const blogger = google.blogger('v3');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/blogger',
         *       'https://www.googleapis.com/auth/blogger.readonly',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await blogger.pages.get({
         *     blogId: 'placeholder-value',
         *
         *     pageId: 'placeholder-value',
         *
         *     view: 'placeholder-value',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "author": {},
         *   //   "blog": {},
         *   //   "content": "my_content",
         *   //   "etag": "my_etag",
         *   //   "id": "my_id",
         *   //   "kind": "my_kind",
         *   //   "published": "my_published",
         *   //   "selfLink": "my_selfLink",
         *   //   "status": "my_status",
         *   //   "title": "my_title",
         *   //   "updated": "my_updated",
         *   //   "url": "my_url"
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
        get(params: Params$Resource$Pages$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Pages$Get, options?: MethodOptions): GaxiosPromise<Schema$Page>;
        get(params: Params$Resource$Pages$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Pages$Get, options: MethodOptions | BodyResponseCallback<Schema$Page>, callback: BodyResponseCallback<Schema$Page>): void;
        get(params: Params$Resource$Pages$Get, callback: BodyResponseCallback<Schema$Page>): void;
        get(callback: BodyResponseCallback<Schema$Page>): void;
        /**
         * Inserts a page.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/blogger.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const blogger = google.blogger('v3');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/blogger'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await blogger.pages.insert({
         *     blogId: 'placeholder-value',
         *
         *     isDraft: 'placeholder-value',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "author": {},
         *       //   "blog": {},
         *       //   "content": "my_content",
         *       //   "etag": "my_etag",
         *       //   "id": "my_id",
         *       //   "kind": "my_kind",
         *       //   "published": "my_published",
         *       //   "selfLink": "my_selfLink",
         *       //   "status": "my_status",
         *       //   "title": "my_title",
         *       //   "updated": "my_updated",
         *       //   "url": "my_url"
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "author": {},
         *   //   "blog": {},
         *   //   "content": "my_content",
         *   //   "etag": "my_etag",
         *   //   "id": "my_id",
         *   //   "kind": "my_kind",
         *   //   "published": "my_published",
         *   //   "selfLink": "my_selfLink",
         *   //   "status": "my_status",
         *   //   "title": "my_title",
         *   //   "updated": "my_updated",
         *   //   "url": "my_url"
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
        insert(params: Params$Resource$Pages$Insert, options: StreamMethodOptions): GaxiosPromise<Readable>;
        insert(params?: Params$Resource$Pages$Insert, options?: MethodOptions): GaxiosPromise<Schema$Page>;
        insert(params: Params$Resource$Pages$Insert, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        insert(params: Params$Resource$Pages$Insert, options: MethodOptions | BodyResponseCallback<Schema$Page>, callback: BodyResponseCallback<Schema$Page>): void;
        insert(params: Params$Resource$Pages$Insert, callback: BodyResponseCallback<Schema$Page>): void;
        insert(callback: BodyResponseCallback<Schema$Page>): void;
        /**
         * Lists pages.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/blogger.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const blogger = google.blogger('v3');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/blogger',
         *       'https://www.googleapis.com/auth/blogger.readonly',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await blogger.pages.list({
         *     blogId: 'placeholder-value',
         *
         *     fetchBodies: 'placeholder-value',
         *
         *     maxResults: 'placeholder-value',
         *
         *     pageToken: 'placeholder-value',
         *
         *     status: 'placeholder-value',
         *
         *     view: 'placeholder-value',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "etag": "my_etag",
         *   //   "items": [],
         *   //   "kind": "my_kind",
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
        list(params: Params$Resource$Pages$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Pages$List, options?: MethodOptions): GaxiosPromise<Schema$PageList>;
        list(params: Params$Resource$Pages$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Pages$List, options: MethodOptions | BodyResponseCallback<Schema$PageList>, callback: BodyResponseCallback<Schema$PageList>): void;
        list(params: Params$Resource$Pages$List, callback: BodyResponseCallback<Schema$PageList>): void;
        list(callback: BodyResponseCallback<Schema$PageList>): void;
        /**
         * Patches a page.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/blogger.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const blogger = google.blogger('v3');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/blogger'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await blogger.pages.patch({
         *     blogId: 'placeholder-value',
         *
         *     pageId: 'placeholder-value',
         *
         *     publish: 'placeholder-value',
         *
         *     revert: 'placeholder-value',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "author": {},
         *       //   "blog": {},
         *       //   "content": "my_content",
         *       //   "etag": "my_etag",
         *       //   "id": "my_id",
         *       //   "kind": "my_kind",
         *       //   "published": "my_published",
         *       //   "selfLink": "my_selfLink",
         *       //   "status": "my_status",
         *       //   "title": "my_title",
         *       //   "updated": "my_updated",
         *       //   "url": "my_url"
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "author": {},
         *   //   "blog": {},
         *   //   "content": "my_content",
         *   //   "etag": "my_etag",
         *   //   "id": "my_id",
         *   //   "kind": "my_kind",
         *   //   "published": "my_published",
         *   //   "selfLink": "my_selfLink",
         *   //   "status": "my_status",
         *   //   "title": "my_title",
         *   //   "updated": "my_updated",
         *   //   "url": "my_url"
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
        patch(params: Params$Resource$Pages$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Pages$Patch, options?: MethodOptions): GaxiosPromise<Schema$Page>;
        patch(params: Params$Resource$Pages$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Pages$Patch, options: MethodOptions | BodyResponseCallback<Schema$Page>, callback: BodyResponseCallback<Schema$Page>): void;
        patch(params: Params$Resource$Pages$Patch, callback: BodyResponseCallback<Schema$Page>): void;
        patch(callback: BodyResponseCallback<Schema$Page>): void;
        /**
         * Publishes a page.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/blogger.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const blogger = google.blogger('v3');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/blogger'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await blogger.pages.publish({
         *     blogId: 'placeholder-value',
         *
         *     pageId: 'placeholder-value',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "author": {},
         *   //   "blog": {},
         *   //   "content": "my_content",
         *   //   "etag": "my_etag",
         *   //   "id": "my_id",
         *   //   "kind": "my_kind",
         *   //   "published": "my_published",
         *   //   "selfLink": "my_selfLink",
         *   //   "status": "my_status",
         *   //   "title": "my_title",
         *   //   "updated": "my_updated",
         *   //   "url": "my_url"
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
        publish(params: Params$Resource$Pages$Publish, options: StreamMethodOptions): GaxiosPromise<Readable>;
        publish(params?: Params$Resource$Pages$Publish, options?: MethodOptions): GaxiosPromise<Schema$Page>;
        publish(params: Params$Resource$Pages$Publish, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        publish(params: Params$Resource$Pages$Publish, options: MethodOptions | BodyResponseCallback<Schema$Page>, callback: BodyResponseCallback<Schema$Page>): void;
        publish(params: Params$Resource$Pages$Publish, callback: BodyResponseCallback<Schema$Page>): void;
        publish(callback: BodyResponseCallback<Schema$Page>): void;
        /**
         * Reverts a published or scheduled page to draft state.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/blogger.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const blogger = google.blogger('v3');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/blogger'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await blogger.pages.revert({
         *     blogId: 'placeholder-value',
         *
         *     pageId: 'placeholder-value',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "author": {},
         *   //   "blog": {},
         *   //   "content": "my_content",
         *   //   "etag": "my_etag",
         *   //   "id": "my_id",
         *   //   "kind": "my_kind",
         *   //   "published": "my_published",
         *   //   "selfLink": "my_selfLink",
         *   //   "status": "my_status",
         *   //   "title": "my_title",
         *   //   "updated": "my_updated",
         *   //   "url": "my_url"
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
        revert(params: Params$Resource$Pages$Revert, options: StreamMethodOptions): GaxiosPromise<Readable>;
        revert(params?: Params$Resource$Pages$Revert, options?: MethodOptions): GaxiosPromise<Schema$Page>;
        revert(params: Params$Resource$Pages$Revert, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        revert(params: Params$Resource$Pages$Revert, options: MethodOptions | BodyResponseCallback<Schema$Page>, callback: BodyResponseCallback<Schema$Page>): void;
        revert(params: Params$Resource$Pages$Revert, callback: BodyResponseCallback<Schema$Page>): void;
        revert(callback: BodyResponseCallback<Schema$Page>): void;
        /**
         * Updates a page by blog id and page id.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/blogger.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const blogger = google.blogger('v3');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/blogger'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await blogger.pages.update({
         *     blogId: 'placeholder-value',
         *
         *     pageId: 'placeholder-value',
         *
         *     publish: 'placeholder-value',
         *
         *     revert: 'placeholder-value',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "author": {},
         *       //   "blog": {},
         *       //   "content": "my_content",
         *       //   "etag": "my_etag",
         *       //   "id": "my_id",
         *       //   "kind": "my_kind",
         *       //   "published": "my_published",
         *       //   "selfLink": "my_selfLink",
         *       //   "status": "my_status",
         *       //   "title": "my_title",
         *       //   "updated": "my_updated",
         *       //   "url": "my_url"
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "author": {},
         *   //   "blog": {},
         *   //   "content": "my_content",
         *   //   "etag": "my_etag",
         *   //   "id": "my_id",
         *   //   "kind": "my_kind",
         *   //   "published": "my_published",
         *   //   "selfLink": "my_selfLink",
         *   //   "status": "my_status",
         *   //   "title": "my_title",
         *   //   "updated": "my_updated",
         *   //   "url": "my_url"
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
        update(params: Params$Resource$Pages$Update, options: StreamMethodOptions): GaxiosPromise<Readable>;
        update(params?: Params$Resource$Pages$Update, options?: MethodOptions): GaxiosPromise<Schema$Page>;
        update(params: Params$Resource$Pages$Update, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        update(params: Params$Resource$Pages$Update, options: MethodOptions | BodyResponseCallback<Schema$Page>, callback: BodyResponseCallback<Schema$Page>): void;
        update(params: Params$Resource$Pages$Update, callback: BodyResponseCallback<Schema$Page>): void;
        update(callback: BodyResponseCallback<Schema$Page>): void;
    }
    export interface Params$Resource$Pages$Delete extends StandardParameters {
        /**
         *
         */
        blogId?: string;
        /**
         *
         */
        pageId?: string;
    }
    export interface Params$Resource$Pages$Get extends StandardParameters {
        /**
         *
         */
        blogId?: string;
        /**
         *
         */
        pageId?: string;
        /**
         *
         */
        view?: string;
    }
    export interface Params$Resource$Pages$Insert extends StandardParameters {
        /**
         *
         */
        blogId?: string;
        /**
         *
         */
        isDraft?: boolean;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Page;
    }
    export interface Params$Resource$Pages$List extends StandardParameters {
        /**
         *
         */
        blogId?: string;
        /**
         *
         */
        fetchBodies?: boolean;
        /**
         *
         */
        maxResults?: number;
        /**
         *
         */
        pageToken?: string;
        /**
         *
         */
        status?: string[];
        /**
         *
         */
        view?: string;
    }
    export interface Params$Resource$Pages$Patch extends StandardParameters {
        /**
         *
         */
        blogId?: string;
        /**
         *
         */
        pageId?: string;
        /**
         *
         */
        publish?: boolean;
        /**
         *
         */
        revert?: boolean;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Page;
    }
    export interface Params$Resource$Pages$Publish extends StandardParameters {
        /**
         *
         */
        blogId?: string;
        /**
         *
         */
        pageId?: string;
    }
    export interface Params$Resource$Pages$Revert extends StandardParameters {
        /**
         *
         */
        blogId?: string;
        /**
         *
         */
        pageId?: string;
    }
    export interface Params$Resource$Pages$Update extends StandardParameters {
        /**
         *
         */
        blogId?: string;
        /**
         *
         */
        pageId?: string;
        /**
         *
         */
        publish?: boolean;
        /**
         *
         */
        revert?: boolean;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Page;
    }
    export class Resource$Pageviews {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Gets page views by blog id.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/blogger.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const blogger = google.blogger('v3');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/blogger'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await blogger.pageViews.get({
         *     blogId: 'placeholder-value',
         *
         *     range: 'placeholder-value',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "blogId": "my_blogId",
         *   //   "counts": [],
         *   //   "kind": "my_kind"
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
        get(params: Params$Resource$Pageviews$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Pageviews$Get, options?: MethodOptions): GaxiosPromise<Schema$Pageviews>;
        get(params: Params$Resource$Pageviews$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Pageviews$Get, options: MethodOptions | BodyResponseCallback<Schema$Pageviews>, callback: BodyResponseCallback<Schema$Pageviews>): void;
        get(params: Params$Resource$Pageviews$Get, callback: BodyResponseCallback<Schema$Pageviews>): void;
        get(callback: BodyResponseCallback<Schema$Pageviews>): void;
    }
    export interface Params$Resource$Pageviews$Get extends StandardParameters {
        /**
         *
         */
        blogId?: string;
        /**
         *
         */
        range?: string[];
    }
    export class Resource$Posts {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Deletes a post by blog id and post id.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/blogger.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const blogger = google.blogger('v3');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/blogger'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await blogger.posts.delete({
         *     blogId: 'placeholder-value',
         *
         *     postId: 'placeholder-value',
         *   });
         *   console.log(res.data);
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
        delete(params: Params$Resource$Posts$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Posts$Delete, options?: MethodOptions): GaxiosPromise<void>;
        delete(params: Params$Resource$Posts$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Posts$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Posts$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * Gets a post by blog id and post id
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/blogger.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const blogger = google.blogger('v3');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/blogger',
         *       'https://www.googleapis.com/auth/blogger.readonly',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await blogger.posts.get({
         *     blogId: 'placeholder-value',
         *
         *     fetchBody: 'placeholder-value',
         *
         *     fetchImages: 'placeholder-value',
         *
         *     maxComments: 'placeholder-value',
         *
         *     postId: 'placeholder-value',
         *
         *     view: 'placeholder-value',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "author": {},
         *   //   "blog": {},
         *   //   "content": "my_content",
         *   //   "customMetaData": "my_customMetaData",
         *   //   "etag": "my_etag",
         *   //   "id": "my_id",
         *   //   "images": [],
         *   //   "kind": "my_kind",
         *   //   "labels": [],
         *   //   "location": {},
         *   //   "published": "my_published",
         *   //   "readerComments": "my_readerComments",
         *   //   "replies": {},
         *   //   "selfLink": "my_selfLink",
         *   //   "status": "my_status",
         *   //   "title": "my_title",
         *   //   "titleLink": "my_titleLink",
         *   //   "updated": "my_updated",
         *   //   "url": "my_url"
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
        get(params: Params$Resource$Posts$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Posts$Get, options?: MethodOptions): GaxiosPromise<Schema$Post>;
        get(params: Params$Resource$Posts$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Posts$Get, options: MethodOptions | BodyResponseCallback<Schema$Post>, callback: BodyResponseCallback<Schema$Post>): void;
        get(params: Params$Resource$Posts$Get, callback: BodyResponseCallback<Schema$Post>): void;
        get(callback: BodyResponseCallback<Schema$Post>): void;
        /**
         * Gets a post by path.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/blogger.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const blogger = google.blogger('v3');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/blogger',
         *       'https://www.googleapis.com/auth/blogger.readonly',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await blogger.posts.getByPath({
         *     blogId: 'placeholder-value',
         *
         *     maxComments: 'placeholder-value',
         *
         *     path: 'placeholder-value',
         *
         *     view: 'placeholder-value',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "author": {},
         *   //   "blog": {},
         *   //   "content": "my_content",
         *   //   "customMetaData": "my_customMetaData",
         *   //   "etag": "my_etag",
         *   //   "id": "my_id",
         *   //   "images": [],
         *   //   "kind": "my_kind",
         *   //   "labels": [],
         *   //   "location": {},
         *   //   "published": "my_published",
         *   //   "readerComments": "my_readerComments",
         *   //   "replies": {},
         *   //   "selfLink": "my_selfLink",
         *   //   "status": "my_status",
         *   //   "title": "my_title",
         *   //   "titleLink": "my_titleLink",
         *   //   "updated": "my_updated",
         *   //   "url": "my_url"
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
        getByPath(params: Params$Resource$Posts$Getbypath, options: StreamMethodOptions): GaxiosPromise<Readable>;
        getByPath(params?: Params$Resource$Posts$Getbypath, options?: MethodOptions): GaxiosPromise<Schema$Post>;
        getByPath(params: Params$Resource$Posts$Getbypath, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        getByPath(params: Params$Resource$Posts$Getbypath, options: MethodOptions | BodyResponseCallback<Schema$Post>, callback: BodyResponseCallback<Schema$Post>): void;
        getByPath(params: Params$Resource$Posts$Getbypath, callback: BodyResponseCallback<Schema$Post>): void;
        getByPath(callback: BodyResponseCallback<Schema$Post>): void;
        /**
         * Inserts a post.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/blogger.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const blogger = google.blogger('v3');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/blogger'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await blogger.posts.insert({
         *     blogId: 'placeholder-value',
         *
         *     fetchBody: 'placeholder-value',
         *
         *     fetchImages: 'placeholder-value',
         *
         *     isDraft: 'placeholder-value',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "author": {},
         *       //   "blog": {},
         *       //   "content": "my_content",
         *       //   "customMetaData": "my_customMetaData",
         *       //   "etag": "my_etag",
         *       //   "id": "my_id",
         *       //   "images": [],
         *       //   "kind": "my_kind",
         *       //   "labels": [],
         *       //   "location": {},
         *       //   "published": "my_published",
         *       //   "readerComments": "my_readerComments",
         *       //   "replies": {},
         *       //   "selfLink": "my_selfLink",
         *       //   "status": "my_status",
         *       //   "title": "my_title",
         *       //   "titleLink": "my_titleLink",
         *       //   "updated": "my_updated",
         *       //   "url": "my_url"
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "author": {},
         *   //   "blog": {},
         *   //   "content": "my_content",
         *   //   "customMetaData": "my_customMetaData",
         *   //   "etag": "my_etag",
         *   //   "id": "my_id",
         *   //   "images": [],
         *   //   "kind": "my_kind",
         *   //   "labels": [],
         *   //   "location": {},
         *   //   "published": "my_published",
         *   //   "readerComments": "my_readerComments",
         *   //   "replies": {},
         *   //   "selfLink": "my_selfLink",
         *   //   "status": "my_status",
         *   //   "title": "my_title",
         *   //   "titleLink": "my_titleLink",
         *   //   "updated": "my_updated",
         *   //   "url": "my_url"
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
        insert(params: Params$Resource$Posts$Insert, options: StreamMethodOptions): GaxiosPromise<Readable>;
        insert(params?: Params$Resource$Posts$Insert, options?: MethodOptions): GaxiosPromise<Schema$Post>;
        insert(params: Params$Resource$Posts$Insert, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        insert(params: Params$Resource$Posts$Insert, options: MethodOptions | BodyResponseCallback<Schema$Post>, callback: BodyResponseCallback<Schema$Post>): void;
        insert(params: Params$Resource$Posts$Insert, callback: BodyResponseCallback<Schema$Post>): void;
        insert(callback: BodyResponseCallback<Schema$Post>): void;
        /**
         * Lists posts.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/blogger.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const blogger = google.blogger('v3');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/blogger',
         *       'https://www.googleapis.com/auth/blogger.readonly',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await blogger.posts.list({
         *     blogId: 'placeholder-value',
         *
         *     endDate: 'placeholder-value',
         *
         *     fetchBodies: 'placeholder-value',
         *
         *     fetchImages: 'placeholder-value',
         *
         *     labels: 'placeholder-value',
         *
         *     maxResults: 'placeholder-value',
         *
         *     orderBy: 'placeholder-value',
         *
         *     pageToken: 'placeholder-value',
         *
         *     startDate: 'placeholder-value',
         *
         *     status: 'placeholder-value',
         *
         *     view: 'placeholder-value',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "etag": "my_etag",
         *   //   "items": [],
         *   //   "kind": "my_kind",
         *   //   "nextPageToken": "my_nextPageToken",
         *   //   "prevPageToken": "my_prevPageToken"
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
        list(params: Params$Resource$Posts$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Posts$List, options?: MethodOptions): GaxiosPromise<Schema$PostList>;
        list(params: Params$Resource$Posts$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Posts$List, options: MethodOptions | BodyResponseCallback<Schema$PostList>, callback: BodyResponseCallback<Schema$PostList>): void;
        list(params: Params$Resource$Posts$List, callback: BodyResponseCallback<Schema$PostList>): void;
        list(callback: BodyResponseCallback<Schema$PostList>): void;
        /**
         * Patches a post.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/blogger.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const blogger = google.blogger('v3');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/blogger'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await blogger.posts.patch({
         *     blogId: 'placeholder-value',
         *
         *     fetchBody: 'placeholder-value',
         *
         *     fetchImages: 'placeholder-value',
         *
         *     maxComments: 'placeholder-value',
         *
         *     postId: 'placeholder-value',
         *
         *     publish: 'placeholder-value',
         *
         *     revert: 'placeholder-value',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "author": {},
         *       //   "blog": {},
         *       //   "content": "my_content",
         *       //   "customMetaData": "my_customMetaData",
         *       //   "etag": "my_etag",
         *       //   "id": "my_id",
         *       //   "images": [],
         *       //   "kind": "my_kind",
         *       //   "labels": [],
         *       //   "location": {},
         *       //   "published": "my_published",
         *       //   "readerComments": "my_readerComments",
         *       //   "replies": {},
         *       //   "selfLink": "my_selfLink",
         *       //   "status": "my_status",
         *       //   "title": "my_title",
         *       //   "titleLink": "my_titleLink",
         *       //   "updated": "my_updated",
         *       //   "url": "my_url"
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "author": {},
         *   //   "blog": {},
         *   //   "content": "my_content",
         *   //   "customMetaData": "my_customMetaData",
         *   //   "etag": "my_etag",
         *   //   "id": "my_id",
         *   //   "images": [],
         *   //   "kind": "my_kind",
         *   //   "labels": [],
         *   //   "location": {},
         *   //   "published": "my_published",
         *   //   "readerComments": "my_readerComments",
         *   //   "replies": {},
         *   //   "selfLink": "my_selfLink",
         *   //   "status": "my_status",
         *   //   "title": "my_title",
         *   //   "titleLink": "my_titleLink",
         *   //   "updated": "my_updated",
         *   //   "url": "my_url"
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
        patch(params: Params$Resource$Posts$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Posts$Patch, options?: MethodOptions): GaxiosPromise<Schema$Post>;
        patch(params: Params$Resource$Posts$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Posts$Patch, options: MethodOptions | BodyResponseCallback<Schema$Post>, callback: BodyResponseCallback<Schema$Post>): void;
        patch(params: Params$Resource$Posts$Patch, callback: BodyResponseCallback<Schema$Post>): void;
        patch(callback: BodyResponseCallback<Schema$Post>): void;
        /**
         * Publishes a post.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/blogger.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const blogger = google.blogger('v3');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/blogger'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await blogger.posts.publish({
         *     blogId: 'placeholder-value',
         *
         *     postId: 'placeholder-value',
         *
         *     publishDate: 'placeholder-value',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "author": {},
         *   //   "blog": {},
         *   //   "content": "my_content",
         *   //   "customMetaData": "my_customMetaData",
         *   //   "etag": "my_etag",
         *   //   "id": "my_id",
         *   //   "images": [],
         *   //   "kind": "my_kind",
         *   //   "labels": [],
         *   //   "location": {},
         *   //   "published": "my_published",
         *   //   "readerComments": "my_readerComments",
         *   //   "replies": {},
         *   //   "selfLink": "my_selfLink",
         *   //   "status": "my_status",
         *   //   "title": "my_title",
         *   //   "titleLink": "my_titleLink",
         *   //   "updated": "my_updated",
         *   //   "url": "my_url"
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
        publish(params: Params$Resource$Posts$Publish, options: StreamMethodOptions): GaxiosPromise<Readable>;
        publish(params?: Params$Resource$Posts$Publish, options?: MethodOptions): GaxiosPromise<Schema$Post>;
        publish(params: Params$Resource$Posts$Publish, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        publish(params: Params$Resource$Posts$Publish, options: MethodOptions | BodyResponseCallback<Schema$Post>, callback: BodyResponseCallback<Schema$Post>): void;
        publish(params: Params$Resource$Posts$Publish, callback: BodyResponseCallback<Schema$Post>): void;
        publish(callback: BodyResponseCallback<Schema$Post>): void;
        /**
         * Reverts a published or scheduled post to draft state.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/blogger.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const blogger = google.blogger('v3');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/blogger'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await blogger.posts.revert({
         *     blogId: 'placeholder-value',
         *
         *     postId: 'placeholder-value',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "author": {},
         *   //   "blog": {},
         *   //   "content": "my_content",
         *   //   "customMetaData": "my_customMetaData",
         *   //   "etag": "my_etag",
         *   //   "id": "my_id",
         *   //   "images": [],
         *   //   "kind": "my_kind",
         *   //   "labels": [],
         *   //   "location": {},
         *   //   "published": "my_published",
         *   //   "readerComments": "my_readerComments",
         *   //   "replies": {},
         *   //   "selfLink": "my_selfLink",
         *   //   "status": "my_status",
         *   //   "title": "my_title",
         *   //   "titleLink": "my_titleLink",
         *   //   "updated": "my_updated",
         *   //   "url": "my_url"
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
        revert(params: Params$Resource$Posts$Revert, options: StreamMethodOptions): GaxiosPromise<Readable>;
        revert(params?: Params$Resource$Posts$Revert, options?: MethodOptions): GaxiosPromise<Schema$Post>;
        revert(params: Params$Resource$Posts$Revert, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        revert(params: Params$Resource$Posts$Revert, options: MethodOptions | BodyResponseCallback<Schema$Post>, callback: BodyResponseCallback<Schema$Post>): void;
        revert(params: Params$Resource$Posts$Revert, callback: BodyResponseCallback<Schema$Post>): void;
        revert(callback: BodyResponseCallback<Schema$Post>): void;
        /**
         * Searches for posts matching given query terms in the specified blog.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/blogger.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const blogger = google.blogger('v3');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/blogger',
         *       'https://www.googleapis.com/auth/blogger.readonly',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await blogger.posts.search({
         *     blogId: 'placeholder-value',
         *
         *     fetchBodies: 'placeholder-value',
         *
         *     orderBy: 'placeholder-value',
         *
         *     q: 'placeholder-value',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "etag": "my_etag",
         *   //   "items": [],
         *   //   "kind": "my_kind",
         *   //   "nextPageToken": "my_nextPageToken",
         *   //   "prevPageToken": "my_prevPageToken"
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
        search(params: Params$Resource$Posts$Search, options: StreamMethodOptions): GaxiosPromise<Readable>;
        search(params?: Params$Resource$Posts$Search, options?: MethodOptions): GaxiosPromise<Schema$PostList>;
        search(params: Params$Resource$Posts$Search, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        search(params: Params$Resource$Posts$Search, options: MethodOptions | BodyResponseCallback<Schema$PostList>, callback: BodyResponseCallback<Schema$PostList>): void;
        search(params: Params$Resource$Posts$Search, callback: BodyResponseCallback<Schema$PostList>): void;
        search(callback: BodyResponseCallback<Schema$PostList>): void;
        /**
         * Updates a post by blog id and post id.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/blogger.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const blogger = google.blogger('v3');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/blogger'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await blogger.posts.update({
         *     blogId: 'placeholder-value',
         *
         *     fetchBody: 'placeholder-value',
         *
         *     fetchImages: 'placeholder-value',
         *
         *     maxComments: 'placeholder-value',
         *
         *     postId: 'placeholder-value',
         *
         *     publish: 'placeholder-value',
         *
         *     revert: 'placeholder-value',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "author": {},
         *       //   "blog": {},
         *       //   "content": "my_content",
         *       //   "customMetaData": "my_customMetaData",
         *       //   "etag": "my_etag",
         *       //   "id": "my_id",
         *       //   "images": [],
         *       //   "kind": "my_kind",
         *       //   "labels": [],
         *       //   "location": {},
         *       //   "published": "my_published",
         *       //   "readerComments": "my_readerComments",
         *       //   "replies": {},
         *       //   "selfLink": "my_selfLink",
         *       //   "status": "my_status",
         *       //   "title": "my_title",
         *       //   "titleLink": "my_titleLink",
         *       //   "updated": "my_updated",
         *       //   "url": "my_url"
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "author": {},
         *   //   "blog": {},
         *   //   "content": "my_content",
         *   //   "customMetaData": "my_customMetaData",
         *   //   "etag": "my_etag",
         *   //   "id": "my_id",
         *   //   "images": [],
         *   //   "kind": "my_kind",
         *   //   "labels": [],
         *   //   "location": {},
         *   //   "published": "my_published",
         *   //   "readerComments": "my_readerComments",
         *   //   "replies": {},
         *   //   "selfLink": "my_selfLink",
         *   //   "status": "my_status",
         *   //   "title": "my_title",
         *   //   "titleLink": "my_titleLink",
         *   //   "updated": "my_updated",
         *   //   "url": "my_url"
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
        update(params: Params$Resource$Posts$Update, options: StreamMethodOptions): GaxiosPromise<Readable>;
        update(params?: Params$Resource$Posts$Update, options?: MethodOptions): GaxiosPromise<Schema$Post>;
        update(params: Params$Resource$Posts$Update, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        update(params: Params$Resource$Posts$Update, options: MethodOptions | BodyResponseCallback<Schema$Post>, callback: BodyResponseCallback<Schema$Post>): void;
        update(params: Params$Resource$Posts$Update, callback: BodyResponseCallback<Schema$Post>): void;
        update(callback: BodyResponseCallback<Schema$Post>): void;
    }
    export interface Params$Resource$Posts$Delete extends StandardParameters {
        /**
         *
         */
        blogId?: string;
        /**
         *
         */
        postId?: string;
    }
    export interface Params$Resource$Posts$Get extends StandardParameters {
        /**
         *
         */
        blogId?: string;
        /**
         *
         */
        fetchBody?: boolean;
        /**
         *
         */
        fetchImages?: boolean;
        /**
         *
         */
        maxComments?: number;
        /**
         *
         */
        postId?: string;
        /**
         *
         */
        view?: string;
    }
    export interface Params$Resource$Posts$Getbypath extends StandardParameters {
        /**
         *
         */
        blogId?: string;
        /**
         *
         */
        maxComments?: number;
        /**
         *
         */
        path?: string;
        /**
         *
         */
        view?: string;
    }
    export interface Params$Resource$Posts$Insert extends StandardParameters {
        /**
         *
         */
        blogId?: string;
        /**
         *
         */
        fetchBody?: boolean;
        /**
         *
         */
        fetchImages?: boolean;
        /**
         *
         */
        isDraft?: boolean;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Post;
    }
    export interface Params$Resource$Posts$List extends StandardParameters {
        /**
         *
         */
        blogId?: string;
        /**
         *
         */
        endDate?: string;
        /**
         *
         */
        fetchBodies?: boolean;
        /**
         *
         */
        fetchImages?: boolean;
        /**
         *
         */
        labels?: string;
        /**
         *
         */
        maxResults?: number;
        /**
         *
         */
        orderBy?: string;
        /**
         *
         */
        pageToken?: string;
        /**
         *
         */
        startDate?: string;
        /**
         *
         */
        status?: string[];
        /**
         *
         */
        view?: string;
    }
    export interface Params$Resource$Posts$Patch extends StandardParameters {
        /**
         *
         */
        blogId?: string;
        /**
         *
         */
        fetchBody?: boolean;
        /**
         *
         */
        fetchImages?: boolean;
        /**
         *
         */
        maxComments?: number;
        /**
         *
         */
        postId?: string;
        /**
         *
         */
        publish?: boolean;
        /**
         *
         */
        revert?: boolean;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Post;
    }
    export interface Params$Resource$Posts$Publish extends StandardParameters {
        /**
         *
         */
        blogId?: string;
        /**
         *
         */
        postId?: string;
        /**
         *
         */
        publishDate?: string;
    }
    export interface Params$Resource$Posts$Revert extends StandardParameters {
        /**
         *
         */
        blogId?: string;
        /**
         *
         */
        postId?: string;
    }
    export interface Params$Resource$Posts$Search extends StandardParameters {
        /**
         *
         */
        blogId?: string;
        /**
         *
         */
        fetchBodies?: boolean;
        /**
         *
         */
        orderBy?: string;
        /**
         *
         */
        q?: string;
    }
    export interface Params$Resource$Posts$Update extends StandardParameters {
        /**
         *
         */
        blogId?: string;
        /**
         *
         */
        fetchBody?: boolean;
        /**
         *
         */
        fetchImages?: boolean;
        /**
         *
         */
        maxComments?: number;
        /**
         *
         */
        postId?: string;
        /**
         *
         */
        publish?: boolean;
        /**
         *
         */
        revert?: boolean;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Post;
    }
    export class Resource$Postuserinfos {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Gets one post and user info pair, by post_id and user_id.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/blogger.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const blogger = google.blogger('v3');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/blogger',
         *       'https://www.googleapis.com/auth/blogger.readonly',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await blogger.postUserInfos.get({
         *     blogId: 'placeholder-value',
         *
         *     maxComments: 'placeholder-value',
         *
         *     postId: 'placeholder-value',
         *
         *     userId: 'placeholder-value',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "kind": "my_kind",
         *   //   "post": {},
         *   //   "post_user_info": {}
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
        get(params: Params$Resource$Postuserinfos$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Postuserinfos$Get, options?: MethodOptions): GaxiosPromise<Schema$PostUserInfo>;
        get(params: Params$Resource$Postuserinfos$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Postuserinfos$Get, options: MethodOptions | BodyResponseCallback<Schema$PostUserInfo>, callback: BodyResponseCallback<Schema$PostUserInfo>): void;
        get(params: Params$Resource$Postuserinfos$Get, callback: BodyResponseCallback<Schema$PostUserInfo>): void;
        get(callback: BodyResponseCallback<Schema$PostUserInfo>): void;
        /**
         * Lists post and user info pairs.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/blogger.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const blogger = google.blogger('v3');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/blogger',
         *       'https://www.googleapis.com/auth/blogger.readonly',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await blogger.postUserInfos.list({
         *     blogId: 'placeholder-value',
         *
         *     endDate: 'placeholder-value',
         *
         *     fetchBodies: 'placeholder-value',
         *
         *     labels: 'placeholder-value',
         *
         *     maxResults: 'placeholder-value',
         *
         *     orderBy: 'placeholder-value',
         *
         *     pageToken: 'placeholder-value',
         *
         *     startDate: 'placeholder-value',
         *
         *     status: 'placeholder-value',
         *
         *     userId: 'placeholder-value',
         *
         *     view: 'placeholder-value',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "items": [],
         *   //   "kind": "my_kind",
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
        list(params: Params$Resource$Postuserinfos$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Postuserinfos$List, options?: MethodOptions): GaxiosPromise<Schema$PostUserInfosList>;
        list(params: Params$Resource$Postuserinfos$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Postuserinfos$List, options: MethodOptions | BodyResponseCallback<Schema$PostUserInfosList>, callback: BodyResponseCallback<Schema$PostUserInfosList>): void;
        list(params: Params$Resource$Postuserinfos$List, callback: BodyResponseCallback<Schema$PostUserInfosList>): void;
        list(callback: BodyResponseCallback<Schema$PostUserInfosList>): void;
    }
    export interface Params$Resource$Postuserinfos$Get extends StandardParameters {
        /**
         *
         */
        blogId?: string;
        /**
         *
         */
        maxComments?: number;
        /**
         *
         */
        postId?: string;
        /**
         *
         */
        userId?: string;
    }
    export interface Params$Resource$Postuserinfos$List extends StandardParameters {
        /**
         *
         */
        blogId?: string;
        /**
         *
         */
        endDate?: string;
        /**
         *
         */
        fetchBodies?: boolean;
        /**
         *
         */
        labels?: string;
        /**
         *
         */
        maxResults?: number;
        /**
         *
         */
        orderBy?: string;
        /**
         *
         */
        pageToken?: string;
        /**
         *
         */
        startDate?: string;
        /**
         *
         */
        status?: string[];
        /**
         *
         */
        userId?: string;
        /**
         *
         */
        view?: string;
    }
    export class Resource$Users {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Gets one user by user_id.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/blogger.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const blogger = google.blogger('v3');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/blogger',
         *       'https://www.googleapis.com/auth/blogger.readonly',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await blogger.users.get({
         *     userId: 'placeholder-value',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "about": "my_about",
         *   //   "blogs": {},
         *   //   "created": "my_created",
         *   //   "displayName": "my_displayName",
         *   //   "id": "my_id",
         *   //   "kind": "my_kind",
         *   //   "locale": {},
         *   //   "selfLink": "my_selfLink",
         *   //   "url": "my_url"
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
        get(params: Params$Resource$Users$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Users$Get, options?: MethodOptions): GaxiosPromise<Schema$User>;
        get(params: Params$Resource$Users$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Users$Get, options: MethodOptions | BodyResponseCallback<Schema$User>, callback: BodyResponseCallback<Schema$User>): void;
        get(params: Params$Resource$Users$Get, callback: BodyResponseCallback<Schema$User>): void;
        get(callback: BodyResponseCallback<Schema$User>): void;
    }
    export interface Params$Resource$Users$Get extends StandardParameters {
        /**
         *
         */
        userId?: string;
    }
    export {};
}
