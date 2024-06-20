/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { mod } from '../models/mod';
import type { mod_team_params } from '../models/mod_team_params';
import type { mod_teams } from '../models/mod_teams';
import type { mod_user_params } from '../models/mod_user_params';
import type { mod_users } from '../models/mod_users';
import type { mods } from '../models/mods';
import type { notification } from '../models/notification';
import type { version } from '../models/version';
import type { version_build_params } from '../models/version_build_params';
import type { version_builds } from '../models/version_builds';
import type { versions } from '../models/versions';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ModService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Fetch all available mods
     * @param search Search query
     * @param sort Sorting column
     * @param order Sorting order
     * @param limit Paging limit
     * @param offset Paging offset
     * @returns mods A collection of mods
     * @returns notification Some error unrelated to the handler
     * @throws ApiError
     */
    public listMods(
        search?: string,
        sort: 'slug' | 'name' | 'public' = 'name',
        order: 'asc' | 'desc' = 'asc',
        limit: number = 100,
        offset?: number,
    ): CancelablePromise<mods | notification> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/mods',
            query: {
                'search': search,
                'sort': sort,
                'order': order,
                'limit': limit,
                'offset': offset,
            },
            errors: {
                403: `User is not authorized`,
                500: `Some internal server error`,
            },
        });
    }
    /**
     * Create a new mod
     * @param requestBody The mod data to create
     * @returns mod The created user data
     * @returns notification Some error unrelated to the handler
     * @throws ApiError
     */
    public createMod(
        requestBody: mod,
    ): CancelablePromise<mod | notification> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/mods',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `User is not authorized`,
                422: `Failed to validate request`,
                500: `Some internal server error`,
            },
        });
    }
    /**
     * Fetch a specific mod
     * @param modId A mod identifier or slug
     * @returns mod The fetched mod details
     * @returns notification Some error unrelated to the handler
     * @throws ApiError
     */
    public showMod(
        modId: string,
    ): CancelablePromise<mod | notification> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/mods/{mod_id}',
            path: {
                'mod_id': modId,
            },
            errors: {
                403: `User is not authorized`,
                404: `Mod not found`,
                500: `Some internal server error`,
            },
        });
    }
    /**
     * Update a specific mod
     * @param modId A mod identifier or slug
     * @param requestBody The mod data to update
     * @returns mod The updated mod details
     * @returns notification Some error unrelated to the handler
     * @throws ApiError
     */
    public updateMod(
        modId: string,
        requestBody: mod,
    ): CancelablePromise<mod | notification> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/mods/{mod_id}',
            path: {
                'mod_id': modId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `User is not authorized`,
                404: `Mod not found`,
                422: `Failed to validate request`,
                500: `Some internal server error`,
            },
        });
    }
    /**
     * Delete a specific mod
     * @param modId A mod identifier or slug
     * @returns notification Plain success message
     * @throws ApiError
     */
    public deleteMod(
        modId: string,
    ): CancelablePromise<notification> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/mods/{mod_id}',
            path: {
                'mod_id': modId,
            },
            errors: {
                400: `Failed to delete the mod`,
                403: `User is not authorized`,
                404: `Mod not found`,
                500: `Some internal server error`,
            },
        });
    }
    /**
     * Fetch all users attached to mod
     * @param modId A mod identifier or slug
     * @param search Search query
     * @param sort Sorting column
     * @param order Sorting order
     * @param limit Paging limit
     * @param offset Paging offset
     * @returns mod_users A collection of mod users
     * @returns notification Some error unrelated to the handler
     * @throws ApiError
     */
    public listModUsers(
        modId: string,
        search?: string,
        sort: 'username' | 'email' | 'fullname' | 'admin' | 'active' = 'username',
        order: 'asc' | 'desc' = 'asc',
        limit: number = 100,
        offset?: number,
    ): CancelablePromise<mod_users | notification> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/mods/{mod_id}/users',
            path: {
                'mod_id': modId,
            },
            query: {
                'search': search,
                'sort': sort,
                'order': order,
                'limit': limit,
                'offset': offset,
            },
            errors: {
                403: `User is not authorized`,
                404: `Mod not found`,
                500: `Some internal server error`,
            },
        });
    }
    /**
     * Attach a user to mod
     * @param modId A mod identifier or slug
     * @param requestBody The user data to attach
     * @returns notification Plain success message
     * @throws ApiError
     */
    public attachModToUser(
        modId: string,
        requestBody: mod_user_params,
    ): CancelablePromise<notification> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/mods/{mod_id}/users',
            path: {
                'mod_id': modId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `User is not authorized`,
                404: `Mod or user not found`,
                412: `User is already attached`,
                422: `Failed to validate request`,
                500: `Some internal server error`,
            },
        });
    }
    /**
     * Update user perms for mod
     * @param modId A mod identifier or slug
     * @param requestBody The user data to update
     * @returns notification Plain success message
     * @throws ApiError
     */
    public permitModUser(
        modId: string,
        requestBody: mod_user_params,
    ): CancelablePromise<notification> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/mods/{mod_id}/users',
            path: {
                'mod_id': modId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `User is not authorized`,
                404: `Mod or user not found`,
                412: `User is not attached`,
                422: `Failed to validate request`,
                500: `Some internal server error`,
            },
        });
    }
    /**
     * Unlink a user from mod
     * @param modId A mod identifier or slug
     * @param requestBody The mod user data to unlink
     * @returns notification Plain success message
     * @throws ApiError
     */
    public deleteModFromUser(
        modId: string,
        requestBody: mod_user_params,
    ): CancelablePromise<notification> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/mods/{mod_id}/users',
            path: {
                'mod_id': modId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `User is not authorized`,
                404: `Mod or user not found`,
                412: `User is not attached`,
                500: `Some internal server error`,
            },
        });
    }
    /**
     * Fetch all teams attached to mod
     * @param modId A mod identifier or slug
     * @param search Search query
     * @param sort Sorting column
     * @param order Sorting order
     * @param limit Paging limit
     * @param offset Paging offset
     * @returns mod_teams A collection of mod teams
     * @returns notification Some error unrelated to the handler
     * @throws ApiError
     */
    public listModTeams(
        modId: string,
        search?: string,
        sort: 'slug' | 'name' = 'name',
        order: 'asc' | 'desc' = 'asc',
        limit: number = 100,
        offset?: number,
    ): CancelablePromise<mod_teams | notification> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/mods/{mod_id}/teams',
            path: {
                'mod_id': modId,
            },
            query: {
                'search': search,
                'sort': sort,
                'order': order,
                'limit': limit,
                'offset': offset,
            },
            errors: {
                403: `User is not authorized`,
                404: `Mod not found`,
                500: `Some internal server error`,
            },
        });
    }
    /**
     * Attach a team to mod
     * @param modId A mod identifier or slug
     * @param requestBody The team data to attach
     * @returns notification Plain success message
     * @throws ApiError
     */
    public attachModToTeam(
        modId: string,
        requestBody: mod_team_params,
    ): CancelablePromise<notification> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/mods/{mod_id}/teams',
            path: {
                'mod_id': modId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `User is not authorized`,
                404: `Mod or team not found`,
                412: `Team is already attached`,
                422: `Failed to validate request`,
                500: `Some internal server error`,
            },
        });
    }
    /**
     * Update team perms for mod
     * @param modId A mod identifier or slug
     * @param requestBody The team data to update
     * @returns notification Plain success message
     * @throws ApiError
     */
    public permitModTeam(
        modId: string,
        requestBody: mod_team_params,
    ): CancelablePromise<notification> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/mods/{mod_id}/teams',
            path: {
                'mod_id': modId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `User is not authorized`,
                404: `Mod or team not found`,
                412: `Team is not attached`,
                422: `Failed to validate request`,
                500: `Some internal server error`,
            },
        });
    }
    /**
     * Unlink a team from mod
     * @param modId A mod identifier or slug
     * @param requestBody The mod team data to unlink
     * @returns notification Plain success message
     * @throws ApiError
     */
    public deleteModFromTeam(
        modId: string,
        requestBody: mod_team_params,
    ): CancelablePromise<notification> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/mods/{mod_id}/teams',
            path: {
                'mod_id': modId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `User is not authorized`,
                404: `Mod or team not found`,
                412: `Team is not attached`,
                500: `Some internal server error`,
            },
        });
    }
    /**
     * Fetch all available versions for a mod
     * @param modId A mod identifier or slug
     * @param search Search query
     * @param sort Sorting column
     * @param order Sorting order
     * @param limit Paging limit
     * @param offset Paging offset
     * @returns versions A collection of versions
     * @returns notification Some error unrelated to the handler
     * @throws ApiError
     */
    public listVersions(
        modId: string,
        search?: string,
        sort: 'name' | 'public' = 'name',
        order: 'asc' | 'desc' = 'asc',
        limit: number = 100,
        offset?: number,
    ): CancelablePromise<versions | notification> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/mods/{mod_id}/versions',
            path: {
                'mod_id': modId,
            },
            query: {
                'search': search,
                'sort': sort,
                'order': order,
                'limit': limit,
                'offset': offset,
            },
            errors: {
                403: `User is not authorized`,
                404: `Mod not found`,
                500: `Some internal server error`,
            },
        });
    }
    /**
     * Create a new version for a mod
     * @param modId A mod identifier or slug
     * @param requestBody The version data to create
     * @returns version The created version data
     * @returns notification Some error unrelated to the handler
     * @throws ApiError
     */
    public createVersion(
        modId: string,
        requestBody: version,
    ): CancelablePromise<version | notification> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/mods/{mod_id}/versions',
            path: {
                'mod_id': modId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `User is not authorized`,
                404: `Mod not found`,
                422: `Failed to validate request`,
                500: `Some internal server error`,
            },
        });
    }
    /**
     * Fetch a specific version for a mod
     * @param modId A mod identifier or slug
     * @param versionId A version identifier or slug
     * @returns version The fetched version details
     * @returns notification Some error unrelated to the handler
     * @throws ApiError
     */
    public showVersion(
        modId: string,
        versionId: string,
    ): CancelablePromise<version | notification> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/mods/{mod_id}/versions/{version_id}',
            path: {
                'mod_id': modId,
                'version_id': versionId,
            },
            errors: {
                403: `User is not authorized`,
                404: `Version or mod not found`,
                500: `Some internal server error`,
            },
        });
    }
    /**
     * Update a specific version for a mod
     * @param modId A mod identifier or slug
     * @param versionId A version identifier or slug
     * @param requestBody The version data to update
     * @returns version The updated version details
     * @returns notification Some error unrelated to the handler
     * @throws ApiError
     */
    public updateVersion(
        modId: string,
        versionId: string,
        requestBody: version,
    ): CancelablePromise<version | notification> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/mods/{mod_id}/versions/{version_id}',
            path: {
                'mod_id': modId,
                'version_id': versionId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `User is not authorized`,
                404: `Version or mod not found`,
                422: `Failed to validate request`,
                500: `Some internal server error`,
            },
        });
    }
    /**
     * Delete a specific version for a mod
     * @param modId A mod identifier or slug
     * @param versionId A version identifier or slug
     * @returns notification Plain success message
     * @throws ApiError
     */
    public deleteVersion(
        modId: string,
        versionId: string,
    ): CancelablePromise<notification> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/mods/{mod_id}/versions/{version_id}',
            path: {
                'mod_id': modId,
                'version_id': versionId,
            },
            errors: {
                400: `Failed to delete the version`,
                403: `User is not authorized`,
                404: `Version or mod not found`,
                500: `Some internal server error`,
            },
        });
    }
    /**
     * Fetch all builds attached to version
     * @param modId A mod identifier or slug
     * @param versionId A version identifier or slug
     * @param search Search query
     * @param sort Sorting column
     * @param order Sorting order
     * @param limit Paging limit
     * @param offset Paging offset
     * @returns version_builds A collection of version builds
     * @returns notification Some error unrelated to the handler
     * @throws ApiError
     */
    public listVersionBuilds(
        modId: string,
        versionId: string,
        search?: string,
        sort: 'name' | 'public' = 'name',
        order: 'asc' | 'desc' = 'asc',
        limit: number = 100,
        offset?: number,
    ): CancelablePromise<version_builds | notification> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/mods/{mod_id}/versions/{version_id}/builds',
            path: {
                'mod_id': modId,
                'version_id': versionId,
            },
            query: {
                'search': search,
                'sort': sort,
                'order': order,
                'limit': limit,
                'offset': offset,
            },
            errors: {
                403: `User is not authorized`,
                404: `Version or mod not found`,
                500: `Some internal server error`,
            },
        });
    }
    /**
     * Attach a build to a version
     * @param modId A mod identifier or slug
     * @param versionId A version identifier or slug
     * @param requestBody The version build data to attach
     * @returns notification Plain success message
     * @throws ApiError
     */
    public attachVersionToBuild(
        modId: string,
        versionId: string,
        requestBody: version_build_params,
    ): CancelablePromise<notification> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/mods/{mod_id}/versions/{version_id}/builds',
            path: {
                'mod_id': modId,
                'version_id': versionId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `User is not authorized`,
                404: `Build, version or mod not found`,
                412: `Build is already attached`,
                422: `Failed to validate request`,
                500: `Some internal server error`,
            },
        });
    }
    /**
     * Unlink a build from a version
     * @param modId A mod identifier or slug
     * @param versionId A version identifier or slug
     * @param requestBody The version build data to unlink
     * @returns notification Plain success message
     * @throws ApiError
     */
    public deleteVersionFromBuild(
        modId: string,
        versionId: string,
        requestBody: version_build_params,
    ): CancelablePromise<notification> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/mods/{mod_id}/versions/{version_id}/builds',
            path: {
                'mod_id': modId,
                'version_id': versionId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `User is not authorized`,
                404: `Build, version or mod not found`,
                412: `Build is not attached`,
                500: `Some internal server error`,
            },
        });
    }
}
