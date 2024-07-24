/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Crossmint from "../../../../api/index";
import * as core from "../../../../core";

export const MintSftResponseDataRecipient: core.serialization.ObjectSchema<
    serializers.MintSftResponseDataRecipient.Raw,
    Crossmint.MintSftResponseDataRecipient
> = core.serialization.object({
    walletAddress: core.serialization.string().optional(),
    email: core.serialization.string().optional(),
});

export declare namespace MintSftResponseDataRecipient {
    interface Raw {
        walletAddress?: string | null;
        email?: string | null;
    }
}