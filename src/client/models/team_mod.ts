/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { mod } from './mod';
import type { team } from './team';
/**
 * Model to represent team mod
 */
export type team_mod = {
    team_id: string;
    readonly team?: team;
    mod_id: string;
    readonly mod?: mod;
    perm?: team_mod.perm;
    readonly created_at?: string;
    readonly updated_at?: string;
};
export namespace team_mod {
    export enum perm {
        TEAM = 'team',
        ADMIN = 'admin',
        OWNER = 'owner',
    }
}

