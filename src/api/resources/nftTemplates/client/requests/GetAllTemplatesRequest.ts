/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         page: 1.1,
 *         perPage: 20
 *     }
 */
export interface GetAllTemplatesRequest {
    /**
     * The page number you want to query, starting at 1
     */
    page: number;
    /**
     * How many items you want to be returned in the page.
     */
    perPage?: number;
}