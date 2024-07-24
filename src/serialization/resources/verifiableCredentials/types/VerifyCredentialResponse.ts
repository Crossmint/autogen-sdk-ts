/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Crossmint from "../../../../api/index";
import * as core from "../../../../core";

export const VerifyCredentialResponse: core.serialization.ObjectSchema<
    serializers.VerifyCredentialResponse.Raw,
    Crossmint.VerifyCredentialResponse
> = core.serialization.object({
    isValid: core.serialization.boolean().optional(),
    error: core.serialization.string().optional(),
});

export declare namespace VerifyCredentialResponse {
    interface Raw {
        isValid?: boolean | null;
        error?: string | null;
    }
}