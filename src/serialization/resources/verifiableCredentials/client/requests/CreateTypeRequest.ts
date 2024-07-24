/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as Crossmint from "../../../../../api/index";
import * as core from "../../../../../core";
import { CreateTypeRequestCredentialSubjectSchemaItem } from "../../types/CreateTypeRequestCredentialSubjectSchemaItem";
import { CreateTypeRequestNestedTypeSchemaItem } from "../../types/CreateTypeRequestNestedTypeSchemaItem";

export const CreateTypeRequest: core.serialization.Schema<
    serializers.CreateTypeRequest.Raw,
    Crossmint.CreateTypeRequest
> = core.serialization.object({
    credentialSubjectSchema: core.serialization.list(CreateTypeRequestCredentialSubjectSchemaItem),
    nestedTypeSchema: core.serialization.list(CreateTypeRequestNestedTypeSchemaItem).optional(),
});

export declare namespace CreateTypeRequest {
    interface Raw {
        credentialSubjectSchema: CreateTypeRequestCredentialSubjectSchemaItem.Raw[];
        nestedTypeSchema?: CreateTypeRequestNestedTypeSchemaItem.Raw[] | null;
    }
}
