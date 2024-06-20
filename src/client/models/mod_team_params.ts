/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Parameters to attach or unlink mod team
 */
export type mod_team_params = {
  team: string;
  perm?: mod_team_params.perm;
};
export namespace mod_team_params {
  export enum perm {
    TEAM = "team",
    ADMIN = "admin",
    OWNER = "owner",
  }
}
