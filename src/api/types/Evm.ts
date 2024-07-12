/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Crossmint from "../index";

export interface Evm {
    /** Email that the receipt will be sent to. */
    receiptEmail?: string;
    method: Crossmint.PaymentZeroMethod;
    currency: Crossmint.PaymentZeroCurrency;
    /** An EVM wallet address. */
    payerAddress?: string;
}