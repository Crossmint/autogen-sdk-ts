/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Crossmint from "../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization/index";
import * as errors from "../../../../errors/index";

export declare namespace Wallet {
    interface Options {
        environment?: core.Supplier<environments.CrossmintEnvironment | string>;
        apiKey: core.Supplier<string>;
        /** Override the Authorization header */
        authorization: core.Supplier<string>;
        /** Override the X-CLIENT-ID header */
        clientId: core.Supplier<string>;
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
        authorization?: string;
        /** Override the X-CLIENT-ID header */
        clientId?: string;
    }
}

export class Wallet {
    constructor(protected readonly _options: Wallet.Options) {}

    /**
     * Fetch the addresses of a user's Crossmint custodial wallets
     *
     * **API scope required**: `wallets.read`
     *
     * @param {Crossmint.FetchWalletRequest} request
     * @param {Wallet.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Crossmint.BadRequestError}
     * @throws {@link Crossmint.UnauthorizedError}
     *
     * @example
     *     await client.wallet.fetchWallet()
     */
    public async fetchWallet(
        request: Crossmint.FetchWalletRequest = {},
        requestOptions?: Wallet.RequestOptions
    ): Promise<Crossmint.Wallet[]> {
        const { userId, email } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (userId != null) {
            _queryParams["userId"] = userId;
        }

        if (email != null) {
            _queryParams["email"] = email;
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CrossmintEnvironment.Default,
                "v1-alpha1/wallets"
            ),
            method: "GET",
            headers: {
                "X-CLIENT-ID": await core.Supplier.get(this._options.clientId),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "crossmint",
                "X-Fern-SDK-Version": "0.0.7",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.wallet.fetchWallet.Response.parseOrThrow(_response.body, {
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
                case 401:
                    throw new Crossmint.UnauthorizedError(_response.error.body);
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
     * Create a new Crossmint custodial wallet for a user
     *
     * **API scope required**: `wallets.create`
     *
     * @param {Crossmint.CreateWalletRequest} request
     * @param {Wallet.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Crossmint.BadRequestError}
     * @throws {@link Crossmint.UnauthorizedError}
     *
     * @example
     *     await client.wallet.createWallet({
     *         email: "email",
     *         chain: Crossmint.AllChains.Arbitrum
     *     })
     */
    public async createWallet(
        request: Crossmint.CreateWalletRequest,
        requestOptions?: Wallet.RequestOptions
    ): Promise<Crossmint.CreateWalletResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CrossmintEnvironment.Default,
                "v1-alpha1/wallets"
            ),
            method: "POST",
            headers: {
                "X-CLIENT-ID": await core.Supplier.get(this._options.clientId),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "crossmint",
                "X-Fern-SDK-Version": "0.0.7",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.CreateWalletRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.CreateWalletResponse.parseOrThrow(_response.body, {
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
                case 401:
                    throw new Crossmint.UnauthorizedError(_response.error.body);
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
     * Fetch the NFTs in a provided wallet
     *
     * **API scope required**: `wallets:nfts.read`
     *
     * @param {string} identifier - The wallet identifier in the format of `<chain>:<address>`, `email:<email_address>:<chain>` or `userId:<userId>:<chain>`.
     * @param {Crossmint.FetchContentFromWalletRequest} request
     * @param {Wallet.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Crossmint.BadRequestError}
     *
     * @example
     *     await client.wallet.fetchContentFromWallet("identifier", {
     *         page: "page",
     *         perPage: "perPage"
     *     })
     */
    public async fetchContentFromWallet(
        identifier: string,
        request: Crossmint.FetchContentFromWalletRequest,
        requestOptions?: Wallet.RequestOptions
    ): Promise<Crossmint.FetchContentFromWalletResponse> {
        const { page, perPage } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        _queryParams["page"] = page;
        _queryParams["perPage"] = perPage;
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CrossmintEnvironment.Default,
                `2022-06-09/wallets/${encodeURIComponent(identifier)}/nfts`
            ),
            method: "GET",
            headers: {
                "X-CLIENT-ID": await core.Supplier.get(this._options.clientId),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "crossmint",
                "X-Fern-SDK-Version": "0.0.7",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.FetchContentFromWalletResponse.parseOrThrow(_response.body, {
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
        const authorizationValue = await core.Supplier.get(this._options.authorization);
        const apiKeyValue = await core.Supplier.get(this._options.apiKey);
        return { Authorization: authorizationValue, "X-API-KEY": apiKeyValue };
    }
}
