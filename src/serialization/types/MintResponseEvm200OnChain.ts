/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Crossmint from "../../api/index";
import * as core from "../../core";

export const MintResponseEvm200OnChain: core.serialization.ObjectSchema<
    serializers.MintResponseEvm200OnChain.Raw,
    Crossmint.MintResponseEvm200OnChain
> = core.serialization.object({
    status: core.serialization.string().optional(),
    chain: core.serialization.string().optional(),
    contractAddress: core.serialization.string().optional(),
});

export declare namespace MintResponseEvm200OnChain {
    interface Raw {
        status?: string | null;
        chain?: string | null;
        contractAddress?: string | null;
    }
}
