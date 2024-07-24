/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Crossmint from "../../../../api/index";
import * as core from "../../../../core";
import { MintSftResponseData } from "./MintSftResponseData";

export const MintSftResponse: core.serialization.ObjectSchema<
    serializers.MintSftResponse.Raw,
    Crossmint.MintSftResponse
> = core.serialization.object({
    actionId: core.serialization.string().optional(),
    action: core.serialization.string().optional(),
    status: core.serialization.string().optional(),
    data: MintSftResponseData.optional(),
    startedAt: core.serialization.string().optional(),
    resource: core.serialization.string().optional(),
});

export declare namespace MintSftResponse {
    interface Raw {
        actionId?: string | null;
        action?: string | null;
        status?: string | null;
        data?: MintSftResponseData.Raw | null;
        startedAt?: string | null;
        resource?: string | null;
    }
}
