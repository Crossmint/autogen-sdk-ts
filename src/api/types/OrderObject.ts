/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Crossmint from "../index";

export interface OrderObject {
    orderId?: string;
    phase?: string;
    locale?: string;
    lineItems?: Crossmint.OrderObjectLineItemsItem[];
    quote?: Crossmint.OrderObjectQuote;
    payment?: Crossmint.OrderObjectPayment;
}