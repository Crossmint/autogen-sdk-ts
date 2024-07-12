/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Crossmint from "../../api/index";
import * as core from "../../core";

export const PaymentCurrencyCurrency: core.serialization.Schema<
    serializers.PaymentCurrencyCurrency.Raw,
    Crossmint.PaymentCurrencyCurrency
> = core.serialization.enum_(["usd", "eur", "aud", "gbp", "jpy", "sgd", "hkd", "krw", "inr", "vnd"]);

export declare namespace PaymentCurrencyCurrency {
    type Raw = "usd" | "eur" | "aud" | "gbp" | "jpy" | "sgd" | "hkd" | "krw" | "inr" | "vnd";
}
