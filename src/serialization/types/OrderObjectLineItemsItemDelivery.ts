/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Crossmint from "../../api/index";
import * as core from "../../core";
import { OrderObjectLineItemsItemDeliveryRecipient } from "./OrderObjectLineItemsItemDeliveryRecipient";

export const OrderObjectLineItemsItemDelivery: core.serialization.ObjectSchema<
    serializers.OrderObjectLineItemsItemDelivery.Raw,
    Crossmint.OrderObjectLineItemsItemDelivery
> = core.serialization.object({
    status: core.serialization.string().optional(),
    recipient: OrderObjectLineItemsItemDeliveryRecipient.optional(),
});

export declare namespace OrderObjectLineItemsItemDelivery {
    interface Raw {
        status?: string | null;
        recipient?: OrderObjectLineItemsItemDeliveryRecipient.Raw | null;
    }
}