/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Crossmint from "../../api/index";
import * as core from "../../core";
import { UpdateCollectionResponseDataCollection } from "./UpdateCollectionResponseDataCollection";

export const UpdateCollectionResponseData: core.serialization.ObjectSchema<
    serializers.UpdateCollectionResponseData.Raw,
    Crossmint.UpdateCollectionResponseData
> = core.serialization.object({
    chain: core.serialization.string().optional(),
    collection: UpdateCollectionResponseDataCollection.optional(),
    changes: core.serialization.list(core.serialization.string()).optional(),
});

export declare namespace UpdateCollectionResponseData {
    interface Raw {
        chain?: string | null;
        collection?: UpdateCollectionResponseDataCollection.Raw | null;
        changes?: string[] | null;
    }
}