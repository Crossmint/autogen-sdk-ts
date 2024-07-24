/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Crossmint from "../../api/index";
import * as core from "../../core";
import { NftevmItem } from "./NftevmItem";

export const Nftevm: core.serialization.Schema<serializers.Nftevm.Raw, Crossmint.Nftevm> =
    core.serialization.list(NftevmItem);

export declare namespace Nftevm {
    type Raw = NftevmItem.Raw[];
}
