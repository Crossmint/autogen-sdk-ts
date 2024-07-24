/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Crossmint from "../../api/index";
import * as core from "../../core";
import { EditNftResponseDataCollection } from "./EditNftResponseDataCollection";
import { EditNftResponseDataToken } from "./EditNftResponseDataToken";

export const EditNftResponseData: core.serialization.ObjectSchema<
    serializers.EditNftResponseData.Raw,
    Crossmint.EditNftResponseData
> = core.serialization.object({
    txId: core.serialization.string().optional(),
    chain: core.serialization.string().optional(),
    collection: EditNftResponseDataCollection.optional(),
    token: EditNftResponseDataToken.optional(),
    changes: core.serialization.list(core.serialization.string()).optional(),
});

export declare namespace EditNftResponseData {
    interface Raw {
        txId?: string | null;
        chain?: string | null;
        collection?: EditNftResponseDataCollection.Raw | null;
        token?: EditNftResponseDataToken.Raw | null;
        changes?: string[] | null;
    }
}