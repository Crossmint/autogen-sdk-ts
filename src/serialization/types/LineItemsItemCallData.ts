/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Crossmint from "../../api/index";
import * as core from "../../core";

export const LineItemsItemCallData: core.serialization.ObjectSchema<
    serializers.LineItemsItemCallData.Raw,
    Crossmint.LineItemsItemCallData
> = core.serialization.object({
    totalPrice: core.serialization.string().optional(),
});

export declare namespace LineItemsItemCallData {
    interface Raw {
        totalPrice?: string | null;
    }
}