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
import type { UserState } from './UserState';
import {
    UserStateFromJSON,
    UserStateFromJSONTyped,
    UserStateToJSON,
} from './UserState';
import type { Badge } from './Badge';
import {
    BadgeFromJSON,
    BadgeFromJSONTyped,
    BadgeToJSON,
} from './Badge';
import type { UserStatus } from './UserStatus';
import {
    UserStatusFromJSON,
    UserStatusFromJSONTyped,
    UserStatusToJSON,
} from './UserStatus';
import type { DeveloperType } from './DeveloperType';
import {
    DeveloperTypeFromJSON,
    DeveloperTypeFromJSONTyped,
    DeveloperTypeToJSON,
} from './DeveloperType';

/**
 * 
 * @export
 * @interface User
 */
export interface User {
    /**
     * 
     * @type {boolean}
     * @memberof User
     */
    allowAvatarCopying: boolean;
    /**
     *  
     * @type {Array<Badge>}
     * @memberof User
     */
    badges?: Array<Badge>;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    bio: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof User
     */
    bioLinks: Array<string>;
    /**
     * When profilePicOverride is not empty, use it instead.
     * @type {string}
     * @memberof User
     */
    currentAvatarImageUrl: string;
    /**
     * When profilePicOverride is not empty, use it instead.
     * @type {string}
     * @memberof User
     */
    currentAvatarThumbnailImageUrl: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof User
     */
    currentAvatarTags: Array<string>;
    /**
     * 
     * @type {Date}
     * @memberof User
     */
    dateJoined: Date;
    /**
     * 
     * @type {DeveloperType}
     * @memberof User
     */
    developerType: DeveloperType;
    /**
     * A users visual display name. This is what shows up in-game, and can different from their `username`. Changing display name is restricted to a cooldown period.
     * @type {string}
     * @memberof User
     */
    displayName: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    friendKey: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    friendRequestStatus?: string;
    /**
     * A users unique ID, usually in the form of `usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469`. Legacy players can have old IDs in the form of `8JoV9XEdpo`. The ID can never be changed.
     * @type {string}
     * @memberof User
     */
    id: string;
    /**
     * InstanceID can be "offline" on User profiles if you are not friends with that user and "private" if you are friends and user is in private instance.
     * @type {string}
     * @memberof User
     */
    instanceId?: string;
    /**
     * Either their `friendKey`, or empty string if you are not friends. Unknown usage.
     * @type {boolean}
     * @memberof User
     */
    isFriend: boolean;
    /**
     * Either a date-time or empty string.
     * @type {string}
     * @memberof User
     */
    lastActivity: string;
    /**
     * Either a date-time or empty string.
     * @type {string}
     * @memberof User
     */
    lastLogin: string;
    /**
     * This can be `standalonewindows` or `android`, but can also pretty much be any random Unity verison such as `2019.2.4-801-Release` or `2019.2.2-772-Release` or even `unknownplatform`.
     * @type {string}
     * @memberof User
     */
    lastPlatform: string;
    /**
     * WorldID be "offline" on User profiles if you are not friends with that user.
     * @type {string}
     * @memberof User
     */
    location?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    note?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    platform: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    profilePicOverride: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    profilePicOverrideThumbnail: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    pronouns: string;
    /**
     * 
     * @type {UserState}
     * @memberof User
     */
    state: UserState;
    /**
     * 
     * @type {UserStatus}
     * @memberof User
     */
    status: UserStatus;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    statusDescription: string;
    /**
     *  
     * @type {Array<string>}
     * @memberof User
     */
    tags: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    travelingToInstance?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    travelingToLocation?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    travelingToWorld?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    userIcon: string;
    /**
     * -| A users unique name, used during login. This is different from `displayName` which is what shows up in-game. A users `username` can never be changed.'
     * **DEPRECATED:** VRChat API no longer return usernames of other users. [See issue by Tupper for more information](https://github.com/pypy-vrc/VRCX/issues/429).
     * @type {string}
     * @memberof User
     * @deprecated
     */
    username?: string;
    /**
     * WorldID be "offline" on User profiles if you are not friends with that user.
     * @type {string}
     * @memberof User
     */
    worldId?: string;
}



/**
 * Check if a given object implements the User interface.
 */
export function instanceOfUser(value: object): value is User {
    if (!('allowAvatarCopying' in value) || value['allowAvatarCopying'] === undefined) return false;
    if (!('bio' in value) || value['bio'] === undefined) return false;
    if (!('bioLinks' in value) || value['bioLinks'] === undefined) return false;
    if (!('currentAvatarImageUrl' in value) || value['currentAvatarImageUrl'] === undefined) return false;
    if (!('currentAvatarThumbnailImageUrl' in value) || value['currentAvatarThumbnailImageUrl'] === undefined) return false;
    if (!('currentAvatarTags' in value) || value['currentAvatarTags'] === undefined) return false;
    if (!('dateJoined' in value) || value['dateJoined'] === undefined) return false;
    if (!('developerType' in value) || value['developerType'] === undefined) return false;
    if (!('displayName' in value) || value['displayName'] === undefined) return false;
    if (!('friendKey' in value) || value['friendKey'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('isFriend' in value) || value['isFriend'] === undefined) return false;
    if (!('lastActivity' in value) || value['lastActivity'] === undefined) return false;
    if (!('lastLogin' in value) || value['lastLogin'] === undefined) return false;
    if (!('lastPlatform' in value) || value['lastPlatform'] === undefined) return false;
    if (!('platform' in value) || value['platform'] === undefined) return false;
    if (!('profilePicOverride' in value) || value['profilePicOverride'] === undefined) return false;
    if (!('profilePicOverrideThumbnail' in value) || value['profilePicOverrideThumbnail'] === undefined) return false;
    if (!('pronouns' in value) || value['pronouns'] === undefined) return false;
    if (!('state' in value) || value['state'] === undefined) return false;
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('statusDescription' in value) || value['statusDescription'] === undefined) return false;
    if (!('tags' in value) || value['tags'] === undefined) return false;
    if (!('userIcon' in value) || value['userIcon'] === undefined) return false;
    return true;
}

export function UserFromJSON(json: any): User {
    return UserFromJSONTyped(json, false);
}

export function UserFromJSONTyped(json: any, ignoreDiscriminator: boolean): User {
    if (json == null) {
        return json;
    }
    return {
        
        'allowAvatarCopying': json['allowAvatarCopying'],
        'badges': json['badges'] == null ? undefined : ((json['badges'] as Array<any>).map(BadgeFromJSON)),
        'bio': json['bio'],
        'bioLinks': json['bioLinks'],
        'currentAvatarImageUrl': json['currentAvatarImageUrl'],
        'currentAvatarThumbnailImageUrl': json['currentAvatarThumbnailImageUrl'],
        'currentAvatarTags': json['currentAvatarTags'],
        'dateJoined': (new Date(json['date_joined'])),
        'developerType': DeveloperTypeFromJSON(json['developerType']),
        'displayName': json['displayName'],
        'friendKey': json['friendKey'],
        'friendRequestStatus': json['friendRequestStatus'] == null ? undefined : json['friendRequestStatus'],
        'id': json['id'],
        'instanceId': json['instanceId'] == null ? undefined : json['instanceId'],
        'isFriend': json['isFriend'],
        'lastActivity': json['last_activity'],
        'lastLogin': json['last_login'],
        'lastPlatform': json['last_platform'],
        'location': json['location'] == null ? undefined : json['location'],
        'note': json['note'] == null ? undefined : json['note'],
        'platform': json['platform'],
        'profilePicOverride': json['profilePicOverride'],
        'profilePicOverrideThumbnail': json['profilePicOverrideThumbnail'],
        'pronouns': json['pronouns'],
        'state': UserStateFromJSON(json['state']),
        'status': UserStatusFromJSON(json['status']),
        'statusDescription': json['statusDescription'],
        'tags': json['tags'],
        'travelingToInstance': json['travelingToInstance'] == null ? undefined : json['travelingToInstance'],
        'travelingToLocation': json['travelingToLocation'] == null ? undefined : json['travelingToLocation'],
        'travelingToWorld': json['travelingToWorld'] == null ? undefined : json['travelingToWorld'],
        'userIcon': json['userIcon'],
        'username': json['username'] == null ? undefined : json['username'],
        'worldId': json['worldId'] == null ? undefined : json['worldId'],
    };
}

export function UserToJSON(value?: User | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'allowAvatarCopying': value['allowAvatarCopying'],
        'badges': value['badges'] == null ? undefined : ((value['badges'] as Array<any>).map(BadgeToJSON)),
        'bio': value['bio'],
        'bioLinks': value['bioLinks'],
        'currentAvatarImageUrl': value['currentAvatarImageUrl'],
        'currentAvatarThumbnailImageUrl': value['currentAvatarThumbnailImageUrl'],
        'currentAvatarTags': value['currentAvatarTags'],
        'date_joined': ((value['dateJoined']).toISOString().substring(0,10)),
        'developerType': DeveloperTypeToJSON(value['developerType']),
        'displayName': value['displayName'],
        'friendKey': value['friendKey'],
        'friendRequestStatus': value['friendRequestStatus'],
        'id': value['id'],
        'instanceId': value['instanceId'],
        'isFriend': value['isFriend'],
        'last_activity': value['lastActivity'],
        'last_login': value['lastLogin'],
        'last_platform': value['lastPlatform'],
        'location': value['location'],
        'note': value['note'],
        'platform': value['platform'],
        'profilePicOverride': value['profilePicOverride'],
        'profilePicOverrideThumbnail': value['profilePicOverrideThumbnail'],
        'pronouns': value['pronouns'],
        'state': UserStateToJSON(value['state']),
        'status': UserStatusToJSON(value['status']),
        'statusDescription': value['statusDescription'],
        'tags': value['tags'],
        'travelingToInstance': value['travelingToInstance'],
        'travelingToLocation': value['travelingToLocation'],
        'travelingToWorld': value['travelingToWorld'],
        'userIcon': value['userIcon'],
        'username': value['username'],
        'worldId': value['worldId'],
    };
}

