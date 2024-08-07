/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Crossmint from "../index";

export interface EditNftResponse {
    actionId?: string;
    action?: string;
    status?: string;
    data?: Crossmint.EditNftResponseData;
    startedAt?: Date;
    /**
     * The time this operation completed in UTC.
     *
     * This is only present when `status` is `succeeded`
     */
    completedAt?: Date;
    resource?: string;
}
