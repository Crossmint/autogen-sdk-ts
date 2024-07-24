/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Crossmint from "../../api/index";
import * as core from "../../core";

export const MintApiFeatureCollectionNotDeployed: core.serialization.ObjectSchema<
    serializers.MintApiFeatureCollectionNotDeployed.Raw,
    Crossmint.MintApiFeatureCollectionNotDeployed
> = core.serialization.object({
    error: core.serialization.boolean().optional(),
    message: core.serialization.string().optional(),
});

export declare namespace MintApiFeatureCollectionNotDeployed {
    interface Raw {
        error?: boolean | null;
        message?: string | null;
    }
}