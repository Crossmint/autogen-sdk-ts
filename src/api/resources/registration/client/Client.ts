/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Crossmint from "../../../index";
import * as serializers from "../../../../serialization/index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace Registration {
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

export class Registration {
    constructor(protected readonly _options: Registration.Options) {}

    /**
     * Register your NFT collection with Crossmint
     *
     * **This API is subject to change as it is currently in its alpha form.**
     *
     * @param {Crossmint.RegisterNftCollectionRequest} request
     * @param {Registration.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Crossmint.BadRequestError}
     *
     * @example
     *     await client.registration.registerNftCollection({
     *         chain: Crossmint.RegisterNftCollectionRequestChain.Solana,
     *         contractType: Crossmint.RegisterNftCollectionRequestContractType.CandyMachine,
     *         args: {
     *             candyMachineId: "candyMachineId"
     *         },
     *         metadata: {
     *             title: "title",
     *             description: "description",
     *             imageUrl: "imageUrl"
     *         },
     *         ownership: Crossmint.RegisterNftCollectionRequestOwnership.External,
     *         category: Crossmint.RegisterNftCollectionRequestCategory.Loyalty,
     *         scopes: [Crossmint.RegisterNftCollectionRequestScopesItem.PaymentsCreditCard]
     *     })
     */
    public async registerNftCollection(
        request: Crossmint.RegisterNftCollectionRequest,
        requestOptions?: Registration.RequestOptions
    ): Promise<void> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CrossmintEnvironment.Default,
                "v1-alpha1/collections"
            ),
            method: "POST",
            headers: {
                "X-CLIENT-ID": await core.Supplier.get(this._options.clientId),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "crossmint",
                "X-Fern-SDK-Version": "0.0.9",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.RegisterNftCollectionRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
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
     * Update your collection information registered on Crossmint
     *
     * **This API is subject to change as it is currently in its alpha form.**
     *
     * @param {Crossmint.UpdateNftCollectionRequest} request
     * @param {Registration.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Crossmint.BadRequestError}
     *
     * @example
     *     await client.registration.updateNftCollection({
     *         clientId: "clientId",
     *         metadata: {
     *             title: "title",
     *             imageUrl: "imageUrl"
     *         }
     *     })
     */
    public async updateNftCollection(
        request: Crossmint.UpdateNftCollectionRequest,
        requestOptions?: Registration.RequestOptions
    ): Promise<void> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CrossmintEnvironment.Default,
                "v1-alpha1/collections"
            ),
            method: "PUT",
            headers: {
                "X-CLIENT-ID": await core.Supplier.get(this._options.clientId),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "crossmint",
                "X-Fern-SDK-Version": "0.0.9",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.UpdateNftCollectionRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
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
