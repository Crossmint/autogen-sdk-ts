/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Crossmint from "../../api/index";
import * as core from "../../core";
import { MintResponseEvm200OnChain } from "./MintResponseEvm200OnChain";

export const MintResponseEvm200: core.serialization.ObjectSchema<
    serializers.MintResponseEvm200.Raw,
    Crossmint.MintResponseEvm200
> = core.serialization.object({
    id: core.serialization.string().optional(),
    onChain: MintResponseEvm200OnChain.optional(),
    actionId: core.serialization.string().optional(),
});

export declare namespace MintResponseEvm200 {
    interface Raw {
        id?: string | null;
        onChain?: MintResponseEvm200OnChain.Raw | null;
        actionId?: string | null;
    }
}