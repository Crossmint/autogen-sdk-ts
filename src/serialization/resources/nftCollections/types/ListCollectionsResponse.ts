/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Crossmint from "../../../../api/index";
import * as core from "../../../../core";
import { GetCollectionResponse } from "../../../types/GetCollectionResponse";

export const ListCollectionsResponse: core.serialization.ObjectSchema<
    serializers.ListCollectionsResponse.Raw,
    Crossmint.ListCollectionsResponse
> = core.serialization.object({
    results: core.serialization.list(GetCollectionResponse).optional(),
});

export declare namespace ListCollectionsResponse {
    interface Raw {
        results?: GetCollectionResponse.Raw[] | null;
    }
}