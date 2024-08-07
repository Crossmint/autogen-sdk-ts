/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Crossmint from "../../api/index";
import * as core from "../../core";

export const EditNftResponseDataCollection: core.serialization.ObjectSchema<
    serializers.EditNftResponseDataCollection.Raw,
    Crossmint.EditNftResponseDataCollection
> = core.serialization.object({
    id: core.serialization.string().optional(),
    contractAddress: core.serialization.string().optional(),
});

export declare namespace EditNftResponseDataCollection {
    interface Raw {
        id?: string | null;
        contractAddress?: string | null;
    }
}
