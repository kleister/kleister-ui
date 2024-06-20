/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { fabric } from "./fabric";
import type { forge } from "./forge";
import type { minecraft } from "./minecraft";
import type { neoforge } from "./neoforge";
import type { pack } from "./pack";
import type { quilt } from "./quilt";
/**
 * Model to represent build
 */
export type build = {
  readonly id?: string;
  readonly pack?: pack;
  minecraft_id?: string;
  readonly minecraft?: minecraft;
  forge_id?: string;
  readonly forge?: forge;
  neoforge_id?: string;
  readonly neoforge?: neoforge;
  quilt_id?: string;
  readonly quilt?: quilt;
  fabric_id?: string;
  readonly fabric?: fabric;
  slug?: string;
  name?: string;
  java?: string;
  memory?: string;
  latest?: boolean;
  recommended?: boolean;
  public?: boolean;
  readonly created_at?: string;
  readonly updated_at?: string;
};
