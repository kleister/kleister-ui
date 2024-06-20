/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Parameters to attach or unlink pack team
 */
export type pack_team_params = {
  team: string;
  perm?: pack_team_params.perm;
};
export namespace pack_team_params {
  export enum perm {
    TEAM = "team",
    ADMIN = "admin",
    OWNER = "owner",
  }
}
