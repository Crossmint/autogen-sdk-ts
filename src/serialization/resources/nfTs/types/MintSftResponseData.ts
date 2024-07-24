/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Crossmint from "../../../../api/index";
import * as core from "../../../../core";
import { MintSftResponseDataCollection } from "./MintSftResponseDataCollection";
import { MintSftResponseDataRecipient } from "./MintSftResponseDataRecipient";
import { MintSftResponseDataToken } from "./MintSftResponseDataToken";

export const MintSftResponseData: core.serialization.ObjectSchema<
    serializers.MintSftResponseData.Raw,
    Crossmint.MintSftResponseData
> = core.serialization.object({
    chain: core.serialization.string().optional(),
    collection: MintSftResponseDataCollection.optional(),
    recipient: MintSftResponseDataRecipient.optional(),
    token: MintSftResponseDataToken.optional(),
});

export declare namespace MintSftResponseData {
    interface Raw {
        chain?: string | null;
        collection?: MintSftResponseDataCollection.Raw | null;
        recipient?: MintSftResponseDataRecipient.Raw | null;
        token?: MintSftResponseDataToken.Raw | null;
    }
}
