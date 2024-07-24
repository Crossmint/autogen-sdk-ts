/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Crossmint from "../../../../api/index";
import * as core from "../../../../core";
import { AllChains } from "../../../types/AllChains";

export const UserId: core.serialization.ObjectSchema<serializers.UserId.Raw, Crossmint.UserId> =
    core.serialization.object({
        userId: core.serialization.string(),
        chain: AllChains,
    });

export declare namespace UserId {
    interface Raw {
        userId: string;
        chain: AllChains.Raw;
    }
}