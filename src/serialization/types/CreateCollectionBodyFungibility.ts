/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Crossmint from "../../api/index";
import * as core from "../../core";

export const CreateCollectionBodyFungibility: core.serialization.Schema<
    serializers.CreateCollectionBodyFungibility.Raw,
    Crossmint.CreateCollectionBodyFungibility
> = core.serialization.enum_(["non-fungible", "semi-fungible"]);

export declare namespace CreateCollectionBodyFungibility {
    type Raw = "non-fungible" | "semi-fungible";
}
