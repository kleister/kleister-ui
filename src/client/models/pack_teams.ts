/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { pack } from "./pack";
import type { team_pack } from "./team_pack";
/**
 * Model to represent pack teams
 */
export type pack_teams = {
  readonly pack?: pack;
  total?: number;
  teams?: Array<team_pack>;
};
