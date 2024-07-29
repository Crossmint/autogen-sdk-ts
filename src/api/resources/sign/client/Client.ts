/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Crossmint from "../../../index";
import * as serializers from "../../../../serialization/index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace Sign {
    interface Options {
        environment?: core.Supplier<environments.CrossmintEnvironment | string>;
        apiKey: core.Supplier<string>;
        fetcher?: core.FetchFunction;
    }

    interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
    }
}

export class Sign {
    constructor(protected readonly _options: Sign.Options) {}

    /**
     * Sign a message using a custodial wallet's key
     *
     * **API scope required**: `wallets:messages.sign`
     *
     * @param {Crossmint.EvmChains} chain - The blockchain network you are using.
     * @param {string} address - The wallet address you want to sign the message with
     * @param {Crossmint.SignMessageRequest} request
     * @param {Sign.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Crossmint.BadRequestError}
     * @throws {@link Crossmint.UnauthorizedError}
     * @throws {@link Crossmint.NotFoundError}
     *
     * @example
     *     await client.sign.message(Crossmint.EvmChains.Arbitrum, "address", {
     *         message: "message"
     *     })
     */
    public async message(
        chain: Crossmint.EvmChains,
        address: string,
        request: Crossmint.SignMessageRequest,
        requestOptions?: Sign.RequestOptions
    ): Promise<Crossmint.SignMessageResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CrossmintEnvironment.Staging,
                `v1-alpha1/wallets/${encodeURIComponent(serializers.EvmChains.jsonOrThrow(chain))}:${encodeURIComponent(
                    address
                )}/signMessage`
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "crossmint",
                "X-Fern-SDK-Version": "0.0.10",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.SignMessageRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.SignMessageResponse.parseOrThrow(_response.body, {
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

    protected async _getCustomAuthorizationHeaders() {
        const apiKeyValue = await core.Supplier.get(this._options.apiKey);
        return { "X-API-KEY": apiKeyValue };
    }
}
