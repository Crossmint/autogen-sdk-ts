/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Crossmint from "../../api/index";
import * as core from "../../core";
import { NftCollection } from "./NftCollection";
import { NftAttributesItem } from "./NftAttributesItem";
import { NftProperties } from "./NftProperties";

export const Nft: core.serialization.ObjectSchema<serializers.Nft.Raw, Crossmint.Nft> = core.serialization.object({
    name: core.serialization.string().optional(),
    symbol: core.serialization.string().optional(),
    description: core.serialization.string().optional(),
    image: core.serialization.string().optional(),
    collection: NftCollection.optional(),
    attributes: core.serialization.list(NftAttributesItem).optional(),
    properties: NftProperties.optional(),
    mintHash: core.serialization.string().optional(),
    sellerFeeBasisPoints: core.serialization.property(
        "seller_fee_basis_points",
        core.serialization.number().optional()
    ),
});

export declare namespace Nft {
    interface Raw {
        name?: string | null;
        symbol?: string | null;
        description?: string | null;
        image?: string | null;
        collection?: NftCollection.Raw | null;
        attributes?: NftAttributesItem.Raw[] | null;
        properties?: NftProperties.Raw | null;
        mintHash?: string | null;
        seller_fee_basis_points?: number | null;
    }
}