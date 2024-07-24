/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Crossmint from "../../api/index";
import * as core from "../../core";

export const Redirect: core.serialization.ObjectSchema<serializers.Redirect.Raw, Crossmint.Redirect> =
    core.serialization.object({
        continue: core.serialization.string().optional(),
        cancel: core.serialization.string().optional(),
    });

export declare namespace Redirect {
    interface Raw {
        continue?: string | null;
        cancel?: string | null;
    }
}