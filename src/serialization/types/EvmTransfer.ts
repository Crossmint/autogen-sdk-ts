/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Crossmint from "../../api/index";
import * as core from "../../core";
import { EvmChains } from "./EvmChains";

export const EvmTransfer: core.serialization.ObjectSchema<serializers.EvmTransfer.Raw, Crossmint.EvmTransfer> =
    core.serialization.object({
        chain: EvmChains.optional(),
        from: core.serialization.string().optional(),
        to: core.serialization.string().optional(),
        contractAddress: core.serialization.string().optional(),
        tokenId: core.serialization.string().optional(),
        quantity: core.serialization.string().optional(),
    });

export declare namespace EvmTransfer {
    interface Raw {
        chain?: EvmChains.Raw | null;
        from?: string | null;
        to?: string | null;
        contractAddress?: string | null;
        tokenId?: string | null;
        quantity?: string | null;
    }
}