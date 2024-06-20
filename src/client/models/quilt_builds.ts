/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { build } from './build';
import type { quilt } from './quilt';
/**
 * Model to represent quilt builds
 */
export type quilt_builds = {
    readonly quilt?: quilt;
    total?: number;
    builds?: Array<build>;
};

