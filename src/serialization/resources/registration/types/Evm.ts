/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Crossmint from "../../../../api/index";
import * as core from "../../../../core";

export const Evm: core.serialization.ObjectSchema<serializers.Evm.Raw, Crossmint.Evm> = core.serialization.object({
    contractAddress: core.serialization.string(),
    abi: core.serialization.string(),
    mintFunctionName: core.serialization.string(),
    toParamName: core.serialization.string(),
    quantityParamName: core.serialization.string().optional(),
});

export declare namespace Evm {
    interface Raw {
        contractAddress: string;
        abi: string;
        mintFunctionName: string;
        toParamName: string;
        quantityParamName?: string | null;
    }
}