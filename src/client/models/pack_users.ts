/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { pack } from './pack';
import type { user_pack } from './user_pack';
/**
 * Model to represent pack users
 */
export type pack_users = {
    readonly pack?: pack;
    total?: number;
    users?: Array<user_pack>;
};

