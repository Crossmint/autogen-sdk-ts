/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Crossmint from "../../api/index";
import * as core from "../../core";

export const NftObjectSolanaMetadataAttributesItem: core.serialization.ObjectSchema<
    serializers.NftObjectSolanaMetadataAttributesItem.Raw,
    Crossmint.NftObjectSolanaMetadataAttributesItem
> = core.serialization.object({
    traitType: core.serialization.property("trait_type", core.serialization.string().optional()),
    value: core.serialization.string().optional(),
});

export declare namespace NftObjectSolanaMetadataAttributesItem {
    interface Raw {
        trait_type?: string | null;
        value?: string | null;
    }
}