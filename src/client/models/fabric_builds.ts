/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { build } from './build';
import type { fabric } from './fabric';
/**
 * Model to represent fabric builds
 */
export type fabric_builds = {
    readonly fabric?: fabric;
    total?: number;
    builds?: Array<build>;
};

