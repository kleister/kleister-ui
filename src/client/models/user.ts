/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { user_auth } from "./user_auth";
/**
 * Model to represent user
 */
export type user = {
  readonly id?: string;
  username?: string;
  password?: string;
  email?: string;
  fullname?: string;
  profile?: string;
  admin?: boolean;
  active?: boolean;
  readonly created_at?: string;
  readonly updated_at?: string;
  readonly auths?: Array<user_auth>;
};
