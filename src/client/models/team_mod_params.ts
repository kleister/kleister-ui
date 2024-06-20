/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Parameters to attach or unlink team mod
 */
export type team_mod_params = {
    mod: string;
    perm?: team_mod_params.perm;
};
export namespace team_mod_params {
    export enum perm {
        TEAM = 'team',
        ADMIN = 'admin',
        OWNER = 'owner',
    }
}

