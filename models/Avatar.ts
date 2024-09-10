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
import type { ReleaseStatus } from './ReleaseStatus';
import {
    ReleaseStatusFromJSON,
    ReleaseStatusFromJSONTyped,
    ReleaseStatusToJSON,
} from './ReleaseStatus';
import type { AvatarUnityPackageUrlObject } from './AvatarUnityPackageUrlObject';
import {
    AvatarUnityPackageUrlObjectFromJSON,
    AvatarUnityPackageUrlObjectFromJSONTyped,
    AvatarUnityPackageUrlObjectToJSON,
} from './AvatarUnityPackageUrlObject';
import type { UnityPackage } from './UnityPackage';
import {
    UnityPackageFromJSON,
    UnityPackageFromJSONTyped,
    UnityPackageToJSON,
} from './UnityPackage';

/**
 * 
 * @export
 * @interface Avatar
 */
export interface Avatar {
    /**
     * Not present from general serach `/avatars`, only on specific requests `/avatars/{avatarId}`.
     * @type {string}
     * @memberof Avatar
     */
    assetUrl?: string;
    /**
     * Not present from general serach `/avatars`, only on specific requests `/avatars/{avatarId}`.
     * **Deprecation:** `Object` has unknown usage/fields, and is always empty. Use normal `Url` field instead.
     * @type {object}
     * @memberof Avatar
     */
    assetUrlObject?: object;
    /**
     * A users unique ID, usually in the form of `usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469`. Legacy players can have old IDs in the form of `8JoV9XEdpo`. The ID can never be changed.
     * @type {string}
     * @memberof Avatar
     */
    authorId: string;
    /**
     * 
     * @type {string}
     * @memberof Avatar
     */
    authorName: string;
    /**
     * 
     * @type {Date}
     * @memberof Avatar
     */
    createdAt: Date;
    /**
     * 
     * @type {string}
     * @memberof Avatar
     */
    description: string;
    /**
     * 
     * @type {boolean}
     * @memberof Avatar
     */
    featured: boolean;
    /**
     * 
     * @type {string}
     * @memberof Avatar
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof Avatar
     */
    imageUrl: string;
    /**
     * 
     * @type {string}
     * @memberof Avatar
     */
    name: string;
    /**
     * 
     * @type {ReleaseStatus}
     * @memberof Avatar
     */
    releaseStatus: ReleaseStatus;
    /**
     *  
     * @type {Array<string>}
     * @memberof Avatar
     */
    tags: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof Avatar
     */
    thumbnailImageUrl: string;
    /**
     * 
     * @type {string}
     * @memberof Avatar
     */
    unityPackageUrl: string;
    /**
     * 
     * @type {AvatarUnityPackageUrlObject}
     * @memberof Avatar
     * @deprecated
     */
    unityPackageUrlObject: AvatarUnityPackageUrlObject;
    /**
     * 
     * @type {Set<UnityPackage>}
     * @memberof Avatar
     */
    unityPackages: Set<UnityPackage>;
    /**
     * 
     * @type {Date}
     * @memberof Avatar
     */
    updatedAt: Date;
    /**
     * 
     * @type {number}
     * @memberof Avatar
     */
    version: number;
}



/**
 * Check if a given object implements the Avatar interface.
 */
export function instanceOfAvatar(value: object): value is Avatar {
    if (!('authorId' in value) || value['authorId'] === undefined) return false;
    if (!('authorName' in value) || value['authorName'] === undefined) return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined) return false;
    if (!('description' in value) || value['description'] === undefined) return false;
    if (!('featured' in value) || value['featured'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('imageUrl' in value) || value['imageUrl'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('releaseStatus' in value) || value['releaseStatus'] === undefined) return false;
    if (!('tags' in value) || value['tags'] === undefined) return false;
    if (!('thumbnailImageUrl' in value) || value['thumbnailImageUrl'] === undefined) return false;
    if (!('unityPackageUrl' in value) || value['unityPackageUrl'] === undefined) return false;
    if (!('unityPackageUrlObject' in value) || value['unityPackageUrlObject'] === undefined) return false;
    if (!('unityPackages' in value) || value['unityPackages'] === undefined) return false;
    if (!('updatedAt' in value) || value['updatedAt'] === undefined) return false;
    if (!('version' in value) || value['version'] === undefined) return false;
    return true;
}

export function AvatarFromJSON(json: any): Avatar {
    return AvatarFromJSONTyped(json, false);
}

export function AvatarFromJSONTyped(json: any, ignoreDiscriminator: boolean): Avatar {
    if (json == null) {
        return json;
    }
    return {
        
        'assetUrl': json['assetUrl'] == null ? undefined : json['assetUrl'],
        'assetUrlObject': json['assetUrlObject'] == null ? undefined : json['assetUrlObject'],
        'authorId': json['authorId'],
        'authorName': json['authorName'],
        'createdAt': (new Date(json['created_at'])),
        'description': json['description'],
        'featured': json['featured'],
        'id': json['id'],
        'imageUrl': json['imageUrl'],
        'name': json['name'],
        'releaseStatus': ReleaseStatusFromJSON(json['releaseStatus']),
        'tags': json['tags'],
        'thumbnailImageUrl': json['thumbnailImageUrl'],
        'unityPackageUrl': json['unityPackageUrl'],
        'unityPackageUrlObject': AvatarUnityPackageUrlObjectFromJSON(json['unityPackageUrlObject']),
        'unityPackages': (new Set((json['unityPackages'] as Array<any>).map(UnityPackageFromJSON))),
        'updatedAt': (new Date(json['updated_at'])),
        'version': json['version'],
    };
}

export function AvatarToJSON(value?: Avatar | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'assetUrl': value['assetUrl'],
        'assetUrlObject': value['assetUrlObject'],
        'authorId': value['authorId'],
        'authorName': value['authorName'],
        'created_at': ((value['createdAt']).toISOString()),
        'description': value['description'],
        'featured': value['featured'],
        'id': value['id'],
        'imageUrl': value['imageUrl'],
        'name': value['name'],
        'releaseStatus': ReleaseStatusToJSON(value['releaseStatus']),
        'tags': value['tags'],
        'thumbnailImageUrl': value['thumbnailImageUrl'],
        'unityPackageUrl': value['unityPackageUrl'],
        'unityPackageUrlObject': AvatarUnityPackageUrlObjectToJSON(value['unityPackageUrlObject']),
        'unityPackages': (Array.from(value['unityPackages'] as Set<any>).map(UnityPackageToJSON)),
        'updated_at': ((value['updatedAt']).toISOString()),
        'version': value['version'],
    };
}

