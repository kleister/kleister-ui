/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { team } from './team';
import type { team_pack } from './team_pack';
/**
 * Model to represent team packs
 */
export type team_packs = {
    readonly team?: team;
    total?: number;
    packs?: Array<team_pack>;
};

