/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Crossmint from "../../../index";
import * as serializers from "../../../../serialization/index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace Headless {
    interface Options {
        environment?: core.Supplier<environments.CrossmintEnvironment | string>;
        apiKey?: core.Supplier<string | undefined>;
        /** Override the Authorization header */
        clientSecret?: core.Supplier<string | undefined>;
        fetcher?: core.FetchFunction;
    }

    interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
        /** Override the Authorization header */
        clientSecret?: string | undefined;
    }
}

export class Headless {
    constructor(protected readonly _options: Headless.Options = {}) {}

    /**
     * Creates a new order that can be used to complete a headless checkout.
     *
     * @param {Crossmint.CreateOrderRequest} request
     * @param {Headless.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Crossmint.BadRequestError}
     * @throws {@link Crossmint.ForbiddenError}
     * @throws {@link Crossmint.NotFoundError}
     * @throws {@link Crossmint.ServiceUnavailableError}
     *
     * @example
     *     await client.headless.createOrder({
     *         payment: {
     *             method: Crossmint.EvmPaymentMethods.ArbitrumSepolia,
     *             currency: Crossmint.EvmPaymentCurrency.Eth
     *         },
     *         lineItems: {
     *             collectionLocator: "crossmint:<collectionId>"
     *         }
     *     })
     */
    public async createOrder(
        request: Crossmint.CreateOrderRequest,
        requestOptions?: Headless.RequestOptions
    ): Promise<Crossmint.CreateOrderResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CrossmintEnvironment.Staging,
                "2022-06-09/orders"
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "crossmint",
                "X-Fern-SDK-Version": "0.2.2",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.CreateOrderRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.CreateOrderResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Crossmint.BadRequestError(_response.error.body);
                case 403:
                    throw new Crossmint.ForbiddenError(_response.error.body);
                case 404:
                    throw new Crossmint.NotFoundError(_response.error.body);
                case 503:
                    throw new Crossmint.ServiceUnavailableError(_response.error.body);
                default:
                    throw new errors.CrossmintError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.CrossmintError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.CrossmintTimeoutError();
            case "unknown":
                throw new errors.CrossmintError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Get specific order by ID
     *
     * @param {string} orderId - This is the identifier for the order with UUID format.
     *
     *                           **Example:** `9c82ef99-617f-497d-9abb-fd355291681b`
     * @param {Headless.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Crossmint.BadRequestError}
     * @throws {@link Crossmint.ForbiddenError}
     * @throws {@link Crossmint.NotFoundError}
     * @throws {@link Crossmint.ServiceUnavailableError}
     *
     * @example
     *     await client.headless.getOrder("orderId")
     */
    public async getOrder(orderId: string, requestOptions?: Headless.RequestOptions): Promise<Crossmint.OrderObject> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CrossmintEnvironment.Staging,
                `2022-06-09/orders/${encodeURIComponent(orderId)}`
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "crossmint",
                "X-Fern-SDK-Version": "0.2.2",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.OrderObject.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Crossmint.BadRequestError(_response.error.body);
                case 403:
                    throw new Crossmint.ForbiddenError(_response.error.body);
                case 404:
                    throw new Crossmint.NotFoundError(_response.error.body);
                case 503:
                    throw new Crossmint.ServiceUnavailableError(_response.error.body);
                default:
                    throw new errors.CrossmintError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.CrossmintError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.CrossmintTimeoutError();
            case "unknown":
                throw new errors.CrossmintError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Edit an existing order. You can update the recipient, the payment method, and/or the locale.
     *
     * @param {string} orderId - This is the identifier for the order with UUID format.
     *
     *                           **Example:** `9c82ef99-617f-497d-9abb-fd355291681b`
     * @param {Crossmint.OrderDto} request
     * @param {Headless.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Crossmint.BadRequestError}
     * @throws {@link Crossmint.ForbiddenError}
     * @throws {@link Crossmint.NotFoundError}
     * @throws {@link Crossmint.ServiceUnavailableError}
     *
     * @example
     *     await client.headless.editOrder("orderId")
     */
    public async editOrder(
        orderId: string,
        request: Crossmint.OrderDto = {},
        requestOptions?: Headless.RequestOptions
    ): Promise<Crossmint.OrderObject> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CrossmintEnvironment.Staging,
                `2022-06-09/orders/${encodeURIComponent(orderId)}`
            ),
            method: "PATCH",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "crossmint",
                "X-Fern-SDK-Version": "0.2.2",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.OrderDto.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.OrderObject.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Crossmint.BadRequestError(_response.error.body);
                case 403:
                    throw new Crossmint.ForbiddenError(_response.error.body);
                case 404:
                    throw new Crossmint.NotFoundError(_response.error.body);
                case 503:
                    throw new Crossmint.ServiceUnavailableError(_response.error.body);
                default:
                    throw new errors.CrossmintError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.CrossmintError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.CrossmintTimeoutError();
            case "unknown":
                throw new errors.CrossmintError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getCustomAuthorizationHeaders() {
        const clientSecretValue = await core.Supplier.get(this._options.clientSecret);
        const apiKeyValue = await core.Supplier.get(this._options.apiKey);
        return { Authorization: clientSecretValue, "X-API-KEY": apiKeyValue };
    }
}
