/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Crossmint from "../../../../index";

/**
 * @example
 *     {
 *         templateId: "silver-pass",
 *         recipient: "email:testy@crossmint.io:polygon"
 *     }
 */
export interface MintSftRequest {
    /**
     * Unique identifier to prevent duplicate requests
     */
    idempotencyKey?: string;
    /** Identifier of the template */
    templateId: string;
    recipient: Crossmint.Recipient;
    /** (Optional) Amount to mint */
    amount?: number;
}
