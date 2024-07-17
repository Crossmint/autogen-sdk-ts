import { CrossmintClient, CrossmintEnvironment } from "../../src";

describe("Integration", () => {
    it("Create Order", async () => {
        const client = new CrossmintClient({
            apiKey: process.env.CROSSMINT_API_KEY ?? "", 
            environment: CrossmintEnvironment.Staging
        })
        
        const create = await client.checkout.createOrder({
            "recipient": {
                "email": "jsmith@example.com"
            },
            "locale": "en-US",
            "payment": {
                "receiptEmail": "jsmith@example.com",
                "method": "arbitrum-sepolia",
                "currency": "eth"
            },
            "lineItems": {
                "collectionLocator": "crossmint:21251cb5-43b5-406a-9c1e-04342fbb36ee",
                "callData": {
                "totalPrice": "12.50"
                }
            }
        })
        expect(create).toBeTruthy();
        
        const response = await client.checkout.getOrder("08dbee92-1fff-4f5b-8ceb-91226e45631a");
        expect(response).toBeTruthy();
    });
});