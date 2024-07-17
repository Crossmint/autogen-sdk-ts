/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Crossmint from "../../api/index";
import * as core from "../../core";
import { EvmPayment } from "./EvmPayment";
import { SolanaPayment } from "./SolanaPayment";
import { FiatPayment } from "./FiatPayment";

export const Payment: core.serialization.Schema<serializers.Payment.Raw, Crossmint.Payment> =
    core.serialization.undiscriminatedUnion([EvmPayment, SolanaPayment, FiatPayment]);

export declare namespace Payment {
    type Raw = EvmPayment.Raw | SolanaPayment.Raw | FiatPayment.Raw;
}
