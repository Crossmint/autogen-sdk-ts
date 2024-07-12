/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Crossmint from "../../api/index";
import * as core from "../../core";

export const PaymentZeroMethod: core.serialization.Schema<
    serializers.PaymentZeroMethod.Raw,
    Crossmint.PaymentZeroMethod
> = core.serialization.enum_([
    "arbitrum-sepolia",
    "base-sepolia",
    "ethereum-sepolia",
    "optimism-sepolia",
    "arbitrum",
    "bsc",
    "ethereum",
    "optimism",
]);

export declare namespace PaymentZeroMethod {
    type Raw =
        | "arbitrum-sepolia"
        | "base-sepolia"
        | "ethereum-sepolia"
        | "optimism-sepolia"
        | "arbitrum"
        | "bsc"
        | "ethereum"
        | "optimism";
}