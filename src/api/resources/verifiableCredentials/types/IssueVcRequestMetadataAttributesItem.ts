/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Crossmint from "../../../index";

export interface IssueVcRequestMetadataAttributesItem {
    /** Display name of your attribute */
    displayType?: Crossmint.IssueVcRequestMetadataAttributesItemDisplayType;
    /** The name of the trait */
    traitType: string;
    /** The value of the trait */
    value: string;
}