/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { build } from './build';
import type { forge } from './forge';
/**
 * Model to represent forge builds
 */
export type forge_builds = {
    readonly forge?: forge;
    total?: number;
    builds?: Array<build>;
};

