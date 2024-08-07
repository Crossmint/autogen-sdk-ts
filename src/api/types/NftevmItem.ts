/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Crossmint from "../index";

export interface NftevmItem {
    /** The blockchain used in the request. */
    chain?: string;
    /** The token contract address */
    contractAddress?: string;
    /** The numeric tokenId for the specified NFT */
    tokenId?: string;
    metadata?: Crossmint.NftevmItemMetadata;
    /** The address of the NFT on the blockchain */
    locator?: string;
    /** The type of contract this token is from (ERC-721 or ERC-1155) */
    tokenStandard?: string;
}
