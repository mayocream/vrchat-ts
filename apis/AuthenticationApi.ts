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
  CurrentUser,
  Success,
  TwoFactorAuthCode,
  TwoFactorEmailCode,
  UserExists,
  Verify2FAEmailCodeResult,
  Verify2FAResult,
  VerifyAuthTokenResult,
} from '../models/index';
import {
    CurrentUserFromJSON,
    CurrentUserToJSON,
    SuccessFromJSON,
    SuccessToJSON,
    TwoFactorAuthCodeFromJSON,
    TwoFactorAuthCodeToJSON,
    TwoFactorEmailCodeFromJSON,
    TwoFactorEmailCodeToJSON,
    UserExistsFromJSON,
    UserExistsToJSON,
    Verify2FAEmailCodeResultFromJSON,
    Verify2FAEmailCodeResultToJSON,
    Verify2FAResultFromJSON,
    Verify2FAResultToJSON,
    VerifyAuthTokenResultFromJSON,
    VerifyAuthTokenResultToJSON,
} from '../models/index';

export interface CheckUserExistsRequest {
    email?: string;
    displayName?: string;
    username?: string;
    excludeUserId?: string;
}

export interface DeleteUserRequest {
    userId: string;
}

export interface Verify2FARequest {
    twoFactorAuthCode: TwoFactorAuthCode;
}

export interface Verify2FAEmailCodeRequest {
    twoFactorEmailCode: TwoFactorEmailCode;
}

export interface VerifyRecoveryCodeRequest {
    twoFactorAuthCode: TwoFactorAuthCode;
}

/**
 * 
 */
export class AuthenticationApi extends runtime.BaseAPI {

    /**
     * Checks if a user by a given `username`, `displayName` or `email` exist. This is used during registration to check if a username has already been taken, during change of displayName to check if a displayName is available, and during change of email to check if the email is already used. In the later two cases the `excludeUserId` is used to exclude oneself, otherwise the result would always be true.  It is **REQUIRED** to include **AT LEAST** `username`, `displayName` **or** `email` query parameter. Although they can be combined - in addition with `excludeUserId` (generally to exclude yourself) - to further fine-tune the search.
     * Check User Exists
     */
    async checkUserExistsRaw(requestParameters: CheckUserExistsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserExists>> {
        const queryParameters: any = {};

        if (requestParameters['email'] != null) {
            queryParameters['email'] = requestParameters['email'];
        }

        if (requestParameters['displayName'] != null) {
            queryParameters['displayName'] = requestParameters['displayName'];
        }

        if (requestParameters['username'] != null) {
            queryParameters['username'] = requestParameters['username'];
        }

        if (requestParameters['excludeUserId'] != null) {
            queryParameters['excludeUserId'] = requestParameters['excludeUserId'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/auth/exists`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserExistsFromJSON(jsonValue));
    }

    /**
     * Checks if a user by a given `username`, `displayName` or `email` exist. This is used during registration to check if a username has already been taken, during change of displayName to check if a displayName is available, and during change of email to check if the email is already used. In the later two cases the `excludeUserId` is used to exclude oneself, otherwise the result would always be true.  It is **REQUIRED** to include **AT LEAST** `username`, `displayName` **or** `email` query parameter. Although they can be combined - in addition with `excludeUserId` (generally to exclude yourself) - to further fine-tune the search.
     * Check User Exists
     */
    async checkUserExists(requestParameters: CheckUserExistsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserExists> {
        const response = await this.checkUserExistsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes the account with given ID. Normal users only have permission to delete their own account. Account deletion is 14 days from this request, and will be cancelled if you do an authenticated request with the account afterwards.  **VRC+ NOTE:** Despite the 14-days cooldown, any VRC+ subscription will be cancelled **immediately**.  **METHOD NOTE:** Despite this being a Delete action, the method type required is PUT.
     * Delete User
     */
    async deleteUserRaw(requestParameters: DeleteUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CurrentUser>> {
        if (requestParameters['userId'] == null) {
            throw new runtime.RequiredError(
                'userId',
                'Required parameter "userId" was null or undefined when calling deleteUser().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/users/{userId}/delete`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters['userId']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CurrentUserFromJSON(jsonValue));
    }

    /**
     * Deletes the account with given ID. Normal users only have permission to delete their own account. Account deletion is 14 days from this request, and will be cancelled if you do an authenticated request with the account afterwards.  **VRC+ NOTE:** Despite the 14-days cooldown, any VRC+ subscription will be cancelled **immediately**.  **METHOD NOTE:** Despite this being a Delete action, the method type required is PUT.
     * Delete User
     */
    async deleteUser(requestParameters: DeleteUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CurrentUser> {
        const response = await this.deleteUserRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint does the following two operations:   1) Checks if you are already logged in by looking for a valid `auth` cookie. If you are have a valid auth cookie then no additional auth-related actions are taken. If you are **not** logged in then it will log you in with the `Authorization` header and set the `auth` cookie. The `auth` cookie will only be sent once.   2) If logged in, this function will also return the CurrentUser object containing detailed information about the currently logged in user.  The auth string after `Authorization: Basic {string}` is a base64-encoded string of the username and password, both individually url-encoded, and then joined with a colon.    > base64(urlencode(username):urlencode(password))  **WARNING: Session Limit:** Each authentication with login credentials counts as a separate session, out of which you have a limited amount. Make sure to save and reuse the `auth` cookie if you are often restarting the program. The provided API libraries automatically save cookies during runtime, but does not persist during restart. While it can be fine to use username/password during development, expect in production to very fast run into the rate-limit and be temporarily blocked from making new sessions until older ones expire. The exact number of simultaneous sessions is unknown/undisclosed.
     * Login and/or Get Current User Info
     */
    async getCurrentUserRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CurrentUser>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/auth/user`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CurrentUserFromJSON(jsonValue));
    }

    /**
     * This endpoint does the following two operations:   1) Checks if you are already logged in by looking for a valid `auth` cookie. If you are have a valid auth cookie then no additional auth-related actions are taken. If you are **not** logged in then it will log you in with the `Authorization` header and set the `auth` cookie. The `auth` cookie will only be sent once.   2) If logged in, this function will also return the CurrentUser object containing detailed information about the currently logged in user.  The auth string after `Authorization: Basic {string}` is a base64-encoded string of the username and password, both individually url-encoded, and then joined with a colon.    > base64(urlencode(username):urlencode(password))  **WARNING: Session Limit:** Each authentication with login credentials counts as a separate session, out of which you have a limited amount. Make sure to save and reuse the `auth` cookie if you are often restarting the program. The provided API libraries automatically save cookies during runtime, but does not persist during restart. While it can be fine to use username/password during development, expect in production to very fast run into the rate-limit and be temporarily blocked from making new sessions until older ones expire. The exact number of simultaneous sessions is unknown/undisclosed.
     * Login and/or Get Current User Info
     */
    async getCurrentUser(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CurrentUser> {
        const response = await this.getCurrentUserRaw(initOverrides);
        return await response.value();
    }

    /**
     * Invalidates the login session.
     * Logout
     */
    async logoutRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Success>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/logout`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SuccessFromJSON(jsonValue));
    }

    /**
     * Invalidates the login session.
     * Logout
     */
    async logout(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Success> {
        const response = await this.logoutRaw(initOverrides);
        return await response.value();
    }

    /**
     * Finishes the login sequence with a normal 2FA-generated code for accounts with 2FA-protection enabled.
     * Verify 2FA code
     */
    async verify2FARaw(requestParameters: Verify2FARequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Verify2FAResult>> {
        if (requestParameters['twoFactorAuthCode'] == null) {
            throw new runtime.RequiredError(
                'twoFactorAuthCode',
                'Required parameter "twoFactorAuthCode" was null or undefined when calling verify2FA().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/auth/twofactorauth/totp/verify`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: TwoFactorAuthCodeToJSON(requestParameters['twoFactorAuthCode']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => Verify2FAResultFromJSON(jsonValue));
    }

    /**
     * Finishes the login sequence with a normal 2FA-generated code for accounts with 2FA-protection enabled.
     * Verify 2FA code
     */
    async verify2FA(requestParameters: Verify2FARequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Verify2FAResult> {
        const response = await this.verify2FARaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Finishes the login sequence with an 2FA email code.
     * Verify 2FA email code
     */
    async verify2FAEmailCodeRaw(requestParameters: Verify2FAEmailCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Verify2FAEmailCodeResult>> {
        if (requestParameters['twoFactorEmailCode'] == null) {
            throw new runtime.RequiredError(
                'twoFactorEmailCode',
                'Required parameter "twoFactorEmailCode" was null or undefined when calling verify2FAEmailCode().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/auth/twofactorauth/emailotp/verify`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: TwoFactorEmailCodeToJSON(requestParameters['twoFactorEmailCode']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => Verify2FAEmailCodeResultFromJSON(jsonValue));
    }

    /**
     * Finishes the login sequence with an 2FA email code.
     * Verify 2FA email code
     */
    async verify2FAEmailCode(requestParameters: Verify2FAEmailCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Verify2FAEmailCodeResult> {
        const response = await this.verify2FAEmailCodeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Verify whether the currently provided Auth Token is valid.
     * Verify Auth Token
     */
    async verifyAuthTokenRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<VerifyAuthTokenResult>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/auth`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => VerifyAuthTokenResultFromJSON(jsonValue));
    }

    /**
     * Verify whether the currently provided Auth Token is valid.
     * Verify Auth Token
     */
    async verifyAuthToken(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<VerifyAuthTokenResult> {
        const response = await this.verifyAuthTokenRaw(initOverrides);
        return await response.value();
    }

    /**
     * Finishes the login sequence with an OTP (One Time Password) recovery code for accounts with 2FA-protection enabled.
     * Verify 2FA code with Recovery code
     */
    async verifyRecoveryCodeRaw(requestParameters: VerifyRecoveryCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Verify2FAResult>> {
        if (requestParameters['twoFactorAuthCode'] == null) {
            throw new runtime.RequiredError(
                'twoFactorAuthCode',
                'Required parameter "twoFactorAuthCode" was null or undefined when calling verifyRecoveryCode().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/auth/twofactorauth/otp/verify`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: TwoFactorAuthCodeToJSON(requestParameters['twoFactorAuthCode']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => Verify2FAResultFromJSON(jsonValue));
    }

    /**
     * Finishes the login sequence with an OTP (One Time Password) recovery code for accounts with 2FA-protection enabled.
     * Verify 2FA code with Recovery code
     */
    async verifyRecoveryCode(requestParameters: VerifyRecoveryCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Verify2FAResult> {
        const response = await this.verifyRecoveryCodeRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
