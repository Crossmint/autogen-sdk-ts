/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Crossmint from "../../api/index";
import * as core from "../../core";

export const NftObjectEvmMetadata: core.serialization.ObjectSchema<
    serializers.NftObjectEvmMetadata.Raw,
    Crossmint.NftObjectEvmMetadata
> = core.serialization.object({
    name: core.serialization.string().optional(),
    image: core.serialization.string().optional(),
    description: core.serialization.string().optional(),
});

export declare namespace NftObjectEvmMetadata {
    interface Raw {
        name?: string | null;
        image?: string | null;
        description?: string | null;
    }
}
