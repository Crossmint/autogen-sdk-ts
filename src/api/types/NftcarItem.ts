/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Crossmint from "../index";

export interface NftcarItem {
    /** The blockchain used in the request, `cardano` in this case. */
    chain?: string;
    /** The unique identifier of this NFT on Cardano */
    assetId?: string;
    metadata?: Crossmint.NftcarItemMetadata;
    /** The address of the NFT on the blockchain */
    locator?: string;
}
