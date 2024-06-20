/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { fabric_build_params } from "../models/fabric_build_params";
import type { fabric_builds } from "../models/fabric_builds";
import type { fabrics } from "../models/fabrics";
import type { notification } from "../models/notification";
import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";
export class FabricService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * Fetch the available Fabric versions
   * @param search Search query
   * @returns fabrics A collection of fabric versions
   * @returns notification Some error unrelated to the handler
   * @throws ApiError
   */
  public listFabrics(
    search?: string,
  ): CancelablePromise<fabrics | notification> {
    return this.httpRequest.request({
      method: "GET",
      url: "/fabric",
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
   * Update the available Fabric versions
   * @returns notification Plain success message
   * @throws ApiError
   */
  public updateFabric(): CancelablePromise<notification> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/fabric",
      errors: {
        403: `User is not authorized`,
        500: `Some internal server error`,
        503: `If remote source is not available`,
      },
    });
  }
  /**
   * Fetch the builds attached to a Fabric version
   * @param fabricId A fabric identifier or slug
   * @param search Search query
   * @param sort Sorting column
   * @param order Sorting order
   * @param limit Paging limit
   * @param offset Paging offset
   * @returns fabric_builds A collection of attached builds
   * @returns notification Some error unrelated to the handler
   * @throws ApiError
   */
  public listFabricBuilds(
    fabricId: string,
    search?: string,
    sort:
      | "build_name"
      | "build_public"
      | "pack_slug"
      | "pack_name" = "build_name",
    order: "asc" | "desc" = "asc",
    limit: number = 100,
    offset?: number,
  ): CancelablePromise<fabric_builds | notification> {
    return this.httpRequest.request({
      method: "GET",
      url: "/fabric/{fabric_id}/builds",
      path: {
        fabric_id: fabricId,
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
        404: `Fabric or build not found`,
        500: `Some internal server error`,
      },
    });
  }
  /**
   * Attach a build to a Fabric version
   * @param fabricId A fabric identifier or slug
   * @param requestBody The build data to attach
   * @returns notification Plain success message
   * @throws ApiError
   */
  public attachFabricToBuild(
    fabricId: string,
    requestBody: fabric_build_params,
  ): CancelablePromise<notification> {
    return this.httpRequest.request({
      method: "POST",
      url: "/fabric/{fabric_id}/builds",
      path: {
        fabric_id: fabricId,
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        403: `User is not authorized`,
        404: `Fabric or build not found`,
        412: `Build is already attached`,
        422: `Failed to validate request`,
        500: `Some internal server error`,
      },
    });
  }
  /**
   * Unlink a build from a Fabric version
   * @param fabricId A fabric identifier or slug
   * @param requestBody The build data to unlink
   * @returns notification Plain success message
   * @throws ApiError
   */
  public deleteFabricFromBuild(
    fabricId: string,
    requestBody: fabric_build_params,
  ): CancelablePromise<notification> {
    return this.httpRequest.request({
      method: "DELETE",
      url: "/fabric/{fabric_id}/builds",
      path: {
        fabric_id: fabricId,
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        403: `User is not authorized`,
        404: `Fabric or build not found`,
        412: `Build is not attached`,
        500: `Some internal server error`,
      },
    });
  }
}
