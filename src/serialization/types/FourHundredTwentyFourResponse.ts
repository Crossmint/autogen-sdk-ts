/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Crossmint from "../../api/index";
import * as core from "../../core";

export const FourHundredTwentyFourResponse: core.serialization.ObjectSchema<
    serializers.FourHundredTwentyFourResponse.Raw,
    Crossmint.FourHundredTwentyFourResponse
> = core.serialization.object({
    error: core.serialization.boolean().optional(),
    message: core.serialization.string().optional(),
});

export declare namespace FourHundredTwentyFourResponse {
    interface Raw {
        error?: boolean | null;
        message?: string | null;
    }
}
