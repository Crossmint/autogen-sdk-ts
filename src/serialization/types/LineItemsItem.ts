/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Crossmint from "../../api/index";
import * as core from "../../core";
import { LineItemsItemCallData } from "./LineItemsItemCallData";

export const LineItemsItem: core.serialization.ObjectSchema<serializers.LineItemsItem.Raw, Crossmint.LineItemsItem> =
    core.serialization.object({
        collectionLocator: core.serialization.string(),
        callData: LineItemsItemCallData.optional(),
    });

export declare namespace LineItemsItem {
    interface Raw {
        collectionLocator: string;
        callData?: LineItemsItemCallData.Raw | null;
    }
}
