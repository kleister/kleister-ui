/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { pack_back } from "./pack_back";
import type { pack_icon } from "./pack_icon";
import type { pack_logo } from "./pack_logo";
/**
 * Model to represent pack
 */
export type pack = {
  readonly id?: string;
  readonly icon?: pack_icon;
  readonly logo?: pack_logo;
  readonly back?: pack_back;
  slug?: string;
  name?: string;
  website?: string;
  public?: boolean;
  readonly created_at?: string;
  readonly updated_at?: string;
};
