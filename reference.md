## Checkout

<details><summary> <code>client.checkout.<a href="./src/api/resources/checkout/client/Client.ts">createOrder</a>({ ...params }) -> Crossmint.CreateOrderResponse</code> </summary>

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

```ts
await client.checkout.createOrder({
    payment: {
        method: Crossmint.PaymentZeroMethod.ArbitrumSepolia,
        currency: Crossmint.PaymentZeroCurrency.Eth,
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

**request: `Crossmint.CheckoutCreateOrderRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Checkout.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>client.checkout.<a href="./src/api/resources/checkout/client/Client.ts">getOrder</a>(orderId) -> Crossmint.OrderObject</code> </summary>

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

```ts
await client.checkout.getOrder("orderId");
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

**orderId: `string`**

This is the identifier for the order with UUID format.

**Example:** `9c82ef99-617f-497d-9abb-fd355291681b`

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Checkout.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>client.checkout.<a href="./src/api/resources/checkout/client/Client.ts">editOrder</a>(orderId, { ...params }) -> Crossmint.OrderObject</code> </summary>

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

```ts
await client.checkout.editOrder("orderId");
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

**orderId: `string`**

This is the identifier for the order with UUID format.

**Example:** `9c82ef99-617f-497d-9abb-fd355291681b`

</dd>

</dl>

<dl>

<dd>

**request: `Crossmint.OrderDto`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Checkout.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>
