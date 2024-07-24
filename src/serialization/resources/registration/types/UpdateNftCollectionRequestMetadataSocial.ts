/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Crossmint from "../../../../api/index";
import * as core from "../../../../core";

export const UpdateNftCollectionRequestMetadataSocial: core.serialization.ObjectSchema<
    serializers.UpdateNftCollectionRequestMetadataSocial.Raw,
    Crossmint.UpdateNftCollectionRequestMetadataSocial
> = core.serialization.object({
    twitter: core.serialization.string().optional(),
    discord: core.serialization.string().optional(),
});

export declare namespace UpdateNftCollectionRequestMetadataSocial {
    interface Raw {
        twitter?: string | null;
        discord?: string | null;
    }
}