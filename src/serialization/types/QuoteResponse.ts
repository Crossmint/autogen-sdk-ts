/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Crossmint from "../../api/index";
import * as core from "../../core";

export const QuoteResponse: core.serialization.ObjectSchema<serializers.QuoteResponse.Raw, Crossmint.QuoteResponse> =
    core.serialization.object({
        currency: core.serialization.string().optional(),
        price: core.serialization.number().optional(),
    });

export declare namespace QuoteResponse {
    interface Raw {
        currency?: string | null;
        price?: number | null;
    }
}