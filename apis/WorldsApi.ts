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
  CreateWorldRequest,
  Instance,
  LimitedWorld,
  OrderOption,
  ReleaseStatus,
  SortOption,
  UpdateWorldRequest,
  World,
  WorldMetadata,
  WorldPublishStatus,
} from '../models/index';
import {
    CreateWorldRequestFromJSON,
    CreateWorldRequestToJSON,
    InstanceFromJSON,
    InstanceToJSON,
    LimitedWorldFromJSON,
    LimitedWorldToJSON,
    OrderOptionFromJSON,
    OrderOptionToJSON,
    ReleaseStatusFromJSON,
    ReleaseStatusToJSON,
    SortOptionFromJSON,
    SortOptionToJSON,
    UpdateWorldRequestFromJSON,
    UpdateWorldRequestToJSON,
    WorldFromJSON,
    WorldToJSON,
    WorldMetadataFromJSON,
    WorldMetadataToJSON,
    WorldPublishStatusFromJSON,
    WorldPublishStatusToJSON,
} from '../models/index';

export interface CreateWorldOperationRequest {
    createWorldRequest?: CreateWorldRequest;
}

export interface DeleteWorldRequest {
    worldId: string;
}

export interface GetActiveWorldsRequest {
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
}

export interface GetFavoritedWorldsRequest {
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

export interface GetRecentWorldsRequest {
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

export interface GetWorldRequest {
    worldId: string;
}

export interface GetWorldInstanceRequest {
    worldId: string;
    instanceId: string;
}

export interface GetWorldMetadataRequest {
    worldId: string;
}

export interface GetWorldPublishStatusRequest {
    worldId: string;
}

export interface PublishWorldRequest {
    worldId: string;
}

export interface SearchWorldsRequest {
    featured?: boolean;
    sort?: SortOption;
    user?: SearchWorldsUserEnum;
    userId?: string;
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
    fuzzy?: boolean;
}

export interface UnpublishWorldRequest {
    worldId: string;
}

export interface UpdateWorldOperationRequest {
    worldId: string;
    updateWorldRequest?: UpdateWorldRequest;
}

/**
 * 
 */
export class WorldsApi extends runtime.BaseAPI {

    /**
     * Create a new world. This endpoint requires `assetUrl` to be a valid File object with `.vrcw` file extension, and `imageUrl` to be a valid File object with an image file extension.
     * Create World
     */
    async createWorldRaw(requestParameters: CreateWorldOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<World>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/worlds`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateWorldRequestToJSON(requestParameters['createWorldRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => WorldFromJSON(jsonValue));
    }

    /**
     * Create a new world. This endpoint requires `assetUrl` to be a valid File object with `.vrcw` file extension, and `imageUrl` to be a valid File object with an image file extension.
     * Create World
     */
    async createWorld(requestParameters: CreateWorldOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<World> {
        const response = await this.createWorldRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete a world. Notice a world is never fully \"deleted\", only its ReleaseStatus is set to \"hidden\" and the linked Files are deleted. The WorldID is permanently reserved.
     * Delete World
     */
    async deleteWorldRaw(requestParameters: DeleteWorldRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['worldId'] == null) {
            throw new runtime.RequiredError(
                'worldId',
                'Required parameter "worldId" was null or undefined when calling deleteWorld().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/worlds/{worldId}`.replace(`{${"worldId"}}`, encodeURIComponent(String(requestParameters['worldId']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete a world. Notice a world is never fully \"deleted\", only its ReleaseStatus is set to \"hidden\" and the linked Files are deleted. The WorldID is permanently reserved.
     * Delete World
     */
    async deleteWorld(requestParameters: DeleteWorldRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteWorldRaw(requestParameters, initOverrides);
    }

    /**
     * Search and list currently Active worlds by query filters.
     * List Active Worlds
     */
    async getActiveWorldsRaw(requestParameters: GetActiveWorldsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<LimitedWorld>>> {
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

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/worlds/active`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(LimitedWorldFromJSON));
    }

    /**
     * Search and list currently Active worlds by query filters.
     * List Active Worlds
     */
    async getActiveWorlds(requestParameters: GetActiveWorldsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<LimitedWorld>> {
        const response = await this.getActiveWorldsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Search and list favorited worlds by query filters.
     * List Favorited Worlds
     */
    async getFavoritedWorldsRaw(requestParameters: GetFavoritedWorldsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<LimitedWorld>>> {
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
            path: `/worlds/favorites`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(LimitedWorldFromJSON));
    }

    /**
     * Search and list favorited worlds by query filters.
     * List Favorited Worlds
     */
    async getFavoritedWorlds(requestParameters: GetFavoritedWorldsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<LimitedWorld>> {
        const response = await this.getFavoritedWorldsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Search and list recently visited worlds by query filters.
     * List Recent Worlds
     */
    async getRecentWorldsRaw(requestParameters: GetRecentWorldsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<LimitedWorld>>> {
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
            path: `/worlds/recent`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(LimitedWorldFromJSON));
    }

    /**
     * Search and list recently visited worlds by query filters.
     * List Recent Worlds
     */
    async getRecentWorlds(requestParameters: GetRecentWorldsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<LimitedWorld>> {
        const response = await this.getRecentWorldsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get information about a specific World. Works unauthenticated but when so will always return `0` for certain fields.
     * Get World by ID
     */
    async getWorldRaw(requestParameters: GetWorldRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<World>> {
        if (requestParameters['worldId'] == null) {
            throw new runtime.RequiredError(
                'worldId',
                'Required parameter "worldId" was null or undefined when calling getWorld().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/worlds/{worldId}`.replace(`{${"worldId"}}`, encodeURIComponent(String(requestParameters['worldId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => WorldFromJSON(jsonValue));
    }

    /**
     * Get information about a specific World. Works unauthenticated but when so will always return `0` for certain fields.
     * Get World by ID
     */
    async getWorld(requestParameters: GetWorldRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<World> {
        const response = await this.getWorldRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a worlds instance.
     * Get World Instance
     */
    async getWorldInstanceRaw(requestParameters: GetWorldInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Instance>> {
        if (requestParameters['worldId'] == null) {
            throw new runtime.RequiredError(
                'worldId',
                'Required parameter "worldId" was null or undefined when calling getWorldInstance().'
            );
        }

        if (requestParameters['instanceId'] == null) {
            throw new runtime.RequiredError(
                'instanceId',
                'Required parameter "instanceId" was null or undefined when calling getWorldInstance().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/worlds/{worldId}/{instanceId}`.replace(`{${"worldId"}}`, encodeURIComponent(String(requestParameters['worldId']))).replace(`{${"instanceId"}}`, encodeURIComponent(String(requestParameters['instanceId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InstanceFromJSON(jsonValue));
    }

    /**
     * Returns a worlds instance.
     * Get World Instance
     */
    async getWorldInstance(requestParameters: GetWorldInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Instance> {
        const response = await this.getWorldInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Return a worlds custom metadata. This is currently believed to be unused. Metadata can be set with `updateWorld` and can be any arbitrary object.
     * Get World Metadata
     * @deprecated
     */
    async getWorldMetadataRaw(requestParameters: GetWorldMetadataRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WorldMetadata>> {
        if (requestParameters['worldId'] == null) {
            throw new runtime.RequiredError(
                'worldId',
                'Required parameter "worldId" was null or undefined when calling getWorldMetadata().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/worlds/{worldId}/metadata`.replace(`{${"worldId"}}`, encodeURIComponent(String(requestParameters['worldId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => WorldMetadataFromJSON(jsonValue));
    }

    /**
     * Return a worlds custom metadata. This is currently believed to be unused. Metadata can be set with `updateWorld` and can be any arbitrary object.
     * Get World Metadata
     * @deprecated
     */
    async getWorldMetadata(requestParameters: GetWorldMetadataRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WorldMetadata> {
        const response = await this.getWorldMetadataRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a worlds publish status.
     * Get World Publish Status
     */
    async getWorldPublishStatusRaw(requestParameters: GetWorldPublishStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WorldPublishStatus>> {
        if (requestParameters['worldId'] == null) {
            throw new runtime.RequiredError(
                'worldId',
                'Required parameter "worldId" was null or undefined when calling getWorldPublishStatus().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/worlds/{worldId}/publish`.replace(`{${"worldId"}}`, encodeURIComponent(String(requestParameters['worldId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => WorldPublishStatusFromJSON(jsonValue));
    }

    /**
     * Returns a worlds publish status.
     * Get World Publish Status
     */
    async getWorldPublishStatus(requestParameters: GetWorldPublishStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WorldPublishStatus> {
        const response = await this.getWorldPublishStatusRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Publish a world. You can only publish one world per week.
     * Publish World
     */
    async publishWorldRaw(requestParameters: PublishWorldRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['worldId'] == null) {
            throw new runtime.RequiredError(
                'worldId',
                'Required parameter "worldId" was null or undefined when calling publishWorld().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/worlds/{worldId}/publish`.replace(`{${"worldId"}}`, encodeURIComponent(String(requestParameters['worldId']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Publish a world. You can only publish one world per week.
     * Publish World
     */
    async publishWorld(requestParameters: PublishWorldRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.publishWorldRaw(requestParameters, initOverrides);
    }

    /**
     * Search and list any worlds by query filters.
     * Search All Worlds
     */
    async searchWorldsRaw(requestParameters: SearchWorldsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<LimitedWorld>>> {
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

        if (requestParameters['fuzzy'] != null) {
            queryParameters['fuzzy'] = requestParameters['fuzzy'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/worlds`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(LimitedWorldFromJSON));
    }

    /**
     * Search and list any worlds by query filters.
     * Search All Worlds
     */
    async searchWorlds(requestParameters: SearchWorldsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<LimitedWorld>> {
        const response = await this.searchWorldsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Unpublish a world.
     * Unpublish World
     */
    async unpublishWorldRaw(requestParameters: UnpublishWorldRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['worldId'] == null) {
            throw new runtime.RequiredError(
                'worldId',
                'Required parameter "worldId" was null or undefined when calling unpublishWorld().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/worlds/{worldId}/publish`.replace(`{${"worldId"}}`, encodeURIComponent(String(requestParameters['worldId']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Unpublish a world.
     * Unpublish World
     */
    async unpublishWorld(requestParameters: UnpublishWorldRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.unpublishWorldRaw(requestParameters, initOverrides);
    }

    /**
     * Update information about a specific World.
     * Update World
     */
    async updateWorldRaw(requestParameters: UpdateWorldOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<World>> {
        if (requestParameters['worldId'] == null) {
            throw new runtime.RequiredError(
                'worldId',
                'Required parameter "worldId" was null or undefined when calling updateWorld().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/worlds/{worldId}`.replace(`{${"worldId"}}`, encodeURIComponent(String(requestParameters['worldId']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateWorldRequestToJSON(requestParameters['updateWorldRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => WorldFromJSON(jsonValue));
    }

    /**
     * Update information about a specific World.
     * Update World
     */
    async updateWorld(requestParameters: UpdateWorldOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<World> {
        const response = await this.updateWorldRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const SearchWorldsUserEnum = {
    Me: 'me'
} as const;
export type SearchWorldsUserEnum = typeof SearchWorldsUserEnum[keyof typeof SearchWorldsUserEnum];
