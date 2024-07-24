/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Crossmint from "../../api/index";
import * as core from "../../core";
import { NftObjectSolanaMetadata } from "./NftObjectSolanaMetadata";
import { NftObjectSolanaOnChain } from "./NftObjectSolanaOnChain";

export const NftObjectSolana: core.serialization.ObjectSchema<
    serializers.NftObjectSolana.Raw,
    Crossmint.NftObjectSolana
> = core.serialization.object({
    id: core.serialization.string().optional(),
    metadata: NftObjectSolanaMetadata.optional(),
    onChain: NftObjectSolanaOnChain.optional(),
});

export declare namespace NftObjectSolana {
    interface Raw {
        id?: string | null;
        metadata?: NftObjectSolanaMetadata.Raw | null;
        onChain?: NftObjectSolanaOnChain.Raw | null;
    }
}