/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Crossmint from "../../api/index";
import * as core from "../../core";

export const EvmPaymentCurrency: core.serialization.Schema<
    serializers.EvmPaymentCurrency.Raw,
    Crossmint.EvmPaymentCurrency
> = core.serialization.enum_(["eth", "usdc", "degen", "brett", "toshi"]);

export declare namespace EvmPaymentCurrency {
    type Raw = "eth" | "usdc" | "degen" | "brett" | "toshi";
}