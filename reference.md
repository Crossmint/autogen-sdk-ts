# Reference

<details><summary><code>client.<a href="/src/Client.ts">transfer</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Transfer NFTs from one wallet to another wallet. Intended for wallets created with `userId` option.

**API scope required**: `wallets:nfts.transfer`

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.transfer();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Crossmint.TransferRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CrossmintClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

##

## Headless

<details><summary><code>client.headless.<a href="/src/api/resources/headless/client/Client.ts">createOrder</a>({ ...params }) -> Crossmint.CreateOrderResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a new order that can be used to complete a headless checkout.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.headless.createOrder({
    payment: {
        method: Crossmint.EvmPaymentMethods.ArbitrumSepolia,
        currency: Crossmint.EvmPaymentCurrency.Eth,
    },
    lineItems: {
        collectionLocator: "crossmint:<collectionId>",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Crossmint.CreateOrderRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Headless.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.headless.<a href="/src/api/resources/headless/client/Client.ts">getOrder</a>(orderId) -> Crossmint.OrderObject</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get specific order by ID

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.headless.getOrder("orderId");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**orderId:** `string`

This is the identifier for the order with UUID format.

**Example:** `9c82ef99-617f-497d-9abb-fd355291681b`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Headless.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.headless.<a href="/src/api/resources/headless/client/Client.ts">editOrder</a>(orderId, { ...params }) -> Crossmint.OrderObject</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Edit an existing order. You can update the recipient, the payment method, and/or the locale.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.headless.editOrder("orderId");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**orderId:** `string`

This is the identifier for the order with UUID format.

**Example:** `9c82ef99-617f-497d-9abb-fd355291681b`

</dd>
</dl>

<dl>
<dd>

**request:** `Crossmint.OrderDto`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Headless.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## NfTs

<details><summary><code>client.nfTs.<a href="/src/api/resources/nfTs/client/Client.ts">batchMintNft</a>(collectionId, { ...params }) -> Crossmint.BatchMintResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Mint multiple NFTs with a single call and deliver them to a web3 wallet or an email address

**API scope required** `nfts.create`

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.nfTs.batchMintNft("default-solana", {
    nfts: [{}],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**collectionId:** `string`

This is the identifier for the collection related to the request. Every project has default collections: `default-solana` and `default-polygon`.

The [create-collection](/api-reference/minting/collection/create-collection) API will result in collections with UUID formatted `collectionId`.
**Example:** `9c82ef99-617f-497d-9abb-fd355291681b`

The [create-collection-idempotent](/api-reference/minting/collection/create-collection-idempotent) API allows you to specify an arbitrary identifier during the intitial request.
**Example:** `your-custom-identifer`

</dd>
</dl>

<dl>
<dd>

**request:** `Crossmint.BatchMintNftRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NfTs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.nfTs.<a href="/src/api/resources/nfTs/client/Client.ts">mintStatusList</a>(collectionId, { ...params }) -> Crossmint.NftObjectEvm[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a list of all the NFTs in a given collection.

**API scope required**: `nfts.read`

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.nfTs.mintStatusList("default-solana", {
    page: 1.1,
    perPage: 20,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**collectionId:** `string`

This is the identifier for the collection related to the request. Every project has default collections: `default-solana` and `default-polygon`.

The [create-collection](/api-reference/minting/collection/create-collection) API will result in collections with UUID formatted `collectionId`.
**Example:** `9c82ef99-617f-497d-9abb-fd355291681b`

The [create-collection-idempotent](/api-reference/minting/collection/create-collection-idempotent) API allows you to specify an arbitrary identifier during the intitial request.
**Example:** `your-custom-identifer`

</dd>
</dl>

<dl>
<dd>

**request:** `Crossmint.MintStatusListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NfTs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.nfTs.<a href="/src/api/resources/nfTs/client/Client.ts">mintNft</a>(collectionId, { ...params }) -> Crossmint.MintNftResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Mint your NFTs and deliver them to a web3 wallet or an email address

**API scope required**: `nfts.create`

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.nfTs.mintNft("default-solana", {
    metadata: {
        name: "Crossmint Example NFT",
        image: "https://www.crossmint.com/assets/crossmint/logo.png",
        description: "My NFT created via the mint API!",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**collectionId:** `string`

This is the identifier for the collection related to the request. Every project has default collections: `default-solana` and `default-polygon`.

The [create-collection](/api-reference/minting/collection/create-collection) API will result in collections with UUID formatted `collectionId`.
**Example:** `9c82ef99-617f-497d-9abb-fd355291681b`

The [create-collection-idempotent](/api-reference/minting/collection/create-collection-idempotent) API allows you to specify an arbitrary identifier during the intitial request.
**Example:** `your-custom-identifer`

</dd>
</dl>

<dl>
<dd>

**request:** `Crossmint.MintNftRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NfTs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.nfTs.<a href="/src/api/resources/nfTs/client/Client.ts">mintSft</a>(collectionId, { ...params }) -> Crossmint.MintSftResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Mint your SFTs and deliver them to a web3 wallet or an email address

**API scope required**: `nfts.create`

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.nfTs.mintSft("default-solana", {
    templateId: "silver-pass",
    recipient: "email:testy@crossmint.io:polygon",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**collectionId:** `string`

This is the identifier for the collection related to the request. Every project has default collections: `default-solana` and `default-polygon`.

The [create-collection](/api-reference/minting/collection/create-collection) API will result in collections with UUID formatted `collectionId`.
**Example:** `9c82ef99-617f-497d-9abb-fd355291681b`

The [create-collection-idempotent](/api-reference/minting/collection/create-collection-idempotent) API allows you to specify an arbitrary identifier during the intitial request.
**Example:** `your-custom-identifer`

</dd>
</dl>

<dl>
<dd>

**request:** `Crossmint.MintSftRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NfTs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.nfTs.<a href="/src/api/resources/nfTs/client/Client.ts">mintStatus</a>(collectionId, id) -> Crossmint.MintStatusSolana200</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get the status and associated information for a mint operation.

**API scope required**: `nfts.read`

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.nfTs.mintStatus("default-solana", "id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**collectionId:** `string`

This is the identifier for the collection related to the request. Every project has default collections: `default-solana` and `default-polygon`.

The [create-collection](/api-reference/minting/collection/create-collection) API will result in collections with UUID formatted `collectionId`.
**Example:** `9c82ef99-617f-497d-9abb-fd355291681b`

The [create-collection-idempotent](/api-reference/minting/collection/create-collection-idempotent) API allows you to specify an arbitrary identifier during the intitial request.
**Example:** `your-custom-identifer`

</dd>
</dl>

<dl>
<dd>

**id:** `string` — Unique ID of the minted NFT returned in the mint response

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NfTs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.nfTs.<a href="/src/api/resources/nfTs/client/Client.ts">mintNftIdempotent</a>(collectionId, id, { ...params }) -> Crossmint.MintNftIdempotentResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This pathway allows you to mint NFTs and guarantee idempotency
to ensure you never double mint for the same NFT.

**API scope required**: `nfts.create`

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.nfTs.mintNftIdempotent("default-solana", "my-idempotency-key", {
    recipient: "email:testy@crossmint.io:polygon",
    metadata: {
        name: "Crossmint Example NFT",
        image: "https://www.crossmint.com/assets/crossmint/logo.png",
        description: "My NFT created via the mint API!",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**collectionId:** `string`

This is the identifier for the collection related to the request. Every project has default collections: `default-solana` and `default-polygon`.

The [create-collection](/api-reference/minting/collection/create-collection) API will result in collections with UUID formatted `collectionId`.
**Example:** `9c82ef99-617f-497d-9abb-fd355291681b`

The [create-collection-idempotent](/api-reference/minting/collection/create-collection-idempotent) API allows you to specify an arbitrary identifier during the intitial request.
**Example:** `your-custom-identifer`

</dd>
</dl>

<dl>
<dd>

**id:** `string` — Custom ID of the NFT, which is used as an idempotency key

</dd>
</dl>

<dl>
<dd>

**request:** `Crossmint.MintNftIdempotentRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NfTs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.nfTs.<a href="/src/api/resources/nfTs/client/Client.ts">burnNft</a>(collectionId, id) -> Crossmint.BurnNftResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Burn a minted NFT.

**API scope required**: `nfts.delete`

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.nfTs.burnNft("default-solana", "id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**collectionId:** `string`

This is the identifier for the collection related to the request. Every project has default collections: `default-solana` and `default-polygon`.

The [create-collection](/api-reference/minting/collection/create-collection) API will result in collections with UUID formatted `collectionId`.
**Example:** `9c82ef99-617f-497d-9abb-fd355291681b`

The [create-collection-idempotent](/api-reference/minting/collection/create-collection-idempotent) API allows you to specify an arbitrary identifier during the intitial request.
**Example:** `your-custom-identifer`

</dd>
</dl>

<dl>
<dd>

**id:** `string` — Unique ID of the minted NFT returned in the mint response

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NfTs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.nfTs.<a href="/src/api/resources/nfTs/client/Client.ts">editNft</a>(collectionId, id, { ...params }) -> Crossmint.EditNftResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Edit a minted NFT's metadata on IPFS.

If you are using a custom baseURI, invoking this will overwrite the specific tokenURI for the edited token.

**API scope required**: `nfts.update`

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.nfTs.editNft("default-solana", "id", {
    metadata: {
        name: "Crossmint Example NFT",
        image: "https://www.crossmint.com/assets/crossmint/logo.png",
        description: "My NFT created via the mint API!",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**collectionId:** `string`

This is the identifier for the collection related to the request. Every project has default collections: `default-solana` and `default-polygon`.

The [create-collection](/api-reference/minting/collection/create-collection) API will result in collections with UUID formatted `collectionId`.
**Example:** `9c82ef99-617f-497d-9abb-fd355291681b`

The [create-collection-idempotent](/api-reference/minting/collection/create-collection-idempotent) API allows you to specify an arbitrary identifier during the intitial request.
**Example:** `your-custom-identifer`

</dd>
</dl>

<dl>
<dd>

**id:** `string` — Unique ID of the minted NFT returned in the mint response

</dd>
</dl>

<dl>
<dd>

**request:** `Crossmint.EditNftRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NfTs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.nfTs.<a href="/src/api/resources/nfTs/client/Client.ts">burnNftByLocator</a>(locator) -> Crossmint.BurnNftResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Burn a minted NFT using a Crossmint NFT locator.

**API scope required**: `nfts.delete`

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.nfTs.burnNftByLocator("polygon:0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045:52");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**locator:** `string` — The locator of the NFT, which includes the blockchain, contract address, and token ID.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NfTs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.nfTs.<a href="/src/api/resources/nfTs/client/Client.ts">editNftByLocator</a>(locator, { ...params }) -> Crossmint.EditNftResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Edit a minted NFT's metadata using a Crossmint NFT locator.

**API scope required**: `nfts.update`

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.nfTs.editNftByLocator("polygon:0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045:52", {
    metadata: {
        name: "Crossmint Example NFT",
        image: "https://www.crossmint.com/assets/crossmint/logo.png",
        description: "My NFT created via the mint API!",
    },
    reuploadLinkedFiles: true,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**locator:** `string` — The locator of the NFT, which includes the blockchain, contract address, and token ID.

</dd>
</dl>

<dl>
<dd>

**request:** `Crossmint.EditNftByLocatorRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NfTs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## NftCollections

<details><summary><code>client.nftCollections.<a href="/src/api/resources/nftCollections/client/Client.ts">listCollections</a>() -> Crossmint.ListCollectionsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List all collections created under the current Crossmint project

**API scope required**: `collections.read`

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.nftCollections.listCollections();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `NftCollections.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.nftCollections.<a href="/src/api/resources/nftCollections/client/Client.ts">createCollection</a>({ ...params }) -> Crossmint.CreateCollectionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a collection that you can mint NFTs/SFTs from

**API scope required**: `collections.create`

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.nftCollections.createCollection({
    chain: Crossmint.CreateCollectionBodyChain.Aptos,
    metadata: {
        name: "Sample NFT Collection",
        description: "This is a sample NFT collection",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Crossmint.CreateCollectionBody`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NftCollections.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.nftCollections.<a href="/src/api/resources/nftCollections/client/Client.ts">collectionInfo</a>(collectionId) -> Crossmint.GetCollectionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get information about a specific collection.

**API scope required**: `collections.read`

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.nftCollections.collectionInfo("default-solana");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**collectionId:** `string`

This is the identifier for the collection related to the request. Every project has default collections: `default-solana` and `default-polygon`.

The [create-collection](/api-reference/minting/collection/create-collection) API will result in collections with UUID formatted `collectionId`.
**Example:** `9c82ef99-617f-497d-9abb-fd355291681b`

The [create-collection-idempotent](/api-reference/minting/collection/create-collection-idempotent) API allows you to specify an arbitrary identifier during the intitial request.
**Example:** `your-custom-identifer`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NftCollections.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.nftCollections.<a href="/src/api/resources/nftCollections/client/Client.ts">createCollectionCustom</a>(collectionId, { ...params }) -> Crossmint.CreateCollectionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a collection that you can mint NFTs/SFTs from. This API is idempotent,
if you call it multiple times with the same ID, only one will be created.

**API scope required**: `collections.create`

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.nftCollections.createCollectionCustom("default-solana", {
    chain: Crossmint.CreateCollectionBodyChain.Aptos,
    metadata: {
        name: "Sample NFT Collection",
        description: "This is a sample NFT collection",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**collectionId:** `string`

This is the identifier for the collection related to the request. Every project has default collections: `default-solana` and `default-polygon`.

The [create-collection](/api-reference/minting/collection/create-collection) API will result in collections with UUID formatted `collectionId`.
**Example:** `9c82ef99-617f-497d-9abb-fd355291681b`

The [create-collection-idempotent](/api-reference/minting/collection/create-collection-idempotent) API allows you to specify an arbitrary identifier during the intitial request.
**Example:** `your-custom-identifer`

</dd>
</dl>

<dl>
<dd>

**request:** `Crossmint.CreateCollectionBody`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NftCollections.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.nftCollections.<a href="/src/api/resources/nftCollections/client/Client.ts">updateCollection</a>(collectionId, { ...params }) -> Crossmint.UpdateCollectionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update the sales details of a collection

**API scope required**: `collections.update`

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.nftCollections.updateCollection("default-solana");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**collectionId:** `string`

This is the identifier for the collection related to the request. Every project has default collections: `default-solana` and `default-polygon`.

The [create-collection](/api-reference/minting/collection/create-collection) API will result in collections with UUID formatted `collectionId`.
**Example:** `9c82ef99-617f-497d-9abb-fd355291681b`

The [create-collection-idempotent](/api-reference/minting/collection/create-collection-idempotent) API allows you to specify an arbitrary identifier during the intitial request.
**Example:** `your-custom-identifer`

</dd>
</dl>

<dl>
<dd>

**request:** `Crossmint.UpdateCollectionRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NftCollections.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.nftCollections.<a href="/src/api/resources/nftCollections/client/Client.ts">getRoyaltyInformation</a>(collectionId) -> Crossmint.GetRoyaltyInformationResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Fetch the royalty configuration for a collection, from its current state
in the blockchain.

This API is only supported on EVM chains.

If you call GET too soon after PUT/DELETE,
you may not yet see your latest changes, as they can take a few seconds to
record on the blockchain.

**API scope required**: `collections.read`

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.nftCollections.getRoyaltyInformation("default-solana");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**collectionId:** `string`

This is the identifier for the collection related to the request. Every project has default collections: `default-solana` and `default-polygon`.

The [create-collection](/api-reference/minting/collection/create-collection) API will result in collections with UUID formatted `collectionId`.
**Example:** `9c82ef99-617f-497d-9abb-fd355291681b`

The [create-collection-idempotent](/api-reference/minting/collection/create-collection-idempotent) API allows you to specify an arbitrary identifier during the intitial request.
**Example:** `your-custom-identifer`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NftCollections.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.nftCollections.<a href="/src/api/resources/nftCollections/client/Client.ts">editRoyaltyInformation</a>(collectionId, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Configure royalties for all NFTs in a collection.

This API is only supported for EVM chains and implements the EIP-2981 standard.

**API scope required**: `collections.update`

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.nftCollections.editRoyaltyInformation("default-solana");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**collectionId:** `string`

This is the identifier for the collection related to the request. Every project has default collections: `default-solana` and `default-polygon`.

The [create-collection](/api-reference/minting/collection/create-collection) API will result in collections with UUID formatted `collectionId`.
**Example:** `9c82ef99-617f-497d-9abb-fd355291681b`

The [create-collection-idempotent](/api-reference/minting/collection/create-collection-idempotent) API allows you to specify an arbitrary identifier during the intitial request.
**Example:** `your-custom-identifer`

</dd>
</dl>

<dl>
<dd>

**request:** `Crossmint.EditRoyaltyInformationRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NftCollections.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.nftCollections.<a href="/src/api/resources/nftCollections/client/Client.ts">disableRoyaltyInformation</a>(collectionId) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Remove all royalties from a given collection. No new NFT sales will yield royalties to the creator.

This API is only supported on EVM Chains.

**API scope required**: `collections.update`

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.nftCollections.disableRoyaltyInformation("default-solana");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**collectionId:** `string`

This is the identifier for the collection related to the request. Every project has default collections: `default-solana` and `default-polygon`.

The [create-collection](/api-reference/minting/collection/create-collection) API will result in collections with UUID formatted `collectionId`.
**Example:** `9c82ef99-617f-497d-9abb-fd355291681b`

The [create-collection-idempotent](/api-reference/minting/collection/create-collection-idempotent) API allows you to specify an arbitrary identifier during the intitial request.
**Example:** `your-custom-identifer`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NftCollections.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.nftCollections.<a href="/src/api/resources/nftCollections/client/Client.ts">getBaseUri</a>(collectionId) -> Crossmint.GetBaseUriResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get the Base URI of a collection as it appears on-chain.

**API scope required**: `collections.read`

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.nftCollections.getBaseUri("default-solana");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**collectionId:** `string`

This is the identifier for the collection related to the request. Every project has default collections: `default-solana` and `default-polygon`.

The [create-collection](/api-reference/minting/collection/create-collection) API will result in collections with UUID formatted `collectionId`.
**Example:** `9c82ef99-617f-497d-9abb-fd355291681b`

The [create-collection-idempotent](/api-reference/minting/collection/create-collection-idempotent) API allows you to specify an arbitrary identifier during the intitial request.
**Example:** `your-custom-identifer`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NftCollections.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.nftCollections.<a href="/src/api/resources/nftCollections/client/Client.ts">setBaseUri</a>(collectionId, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update the Base URI of a collection. Setting the baseURI enables
excluding the metadata param when minting. Tokens minted without the metadata
param will have a tokenURI of:

`{BASE_URI}/{TOKEN_ID}`

This API is currently only supported on EVM Chains.

**API scope required**: `collections.update`

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.nftCollections.setBaseUri("default-solana");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**collectionId:** `string`

This is the identifier for the collection related to the request. Every project has default collections: `default-solana` and `default-polygon`.

The [create-collection](/api-reference/minting/collection/create-collection) API will result in collections with UUID formatted `collectionId`.
**Example:** `9c82ef99-617f-497d-9abb-fd355291681b`

The [create-collection-idempotent](/api-reference/minting/collection/create-collection-idempotent) API allows you to specify an arbitrary identifier during the intitial request.
**Example:** `your-custom-identifer`

</dd>
</dl>

<dl>
<dd>

**request:** `Crossmint.SetBaseUriRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NftCollections.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.nftCollections.<a href="/src/api/resources/nftCollections/client/Client.ts">getTransferability</a>(collectionId) -> Crossmint.GetTransferabilityResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get the transferable status of a collection.

This API is only supported on EVM chains.

You must contact sales to gain access to this API.

**API scope required**: `collections.read`

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.nftCollections.getTransferability("default-solana");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**collectionId:** `string`

This is the identifier for the collection related to the request. Every project has default collections: `default-solana` and `default-polygon`.

The [create-collection](/api-reference/minting/collection/create-collection) API will result in collections with UUID formatted `collectionId`.
**Example:** `9c82ef99-617f-497d-9abb-fd355291681b`

The [create-collection-idempotent](/api-reference/minting/collection/create-collection-idempotent) API allows you to specify an arbitrary identifier during the intitial request.
**Example:** `your-custom-identifer`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NftCollections.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.nftCollections.<a href="/src/api/resources/nftCollections/client/Client.ts">setTransferability</a>(collectionId, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update the transferable status of a collection.

This API is only supported on EVM chains.
You must contact sales to gain access to this API.

**API scope required**: `collections.update`

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.nftCollections.setTransferability("default-solana", {
    value: true,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**collectionId:** `string`

This is the identifier for the collection related to the request. Every project has default collections: `default-solana` and `default-polygon`.

The [create-collection](/api-reference/minting/collection/create-collection) API will result in collections with UUID formatted `collectionId`.
**Example:** `9c82ef99-617f-497d-9abb-fd355291681b`

The [create-collection-idempotent](/api-reference/minting/collection/create-collection-idempotent) API allows you to specify an arbitrary identifier during the intitial request.
**Example:** `your-custom-identifer`

</dd>
</dl>

<dl>
<dd>

**request:** `Crossmint.SetTransferabilityRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NftCollections.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## NftTemplates

<details><summary><code>client.nftTemplates.<a href="/src/api/resources/nftTemplates/client/Client.ts">getAllTemplates</a>(collectionId, { ...params }) -> Crossmint.TemplateResponse[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get all of the templates for a collection

**API scope required**: `nfts.read`

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.nftTemplates.getAllTemplates("default-solana", {
    page: 1.1,
    perPage: 20,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**collectionId:** `string`

This is the identifier for the collection related to the request. Every project has default collections: `default-solana` and `default-polygon`.

The [create-collection](/api-reference/minting/collection/create-collection) API will result in collections with UUID formatted `collectionId`.
**Example:** `9c82ef99-617f-497d-9abb-fd355291681b`

The [create-collection-idempotent](/api-reference/minting/collection/create-collection-idempotent) API allows you to specify an arbitrary identifier during the intitial request.
**Example:** `your-custom-identifer`

</dd>
</dl>

<dl>
<dd>

**request:** `Crossmint.GetAllTemplatesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NftTemplates.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.nftTemplates.<a href="/src/api/resources/nftTemplates/client/Client.ts">createTemplate</a>(collectionId, { ...params }) -> Crossmint.TemplateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a token template, that NFTs or SFTs may be minted from

**API scope required**: `nfts.create`

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.nftTemplates.createTemplate("idempotent-collection-name", {});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**collectionId:** `string` — The ID of the named collection, used to create new tokens

</dd>
</dl>

<dl>
<dd>

**request:** `Crossmint.CreateTemplateBody`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NftTemplates.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.nftTemplates.<a href="/src/api/resources/nftTemplates/client/Client.ts">getTemplate</a>(collectionId, templateId) -> Crossmint.TemplateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Fetch the contents of a token template.

**API scope required**: `nfts.read`

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.nftTemplates.getTemplate("default-solana", "templateId");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**collectionId:** `string`

This is the identifier for the collection related to the request. Every project has default collections: `default-solana` and `default-polygon`.

The [create-collection](/api-reference/minting/collection/create-collection) API will result in collections with UUID formatted `collectionId`.
**Example:** `9c82ef99-617f-497d-9abb-fd355291681b`

The [create-collection-idempotent](/api-reference/minting/collection/create-collection-idempotent) API allows you to specify an arbitrary identifier during the intitial request.
**Example:** `your-custom-identifer`

</dd>
</dl>

<dl>
<dd>

**templateId:** `string` — The template ID

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NftTemplates.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.nftTemplates.<a href="/src/api/resources/nftTemplates/client/Client.ts">createTemplateIdempotent</a>(collectionId, templateId, { ...params }) -> Crossmint.TemplateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a token template with preconfigured metadata

**API scope required**: `nfts.create`

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.nftTemplates.createTemplateIdempotent("default-solana", "templateId", {});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**collectionId:** `string`

This is the identifier for the collection related to the request. Every project has default collections: `default-solana` and `default-polygon`.

The [create-collection](/api-reference/minting/collection/create-collection) API will result in collections with UUID formatted `collectionId`.
**Example:** `9c82ef99-617f-497d-9abb-fd355291681b`

The [create-collection-idempotent](/api-reference/minting/collection/create-collection-idempotent) API allows you to specify an arbitrary identifier during the intitial request.
**Example:** `your-custom-identifer`

</dd>
</dl>

<dl>
<dd>

**templateId:** `string` — The template ID

</dd>
</dl>

<dl>
<dd>

**request:** `Crossmint.CreateTemplateBody`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NftTemplates.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.nftTemplates.<a href="/src/api/resources/nftTemplates/client/Client.ts">deleteTemplate</a>(collectionId, templateId) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a Token template.

**API scope required**: `nfts.delete`

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.nftTemplates.deleteTemplate("default-solana", "templateId");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**collectionId:** `string`

This is the identifier for the collection related to the request. Every project has default collections: `default-solana` and `default-polygon`.

The [create-collection](/api-reference/minting/collection/create-collection) API will result in collections with UUID formatted `collectionId`.
**Example:** `9c82ef99-617f-497d-9abb-fd355291681b`

The [create-collection-idempotent](/api-reference/minting/collection/create-collection-idempotent) API allows you to specify an arbitrary identifier during the intitial request.
**Example:** `your-custom-identifer`

</dd>
</dl>

<dl>
<dd>

**templateId:** `string` — The template ID

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NftTemplates.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.nftTemplates.<a href="/src/api/resources/nftTemplates/client/Client.ts">editTemplate</a>(collectionId, templateId, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Edit a Token template.

**API scope required**: `nfts.update`

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.nftTemplates.editTemplate("default-solana", "templateId", {});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**collectionId:** `string`

This is the identifier for the collection related to the request. Every project has default collections: `default-solana` and `default-polygon`.

The [create-collection](/api-reference/minting/collection/create-collection) API will result in collections with UUID formatted `collectionId`.
**Example:** `9c82ef99-617f-497d-9abb-fd355291681b`

The [create-collection-idempotent](/api-reference/minting/collection/create-collection-idempotent) API allows you to specify an arbitrary identifier during the intitial request.
**Example:** `your-custom-identifer`

</dd>
</dl>

<dl>
<dd>

**templateId:** `string` — The template ID

</dd>
</dl>

<dl>
<dd>

**request:** `Crossmint.EditTemplateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NftTemplates.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Actions

<details><summary><code>client.actions.<a href="/src/api/resources/actions/client/Client.ts">getActionStatus</a>(actionId) -> Crossmint.GetActionStatusResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Use this API to poll for the status of asynchonous actions such as NFT mints, transfers, etc.

**API scope required**: `nfts.create`

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.actions.getActionStatus("actionId");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**actionId:** `string` — The actionId.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Actions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Registration

<details><summary><code>client.registration.<a href="/src/api/resources/registration/client/Client.ts">registerNftCollection</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Register your NFT collection with Crossmint

**This API is subject to change as it is currently in its alpha form.**

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.registration.registerNftCollection({
    chain: Crossmint.RegisterNftCollectionRequestChain.Solana,
    contractType: Crossmint.RegisterNftCollectionRequestContractType.CandyMachine,
    args: {
        candyMachineId: "candyMachineId",
    },
    metadata: {
        title: "title",
        description: "description",
        imageUrl: "imageUrl",
    },
    ownership: Crossmint.RegisterNftCollectionRequestOwnership.External,
    category: Crossmint.RegisterNftCollectionRequestCategory.Loyalty,
    scopes: [Crossmint.RegisterNftCollectionRequestScopesItem.PaymentsCreditCard],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Crossmint.RegisterNftCollectionRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Registration.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.registration.<a href="/src/api/resources/registration/client/Client.ts">updateNftCollection</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update your collection information registered on Crossmint

**This API is subject to change as it is currently in its alpha form.**

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.registration.updateNftCollection({
    clientId: "clientId",
    metadata: {
        title: "title",
        imageUrl: "imageUrl",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Crossmint.UpdateNftCollectionRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Registration.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Checkout

<details><summary><code>client.checkout.<a href="/src/api/resources/checkout/client/Client.ts">mint</a>({ ...params }) -> Crossmint.CheckoutMintSuccess</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

**API scope required**: `nfts.checkout` Begin the checkout process for a mint
**This API is subject to change as it is currently in its alpha form.**

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.checkout.mint({
    clientId: "clientId",
    userId: "userId",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Crossmint.CheckoutMintRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Checkout.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## QuotePrice

<details><summary><code>client.quotePrice.<a href="/src/api/resources/quotePrice/client/Client.ts">quote</a>({ ...params }) -> Crossmint.QuoteResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get the price of a transaction hosted through Crossmint, inclusive of all fees.

**This API is subject to change as it is currently in its alpha form.**

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.quotePrice.quote({
    nativePrice: "nativePrice",
    quoteCurrency: Crossmint.QuoteRequestQuoteCurrency.Usd,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Crossmint.QuoteRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `QuotePrice.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## VerifiableCredentials

<details><summary><code>client.verifiableCredentials.<a href="/src/api/resources/verifiableCredentials/client/Client.ts">verifyCredential</a>({ ...params }) -> Crossmint.VerifyCredentialResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Verify that a credential is valid.

**API scope required** `credentials.read`

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.verifiableCredentials.verifyCredential({
    credential: {
        key: "value",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Crossmint.VerifyCredentialRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VerifiableCredentials.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.verifiableCredentials.<a href="/src/api/resources/verifiableCredentials/client/Client.ts">vcCreateTemplate</a>({ ...params }) -> string</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a template (similar to an nft collection) for issuing verifiable credentials.

**API scope required** `credentials:template.create`

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.verifiableCredentials.vcCreateTemplate({
    metadata: {
        name: "Verifiable Credential",
        description: "The owner of this credential is authorized.",
    },
    credentials: {
        type: "degreeForMastersStudent",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Crossmint.VcCreateTemplateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VerifiableCredentials.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.verifiableCredentials.<a href="/src/api/resources/verifiableCredentials/client/Client.ts">getVc</a>(collectionId, id) -> Record<string, unknown></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a verifiable credential by the ID associated with the minted NFT.

This ID will have the format: `<UUID>`. For example: `d7eb777b-e9b4-4f34-ab5f-ce199111166a`

**API scope required** `credentials.read`. This endpoint will not work with a client side API key.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.verifiableCredentials.getVc("collectionId", "id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**collectionId:** `string` — Collection id (template id)

</dd>
</dl>

<dl>
<dd>

**id:** `string` — UUID of the NFT returned in the NFT creation response. Format is: `<UUID>`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VerifiableCredentials.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.verifiableCredentials.<a href="/src/api/resources/verifiableCredentials/client/Client.ts">getVcById</a>(id) -> Record<string, unknown></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a verifiable credential by the ID associated with it.

This ID will have the format: `urn:uuid:<UUID>`. For example: `urn:uuid:64f9877d-a19a-4205-8d61-f8c2abed5766`

**API scope required** `credentials.read`. This enpoint will work also with a client side API key.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.verifiableCredentials.getVcById("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Unique ID of the credential as returned in the NFT creation response. Format is: `urn:uuid:<UUID>`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VerifiableCredentials.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.verifiableCredentials.<a href="/src/api/resources/verifiableCredentials/client/Client.ts">revokeCredential</a>(id) -> Crossmint.BurnNftResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Revoke a verifiable credential by the credential ID.
This involves burning the associated nft.

This ID will have the format: `urn:uuid:<UUID>`. For example: `urn:uuid:64f9877d-a19a-4205-8d61-f8c2abed5766`

**API scope required** `credentials.create`.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.verifiableCredentials.revokeCredential("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Unique ID of the credential as returned in the NFT creation response. Format is: `urn:uuid:<UUID>`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VerifiableCredentials.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.verifiableCredentials.<a href="/src/api/resources/verifiableCredentials/client/Client.ts">getVcByLocator</a>(nftLocator) -> Record<string, unknown></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a verifiable credential by the NFT locator.

This locator will have the format: `<chain>:<contract_address>:<tokenId>`.
For example: `polygon:0x1234abcde...:1`

**API scope required** `credentials.read`. This enpoint will work also with a client side API key.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.verifiableCredentials.getVcByLocator("nftLocator");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**nftLocator:** `string` — NFT on chain locator, in the format of `<chain>:<contract_address>:<tokenId>`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VerifiableCredentials.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.verifiableCredentials.<a href="/src/api/resources/verifiableCredentials/client/Client.ts">issueVc</a>(templateId, { ...params }) -> Crossmint.IssueVcResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Issue a verifiable credential. Deliver to a web3 wallet or email address.

**API scope required** `credentials.create`

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.verifiableCredentials.issueVc("default", {
    recipient: "polygon:0x1234abcde... or email:<email_address>:polygon",
    credential: {
        subject: {
            subjectName: "foo",
            subjectAge: 20,
            claim: "bar",
        },
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**templateId:** `string` — Template id of a credential enabled collection

</dd>
</dl>

<dl>
<dd>

**request:** `Crossmint.IssueVcRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VerifiableCredentials.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.verifiableCredentials.<a href="/src/api/resources/verifiableCredentials/client/Client.ts">createType</a>({ ...params }) -> Crossmint.CreateTypeResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a type with a random UUID. This is how you define a custom schema.

**API scope required** `credentials.create`

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.verifiableCredentials.createType({
    credentialSubjectSchema: [
        {
            name: "username",
            type: "string",
        },
        {
            name: "courses_completed",
            type: "uint64",
        },
        {
            name: "courses",
            type: "Course[]",
        },
    ],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Crossmint.CreateTypeRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VerifiableCredentials.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.verifiableCredentials.<a href="/src/api/resources/verifiableCredentials/client/Client.ts">getType</a>(typeName) -> Crossmint.GetTypeResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get the schema of a given type by name

**API scope required** `credentials.read`

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.verifiableCredentials.getType("typeName");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**typeName:** `string` — The name of the type

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VerifiableCredentials.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.verifiableCredentials.<a href="/src/api/resources/verifiableCredentials/client/Client.ts">createTypeIdempotent</a>(typeName, { ...params }) -> Crossmint.CreateTypeIdempotentResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a type with a given name. This is how you define a custom schema.

**API scope required** `credentials.create`

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.verifiableCredentials.createTypeIdempotent("typeName", {
    credentialSubjectSchema: [
        {
            name: "username",
            type: "string",
        },
        {
            name: "courses_completed",
            type: "uint64",
        },
        {
            name: "courses",
            type: "Course[]",
        },
    ],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**typeName:** `string` — The name of the type

</dd>
</dl>

<dl>
<dd>

**request:** `Crossmint.CreateTypeIdempotentRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VerifiableCredentials.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Wallet

<details><summary><code>client.wallet.<a href="/src/api/resources/wallet/client/Client.ts">fetchWallet</a>({ ...params }) -> Crossmint.Wallet[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Fetch the addresses of a user's Crossmint custodial wallets

**API scope required**: `wallets.read`

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.wallet.fetchWallet();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Crossmint.FetchWalletRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Wallet.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.wallet.<a href="/src/api/resources/wallet/client/Client.ts">createWallet</a>({ ...params }) -> Crossmint.CreateWalletResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new Crossmint custodial wallet for a user

**API scope required**: `wallets.create`

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.wallet.createWallet({
    email: "email",
    chain: Crossmint.AllChains.Arbitrum,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Crossmint.CreateWalletRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Wallet.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.wallet.<a href="/src/api/resources/wallet/client/Client.ts">fetchContentFromWallet</a>(identifier, { ...params }) -> Crossmint.FetchContentFromWalletResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Fetch the NFTs in a provided wallet

**API scope required**: `wallets:nfts.read`

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.wallet.fetchContentFromWallet("identifier", {
    page: "page",
    perPage: "perPage",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**identifier:** `string` — The wallet identifier in the format of `<chain>:<address>`, `email:<email_address>:<chain>` or `userId:<userId>:<chain>`.

</dd>
</dl>

<dl>
<dd>

**request:** `Crossmint.FetchContentFromWalletRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Wallet.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Sign

<details><summary><code>client.sign.<a href="/src/api/resources/sign/client/Client.ts">message</a>(chain, address, { ...params }) -> Crossmint.SignMessageResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Sign a message using a custodial wallet's key

**API scope required**: `wallets:messages.sign`

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sign.message(Crossmint.EvmChains.Arbitrum, "address", {
    message: "message",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**chain:** `Crossmint.EvmChains` — The blockchain network you are using.

</dd>
</dl>

<dl>
<dd>

**address:** `string` — The wallet address you want to sign the message with

</dd>
</dl>

<dl>
<dd>

**request:** `Crossmint.SignMessageRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Sign.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Transfer

<details><summary><code>client.transfer.<a href="/src/api/resources/transfer/client/Client.ts">walletsTransfer</a>({ ...params }) -> Crossmint.VerificationRequestSent</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Transfer NFTs from one wallet to another wallet. Intended for wallets created using `email` option.

**API scope required**: `wallets:nfts.transfer`

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.transfer.walletsTransfer({});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Crossmint.WalletsTransferRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Transfer.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>
