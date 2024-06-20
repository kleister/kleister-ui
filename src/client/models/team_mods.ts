/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { team } from "./team";
import type { team_mod } from "./team_mod";
/**
 * Model to represent team mods
 */
export type team_mods = {
  readonly team?: team;
  total?: number;
  mods?: Array<team_mod>;
};
