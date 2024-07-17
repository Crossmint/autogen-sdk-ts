/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Recipient of the items being purchased. If specifying a recipient by wallet address, ensure the address is valid for the chain your **collection** is on, which may differ from the chain the payment is performed on.
 */
export interface RecipientWallet {
    walletAddress: string;
}