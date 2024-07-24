/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Crossmint from "../../../index";
import * as serializers from "../../../../serialization/index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace Checkout {
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

export class Checkout {
    constructor(protected readonly _options: Checkout.Options) {}

    /**
     * **API scope required**: `nfts.checkout` Begin the checkout process for a mint
     * **This API is subject to change as it is currently in its alpha form.**
     *
     * @param {Crossmint.CheckoutMintRequest} request
     * @param {Checkout.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Crossmint.BadRequestError}
     * @throws {@link Crossmint.UnauthorizedError}
     *
     * @example
     *     await client.checkout.mint({
     *         clientId: "clientId",
     *         userId: "userId"
     *     })
     */
    public async mint(
        request: Crossmint.CheckoutMintRequest,
        requestOptions?: Checkout.RequestOptions
    ): Promise<Crossmint.CheckoutMintSuccess> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CrossmintEnvironment.Default,
                "v1-alpha1/checkout/mint"
            ),
            method: "POST",
            headers: {
                "X-CLIENT-ID": await core.Supplier.get(this._options.clientId),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "crossmint",
                "X-Fern-SDK-Version": "0.0.5",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.CheckoutMintRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.CheckoutMintSuccess.parseOrThrow(_response.body, {
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

    protected async _getCustomAuthorizationHeaders() {
        const authorizationValue = await core.Supplier.get(this._options.authorization);
        const apiKeyValue = await core.Supplier.get(this._options.apiKey);
        return { Authorization: authorizationValue, "X-API-KEY": apiKeyValue };
    }
}
