/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { forge_build_params } from "../models/forge_build_params";
import type { forge_builds } from "../models/forge_builds";
import type { forges } from "../models/forges";
import type { notification } from "../models/notification";
import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";
export class ForgeService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * Fetch the available Forge versions
   * @param search Search query
   * @returns forges A collection of forge versions
   * @returns notification Some error unrelated to the handler
   * @throws ApiError
   */
  public listForges(search?: string): CancelablePromise<forges | notification> {
    return this.httpRequest.request({
      method: "GET",
      url: "/forge",
      query: {
        search: search,
      },
      errors: {
        403: `User is not authorized`,
        500: `Some internal server error`,
      },
    });
  }
  /**
   * Update the available Forge versions
   * @returns notification Plain success message
   * @throws ApiError
   */
  public updateForge(): CancelablePromise<notification> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/forge",
      errors: {
        403: `User is not authorized`,
        500: `Some internal server error`,
        503: `If remote source is not available`,
      },
    });
  }
  /**
   * Fetch the builds attached to a Forge version
   * @param forgeId A forge identifier or slug
   * @param search Search query
   * @param sort Sorting column
   * @param order Sorting order
   * @param limit Paging limit
   * @param offset Paging offset
   * @returns forge_builds A collection of attached builds
   * @returns notification Some error unrelated to the handler
   * @throws ApiError
   */
  public listForgeBuilds(
    forgeId: string,
    search?: string,
    sort:
      | "build_name"
      | "build_public"
      | "pack_slug"
      | "pack_name" = "build_name",
    order: "asc" | "desc" = "asc",
    limit: number = 100,
    offset?: number,
  ): CancelablePromise<forge_builds | notification> {
    return this.httpRequest.request({
      method: "GET",
      url: "/forge/{forge_id}/builds",
      path: {
        forge_id: forgeId,
      },
      query: {
        search: search,
        sort: sort,
        order: order,
        limit: limit,
        offset: offset,
      },
      errors: {
        403: `User is not authorized`,
        404: `Forge or build not found`,
        500: `Some internal server error`,
      },
    });
  }
  /**
   * Attach a build to a Forge version
   * @param forgeId A forge identifier or slug
   * @param requestBody The build data to attach
   * @returns notification Plain success message
   * @throws ApiError
   */
  public attachForgeToBuild(
    forgeId: string,
    requestBody: forge_build_params,
  ): CancelablePromise<notification> {
    return this.httpRequest.request({
      method: "POST",
      url: "/forge/{forge_id}/builds",
      path: {
        forge_id: forgeId,
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        403: `User is not authorized`,
        404: `Forge or build not found`,
        412: `Build is already attached`,
        422: `Failed to validate request`,
        500: `Some internal server error`,
      },
    });
  }
  /**
   * Unlink a build from a Forge version
   * @param forgeId A forge identifier or slug
   * @param requestBody The build data to unlink
   * @returns notification Plain success message
   * @throws ApiError
   */
  public deleteForgeFromBuild(
    forgeId: string,
    requestBody: forge_build_params,
  ): CancelablePromise<notification> {
    return this.httpRequest.request({
      method: "DELETE",
      url: "/forge/{forge_id}/builds",
      path: {
        forge_id: forgeId,
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        403: `User is not authorized`,
        404: `Forge or build not found`,
        412: `Build is not attached`,
        500: `Some internal server error`,
      },
    });
  }
}
