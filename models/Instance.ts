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

import { mapValues } from '../runtime';
import type { GroupAccessType } from './GroupAccessType';
import {
    GroupAccessTypeFromJSON,
    GroupAccessTypeFromJSONTyped,
    GroupAccessTypeToJSON,
} from './GroupAccessType';
import type { InstanceRegion } from './InstanceRegion';
import {
    InstanceRegionFromJSON,
    InstanceRegionFromJSONTyped,
    InstanceRegionToJSON,
} from './InstanceRegion';
import type { Region } from './Region';
import {
    RegionFromJSON,
    RegionFromJSONTyped,
    RegionToJSON,
} from './Region';
import type { InstanceType } from './InstanceType';
import {
    InstanceTypeFromJSON,
    InstanceTypeFromJSONTyped,
    InstanceTypeToJSON,
} from './InstanceType';
import type { LimitedUser } from './LimitedUser';
import {
    LimitedUserFromJSON,
    LimitedUserFromJSONTyped,
    LimitedUserToJSON,
} from './LimitedUser';
import type { World } from './World';
import {
    WorldFromJSON,
    WorldFromJSONTyped,
    WorldToJSON,
} from './World';
import type { InstancePlatforms } from './InstancePlatforms';
import {
    InstancePlatformsFromJSON,
    InstancePlatformsFromJSONTyped,
    InstancePlatformsToJSON,
} from './InstancePlatforms';

/**
 * * `hidden` field is only present if InstanceType is `hidden` aka "Friends+", and is instance creator.
 * * `friends` field is only present if InstanceType is `friends` aka "Friends", and is instance creator.
 * * `private` field is only present if InstanceType is `private` aka "Invite" or "Invite+", and is instance creator.
 * @export
 * @interface Instance
 */
export interface Instance {
    /**
     * 
     * @type {boolean}
     * @memberof Instance
     */
    active: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Instance
     */
    canRequestInvite: boolean;
    /**
     * 
     * @type {number}
     * @memberof Instance
     */
    capacity: number;
    /**
     * Always returns "unknown".
     * @type {string}
     * @memberof Instance
     * @deprecated
     */
    clientNumber: string;
    /**
     * 
     * @type {boolean}
     * @memberof Instance
     */
    full: boolean;
    /**
     * InstanceID can be "offline" on User profiles if you are not friends with that user and "private" if you are friends and user is in private instance.
     * @type {string}
     * @memberof Instance
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof Instance
     */
    instanceId: string;
    /**
     * InstanceID can be "offline" on User profiles if you are not friends with that user and "private" if you are friends and user is in private instance.
     * @type {string}
     * @memberof Instance
     */
    location: string;
    /**
     * 
     * @type {number}
     * @memberof Instance
     */
    nUsers: number;
    /**
     * 
     * @type {string}
     * @memberof Instance
     */
    name: string;
    /**
     * A groupId if the instance type is "group", null if instance type is public, or a userId otherwise
     * @type {string}
     * @memberof Instance
     */
    ownerId?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof Instance
     */
    permanent: boolean;
    /**
     * 
     * @type {Region}
     * @memberof Instance
     */
    photonRegion: Region;
    /**
     * 
     * @type {InstancePlatforms}
     * @memberof Instance
     */
    platforms: InstancePlatforms;
    /**
     * 
     * @type {InstanceRegion}
     * @memberof Instance
     */
    region: InstanceRegion;
    /**
     * 
     * @type {string}
     * @memberof Instance
     */
    secureName: string;
    /**
     * 
     * @type {string}
     * @memberof Instance
     */
    shortName?: string | null;
    /**
     * The tags array on Instances usually contain the language tags of the people in the instance. 
     * @type {Array<string>}
     * @memberof Instance
     */
    tags: Array<string>;
    /**
     * 
     * @type {InstanceType}
     * @memberof Instance
     */
    type: InstanceType;
    /**
     * WorldID be "offline" on User profiles if you are not friends with that user.
     * @type {string}
     * @memberof Instance
     */
    worldId: string;
    /**
     * A users unique ID, usually in the form of `usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469`. Legacy players can have old IDs in the form of `8JoV9XEdpo`. The ID can never be changed.
     * @type {string}
     * @memberof Instance
     */
    hidden?: string;
    /**
     * A users unique ID, usually in the form of `usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469`. Legacy players can have old IDs in the form of `8JoV9XEdpo`. The ID can never be changed.
     * @type {string}
     * @memberof Instance
     */
    friends?: string;
    /**
     * A users unique ID, usually in the form of `usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469`. Legacy players can have old IDs in the form of `8JoV9XEdpo`. The ID can never be changed.
     * @type {string}
     * @memberof Instance
     */
    _private?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Instance
     */
    queueEnabled: boolean;
    /**
     * 
     * @type {number}
     * @memberof Instance
     */
    queueSize: number;
    /**
     * 
     * @type {number}
     * @memberof Instance
     */
    recommendedCapacity: number;
    /**
     * 
     * @type {boolean}
     * @memberof Instance
     */
    roleRestricted?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Instance
     */
    strict: boolean;
    /**
     * 
     * @type {number}
     * @memberof Instance
     */
    userCount: number;
    /**
     * 
     * @type {World}
     * @memberof Instance
     */
    world: World;
    /**
     * The users field is present on instances created by the requesting user.
     * @type {Array<LimitedUser>}
     * @memberof Instance
     */
    users?: Array<LimitedUser>;
    /**
     * 
     * @type {GroupAccessType}
     * @memberof Instance
     */
    groupAccessType?: GroupAccessType;
    /**
     * 
     * @type {boolean}
     * @memberof Instance
     */
    hasCapacityForYou?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Instance
     */
    nonce?: string;
    /**
     * 
     * @type {Date}
     * @memberof Instance
     */
    closedAt?: Date | null;
    /**
     * 
     * @type {boolean}
     * @memberof Instance
     */
    hardClose?: boolean | null;
}



/**
 * Check if a given object implements the Instance interface.
 */
export function instanceOfInstance(value: object): value is Instance {
    if (!('active' in value) || value['active'] === undefined) return false;
    if (!('canRequestInvite' in value) || value['canRequestInvite'] === undefined) return false;
    if (!('capacity' in value) || value['capacity'] === undefined) return false;
    if (!('clientNumber' in value) || value['clientNumber'] === undefined) return false;
    if (!('full' in value) || value['full'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('instanceId' in value) || value['instanceId'] === undefined) return false;
    if (!('location' in value) || value['location'] === undefined) return false;
    if (!('nUsers' in value) || value['nUsers'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('permanent' in value) || value['permanent'] === undefined) return false;
    if (!('photonRegion' in value) || value['photonRegion'] === undefined) return false;
    if (!('platforms' in value) || value['platforms'] === undefined) return false;
    if (!('region' in value) || value['region'] === undefined) return false;
    if (!('secureName' in value) || value['secureName'] === undefined) return false;
    if (!('tags' in value) || value['tags'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('worldId' in value) || value['worldId'] === undefined) return false;
    if (!('queueEnabled' in value) || value['queueEnabled'] === undefined) return false;
    if (!('queueSize' in value) || value['queueSize'] === undefined) return false;
    if (!('recommendedCapacity' in value) || value['recommendedCapacity'] === undefined) return false;
    if (!('strict' in value) || value['strict'] === undefined) return false;
    if (!('userCount' in value) || value['userCount'] === undefined) return false;
    if (!('world' in value) || value['world'] === undefined) return false;
    return true;
}

export function InstanceFromJSON(json: any): Instance {
    return InstanceFromJSONTyped(json, false);
}

export function InstanceFromJSONTyped(json: any, ignoreDiscriminator: boolean): Instance {
    if (json == null) {
        return json;
    }
    return {
        
        'active': json['active'],
        'canRequestInvite': json['canRequestInvite'],
        'capacity': json['capacity'],
        'clientNumber': json['clientNumber'],
        'full': json['full'],
        'id': json['id'],
        'instanceId': json['instanceId'],
        'location': json['location'],
        'nUsers': json['n_users'],
        'name': json['name'],
        'ownerId': json['ownerId'] == null ? undefined : json['ownerId'],
        'permanent': json['permanent'],
        'photonRegion': RegionFromJSON(json['photonRegion']),
        'platforms': InstancePlatformsFromJSON(json['platforms']),
        'region': InstanceRegionFromJSON(json['region']),
        'secureName': json['secureName'],
        'shortName': json['shortName'] == null ? undefined : json['shortName'],
        'tags': json['tags'],
        'type': InstanceTypeFromJSON(json['type']),
        'worldId': json['worldId'],
        'hidden': json['hidden'] == null ? undefined : json['hidden'],
        'friends': json['friends'] == null ? undefined : json['friends'],
        '_private': json['private'] == null ? undefined : json['private'],
        'queueEnabled': json['queueEnabled'],
        'queueSize': json['queueSize'],
        'recommendedCapacity': json['recommendedCapacity'],
        'roleRestricted': json['roleRestricted'] == null ? undefined : json['roleRestricted'],
        'strict': json['strict'],
        'userCount': json['userCount'],
        'world': WorldFromJSON(json['world']),
        'users': json['users'] == null ? undefined : ((json['users'] as Array<any>).map(LimitedUserFromJSON)),
        'groupAccessType': json['groupAccessType'] == null ? undefined : GroupAccessTypeFromJSON(json['groupAccessType']),
        'hasCapacityForYou': json['hasCapacityForYou'] == null ? undefined : json['hasCapacityForYou'],
        'nonce': json['nonce'] == null ? undefined : json['nonce'],
        'closedAt': json['closedAt'] == null ? undefined : (new Date(json['closedAt'])),
        'hardClose': json['hardClose'] == null ? undefined : json['hardClose'],
    };
}

export function InstanceToJSON(value?: Instance | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'active': value['active'],
        'canRequestInvite': value['canRequestInvite'],
        'capacity': value['capacity'],
        'clientNumber': value['clientNumber'],
        'full': value['full'],
        'id': value['id'],
        'instanceId': value['instanceId'],
        'location': value['location'],
        'n_users': value['nUsers'],
        'name': value['name'],
        'ownerId': value['ownerId'],
        'permanent': value['permanent'],
        'photonRegion': RegionToJSON(value['photonRegion']),
        'platforms': InstancePlatformsToJSON(value['platforms']),
        'region': InstanceRegionToJSON(value['region']),
        'secureName': value['secureName'],
        'shortName': value['shortName'],
        'tags': value['tags'],
        'type': InstanceTypeToJSON(value['type']),
        'worldId': value['worldId'],
        'hidden': value['hidden'],
        'friends': value['friends'],
        'private': value['_private'],
        'queueEnabled': value['queueEnabled'],
        'queueSize': value['queueSize'],
        'recommendedCapacity': value['recommendedCapacity'],
        'roleRestricted': value['roleRestricted'],
        'strict': value['strict'],
        'userCount': value['userCount'],
        'world': WorldToJSON(value['world']),
        'users': value['users'] == null ? undefined : ((value['users'] as Array<any>).map(LimitedUserToJSON)),
        'groupAccessType': GroupAccessTypeToJSON(value['groupAccessType']),
        'hasCapacityForYou': value['hasCapacityForYou'],
        'nonce': value['nonce'],
        'closedAt': value['closedAt'] == null ? undefined : ((value['closedAt'] as any).toISOString()),
        'hardClose': value['hardClose'],
    };
}

