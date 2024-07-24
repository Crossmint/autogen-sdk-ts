/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Verification category
 */
export type RegisterNftCollectionRequestCategory =
    | "loyalty"
    | "art"
    | "music"
    | "gaming"
    | "ticketing"
    | "charity"
    | "other";

export const RegisterNftCollectionRequestCategory = {
    Loyalty: "loyalty",
    Art: "art",
    Music: "music",
    Gaming: "gaming",
    Ticketing: "ticketing",
    Charity: "charity",
    Other: "other",
} as const;