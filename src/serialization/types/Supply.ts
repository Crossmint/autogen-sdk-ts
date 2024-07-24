/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Crossmint from "../../api/index";
import * as core from "../../core";
import { SupplySupply } from "./SupplySupply";

export const Supply: core.serialization.ObjectSchema<serializers.Supply.Raw, Crossmint.Supply> =
    core.serialization.object({
        supply: SupplySupply.optional(),
    });

export declare namespace Supply {
    interface Raw {
        supply?: SupplySupply.Raw | null;
    }
}