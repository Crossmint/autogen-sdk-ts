/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Crossmint from "../../api/index";
import * as core from "../../core";
import { LineItemsCallData } from "./LineItemsCallData";
import { LineItemsItem } from "./LineItemsItem";

export const LineItems: core.serialization.Schema<serializers.LineItems.Raw, Crossmint.LineItems> =
    core.serialization.undiscriminatedUnion([LineItemsCallData, core.serialization.list(LineItemsItem)]);

export declare namespace LineItems {
    type Raw = LineItemsCallData.Raw | LineItemsItem.Raw[];
}
