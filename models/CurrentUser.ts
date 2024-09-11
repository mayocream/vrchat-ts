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
import type { PastDisplayName } from './PastDisplayName';
import {
    PastDisplayNameFromJSON,
    PastDisplayNameFromJSONTyped,
    PastDisplayNameToJSON,
} from './PastDisplayName';
import type { UserState } from './UserState';
import {
    UserStateFromJSON,
    UserStateFromJSONTyped,
    UserStateToJSON,
} from './UserState';
import type { AccountDeletionLog } from './AccountDeletionLog';
import {
    AccountDeletionLogFromJSON,
    AccountDeletionLogFromJSONTyped,
    AccountDeletionLogToJSON,
} from './AccountDeletionLog';
import type { CurrentUserPresence } from './CurrentUserPresence';
import {
    CurrentUserPresenceFromJSON,
    CurrentUserPresenceFromJSONTyped,
    CurrentUserPresenceToJSON,
} from './CurrentUserPresence';
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
 * @interface CurrentUser
 */
export interface CurrentUser {
    /**
     *
     * @type {number}
     * @memberof CurrentUser
     */
    acceptedTOSVersion: number;
    /**
     *
     * @type {number}
     * @memberof CurrentUser
     */
    acceptedPrivacyVersion?: number;
    /**
     *
     * @type {Date}
     * @memberof CurrentUser
     */
    accountDeletionDate?: Date | null;
    /**
     *
     * @type {Array<AccountDeletionLog>}
     * @memberof CurrentUser
     */
    accountDeletionLog?: Array<AccountDeletionLog> | null;
    /**
     *
     * @type {Array<string>}
     * @memberof CurrentUser
     */
    activeFriends?: Array<string>;
    /**
     *
     * @type {boolean}
     * @memberof CurrentUser
     */
    allowAvatarCopying: boolean;
    /**
     *
     * @type {Array<Badge>}
     * @memberof CurrentUser
     */
    badges?: Array<Badge>;
    /**
     *
     * @type {string}
     * @memberof CurrentUser
     */
    bio: string;
    /**
     *
     * @type {Array<string>}
     * @memberof CurrentUser
     */
    bioLinks: Array<string>;
    /**
     *
     * @type {string}
     * @memberof CurrentUser
     */
    currentAvatar: string;
    /**
     *
     * @type {string}
     * @memberof CurrentUser
     */
    currentAvatarAssetUrl: string;
    /**
     * When profilePicOverride is not empty, use it instead.
     * @type {string}
     * @memberof CurrentUser
     */
    currentAvatarImageUrl: string;
    /**
     * When profilePicOverride is not empty, use it instead.
     * @type {string}
     * @memberof CurrentUser
     */
    currentAvatarThumbnailImageUrl: string;
    /**
     *
     * @type {Array<string>}
     * @memberof CurrentUser
     */
    currentAvatarTags: Array<string>;
    /**
     *
     * @type {Date}
     * @memberof CurrentUser
     */
    dateJoined: Date;
    /**
     *
     * @type {DeveloperType}
     * @memberof CurrentUser
     */
    developerType: DeveloperType;
    /**
     *
     * @type {string}
     * @memberof CurrentUser
     */
    displayName: string;
    /**
     *
     * @type {boolean}
     * @memberof CurrentUser
     */
    emailVerified: boolean;
    /**
     *
     * @type {string}
     * @memberof CurrentUser
     */
    fallbackAvatar?: string;
    /**
     * Always empty array.
     * @type {Array<string>}
     * @memberof CurrentUser
     * @deprecated
     */
    friendGroupNames: Array<string>;
    /**
     *
     * @type {string}
     * @memberof CurrentUser
     */
    friendKey: string;
    /**
     *
     * @type {Array<string>}
     * @memberof CurrentUser
     */
    friends: Array<string>;
    /**
     *
     * @type {boolean}
     * @memberof CurrentUser
     */
    hasBirthday: boolean;
    /**
     *
     * @type {boolean}
     * @memberof CurrentUser
     */
    hideContentFilterSettings?: boolean;
    /**
     *
     * @type {string}
     * @memberof CurrentUser
     */
    userLanguage?: string | null;
    /**
     *
     * @type {string}
     * @memberof CurrentUser
     */
    userLanguageCode?: string | null;
    /**
     *
     * @type {boolean}
     * @memberof CurrentUser
     */
    hasEmail: boolean;
    /**
     *
     * @type {boolean}
     * @memberof CurrentUser
     */
    hasLoggedInFromClient: boolean;
    /**
     *
     * @type {boolean}
     * @memberof CurrentUser
     */
    hasPendingEmail: boolean;
    /**
     * WorldID be "offline" on User profiles if you are not friends with that user.
     * @type {string}
     * @memberof CurrentUser
     */
    homeLocation: string;
    /**
     * A users unique ID, usually in the form of `usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469`. Legacy players can have old IDs in the form of `8JoV9XEdpo`. The ID can never be changed.
     * @type {string}
     * @memberof CurrentUser
     */
    id: string;
    /**
     *
     * @type {boolean}
     * @memberof CurrentUser
     */
    isBoopingEnabled?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof CurrentUser
     */
    isFriend: boolean;
    /**
     *
     * @type {Date}
     * @memberof CurrentUser
     */
    lastActivity?: Date;
    /**
     *
     * @type {Date}
     * @memberof CurrentUser
     */
    lastLogin: Date;
    /**
     *
     * @type {Date}
     * @memberof CurrentUser
     */
    lastMobile: Date | null;
    /**
     * This can be `standalonewindows` or `android`, but can also pretty much be any random Unity verison such as `2019.2.4-801-Release` or `2019.2.2-772-Release` or even `unknownplatform`.
     * @type {string}
     * @memberof CurrentUser
     */
    lastPlatform: string;
    /**
     *
     * @type {string}
     * @memberof CurrentUser
     */
    obfuscatedEmail: string;
    /**
     *
     * @type {string}
     * @memberof CurrentUser
     */
    obfuscatedPendingEmail: string;
    /**
     *
     * @type {string}
     * @memberof CurrentUser
     */
    oculusId: string;
    /**
     *
     * @type {string}
     * @memberof CurrentUser
     */
    googleId?: string;
    /**
     *
     * @type {object}
     * @memberof CurrentUser
     */
    googleDetails?: object;
    /**
     *
     * @type {string}
     * @memberof CurrentUser
     */
    picoId?: string;
    /**
     *
     * @type {string}
     * @memberof CurrentUser
     */
    viveId?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof CurrentUser
     */
    offlineFriends?: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof CurrentUser
     */
    onlineFriends?: Array<string>;
    /**
     *
     * @type {Array<PastDisplayName>}
     * @memberof CurrentUser
     */
    pastDisplayNames: Array<PastDisplayName>;
    /**
     *
     * @type {CurrentUserPresence}
     * @memberof CurrentUser
     */
    presence?: CurrentUserPresence;
    /**
     *
     * @type {string}
     * @memberof CurrentUser
     */
    profilePicOverride: string;
    /**
     *
     * @type {string}
     * @memberof CurrentUser
     */
    profilePicOverrideThumbnail: string;
    /**
     *
     * @type {string}
     * @memberof CurrentUser
     */
    pronouns: string;
    /**
     *
     * @type {UserState}
     * @memberof CurrentUser
     */
    state: UserState;
    /**
     *
     * @type {UserStatus}
     * @memberof CurrentUser
     */
    status: UserStatus;
    /**
     *
     * @type {string}
     * @memberof CurrentUser
     */
    statusDescription: string;
    /**
     *
     * @type {boolean}
     * @memberof CurrentUser
     */
    statusFirstTime: boolean;
    /**
     *
     * @type {Array<string>}
     * @memberof CurrentUser
     */
    statusHistory: Array<string>;
    /**
     *
     * @type {object}
     * @memberof CurrentUser
     */
    steamDetails: object;
    /**
     *
     * @type {string}
     * @memberof CurrentUser
     */
    steamId: string;
    /**
     *
     * @type {Array<string>}
     * @memberof CurrentUser
     */
    tags: Array<string>;
    /**
     *
     * @type {boolean}
     * @memberof CurrentUser
     */
    twoFactorAuthEnabled: boolean;
    /**
     *
     * @type {Date}
     * @memberof CurrentUser
     */
    twoFactorAuthEnabledDate?: Date | null;
    /**
     *
     * @type {boolean}
     * @memberof CurrentUser
     */
    unsubscribe: boolean;
    /**
     *
     * @type {Date}
     * @memberof CurrentUser
     */
    updatedAt?: Date;
    /**
     *
     * @type {string}
     * @memberof CurrentUser
     */
    userIcon: string;
    /**
     * -| **DEPRECATED:** VRChat API no longer return usernames of other users. [See issue by Tupper for more information](https://github.com/pypy-vrc/VRCX/issues/429).
     * @type {string}
     * @memberof CurrentUser
     * @deprecated
     */
    username?: string;
}



/**
 * Check if a given object implements the CurrentUser interface.
 */
export function instanceOfCurrentUser(value: object): value is CurrentUser {
    if (!('acceptedTOSVersion' in value) || value['acceptedTOSVersion'] === undefined) return false;
    if (!('allowAvatarCopying' in value) || value['allowAvatarCopying'] === undefined) return false;
    if (!('bio' in value) || value['bio'] === undefined) return false;
    if (!('bioLinks' in value) || value['bioLinks'] === undefined) return false;
    if (!('currentAvatar' in value) || value['currentAvatar'] === undefined) return false;
    if (!('currentAvatarAssetUrl' in value) || value['currentAvatarAssetUrl'] === undefined) return false;
    if (!('currentAvatarImageUrl' in value) || value['currentAvatarImageUrl'] === undefined) return false;
    if (!('currentAvatarThumbnailImageUrl' in value) || value['currentAvatarThumbnailImageUrl'] === undefined) return false;
    if (!('currentAvatarTags' in value) || value['currentAvatarTags'] === undefined) return false;
    if (!('dateJoined' in value) || value['dateJoined'] === undefined) return false;
    if (!('developerType' in value) || value['developerType'] === undefined) return false;
    if (!('displayName' in value) || value['displayName'] === undefined) return false;
    if (!('emailVerified' in value) || value['emailVerified'] === undefined) return false;
    if (!('friendGroupNames' in value) || value['friendGroupNames'] === undefined) return false;
    if (!('friendKey' in value) || value['friendKey'] === undefined) return false;
    if (!('friends' in value) || value['friends'] === undefined) return false;
    if (!('hasBirthday' in value) || value['hasBirthday'] === undefined) return false;
    if (!('hasEmail' in value) || value['hasEmail'] === undefined) return false;
    if (!('hasLoggedInFromClient' in value) || value['hasLoggedInFromClient'] === undefined) return false;
    if (!('hasPendingEmail' in value) || value['hasPendingEmail'] === undefined) return false;
    if (!('homeLocation' in value) || value['homeLocation'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('isFriend' in value) || value['isFriend'] === undefined) return false;
    if (!('lastLogin' in value) || value['lastLogin'] === undefined) return false;
    if (!('lastMobile' in value) || value['lastMobile'] === undefined) return false;
    if (!('lastPlatform' in value) || value['lastPlatform'] === undefined) return false;
    if (!('obfuscatedEmail' in value) || value['obfuscatedEmail'] === undefined) return false;
    if (!('obfuscatedPendingEmail' in value) || value['obfuscatedPendingEmail'] === undefined) return false;
    if (!('oculusId' in value) || value['oculusId'] === undefined) return false;
    if (!('pastDisplayNames' in value) || value['pastDisplayNames'] === undefined) return false;
    if (!('profilePicOverride' in value) || value['profilePicOverride'] === undefined) return false;
    if (!('profilePicOverrideThumbnail' in value) || value['profilePicOverrideThumbnail'] === undefined) return false;
    if (!('pronouns' in value) || value['pronouns'] === undefined) return false;
    if (!('state' in value) || value['state'] === undefined) return false;
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('statusDescription' in value) || value['statusDescription'] === undefined) return false;
    if (!('statusFirstTime' in value) || value['statusFirstTime'] === undefined) return false;
    if (!('statusHistory' in value) || value['statusHistory'] === undefined) return false;
    if (!('steamDetails' in value) || value['steamDetails'] === undefined) return false;
    if (!('steamId' in value) || value['steamId'] === undefined) return false;
    if (!('tags' in value) || value['tags'] === undefined) return false;
    if (!('twoFactorAuthEnabled' in value) || value['twoFactorAuthEnabled'] === undefined) return false;
    if (!('unsubscribe' in value) || value['unsubscribe'] === undefined) return false;
    if (!('userIcon' in value) || value['userIcon'] === undefined) return false;
    return true;
}

export function CurrentUserFromJSON(json: any): CurrentUser {
    return CurrentUserFromJSONTyped(json, false);
}

export function CurrentUserFromJSONTyped(json: any, ignoreDiscriminator: boolean): CurrentUser {
    if (json == null) {
        return json;
    }
    return {

        'acceptedTOSVersion': json['acceptedTOSVersion'],
        'acceptedPrivacyVersion': json['acceptedPrivacyVersion'] == null ? undefined : json['acceptedPrivacyVersion'],
        'accountDeletionDate': json['accountDeletionDate'] == null ? undefined : (new Date(json['accountDeletionDate'])),
        'accountDeletionLog': json['accountDeletionLog'] == null ? undefined : ((json['accountDeletionLog'] as Array<any>).map(AccountDeletionLogFromJSON)),
        'activeFriends': json['activeFriends'] == null ? undefined : json['activeFriends'],
        'allowAvatarCopying': json['allowAvatarCopying'],
        'badges': json['badges'] == null ? undefined : ((json['badges'] as Array<any>).map(BadgeFromJSON)),
        'bio': json['bio'],
        'bioLinks': json['bioLinks'],
        'currentAvatar': json['currentAvatar'],
        'currentAvatarAssetUrl': json['currentAvatarAssetUrl'],
        'currentAvatarImageUrl': json['currentAvatarImageUrl'],
        'currentAvatarThumbnailImageUrl': json['currentAvatarThumbnailImageUrl'],
        'currentAvatarTags': json['currentAvatarTags'],
        'dateJoined': (new Date(json['date_joined'])),
        'developerType': DeveloperTypeFromJSON(json['developerType']),
        'displayName': json['displayName'],
        'emailVerified': json['emailVerified'],
        'fallbackAvatar': json['fallbackAvatar'] == null ? undefined : json['fallbackAvatar'],
        'friendGroupNames': json['friendGroupNames'],
        'friendKey': json['friendKey'],
        'friends': json['friends'],
        'hasBirthday': json['hasBirthday'],
        'hideContentFilterSettings': json['hideContentFilterSettings'] == null ? undefined : json['hideContentFilterSettings'],
        'userLanguage': json['userLanguage'] == null ? undefined : json['userLanguage'],
        'userLanguageCode': json['userLanguageCode'] == null ? undefined : json['userLanguageCode'],
        'hasEmail': json['hasEmail'],
        'hasLoggedInFromClient': json['hasLoggedInFromClient'],
        'hasPendingEmail': json['hasPendingEmail'],
        'homeLocation': json['homeLocation'],
        'id': json['id'],
        'isBoopingEnabled': json['isBoopingEnabled'] == null ? undefined : json['isBoopingEnabled'],
        'isFriend': json['isFriend'],
        'lastActivity': json['last_activity'] == null ? undefined : (new Date(json['last_activity'])),
        'lastLogin': (new Date(json['last_login'])),
        'lastMobile': (json['last_mobile'] == null ? null : new Date(json['last_mobile'])),
        'lastPlatform': json['last_platform'],
        'obfuscatedEmail': json['obfuscatedEmail'],
        'obfuscatedPendingEmail': json['obfuscatedPendingEmail'],
        'oculusId': json['oculusId'],
        'googleId': json['googleId'] == null ? undefined : json['googleId'],
        'googleDetails': json['googleDetails'] == null ? undefined : json['googleDetails'],
        'picoId': json['picoId'] == null ? undefined : json['picoId'],
        'viveId': json['viveId'] == null ? undefined : json['viveId'],
        'offlineFriends': json['offlineFriends'] == null ? undefined : json['offlineFriends'],
        'onlineFriends': json['onlineFriends'] == null ? undefined : json['onlineFriends'],
        'pastDisplayNames': json['pastDisplayNames'] == null ? undefined : ((json['pastDisplayNames'] as Array<any>).map(PastDisplayNameFromJSON)),
        'presence': json['presence'] == null ? undefined : CurrentUserPresenceFromJSON(json['presence']),
        'profilePicOverride': json['profilePicOverride'],
        'profilePicOverrideThumbnail': json['profilePicOverrideThumbnail'],
        'pronouns': json['pronouns'],
        'state': UserStateFromJSON(json['state']),
        'status': UserStatusFromJSON(json['status']),
        'statusDescription': json['statusDescription'],
        'statusFirstTime': json['statusFirstTime'],
        'statusHistory': json['statusHistory'],
        'steamDetails': json['steamDetails'],
        'steamId': json['steamId'],
        'tags': json['tags'],
        'twoFactorAuthEnabled': json['twoFactorAuthEnabled'],
        'twoFactorAuthEnabledDate': json['twoFactorAuthEnabledDate'] == null ? undefined : (new Date(json['twoFactorAuthEnabledDate'])),
        'unsubscribe': json['unsubscribe'],
        'updatedAt': json['updated_at'] == null ? undefined : (new Date(json['updated_at'])),
        'userIcon': json['userIcon'],
        'username': json['username'] == null ? undefined : json['username'],
    };
}

export function CurrentUserToJSON(value?: CurrentUser | null): any {
    if (value == null) {
        return value;
    }
    return {

        'acceptedTOSVersion': value['acceptedTOSVersion'],
        'acceptedPrivacyVersion': value['acceptedPrivacyVersion'],
        'accountDeletionDate': value['accountDeletionDate'] == null ? undefined : ((value['accountDeletionDate'] as any).toISOString().substring(0,10)),
        'accountDeletionLog': value['accountDeletionLog'] == null ? undefined : ((value['accountDeletionLog'] as Array<any>).map(AccountDeletionLogToJSON)),
        'activeFriends': value['activeFriends'],
        'allowAvatarCopying': value['allowAvatarCopying'],
        'badges': value['badges'] == null ? undefined : ((value['badges'] as Array<any>).map(BadgeToJSON)),
        'bio': value['bio'],
        'bioLinks': value['bioLinks'],
        'currentAvatar': value['currentAvatar'],
        'currentAvatarAssetUrl': value['currentAvatarAssetUrl'],
        'currentAvatarImageUrl': value['currentAvatarImageUrl'],
        'currentAvatarThumbnailImageUrl': value['currentAvatarThumbnailImageUrl'],
        'currentAvatarTags': value['currentAvatarTags'],
        'date_joined': ((value['dateJoined']).toISOString().substring(0,10)),
        'developerType': DeveloperTypeToJSON(value['developerType']),
        'displayName': value['displayName'],
        'emailVerified': value['emailVerified'],
        'fallbackAvatar': value['fallbackAvatar'],
        'friendGroupNames': value['friendGroupNames'],
        'friendKey': value['friendKey'],
        'friends': value['friends'],
        'hasBirthday': value['hasBirthday'],
        'hideContentFilterSettings': value['hideContentFilterSettings'],
        'userLanguage': value['userLanguage'],
        'userLanguageCode': value['userLanguageCode'],
        'hasEmail': value['hasEmail'],
        'hasLoggedInFromClient': value['hasLoggedInFromClient'],
        'hasPendingEmail': value['hasPendingEmail'],
        'homeLocation': value['homeLocation'],
        'id': value['id'],
        'isBoopingEnabled': value['isBoopingEnabled'],
        'isFriend': value['isFriend'],
        'last_activity': value['lastActivity'] == null ? undefined : ((value['lastActivity']).toISOString()),
        'last_login': ((value['lastLogin']).toISOString()),
        'last_mobile': (value['lastMobile'] == null ? null : (value['lastMobile'] as any).toISOString()),
        'last_platform': value['lastPlatform'],
        'obfuscatedEmail': value['obfuscatedEmail'],
        'obfuscatedPendingEmail': value['obfuscatedPendingEmail'],
        'oculusId': value['oculusId'],
        'googleId': value['googleId'],
        'googleDetails': value['googleDetails'],
        'picoId': value['picoId'],
        'viveId': value['viveId'],
        'offlineFriends': value['offlineFriends'],
        'onlineFriends': value['onlineFriends'],
        'pastDisplayNames': ((value['pastDisplayNames'] as Array<any>).map(PastDisplayNameToJSON)),
        'presence': CurrentUserPresenceToJSON(value['presence']),
        'profilePicOverride': value['profilePicOverride'],
        'profilePicOverrideThumbnail': value['profilePicOverrideThumbnail'],
        'pronouns': value['pronouns'],
        'state': UserStateToJSON(value['state']),
        'status': UserStatusToJSON(value['status']),
        'statusDescription': value['statusDescription'],
        'statusFirstTime': value['statusFirstTime'],
        'statusHistory': value['statusHistory'],
        'steamDetails': value['steamDetails'],
        'steamId': value['steamId'],
        'tags': value['tags'],
        'twoFactorAuthEnabled': value['twoFactorAuthEnabled'],
        'twoFactorAuthEnabledDate': value['twoFactorAuthEnabledDate'] == null ? undefined : ((value['twoFactorAuthEnabledDate'] as any).toISOString()),
        'unsubscribe': value['unsubscribe'],
        'updated_at': value['updatedAt'] == null ? undefined : ((value['updatedAt']).toISOString()),
        'userIcon': value['userIcon'],
        'username': value['username'],
    };
}

