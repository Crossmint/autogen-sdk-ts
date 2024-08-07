/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "./environments";
import * as core from "./core";
import * as Crossmint from "./api/index";
import urlJoin from "url-join";
import * as serializers from "./serialization/index";
import * as errors from "./errors/index";
import { Headless } from "./api/resources/headless/client/Client";
import { NfTs } from "./api/resources/nfTs/client/Client";
import { NftCollections } from "./api/resources/nftCollections/client/Client";
import { NftTemplates } from "./api/resources/nftTemplates/client/Client";
import { Actions } from "./api/resources/actions/client/Client";
import { Registration } from "./api/resources/registration/client/Client";
import { Checkout } from "./api/resources/checkout/client/Client";
import { QuotePrice } from "./api/resources/quotePrice/client/Client";
import { VerifiableCredentials } from "./api/resources/verifiableCredentials/client/Client";
import { Wallet } from "./api/resources/wallet/client/Client";
import { Sign } from "./api/resources/sign/client/Client";

export declare namespace CrossmintClient {
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

export class CrossmintClient {
    constructor(protected readonly _options: CrossmintClient.Options = {}) {}

    /**
     * Get usage data for a project.
     *
     * **API scope required** `projects:usage.read`
     *
     * @param {string} projectId - You can find your project ID in the Crossmint console.
     * @param {Crossmint.GetUsageRequest} request
     * @param {CrossmintClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Crossmint.BadRequestError}
     * @throws {@link Crossmint.ForbiddenError}
     * @throws {@link Crossmint.ServiceUnavailableError}
     *
     * @example
     *     await client.getUsage("94d09d19-25b4-45f7-8103-b48b7a2ae3cc", {
     *         startDate: "startDate"
     *     })
     */
    public async getUsage(
        projectId: string,
        request: Crossmint.GetUsageRequest,
        requestOptions?: CrossmintClient.RequestOptions
    ): Promise<Crossmint.UsageResponse> {
        const { dimension, startDate, endDate } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        _queryParams["dimension"] = dimension;
        _queryParams["startDate"] = startDate;
        if (endDate != null) {
            _queryParams["endDate"] = endDate;
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CrossmintEnvironment.Staging,
                `v1-alpha1/projects/${encodeURIComponent(projectId)}/usage`
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@crossmint/autogen-sdk-ts",
                "X-Fern-SDK-Version": "0.2.3",
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
            return serializers.UsageResponse.parseOrThrow(_response.body, {
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
     * Transfer NFTs from one wallet to another wallet. Intended for wallets created using `email` option.
     *
     * **API scope required**: `wallets:nfts.transfer`
     *
     * @param {Crossmint.WalletsRequest} request
     * @param {CrossmintClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Crossmint.BadRequestError}
     * @throws {@link Crossmint.UnauthorizedError}
     * @throws {@link Crossmint.NotFoundError}
     *
     * @example
     *     await client.wallets({})
     */
    public async wallets(
        request: Crossmint.WalletsRequest,
        requestOptions?: CrossmintClient.RequestOptions
    ): Promise<Crossmint.VerificationRequestSent> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CrossmintEnvironment.Staging,
                "v1-alpha1/wallets/transfer"
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@crossmint/autogen-sdk-ts",
                "X-Fern-SDK-Version": "0.2.3",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.WalletsRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.VerificationRequestSent.parseOrThrow(_response.body, {
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
                case 404:
                    throw new Crossmint.NotFoundError(_response.error.body);
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
     * Transfer NFTs from one wallet to another wallet. Intended for wallets created with `userId` option.
     *
     * **API scope required**: `wallets:nfts.transfer`
     *
     * @param {Crossmint.NftRequest} request
     * @param {CrossmintClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Crossmint.BadRequestError}
     * @throws {@link Crossmint.UnauthorizedError}
     *
     * @example
     *     await client.nft()
     */
    public async nft(
        request: Crossmint.NftRequest = {},
        requestOptions?: CrossmintClient.RequestOptions
    ): Promise<void> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CrossmintEnvironment.Staging,
                "v1-alpha1/transfer"
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@crossmint/autogen-sdk-ts",
                "X-Fern-SDK-Version": "0.2.3",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.NftRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return;
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

    protected _headless: Headless | undefined;

    public get headless(): Headless {
        return (this._headless ??= new Headless(this._options));
    }

    protected _nfTs: NfTs | undefined;

    public get nfTs(): NfTs {
        return (this._nfTs ??= new NfTs(this._options));
    }

    protected _nftCollections: NftCollections | undefined;

    public get nftCollections(): NftCollections {
        return (this._nftCollections ??= new NftCollections(this._options));
    }

    protected _nftTemplates: NftTemplates | undefined;

    public get nftTemplates(): NftTemplates {
        return (this._nftTemplates ??= new NftTemplates(this._options));
    }

    protected _actions: Actions | undefined;

    public get actions(): Actions {
        return (this._actions ??= new Actions(this._options));
    }

    protected _registration: Registration | undefined;

    public get registration(): Registration {
        return (this._registration ??= new Registration(this._options));
    }

    protected _checkout: Checkout | undefined;

    public get checkout(): Checkout {
        return (this._checkout ??= new Checkout(this._options));
    }

    protected _quotePrice: QuotePrice | undefined;

    public get quotePrice(): QuotePrice {
        return (this._quotePrice ??= new QuotePrice(this._options));
    }

    protected _verifiableCredentials: VerifiableCredentials | undefined;

    public get verifiableCredentials(): VerifiableCredentials {
        return (this._verifiableCredentials ??= new VerifiableCredentials(this._options));
    }

    protected _wallet: Wallet | undefined;

    public get wallet(): Wallet {
        return (this._wallet ??= new Wallet(this._options));
    }

    protected _sign: Sign | undefined;

    public get sign(): Sign {
        return (this._sign ??= new Sign(this._options));
    }

    protected async _getCustomAuthorizationHeaders() {
        const clientSecretValue = await core.Supplier.get(this._options.clientSecret);
        const apiKeyValue = await core.Supplier.get(this._options.apiKey);
        return { Authorization: clientSecretValue, "X-API-KEY": apiKeyValue };
    }
}
