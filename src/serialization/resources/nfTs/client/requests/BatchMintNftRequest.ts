/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as Crossmint from "../../../../../api/index";
import * as core from "../../../../../core";
import { BatchMintNftRequestNftsItem } from "../../types/BatchMintNftRequestNftsItem";

export const BatchMintNftRequest: core.serialization.Schema<
    serializers.BatchMintNftRequest.Raw,
    Crossmint.BatchMintNftRequest
> = core.serialization.object({
    nfts: core.serialization.list(BatchMintNftRequestNftsItem),
});

export declare namespace BatchMintNftRequest {
    interface Raw {
        nfts: BatchMintNftRequestNftsItem.Raw[];
    }
}
