/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Crossmint from "../../api/index";
import * as core from "../../core";

export const WalletsTransfer: core.serialization.ObjectSchema<
    serializers.WalletsTransfer.Raw,
    Crossmint.WalletsTransfer
> = core.serialization.object({
    chain: core.serialization.string(),
    tokenId: core.serialization.string().optional(),
    fromAddress: core.serialization.string(),
    toAddress: core.serialization.string(),
    tokenMintAddress: core.serialization.string(),
});

export declare namespace WalletsTransfer {
    interface Raw {
        chain: string;
        tokenId?: string | null;
        fromAddress: string;
        toAddress: string;
        tokenMintAddress: string;
    }
}
