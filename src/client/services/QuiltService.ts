/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { notification } from "../models/notification";
import type { quilt_build_params } from "../models/quilt_build_params";
import type { quilt_builds } from "../models/quilt_builds";
import type { quilts } from "../models/quilts";
import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";
export class QuiltService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * Fetch the available Quilt versions
   * @param search Search query
   * @returns quilts A collection of quilt versions
   * @returns notification Some error unrelated to the handler
   * @throws ApiError
   */
  public listQuilts(search?: string): CancelablePromise<quilts | notification> {
    return this.httpRequest.request({
      method: "GET",
      url: "/quilt",
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
   * Update the available Quilt versions
   * @returns notification Plain success message
   * @throws ApiError
   */
  public updateQuilt(): CancelablePromise<notification> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/quilt",
      errors: {
        403: `User is not authorized`,
        500: `Some internal server error`,
        503: `If remote source is not available`,
      },
    });
  }
  /**
   * Fetch the builds attached to a Quilt version
   * @param quiltId A quilt identifier or slug
   * @param search Search query
   * @param sort Sorting column
   * @param order Sorting order
   * @param limit Paging limit
   * @param offset Paging offset
   * @returns quilt_builds A collection of attached builds
   * @returns notification Some error unrelated to the handler
   * @throws ApiError
   */
  public listQuiltBuilds(
    quiltId: string,
    search?: string,
    sort:
      | "build_name"
      | "build_public"
      | "pack_slug"
      | "pack_name" = "build_name",
    order: "asc" | "desc" = "asc",
    limit: number = 100,
    offset?: number,
  ): CancelablePromise<quilt_builds | notification> {
    return this.httpRequest.request({
      method: "GET",
      url: "/quilt/{quilt_id}/builds",
      path: {
        quilt_id: quiltId,
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
        404: `Quilt or build not found`,
        500: `Some internal server error`,
      },
    });
  }
  /**
   * Attach a build to a Quilt version
   * @param quiltId A quilt identifier or slug
   * @param requestBody The build data to attach
   * @returns notification Plain success message
   * @throws ApiError
   */
  public attachQuiltToBuild(
    quiltId: string,
    requestBody: quilt_build_params,
  ): CancelablePromise<notification> {
    return this.httpRequest.request({
      method: "POST",
      url: "/quilt/{quilt_id}/builds",
      path: {
        quilt_id: quiltId,
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        403: `User is not authorized`,
        404: `Quilt or build not found`,
        412: `Build is already attached`,
        422: `Failed to validate request`,
        500: `Some internal server error`,
      },
    });
  }
  /**
   * Unlink a build from a Quilt version
   * @param quiltId A quilt identifier or slug
   * @param requestBody The build data to unlink
   * @returns notification Plain success message
   * @throws ApiError
   */
  public deleteQuiltFromBuild(
    quiltId: string,
    requestBody: quilt_build_params,
  ): CancelablePromise<notification> {
    return this.httpRequest.request({
      method: "DELETE",
      url: "/quilt/{quilt_id}/builds",
      path: {
        quilt_id: quiltId,
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        403: `User is not authorized`,
        404: `Quilt or build not found`,
        412: `Build is not attached`,
        500: `Some internal server error`,
      },
    });
  }
}
