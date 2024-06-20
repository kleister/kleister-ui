/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { build } from "./build";
import type { build_version } from "./build_version";
import type { pack } from "./pack";
/**
 * Model to represent build versions
 */
export type build_versions = {
  readonly pack?: pack;
  readonly build?: build;
  total?: number;
  versions?: Array<build_version>;
};
