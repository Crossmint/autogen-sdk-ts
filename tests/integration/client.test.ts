import { CrossmintClient } from "../../src";

describe("Integration Tests", () => {
    it("Test Create Order", async () => {
        const client = new CrossmintClient({
            apiKey: process.env.CROSSMINT_API_KEY ?? "",
            environment: process.env.CROSSMINT_BASE_URL ?? process.env.TESTS_BASE_URL,
        });
        const response = await client.headless.createOrder({
            payment: {
                method: "arbitrum-sepolia",
                currency: "eth",
            },
            lineItems: {
                collectionLocator: "crossmint:<collectionId>",
            },
        });
        const expected = {
            clientSecret: "_removed_",
            order: {
                orderId: "b2959ca5-65e4-466a-bd26-1bd05cb4f837",
                phase: "payment",
                locale: "en-US",
                lineItems: [
                    {
                        chain: "polygon-amoy",
                        quantity: 1,
                    },
                ],
                quote: {
                    status: "valid",
                    quotedAt: "2024-06-07T16:55:44.653Z",
                    expiresAt: "2024-06-07T17:55:44.653Z",
                    totalPrice: {
                        amount: "0.0001375741",
                        currency: "eth",
                    },
                },
                payment: {
                    status: "awaiting-payment",
                    method: "base-sepolia",
                    currency: "eth",
                    preparation: {
                        chain: "base-sepolia",
                        payerAddress: "0x1234abcd...",
                        serializedTransaction: "0x02f90.....",
                    },
                },
            },
        };
        expect(response).toEqual(expected);
    }, 10000);
});
