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
import type { DynamicContentRow } from './DynamicContentRow';
import {
    DynamicContentRowFromJSON,
    DynamicContentRowFromJSONTyped,
    DynamicContentRowToJSON,
} from './DynamicContentRow';
import type { APIConfigAnnouncement } from './APIConfigAnnouncement';
import {
    APIConfigAnnouncementFromJSON,
    APIConfigAnnouncementFromJSONTyped,
    APIConfigAnnouncementToJSON,
} from './APIConfigAnnouncement';
import type { APIConfigEvents } from './APIConfigEvents';
import {
    APIConfigEventsFromJSON,
    APIConfigEventsFromJSONTyped,
    APIConfigEventsToJSON,
} from './APIConfigEvents';
import type { DeploymentGroup } from './DeploymentGroup';
import {
    DeploymentGroupFromJSON,
    DeploymentGroupFromJSONTyped,
    DeploymentGroupToJSON,
} from './DeploymentGroup';
import type { APIConfigDownloadURLList } from './APIConfigDownloadURLList';
import {
    APIConfigDownloadURLListFromJSON,
    APIConfigDownloadURLListFromJSONTyped,
    APIConfigDownloadURLListToJSON,
} from './APIConfigDownloadURLList';

/**
 * 
 * @export
 * @interface APIConfig
 */
export interface APIConfig {
    /**
     * Unknown, probably voice optimization testing
     * @type {boolean}
     * @memberof APIConfig
     */
    voiceEnableDegradation: boolean;
    /**
     * Unknown, probably voice optimization testing
     * @type {boolean}
     * @memberof APIConfig
     */
    voiceEnableReceiverLimiting: boolean;
    /**
     * VRChat's office address
     * @type {string}
     * @memberof APIConfig
     */
    address: string;
    /**
     * Public Announcements
     * @type {Set<APIConfigAnnouncement>}
     * @memberof APIConfig
     */
    announcements: Set<APIConfigAnnouncement>;
    /**
     * Game name
     * @type {string}
     * @memberof APIConfig
     * @deprecated
     */
    appName: string;
    /**
     * List of supported Languages
     * @type {Array<string>}
     * @memberof APIConfig
     */
    availableLanguageCodes: Array<string>;
    /**
     * List of supported Languages
     * @type {Array<string>}
     * @memberof APIConfig
     */
    availableLanguages: Array<string>;
    /**
     * Build tag of the API server
     * @type {string}
     * @memberof APIConfig
     */
    buildVersionTag: string;
    /**
     * apiKey to be used for all other requests
     * @type {string}
     * @memberof APIConfig
     */
    clientApiKey: string;
    /**
     * Unknown
     * @type {number}
     * @memberof APIConfig
     */
    clientBPSCeiling: number;
    /**
     * Unknown
     * @type {number}
     * @memberof APIConfig
     */
    clientDisconnectTimeout: number;
    /**
     * Unknown
     * @type {boolean}
     * @memberof APIConfig
     */
    clientNetDispatchThread?: boolean;
    /**
     * Unknown
     * @type {boolean}
     * @memberof APIConfig
     */
    clientNetInThread?: boolean;
    /**
     * Unknown
     * @type {boolean}
     * @memberof APIConfig
     */
    clientNetInThread2?: boolean;
    /**
     * Unknown
     * @type {boolean}
     * @memberof APIConfig
     */
    clientNetInThreadMobile?: boolean;
    /**
     * Unknown
     * @type {boolean}
     * @memberof APIConfig
     */
    clientNetInThreadMobile2?: boolean;
    /**
     * Unknown
     * @type {boolean}
     * @memberof APIConfig
     */
    clientNetOutThread?: boolean;
    /**
     * Unknown
     * @type {boolean}
     * @memberof APIConfig
     */
    clientNetOutThread2?: boolean;
    /**
     * Unknown
     * @type {boolean}
     * @memberof APIConfig
     */
    clientNetOutThreadMobile?: boolean;
    /**
     * Unknown
     * @type {boolean}
     * @memberof APIConfig
     */
    clientNetOutThreadMobile2?: boolean;
    /**
     * Unknown
     * @type {number}
     * @memberof APIConfig
     */
    clientQR?: number;
    /**
     * Unknown
     * @type {number}
     * @memberof APIConfig
     */
    clientReservedPlayerBPS: number;
    /**
     * Unknown
     * @type {number}
     * @memberof APIConfig
     */
    clientSentCountAllowance: number;
    /**
     * VRChat's contact email
     * @type {string}
     * @memberof APIConfig
     */
    contactEmail: string;
    /**
     * VRChat's copyright-issues-related email
     * @type {string}
     * @memberof APIConfig
     */
    copyrightEmail: string;
    /**
     * Current version number of the Privacy Agreement
     * @type {number}
     * @memberof APIConfig
     */
    currentPrivacyVersion?: number;
    /**
     * Current version number of the Terms of Service
     * @type {number}
     * @memberof APIConfig
     */
    currentTOSVersion: number;
    /**
     * 
     * @type {string}
     * @memberof APIConfig
     */
    defaultAvatar: string;
    /**
     * 
     * @type {DeploymentGroup}
     * @memberof APIConfig
     */
    deploymentGroup: DeploymentGroup;
    /**
     * Unknown
     * @type {Array<string>}
     * @memberof APIConfig
     */
    devLanguageCodes?: Array<string>;
    /**
     * Link to download the development SDK, use downloadUrls instead
     * @type {string}
     * @memberof APIConfig
     * @deprecated
     */
    devSdkUrl: string;
    /**
     * Version of the development SDK
     * @type {string}
     * @memberof APIConfig
     * @deprecated
     */
    devSdkVersion: string;
    /**
     * Unknown, "dis" maybe for disconnect?
     * @type {Date}
     * @memberof APIConfig
     */
    disCountdown: Date;
    /**
     * Unknown
     * @type {boolean}
     * @memberof APIConfig
     */
    disableAVProInProton?: boolean;
    /**
     * Toggles if copying avatars should be disabled
     * @type {boolean}
     * @memberof APIConfig
     */
    disableAvatarCopying: boolean;
    /**
     * Toggles if avatar gating should be disabled. Avatar gating restricts uploading of avatars to people with the `system_avatar_access` Tag or `admin_avatar_access` Tag
     * @type {boolean}
     * @memberof APIConfig
     */
    disableAvatarGating: boolean;
    /**
     * Toggles if the Community Labs should be disabled
     * @type {boolean}
     * @memberof APIConfig
     */
    disableCommunityLabs: boolean;
    /**
     * Toggles if promotion out of Community Labs should be disabled
     * @type {boolean}
     * @memberof APIConfig
     */
    disableCommunityLabsPromotion: boolean;
    /**
     * Unknown
     * @type {boolean}
     * @memberof APIConfig
     */
    disableEmail: boolean;
    /**
     * Unknown
     * @type {boolean}
     * @memberof APIConfig
     */
    disableCaptcha?: boolean;
    /**
     * Toggles if Analytics should be disabled.
     * @type {boolean}
     * @memberof APIConfig
     */
    disableEventStream: boolean;
    /**
     * Toggles if feedback gating should be disabled. Feedback gating restricts submission of feedback (reporting a World or User) to people with the `system_feedback_access` Tag.
     * @type {boolean}
     * @memberof APIConfig
     */
    disableFeedbackGating: boolean;
    /**
     * Unknown, probably toggles compilation of frontend web builds? So internal flag?
     * @type {boolean}
     * @memberof APIConfig
     */
    disableFrontendBuilds: boolean;
    /**
     * Unknown
     * @type {boolean}
     * @memberof APIConfig
     */
    disableHello: boolean;
    /**
     * Toggles if signing up for Subscriptions in Oculus is disabled or not.
     * @type {boolean}
     * @memberof APIConfig
     */
    disableOculusSubs: boolean;
    /**
     * Toggles if new user account registration should be disabled.
     * @type {boolean}
     * @memberof APIConfig
     */
    disableRegistration: boolean;
    /**
     * Toggles if Steam Networking should be disabled. VRChat these days uses Photon Unity Networking (PUN) instead.
     * @type {boolean}
     * @memberof APIConfig
     */
    disableSteamNetworking: boolean;
    /**
     * Toggles if 2FA should be disabled.
     * @type {boolean}
     * @memberof APIConfig
     * @deprecated
     */
    disableTwoFactorAuth: boolean;
    /**
     * Toggles if Udon should be universally disabled in-game.
     * @type {boolean}
     * @memberof APIConfig
     */
    disableUdon: boolean;
    /**
     * Toggles if account upgrading "linking with Steam/Oculus" should be disabled.
     * @type {boolean}
     * @memberof APIConfig
     */
    disableUpgradeAccount: boolean;
    /**
     * Download link for game on the Oculus Rift website.
     * @type {string}
     * @memberof APIConfig
     */
    downloadLinkWindows: string;
    /**
     * 
     * @type {APIConfigDownloadURLList}
     * @memberof APIConfig
     */
    downloadUrls: APIConfigDownloadURLList;
    /**
     * Array of DynamicWorldRow objects, used by the game to display the list of world rows
     * @type {Set<DynamicContentRow>}
     * @memberof APIConfig
     */
    dynamicWorldRows: Set<DynamicContentRow>;
    /**
     * Unknown
     * @type {string}
     * @memberof APIConfig
     */
    economyPauseEnd?: string;
    /**
     * Unknown
     * @type {string}
     * @memberof APIConfig
     */
    economyPauseStart?: string;
    /**
     * Unknown
     * @type {number}
     * @memberof APIConfig
     */
    economyState?: number;
    /**
     * 
     * @type {APIConfigEvents}
     * @memberof APIConfig
     */
    events: APIConfigEvents;
    /**
     * WorldID be "offline" on User profiles if you are not friends with that user.
     * @type {string}
     * @memberof APIConfig
     */
    homeWorldId: string;
    /**
     * Redirect target if you try to open the base API domain in your browser
     * @type {string}
     * @memberof APIConfig
     */
    homepageRedirectTarget: string;
    /**
     * WorldID be "offline" on User profiles if you are not friends with that user.
     * @type {string}
     * @memberof APIConfig
     */
    hubWorldId: string;
    /**
     * A list of explicitly allowed origins that worlds can request images from via the Udon's [VRCImageDownloader#DownloadImage](https://creators.vrchat.com/worlds/udon/image-loading/#downloadimage).
     * @type {Array<string>}
     * @memberof APIConfig
     */
    imageHostUrlList: Array<string>;
    /**
     * VRChat's job application email
     * @type {string}
     * @memberof APIConfig
     */
    jobsEmail: string;
    /**
     * VRChat's moderation related email
     * @type {string}
     * @memberof APIConfig
     */
    moderationEmail: string;
    /**
     * Used in-game to notify a user they aren't allowed to select avatars in private worlds
     * @type {string}
     * @memberof APIConfig
     */
    notAllowedToSelectAvatarInPrivateWorldMessage: string;
    /**
     * Link to the developer FAQ
     * @type {string}
     * @memberof APIConfig
     */
    sdkDeveloperFaqUrl: string;
    /**
     * Link to the official VRChat Discord
     * @type {string}
     * @memberof APIConfig
     */
    sdkDiscordUrl: string;
    /**
     * Used in the SDK to notify a user they aren't allowed to upload avatars/worlds yet
     * @type {string}
     * @memberof APIConfig
     */
    sdkNotAllowedToPublishMessage: string;
    /**
     * Unity version supported by the SDK
     * @type {string}
     * @memberof APIConfig
     */
    sdkUnityVersion: string;
    /**
     * Server name of the API server currently responding
     * @type {string}
     * @memberof APIConfig
     */
    serverName: string;
    /**
     * A list of explicitly allowed origins that worlds can request strings from via the Udon's [VRCStringDownloader.LoadUrl](https://creators.vrchat.com/worlds/udon/string-loading/#ivrcstringdownload).
     * @type {Array<string>}
     * @memberof APIConfig
     */
    stringHostUrlList: Array<string>;
    /**
     * VRChat's support email
     * @type {string}
     * @memberof APIConfig
     */
    supportEmail: string;
    /**
     * WorldID be "offline" on User profiles if you are not friends with that user.
     * @type {string}
     * @memberof APIConfig
     */
    timeOutWorldId: string;
    /**
     * WorldID be "offline" on User profiles if you are not friends with that user.
     * @type {string}
     * @memberof APIConfig
     */
    tutorialWorldId: string;
    /**
     * Unknown
     * @type {number}
     * @memberof APIConfig
     */
    updateRateMsMaximum: number;
    /**
     * Unknown
     * @type {number}
     * @memberof APIConfig
     */
    updateRateMsMinimum: number;
    /**
     * Unknown
     * @type {number}
     * @memberof APIConfig
     */
    updateRateMsNormal: number;
    /**
     * Unknown
     * @type {number}
     * @memberof APIConfig
     */
    updateRateMsUdonManual: number;
    /**
     * Unknown
     * @type {number}
     * @memberof APIConfig
     */
    uploadAnalysisPercent: number;
    /**
     * List of allowed URLs that bypass the "Allow untrusted URL's" setting in-game
     * @type {Array<string>}
     * @memberof APIConfig
     */
    urlList: Array<string>;
    /**
     * Unknown
     * @type {boolean}
     * @memberof APIConfig
     */
    useReliableUdpForVoice: boolean;
    /**
     * Download link for game on the Steam website.
     * @type {string}
     * @memberof APIConfig
     */
    viveWindowsUrl: string;
    /**
     * List of allowed URLs that are allowed to host avatar assets
     * @type {Array<string>}
     * @memberof APIConfig
     */
    whiteListedAssetUrls: Array<string>;
    /**
     * Currently used youtube-dl.exe version
     * @type {string}
     * @memberof APIConfig
     */
    playerUrlResolverVersion: string;
    /**
     * Currently used youtube-dl.exe hash in SHA1-delimited format
     * @type {string}
     * @memberof APIConfig
     */
    playerUrlResolverSha1: string;
}



/**
 * Check if a given object implements the APIConfig interface.
 */
export function instanceOfAPIConfig(value: object): value is APIConfig {
    if (!('voiceEnableDegradation' in value) || value['voiceEnableDegradation'] === undefined) return false;
    if (!('voiceEnableReceiverLimiting' in value) || value['voiceEnableReceiverLimiting'] === undefined) return false;
    if (!('address' in value) || value['address'] === undefined) return false;
    if (!('announcements' in value) || value['announcements'] === undefined) return false;
    if (!('appName' in value) || value['appName'] === undefined) return false;
    if (!('availableLanguageCodes' in value) || value['availableLanguageCodes'] === undefined) return false;
    if (!('availableLanguages' in value) || value['availableLanguages'] === undefined) return false;
    if (!('buildVersionTag' in value) || value['buildVersionTag'] === undefined) return false;
    if (!('clientApiKey' in value) || value['clientApiKey'] === undefined) return false;
    if (!('clientBPSCeiling' in value) || value['clientBPSCeiling'] === undefined) return false;
    if (!('clientDisconnectTimeout' in value) || value['clientDisconnectTimeout'] === undefined) return false;
    if (!('clientReservedPlayerBPS' in value) || value['clientReservedPlayerBPS'] === undefined) return false;
    if (!('clientSentCountAllowance' in value) || value['clientSentCountAllowance'] === undefined) return false;
    if (!('contactEmail' in value) || value['contactEmail'] === undefined) return false;
    if (!('copyrightEmail' in value) || value['copyrightEmail'] === undefined) return false;
    if (!('currentTOSVersion' in value) || value['currentTOSVersion'] === undefined) return false;
    if (!('defaultAvatar' in value) || value['defaultAvatar'] === undefined) return false;
    if (!('deploymentGroup' in value) || value['deploymentGroup'] === undefined) return false;
    if (!('devSdkUrl' in value) || value['devSdkUrl'] === undefined) return false;
    if (!('devSdkVersion' in value) || value['devSdkVersion'] === undefined) return false;
    if (!('disCountdown' in value) || value['disCountdown'] === undefined) return false;
    if (!('disableAvatarCopying' in value) || value['disableAvatarCopying'] === undefined) return false;
    if (!('disableAvatarGating' in value) || value['disableAvatarGating'] === undefined) return false;
    if (!('disableCommunityLabs' in value) || value['disableCommunityLabs'] === undefined) return false;
    if (!('disableCommunityLabsPromotion' in value) || value['disableCommunityLabsPromotion'] === undefined) return false;
    if (!('disableEmail' in value) || value['disableEmail'] === undefined) return false;
    if (!('disableEventStream' in value) || value['disableEventStream'] === undefined) return false;
    if (!('disableFeedbackGating' in value) || value['disableFeedbackGating'] === undefined) return false;
    if (!('disableFrontendBuilds' in value) || value['disableFrontendBuilds'] === undefined) return false;
    if (!('disableHello' in value) || value['disableHello'] === undefined) return false;
    if (!('disableOculusSubs' in value) || value['disableOculusSubs'] === undefined) return false;
    if (!('disableRegistration' in value) || value['disableRegistration'] === undefined) return false;
    if (!('disableSteamNetworking' in value) || value['disableSteamNetworking'] === undefined) return false;
    if (!('disableTwoFactorAuth' in value) || value['disableTwoFactorAuth'] === undefined) return false;
    if (!('disableUdon' in value) || value['disableUdon'] === undefined) return false;
    if (!('disableUpgradeAccount' in value) || value['disableUpgradeAccount'] === undefined) return false;
    if (!('downloadLinkWindows' in value) || value['downloadLinkWindows'] === undefined) return false;
    if (!('downloadUrls' in value) || value['downloadUrls'] === undefined) return false;
    if (!('dynamicWorldRows' in value) || value['dynamicWorldRows'] === undefined) return false;
    if (!('events' in value) || value['events'] === undefined) return false;
    if (!('homeWorldId' in value) || value['homeWorldId'] === undefined) return false;
    if (!('homepageRedirectTarget' in value) || value['homepageRedirectTarget'] === undefined) return false;
    if (!('hubWorldId' in value) || value['hubWorldId'] === undefined) return false;
    if (!('imageHostUrlList' in value) || value['imageHostUrlList'] === undefined) return false;
    if (!('jobsEmail' in value) || value['jobsEmail'] === undefined) return false;
    if (!('moderationEmail' in value) || value['moderationEmail'] === undefined) return false;
    if (!('notAllowedToSelectAvatarInPrivateWorldMessage' in value) || value['notAllowedToSelectAvatarInPrivateWorldMessage'] === undefined) return false;
    if (!('sdkDeveloperFaqUrl' in value) || value['sdkDeveloperFaqUrl'] === undefined) return false;
    if (!('sdkDiscordUrl' in value) || value['sdkDiscordUrl'] === undefined) return false;
    if (!('sdkNotAllowedToPublishMessage' in value) || value['sdkNotAllowedToPublishMessage'] === undefined) return false;
    if (!('sdkUnityVersion' in value) || value['sdkUnityVersion'] === undefined) return false;
    if (!('serverName' in value) || value['serverName'] === undefined) return false;
    if (!('stringHostUrlList' in value) || value['stringHostUrlList'] === undefined) return false;
    if (!('supportEmail' in value) || value['supportEmail'] === undefined) return false;
    if (!('timeOutWorldId' in value) || value['timeOutWorldId'] === undefined) return false;
    if (!('tutorialWorldId' in value) || value['tutorialWorldId'] === undefined) return false;
    if (!('updateRateMsMaximum' in value) || value['updateRateMsMaximum'] === undefined) return false;
    if (!('updateRateMsMinimum' in value) || value['updateRateMsMinimum'] === undefined) return false;
    if (!('updateRateMsNormal' in value) || value['updateRateMsNormal'] === undefined) return false;
    if (!('updateRateMsUdonManual' in value) || value['updateRateMsUdonManual'] === undefined) return false;
    if (!('uploadAnalysisPercent' in value) || value['uploadAnalysisPercent'] === undefined) return false;
    if (!('urlList' in value) || value['urlList'] === undefined) return false;
    if (!('useReliableUdpForVoice' in value) || value['useReliableUdpForVoice'] === undefined) return false;
    if (!('viveWindowsUrl' in value) || value['viveWindowsUrl'] === undefined) return false;
    if (!('whiteListedAssetUrls' in value) || value['whiteListedAssetUrls'] === undefined) return false;
    if (!('playerUrlResolverVersion' in value) || value['playerUrlResolverVersion'] === undefined) return false;
    if (!('playerUrlResolverSha1' in value) || value['playerUrlResolverSha1'] === undefined) return false;
    return true;
}

export function APIConfigFromJSON(json: any): APIConfig {
    return APIConfigFromJSONTyped(json, false);
}

export function APIConfigFromJSONTyped(json: any, ignoreDiscriminator: boolean): APIConfig {
    if (json == null) {
        return json;
    }
    return {
        
        'voiceEnableDegradation': json['VoiceEnableDegradation'],
        'voiceEnableReceiverLimiting': json['VoiceEnableReceiverLimiting'],
        'address': json['address'],
        'announcements': (new Set((json['announcements'] as Array<any>).map(APIConfigAnnouncementFromJSON))),
        'appName': json['appName'],
        'availableLanguageCodes': json['availableLanguageCodes'],
        'availableLanguages': json['availableLanguages'],
        'buildVersionTag': json['buildVersionTag'],
        'clientApiKey': json['clientApiKey'],
        'clientBPSCeiling': json['clientBPSCeiling'],
        'clientDisconnectTimeout': json['clientDisconnectTimeout'],
        'clientNetDispatchThread': json['clientNetDispatchThread'] == null ? undefined : json['clientNetDispatchThread'],
        'clientNetInThread': json['clientNetInThread'] == null ? undefined : json['clientNetInThread'],
        'clientNetInThread2': json['clientNetInThread2'] == null ? undefined : json['clientNetInThread2'],
        'clientNetInThreadMobile': json['clientNetInThreadMobile'] == null ? undefined : json['clientNetInThreadMobile'],
        'clientNetInThreadMobile2': json['clientNetInThreadMobile2'] == null ? undefined : json['clientNetInThreadMobile2'],
        'clientNetOutThread': json['clientNetOutThread'] == null ? undefined : json['clientNetOutThread'],
        'clientNetOutThread2': json['clientNetOutThread2'] == null ? undefined : json['clientNetOutThread2'],
        'clientNetOutThreadMobile': json['clientNetOutThreadMobile'] == null ? undefined : json['clientNetOutThreadMobile'],
        'clientNetOutThreadMobile2': json['clientNetOutThreadMobile2'] == null ? undefined : json['clientNetOutThreadMobile2'],
        'clientQR': json['clientQR'] == null ? undefined : json['clientQR'],
        'clientReservedPlayerBPS': json['clientReservedPlayerBPS'],
        'clientSentCountAllowance': json['clientSentCountAllowance'],
        'contactEmail': json['contactEmail'],
        'copyrightEmail': json['copyrightEmail'],
        'currentPrivacyVersion': json['currentPrivacyVersion'] == null ? undefined : json['currentPrivacyVersion'],
        'currentTOSVersion': json['currentTOSVersion'],
        'defaultAvatar': json['defaultAvatar'],
        'deploymentGroup': DeploymentGroupFromJSON(json['deploymentGroup']),
        'devLanguageCodes': json['devLanguageCodes'] == null ? undefined : json['devLanguageCodes'],
        'devSdkUrl': json['devSdkUrl'],
        'devSdkVersion': json['devSdkVersion'],
        'disCountdown': (new Date(json['dis-countdown'])),
        'disableAVProInProton': json['disableAVProInProton'] == null ? undefined : json['disableAVProInProton'],
        'disableAvatarCopying': json['disableAvatarCopying'],
        'disableAvatarGating': json['disableAvatarGating'],
        'disableCommunityLabs': json['disableCommunityLabs'],
        'disableCommunityLabsPromotion': json['disableCommunityLabsPromotion'],
        'disableEmail': json['disableEmail'],
        'disableCaptcha': json['disableCaptcha'] == null ? undefined : json['disableCaptcha'],
        'disableEventStream': json['disableEventStream'],
        'disableFeedbackGating': json['disableFeedbackGating'],
        'disableFrontendBuilds': json['disableFrontendBuilds'],
        'disableHello': json['disableHello'],
        'disableOculusSubs': json['disableOculusSubs'],
        'disableRegistration': json['disableRegistration'],
        'disableSteamNetworking': json['disableSteamNetworking'],
        'disableTwoFactorAuth': json['disableTwoFactorAuth'],
        'disableUdon': json['disableUdon'],
        'disableUpgradeAccount': json['disableUpgradeAccount'],
        'downloadLinkWindows': json['downloadLinkWindows'],
        'downloadUrls': APIConfigDownloadURLListFromJSON(json['downloadUrls']),
        'dynamicWorldRows': (new Set((json['dynamicWorldRows'] as Array<any>).map(DynamicContentRowFromJSON))),
        'economyPauseEnd': json['economyPauseEnd'] == null ? undefined : json['economyPauseEnd'],
        'economyPauseStart': json['economyPauseStart'] == null ? undefined : json['economyPauseStart'],
        'economyState': json['economyState'] == null ? undefined : json['economyState'],
        'events': APIConfigEventsFromJSON(json['events']),
        'homeWorldId': json['homeWorldId'],
        'homepageRedirectTarget': json['homepageRedirectTarget'],
        'hubWorldId': json['hubWorldId'],
        'imageHostUrlList': json['imageHostUrlList'],
        'jobsEmail': json['jobsEmail'],
        'moderationEmail': json['moderationEmail'],
        'notAllowedToSelectAvatarInPrivateWorldMessage': json['notAllowedToSelectAvatarInPrivateWorldMessage'],
        'sdkDeveloperFaqUrl': json['sdkDeveloperFaqUrl'],
        'sdkDiscordUrl': json['sdkDiscordUrl'],
        'sdkNotAllowedToPublishMessage': json['sdkNotAllowedToPublishMessage'],
        'sdkUnityVersion': json['sdkUnityVersion'],
        'serverName': json['serverName'],
        'stringHostUrlList': json['stringHostUrlList'],
        'supportEmail': json['supportEmail'],
        'timeOutWorldId': json['timeOutWorldId'],
        'tutorialWorldId': json['tutorialWorldId'],
        'updateRateMsMaximum': json['updateRateMsMaximum'],
        'updateRateMsMinimum': json['updateRateMsMinimum'],
        'updateRateMsNormal': json['updateRateMsNormal'],
        'updateRateMsUdonManual': json['updateRateMsUdonManual'],
        'uploadAnalysisPercent': json['uploadAnalysisPercent'],
        'urlList': json['urlList'],
        'useReliableUdpForVoice': json['useReliableUdpForVoice'],
        'viveWindowsUrl': json['viveWindowsUrl'],
        'whiteListedAssetUrls': json['whiteListedAssetUrls'],
        'playerUrlResolverVersion': json['player-url-resolver-version'],
        'playerUrlResolverSha1': json['player-url-resolver-sha1'],
    };
}

export function APIConfigToJSON(value?: APIConfig | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'VoiceEnableDegradation': value['voiceEnableDegradation'],
        'VoiceEnableReceiverLimiting': value['voiceEnableReceiverLimiting'],
        'address': value['address'],
        'announcements': (Array.from(value['announcements'] as Set<any>).map(APIConfigAnnouncementToJSON)),
        'appName': value['appName'],
        'availableLanguageCodes': value['availableLanguageCodes'],
        'availableLanguages': value['availableLanguages'],
        'buildVersionTag': value['buildVersionTag'],
        'clientApiKey': value['clientApiKey'],
        'clientBPSCeiling': value['clientBPSCeiling'],
        'clientDisconnectTimeout': value['clientDisconnectTimeout'],
        'clientNetDispatchThread': value['clientNetDispatchThread'],
        'clientNetInThread': value['clientNetInThread'],
        'clientNetInThread2': value['clientNetInThread2'],
        'clientNetInThreadMobile': value['clientNetInThreadMobile'],
        'clientNetInThreadMobile2': value['clientNetInThreadMobile2'],
        'clientNetOutThread': value['clientNetOutThread'],
        'clientNetOutThread2': value['clientNetOutThread2'],
        'clientNetOutThreadMobile': value['clientNetOutThreadMobile'],
        'clientNetOutThreadMobile2': value['clientNetOutThreadMobile2'],
        'clientQR': value['clientQR'],
        'clientReservedPlayerBPS': value['clientReservedPlayerBPS'],
        'clientSentCountAllowance': value['clientSentCountAllowance'],
        'contactEmail': value['contactEmail'],
        'copyrightEmail': value['copyrightEmail'],
        'currentPrivacyVersion': value['currentPrivacyVersion'],
        'currentTOSVersion': value['currentTOSVersion'],
        'defaultAvatar': value['defaultAvatar'],
        'deploymentGroup': DeploymentGroupToJSON(value['deploymentGroup']),
        'devLanguageCodes': value['devLanguageCodes'],
        'devSdkUrl': value['devSdkUrl'],
        'devSdkVersion': value['devSdkVersion'],
        'dis-countdown': ((value['disCountdown']).toISOString()),
        'disableAVProInProton': value['disableAVProInProton'],
        'disableAvatarCopying': value['disableAvatarCopying'],
        'disableAvatarGating': value['disableAvatarGating'],
        'disableCommunityLabs': value['disableCommunityLabs'],
        'disableCommunityLabsPromotion': value['disableCommunityLabsPromotion'],
        'disableEmail': value['disableEmail'],
        'disableCaptcha': value['disableCaptcha'],
        'disableEventStream': value['disableEventStream'],
        'disableFeedbackGating': value['disableFeedbackGating'],
        'disableFrontendBuilds': value['disableFrontendBuilds'],
        'disableHello': value['disableHello'],
        'disableOculusSubs': value['disableOculusSubs'],
        'disableRegistration': value['disableRegistration'],
        'disableSteamNetworking': value['disableSteamNetworking'],
        'disableTwoFactorAuth': value['disableTwoFactorAuth'],
        'disableUdon': value['disableUdon'],
        'disableUpgradeAccount': value['disableUpgradeAccount'],
        'downloadLinkWindows': value['downloadLinkWindows'],
        'downloadUrls': APIConfigDownloadURLListToJSON(value['downloadUrls']),
        'dynamicWorldRows': (Array.from(value['dynamicWorldRows'] as Set<any>).map(DynamicContentRowToJSON)),
        'economyPauseEnd': value['economyPauseEnd'],
        'economyPauseStart': value['economyPauseStart'],
        'economyState': value['economyState'],
        'events': APIConfigEventsToJSON(value['events']),
        'homeWorldId': value['homeWorldId'],
        'homepageRedirectTarget': value['homepageRedirectTarget'],
        'hubWorldId': value['hubWorldId'],
        'imageHostUrlList': value['imageHostUrlList'],
        'jobsEmail': value['jobsEmail'],
        'moderationEmail': value['moderationEmail'],
        'notAllowedToSelectAvatarInPrivateWorldMessage': value['notAllowedToSelectAvatarInPrivateWorldMessage'],
        'sdkDeveloperFaqUrl': value['sdkDeveloperFaqUrl'],
        'sdkDiscordUrl': value['sdkDiscordUrl'],
        'sdkNotAllowedToPublishMessage': value['sdkNotAllowedToPublishMessage'],
        'sdkUnityVersion': value['sdkUnityVersion'],
        'serverName': value['serverName'],
        'stringHostUrlList': value['stringHostUrlList'],
        'supportEmail': value['supportEmail'],
        'timeOutWorldId': value['timeOutWorldId'],
        'tutorialWorldId': value['tutorialWorldId'],
        'updateRateMsMaximum': value['updateRateMsMaximum'],
        'updateRateMsMinimum': value['updateRateMsMinimum'],
        'updateRateMsNormal': value['updateRateMsNormal'],
        'updateRateMsUdonManual': value['updateRateMsUdonManual'],
        'uploadAnalysisPercent': value['uploadAnalysisPercent'],
        'urlList': value['urlList'],
        'useReliableUdpForVoice': value['useReliableUdpForVoice'],
        'viveWindowsUrl': value['viveWindowsUrl'],
        'whiteListedAssetUrls': value['whiteListedAssetUrls'],
        'player-url-resolver-version': value['playerUrlResolverVersion'],
        'player-url-resolver-sha1': value['playerUrlResolverSha1'],
    };
}

