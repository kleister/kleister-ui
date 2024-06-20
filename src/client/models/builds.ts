/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { build } from './build';
import type { pack } from './pack';
/**
 * Model to represent list of builds
 */
export type builds = {
    total?: number;
    readonly pack?: pack;
    builds?: Array<build>;
};

