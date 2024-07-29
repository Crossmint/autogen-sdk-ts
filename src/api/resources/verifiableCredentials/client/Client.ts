/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Crossmint from "../../../index";
import * as serializers from "../../../../serialization/index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace VerifiableCredentials {
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

export class VerifiableCredentials {
    constructor(protected readonly _options: VerifiableCredentials.Options) {}

    /**
     * Verify that a credential is valid.
     *
     * **API scope required** `credentials.read`
     *
     * @param {Crossmint.VerifyCredentialRequest} request
     * @param {VerifiableCredentials.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Crossmint.BadRequestError}
     *
     * @example
     *     await client.verifiableCredentials.verifyCredential({
     *         credential: {
     *             "key": "value"
     *         }
     *     })
     */
    public async verifyCredential(
        request: Crossmint.VerifyCredentialRequest,
        requestOptions?: VerifiableCredentials.RequestOptions
    ): Promise<Crossmint.VerifyCredentialResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CrossmintEnvironment.Staging,
                "unstable/credentials/verify"
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
            body: serializers.VerifyCredentialRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.VerifyCredentialResponse.parseOrThrow(_response.body, {
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

    /**
     * Create a template (similar to an nft collection) for issuing verifiable credentials.
     *
     * **API scope required** `credentials:template.create`
     *
     * @param {Crossmint.VcCreateTemplateRequest} request
     * @param {VerifiableCredentials.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Crossmint.BadRequestError}
     *
     * @example
     *     await client.verifiableCredentials.vcCreateTemplate({
     *         metadata: {
     *             name: "Verifiable Credential",
     *             description: "The owner of this credential is authorized."
     *         },
     *         credentials: {
     *             type: "degreeForMastersStudent"
     *         }
     *     })
     */
    public async vcCreateTemplate(
        request: Crossmint.VcCreateTemplateRequest,
        requestOptions?: VerifiableCredentials.RequestOptions
    ): Promise<string> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CrossmintEnvironment.Staging,
                "unstable/credentials/templates/"
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
            body: {
                ...serializers.VcCreateTemplateRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
                chain: "polygon",
            },
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.verifiableCredentials.vcCreateTemplate.Response.parseOrThrow(_response.body, {
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

    /**
     * Get a verifiable credential by the ID associated with the minted NFT.
     *
     * This ID will have the format: `<UUID>`. For example: `d7eb777b-e9b4-4f34-ab5f-ce199111166a`
     *
     * **API scope required** `credentials.read`. This endpoint will not work with a client side API key.
     *
     * @param {string} collectionId - Collection id (template id)
     * @param {string} id - UUID of the NFT returned in the NFT creation response. Format is: `<UUID>`
     * @param {VerifiableCredentials.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Crossmint.BadRequestError}
     * @throws {@link Crossmint.NotFoundError}
     *
     * @example
     *     await client.verifiableCredentials.getVc("collectionId", "id")
     */
    public async getVc(
        collectionId: string,
        id: string,
        requestOptions?: VerifiableCredentials.RequestOptions
    ): Promise<Record<string, unknown>> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CrossmintEnvironment.Staging,
                `unstable/collections/${encodeURIComponent(collectionId)}/nfts/${encodeURIComponent(id)}/credentials`
            ),
            method: "GET",
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
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.verifiableCredentials.getVc.Response.parseOrThrow(_response.body, {
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
     * Get a verifiable credential by the ID associated with it.
     *
     * This ID will have the format: `urn:uuid:<UUID>`. For example: `urn:uuid:64f9877d-a19a-4205-8d61-f8c2abed5766`
     *
     * **API scope required** `credentials.read`. This enpoint will work also with a client side API key.
     *
     * @param {string} id - Unique ID of the credential as returned in the NFT creation response. Format is: `urn:uuid:<UUID>`
     * @param {VerifiableCredentials.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Crossmint.BadRequestError}
     * @throws {@link Crossmint.NotFoundError}
     *
     * @example
     *     await client.verifiableCredentials.getVcById("id")
     */
    public async getVcById(
        id: string,
        requestOptions?: VerifiableCredentials.RequestOptions
    ): Promise<Record<string, unknown>> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CrossmintEnvironment.Staging,
                `unstable/credentials/${encodeURIComponent(id)}`
            ),
            method: "GET",
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
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.verifiableCredentials.getVcById.Response.parseOrThrow(_response.body, {
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
     * Revoke a verifiable credential by the credential ID.
     * This involves burning the associated nft.
     *
     * This ID will have the format: `urn:uuid:<UUID>`. For example: `urn:uuid:64f9877d-a19a-4205-8d61-f8c2abed5766`
     *
     * **API scope required** `credentials.create`.
     *
     * @param {string} id - Unique ID of the credential as returned in the NFT creation response. Format is: `urn:uuid:<UUID>`
     * @param {VerifiableCredentials.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Crossmint.ForbiddenError}
     * @throws {@link Crossmint.NotFoundError}
     * @throws {@link Crossmint.ServiceUnavailableError}
     *
     * @example
     *     await client.verifiableCredentials.revokeCredential("id")
     */
    public async revokeCredential(
        id: string,
        requestOptions?: VerifiableCredentials.RequestOptions
    ): Promise<Crossmint.BurnNftResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CrossmintEnvironment.Staging,
                `unstable/credentials/${encodeURIComponent(id)}`
            ),
            method: "DELETE",
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
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.BurnNftResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
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
     * Get a verifiable credential by the NFT locator.
     *
     * This locator will have the format: `<chain>:<contract_address>:<tokenId>`.
     * For example: `polygon:0x1234abcde...:1`
     *
     * **API scope required** `credentials.read`. This enpoint will work also with a client side API key.
     *
     * @param {string} nftLocator - NFT on chain locator, in the format of `<chain>:<contract_address>:<tokenId>`
     * @param {VerifiableCredentials.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Crossmint.BadRequestError}
     * @throws {@link Crossmint.NotFoundError}
     *
     * @example
     *     await client.verifiableCredentials.getVcByLocator("nftLocator")
     */
    public async getVcByLocator(
        nftLocator: string,
        requestOptions?: VerifiableCredentials.RequestOptions
    ): Promise<Record<string, unknown>> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CrossmintEnvironment.Staging,
                `unstable/nfts/${encodeURIComponent(nftLocator)}/credentials`
            ),
            method: "GET",
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
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.verifiableCredentials.getVcByLocator.Response.parseOrThrow(_response.body, {
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
     * Issue a verifiable credential. Deliver to a web3 wallet or email address.
     *
     * **API scope required** `credentials.create`
     *
     * @param {string} templateId - Template id of a credential enabled collection
     * @param {Crossmint.IssueVcRequest} request
     * @param {VerifiableCredentials.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Crossmint.BadRequestError}
     * @throws {@link Crossmint.ForbiddenError}
     * @throws {@link Crossmint.ServiceUnavailableError}
     *
     * @example
     *     await client.verifiableCredentials.issueVc("default", {
     *         recipient: "polygon:0x1234abcde... or email:<email_address>:polygon",
     *         credential: {
     *             subject: {
     *                 "subjectName": "foo",
     *                 "subjectAge": 20,
     *                 "claim": "bar"
     *             }
     *         }
     *     })
     */
    public async issueVc(
        templateId: string,
        request: Crossmint.IssueVcRequest,
        requestOptions?: VerifiableCredentials.RequestOptions
    ): Promise<Crossmint.IssueVcResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CrossmintEnvironment.Staging,
                `unstable/credentials/templates/${encodeURIComponent(templateId)}/vcs`
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
            body: serializers.IssueVcRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.IssueVcResponse.parseOrThrow(_response.body, {
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
     * Create a type with a random UUID. This is how you define a custom schema.
     *
     * **API scope required** `credentials.create`
     *
     * @param {Crossmint.CreateTypeRequest} request
     * @param {VerifiableCredentials.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Crossmint.BadRequestError}
     *
     * @example
     *     await client.verifiableCredentials.createType({
     *         credentialSubjectSchema: [{
     *                 name: "username",
     *                 type: "string"
     *             }, {
     *                 name: "courses_completed",
     *                 type: "uint64"
     *             }, {
     *                 name: "courses",
     *                 type: "Course[]"
     *             }]
     *     })
     */
    public async createType(
        request: Crossmint.CreateTypeRequest,
        requestOptions?: VerifiableCredentials.RequestOptions
    ): Promise<Crossmint.CreateTypeResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CrossmintEnvironment.Staging,
                "unstable/credentials/types"
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
            body: serializers.CreateTypeRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.CreateTypeResponse.parseOrThrow(_response.body, {
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

    /**
     * Get the schema of a given type by name
     *
     * **API scope required** `credentials.read`
     *
     * @param {string} typeName - The name of the type
     * @param {VerifiableCredentials.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Crossmint.BadRequestError}
     *
     * @example
     *     await client.verifiableCredentials.getType("typeName")
     */
    public async getType(
        typeName: string,
        requestOptions?: VerifiableCredentials.RequestOptions
    ): Promise<Crossmint.GetTypeResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CrossmintEnvironment.Staging,
                `unstable/credentials/types/${encodeURIComponent(typeName)}`
            ),
            method: "GET",
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
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.GetTypeResponse.parseOrThrow(_response.body, {
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

    /**
     * Create a type with a given name. This is how you define a custom schema.
     *
     * **API scope required** `credentials.create`
     *
     * @param {string} typeName - The name of the type
     * @param {Crossmint.CreateTypeIdempotentRequest} request
     * @param {VerifiableCredentials.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Crossmint.BadRequestError}
     *
     * @example
     *     await client.verifiableCredentials.createTypeIdempotent("typeName", {
     *         credentialSubjectSchema: [{
     *                 name: "username",
     *                 type: "string"
     *             }, {
     *                 name: "courses_completed",
     *                 type: "uint64"
     *             }, {
     *                 name: "courses",
     *                 type: "Course[]"
     *             }]
     *     })
     */
    public async createTypeIdempotent(
        typeName: string,
        request: Crossmint.CreateTypeIdempotentRequest,
        requestOptions?: VerifiableCredentials.RequestOptions
    ): Promise<Crossmint.CreateTypeIdempotentResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CrossmintEnvironment.Staging,
                `unstable/credentials/types/${encodeURIComponent(typeName)}`
            ),
            method: "PUT",
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
            body: serializers.CreateTypeIdempotentRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.CreateTypeIdempotentResponse.parseOrThrow(_response.body, {
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
        const apiKeyValue = await core.Supplier.get(this._options.apiKey);
        return { "X-API-KEY": apiKeyValue };
    }
}
