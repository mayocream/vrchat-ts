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
  CreateFileRequest,
  CreateFileVersionRequest,
  FileUploadURL,
  FileVersionUploadStatus,
  FinishFileDataUploadRequest,
} from '../models/index';
import {
    CreateFileRequestFromJSON,
    CreateFileRequestToJSON,
    CreateFileVersionRequestFromJSON,
    CreateFileVersionRequestToJSON,
    FileUploadURLFromJSON,
    FileUploadURLToJSON,
    FileVersionUploadStatusFromJSON,
    FileVersionUploadStatusToJSON,
    FinishFileDataUploadRequestFromJSON,
    FinishFileDataUploadRequestToJSON,
} from '../models/index';

export interface CreateFileOperationRequest {
    createFileRequest?: CreateFileRequest;
}

export interface CreateFileVersionOperationRequest {
    fileId: string;
    createFileVersionRequest?: CreateFileVersionRequest;
}

export interface DeleteFileRequest {
    fileId: string;
}

export interface DeleteFileVersionRequest {
    fileId: string;
    versionId: number;
}

export interface DownloadFileVersionRequest {
    fileId: string;
    versionId: number;
}

export interface FinishFileDataUploadOperationRequest {
    fileId: string;
    versionId: number;
    fileType: FinishFileDataUploadOperationFileTypeEnum;
    finishFileDataUploadRequest?: FinishFileDataUploadRequest;
}

export interface GetFileRequest {
    fileId: string;
}

export interface GetFileDataUploadStatusRequest {
    fileId: string;
    versionId: number;
    fileType: GetFileDataUploadStatusFileTypeEnum;
}

export interface GetFilesRequest {
    tag?: string;
    userId?: string;
    n?: number;
    offset?: number;
}

export interface StartFileDataUploadRequest {
    fileId: string;
    versionId: number;
    fileType: StartFileDataUploadFileTypeEnum;
    partNumber?: number;
}

/**
 *
 */
export class FilesApi extends runtime.BaseAPI {

    /**
     * Creates a new File object
     * Create File
     */
    async createFileRaw(requestParameters: CreateFileOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/file`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateFileRequestToJSON(requestParameters['createFileRequest']),
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<any>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Creates a new File object
     * Create File
     */
    async createFile(requestParameters: CreateFileOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.createFileRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates a new FileVersion. Once a Version has been created, proceed to the `/file/{fileId}/{versionId}/file/start` endpoint to start a file upload.
     * Create File Version
     */
    async createFileVersionRaw(requestParameters: CreateFileVersionOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters['fileId'] == null) {
            throw new runtime.RequiredError(
                'fileId',
                'Required parameter "fileId" was null or undefined when calling createFileVersion().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/file/{fileId}`.replace(`{${"fileId"}}`, encodeURIComponent(String(requestParameters['fileId']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateFileVersionRequestToJSON(requestParameters['createFileVersionRequest']),
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<any>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Creates a new FileVersion. Once a Version has been created, proceed to the `/file/{fileId}/{versionId}/file/start` endpoint to start a file upload.
     * Create File Version
     */
    async createFileVersion(requestParameters: CreateFileVersionOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.createFileVersionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes a File object.
     * Delete File
     */
    async deleteFileRaw(requestParameters: DeleteFileRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters['fileId'] == null) {
            throw new runtime.RequiredError(
                'fileId',
                'Required parameter "fileId" was null or undefined when calling deleteFile().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/file/{fileId}`.replace(`{${"fileId"}}`, encodeURIComponent(String(requestParameters['fileId']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<any>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Deletes a File object.
     * Delete File
     */
    async deleteFile(requestParameters: DeleteFileRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.deleteFileRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete a specific version of a file. You can only delete the latest version.
     * Delete File Version
     */
    async deleteFileVersionRaw(requestParameters: DeleteFileVersionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters['fileId'] == null) {
            throw new runtime.RequiredError(
                'fileId',
                'Required parameter "fileId" was null or undefined when calling deleteFileVersion().'
            );
        }

        if (requestParameters['versionId'] == null) {
            throw new runtime.RequiredError(
                'versionId',
                'Required parameter "versionId" was null or undefined when calling deleteFileVersion().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/file/{fileId}/{versionId}`.replace(`{${"fileId"}}`, encodeURIComponent(String(requestParameters['fileId']))).replace(`{${"versionId"}}`, encodeURIComponent(String(requestParameters['versionId']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<any>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Delete a specific version of a file. You can only delete the latest version.
     * Delete File Version
     */
    async deleteFileVersion(requestParameters: DeleteFileVersionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.deleteFileVersionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Downloads the file with the provided version number.  **Version Note:** Version 0 is always when the file was created. The real data is usually always located in version 1 and up.  **Extension Note:** Files are not guaranteed to have a file extensions. UnityPackage files tends to have it, images through this endpoint do not. You are responsible for appending file extension from the `extension` field when neccesary.
     * Download File Version
     */
    async downloadFileVersionRaw(requestParameters: DownloadFileVersionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['fileId'] == null) {
            throw new runtime.RequiredError(
                'fileId',
                'Required parameter "fileId" was null or undefined when calling downloadFileVersion().'
            );
        }

        if (requestParameters['versionId'] == null) {
            throw new runtime.RequiredError(
                'versionId',
                'Required parameter "versionId" was null or undefined when calling downloadFileVersion().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/file/{fileId}/{versionId}`.replace(`{${"fileId"}}`, encodeURIComponent(String(requestParameters['fileId']))).replace(`{${"versionId"}}`, encodeURIComponent(String(requestParameters['versionId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Downloads the file with the provided version number.  **Version Note:** Version 0 is always when the file was created. The real data is usually always located in version 1 and up.  **Extension Note:** Files are not guaranteed to have a file extensions. UnityPackage files tends to have it, images through this endpoint do not. You are responsible for appending file extension from the `extension` field when neccesary.
     * Download File Version
     */
    async downloadFileVersion(requestParameters: DownloadFileVersionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.downloadFileVersionRaw(requestParameters, initOverrides);
    }

    /**
     * Finish an upload of a FileData. This will mark it as \"complete\". After uploading the `file` for Avatars and Worlds you then have to upload a `signature` file.
     * Finish FileData Upload
     */
    async finishFileDataUploadRaw(requestParameters: FinishFileDataUploadOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters['fileId'] == null) {
            throw new runtime.RequiredError(
                'fileId',
                'Required parameter "fileId" was null or undefined when calling finishFileDataUpload().'
            );
        }

        if (requestParameters['versionId'] == null) {
            throw new runtime.RequiredError(
                'versionId',
                'Required parameter "versionId" was null or undefined when calling finishFileDataUpload().'
            );
        }

        if (requestParameters['fileType'] == null) {
            throw new runtime.RequiredError(
                'fileType',
                'Required parameter "fileType" was null or undefined when calling finishFileDataUpload().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/file/{fileId}/{versionId}/{fileType}/finish`.replace(`{${"fileId"}}`, encodeURIComponent(String(requestParameters['fileId']))).replace(`{${"versionId"}}`, encodeURIComponent(String(requestParameters['versionId']))).replace(`{${"fileType"}}`, encodeURIComponent(String(requestParameters['fileType']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: FinishFileDataUploadRequestToJSON(requestParameters['finishFileDataUploadRequest']),
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<any>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Finish an upload of a FileData. This will mark it as \"complete\". After uploading the `file` for Avatars and Worlds you then have to upload a `signature` file.
     * Finish FileData Upload
     */
    async finishFileDataUpload(requestParameters: FinishFileDataUploadOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.finishFileDataUploadRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Shows general information about the \"File\" object. Each File can have several \"Version\"\'s, and each Version can have multiple real files or \"Data\" blobs.
     * Show File
     */
    async getFileRaw(requestParameters: GetFileRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters['fileId'] == null) {
            throw new runtime.RequiredError(
                'fileId',
                'Required parameter "fileId" was null or undefined when calling getFile().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/file/{fileId}`.replace(`{${"fileId"}}`, encodeURIComponent(String(requestParameters['fileId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<any>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Shows general information about the \"File\" object. Each File can have several \"Version\"\'s, and each Version can have multiple real files or \"Data\" blobs.
     * Show File
     */
    async getFile(requestParameters: GetFileRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.getFileRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves the upload status for file upload. Can currently only be accessed when `status` is `waiting`. Trying to access it on a file version already uploaded currently times out.
     * Check FileData Upload Status
     */
    async getFileDataUploadStatusRaw(requestParameters: GetFileDataUploadStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FileVersionUploadStatus>> {
        if (requestParameters['fileId'] == null) {
            throw new runtime.RequiredError(
                'fileId',
                'Required parameter "fileId" was null or undefined when calling getFileDataUploadStatus().'
            );
        }

        if (requestParameters['versionId'] == null) {
            throw new runtime.RequiredError(
                'versionId',
                'Required parameter "versionId" was null or undefined when calling getFileDataUploadStatus().'
            );
        }

        if (requestParameters['fileType'] == null) {
            throw new runtime.RequiredError(
                'fileType',
                'Required parameter "fileType" was null or undefined when calling getFileDataUploadStatus().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/file/{fileId}/{versionId}/{fileType}/status`.replace(`{${"fileId"}}`, encodeURIComponent(String(requestParameters['fileId']))).replace(`{${"versionId"}}`, encodeURIComponent(String(requestParameters['versionId']))).replace(`{${"fileType"}}`, encodeURIComponent(String(requestParameters['fileType']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => FileVersionUploadStatusFromJSON(jsonValue));
    }

    /**
     * Retrieves the upload status for file upload. Can currently only be accessed when `status` is `waiting`. Trying to access it on a file version already uploaded currently times out.
     * Check FileData Upload Status
     */
    async getFileDataUploadStatus(requestParameters: GetFileDataUploadStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FileVersionUploadStatus> {
        const response = await this.getFileDataUploadStatusRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a list of files
     * List Files
     */
    async getFilesRaw(requestParameters: GetFilesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<any>>> {
        const queryParameters: any = {};

        if (requestParameters['tag'] != null) {
            queryParameters['tag'] = requestParameters['tag'];
        }

        if (requestParameters['userId'] != null) {
            queryParameters['userId'] = requestParameters['userId'];
        }

        if (requestParameters['n'] != null) {
            queryParameters['n'] = requestParameters['n'];
        }

        if (requestParameters['offset'] != null) {
            queryParameters['offset'] = requestParameters['offset'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/files`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Returns a list of files
     * List Files
     */
    async getFiles(requestParameters: GetFilesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<any>> {
        const response = await this.getFilesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Starts an upload of a specific FilePart. This endpoint will return an AWS URL which you can PUT data to. You need to call this and receive a new AWS API URL for each `partNumber`. Please see AWS\'s REST documentation on \"PUT Object to S3\" on how to upload. Once all parts has been uploaded, proceed to `/finish` endpoint.  **Note:** `nextPartNumber` seems like it is always ignored. Despite it returning 0, first partNumber is always 1.
     * Start FileData Upload
     */
    async startFileDataUploadRaw(requestParameters: StartFileDataUploadRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FileUploadURL>> {
        if (requestParameters['fileId'] == null) {
            throw new runtime.RequiredError(
                'fileId',
                'Required parameter "fileId" was null or undefined when calling startFileDataUpload().'
            );
        }

        if (requestParameters['versionId'] == null) {
            throw new runtime.RequiredError(
                'versionId',
                'Required parameter "versionId" was null or undefined when calling startFileDataUpload().'
            );
        }

        if (requestParameters['fileType'] == null) {
            throw new runtime.RequiredError(
                'fileType',
                'Required parameter "fileType" was null or undefined when calling startFileDataUpload().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['partNumber'] != null) {
            queryParameters['partNumber'] = requestParameters['partNumber'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/file/{fileId}/{versionId}/{fileType}/start`.replace(`{${"fileId"}}`, encodeURIComponent(String(requestParameters['fileId']))).replace(`{${"versionId"}}`, encodeURIComponent(String(requestParameters['versionId']))).replace(`{${"fileType"}}`, encodeURIComponent(String(requestParameters['fileType']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => FileUploadURLFromJSON(jsonValue));
    }

    /**
     * Starts an upload of a specific FilePart. This endpoint will return an AWS URL which you can PUT data to. You need to call this and receive a new AWS API URL for each `partNumber`. Please see AWS\'s REST documentation on \"PUT Object to S3\" on how to upload. Once all parts has been uploaded, proceed to `/finish` endpoint.  **Note:** `nextPartNumber` seems like it is always ignored. Despite it returning 0, first partNumber is always 1.
     * Start FileData Upload
     */
    async startFileDataUpload(requestParameters: StartFileDataUploadRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FileUploadURL> {
        const response = await this.startFileDataUploadRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const FinishFileDataUploadOperationFileTypeEnum = {
    File: 'file',
    Signature: 'signature',
    Delta: 'delta'
} as const;
export type FinishFileDataUploadOperationFileTypeEnum = typeof FinishFileDataUploadOperationFileTypeEnum[keyof typeof FinishFileDataUploadOperationFileTypeEnum];
/**
 * @export
 */
export const GetFileDataUploadStatusFileTypeEnum = {
    File: 'file',
    Signature: 'signature',
    Delta: 'delta'
} as const;
export type GetFileDataUploadStatusFileTypeEnum = typeof GetFileDataUploadStatusFileTypeEnum[keyof typeof GetFileDataUploadStatusFileTypeEnum];
/**
 * @export
 */
export const StartFileDataUploadFileTypeEnum = {
    File: 'file',
    Signature: 'signature',
    Delta: 'delta'
} as const;
export type StartFileDataUploadFileTypeEnum = typeof StartFileDataUploadFileTypeEnum[keyof typeof StartFileDataUploadFileTypeEnum];
