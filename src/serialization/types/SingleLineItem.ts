/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Crossmint from "../../api/index";
import * as core from "../../core";
import { LineItemsCallDataCallData } from "./LineItemsCallDataCallData";

export const SingleLineItem: core.serialization.ObjectSchema<serializers.SingleLineItem.Raw, Crossmint.SingleLineItem> =
    core.serialization.object({
        collectionLocator: core.serialization.string(),
        callData: LineItemsCallDataCallData.optional(),
    });

export declare namespace SingleLineItem {
    interface Raw {
        collectionLocator: string;
        callData?: LineItemsCallDataCallData.Raw | null;
    }
}
