/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { pack } from './pack';
import type { user } from './user';
/**
 * Model to represent user pack
 */
export type user_pack = {
    user_id: string;
    readonly user?: user;
    pack_id: string;
    readonly pack?: pack;
    perm?: user_pack.perm;
    readonly created_at?: string;
    readonly updated_at?: string;
};
export namespace user_pack {
    export enum perm {
        USER = 'user',
        ADMIN = 'admin',
        OWNER = 'owner',
    }
}

