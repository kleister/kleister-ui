/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { build } from './build';
import type { neoforge } from './neoforge';
/**
 * Model to represent neoforge builds
 */
export type neoforge_builds = {
    readonly neoforge?: neoforge;
    total?: number;
    builds?: Array<build>;
};

