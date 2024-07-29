/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Crossmint from "../index";

export interface CreateCollectionBody {
    /** Blockchain you would like to use for this collection */
    chain: Crossmint.CreateCollectionBodyChain;
    metadata: Crossmint.CreateCollectionBodyMetadata;
    /** Whether or not this collection is fungible. Only EVM collections may be set as semi-fungible */
    fungibility?: Crossmint.CreateCollectionBodyFungibility;
    /** The maximum number of tokens that can be minted for this collection */
    supplyLimit?: number;
    payments?: Crossmint.PaymentsObject;
    reuploadLinkedFiles?: Crossmint.ReuploadLinkedFiles;
}
