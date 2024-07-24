/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Crossmint from "../../../../api/index";
import * as core from "../../../../core";
import { GetTypeResponseCredentialSubjectSchemaItem } from "./GetTypeResponseCredentialSubjectSchemaItem";

export const GetTypeResponse: core.serialization.ObjectSchema<
    serializers.GetTypeResponse.Raw,
    Crossmint.GetTypeResponse
> = core.serialization.object({
    name: core.serialization.string().optional(),
    credentialSubjectSchema: core.serialization.list(GetTypeResponseCredentialSubjectSchemaItem).optional(),
});

export declare namespace GetTypeResponse {
    interface Raw {
        name?: string | null;
        credentialSubjectSchema?: GetTypeResponseCredentialSubjectSchemaItem.Raw[] | null;
    }
}
