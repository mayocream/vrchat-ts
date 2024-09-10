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
import type { GroupGallery } from './GroupGallery';
import {
    GroupGalleryFromJSON,
    GroupGalleryFromJSONTyped,
    GroupGalleryToJSON,
} from './GroupGallery';
import type { GroupPrivacy } from './GroupPrivacy';
import {
    GroupPrivacyFromJSON,
    GroupPrivacyFromJSONTyped,
    GroupPrivacyToJSON,
} from './GroupPrivacy';
import type { GroupMyMember } from './GroupMyMember';
import {
    GroupMyMemberFromJSON,
    GroupMyMemberFromJSONTyped,
    GroupMyMemberToJSON,
} from './GroupMyMember';
import type { GroupJoinState } from './GroupJoinState';
import {
    GroupJoinStateFromJSON,
    GroupJoinStateFromJSONTyped,
    GroupJoinStateToJSON,
} from './GroupJoinState';
import type { GroupRole } from './GroupRole';
import {
    GroupRoleFromJSON,
    GroupRoleFromJSONTyped,
    GroupRoleToJSON,
} from './GroupRole';
import type { GroupMemberStatus } from './GroupMemberStatus';
import {
    GroupMemberStatusFromJSON,
    GroupMemberStatusFromJSONTyped,
    GroupMemberStatusToJSON,
} from './GroupMemberStatus';

/**
 * 
 * @export
 * @interface Group
 */
export interface Group {
    /**
     * 
     * @type {string}
     * @memberof Group
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof Group
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof Group
     */
    shortCode?: string;
    /**
     * 
     * @type {string}
     * @memberof Group
     */
    discriminator?: string;
    /**
     * 
     * @type {string}
     * @memberof Group
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof Group
     */
    iconUrl?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Group
     */
    bannerUrl?: string | null;
    /**
     * 
     * @type {GroupPrivacy}
     * @memberof Group
     */
    privacy?: GroupPrivacy;
    /**
     * A users unique ID, usually in the form of `usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469`. Legacy players can have old IDs in the form of `8JoV9XEdpo`. The ID can never be changed.
     * @type {string}
     * @memberof Group
     */
    ownerId?: string;
    /**
     * 
     * @type {string}
     * @memberof Group
     */
    rules?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Group
     */
    links?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof Group
     */
    languages?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof Group
     */
    iconId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Group
     */
    bannerId?: string | null;
    /**
     * 
     * @type {number}
     * @memberof Group
     */
    memberCount?: number;
    /**
     * 
     * @type {Date}
     * @memberof Group
     */
    memberCountSyncedAt?: Date;
    /**
     * 
     * @type {boolean}
     * @memberof Group
     */
    isVerified?: boolean;
    /**
     * 
     * @type {GroupJoinState}
     * @memberof Group
     */
    joinState?: GroupJoinState;
    /**
     * 
     * @type {Array<string>}
     * @memberof Group
     */
    tags?: Array<string>;
    /**
     * A users unique ID, usually in the form of `usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469`. Legacy players can have old IDs in the form of `8JoV9XEdpo`. The ID can never be changed.
     * @type {string}
     * @memberof Group
     */
    transferTargetId?: string;
    /**
     * 
     * @type {Array<GroupGallery>}
     * @memberof Group
     */
    galleries?: Array<GroupGallery>;
    /**
     * 
     * @type {Date}
     * @memberof Group
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof Group
     */
    updatedAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof Group
     */
    lastPostCreatedAt?: Date | null;
    /**
     * 
     * @type {number}
     * @memberof Group
     */
    onlineMemberCount?: number;
    /**
     * 
     * @type {GroupMemberStatus}
     * @memberof Group
     */
    membershipStatus?: GroupMemberStatus;
    /**
     * 
     * @type {GroupMyMember}
     * @memberof Group
     */
    myMember?: GroupMyMember;
    /**
     * Only returned if ?includeRoles=true is specified.
     * @type {Array<GroupRole>}
     * @memberof Group
     */
    roles?: Array<GroupRole> | null;
}



/**
 * Check if a given object implements the Group interface.
 */
export function instanceOfGroup(value: object): value is Group {
    return true;
}

export function GroupFromJSON(json: any): Group {
    return GroupFromJSONTyped(json, false);
}

export function GroupFromJSONTyped(json: any, ignoreDiscriminator: boolean): Group {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'] == null ? undefined : json['name'],
        'shortCode': json['shortCode'] == null ? undefined : json['shortCode'],
        'discriminator': json['discriminator'] == null ? undefined : json['discriminator'],
        'description': json['description'] == null ? undefined : json['description'],
        'iconUrl': json['iconUrl'] == null ? undefined : json['iconUrl'],
        'bannerUrl': json['bannerUrl'] == null ? undefined : json['bannerUrl'],
        'privacy': json['privacy'] == null ? undefined : GroupPrivacyFromJSON(json['privacy']),
        'ownerId': json['ownerId'] == null ? undefined : json['ownerId'],
        'rules': json['rules'] == null ? undefined : json['rules'],
        'links': json['links'] == null ? undefined : json['links'],
        'languages': json['languages'] == null ? undefined : json['languages'],
        'iconId': json['iconId'] == null ? undefined : json['iconId'],
        'bannerId': json['bannerId'] == null ? undefined : json['bannerId'],
        'memberCount': json['memberCount'] == null ? undefined : json['memberCount'],
        'memberCountSyncedAt': json['memberCountSyncedAt'] == null ? undefined : (new Date(json['memberCountSyncedAt'])),
        'isVerified': json['isVerified'] == null ? undefined : json['isVerified'],
        'joinState': json['joinState'] == null ? undefined : GroupJoinStateFromJSON(json['joinState']),
        'tags': json['tags'] == null ? undefined : json['tags'],
        'transferTargetId': json['transferTargetId'] == null ? undefined : json['transferTargetId'],
        'galleries': json['galleries'] == null ? undefined : ((json['galleries'] as Array<any>).map(GroupGalleryFromJSON)),
        'createdAt': json['createdAt'] == null ? undefined : (new Date(json['createdAt'])),
        'updatedAt': json['updatedAt'] == null ? undefined : (new Date(json['updatedAt'])),
        'lastPostCreatedAt': json['lastPostCreatedAt'] == null ? undefined : (new Date(json['lastPostCreatedAt'])),
        'onlineMemberCount': json['onlineMemberCount'] == null ? undefined : json['onlineMemberCount'],
        'membershipStatus': json['membershipStatus'] == null ? undefined : GroupMemberStatusFromJSON(json['membershipStatus']),
        'myMember': json['myMember'] == null ? undefined : GroupMyMemberFromJSON(json['myMember']),
        'roles': json['roles'] == null ? undefined : ((json['roles'] as Array<any>).map(GroupRoleFromJSON)),
    };
}

export function GroupToJSON(value?: Group | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'name': value['name'],
        'shortCode': value['shortCode'],
        'discriminator': value['discriminator'],
        'description': value['description'],
        'iconUrl': value['iconUrl'],
        'bannerUrl': value['bannerUrl'],
        'privacy': GroupPrivacyToJSON(value['privacy']),
        'ownerId': value['ownerId'],
        'rules': value['rules'],
        'links': value['links'],
        'languages': value['languages'],
        'iconId': value['iconId'],
        'bannerId': value['bannerId'],
        'memberCount': value['memberCount'],
        'memberCountSyncedAt': value['memberCountSyncedAt'] == null ? undefined : ((value['memberCountSyncedAt']).toISOString()),
        'isVerified': value['isVerified'],
        'joinState': GroupJoinStateToJSON(value['joinState']),
        'tags': value['tags'],
        'transferTargetId': value['transferTargetId'],
        'galleries': value['galleries'] == null ? undefined : ((value['galleries'] as Array<any>).map(GroupGalleryToJSON)),
        'createdAt': value['createdAt'] == null ? undefined : ((value['createdAt']).toISOString()),
        'updatedAt': value['updatedAt'] == null ? undefined : ((value['updatedAt']).toISOString()),
        'lastPostCreatedAt': value['lastPostCreatedAt'] == null ? undefined : ((value['lastPostCreatedAt'] as any).toISOString()),
        'onlineMemberCount': value['onlineMemberCount'],
        'membershipStatus': GroupMemberStatusToJSON(value['membershipStatus']),
        'myMember': GroupMyMemberToJSON(value['myMember']),
        'roles': value['roles'] == null ? undefined : ((value['roles'] as Array<any>).map(GroupRoleToJSON)),
    };
}

