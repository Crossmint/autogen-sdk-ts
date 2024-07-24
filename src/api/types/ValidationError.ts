/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface ValidationError {
    /** The index of the NFT that caused the validation error. */
    index?: number;
    /** The idempotent identifier for the NFT, if available. */
    id?: string;
    /** The validation error message. */
    message?: string;
}
