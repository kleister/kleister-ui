/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Parameters to attach or unlink pack user
 */
export type pack_user_params = {
    user: string;
    perm?: pack_user_params.perm;
};
export namespace pack_user_params {
    export enum perm {
        USER = 'user',
        ADMIN = 'admin',
        OWNER = 'owner',
    }
}

