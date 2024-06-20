/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Parameters to attach or unlink team pack
 */
export type team_pack_params = {
  pack: string;
  perm?: team_pack_params.perm;
};
export namespace team_pack_params {
  export enum perm {
    TEAM = "team",
    ADMIN = "admin",
    OWNER = "owner",
  }
}
