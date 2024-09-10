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
  ModerateUserRequest,
  PlayerModeration,
  Success,
} from '../models/index';
import {
    ModerateUserRequestFromJSON,
    ModerateUserRequestToJSON,
    PlayerModerationFromJSON,
    PlayerModerationToJSON,
    SuccessFromJSON,
    SuccessToJSON,
} from '../models/index';

export interface DeletePlayerModerationRequest {
    playerModerationId: string;
}

export interface GetPlayerModerationRequest {
    playerModerationId: string;
}

export interface GetPlayerModerationsRequest {
    type?: string;
    targetUserId?: string;
}

export interface ModerateUserOperationRequest {
    moderateUserRequest: ModerateUserRequest;
}

export interface UnmoderateUserRequest {
    moderateUserRequest: ModerateUserRequest;
}

/**
 * 
 */
export class PlayermoderationApi extends runtime.BaseAPI {

    /**
     * ⚠️ **This will delete every single player moderation you\'ve ever made.**
     * Clear All Player Moderations
     */
    async clearAllPlayerModerationsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Success>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/auth/user/playermoderations`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SuccessFromJSON(jsonValue));
    }

    /**
     * ⚠️ **This will delete every single player moderation you\'ve ever made.**
     * Clear All Player Moderations
     */
    async clearAllPlayerModerations(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Success> {
        const response = await this.clearAllPlayerModerationsRaw(initOverrides);
        return await response.value();
    }

    /**
     * Deletes a specific player moderation based on it\'s `pmod_` ID. The website uses `unmoderateUser` instead. You can delete the same player moderation multiple times successfully.
     * Delete Player Moderation
     */
    async deletePlayerModerationRaw(requestParameters: DeletePlayerModerationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Success>> {
        if (requestParameters['playerModerationId'] == null) {
            throw new runtime.RequiredError(
                'playerModerationId',
                'Required parameter "playerModerationId" was null or undefined when calling deletePlayerModeration().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/auth/user/playermoderations/{playerModerationId}`.replace(`{${"playerModerationId"}}`, encodeURIComponent(String(requestParameters['playerModerationId']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SuccessFromJSON(jsonValue));
    }

    /**
     * Deletes a specific player moderation based on it\'s `pmod_` ID. The website uses `unmoderateUser` instead. You can delete the same player moderation multiple times successfully.
     * Delete Player Moderation
     */
    async deletePlayerModeration(requestParameters: DeletePlayerModerationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Success> {
        const response = await this.deletePlayerModerationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a single Player Moderation. This returns the exact same amount of information as the more generalised `getPlayerModerations`.
     * Get Player Moderation
     */
    async getPlayerModerationRaw(requestParameters: GetPlayerModerationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PlayerModeration>> {
        if (requestParameters['playerModerationId'] == null) {
            throw new runtime.RequiredError(
                'playerModerationId',
                'Required parameter "playerModerationId" was null or undefined when calling getPlayerModeration().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/auth/user/playermoderations/{playerModerationId}`.replace(`{${"playerModerationId"}}`, encodeURIComponent(String(requestParameters['playerModerationId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PlayerModerationFromJSON(jsonValue));
    }

    /**
     * Returns a single Player Moderation. This returns the exact same amount of information as the more generalised `getPlayerModerations`.
     * Get Player Moderation
     */
    async getPlayerModeration(requestParameters: GetPlayerModerationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PlayerModeration> {
        const response = await this.getPlayerModerationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a list of all player moderations made by **you**.  This endpoint does not have pagination, and will return *all* results. Use query parameters to limit your query if needed.
     * Search Player Moderations
     */
    async getPlayerModerationsRaw(requestParameters: GetPlayerModerationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<PlayerModeration>>> {
        const queryParameters: any = {};

        if (requestParameters['type'] != null) {
            queryParameters['type'] = requestParameters['type'];
        }

        if (requestParameters['targetUserId'] != null) {
            queryParameters['targetUserId'] = requestParameters['targetUserId'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/auth/user/playermoderations`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(PlayerModerationFromJSON));
    }

    /**
     * Returns a list of all player moderations made by **you**.  This endpoint does not have pagination, and will return *all* results. Use query parameters to limit your query if needed.
     * Search Player Moderations
     */
    async getPlayerModerations(requestParameters: GetPlayerModerationsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<PlayerModeration>> {
        const response = await this.getPlayerModerationsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Moderate a user, e.g. unmute them or show their avatar.  Please see the [Player Moderation docs](https://vrchatapi.github.io/docs/api/#tag--playermoderation) on what playerModerations are, and how they differ from staff moderations.
     * Moderate User
     */
    async moderateUserRaw(requestParameters: ModerateUserOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PlayerModeration>> {
        if (requestParameters['moderateUserRequest'] == null) {
            throw new runtime.RequiredError(
                'moderateUserRequest',
                'Required parameter "moderateUserRequest" was null or undefined when calling moderateUser().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/auth/user/playermoderations`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ModerateUserRequestToJSON(requestParameters['moderateUserRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PlayerModerationFromJSON(jsonValue));
    }

    /**
     * Moderate a user, e.g. unmute them or show their avatar.  Please see the [Player Moderation docs](https://vrchatapi.github.io/docs/api/#tag--playermoderation) on what playerModerations are, and how they differ from staff moderations.
     * Moderate User
     */
    async moderateUser(requestParameters: ModerateUserOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PlayerModeration> {
        const response = await this.moderateUserRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Removes a player moderation previously added through `moderateUser`. E.g if you previously have shown their avatar, but now want to reset it to default.
     * Unmoderate User
     */
    async unmoderateUserRaw(requestParameters: UnmoderateUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Success>> {
        if (requestParameters['moderateUserRequest'] == null) {
            throw new runtime.RequiredError(
                'moderateUserRequest',
                'Required parameter "moderateUserRequest" was null or undefined when calling unmoderateUser().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/auth/user/unplayermoderate`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: ModerateUserRequestToJSON(requestParameters['moderateUserRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SuccessFromJSON(jsonValue));
    }

    /**
     * Removes a player moderation previously added through `moderateUser`. E.g if you previously have shown their avatar, but now want to reset it to default.
     * Unmoderate User
     */
    async unmoderateUser(requestParameters: UnmoderateUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Success> {
        const response = await this.unmoderateUserRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
