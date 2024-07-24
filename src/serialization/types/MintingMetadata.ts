/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Crossmint from "../../api/index";
import * as core from "../../core";

export const MintingMetadata: core.serialization.ObjectSchema<
    serializers.MintingMetadata.Raw,
    Crossmint.MintingMetadata
> = core.serialization.object({
    name: core.serialization.string().optional(),
    imageUrl: core.serialization.string().optional(),
    description: core.serialization.string().optional(),
});

export declare namespace MintingMetadata {
    interface Raw {
        name?: string | null;
        imageUrl?: string | null;
        description?: string | null;
    }
}
