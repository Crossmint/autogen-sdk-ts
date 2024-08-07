/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Crossmint from "../index";

export interface EditNftResponseData {
    /**
     * The onchain transaction ID related to the request.
     *
     * This is only present when `status` is `succeeded`
     */
    txId?: string;
    chain?: string;
    collection?: Crossmint.EditNftResponseDataCollection;
    token?: Crossmint.EditNftResponseDataToken;
    changes?: string[];
}
