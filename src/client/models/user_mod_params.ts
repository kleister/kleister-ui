/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Parameters to attach or unlink user mod
 */
export type user_mod_params = {
    mod: string;
    perm?: user_mod_params.perm;
};
export namespace user_mod_params {
    export enum perm {
        USER = 'user',
        ADMIN = 'admin',
        OWNER = 'owner',
    }
}

