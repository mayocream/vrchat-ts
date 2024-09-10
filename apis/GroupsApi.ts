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
  AddGroupGalleryImageRequest,
  BanGroupMemberRequest,
  CreateGroupAnnouncementRequest,
  CreateGroupGalleryRequest,
  CreateGroupInviteRequest,
  CreateGroupPostRequest,
  CreateGroupRequest,
  CreateGroupRoleRequest,
  Group,
  GroupAnnouncement,
  GroupGallery,
  GroupGalleryImage,
  GroupInstance,
  GroupLimitedMember,
  GroupMember,
  GroupPermission,
  GroupPost,
  GroupRole,
  GroupSearchSort,
  LimitedGroup,
  PaginatedGroupAuditLogEntryList,
  RespondGroupJoinRequest,
  Success,
  UpdateGroupGalleryRequest,
  UpdateGroupMemberRequest,
  UpdateGroupRequest,
  UpdateGroupRoleRequest,
} from '../models/index';
import {
    AddGroupGalleryImageRequestFromJSON,
    AddGroupGalleryImageRequestToJSON,
    BanGroupMemberRequestFromJSON,
    BanGroupMemberRequestToJSON,
    CreateGroupAnnouncementRequestFromJSON,
    CreateGroupAnnouncementRequestToJSON,
    CreateGroupGalleryRequestFromJSON,
    CreateGroupGalleryRequestToJSON,
    CreateGroupInviteRequestFromJSON,
    CreateGroupInviteRequestToJSON,
    CreateGroupPostRequestFromJSON,
    CreateGroupPostRequestToJSON,
    CreateGroupRequestFromJSON,
    CreateGroupRequestToJSON,
    CreateGroupRoleRequestFromJSON,
    CreateGroupRoleRequestToJSON,
    GroupFromJSON,
    GroupToJSON,
    GroupAnnouncementFromJSON,
    GroupAnnouncementToJSON,
    GroupGalleryFromJSON,
    GroupGalleryToJSON,
    GroupGalleryImageFromJSON,
    GroupGalleryImageToJSON,
    GroupInstanceFromJSON,
    GroupInstanceToJSON,
    GroupLimitedMemberFromJSON,
    GroupLimitedMemberToJSON,
    GroupMemberFromJSON,
    GroupMemberToJSON,
    GroupPermissionFromJSON,
    GroupPermissionToJSON,
    GroupPostFromJSON,
    GroupPostToJSON,
    GroupRoleFromJSON,
    GroupRoleToJSON,
    GroupSearchSortFromJSON,
    GroupSearchSortToJSON,
    LimitedGroupFromJSON,
    LimitedGroupToJSON,
    PaginatedGroupAuditLogEntryListFromJSON,
    PaginatedGroupAuditLogEntryListToJSON,
    RespondGroupJoinRequestFromJSON,
    RespondGroupJoinRequestToJSON,
    SuccessFromJSON,
    SuccessToJSON,
    UpdateGroupGalleryRequestFromJSON,
    UpdateGroupGalleryRequestToJSON,
    UpdateGroupMemberRequestFromJSON,
    UpdateGroupMemberRequestToJSON,
    UpdateGroupRequestFromJSON,
    UpdateGroupRequestToJSON,
    UpdateGroupRoleRequestFromJSON,
    UpdateGroupRoleRequestToJSON,
} from '../models/index';

export interface AddGroupGalleryImageOperationRequest {
    groupId: string;
    groupGalleryId: string;
    addGroupGalleryImageRequest: AddGroupGalleryImageRequest;
}

export interface AddGroupMemberRoleRequest {
    groupId: string;
    userId: string;
    groupRoleId: string;
}

export interface AddGroupPostRequest {
    groupId: string;
    createGroupPostRequest: CreateGroupPostRequest;
}

export interface BanGroupMemberOperationRequest {
    groupId: string;
    banGroupMemberRequest: BanGroupMemberRequest;
}

export interface CancelGroupRequestRequest {
    groupId: string;
}

export interface CreateGroupOperationRequest {
    createGroupRequest: CreateGroupRequest;
}

export interface CreateGroupAnnouncementOperationRequest {
    groupId: string;
    createGroupAnnouncementRequest: CreateGroupAnnouncementRequest;
}

export interface CreateGroupGalleryOperationRequest {
    groupId: string;
    createGroupGalleryRequest: CreateGroupGalleryRequest;
}

export interface CreateGroupInviteOperationRequest {
    groupId: string;
    createGroupInviteRequest: CreateGroupInviteRequest;
}

export interface CreateGroupRoleOperationRequest {
    groupId: string;
    createGroupRoleRequest: CreateGroupRoleRequest;
}

export interface DeleteGroupRequest {
    groupId: string;
}

export interface DeleteGroupAnnouncementRequest {
    groupId: string;
}

export interface DeleteGroupGalleryRequest {
    groupId: string;
    groupGalleryId: string;
}

export interface DeleteGroupGalleryImageRequest {
    groupId: string;
    groupGalleryId: string;
    groupGalleryImageId: string;
}

export interface DeleteGroupInviteRequest {
    groupId: string;
    userId: string;
}

export interface DeleteGroupPostRequest {
    groupId: string;
    notificationId: string;
}

export interface DeleteGroupRoleRequest {
    groupId: string;
    groupRoleId: string;
}

export interface GetGroupRequest {
    groupId: string;
    includeRoles?: boolean;
}

export interface GetGroupAnnouncementsRequest {
    groupId: string;
}

export interface GetGroupAuditLogsRequest {
    groupId: string;
    n?: number;
    offset?: number;
    startDate?: Date;
    endDate?: Date;
}

export interface GetGroupBansRequest {
    groupId: string;
    n?: number;
    offset?: number;
}

export interface GetGroupGalleryImagesRequest {
    groupId: string;
    groupGalleryId: string;
    n?: number;
    offset?: number;
    approved?: boolean;
}

export interface GetGroupInstancesRequest {
    groupId: string;
}

export interface GetGroupInvitesRequest {
    groupId: string;
    n?: number;
    offset?: number;
}

export interface GetGroupMemberRequest {
    groupId: string;
    userId: string;
}

export interface GetGroupMembersRequest {
    groupId: string;
    n?: number;
    offset?: number;
    sort?: GroupSearchSort;
}

export interface GetGroupPermissionsRequest {
    groupId: string;
}

export interface GetGroupPostRequest {
    groupId: string;
    n?: number;
    offset?: number;
    publicOnly?: boolean;
}

export interface GetGroupRequestsRequest {
    groupId: string;
    n?: number;
    offset?: number;
    blocked?: boolean;
}

export interface GetGroupRolesRequest {
    groupId: string;
}

export interface JoinGroupRequest {
    groupId: string;
}

export interface KickGroupMemberRequest {
    groupId: string;
    userId: string;
}

export interface LeaveGroupRequest {
    groupId: string;
}

export interface RemoveGroupMemberRoleRequest {
    groupId: string;
    userId: string;
    groupRoleId: string;
}

export interface RespondGroupJoinRequestRequest {
    groupId: string;
    userId: string;
    respondGroupJoinRequest: RespondGroupJoinRequest;
}

export interface SearchGroupsRequest {
    query?: string;
    offset?: number;
    n?: number;
}

export interface UnbanGroupMemberRequest {
    groupId: string;
    userId: string;
}

export interface UpdateGroupOperationRequest {
    groupId: string;
    updateGroupRequest?: UpdateGroupRequest;
}

export interface UpdateGroupGalleryOperationRequest {
    groupId: string;
    groupGalleryId: string;
    updateGroupGalleryRequest?: UpdateGroupGalleryRequest;
}

export interface UpdateGroupMemberOperationRequest {
    groupId: string;
    userId: string;
    updateGroupMemberRequest?: UpdateGroupMemberRequest;
}

export interface UpdateGroupPostRequest {
    groupId: string;
    notificationId: string;
    createGroupPostRequest: CreateGroupPostRequest;
}

export interface UpdateGroupRoleOperationRequest {
    groupId: string;
    groupRoleId: string;
    updateGroupRoleRequest?: UpdateGroupRoleRequest;
}

/**
 * 
 */
export class GroupsApi extends runtime.BaseAPI {

    /**
     * Adds an image to a Group gallery.
     * Add Group Gallery Image
     */
    async addGroupGalleryImageRaw(requestParameters: AddGroupGalleryImageOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GroupGalleryImage>> {
        if (requestParameters['groupId'] == null) {
            throw new runtime.RequiredError(
                'groupId',
                'Required parameter "groupId" was null or undefined when calling addGroupGalleryImage().'
            );
        }

        if (requestParameters['groupGalleryId'] == null) {
            throw new runtime.RequiredError(
                'groupGalleryId',
                'Required parameter "groupGalleryId" was null or undefined when calling addGroupGalleryImage().'
            );
        }

        if (requestParameters['addGroupGalleryImageRequest'] == null) {
            throw new runtime.RequiredError(
                'addGroupGalleryImageRequest',
                'Required parameter "addGroupGalleryImageRequest" was null or undefined when calling addGroupGalleryImage().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/groups/{groupId}/galleries/{groupGalleryId}/images`.replace(`{${"groupId"}}`, encodeURIComponent(String(requestParameters['groupId']))).replace(`{${"groupGalleryId"}}`, encodeURIComponent(String(requestParameters['groupGalleryId']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AddGroupGalleryImageRequestToJSON(requestParameters['addGroupGalleryImageRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GroupGalleryImageFromJSON(jsonValue));
    }

    /**
     * Adds an image to a Group gallery.
     * Add Group Gallery Image
     */
    async addGroupGalleryImage(requestParameters: AddGroupGalleryImageOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GroupGalleryImage> {
        const response = await this.addGroupGalleryImageRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Adds a Role to a Group Member
     * Add Role to GroupMember
     */
    async addGroupMemberRoleRaw(requestParameters: AddGroupMemberRoleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<string>>> {
        if (requestParameters['groupId'] == null) {
            throw new runtime.RequiredError(
                'groupId',
                'Required parameter "groupId" was null or undefined when calling addGroupMemberRole().'
            );
        }

        if (requestParameters['userId'] == null) {
            throw new runtime.RequiredError(
                'userId',
                'Required parameter "userId" was null or undefined when calling addGroupMemberRole().'
            );
        }

        if (requestParameters['groupRoleId'] == null) {
            throw new runtime.RequiredError(
                'groupRoleId',
                'Required parameter "groupRoleId" was null or undefined when calling addGroupMemberRole().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/groups/{groupId}/members/{userId}/roles/{groupRoleId}`.replace(`{${"groupId"}}`, encodeURIComponent(String(requestParameters['groupId']))).replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters['userId']))).replace(`{${"groupRoleId"}}`, encodeURIComponent(String(requestParameters['groupRoleId']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Adds a Role to a Group Member
     * Add Role to GroupMember
     */
    async addGroupMemberRole(requestParameters: AddGroupMemberRoleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<string>> {
        const response = await this.addGroupMemberRoleRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a post in a Group.
     * Create a post in a Group
     */
    async addGroupPostRaw(requestParameters: AddGroupPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GroupPost>> {
        if (requestParameters['groupId'] == null) {
            throw new runtime.RequiredError(
                'groupId',
                'Required parameter "groupId" was null or undefined when calling addGroupPost().'
            );
        }

        if (requestParameters['createGroupPostRequest'] == null) {
            throw new runtime.RequiredError(
                'createGroupPostRequest',
                'Required parameter "createGroupPostRequest" was null or undefined when calling addGroupPost().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/groups/{groupId}/posts`.replace(`{${"groupId"}}`, encodeURIComponent(String(requestParameters['groupId']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateGroupPostRequestToJSON(requestParameters['createGroupPostRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GroupPostFromJSON(jsonValue));
    }

    /**
     * Create a post in a Group.
     * Create a post in a Group
     */
    async addGroupPost(requestParameters: AddGroupPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GroupPost> {
        const response = await this.addGroupPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Bans a user from a Group.
     * Ban Group Member
     */
    async banGroupMemberRaw(requestParameters: BanGroupMemberOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GroupMember>> {
        if (requestParameters['groupId'] == null) {
            throw new runtime.RequiredError(
                'groupId',
                'Required parameter "groupId" was null or undefined when calling banGroupMember().'
            );
        }

        if (requestParameters['banGroupMemberRequest'] == null) {
            throw new runtime.RequiredError(
                'banGroupMemberRequest',
                'Required parameter "banGroupMemberRequest" was null or undefined when calling banGroupMember().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/groups/{groupId}/bans`.replace(`{${"groupId"}}`, encodeURIComponent(String(requestParameters['groupId']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: BanGroupMemberRequestToJSON(requestParameters['banGroupMemberRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GroupMemberFromJSON(jsonValue));
    }

    /**
     * Bans a user from a Group.
     * Ban Group Member
     */
    async banGroupMember(requestParameters: BanGroupMemberOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GroupMember> {
        const response = await this.banGroupMemberRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Cancels a request sent to join the group.
     * Cancel Group Join Request
     */
    async cancelGroupRequestRaw(requestParameters: CancelGroupRequestRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['groupId'] == null) {
            throw new runtime.RequiredError(
                'groupId',
                'Required parameter "groupId" was null or undefined when calling cancelGroupRequest().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/groups/{groupId}/requests`.replace(`{${"groupId"}}`, encodeURIComponent(String(requestParameters['groupId']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Cancels a request sent to join the group.
     * Cancel Group Join Request
     */
    async cancelGroupRequest(requestParameters: CancelGroupRequestRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.cancelGroupRequestRaw(requestParameters, initOverrides);
    }

    /**
     * Creates a Group and returns a Group object. **Requires VRC+ Subscription.**
     * Create Group
     */
    async createGroupRaw(requestParameters: CreateGroupOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Group>> {
        if (requestParameters['createGroupRequest'] == null) {
            throw new runtime.RequiredError(
                'createGroupRequest',
                'Required parameter "createGroupRequest" was null or undefined when calling createGroup().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/groups`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateGroupRequestToJSON(requestParameters['createGroupRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GroupFromJSON(jsonValue));
    }

    /**
     * Creates a Group and returns a Group object. **Requires VRC+ Subscription.**
     * Create Group
     */
    async createGroup(requestParameters: CreateGroupOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Group> {
        const response = await this.createGroupRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates an Announcement for a Group.
     * Create Group Announcement
     */
    async createGroupAnnouncementRaw(requestParameters: CreateGroupAnnouncementOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GroupAnnouncement>> {
        if (requestParameters['groupId'] == null) {
            throw new runtime.RequiredError(
                'groupId',
                'Required parameter "groupId" was null or undefined when calling createGroupAnnouncement().'
            );
        }

        if (requestParameters['createGroupAnnouncementRequest'] == null) {
            throw new runtime.RequiredError(
                'createGroupAnnouncementRequest',
                'Required parameter "createGroupAnnouncementRequest" was null or undefined when calling createGroupAnnouncement().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/groups/{groupId}/announcement`.replace(`{${"groupId"}}`, encodeURIComponent(String(requestParameters['groupId']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateGroupAnnouncementRequestToJSON(requestParameters['createGroupAnnouncementRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GroupAnnouncementFromJSON(jsonValue));
    }

    /**
     * Creates an Announcement for a Group.
     * Create Group Announcement
     */
    async createGroupAnnouncement(requestParameters: CreateGroupAnnouncementOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GroupAnnouncement> {
        const response = await this.createGroupAnnouncementRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates a gallery for a Group.
     * Create Group Gallery
     */
    async createGroupGalleryRaw(requestParameters: CreateGroupGalleryOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GroupGallery>> {
        if (requestParameters['groupId'] == null) {
            throw new runtime.RequiredError(
                'groupId',
                'Required parameter "groupId" was null or undefined when calling createGroupGallery().'
            );
        }

        if (requestParameters['createGroupGalleryRequest'] == null) {
            throw new runtime.RequiredError(
                'createGroupGalleryRequest',
                'Required parameter "createGroupGalleryRequest" was null or undefined when calling createGroupGallery().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/groups/{groupId}/galleries`.replace(`{${"groupId"}}`, encodeURIComponent(String(requestParameters['groupId']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateGroupGalleryRequestToJSON(requestParameters['createGroupGalleryRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GroupGalleryFromJSON(jsonValue));
    }

    /**
     * Creates a gallery for a Group.
     * Create Group Gallery
     */
    async createGroupGallery(requestParameters: CreateGroupGalleryOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GroupGallery> {
        const response = await this.createGroupGalleryRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Sends an invite to a user to join the group.
     * Invite User to Group
     */
    async createGroupInviteRaw(requestParameters: CreateGroupInviteOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['groupId'] == null) {
            throw new runtime.RequiredError(
                'groupId',
                'Required parameter "groupId" was null or undefined when calling createGroupInvite().'
            );
        }

        if (requestParameters['createGroupInviteRequest'] == null) {
            throw new runtime.RequiredError(
                'createGroupInviteRequest',
                'Required parameter "createGroupInviteRequest" was null or undefined when calling createGroupInvite().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/groups/{groupId}/invites`.replace(`{${"groupId"}}`, encodeURIComponent(String(requestParameters['groupId']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateGroupInviteRequestToJSON(requestParameters['createGroupInviteRequest']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Sends an invite to a user to join the group.
     * Invite User to Group
     */
    async createGroupInvite(requestParameters: CreateGroupInviteOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.createGroupInviteRaw(requestParameters, initOverrides);
    }

    /**
     * Create a Group role.
     * Create GroupRole
     */
    async createGroupRoleRaw(requestParameters: CreateGroupRoleOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GroupRole>> {
        if (requestParameters['groupId'] == null) {
            throw new runtime.RequiredError(
                'groupId',
                'Required parameter "groupId" was null or undefined when calling createGroupRole().'
            );
        }

        if (requestParameters['createGroupRoleRequest'] == null) {
            throw new runtime.RequiredError(
                'createGroupRoleRequest',
                'Required parameter "createGroupRoleRequest" was null or undefined when calling createGroupRole().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/groups/{groupId}/roles`.replace(`{${"groupId"}}`, encodeURIComponent(String(requestParameters['groupId']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateGroupRoleRequestToJSON(requestParameters['createGroupRoleRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GroupRoleFromJSON(jsonValue));
    }

    /**
     * Create a Group role.
     * Create GroupRole
     */
    async createGroupRole(requestParameters: CreateGroupRoleOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GroupRole> {
        const response = await this.createGroupRoleRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes a Group.
     * Delete Group
     */
    async deleteGroupRaw(requestParameters: DeleteGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Success>> {
        if (requestParameters['groupId'] == null) {
            throw new runtime.RequiredError(
                'groupId',
                'Required parameter "groupId" was null or undefined when calling deleteGroup().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/groups/{groupId}`.replace(`{${"groupId"}}`, encodeURIComponent(String(requestParameters['groupId']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SuccessFromJSON(jsonValue));
    }

    /**
     * Deletes a Group.
     * Delete Group
     */
    async deleteGroup(requestParameters: DeleteGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Success> {
        const response = await this.deleteGroupRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes the announcement for a Group.
     * Delete Group Announcement
     */
    async deleteGroupAnnouncementRaw(requestParameters: DeleteGroupAnnouncementRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Success>> {
        if (requestParameters['groupId'] == null) {
            throw new runtime.RequiredError(
                'groupId',
                'Required parameter "groupId" was null or undefined when calling deleteGroupAnnouncement().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/groups/{groupId}/announcement`.replace(`{${"groupId"}}`, encodeURIComponent(String(requestParameters['groupId']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SuccessFromJSON(jsonValue));
    }

    /**
     * Deletes the announcement for a Group.
     * Delete Group Announcement
     */
    async deleteGroupAnnouncement(requestParameters: DeleteGroupAnnouncementRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Success> {
        const response = await this.deleteGroupAnnouncementRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes a gallery for a Group.
     * Delete Group Gallery
     */
    async deleteGroupGalleryRaw(requestParameters: DeleteGroupGalleryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Success>> {
        if (requestParameters['groupId'] == null) {
            throw new runtime.RequiredError(
                'groupId',
                'Required parameter "groupId" was null or undefined when calling deleteGroupGallery().'
            );
        }

        if (requestParameters['groupGalleryId'] == null) {
            throw new runtime.RequiredError(
                'groupGalleryId',
                'Required parameter "groupGalleryId" was null or undefined when calling deleteGroupGallery().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/groups/{groupId}/galleries/{groupGalleryId}`.replace(`{${"groupId"}}`, encodeURIComponent(String(requestParameters['groupId']))).replace(`{${"groupGalleryId"}}`, encodeURIComponent(String(requestParameters['groupGalleryId']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SuccessFromJSON(jsonValue));
    }

    /**
     * Deletes a gallery for a Group.
     * Delete Group Gallery
     */
    async deleteGroupGallery(requestParameters: DeleteGroupGalleryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Success> {
        const response = await this.deleteGroupGalleryRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes an image from a Group gallery.
     * Delete Group Gallery Image
     */
    async deleteGroupGalleryImageRaw(requestParameters: DeleteGroupGalleryImageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Success>> {
        if (requestParameters['groupId'] == null) {
            throw new runtime.RequiredError(
                'groupId',
                'Required parameter "groupId" was null or undefined when calling deleteGroupGalleryImage().'
            );
        }

        if (requestParameters['groupGalleryId'] == null) {
            throw new runtime.RequiredError(
                'groupGalleryId',
                'Required parameter "groupGalleryId" was null or undefined when calling deleteGroupGalleryImage().'
            );
        }

        if (requestParameters['groupGalleryImageId'] == null) {
            throw new runtime.RequiredError(
                'groupGalleryImageId',
                'Required parameter "groupGalleryImageId" was null or undefined when calling deleteGroupGalleryImage().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/groups/{groupId}/galleries/{groupGalleryId}/images/{groupGalleryImageId}`.replace(`{${"groupId"}}`, encodeURIComponent(String(requestParameters['groupId']))).replace(`{${"groupGalleryId"}}`, encodeURIComponent(String(requestParameters['groupGalleryId']))).replace(`{${"groupGalleryImageId"}}`, encodeURIComponent(String(requestParameters['groupGalleryImageId']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SuccessFromJSON(jsonValue));
    }

    /**
     * Deletes an image from a Group gallery.
     * Delete Group Gallery Image
     */
    async deleteGroupGalleryImage(requestParameters: DeleteGroupGalleryImageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Success> {
        const response = await this.deleteGroupGalleryImageRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes an Group invite sent to a User
     * Delete User Invite
     */
    async deleteGroupInviteRaw(requestParameters: DeleteGroupInviteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['groupId'] == null) {
            throw new runtime.RequiredError(
                'groupId',
                'Required parameter "groupId" was null or undefined when calling deleteGroupInvite().'
            );
        }

        if (requestParameters['userId'] == null) {
            throw new runtime.RequiredError(
                'userId',
                'Required parameter "userId" was null or undefined when calling deleteGroupInvite().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/groups/{groupId}/invites/{userId}`.replace(`{${"groupId"}}`, encodeURIComponent(String(requestParameters['groupId']))).replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters['userId']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes an Group invite sent to a User
     * Delete User Invite
     */
    async deleteGroupInvite(requestParameters: DeleteGroupInviteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteGroupInviteRaw(requestParameters, initOverrides);
    }

    /**
     * Delete a Group post
     * Delete a Group post
     */
    async deleteGroupPostRaw(requestParameters: DeleteGroupPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Success>> {
        if (requestParameters['groupId'] == null) {
            throw new runtime.RequiredError(
                'groupId',
                'Required parameter "groupId" was null or undefined when calling deleteGroupPost().'
            );
        }

        if (requestParameters['notificationId'] == null) {
            throw new runtime.RequiredError(
                'notificationId',
                'Required parameter "notificationId" was null or undefined when calling deleteGroupPost().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/groups/{groupId}/posts/{notificationId}`.replace(`{${"groupId"}}`, encodeURIComponent(String(requestParameters['groupId']))).replace(`{${"notificationId"}}`, encodeURIComponent(String(requestParameters['notificationId']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SuccessFromJSON(jsonValue));
    }

    /**
     * Delete a Group post
     * Delete a Group post
     */
    async deleteGroupPost(requestParameters: DeleteGroupPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Success> {
        const response = await this.deleteGroupPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes a Group Role by ID and returns the remaining roles.
     * Delete Group Role
     */
    async deleteGroupRoleRaw(requestParameters: DeleteGroupRoleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<GroupRole>>> {
        if (requestParameters['groupId'] == null) {
            throw new runtime.RequiredError(
                'groupId',
                'Required parameter "groupId" was null or undefined when calling deleteGroupRole().'
            );
        }

        if (requestParameters['groupRoleId'] == null) {
            throw new runtime.RequiredError(
                'groupRoleId',
                'Required parameter "groupRoleId" was null or undefined when calling deleteGroupRole().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/groups/{groupId}/roles/{groupRoleId}`.replace(`{${"groupId"}}`, encodeURIComponent(String(requestParameters['groupId']))).replace(`{${"groupRoleId"}}`, encodeURIComponent(String(requestParameters['groupRoleId']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(GroupRoleFromJSON));
    }

    /**
     * Deletes a Group Role by ID and returns the remaining roles.
     * Delete Group Role
     */
    async deleteGroupRole(requestParameters: DeleteGroupRoleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<GroupRole>> {
        const response = await this.deleteGroupRoleRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a single Group by ID.
     * Get Group by ID
     */
    async getGroupRaw(requestParameters: GetGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Group>> {
        if (requestParameters['groupId'] == null) {
            throw new runtime.RequiredError(
                'groupId',
                'Required parameter "groupId" was null or undefined when calling getGroup().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['includeRoles'] != null) {
            queryParameters['includeRoles'] = requestParameters['includeRoles'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/groups/{groupId}`.replace(`{${"groupId"}}`, encodeURIComponent(String(requestParameters['groupId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GroupFromJSON(jsonValue));
    }

    /**
     * Returns a single Group by ID.
     * Get Group by ID
     */
    async getGroup(requestParameters: GetGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Group> {
        const response = await this.getGroupRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns the announcement for a Group. If no announcement has been made, then it returns **empty object**.  If an announcement exists, then it will always return all fields except `imageId` and `imageUrl` which may be null.
     * Get Group Announcement
     */
    async getGroupAnnouncementsRaw(requestParameters: GetGroupAnnouncementsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GroupAnnouncement>> {
        if (requestParameters['groupId'] == null) {
            throw new runtime.RequiredError(
                'groupId',
                'Required parameter "groupId" was null or undefined when calling getGroupAnnouncements().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/groups/{groupId}/announcement`.replace(`{${"groupId"}}`, encodeURIComponent(String(requestParameters['groupId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GroupAnnouncementFromJSON(jsonValue));
    }

    /**
     * Returns the announcement for a Group. If no announcement has been made, then it returns **empty object**.  If an announcement exists, then it will always return all fields except `imageId` and `imageUrl` which may be null.
     * Get Group Announcement
     */
    async getGroupAnnouncements(requestParameters: GetGroupAnnouncementsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GroupAnnouncement> {
        const response = await this.getGroupAnnouncementsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a list of audit logs for a Group.
     * Get Group Audit Logs
     */
    async getGroupAuditLogsRaw(requestParameters: GetGroupAuditLogsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaginatedGroupAuditLogEntryList>> {
        if (requestParameters['groupId'] == null) {
            throw new runtime.RequiredError(
                'groupId',
                'Required parameter "groupId" was null or undefined when calling getGroupAuditLogs().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['n'] != null) {
            queryParameters['n'] = requestParameters['n'];
        }

        if (requestParameters['offset'] != null) {
            queryParameters['offset'] = requestParameters['offset'];
        }

        if (requestParameters['startDate'] != null) {
            queryParameters['startDate'] = (requestParameters['startDate'] as any).toISOString();
        }

        if (requestParameters['endDate'] != null) {
            queryParameters['endDate'] = (requestParameters['endDate'] as any).toISOString();
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/groups/{groupId}/auditLogs`.replace(`{${"groupId"}}`, encodeURIComponent(String(requestParameters['groupId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaginatedGroupAuditLogEntryListFromJSON(jsonValue));
    }

    /**
     * Returns a list of audit logs for a Group.
     * Get Group Audit Logs
     */
    async getGroupAuditLogs(requestParameters: GetGroupAuditLogsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaginatedGroupAuditLogEntryList> {
        const response = await this.getGroupAuditLogsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a list of banned users for a Group.
     * Get Group Bans
     */
    async getGroupBansRaw(requestParameters: GetGroupBansRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<GroupMember>>> {
        if (requestParameters['groupId'] == null) {
            throw new runtime.RequiredError(
                'groupId',
                'Required parameter "groupId" was null or undefined when calling getGroupBans().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['n'] != null) {
            queryParameters['n'] = requestParameters['n'];
        }

        if (requestParameters['offset'] != null) {
            queryParameters['offset'] = requestParameters['offset'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/groups/{groupId}/bans`.replace(`{${"groupId"}}`, encodeURIComponent(String(requestParameters['groupId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(GroupMemberFromJSON));
    }

    /**
     * Returns a list of banned users for a Group.
     * Get Group Bans
     */
    async getGroupBans(requestParameters: GetGroupBansRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<GroupMember>> {
        const response = await this.getGroupBansRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a list of images for a Group gallery.
     * Get Group Gallery Images
     */
    async getGroupGalleryImagesRaw(requestParameters: GetGroupGalleryImagesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<GroupGalleryImage>>> {
        if (requestParameters['groupId'] == null) {
            throw new runtime.RequiredError(
                'groupId',
                'Required parameter "groupId" was null or undefined when calling getGroupGalleryImages().'
            );
        }

        if (requestParameters['groupGalleryId'] == null) {
            throw new runtime.RequiredError(
                'groupGalleryId',
                'Required parameter "groupGalleryId" was null or undefined when calling getGroupGalleryImages().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['n'] != null) {
            queryParameters['n'] = requestParameters['n'];
        }

        if (requestParameters['offset'] != null) {
            queryParameters['offset'] = requestParameters['offset'];
        }

        if (requestParameters['approved'] != null) {
            queryParameters['approved'] = requestParameters['approved'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/groups/{groupId}/galleries/{groupGalleryId}`.replace(`{${"groupId"}}`, encodeURIComponent(String(requestParameters['groupId']))).replace(`{${"groupGalleryId"}}`, encodeURIComponent(String(requestParameters['groupGalleryId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(GroupGalleryImageFromJSON));
    }

    /**
     * Returns a list of images for a Group gallery.
     * Get Group Gallery Images
     */
    async getGroupGalleryImages(requestParameters: GetGroupGalleryImagesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<GroupGalleryImage>> {
        const response = await this.getGroupGalleryImagesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a list of group instances
     * Get Group Instances
     */
    async getGroupInstancesRaw(requestParameters: GetGroupInstancesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<GroupInstance>>> {
        if (requestParameters['groupId'] == null) {
            throw new runtime.RequiredError(
                'groupId',
                'Required parameter "groupId" was null or undefined when calling getGroupInstances().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/groups/{groupId}/instances`.replace(`{${"groupId"}}`, encodeURIComponent(String(requestParameters['groupId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(GroupInstanceFromJSON));
    }

    /**
     * Returns a list of group instances
     * Get Group Instances
     */
    async getGroupInstances(requestParameters: GetGroupInstancesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<GroupInstance>> {
        const response = await this.getGroupInstancesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a list of members that have been invited to the Group.
     * Get Group Invites Sent
     */
    async getGroupInvitesRaw(requestParameters: GetGroupInvitesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<GroupMember>>> {
        if (requestParameters['groupId'] == null) {
            throw new runtime.RequiredError(
                'groupId',
                'Required parameter "groupId" was null or undefined when calling getGroupInvites().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['n'] != null) {
            queryParameters['n'] = requestParameters['n'];
        }

        if (requestParameters['offset'] != null) {
            queryParameters['offset'] = requestParameters['offset'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/groups/{groupId}/invites`.replace(`{${"groupId"}}`, encodeURIComponent(String(requestParameters['groupId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(GroupMemberFromJSON));
    }

    /**
     * Returns a list of members that have been invited to the Group.
     * Get Group Invites Sent
     */
    async getGroupInvites(requestParameters: GetGroupInvitesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<GroupMember>> {
        const response = await this.getGroupInvitesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a LimitedGroup Member.
     * Get Group Member
     */
    async getGroupMemberRaw(requestParameters: GetGroupMemberRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GroupLimitedMember>> {
        if (requestParameters['groupId'] == null) {
            throw new runtime.RequiredError(
                'groupId',
                'Required parameter "groupId" was null or undefined when calling getGroupMember().'
            );
        }

        if (requestParameters['userId'] == null) {
            throw new runtime.RequiredError(
                'userId',
                'Required parameter "userId" was null or undefined when calling getGroupMember().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/groups/{groupId}/members/{userId}`.replace(`{${"groupId"}}`, encodeURIComponent(String(requestParameters['groupId']))).replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters['userId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GroupLimitedMemberFromJSON(jsonValue));
    }

    /**
     * Returns a LimitedGroup Member.
     * Get Group Member
     */
    async getGroupMember(requestParameters: GetGroupMemberRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GroupLimitedMember> {
        const response = await this.getGroupMemberRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a List of all **other** Group Members. This endpoint will never return the user calling the endpoint. Information about the user calling the endpoint must be found in the `myMember` field of the Group object.
     * List Group Members
     */
    async getGroupMembersRaw(requestParameters: GetGroupMembersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<GroupMember>>> {
        if (requestParameters['groupId'] == null) {
            throw new runtime.RequiredError(
                'groupId',
                'Required parameter "groupId" was null or undefined when calling getGroupMembers().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['n'] != null) {
            queryParameters['n'] = requestParameters['n'];
        }

        if (requestParameters['offset'] != null) {
            queryParameters['offset'] = requestParameters['offset'];
        }

        if (requestParameters['sort'] != null) {
            queryParameters['sort'] = requestParameters['sort'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/groups/{groupId}/members`.replace(`{${"groupId"}}`, encodeURIComponent(String(requestParameters['groupId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(GroupMemberFromJSON));
    }

    /**
     * Returns a List of all **other** Group Members. This endpoint will never return the user calling the endpoint. Information about the user calling the endpoint must be found in the `myMember` field of the Group object.
     * List Group Members
     */
    async getGroupMembers(requestParameters: GetGroupMembersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<GroupMember>> {
        const response = await this.getGroupMembersRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a List of all possible/available permissions for a Group.
     * List Group Permissions
     */
    async getGroupPermissionsRaw(requestParameters: GetGroupPermissionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<GroupPermission>>> {
        if (requestParameters['groupId'] == null) {
            throw new runtime.RequiredError(
                'groupId',
                'Required parameter "groupId" was null or undefined when calling getGroupPermissions().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/groups/{groupId}/permissions`.replace(`{${"groupId"}}`, encodeURIComponent(String(requestParameters['groupId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(GroupPermissionFromJSON));
    }

    /**
     * Returns a List of all possible/available permissions for a Group.
     * List Group Permissions
     */
    async getGroupPermissions(requestParameters: GetGroupPermissionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<GroupPermission>> {
        const response = await this.getGroupPermissionsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get posts from a Group
     * Get posts from a Group
     */
    async getGroupPostRaw(requestParameters: GetGroupPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GroupPost>> {
        if (requestParameters['groupId'] == null) {
            throw new runtime.RequiredError(
                'groupId',
                'Required parameter "groupId" was null or undefined when calling getGroupPost().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['n'] != null) {
            queryParameters['n'] = requestParameters['n'];
        }

        if (requestParameters['offset'] != null) {
            queryParameters['offset'] = requestParameters['offset'];
        }

        if (requestParameters['publicOnly'] != null) {
            queryParameters['publicOnly'] = requestParameters['publicOnly'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/groups/{groupId}/posts`.replace(`{${"groupId"}}`, encodeURIComponent(String(requestParameters['groupId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GroupPostFromJSON(jsonValue));
    }

    /**
     * Get posts from a Group
     * Get posts from a Group
     */
    async getGroupPost(requestParameters: GetGroupPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GroupPost> {
        const response = await this.getGroupPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a list of members that have requested to join the Group.
     * Get Group Join Requests
     */
    async getGroupRequestsRaw(requestParameters: GetGroupRequestsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<GroupMember>>> {
        if (requestParameters['groupId'] == null) {
            throw new runtime.RequiredError(
                'groupId',
                'Required parameter "groupId" was null or undefined when calling getGroupRequests().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['n'] != null) {
            queryParameters['n'] = requestParameters['n'];
        }

        if (requestParameters['offset'] != null) {
            queryParameters['offset'] = requestParameters['offset'];
        }

        if (requestParameters['blocked'] != null) {
            queryParameters['blocked'] = requestParameters['blocked'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/groups/{groupId}/requests`.replace(`{${"groupId"}}`, encodeURIComponent(String(requestParameters['groupId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(GroupMemberFromJSON));
    }

    /**
     * Returns a list of members that have requested to join the Group.
     * Get Group Join Requests
     */
    async getGroupRequests(requestParameters: GetGroupRequestsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<GroupMember>> {
        const response = await this.getGroupRequestsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a Group Role by ID.
     * Get Group Roles
     */
    async getGroupRolesRaw(requestParameters: GetGroupRolesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<GroupRole>>> {
        if (requestParameters['groupId'] == null) {
            throw new runtime.RequiredError(
                'groupId',
                'Required parameter "groupId" was null or undefined when calling getGroupRoles().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/groups/{groupId}/roles`.replace(`{${"groupId"}}`, encodeURIComponent(String(requestParameters['groupId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(GroupRoleFromJSON));
    }

    /**
     * Returns a Group Role by ID.
     * Get Group Roles
     */
    async getGroupRoles(requestParameters: GetGroupRolesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<GroupRole>> {
        const response = await this.getGroupRolesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Join a Group by ID and returns the member object.
     * Join Group
     */
    async joinGroupRaw(requestParameters: JoinGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GroupMember>> {
        if (requestParameters['groupId'] == null) {
            throw new runtime.RequiredError(
                'groupId',
                'Required parameter "groupId" was null or undefined when calling joinGroup().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/groups/{groupId}/join`.replace(`{${"groupId"}}`, encodeURIComponent(String(requestParameters['groupId']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GroupMemberFromJSON(jsonValue));
    }

    /**
     * Join a Group by ID and returns the member object.
     * Join Group
     */
    async joinGroup(requestParameters: JoinGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GroupMember> {
        const response = await this.joinGroupRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Kicks a Group Member from the Group. The current user must have the \"Remove Group Members\" permission.
     * Kick Group Member
     */
    async kickGroupMemberRaw(requestParameters: KickGroupMemberRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['groupId'] == null) {
            throw new runtime.RequiredError(
                'groupId',
                'Required parameter "groupId" was null or undefined when calling kickGroupMember().'
            );
        }

        if (requestParameters['userId'] == null) {
            throw new runtime.RequiredError(
                'userId',
                'Required parameter "userId" was null or undefined when calling kickGroupMember().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/groups/{groupId}/members/{userId}`.replace(`{${"groupId"}}`, encodeURIComponent(String(requestParameters['groupId']))).replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters['userId']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Kicks a Group Member from the Group. The current user must have the \"Remove Group Members\" permission.
     * Kick Group Member
     */
    async kickGroupMember(requestParameters: KickGroupMemberRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.kickGroupMemberRaw(requestParameters, initOverrides);
    }

    /**
     * Leave a group by ID.
     * Leave Group
     */
    async leaveGroupRaw(requestParameters: LeaveGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['groupId'] == null) {
            throw new runtime.RequiredError(
                'groupId',
                'Required parameter "groupId" was null or undefined when calling leaveGroup().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/groups/{groupId}/leave`.replace(`{${"groupId"}}`, encodeURIComponent(String(requestParameters['groupId']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Leave a group by ID.
     * Leave Group
     */
    async leaveGroup(requestParameters: LeaveGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.leaveGroupRaw(requestParameters, initOverrides);
    }

    /**
     * Removes a Role from a Group Member
     * Remove Role from GroupMember
     */
    async removeGroupMemberRoleRaw(requestParameters: RemoveGroupMemberRoleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<string>>> {
        if (requestParameters['groupId'] == null) {
            throw new runtime.RequiredError(
                'groupId',
                'Required parameter "groupId" was null or undefined when calling removeGroupMemberRole().'
            );
        }

        if (requestParameters['userId'] == null) {
            throw new runtime.RequiredError(
                'userId',
                'Required parameter "userId" was null or undefined when calling removeGroupMemberRole().'
            );
        }

        if (requestParameters['groupRoleId'] == null) {
            throw new runtime.RequiredError(
                'groupRoleId',
                'Required parameter "groupRoleId" was null or undefined when calling removeGroupMemberRole().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/groups/{groupId}/members/{userId}/roles/{groupRoleId}`.replace(`{${"groupId"}}`, encodeURIComponent(String(requestParameters['groupId']))).replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters['userId']))).replace(`{${"groupRoleId"}}`, encodeURIComponent(String(requestParameters['groupRoleId']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Removes a Role from a Group Member
     * Remove Role from GroupMember
     */
    async removeGroupMemberRole(requestParameters: RemoveGroupMemberRoleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<string>> {
        const response = await this.removeGroupMemberRoleRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Responds to a Group Join Request with Accept/Deny
     * Respond Group Join request
     */
    async respondGroupJoinRequestRaw(requestParameters: RespondGroupJoinRequestRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['groupId'] == null) {
            throw new runtime.RequiredError(
                'groupId',
                'Required parameter "groupId" was null or undefined when calling respondGroupJoinRequest().'
            );
        }

        if (requestParameters['userId'] == null) {
            throw new runtime.RequiredError(
                'userId',
                'Required parameter "userId" was null or undefined when calling respondGroupJoinRequest().'
            );
        }

        if (requestParameters['respondGroupJoinRequest'] == null) {
            throw new runtime.RequiredError(
                'respondGroupJoinRequest',
                'Required parameter "respondGroupJoinRequest" was null or undefined when calling respondGroupJoinRequest().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/groups/{groupId}/requests/{userId}`.replace(`{${"groupId"}}`, encodeURIComponent(String(requestParameters['groupId']))).replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters['userId']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: RespondGroupJoinRequestToJSON(requestParameters['respondGroupJoinRequest']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Responds to a Group Join Request with Accept/Deny
     * Respond Group Join request
     */
    async respondGroupJoinRequest(requestParameters: RespondGroupJoinRequestRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.respondGroupJoinRequestRaw(requestParameters, initOverrides);
    }

    /**
     * Searches Groups by name or shortCode
     * Search Group
     */
    async searchGroupsRaw(requestParameters: SearchGroupsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<LimitedGroup>>> {
        const queryParameters: any = {};

        if (requestParameters['query'] != null) {
            queryParameters['query'] = requestParameters['query'];
        }

        if (requestParameters['offset'] != null) {
            queryParameters['offset'] = requestParameters['offset'];
        }

        if (requestParameters['n'] != null) {
            queryParameters['n'] = requestParameters['n'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/groups`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(LimitedGroupFromJSON));
    }

    /**
     * Searches Groups by name or shortCode
     * Search Group
     */
    async searchGroups(requestParameters: SearchGroupsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<LimitedGroup>> {
        const response = await this.searchGroupsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Unbans a user from a Group.
     * Unban Group Member
     */
    async unbanGroupMemberRaw(requestParameters: UnbanGroupMemberRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GroupMember>> {
        if (requestParameters['groupId'] == null) {
            throw new runtime.RequiredError(
                'groupId',
                'Required parameter "groupId" was null or undefined when calling unbanGroupMember().'
            );
        }

        if (requestParameters['userId'] == null) {
            throw new runtime.RequiredError(
                'userId',
                'Required parameter "userId" was null or undefined when calling unbanGroupMember().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/groups/{groupId}/bans/{userId}`.replace(`{${"groupId"}}`, encodeURIComponent(String(requestParameters['groupId']))).replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters['userId']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GroupMemberFromJSON(jsonValue));
    }

    /**
     * Unbans a user from a Group.
     * Unban Group Member
     */
    async unbanGroupMember(requestParameters: UnbanGroupMemberRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GroupMember> {
        const response = await this.unbanGroupMemberRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates a Group and returns it.
     * Update Group
     */
    async updateGroupRaw(requestParameters: UpdateGroupOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Group>> {
        if (requestParameters['groupId'] == null) {
            throw new runtime.RequiredError(
                'groupId',
                'Required parameter "groupId" was null or undefined when calling updateGroup().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/groups/{groupId}`.replace(`{${"groupId"}}`, encodeURIComponent(String(requestParameters['groupId']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateGroupRequestToJSON(requestParameters['updateGroupRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GroupFromJSON(jsonValue));
    }

    /**
     * Updates a Group and returns it.
     * Update Group
     */
    async updateGroup(requestParameters: UpdateGroupOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Group> {
        const response = await this.updateGroupRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates a gallery for a Group.
     * Update Group Gallery
     */
    async updateGroupGalleryRaw(requestParameters: UpdateGroupGalleryOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GroupGallery>> {
        if (requestParameters['groupId'] == null) {
            throw new runtime.RequiredError(
                'groupId',
                'Required parameter "groupId" was null or undefined when calling updateGroupGallery().'
            );
        }

        if (requestParameters['groupGalleryId'] == null) {
            throw new runtime.RequiredError(
                'groupGalleryId',
                'Required parameter "groupGalleryId" was null or undefined when calling updateGroupGallery().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/groups/{groupId}/galleries/{groupGalleryId}`.replace(`{${"groupId"}}`, encodeURIComponent(String(requestParameters['groupId']))).replace(`{${"groupGalleryId"}}`, encodeURIComponent(String(requestParameters['groupGalleryId']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateGroupGalleryRequestToJSON(requestParameters['updateGroupGalleryRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GroupGalleryFromJSON(jsonValue));
    }

    /**
     * Updates a gallery for a Group.
     * Update Group Gallery
     */
    async updateGroupGallery(requestParameters: UpdateGroupGalleryOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GroupGallery> {
        const response = await this.updateGroupGalleryRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates a Group Member
     * Update Group Member
     */
    async updateGroupMemberRaw(requestParameters: UpdateGroupMemberOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GroupLimitedMember>> {
        if (requestParameters['groupId'] == null) {
            throw new runtime.RequiredError(
                'groupId',
                'Required parameter "groupId" was null or undefined when calling updateGroupMember().'
            );
        }

        if (requestParameters['userId'] == null) {
            throw new runtime.RequiredError(
                'userId',
                'Required parameter "userId" was null or undefined when calling updateGroupMember().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/groups/{groupId}/members/{userId}`.replace(`{${"groupId"}}`, encodeURIComponent(String(requestParameters['groupId']))).replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters['userId']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateGroupMemberRequestToJSON(requestParameters['updateGroupMemberRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GroupLimitedMemberFromJSON(jsonValue));
    }

    /**
     * Updates a Group Member
     * Update Group Member
     */
    async updateGroupMember(requestParameters: UpdateGroupMemberOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GroupLimitedMember> {
        const response = await this.updateGroupMemberRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Edits a Group post
     * Edits a Group post
     */
    async updateGroupPostRaw(requestParameters: UpdateGroupPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GroupPost>> {
        if (requestParameters['groupId'] == null) {
            throw new runtime.RequiredError(
                'groupId',
                'Required parameter "groupId" was null or undefined when calling updateGroupPost().'
            );
        }

        if (requestParameters['notificationId'] == null) {
            throw new runtime.RequiredError(
                'notificationId',
                'Required parameter "notificationId" was null or undefined when calling updateGroupPost().'
            );
        }

        if (requestParameters['createGroupPostRequest'] == null) {
            throw new runtime.RequiredError(
                'createGroupPostRequest',
                'Required parameter "createGroupPostRequest" was null or undefined when calling updateGroupPost().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/groups/{groupId}/posts/{notificationId}`.replace(`{${"groupId"}}`, encodeURIComponent(String(requestParameters['groupId']))).replace(`{${"notificationId"}}`, encodeURIComponent(String(requestParameters['notificationId']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: CreateGroupPostRequestToJSON(requestParameters['createGroupPostRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GroupPostFromJSON(jsonValue));
    }

    /**
     * Edits a Group post
     * Edits a Group post
     */
    async updateGroupPost(requestParameters: UpdateGroupPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GroupPost> {
        const response = await this.updateGroupPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates a group role by ID.
     * Update Group Role
     */
    async updateGroupRoleRaw(requestParameters: UpdateGroupRoleOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<GroupRole>>> {
        if (requestParameters['groupId'] == null) {
            throw new runtime.RequiredError(
                'groupId',
                'Required parameter "groupId" was null or undefined when calling updateGroupRole().'
            );
        }

        if (requestParameters['groupRoleId'] == null) {
            throw new runtime.RequiredError(
                'groupRoleId',
                'Required parameter "groupRoleId" was null or undefined when calling updateGroupRole().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/groups/{groupId}/roles/{groupRoleId}`.replace(`{${"groupId"}}`, encodeURIComponent(String(requestParameters['groupId']))).replace(`{${"groupRoleId"}}`, encodeURIComponent(String(requestParameters['groupRoleId']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateGroupRoleRequestToJSON(requestParameters['updateGroupRoleRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(GroupRoleFromJSON));
    }

    /**
     * Updates a group role by ID.
     * Update Group Role
     */
    async updateGroupRole(requestParameters: UpdateGroupRoleOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<GroupRole>> {
        const response = await this.updateGroupRoleRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
