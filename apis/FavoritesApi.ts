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
  AddFavoriteRequest,
  Favorite,
  FavoriteGroup,
  Success,
  UpdateFavoriteGroupRequest,
} from '../models/index';
import {
    AddFavoriteRequestFromJSON,
    AddFavoriteRequestToJSON,
    FavoriteFromJSON,
    FavoriteToJSON,
    FavoriteGroupFromJSON,
    FavoriteGroupToJSON,
    SuccessFromJSON,
    SuccessToJSON,
    UpdateFavoriteGroupRequestFromJSON,
    UpdateFavoriteGroupRequestToJSON,
} from '../models/index';

export interface AddFavoriteOperationRequest {
    addFavoriteRequest?: AddFavoriteRequest;
}

export interface ClearFavoriteGroupRequest {
    favoriteGroupType: ClearFavoriteGroupFavoriteGroupTypeEnum;
    favoriteGroupName: string;
    userId: string;
}

export interface GetFavoriteRequest {
    favoriteId: string;
}

export interface GetFavoriteGroupRequest {
    favoriteGroupType: GetFavoriteGroupFavoriteGroupTypeEnum;
    favoriteGroupName: string;
    userId: string;
}

export interface GetFavoriteGroupsRequest {
    n?: number;
    offset?: number;
    ownerId?: string;
}

export interface GetFavoritesRequest {
    n?: number;
    offset?: number;
    type?: string;
    tag?: string;
}

export interface RemoveFavoriteRequest {
    favoriteId: string;
}

export interface UpdateFavoriteGroupOperationRequest {
    favoriteGroupType: UpdateFavoriteGroupOperationFavoriteGroupTypeEnum;
    favoriteGroupName: string;
    userId: string;
    updateFavoriteGroupRequest?: UpdateFavoriteGroupRequest;
}

/**
 *
 */
export class FavoritesApi extends runtime.BaseAPI {

    /**
     * Add a new favorite.  Friend groups are named `group_0` through `group_3`. Avatar and World groups are named `avatars1` to `avatars4` and `worlds1` to `worlds4`.  You cannot add people whom you are not friends with to your friends list. Destroying a friendship removes the person as favorite on both sides.
     * Add Favorite
     */
    async addFavoriteRaw(requestParameters: AddFavoriteOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Favorite>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/favorites`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AddFavoriteRequestToJSON(requestParameters['addFavoriteRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => FavoriteFromJSON(jsonValue));
    }

    /**
     * Add a new favorite.  Friend groups are named `group_0` through `group_3`. Avatar and World groups are named `avatars1` to `avatars4` and `worlds1` to `worlds4`.  You cannot add people whom you are not friends with to your friends list. Destroying a friendship removes the person as favorite on both sides.
     * Add Favorite
     */
    async addFavorite(requestParameters: AddFavoriteOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Favorite> {
        const response = await this.addFavoriteRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Clear ALL contents of a specific favorite group.
     * Clear Favorite Group
     */
    async clearFavoriteGroupRaw(requestParameters: ClearFavoriteGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Success>> {
        if (requestParameters['favoriteGroupType'] == null) {
            throw new runtime.RequiredError(
                'favoriteGroupType',
                'Required parameter "favoriteGroupType" was null or undefined when calling clearFavoriteGroup().'
            );
        }

        if (requestParameters['favoriteGroupName'] == null) {
            throw new runtime.RequiredError(
                'favoriteGroupName',
                'Required parameter "favoriteGroupName" was null or undefined when calling clearFavoriteGroup().'
            );
        }

        if (requestParameters['userId'] == null) {
            throw new runtime.RequiredError(
                'userId',
                'Required parameter "userId" was null or undefined when calling clearFavoriteGroup().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/favorite/group/{favoriteGroupType}/{favoriteGroupName}/{userId}`.replace(`{${"favoriteGroupType"}}`, encodeURIComponent(String(requestParameters['favoriteGroupType']))).replace(`{${"favoriteGroupName"}}`, encodeURIComponent(String(requestParameters['favoriteGroupName']))).replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters['userId']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SuccessFromJSON(jsonValue));
    }

    /**
     * Clear ALL contents of a specific favorite group.
     * Clear Favorite Group
     */
    async clearFavoriteGroup(requestParameters: ClearFavoriteGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Success> {
        const response = await this.clearFavoriteGroupRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Return information about a specific Favorite.
     * Show Favorite
     */
    async getFavoriteRaw(requestParameters: GetFavoriteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Favorite>> {
        if (requestParameters['favoriteId'] == null) {
            throw new runtime.RequiredError(
                'favoriteId',
                'Required parameter "favoriteId" was null or undefined when calling getFavorite().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/favorites/{favoriteId}`.replace(`{${"favoriteId"}}`, encodeURIComponent(String(requestParameters['favoriteId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => FavoriteFromJSON(jsonValue));
    }

    /**
     * Return information about a specific Favorite.
     * Show Favorite
     */
    async getFavorite(requestParameters: GetFavoriteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Favorite> {
        const response = await this.getFavoriteRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Fetch information about a specific favorite group.
     * Show Favorite Group
     */
    async getFavoriteGroupRaw(requestParameters: GetFavoriteGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FavoriteGroup>> {
        if (requestParameters['favoriteGroupType'] == null) {
            throw new runtime.RequiredError(
                'favoriteGroupType',
                'Required parameter "favoriteGroupType" was null or undefined when calling getFavoriteGroup().'
            );
        }

        if (requestParameters['favoriteGroupName'] == null) {
            throw new runtime.RequiredError(
                'favoriteGroupName',
                'Required parameter "favoriteGroupName" was null or undefined when calling getFavoriteGroup().'
            );
        }

        if (requestParameters['userId'] == null) {
            throw new runtime.RequiredError(
                'userId',
                'Required parameter "userId" was null or undefined when calling getFavoriteGroup().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/favorite/group/{favoriteGroupType}/{favoriteGroupName}/{userId}`.replace(`{${"favoriteGroupType"}}`, encodeURIComponent(String(requestParameters['favoriteGroupType']))).replace(`{${"favoriteGroupName"}}`, encodeURIComponent(String(requestParameters['favoriteGroupName']))).replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters['userId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => FavoriteGroupFromJSON(jsonValue));
    }

    /**
     * Fetch information about a specific favorite group.
     * Show Favorite Group
     */
    async getFavoriteGroup(requestParameters: GetFavoriteGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FavoriteGroup> {
        const response = await this.getFavoriteGroupRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Return a list of favorite groups owned by a user. Returns the same information as `getFavoriteGroups`.
     * List Favorite Groups
     */
    async getFavoriteGroupsRaw(requestParameters: GetFavoriteGroupsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<FavoriteGroup>>> {
        const queryParameters: any = {};

        if (requestParameters['n'] != null) {
            queryParameters['n'] = requestParameters['n'];
        }

        if (requestParameters['offset'] != null) {
            queryParameters['offset'] = requestParameters['offset'];
        }

        if (requestParameters['ownerId'] != null) {
            queryParameters['ownerId'] = requestParameters['ownerId'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/favorite/groups`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(FavoriteGroupFromJSON));
    }

    /**
     * Return a list of favorite groups owned by a user. Returns the same information as `getFavoriteGroups`.
     * List Favorite Groups
     */
    async getFavoriteGroups(requestParameters: GetFavoriteGroupsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<FavoriteGroup>> {
        const response = await this.getFavoriteGroupsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a list of favorites.
     * List Favorites
     */
    async getFavoritesRaw(requestParameters: GetFavoritesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Favorite>>> {
        const queryParameters: any = {};

        if (requestParameters['n'] != null) {
            queryParameters['n'] = requestParameters['n'];
        }

        if (requestParameters['offset'] != null) {
            queryParameters['offset'] = requestParameters['offset'];
        }

        if (requestParameters['type'] != null) {
            queryParameters['type'] = requestParameters['type'];
        }

        if (requestParameters['tag'] != null) {
            queryParameters['tag'] = requestParameters['tag'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/favorites`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(FavoriteFromJSON));
    }

    /**
     * Returns a list of favorites.
     * List Favorites
     */
    async getFavorites(requestParameters: GetFavoritesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Favorite>> {
        const response = await this.getFavoritesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Remove a favorite from your favorites list.
     * Remove Favorite
     */
    async removeFavoriteRaw(requestParameters: RemoveFavoriteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Success>> {
        if (requestParameters['favoriteId'] == null) {
            throw new runtime.RequiredError(
                'favoriteId',
                'Required parameter "favoriteId" was null or undefined when calling removeFavorite().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/favorites/{favoriteId}`.replace(`{${"favoriteId"}}`, encodeURIComponent(String(requestParameters['favoriteId']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SuccessFromJSON(jsonValue));
    }

    /**
     * Remove a favorite from your favorites list.
     * Remove Favorite
     */
    async removeFavorite(requestParameters: RemoveFavoriteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Success> {
        const response = await this.removeFavoriteRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update information about a specific favorite group.
     * Update Favorite Group
     */
    async updateFavoriteGroupRaw(requestParameters: UpdateFavoriteGroupOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['favoriteGroupType'] == null) {
            throw new runtime.RequiredError(
                'favoriteGroupType',
                'Required parameter "favoriteGroupType" was null or undefined when calling updateFavoriteGroup().'
            );
        }

        if (requestParameters['favoriteGroupName'] == null) {
            throw new runtime.RequiredError(
                'favoriteGroupName',
                'Required parameter "favoriteGroupName" was null or undefined when calling updateFavoriteGroup().'
            );
        }

        if (requestParameters['userId'] == null) {
            throw new runtime.RequiredError(
                'userId',
                'Required parameter "userId" was null or undefined when calling updateFavoriteGroup().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/favorite/group/{favoriteGroupType}/{favoriteGroupName}/{userId}`.replace(`{${"favoriteGroupType"}}`, encodeURIComponent(String(requestParameters['favoriteGroupType']))).replace(`{${"favoriteGroupName"}}`, encodeURIComponent(String(requestParameters['favoriteGroupName']))).replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters['userId']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateFavoriteGroupRequestToJSON(requestParameters['updateFavoriteGroupRequest']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Update information about a specific favorite group.
     * Update Favorite Group
     */
    async updateFavoriteGroup(requestParameters: UpdateFavoriteGroupOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.updateFavoriteGroupRaw(requestParameters, initOverrides);
    }

}

/**
 * @export
 */
export const ClearFavoriteGroupFavoriteGroupTypeEnum = {
    World: 'world',
    Friend: 'friend',
    Avatar: 'avatar'
} as const;
export type ClearFavoriteGroupFavoriteGroupTypeEnum = typeof ClearFavoriteGroupFavoriteGroupTypeEnum[keyof typeof ClearFavoriteGroupFavoriteGroupTypeEnum];
/**
 * @export
 */
export const GetFavoriteGroupFavoriteGroupTypeEnum = {
    World: 'world',
    Friend: 'friend',
    Avatar: 'avatar'
} as const;
export type GetFavoriteGroupFavoriteGroupTypeEnum = typeof GetFavoriteGroupFavoriteGroupTypeEnum[keyof typeof GetFavoriteGroupFavoriteGroupTypeEnum];
/**
 * @export
 */
export const UpdateFavoriteGroupOperationFavoriteGroupTypeEnum = {
    World: 'world',
    Friend: 'friend',
    Avatar: 'avatar'
} as const;
export type UpdateFavoriteGroupOperationFavoriteGroupTypeEnum = typeof UpdateFavoriteGroupOperationFavoriteGroupTypeEnum[keyof typeof UpdateFavoriteGroupOperationFavoriteGroupTypeEnum];
