/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Crossmint from "../../../../api/index";
import * as core from "../../../../core";
import { Recipient } from "../../../types/Recipient";
import { NftMetadataOptions } from "../../../types/NftMetadataOptions";
import { Compressed } from "../../../types/Compressed";

export const BatchMintNftRequestNftsItem: core.serialization.ObjectSchema<
    serializers.BatchMintNftRequestNftsItem.Raw,
    Crossmint.BatchMintNftRequestNftsItem
> = core.serialization.object({
    recipient: Recipient.optional(),
    metadata: NftMetadataOptions.optional(),
    compressed: Compressed.optional(),
    id: core.serialization.string().optional(),
});

export declare namespace BatchMintNftRequestNftsItem {
    interface Raw {
        recipient?: Recipient.Raw | null;
        metadata?: NftMetadataOptions.Raw | null;
        compressed?: Compressed.Raw | null;
        id?: string | null;
    }
}
