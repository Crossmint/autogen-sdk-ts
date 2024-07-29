/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as Crossmint from "../../../../../api/index";
import * as core from "../../../../../core";
import { CheckoutMintRequestCollection } from "../../types/CheckoutMintRequestCollection";
import { CheckoutMintRequestRedirect } from "../../types/CheckoutMintRequestRedirect";
import { CheckoutMintRequestMintConfig } from "../../types/CheckoutMintRequestMintConfig";

export const CheckoutMintRequest: core.serialization.Schema<
    serializers.CheckoutMintRequest.Raw,
    Crossmint.CheckoutMintRequest
> = core.serialization.object({
    clientId: core.serialization.string(),
    userId: core.serialization.string(),
    emailTo: core.serialization.string().optional(),
    mintTo: core.serialization.string().optional(),
    paymentMethod: core.serialization.string().optional(),
    listingId: core.serialization.string().optional(),
    collection: CheckoutMintRequestCollection.optional(),
    redirect: CheckoutMintRequestRedirect.optional(),
    mintConfig: CheckoutMintRequestMintConfig.optional(),
    whPassThroughArgs: core.serialization.string().optional(),
});

export declare namespace CheckoutMintRequest {
    interface Raw {
        clientId: string;
        userId: string;
        emailTo?: string | null;
        mintTo?: string | null;
        paymentMethod?: string | null;
        listingId?: string | null;
        collection?: CheckoutMintRequestCollection.Raw | null;
        redirect?: CheckoutMintRequestRedirect.Raw | null;
        mintConfig?: CheckoutMintRequestMintConfig.Raw | null;
        whPassThroughArgs?: string | null;
    }
}
