/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Crossmint from "../../../../api/index";
import * as core from "../../../../core";

export const GetTransferabilityResponse: core.serialization.ObjectSchema<
    serializers.GetTransferabilityResponse.Raw,
    Crossmint.GetTransferabilityResponse
> = core.serialization.object({
    value: core.serialization.boolean().optional(),
});

export declare namespace GetTransferabilityResponse {
    interface Raw {
        value?: boolean | null;
    }
}
