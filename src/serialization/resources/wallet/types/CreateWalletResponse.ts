/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Crossmint from "../../../../api/index";
import * as core from "../../../../core";

export const CreateWalletResponse: core.serialization.ObjectSchema<
    serializers.CreateWalletResponse.Raw,
    Crossmint.CreateWalletResponse
> = core.serialization.object({
    chain: core.serialization.string().optional(),
    publicKey: core.serialization.string().optional(),
});

export declare namespace CreateWalletResponse {
    interface Raw {
        chain?: string | null;
        publicKey?: string | null;
    }
}
