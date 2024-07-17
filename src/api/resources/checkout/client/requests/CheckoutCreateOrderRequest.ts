/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Crossmint from "../../../../index";

/**
 * @example
 *     {
 *         payment: {
 *             method: Crossmint.EvmPaymentMethods.ArbitrumSepolia,
 *             currency: Crossmint.EvmPaymentCurrency.Eth
 *         },
 *         lineItems: {
 *             collectionLocator: "crossmint:<collectionId>"
 *         }
 *     }
 */
export interface CheckoutCreateOrderRequest {
    recipient?: Crossmint.Recipient;
    locale?: Crossmint.Locale;
    payment: Crossmint.Payment;
    lineItems: Crossmint.LineItems;
}
