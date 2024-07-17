/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "./environments";
import * as core from "./core";
import { Checkout } from "./api/resources/checkout/client/Client";

export declare namespace CrossmintClient {
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

export class CrossmintClient {
    constructor(protected readonly _options: CrossmintClient.Options) {}

    protected _checkout: Checkout | undefined;

    public get checkout(): Checkout {
        return (this._checkout ??= new Checkout(this._options));
    }
}
