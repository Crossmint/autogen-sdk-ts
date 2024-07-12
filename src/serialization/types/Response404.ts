/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Crossmint from "../../api/index";
import * as core from "../../core";

export const Response404: core.serialization.ObjectSchema<serializers.Response404.Raw, Crossmint.Response404> =
    core.serialization.object({
        error: core.serialization.boolean().optional(),
        message: core.serialization.string().optional(),
    });

export declare namespace Response404 {
    interface Raw {
        error?: boolean | null;
        message?: string | null;
    }
}