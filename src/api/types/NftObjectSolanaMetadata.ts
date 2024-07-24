/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Crossmint from "../index";

export interface NftObjectSolanaMetadata {
    name?: string;
    symbol?: string;
    sellerFeeBasisPoints?: number;
    properties?: Crossmint.NftObjectSolanaMetadataProperties;
    description?: string;
    image?: string;
    attributes?: Crossmint.NftObjectSolanaMetadataAttributesItem[];
}
