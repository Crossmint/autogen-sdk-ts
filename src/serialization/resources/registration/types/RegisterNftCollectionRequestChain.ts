/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Crossmint from "../../../../api/index";
import * as core from "../../../../core";

export const RegisterNftCollectionRequestChain: core.serialization.Schema<
    serializers.RegisterNftCollectionRequestChain.Raw,
    Crossmint.RegisterNftCollectionRequestChain
> = core.serialization.enum_(["solana", "ethereum", "polygon", "bsc"]);

export declare namespace RegisterNftCollectionRequestChain {
    type Raw = "solana" | "ethereum" | "polygon" | "bsc";
}
