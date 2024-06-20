/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Parameters to attach or unlink user pack
 */
export type user_pack_params = {
    pack: string;
    perm?: user_pack_params.perm;
};
export namespace user_pack_params {
    export enum perm {
        USER = 'user',
        ADMIN = 'admin',
        OWNER = 'owner',
    }
}

