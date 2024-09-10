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
  Notification,
  Success,
} from '../models/index';
import {
    NotificationFromJSON,
    NotificationToJSON,
    SuccessFromJSON,
    SuccessToJSON,
} from '../models/index';

export interface AcceptFriendRequestRequest {
    notificationId: string;
}

export interface DeleteNotificationRequest {
    notificationId: string;
}

export interface GetNotificationsRequest {
    type?: string;
    sent?: boolean;
    hidden?: boolean;
    after?: string;
    n?: number;
    offset?: number;
}

export interface MarkNotificationAsReadRequest {
    notificationId: string;
}

/**
 * 
 */
export class NotificationsApi extends runtime.BaseAPI {

    /**
     * Accept a friend request by notification `frq_` ID. Friend requests can be found using the NotificationsAPI `getNotifications` by filtering of type `friendRequest`.
     * Accept Friend Request
     */
    async acceptFriendRequestRaw(requestParameters: AcceptFriendRequestRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Success>> {
        if (requestParameters['notificationId'] == null) {
            throw new runtime.RequiredError(
                'notificationId',
                'Required parameter "notificationId" was null or undefined when calling acceptFriendRequest().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/auth/user/notifications/{notificationId}/accept`.replace(`{${"notificationId"}}`, encodeURIComponent(String(requestParameters['notificationId']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SuccessFromJSON(jsonValue));
    }

    /**
     * Accept a friend request by notification `frq_` ID. Friend requests can be found using the NotificationsAPI `getNotifications` by filtering of type `friendRequest`.
     * Accept Friend Request
     */
    async acceptFriendRequest(requestParameters: AcceptFriendRequestRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Success> {
        const response = await this.acceptFriendRequestRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Clear **all** notifications.
     * Clear All Notifications
     */
    async clearNotificationsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Success>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/auth/user/notifications/clear`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SuccessFromJSON(jsonValue));
    }

    /**
     * Clear **all** notifications.
     * Clear All Notifications
     */
    async clearNotifications(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Success> {
        const response = await this.clearNotificationsRaw(initOverrides);
        return await response.value();
    }

    /**
     * Delete a notification.
     * Delete Notification
     */
    async deleteNotificationRaw(requestParameters: DeleteNotificationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Notification>> {
        if (requestParameters['notificationId'] == null) {
            throw new runtime.RequiredError(
                'notificationId',
                'Required parameter "notificationId" was null or undefined when calling deleteNotification().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/auth/user/notifications/{notificationId}/hide`.replace(`{${"notificationId"}}`, encodeURIComponent(String(requestParameters['notificationId']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => NotificationFromJSON(jsonValue));
    }

    /**
     * Delete a notification.
     * Delete Notification
     */
    async deleteNotification(requestParameters: DeleteNotificationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Notification> {
        const response = await this.deleteNotificationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve all of the current user\'s notifications.
     * List Notifications
     */
    async getNotificationsRaw(requestParameters: GetNotificationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Notification>>> {
        const queryParameters: any = {};

        if (requestParameters['type'] != null) {
            queryParameters['type'] = requestParameters['type'];
        }

        if (requestParameters['sent'] != null) {
            queryParameters['sent'] = requestParameters['sent'];
        }

        if (requestParameters['hidden'] != null) {
            queryParameters['hidden'] = requestParameters['hidden'];
        }

        if (requestParameters['after'] != null) {
            queryParameters['after'] = requestParameters['after'];
        }

        if (requestParameters['n'] != null) {
            queryParameters['n'] = requestParameters['n'];
        }

        if (requestParameters['offset'] != null) {
            queryParameters['offset'] = requestParameters['offset'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/auth/user/notifications`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(NotificationFromJSON));
    }

    /**
     * Retrieve all of the current user\'s notifications.
     * List Notifications
     */
    async getNotifications(requestParameters: GetNotificationsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Notification>> {
        const response = await this.getNotificationsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Mark a notification as seen.
     * Mark Notification As Read
     */
    async markNotificationAsReadRaw(requestParameters: MarkNotificationAsReadRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Notification>> {
        if (requestParameters['notificationId'] == null) {
            throw new runtime.RequiredError(
                'notificationId',
                'Required parameter "notificationId" was null or undefined when calling markNotificationAsRead().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/auth/user/notifications/{notificationId}/see`.replace(`{${"notificationId"}}`, encodeURIComponent(String(requestParameters['notificationId']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => NotificationFromJSON(jsonValue));
    }

    /**
     * Mark a notification as seen.
     * Mark Notification As Read
     */
    async markNotificationAsRead(requestParameters: MarkNotificationAsReadRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Notification> {
        const response = await this.markNotificationAsReadRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
