/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Crossmint from "../index";

export interface CreateTemplateBody {
    /** See https://docs.crossmint.com/docs/metadata for more info */
    metadata?: Crossmint.CreateTemplateBodyMetadata;
    /** On-chain details */
    onChain?: Crossmint.CreateTemplateBodyOnChain;
    /** Supply details */
    supply?: Crossmint.CreateTemplateBodySupply;
    reuploadLinkedFiles?: Crossmint.ReuploadLinkedFiles;
}
