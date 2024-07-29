/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Crossmint from "../../api/index";
import * as core from "../../core";

export const Solana: core.serialization.ObjectSchema<serializers.Solana.Raw, Crossmint.Solana> =
    core.serialization.object({
        chain: core.serialization.stringLiteral("solana").optional(),
        from: core.serialization.string().optional(),
        to: core.serialization.string().optional(),
        tokenMintAddress: core.serialization.string().optional(),
    });

export declare namespace Solana {
    interface Raw {
        chain?: "solana" | null;
        from?: string | null;
        to?: string | null;
        tokenMintAddress?: string | null;
    }
}
