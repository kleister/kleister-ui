/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { build } from "./build";
import type { version } from "./version";
/**
 * Model to represent build version
 */
export type build_version = {
  build_id: string;
  readonly build?: build;
  version_id: string;
  readonly version?: version;
  readonly created_at?: string;
  readonly updated_at?: string;
};
