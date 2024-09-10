/* tslint:disable */
/* eslint-disable */
/**
 * VRChat API Documentation
 * ![VRChat API Banner](https://vrchatapi.github.io/assets/img/api_banner_1500x400.png)  # Welcome to the VRChat API  Before we begin, we would like to state this is a **COMMUNITY DRIVEN PROJECT**. This means that everything you read on here was written by the community itself and is **not** officially supported by VRChat. The documentation is provided \"AS IS\", and any action you take towards VRChat is completely your own responsibility.  The documentation and additional libraries SHALL ONLY be used for applications interacting with VRChat\'s API in accordance with their [Terms of Service](https://hello.vrchat.com/legal) and [Community Guidelines](https://hello.vrchat.com/community-guidelines), and MUST NOT be used for modifying the client, \"avatar ripping\", or other illegal activities. Malicious usage or spamming the API may result in account termination. Certain parts of the API are also more sensitive than others, for example moderation, so please tread extra carefully and read the warnings when present.  ![Tupper Policy on API](https://i.imgur.com/yLlW7Ok.png)  Finally, use of the API using applications other than the approved methods (website, VRChat application, Unity SDK) is not officially supported. VRChat provides no guarantee or support for external applications using the API. Access to API endpoints may break **at any time, without notice**. Therefore, please **do not ping** VRChat Staff in the VRChat Discord if you are having API problems, as they do not provide API support. We will make a best effort in keeping this documentation and associated language libraries up to date, but things might be outdated or missing. If you find that something is no longer valid, please contact us on Discord or [create an issue](https://github.com/vrchatapi/specification/issues) and tell us so we can fix it.  # Getting Started  The VRChat API can be used to programmatically retrieve or update information regarding your profile, friends, avatars, worlds and more. The API consists of two parts, \"Photon\" which is only used in-game, and the \"Web API\" which is used by both the game and the website. This documentation focuses only on the Web API.  The API is designed around the REST ideology, providing semi-simple and usually predictable URIs to access and modify objects. Requests support standard HTTP methods like GET, PUT, POST, and DELETE and standard status codes. Response bodies are always UTF-8 encoded JSON objects, unless explicitly documented otherwise.  <div class=\"callout callout-error\">   <strong>🛑 Warning! Do not touch Photon!</strong><br>   Photon is only used by the in-game client and should <b>not</b> be touched. Doing so may result in permanent account termination. </div>  <div class=\"callout callout-info\">   <strong>ℹ️ Authentication</strong><br>   Read <a href=\"#tag--authentication\">Authentication</a> for how to log in. </div>  # Using the API  For simply exploring what the API can do it is strongly recommended to download [Insomnia](https://insomnia.rest/download), a free and open-source API client that\'s great for sending requests to the API in an orderly fashion. Insomnia allows you to send data in the format that\'s required for VRChat\'s API. It is also possible to try out the API in your browser, by first logging in at [vrchat.com/home](https://vrchat.com/home/) and then going to [vrchat.com/api/1/auth/user](https://vrchat.com/api/1/auth/user), but the information will be much harder to work with.  For more permanent operation such as software development it is instead recommended to use one of the existing language SDKs. This community project maintains API libraries in several languages, which allows you to interact with the API with simple function calls rather than having to implement the HTTP protocol yourself. Most of these libraries are automatically generated from the API specification, sometimes with additional helpful wrapper code to make usage easier. This allows them to be almost automatically updated and expanded upon as soon as a new feature is introduced in the specification itself. The libraries can be found on [GitHub](https://github.com/vrchatapi) or following:  * [NodeJS (JavaScript)](https://www.npmjs.com/package/vrchat) * [Dart](https://pub.dev/packages/vrchat_dart) * [Rust](https://crates.io/crates/vrchatapi) * [C#](https://github.com/vrchatapi/vrchatapi-csharp) * [Python](https://github.com/vrchatapi/vrchatapi-python)  # Pagination  Most endpoints enforce pagination, meaning they will only return 10 entries by default, and never more than 100.<br> Using both the limit and offset parameters allows you to easily paginate through a large number of objects.  | Query Parameter | Type | Description | | ----------|--|------- | | `n` | integer  | The number of objects to return. This value often defaults to 10. Highest limit is always 100.| | `offset` | integer  | A zero-based offset from the default object sorting.|  If a request returns fewer objects than the `limit` parameter, there are no more items available to return.  # Contribution  Do you want to get involved in the documentation effort? Do you want to help improve one of the language API libraries? This project is an [OPEN Open Source Project](https://openopensource.org)! This means that individuals making significant and valuable contributions are given commit-access to the project. It also means we are very open and welcoming of new people making contributions, unlike some more guarded open-source projects.  [![Discord](https://img.shields.io/static/v1?label=vrchatapi&message=discord&color=blueviolet&style=for-the-badge)](https://discord.gg/qjZE9C9fkB)
 *
 * The version of the OpenAPI document: 1.18.1
 * Contact: vrchatapi.lpv0t@aries.fyi
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  APIConfig,
  APIHealth,
  InfoPush,
} from '../models/index';
import {
    APIConfigFromJSON,
    APIConfigToJSON,
    APIHealthFromJSON,
    APIHealthToJSON,
    InfoPushFromJSON,
    InfoPushToJSON,
} from '../models/index';

export interface GetCSSRequest {
    variant?: GetCSSVariantEnum;
    branch?: string;
}

export interface GetInfoPushRequest {
    require?: string;
    include?: string;
}

export interface GetJavaScriptRequest {
    variant?: GetJavaScriptVariantEnum;
    branch?: string;
}

/**
 * 
 */
export class SystemApi extends runtime.BaseAPI {

    /**
     * Fetches the CSS code to the frontend React website.
     * Download CSS
     */
    async getCSSRaw(requestParameters: GetCSSRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        const queryParameters: any = {};

        if (requestParameters['variant'] != null) {
            queryParameters['variant'] = requestParameters['variant'];
        }

        if (requestParameters['branch'] != null) {
            queryParameters['branch'] = requestParameters['branch'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/css/app.css`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<string>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Fetches the CSS code to the frontend React website.
     * Download CSS
     */
    async getCSS(requestParameters: GetCSSRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.getCSSRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * API config contains configuration that the clients needs to work properly.  Currently the most important value here is `clientApiKey` which is used for all other API endpoints.
     * Fetch API Config
     */
    async getConfigRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<APIConfig>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/config`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => APIConfigFromJSON(jsonValue));
    }

    /**
     * API config contains configuration that the clients needs to work properly.  Currently the most important value here is `clientApiKey` which is used for all other API endpoints.
     * Fetch API Config
     */
    async getConfig(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<APIConfig> {
        const response = await this.getConfigRaw(initOverrides);
        return await response.value();
    }

    /**
     * Returns the current number of online users.  **NOTE:** The response type is not a JSON object, but a simple JSON integer.
     * Current Online Users
     */
    async getCurrentOnlineUsersRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<number>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/visits`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<number>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Returns the current number of online users.  **NOTE:** The response type is not a JSON object, but a simple JSON integer.
     * Current Online Users
     */
    async getCurrentOnlineUsers(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<number> {
        const response = await this.getCurrentOnlineUsersRaw(initOverrides);
        return await response.value();
    }

    /**
     * ~~Gets the overall health status, the server name, and the current build version tag of the API.~~  **DEPRECATED:** VRChat has suddenly restricted this endpoint for unknown reasons, and now always return 401 Unauthorized.
     * Check API Health
     * @deprecated
     */
    async getHealthRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<APIHealth>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/health`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => APIHealthFromJSON(jsonValue));
    }

    /**
     * ~~Gets the overall health status, the server name, and the current build version tag of the API.~~  **DEPRECATED:** VRChat has suddenly restricted this endpoint for unknown reasons, and now always return 401 Unauthorized.
     * Check API Health
     * @deprecated
     */
    async getHealth(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<APIHealth> {
        const response = await this.getHealthRaw(initOverrides);
        return await response.value();
    }

    /**
     * IPS (Info Push System) is a system for VRChat to push out dynamic information to the client. This is primarily used by the Quick-Menu info banners, but can also be used to e.g. alert you to update your game to the latest version.  `include` is used to query what Information Pushes should be included in the response. If include is missing or empty, then no notices will normally be returned. This is an \"any of\" search.  `require` is used to limit what Information Pushes should be included in the response. This is usually used in combination with `include`, and is an \"all of\" search.
     * Show Information Notices
     */
    async getInfoPushRaw(requestParameters: GetInfoPushRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<InfoPush>>> {
        const queryParameters: any = {};

        if (requestParameters['require'] != null) {
            queryParameters['require'] = requestParameters['require'];
        }

        if (requestParameters['include'] != null) {
            queryParameters['include'] = requestParameters['include'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/infoPush`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(InfoPushFromJSON));
    }

    /**
     * IPS (Info Push System) is a system for VRChat to push out dynamic information to the client. This is primarily used by the Quick-Menu info banners, but can also be used to e.g. alert you to update your game to the latest version.  `include` is used to query what Information Pushes should be included in the response. If include is missing or empty, then no notices will normally be returned. This is an \"any of\" search.  `require` is used to limit what Information Pushes should be included in the response. This is usually used in combination with `include`, and is an \"all of\" search.
     * Show Information Notices
     */
    async getInfoPush(requestParameters: GetInfoPushRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<InfoPush>> {
        const response = await this.getInfoPushRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Fetches the JavaScript code to the frontend React website.
     * Download JavaScript
     */
    async getJavaScriptRaw(requestParameters: GetJavaScriptRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        const queryParameters: any = {};

        if (requestParameters['variant'] != null) {
            queryParameters['variant'] = requestParameters['variant'];
        }

        if (requestParameters['branch'] != null) {
            queryParameters['branch'] = requestParameters['branch'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/js/app.js`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<string>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Fetches the JavaScript code to the frontend React website.
     * Download JavaScript
     */
    async getJavaScript(requestParameters: GetJavaScriptRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.getJavaScriptRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns the current time of the API server.  **NOTE:** The response type is not a JSON object, but a simple JSON string.
     * Current System Time
     */
    async getSystemTimeRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Date>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/time`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<Date>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Returns the current time of the API server.  **NOTE:** The response type is not a JSON object, but a simple JSON string.
     * Current System Time
     */
    async getSystemTime(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Date> {
        const response = await this.getSystemTimeRaw(initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const GetCSSVariantEnum = {
    Public: 'public',
    Internal: 'internal'
} as const;
export type GetCSSVariantEnum = typeof GetCSSVariantEnum[keyof typeof GetCSSVariantEnum];
/**
 * @export
 */
export const GetJavaScriptVariantEnum = {
    Public: 'public',
    Internal: 'internal'
} as const;
export type GetJavaScriptVariantEnum = typeof GetJavaScriptVariantEnum[keyof typeof GetJavaScriptVariantEnum];
