/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Crossmint from "../../../../api/index";
import * as core from "../../../../core";
import { MintResponseSolana200 } from "../../../types/MintResponseSolana200";
import { MintResponseSolana200Subsequent } from "../../../types/MintResponseSolana200Subsequent";
import { MintResponseEvm200 } from "../../../types/MintResponseEvm200";
import { MintResponseEvm200Subsequent } from "../../../types/MintResponseEvm200Subsequent";

export const MintNftIdempotentResponse: core.serialization.Schema<
    serializers.MintNftIdempotentResponse.Raw,
    Crossmint.MintNftIdempotentResponse
> = core.serialization.undiscriminatedUnion([
    MintResponseSolana200,
    MintResponseSolana200Subsequent,
    MintResponseEvm200,
    MintResponseEvm200Subsequent,
]);

export declare namespace MintNftIdempotentResponse {
    type Raw =
        | MintResponseSolana200.Raw
        | MintResponseSolana200Subsequent.Raw
        | MintResponseEvm200.Raw
        | MintResponseEvm200Subsequent.Raw;
}
