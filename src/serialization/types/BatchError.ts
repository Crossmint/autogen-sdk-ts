/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Crossmint from "../../api/index";
import * as core from "../../core";
import { ValidationError } from "./ValidationError";

export const BatchError: core.serialization.ObjectSchema<serializers.BatchError.Raw, Crossmint.BatchError> =
    core.serialization.object({
        error: core.serialization.boolean().optional(),
        message: core.serialization.string().optional(),
        validationErrors: core.serialization.list(ValidationError).optional(),
    });

export declare namespace BatchError {
    interface Raw {
        error?: boolean | null;
        message?: string | null;
        validationErrors?: ValidationError.Raw[] | null;
    }
}
