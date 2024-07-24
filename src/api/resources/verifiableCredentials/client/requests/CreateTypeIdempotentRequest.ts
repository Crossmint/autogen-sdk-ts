/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Crossmint from "../../../../index";

/**
 * @example
 *     {
 *         credentialSubjectSchema: [{
 *                 name: "username",
 *                 type: "string"
 *             }, {
 *                 name: "courses_completed",
 *                 type: "uint64"
 *             }, {
 *                 name: "courses",
 *                 type: "Course[]"
 *             }]
 *     }
 */
export interface CreateTypeIdempotentRequest {
    credentialSubjectSchema: Crossmint.CreateTypeIdempotentRequestCredentialSubjectSchemaItem[];
    nestedTypeSchema?: Crossmint.CreateTypeIdempotentRequestNestedTypeSchemaItem[];
}
