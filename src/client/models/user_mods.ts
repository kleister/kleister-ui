/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { user } from './user';
import type { user_mod } from './user_mod';
/**
 * Model to represent user mods
 */
export type user_mods = {
    readonly user?: user;
    total?: number;
    mods?: Array<user_mod>;
};

