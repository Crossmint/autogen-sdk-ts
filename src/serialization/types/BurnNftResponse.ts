/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Crossmint from "../../api/index";
import * as core from "../../core";
import { BurnNftResponseData } from "./BurnNftResponseData";

export const BurnNftResponse: core.serialization.ObjectSchema<
    serializers.BurnNftResponse.Raw,
    Crossmint.BurnNftResponse
> = core.serialization.object({
    actionId: core.serialization.string().optional(),
    action: core.serialization.string().optional(),
    status: core.serialization.string().optional(),
    data: BurnNftResponseData.optional(),
    startedAt: core.serialization.date().optional(),
    completedAt: core.serialization.date().optional(),
    resource: core.serialization.string().optional(),
});

export declare namespace BurnNftResponse {
    interface Raw {
        actionId?: string | null;
        action?: string | null;
        status?: string | null;
        data?: BurnNftResponseData.Raw | null;
        startedAt?: string | null;
        completedAt?: string | null;
        resource?: string | null;
    }
}