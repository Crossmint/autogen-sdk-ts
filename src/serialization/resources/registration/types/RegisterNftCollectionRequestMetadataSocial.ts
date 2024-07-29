/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Crossmint from "../../../../api/index";
import * as core from "../../../../core";

export const RegisterNftCollectionRequestMetadataSocial: core.serialization.ObjectSchema<
    serializers.RegisterNftCollectionRequestMetadataSocial.Raw,
    Crossmint.RegisterNftCollectionRequestMetadataSocial
> = core.serialization.object({
    twitter: core.serialization.string().optional(),
    discord: core.serialization.string().optional(),
});

export declare namespace RegisterNftCollectionRequestMetadataSocial {
    interface Raw {
        twitter?: string | null;
        discord?: string | null;
    }
}
