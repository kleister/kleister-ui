/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { build } from '../models/build';
import type { build_version_params } from '../models/build_version_params';
import type { build_versions } from '../models/build_versions';
import type { builds } from '../models/builds';
import type { notification } from '../models/notification';
import type { pack } from '../models/pack';
import type { pack_team_params } from '../models/pack_team_params';
import type { pack_teams } from '../models/pack_teams';
import type { pack_user_params } from '../models/pack_user_params';
import type { pack_users } from '../models/pack_users';
import type { packs } from '../models/packs';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PackService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Fetch all available packs
     * @param search Search query
     * @param sort Sorting column
     * @param order Sorting order
     * @param limit Paging limit
     * @param offset Paging offset
     * @returns packs A collection of packs
     * @returns notification Some error unrelated to the handler
     * @throws ApiError
     */
    public listPacks(
        search?: string,
        sort: 'slug' | 'name' | 'public' = 'name',
        order: 'asc' | 'desc' = 'asc',
        limit: number = 100,
        offset?: number,
    ): CancelablePromise<packs | notification> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/packs',
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
     * Create a new pack
     * @param requestBody The pack data to create
     * @returns pack The created pack data
     * @returns notification Some error unrelated to the handler
     * @throws ApiError
     */
    public createPack(
        requestBody: pack,
    ): CancelablePromise<pack | notification> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/packs',
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
     * Fetch a specific pack
     * @param packId A pack identifier or slug
     * @returns pack The fetched pack details
     * @returns notification Some error unrelated to the handler
     * @throws ApiError
     */
    public showPack(
        packId: string,
    ): CancelablePromise<pack | notification> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/packs/{pack_id}',
            path: {
                'pack_id': packId,
            },
            errors: {
                403: `User is not authorized`,
                404: `Pack not found`,
                500: `Some internal server error`,
            },
        });
    }
    /**
     * Update a specific pack
     * @param packId A pack identifier or slug
     * @param requestBody The pack data to update
     * @returns pack The updated pack details
     * @returns notification Some error unrelated to the handler
     * @throws ApiError
     */
    public updatePack(
        packId: string,
        requestBody: pack,
    ): CancelablePromise<pack | notification> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/packs/{pack_id}',
            path: {
                'pack_id': packId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `User is not authorized`,
                404: `Pack not found`,
                422: `Failed to validate request`,
                500: `Some internal server error`,
            },
        });
    }
    /**
     * Delete a specific pack
     * @param packId A pack identifier or slug
     * @returns notification Plain success message
     * @throws ApiError
     */
    public deletePack(
        packId: string,
    ): CancelablePromise<notification> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/packs/{pack_id}',
            path: {
                'pack_id': packId,
            },
            errors: {
                400: `Failed to delete the pack`,
                403: `User is not authorized`,
                404: `Pack not found`,
                500: `Some internal server error`,
            },
        });
    }
    /**
     * Fetch all users attached to pack
     * @param packId A pack identifier or slug
     * @param search Search query
     * @param sort Sorting column
     * @param order Sorting order
     * @param limit Paging limit
     * @param offset Paging offset
     * @returns pack_users A collection of pack users
     * @returns notification Some error unrelated to the handler
     * @throws ApiError
     */
    public listPackUsers(
        packId: string,
        search?: string,
        sort: 'username' | 'email' | 'fullname' | 'admin' | 'active' = 'username',
        order: 'asc' | 'desc' = 'asc',
        limit: number = 100,
        offset?: number,
    ): CancelablePromise<pack_users | notification> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/packs/{pack_id}/users',
            path: {
                'pack_id': packId,
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
                404: `Pack not found`,
                500: `Some internal server error`,
            },
        });
    }
    /**
     * Attach a user to pack
     * @param packId A pack identifier or slug
     * @param requestBody The user data to attach
     * @returns notification Plain success message
     * @throws ApiError
     */
    public attachPackToUser(
        packId: string,
        requestBody: pack_user_params,
    ): CancelablePromise<notification> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/packs/{pack_id}/users',
            path: {
                'pack_id': packId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `User is not authorized`,
                404: `Pack or user not found`,
                412: `User is already attached`,
                422: `Failed to validate request`,
                500: `Some internal server error`,
            },
        });
    }
    /**
     * Update user perms for pack
     * @param packId A pack identifier or slug
     * @param requestBody The user data to update
     * @returns notification Plain success message
     * @throws ApiError
     */
    public permitPackUser(
        packId: string,
        requestBody: pack_user_params,
    ): CancelablePromise<notification> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/packs/{pack_id}/users',
            path: {
                'pack_id': packId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `User is not authorized`,
                404: `Pack or user not found`,
                412: `User is not attached`,
                422: `Failed to validate request`,
                500: `Some internal server error`,
            },
        });
    }
    /**
     * Unlink a user from pack
     * @param packId A pack identifier or slug
     * @param requestBody The pack user data to unlink
     * @returns notification Plain success message
     * @throws ApiError
     */
    public deletePackFromUser(
        packId: string,
        requestBody: pack_user_params,
    ): CancelablePromise<notification> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/packs/{pack_id}/users',
            path: {
                'pack_id': packId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `User is not authorized`,
                404: `Pack or user not found`,
                412: `User is not attached`,
                500: `Some internal server error`,
            },
        });
    }
    /**
     * Fetch all teams attached to pack
     * @param packId A pack identifier or slug
     * @param search Search query
     * @param sort Sorting column
     * @param order Sorting order
     * @param limit Paging limit
     * @param offset Paging offset
     * @returns pack_teams A collection of pack teams
     * @returns notification Some error unrelated to the handler
     * @throws ApiError
     */
    public listPackTeams(
        packId: string,
        search?: string,
        sort: 'slug' | 'name' = 'name',
        order: 'asc' | 'desc' = 'asc',
        limit: number = 100,
        offset?: number,
    ): CancelablePromise<pack_teams | notification> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/packs/{pack_id}/teams',
            path: {
                'pack_id': packId,
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
                404: `Pack not found`,
                500: `Some internal server error`,
            },
        });
    }
    /**
     * Attach a team to pack
     * @param packId A pack identifier or slug
     * @param requestBody The team data to attach
     * @returns notification Plain success message
     * @throws ApiError
     */
    public attachPackToTeam(
        packId: string,
        requestBody: pack_team_params,
    ): CancelablePromise<notification> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/packs/{pack_id}/teams',
            path: {
                'pack_id': packId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `User is not authorized`,
                404: `Pack or team not found`,
                412: `Team is already attached`,
                422: `Failed to validate request`,
                500: `Some internal server error`,
            },
        });
    }
    /**
     * Update team perms for pack
     * @param packId A pack identifier or slug
     * @param requestBody The team data to update
     * @returns notification Plain success message
     * @throws ApiError
     */
    public permitPackTeam(
        packId: string,
        requestBody: pack_team_params,
    ): CancelablePromise<notification> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/packs/{pack_id}/teams',
            path: {
                'pack_id': packId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `User is not authorized`,
                404: `Pack or team not found`,
                412: `Team is not attached`,
                422: `Failed to validate request`,
                500: `Some internal server error`,
            },
        });
    }
    /**
     * Unlink a team from pack
     * @param packId A pack identifier or slug
     * @param requestBody The pack team data to unlink
     * @returns notification Plain success message
     * @throws ApiError
     */
    public deletePackFromTeam(
        packId: string,
        requestBody: pack_team_params,
    ): CancelablePromise<notification> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/packs/{pack_id}/teams',
            path: {
                'pack_id': packId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `User is not authorized`,
                404: `Pack or team not found`,
                412: `Team is not attached`,
                500: `Some internal server error`,
            },
        });
    }
    /**
     * Fetch all available builds for a pack
     * @param packId A pack identifier or slug
     * @param search Search query
     * @param sort Sorting column
     * @param order Sorting order
     * @param limit Paging limit
     * @param offset Paging offset
     * @returns builds A collection of builds
     * @returns notification Some error unrelated to the handler
     * @throws ApiError
     */
    public listBuilds(
        packId: string,
        search?: string,
        sort: 'name' | 'public' = 'name',
        order: 'asc' | 'desc' = 'asc',
        limit?: number,
        offset?: number,
    ): CancelablePromise<builds | notification> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/packs/{pack_id}/builds',
            path: {
                'pack_id': packId,
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
                404: `Pack not found`,
                500: `Some internal server error`,
            },
        });
    }
    /**
     * Create a new build for a pack
     * @param packId A pack identifier or slug
     * @param requestBody The build data to create
     * @returns build The created build build
     * @returns notification Some error unrelated to the handler
     * @throws ApiError
     */
    public createBuild(
        packId: string,
        requestBody: build,
    ): CancelablePromise<build | notification> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/packs/{pack_id}/builds',
            path: {
                'pack_id': packId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `User is not authorized`,
                404: `Pack not found`,
                422: `Failed to validate request`,
                500: `Some internal server error`,
            },
        });
    }
    /**
     * Fetch a specific build for a pack
     * @param packId A pack identifier or slug
     * @param buildId A build identifier or slug
     * @returns build The fetched build details
     * @returns notification Some error unrelated to the handler
     * @throws ApiError
     */
    public showBuild(
        packId: string,
        buildId: string,
    ): CancelablePromise<build | notification> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/packs/{pack_id}/builds/{build_id}',
            path: {
                'pack_id': packId,
                'build_id': buildId,
            },
            errors: {
                403: `User is not authorized`,
                404: `Build or pack not found`,
                500: `Some internal server error`,
            },
        });
    }
    /**
     * Update a specific build for a pack
     * @param packId A pack identifier or slug
     * @param buildId A build identifier or slug
     * @param requestBody The build data to update
     * @returns build The updated build details
     * @returns notification Some error unrelated to the handler
     * @throws ApiError
     */
    public updateBuild(
        packId: string,
        buildId: string,
        requestBody: build,
    ): CancelablePromise<build | notification> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/packs/{pack_id}/builds/{build_id}',
            path: {
                'pack_id': packId,
                'build_id': buildId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `User is not authorized`,
                404: `Build or pack not found`,
                422: `Failed to validate request`,
                500: `Some internal server error`,
            },
        });
    }
    /**
     * Delete a specific build for a pack
     * @param packId A pack identifier or slug
     * @param buildId A build identifier or slug
     * @returns notification Plain success message
     * @throws ApiError
     */
    public deleteBuild(
        packId: string,
        buildId: string,
    ): CancelablePromise<notification> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/packs/{pack_id}/builds/{build_id}',
            path: {
                'pack_id': packId,
                'build_id': buildId,
            },
            errors: {
                400: `Failed to delete the build`,
                403: `User is not authorized`,
                404: `Build or pack not found`,
                500: `Some internal server error`,
            },
        });
    }
    /**
     * Fetch all versions attached to build
     * @param packId A pack identifier or slug
     * @param buildId A build identifier or slug
     * @param search Search query
     * @param sort Sorting column
     * @param order Sorting order
     * @param limit Paging limit
     * @param offset Paging offset
     * @returns build_versions A collection of build versions
     * @returns notification Some error unrelated to the handler
     * @throws ApiError
     */
    public listBuildVersions(
        packId: string,
        buildId: string,
        search?: string,
        sort: 'name' | 'public' = 'name',
        order: 'asc' | 'desc' = 'asc',
        limit?: number,
        offset?: number,
    ): CancelablePromise<build_versions | notification> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/packs/{pack_id}/builds/{build_id}/versions',
            path: {
                'pack_id': packId,
                'build_id': buildId,
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
                404: `Build or pack not found`,
                500: `Some internal server error`,
            },
        });
    }
    /**
     * Attach a version to a build
     * @param packId A pack identifier or slug
     * @param buildId A build identifier or slug
     * @param requestBody The build version data to attach
     * @returns notification Plain success message
     * @throws ApiError
     */
    public attachBuildToVersion(
        packId: string,
        buildId: string,
        requestBody: build_version_params,
    ): CancelablePromise<notification> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/packs/{pack_id}/builds/{build_id}/versions',
            path: {
                'pack_id': packId,
                'build_id': buildId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `User is not authorized`,
                404: `Version, build or pack not found`,
                412: `Version is already attached`,
                422: `Failed to validate request`,
                500: `Some internal server error`,
            },
        });
    }
    /**
     * Unlink a version from a build
     * @param packId A pack identifier or slug
     * @param buildId A build identifier or slug
     * @param requestBody The build version data to unlink
     * @returns notification Plain success message
     * @throws ApiError
     */
    public deleteBuildFromVersion(
        packId: string,
        buildId: string,
        requestBody: build_version_params,
    ): CancelablePromise<notification> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/packs/{pack_id}/builds/{build_id}/versions',
            path: {
                'pack_id': packId,
                'build_id': buildId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `User is not authorized`,
                404: `Version, build or pack not found`,
                412: `Version is not attached`,
                500: `Some internal server error`,
            },
        });
    }
}
