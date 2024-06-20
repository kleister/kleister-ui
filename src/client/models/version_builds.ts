/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { build_version } from './build_version';
import type { mod } from './mod';
import type { version } from './version';
/**
 * Model to represent version builds
 */
export type version_builds = {
    readonly mod?: mod;
    readonly version?: version;
    total?: number;
    builds?: Array<build_version>;
};

