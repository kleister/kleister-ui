/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { mod } from "./mod";
import type { version_file } from "./version_file";
/**
 * Model to represent version
 */
export type version = {
  readonly id?: string;
  readonly file?: version_file;
  readonly mod?: mod;
  slug?: string;
  name?: string;
  public?: boolean;
  readonly created_at?: string;
  readonly updated_at?: string;
};
