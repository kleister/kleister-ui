/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { mod } from "./mod";
import type { user } from "./user";
/**
 * Model to represent user mod
 */
export type user_mod = {
  user_id: string;
  readonly user?: user;
  mod_id: string;
  readonly mod?: mod;
  perm?: user_mod.perm;
  readonly created_at?: string;
  readonly updated_at?: string;
};
export namespace user_mod {
  export enum perm {
    USER = "user",
    ADMIN = "admin",
    OWNER = "owner",
  }
}
