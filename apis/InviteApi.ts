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
  InviteMessage,
  InviteMessageType,
  InviteRequest,
  InviteResponse,
  Notification,
  RequestInviteRequest,
  SentNotification,
  UpdateInviteMessageRequest,
} from '../models/index';
import {
    InviteMessageFromJSON,
    InviteMessageToJSON,
    InviteMessageTypeFromJSON,
    InviteMessageTypeToJSON,
    InviteRequestFromJSON,
    InviteRequestToJSON,
    InviteResponseFromJSON,
    InviteResponseToJSON,
    NotificationFromJSON,
    NotificationToJSON,
    RequestInviteRequestFromJSON,
    RequestInviteRequestToJSON,
    SentNotificationFromJSON,
    SentNotificationToJSON,
    UpdateInviteMessageRequestFromJSON,
    UpdateInviteMessageRequestToJSON,
} from '../models/index';

export interface GetInviteMessageRequest {
    userId: string;
    messageType: InviteMessageType;
    slot: number;
}

export interface GetInviteMessagesRequest {
    userId: string;
    messageType: InviteMessageType;
}

export interface InviteMyselfToRequest {
    worldId: string;
    instanceId: string;
}

export interface InviteUserRequest {
    userId: string;
    inviteRequest: InviteRequest;
}

export interface RequestInviteOperationRequest {
    userId: string;
    requestInviteRequest?: RequestInviteRequest;
}

export interface ResetInviteMessageRequest {
    userId: string;
    messageType: InviteMessageType;
    slot: number;
}

export interface RespondInviteRequest {
    notificationId: string;
    inviteResponse: InviteResponse;
}

export interface UpdateInviteMessageOperationRequest {
    userId: string;
    messageType: InviteMessageType;
    slot: number;
    updateInviteMessageRequest?: UpdateInviteMessageRequest;
}

/**
 * 
 */
export class InviteApi extends runtime.BaseAPI {

    /**
     * Returns a single Invite Message. This returns the exact same information but less than `getInviteMessages`. Admin Credentials are required to view messages of other users!  Message type refers to a different collection of messages, used during different types of responses.  * `message` = Message during a normal invite * `response` = Message when replying to a message * `request` = Message when requesting an invite * `requestResponse` = Message when replying to a request for invite
     * Get Invite Message
     */
    async getInviteMessageRaw(requestParameters: GetInviteMessageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InviteMessage>> {
        if (requestParameters['userId'] == null) {
            throw new runtime.RequiredError(
                'userId',
                'Required parameter "userId" was null or undefined when calling getInviteMessage().'
            );
        }

        if (requestParameters['messageType'] == null) {
            throw new runtime.RequiredError(
                'messageType',
                'Required parameter "messageType" was null or undefined when calling getInviteMessage().'
            );
        }

        if (requestParameters['slot'] == null) {
            throw new runtime.RequiredError(
                'slot',
                'Required parameter "slot" was null or undefined when calling getInviteMessage().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/message/{userId}/{messageType}/{slot}`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters['userId']))).replace(`{${"messageType"}}`, encodeURIComponent(String(requestParameters['messageType']))).replace(`{${"slot"}}`, encodeURIComponent(String(requestParameters['slot']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InviteMessageFromJSON(jsonValue));
    }

    /**
     * Returns a single Invite Message. This returns the exact same information but less than `getInviteMessages`. Admin Credentials are required to view messages of other users!  Message type refers to a different collection of messages, used during different types of responses.  * `message` = Message during a normal invite * `response` = Message when replying to a message * `request` = Message when requesting an invite * `requestResponse` = Message when replying to a request for invite
     * Get Invite Message
     */
    async getInviteMessage(requestParameters: GetInviteMessageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InviteMessage> {
        const response = await this.getInviteMessageRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a list of all the users Invite Messages. Admin Credentials are required to view messages of other users!  Message type refers to a different collection of messages, used during different types of responses.  * `message` = Message during a normal invite * `response` = Message when replying to a message * `request` = Message when requesting an invite * `requestResponse` = Message when replying to a request for invite
     * List Invite Messages
     */
    async getInviteMessagesRaw(requestParameters: GetInviteMessagesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<InviteMessage>>> {
        if (requestParameters['userId'] == null) {
            throw new runtime.RequiredError(
                'userId',
                'Required parameter "userId" was null or undefined when calling getInviteMessages().'
            );
        }

        if (requestParameters['messageType'] == null) {
            throw new runtime.RequiredError(
                'messageType',
                'Required parameter "messageType" was null or undefined when calling getInviteMessages().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/message/{userId}/{messageType}`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters['userId']))).replace(`{${"messageType"}}`, encodeURIComponent(String(requestParameters['messageType']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(InviteMessageFromJSON));
    }

    /**
     * Returns a list of all the users Invite Messages. Admin Credentials are required to view messages of other users!  Message type refers to a different collection of messages, used during different types of responses.  * `message` = Message during a normal invite * `response` = Message when replying to a message * `request` = Message when requesting an invite * `requestResponse` = Message when replying to a request for invite
     * List Invite Messages
     */
    async getInviteMessages(requestParameters: GetInviteMessagesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<InviteMessage>> {
        const response = await this.getInviteMessagesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Sends self an invite to an instance
     * Invite Myself To Instance
     */
    async inviteMyselfToRaw(requestParameters: InviteMyselfToRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SentNotification>> {
        if (requestParameters['worldId'] == null) {
            throw new runtime.RequiredError(
                'worldId',
                'Required parameter "worldId" was null or undefined when calling inviteMyselfTo().'
            );
        }

        if (requestParameters['instanceId'] == null) {
            throw new runtime.RequiredError(
                'instanceId',
                'Required parameter "instanceId" was null or undefined when calling inviteMyselfTo().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/invite/myself/to/{worldId}:{instanceId}`.replace(`{${"worldId"}}`, encodeURIComponent(String(requestParameters['worldId']))).replace(`{${"instanceId"}}`, encodeURIComponent(String(requestParameters['instanceId']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SentNotificationFromJSON(jsonValue));
    }

    /**
     * Sends self an invite to an instance
     * Invite Myself To Instance
     */
    async inviteMyselfTo(requestParameters: InviteMyselfToRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SentNotification> {
        const response = await this.inviteMyselfToRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Sends an invite to a user. Returns the Notification of type `invite` that was sent.
     * Invite User
     */
    async inviteUserRaw(requestParameters: InviteUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SentNotification>> {
        if (requestParameters['userId'] == null) {
            throw new runtime.RequiredError(
                'userId',
                'Required parameter "userId" was null or undefined when calling inviteUser().'
            );
        }

        if (requestParameters['inviteRequest'] == null) {
            throw new runtime.RequiredError(
                'inviteRequest',
                'Required parameter "inviteRequest" was null or undefined when calling inviteUser().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/invite/{userId}`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters['userId']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: InviteRequestToJSON(requestParameters['inviteRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SentNotificationFromJSON(jsonValue));
    }

    /**
     * Sends an invite to a user. Returns the Notification of type `invite` that was sent.
     * Invite User
     */
    async inviteUser(requestParameters: InviteUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SentNotification> {
        const response = await this.inviteUserRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Requests an invite from a user. Returns the Notification of type `requestInvite` that was sent.
     * Request Invite
     */
    async requestInviteRaw(requestParameters: RequestInviteOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Notification>> {
        if (requestParameters['userId'] == null) {
            throw new runtime.RequiredError(
                'userId',
                'Required parameter "userId" was null or undefined when calling requestInvite().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/requestInvite/{userId}`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters['userId']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: RequestInviteRequestToJSON(requestParameters['requestInviteRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => NotificationFromJSON(jsonValue));
    }

    /**
     * Requests an invite from a user. Returns the Notification of type `requestInvite` that was sent.
     * Request Invite
     */
    async requestInvite(requestParameters: RequestInviteOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Notification> {
        const response = await this.requestInviteRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Resets a single Invite Message back to its original message, and then returns a list of all of them. Admin Credentials are required to update messages of other users!  Resetting a message respects the rate-limit, so it is not possible to reset within the 60 minutes countdown. Resetting it does however not set the rate-limit to 60 like when editing it. It is possible to edit it right after resetting it. Trying to edit a message before the cooldown timer expires results in a 429 \"Too Fast Error\".  Message type refers to a different collection of messages, used during different types of responses.  * `message` = Message during a normal invite * `response` = Message when replying to a message * `request` = Message when requesting an invite * `requestResponse` = Message when replying to a request for invite  The DELETE endpoint does not have/require any request body.
     * Reset Invite Message
     */
    async resetInviteMessageRaw(requestParameters: ResetInviteMessageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<InviteMessage>>> {
        if (requestParameters['userId'] == null) {
            throw new runtime.RequiredError(
                'userId',
                'Required parameter "userId" was null or undefined when calling resetInviteMessage().'
            );
        }

        if (requestParameters['messageType'] == null) {
            throw new runtime.RequiredError(
                'messageType',
                'Required parameter "messageType" was null or undefined when calling resetInviteMessage().'
            );
        }

        if (requestParameters['slot'] == null) {
            throw new runtime.RequiredError(
                'slot',
                'Required parameter "slot" was null or undefined when calling resetInviteMessage().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/message/{userId}/{messageType}/{slot}`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters['userId']))).replace(`{${"messageType"}}`, encodeURIComponent(String(requestParameters['messageType']))).replace(`{${"slot"}}`, encodeURIComponent(String(requestParameters['slot']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(InviteMessageFromJSON));
    }

    /**
     * Resets a single Invite Message back to its original message, and then returns a list of all of them. Admin Credentials are required to update messages of other users!  Resetting a message respects the rate-limit, so it is not possible to reset within the 60 minutes countdown. Resetting it does however not set the rate-limit to 60 like when editing it. It is possible to edit it right after resetting it. Trying to edit a message before the cooldown timer expires results in a 429 \"Too Fast Error\".  Message type refers to a different collection of messages, used during different types of responses.  * `message` = Message during a normal invite * `response` = Message when replying to a message * `request` = Message when requesting an invite * `requestResponse` = Message when replying to a request for invite  The DELETE endpoint does not have/require any request body.
     * Reset Invite Message
     */
    async resetInviteMessage(requestParameters: ResetInviteMessageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<InviteMessage>> {
        const response = await this.resetInviteMessageRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Respond to an invite request by sending a world invite to the requesting user. `:notificationId` is the ID of the requesting notification.
     * Respond Invite
     */
    async respondInviteRaw(requestParameters: RespondInviteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Notification>> {
        if (requestParameters['notificationId'] == null) {
            throw new runtime.RequiredError(
                'notificationId',
                'Required parameter "notificationId" was null or undefined when calling respondInvite().'
            );
        }

        if (requestParameters['inviteResponse'] == null) {
            throw new runtime.RequiredError(
                'inviteResponse',
                'Required parameter "inviteResponse" was null or undefined when calling respondInvite().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/invite/{notificationId}/response`.replace(`{${"notificationId"}}`, encodeURIComponent(String(requestParameters['notificationId']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: InviteResponseToJSON(requestParameters['inviteResponse']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => NotificationFromJSON(jsonValue));
    }

    /**
     * Respond to an invite request by sending a world invite to the requesting user. `:notificationId` is the ID of the requesting notification.
     * Respond Invite
     */
    async respondInvite(requestParameters: RespondInviteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Notification> {
        const response = await this.respondInviteRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates a single Invite Message and then returns a list of all of them. Admin Credentials are required to update messages of other users!  Updating a message automatically sets the cooldown timer to 60 minutes. Trying to edit a message before the cooldown timer expires results in a 429 \"Too Fast Error\".  Message type refers to a different collection of messages, used during different types of responses.  * `message` = Message during a normal invite * `response` = Message when replying to a message * `request` = Message when requesting an invite * `requestResponse` = Message when replying to a request for invite
     * Update Invite Message
     */
    async updateInviteMessageRaw(requestParameters: UpdateInviteMessageOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<InviteMessage>>> {
        if (requestParameters['userId'] == null) {
            throw new runtime.RequiredError(
                'userId',
                'Required parameter "userId" was null or undefined when calling updateInviteMessage().'
            );
        }

        if (requestParameters['messageType'] == null) {
            throw new runtime.RequiredError(
                'messageType',
                'Required parameter "messageType" was null or undefined when calling updateInviteMessage().'
            );
        }

        if (requestParameters['slot'] == null) {
            throw new runtime.RequiredError(
                'slot',
                'Required parameter "slot" was null or undefined when calling updateInviteMessage().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/message/{userId}/{messageType}/{slot}`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters['userId']))).replace(`{${"messageType"}}`, encodeURIComponent(String(requestParameters['messageType']))).replace(`{${"slot"}}`, encodeURIComponent(String(requestParameters['slot']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateInviteMessageRequestToJSON(requestParameters['updateInviteMessageRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(InviteMessageFromJSON));
    }

    /**
     * Updates a single Invite Message and then returns a list of all of them. Admin Credentials are required to update messages of other users!  Updating a message automatically sets the cooldown timer to 60 minutes. Trying to edit a message before the cooldown timer expires results in a 429 \"Too Fast Error\".  Message type refers to a different collection of messages, used during different types of responses.  * `message` = Message during a normal invite * `response` = Message when replying to a message * `request` = Message when requesting an invite * `requestResponse` = Message when replying to a request for invite
     * Update Invite Message
     */
    async updateInviteMessage(requestParameters: UpdateInviteMessageOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<InviteMessage>> {
        const response = await this.updateInviteMessageRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
