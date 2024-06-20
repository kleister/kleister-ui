/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { user } from './user';
import type { user_pack } from './user_pack';
/**
 * Model to represent user packs
 */
export type user_packs = {
    readonly user?: user;
    total?: number;
    packs?: Array<user_pack>;
};

