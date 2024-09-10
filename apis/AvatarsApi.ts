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
  Avatar,
  CreateAvatarRequest,
  CurrentUser,
  OrderOption,
  ReleaseStatus,
  SortOption,
  UpdateAvatarRequest,
} from '../models/index';
import {
    AvatarFromJSON,
    AvatarToJSON,
    CreateAvatarRequestFromJSON,
    CreateAvatarRequestToJSON,
    CurrentUserFromJSON,
    CurrentUserToJSON,
    OrderOptionFromJSON,
    OrderOptionToJSON,
    ReleaseStatusFromJSON,
    ReleaseStatusToJSON,
    SortOptionFromJSON,
    SortOptionToJSON,
    UpdateAvatarRequestFromJSON,
    UpdateAvatarRequestToJSON,
} from '../models/index';

export interface CreateAvatarOperationRequest {
    createAvatarRequest?: CreateAvatarRequest;
}

export interface DeleteAvatarRequest {
    avatarId: string;
}

export interface GetAvatarRequest {
    avatarId: string;
}

export interface GetFavoritedAvatarsRequest {
    featured?: boolean;
    sort?: SortOption;
    n?: number;
    order?: OrderOption;
    offset?: number;
    search?: string;
    tag?: string;
    notag?: string;
    releaseStatus?: ReleaseStatus;
    maxUnityVersion?: string;
    minUnityVersion?: string;
    platform?: string;
    userId?: string;
}

export interface GetOwnAvatarRequest {
    userId: string;
}

export interface SearchAvatarsRequest {
    featured?: boolean;
    sort?: SortOption;
    user?: SearchAvatarsUserEnum;
    userId?: string;
    n?: number;
    order?: OrderOption;
    offset?: number;
    tag?: string;
    notag?: string;
    releaseStatus?: ReleaseStatus;
    maxUnityVersion?: string;
    minUnityVersion?: string;
    platform?: string;
}

export interface SelectAvatarRequest {
    avatarId: string;
}

export interface SelectFallbackAvatarRequest {
    avatarId: string;
}

export interface UpdateAvatarOperationRequest {
    avatarId: string;
    updateAvatarRequest?: UpdateAvatarRequest;
}

/**
 * 
 */
export class AvatarsApi extends runtime.BaseAPI {

    /**
     * Create an avatar. It\'s possible to optionally specify a ID if you want a custom one. Attempting to create an Avatar with an already claimed ID will result in a DB error.
     * Create Avatar
     */
    async createAvatarRaw(requestParameters: CreateAvatarOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Avatar>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/avatars`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateAvatarRequestToJSON(requestParameters['createAvatarRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AvatarFromJSON(jsonValue));
    }

    /**
     * Create an avatar. It\'s possible to optionally specify a ID if you want a custom one. Attempting to create an Avatar with an already claimed ID will result in a DB error.
     * Create Avatar
     */
    async createAvatar(requestParameters: CreateAvatarOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Avatar> {
        const response = await this.createAvatarRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete an avatar. Notice an avatar is never fully \"deleted\", only its ReleaseStatus is set to \"hidden\" and the linked Files are deleted. The AvatarID is permanently reserved.
     * Delete Avatar
     */
    async deleteAvatarRaw(requestParameters: DeleteAvatarRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Avatar>> {
        if (requestParameters['avatarId'] == null) {
            throw new runtime.RequiredError(
                'avatarId',
                'Required parameter "avatarId" was null or undefined when calling deleteAvatar().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/avatars/{avatarId}`.replace(`{${"avatarId"}}`, encodeURIComponent(String(requestParameters['avatarId']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AvatarFromJSON(jsonValue));
    }

    /**
     * Delete an avatar. Notice an avatar is never fully \"deleted\", only its ReleaseStatus is set to \"hidden\" and the linked Files are deleted. The AvatarID is permanently reserved.
     * Delete Avatar
     */
    async deleteAvatar(requestParameters: DeleteAvatarRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Avatar> {
        const response = await this.deleteAvatarRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get information about a specific Avatar.
     * Get Avatar
     */
    async getAvatarRaw(requestParameters: GetAvatarRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Avatar>> {
        if (requestParameters['avatarId'] == null) {
            throw new runtime.RequiredError(
                'avatarId',
                'Required parameter "avatarId" was null or undefined when calling getAvatar().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/avatars/{avatarId}`.replace(`{${"avatarId"}}`, encodeURIComponent(String(requestParameters['avatarId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AvatarFromJSON(jsonValue));
    }

    /**
     * Get information about a specific Avatar.
     * Get Avatar
     */
    async getAvatar(requestParameters: GetAvatarRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Avatar> {
        const response = await this.getAvatarRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Search and list favorited avatars by query filters.
     * List Favorited Avatars
     */
    async getFavoritedAvatarsRaw(requestParameters: GetFavoritedAvatarsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Avatar>>> {
        const queryParameters: any = {};

        if (requestParameters['featured'] != null) {
            queryParameters['featured'] = requestParameters['featured'];
        }

        if (requestParameters['sort'] != null) {
            queryParameters['sort'] = requestParameters['sort'];
        }

        if (requestParameters['n'] != null) {
            queryParameters['n'] = requestParameters['n'];
        }

        if (requestParameters['order'] != null) {
            queryParameters['order'] = requestParameters['order'];
        }

        if (requestParameters['offset'] != null) {
            queryParameters['offset'] = requestParameters['offset'];
        }

        if (requestParameters['search'] != null) {
            queryParameters['search'] = requestParameters['search'];
        }

        if (requestParameters['tag'] != null) {
            queryParameters['tag'] = requestParameters['tag'];
        }

        if (requestParameters['notag'] != null) {
            queryParameters['notag'] = requestParameters['notag'];
        }

        if (requestParameters['releaseStatus'] != null) {
            queryParameters['releaseStatus'] = requestParameters['releaseStatus'];
        }

        if (requestParameters['maxUnityVersion'] != null) {
            queryParameters['maxUnityVersion'] = requestParameters['maxUnityVersion'];
        }

        if (requestParameters['minUnityVersion'] != null) {
            queryParameters['minUnityVersion'] = requestParameters['minUnityVersion'];
        }

        if (requestParameters['platform'] != null) {
            queryParameters['platform'] = requestParameters['platform'];
        }

        if (requestParameters['userId'] != null) {
            queryParameters['userId'] = requestParameters['userId'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/avatars/favorites`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(AvatarFromJSON));
    }

    /**
     * Search and list favorited avatars by query filters.
     * List Favorited Avatars
     */
    async getFavoritedAvatars(requestParameters: GetFavoritedAvatarsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Avatar>> {
        const response = await this.getFavoritedAvatarsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get the current avatar for the user. This will return an error for any other user than the one logged in.
     * Get Own Avatar
     */
    async getOwnAvatarRaw(requestParameters: GetOwnAvatarRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Avatar>> {
        if (requestParameters['userId'] == null) {
            throw new runtime.RequiredError(
                'userId',
                'Required parameter "userId" was null or undefined when calling getOwnAvatar().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/users/{userId}/avatar`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters['userId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AvatarFromJSON(jsonValue));
    }

    /**
     * Get the current avatar for the user. This will return an error for any other user than the one logged in.
     * Get Own Avatar
     */
    async getOwnAvatar(requestParameters: GetOwnAvatarRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Avatar> {
        const response = await this.getOwnAvatarRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Search and list avatars by query filters. You can only search your own or featured avatars. It is not possible as a normal user to search other peoples avatars.
     * Search Avatars
     */
    async searchAvatarsRaw(requestParameters: SearchAvatarsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Avatar>>> {
        const queryParameters: any = {};

        if (requestParameters['featured'] != null) {
            queryParameters['featured'] = requestParameters['featured'];
        }

        if (requestParameters['sort'] != null) {
            queryParameters['sort'] = requestParameters['sort'];
        }

        if (requestParameters['user'] != null) {
            queryParameters['user'] = requestParameters['user'];
        }

        if (requestParameters['userId'] != null) {
            queryParameters['userId'] = requestParameters['userId'];
        }

        if (requestParameters['n'] != null) {
            queryParameters['n'] = requestParameters['n'];
        }

        if (requestParameters['order'] != null) {
            queryParameters['order'] = requestParameters['order'];
        }

        if (requestParameters['offset'] != null) {
            queryParameters['offset'] = requestParameters['offset'];
        }

        if (requestParameters['tag'] != null) {
            queryParameters['tag'] = requestParameters['tag'];
        }

        if (requestParameters['notag'] != null) {
            queryParameters['notag'] = requestParameters['notag'];
        }

        if (requestParameters['releaseStatus'] != null) {
            queryParameters['releaseStatus'] = requestParameters['releaseStatus'];
        }

        if (requestParameters['maxUnityVersion'] != null) {
            queryParameters['maxUnityVersion'] = requestParameters['maxUnityVersion'];
        }

        if (requestParameters['minUnityVersion'] != null) {
            queryParameters['minUnityVersion'] = requestParameters['minUnityVersion'];
        }

        if (requestParameters['platform'] != null) {
            queryParameters['platform'] = requestParameters['platform'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/avatars`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(AvatarFromJSON));
    }

    /**
     * Search and list avatars by query filters. You can only search your own or featured avatars. It is not possible as a normal user to search other peoples avatars.
     * Search Avatars
     */
    async searchAvatars(requestParameters: SearchAvatarsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Avatar>> {
        const response = await this.searchAvatarsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Switches into that avatar.
     * Select Avatar
     */
    async selectAvatarRaw(requestParameters: SelectAvatarRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CurrentUser>> {
        if (requestParameters['avatarId'] == null) {
            throw new runtime.RequiredError(
                'avatarId',
                'Required parameter "avatarId" was null or undefined when calling selectAvatar().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/avatars/{avatarId}/select`.replace(`{${"avatarId"}}`, encodeURIComponent(String(requestParameters['avatarId']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CurrentUserFromJSON(jsonValue));
    }

    /**
     * Switches into that avatar.
     * Select Avatar
     */
    async selectAvatar(requestParameters: SelectAvatarRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CurrentUser> {
        const response = await this.selectAvatarRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Switches into that avatar as your fallback avatar.
     * Select Fallback Avatar
     */
    async selectFallbackAvatarRaw(requestParameters: SelectFallbackAvatarRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CurrentUser>> {
        if (requestParameters['avatarId'] == null) {
            throw new runtime.RequiredError(
                'avatarId',
                'Required parameter "avatarId" was null or undefined when calling selectFallbackAvatar().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/avatars/{avatarId}/selectFallback`.replace(`{${"avatarId"}}`, encodeURIComponent(String(requestParameters['avatarId']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CurrentUserFromJSON(jsonValue));
    }

    /**
     * Switches into that avatar as your fallback avatar.
     * Select Fallback Avatar
     */
    async selectFallbackAvatar(requestParameters: SelectFallbackAvatarRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CurrentUser> {
        const response = await this.selectFallbackAvatarRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update information about a specific avatar.
     * Update Avatar
     */
    async updateAvatarRaw(requestParameters: UpdateAvatarOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Avatar>> {
        if (requestParameters['avatarId'] == null) {
            throw new runtime.RequiredError(
                'avatarId',
                'Required parameter "avatarId" was null or undefined when calling updateAvatar().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/avatars/{avatarId}`.replace(`{${"avatarId"}}`, encodeURIComponent(String(requestParameters['avatarId']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateAvatarRequestToJSON(requestParameters['updateAvatarRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AvatarFromJSON(jsonValue));
    }

    /**
     * Update information about a specific avatar.
     * Update Avatar
     */
    async updateAvatar(requestParameters: UpdateAvatarOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Avatar> {
        const response = await this.updateAvatarRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const SearchAvatarsUserEnum = {
    Me: 'me'
} as const;
export type SearchAvatarsUserEnum = typeof SearchAvatarsUserEnum[keyof typeof SearchAvatarsUserEnum];