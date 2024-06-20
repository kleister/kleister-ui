/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { minecraft_build_params } from '../models/minecraft_build_params';
import type { minecraft_builds } from '../models/minecraft_builds';
import type { minecrafts } from '../models/minecrafts';
import type { notification } from '../models/notification';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class MinecraftService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Fetch the available Minecraft versions
     * @param search Search query
     * @returns minecrafts A collection of minecraft versions
     * @returns notification Some error unrelated to the handler
     * @throws ApiError
     */
    public listMinecrafts(
        search?: string,
    ): CancelablePromise<minecrafts | notification> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/minecraft',
            query: {
                'search': search,
            },
            errors: {
                403: `User is not authorized`,
                500: `Some internal server error`,
            },
        });
    }
    /**
     * Update the available Minecraft versions
     * @returns notification Plain success message
     * @throws ApiError
     */
    public updateMinecraft(): CancelablePromise<notification> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/minecraft',
            errors: {
                403: `User is not authorized`,
                500: `Some internal server error`,
                503: `If remote source is not available`,
            },
        });
    }
    /**
     * Fetch the builds attached to a Minecraft version
     * @param minecraftId A minecraft identifier or slug
     * @param search Search query
     * @param sort Sorting column
     * @param order Sorting order
     * @param limit Paging limit
     * @param offset Paging offset
     * @returns minecraft_builds A collection of attached builds
     * @returns notification Some error unrelated to the handler
     * @throws ApiError
     */
    public listMinecraftBuilds(
        minecraftId: string,
        search?: string,
        sort: 'build_name' | 'build_public' | 'pack_slug' | 'pack_name' = 'build_name',
        order: 'asc' | 'desc' = 'asc',
        limit: number = 100,
        offset?: number,
    ): CancelablePromise<minecraft_builds | notification> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/minecraft/{minecraft_id}/builds',
            path: {
                'minecraft_id': minecraftId,
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
                404: `Minecraft or build not found`,
                500: `Some internal server error`,
            },
        });
    }
    /**
     * Attach a build to a Minecraft version
     * @param minecraftId A minecraft identifier or slug
     * @param requestBody The build data to attach
     * @returns notification Plain success message
     * @throws ApiError
     */
    public attachMinecraftToBuild(
        minecraftId: string,
        requestBody: minecraft_build_params,
    ): CancelablePromise<notification> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/minecraft/{minecraft_id}/builds',
            path: {
                'minecraft_id': minecraftId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `User is not authorized`,
                404: `Minecraft or build not found`,
                412: `Build is already attached`,
                422: `Failed to validate request`,
                500: `Some internal server error`,
            },
        });
    }
    /**
     * Unlink a build from a Minecraft version
     * @param minecraftId A minecraft identifier or slug
     * @param requestBody The build data to unlink
     * @returns notification Plain success message
     * @throws ApiError
     */
    public deleteMinecraftFromBuild(
        minecraftId: string,
        requestBody: minecraft_build_params,
    ): CancelablePromise<notification> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/minecraft/{minecraft_id}/builds',
            path: {
                'minecraft_id': minecraftId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `User is not authorized`,
                404: `Minecraft or build not found`,
                412: `Build is not attached`,
                500: `Some internal server error`,
            },
        });
    }
}
