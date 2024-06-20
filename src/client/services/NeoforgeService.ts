/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { neoforge_build_params } from "../models/neoforge_build_params";
import type { neoforge_builds } from "../models/neoforge_builds";
import type { neoforges } from "../models/neoforges";
import type { notification } from "../models/notification";
import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";
export class NeoforgeService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * Fetch the available Neoforge versions
   * @param search Search query
   * @returns neoforges A collection of neoforge versions
   * @returns notification Some error unrelated to the handler
   * @throws ApiError
   */
  public listNeoforges(
    search?: string,
  ): CancelablePromise<neoforges | notification> {
    return this.httpRequest.request({
      method: "GET",
      url: "/neoforge",
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
   * Update the available Neoforge versions
   * @returns notification Plain success message
   * @throws ApiError
   */
  public updateNeoforge(): CancelablePromise<notification> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/neoforge",
      errors: {
        403: `User is not authorized`,
        500: `Some internal server error`,
        503: `If remote source is not available`,
      },
    });
  }
  /**
   * Fetch the builds attached to a Neoforge version
   * @param neoforgeId A neoforge identifier or slug
   * @param search Search query
   * @param sort Sorting column
   * @param order Sorting order
   * @param limit Paging limit
   * @param offset Paging offset
   * @returns neoforge_builds A collection of attached builds
   * @returns notification Some error unrelated to the handler
   * @throws ApiError
   */
  public listNeoforgeBuilds(
    neoforgeId: string,
    search?: string,
    sort:
      | "build_name"
      | "build_public"
      | "pack_slug"
      | "pack_name" = "build_name",
    order: "asc" | "desc" = "asc",
    limit: number = 100,
    offset?: number,
  ): CancelablePromise<neoforge_builds | notification> {
    return this.httpRequest.request({
      method: "GET",
      url: "/neoforge/{neoforge_id}/builds",
      path: {
        neoforge_id: neoforgeId,
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
        404: `Neoforge or build not found`,
        500: `Some internal server error`,
      },
    });
  }
  /**
   * Attach a build to a Neoforge version
   * @param neoforgeId A neoforge identifier or slug
   * @param requestBody The build data to attach
   * @returns notification Plain success message
   * @throws ApiError
   */
  public attachNeoforgeToBuild(
    neoforgeId: string,
    requestBody: neoforge_build_params,
  ): CancelablePromise<notification> {
    return this.httpRequest.request({
      method: "POST",
      url: "/neoforge/{neoforge_id}/builds",
      path: {
        neoforge_id: neoforgeId,
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        403: `User is not authorized`,
        404: `Neoforge or build not found`,
        412: `Build is already attached`,
        422: `Failed to validate request`,
        500: `Some internal server error`,
      },
    });
  }
  /**
   * Unlink a build from a Neoforge version
   * @param neoforgeId A neoforge identifier or slug
   * @param requestBody The build data to unlink
   * @returns notification Plain success message
   * @throws ApiError
   */
  public deleteNeoforgeFromBuild(
    neoforgeId: string,
    requestBody: neoforge_build_params,
  ): CancelablePromise<notification> {
    return this.httpRequest.request({
      method: "DELETE",
      url: "/neoforge/{neoforge_id}/builds",
      path: {
        neoforge_id: neoforgeId,
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        403: `User is not authorized`,
        404: `Neoforge or build not found`,
        412: `Build is not attached`,
        500: `Some internal server error`,
      },
    });
  }
}
