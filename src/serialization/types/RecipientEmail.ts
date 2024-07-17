/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Crossmint from "../../api/index";
import * as core from "../../core";

export const RecipientEmail: core.serialization.ObjectSchema<serializers.RecipientEmail.Raw, Crossmint.RecipientEmail> =
    core.serialization.object({
        email: core.serialization.string(),
    });

export declare namespace RecipientEmail {
    interface Raw {
        email: string;
    }
}