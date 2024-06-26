/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { notification } from "../models/notification";
import type { user } from "../models/user";
import type { user_mod_params } from "../models/user_mod_params";
import type { user_mods } from "../models/user_mods";
import type { user_pack_params } from "../models/user_pack_params";
import type { user_packs } from "../models/user_packs";
import type { user_team_params } from "../models/user_team_params";
import type { user_teams } from "../models/user_teams";
import type { users } from "../models/users";
import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";
export class UserService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * Fetch all available users
   * @param search Search query
   * @param sort Sorting column
   * @param order Sorting order
   * @param limit Paging limit
   * @param offset Paging offset
   * @returns users A collection of users
   * @returns notification Some error unrelated to the handler
   * @throws ApiError
   */
  public listUsers(
    search?: string,
    sort: "username" | "email" | "fullname" | "admin" | "active" = "username",
    order: "asc" | "desc" = "asc",
    limit: number = 100,
    offset?: number,
  ): CancelablePromise<users | notification> {
    return this.httpRequest.request({
      method: "GET",
      url: "/users",
      query: {
        search: search,
        sort: sort,
        order: order,
        limit: limit,
        offset: offset,
      },
      errors: {
        403: `User is not authorized`,
        500: `Some internal server error`,
      },
    });
  }
  /**
   * Create a new user
   * @param requestBody The user data to create
   * @returns user The created user data
   * @returns notification Some error unrelated to the handler
   * @throws ApiError
   */
  public createUser(requestBody: user): CancelablePromise<user | notification> {
    return this.httpRequest.request({
      method: "POST",
      url: "/users",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        403: `User is not authorized`,
        422: `Failed to validate request`,
        500: `Some internal server error`,
      },
    });
  }
  /**
   * Fetch a specific user
   * @param userId A user identifier or slug
   * @returns user The fetched user details
   * @returns notification Some error unrelated to the handler
   * @throws ApiError
   */
  public showUser(userId: string): CancelablePromise<user | notification> {
    return this.httpRequest.request({
      method: "GET",
      url: "/users/{user_id}",
      path: {
        user_id: userId,
      },
      errors: {
        403: `User is not authorized`,
        404: `User not found`,
        500: `Some internal server error`,
      },
    });
  }
  /**
   * Update a specific user
   * @param userId A user identifier or slug
   * @param requestBody The user data to update
   * @returns user The updated user details
   * @returns notification Some error unrelated to the handler
   * @throws ApiError
   */
  public updateUser(
    userId: string,
    requestBody: user,
  ): CancelablePromise<user | notification> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/users/{user_id}",
      path: {
        user_id: userId,
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        403: `User is not authorized`,
        404: `User not found`,
        422: `Failed to validate request`,
        500: `Some internal server error`,
      },
    });
  }
  /**
   * Delete a specific user
   * @param userId A user identifier or slug
   * @returns notification Plain success message
   * @throws ApiError
   */
  public deleteUser(userId: string): CancelablePromise<notification> {
    return this.httpRequest.request({
      method: "DELETE",
      url: "/users/{user_id}",
      path: {
        user_id: userId,
      },
      errors: {
        400: `Failed to delete the user`,
        403: `User is not authorized`,
        404: `User not found`,
        500: `Some internal server error`,
      },
    });
  }
  /**
   * Fetch all teams attached to user
   * @param userId A user identifier or slug
   * @param search Search query
   * @param sort Sorting column
   * @param order Sorting order
   * @param limit Paging limit
   * @param offset Paging offset
   * @returns user_teams A collection of user teams
   * @returns notification Some error unrelated to the handler
   * @throws ApiError
   */
  public listUserTeams(
    userId: string,
    search?: string,
    sort: "slug" | "name" = "name",
    order: "asc" | "desc" = "asc",
    limit?: number,
    offset?: number,
  ): CancelablePromise<user_teams | notification> {
    return this.httpRequest.request({
      method: "GET",
      url: "/users/{user_id}/teams",
      path: {
        user_id: userId,
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
        404: `User not found`,
        500: `Some internal server error`,
      },
    });
  }
  /**
   * Attach a team to user
   * @param userId A user identifier or slug
   * @param requestBody The user team data to attach
   * @returns notification Plain success message
   * @throws ApiError
   */
  public attachUserToTeam(
    userId: string,
    requestBody: user_team_params,
  ): CancelablePromise<notification> {
    return this.httpRequest.request({
      method: "POST",
      url: "/users/{user_id}/teams",
      path: {
        user_id: userId,
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        403: `User is not authorized`,
        404: `User or team not found`,
        412: `Team is already attached`,
        422: `Failed to validate request`,
        500: `Some internal server error`,
      },
    });
  }
  /**
   * Update team perms for user
   * @param userId A user identifier or slug
   * @param requestBody The user team data to update
   * @returns notification Plain success message
   * @throws ApiError
   */
  public permitUserTeam(
    userId: string,
    requestBody: user_team_params,
  ): CancelablePromise<notification> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/users/{user_id}/teams",
      path: {
        user_id: userId,
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        403: `User is not authorized`,
        404: `User or team not found`,
        412: `Team is not attached`,
        422: `Failed to validate request`,
        500: `Some internal server error`,
      },
    });
  }
  /**
   * Unlink a team from user
   * @param userId A user identifier or slug
   * @param requestBody The user team data to unlink
   * @returns notification Plain success message
   * @throws ApiError
   */
  public deleteUserFromTeam(
    userId: string,
    requestBody: user_team_params,
  ): CancelablePromise<notification> {
    return this.httpRequest.request({
      method: "DELETE",
      url: "/users/{user_id}/teams",
      path: {
        user_id: userId,
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        403: `User is not authorized`,
        404: `User or team not found`,
        412: `Team is not attached`,
        500: `Some internal server error`,
      },
    });
  }
  /**
   * Fetch all mods attached to user
   * @param userId A user identifier or slug
   * @param search Search query
   * @param sort Sorting column
   * @param order Sorting order
   * @param limit Paging limit
   * @param offset Paging offset
   * @returns user_mods A collection of user mods
   * @returns notification Some error unrelated to the handler
   * @throws ApiError
   */
  public listUserMods(
    userId: string,
    search?: string,
    sort: "slug" | "name" | "public" = "name",
    order: "asc" | "desc" = "asc",
    limit?: number,
    offset?: number,
  ): CancelablePromise<user_mods | notification> {
    return this.httpRequest.request({
      method: "GET",
      url: "/users/{user_id}/mods",
      path: {
        user_id: userId,
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
        404: `User not found`,
        500: `Some internal server error`,
      },
    });
  }
  /**
   * Attach a mod to user
   * @param userId A user identifier or slug
   * @param requestBody The user mod data to attach
   * @returns notification Plain success message
   * @throws ApiError
   */
  public attachUserToMod(
    userId: string,
    requestBody: user_mod_params,
  ): CancelablePromise<notification> {
    return this.httpRequest.request({
      method: "POST",
      url: "/users/{user_id}/mods",
      path: {
        user_id: userId,
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        403: `User is not authorized`,
        404: `User or mod not found`,
        412: `Mod is already attached`,
        422: `Failed to validate request`,
        500: `Some internal server error`,
      },
    });
  }
  /**
   * Update mod perms for user
   * @param userId A user identifier or slug
   * @param requestBody The user mod data to update
   * @returns notification Plain success message
   * @throws ApiError
   */
  public permitUserMod(
    userId: string,
    requestBody: user_mod_params,
  ): CancelablePromise<notification> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/users/{user_id}/mods",
      path: {
        user_id: userId,
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        403: `User is not authorized`,
        404: `User or mod not found`,
        412: `Mod is not attached`,
        422: `Failed to validate request`,
        500: `Some internal server error`,
      },
    });
  }
  /**
   * Unlink a mod from user
   * @param userId A user identifier or slug
   * @param requestBody The user mod data to unlink
   * @returns notification Plain success message
   * @throws ApiError
   */
  public deleteUserFromMod(
    userId: string,
    requestBody: user_mod_params,
  ): CancelablePromise<notification> {
    return this.httpRequest.request({
      method: "DELETE",
      url: "/users/{user_id}/mods",
      path: {
        user_id: userId,
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        403: `User is not authorized`,
        404: `User or mod not found`,
        412: `Mod is not attached`,
        500: `Some internal server error`,
      },
    });
  }
  /**
   * Fetch all packs attached to user
   * @param userId A user identifier or slug
   * @param search Search query
   * @param sort Sorting column
   * @param order Sorting order
   * @param limit Paging limit
   * @param offset Paging offset
   * @returns user_packs A collection of user packs
   * @returns notification Some error unrelated to the handler
   * @throws ApiError
   */
  public listUserPacks(
    userId: string,
    search?: string,
    sort: "slug" | "name" | "public" = "name",
    order: "asc" | "desc" = "asc",
    limit?: number,
    offset?: number,
  ): CancelablePromise<user_packs | notification> {
    return this.httpRequest.request({
      method: "GET",
      url: "/users/{user_id}/packs",
      path: {
        user_id: userId,
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
        404: `User not found`,
        500: `Some internal server error`,
      },
    });
  }
  /**
   * Attach a pack to user
   * @param userId A user identifier or slug
   * @param requestBody The user pack data to attach
   * @returns notification Plain success message
   * @throws ApiError
   */
  public attachUserToPack(
    userId: string,
    requestBody: user_pack_params,
  ): CancelablePromise<notification> {
    return this.httpRequest.request({
      method: "POST",
      url: "/users/{user_id}/packs",
      path: {
        user_id: userId,
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        403: `User is not authorized`,
        404: `User or pack not found`,
        412: `Pack is already attached`,
        422: `Failed to validate request`,
        500: `Some internal server error`,
      },
    });
  }
  /**
   * Update pack perms for user
   * @param userId A user identifier or slug
   * @param requestBody The user pack data to update
   * @returns notification Plain success message
   * @throws ApiError
   */
  public permitUserPack(
    userId: string,
    requestBody: user_pack_params,
  ): CancelablePromise<notification> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/users/{user_id}/packs",
      path: {
        user_id: userId,
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        403: `User is not authorized`,
        404: `User or pack not found`,
        412: `Pack is not attached`,
        422: `Failed to validate request`,
        500: `Some internal server error`,
      },
    });
  }
  /**
   * Unlink a pack from user
   * @param userId A user identifier or slug
   * @param requestBody The user pack data to unlink
   * @returns notification Plain success message
   * @throws ApiError
   */
  public deleteUserFromPack(
    userId: string,
    requestBody: user_pack_params,
  ): CancelablePromise<notification> {
    return this.httpRequest.request({
      method: "DELETE",
      url: "/users/{user_id}/packs",
      path: {
        user_id: userId,
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        403: `User is not authorized`,
        404: `User or pack not found`,
        412: `Pack is not attached`,
        500: `Some internal server error`,
      },
    });
  }
}
