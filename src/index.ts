// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type Agent } from './_shims/index';
import * as qs from './internal/qs';
import * as Core from './core';
import * as Errors from './error';
import * as Pagination from './pagination';
import { type JustementPaginationParams, JustementPaginationResponse } from './pagination';
import * as Uploads from './uploads';
import * as API from './resources/index';
import {
  Decision,
  Document,
  DocumentByIDParams,
  DocumentByRefParams,
  DocumentCountParams,
  DocumentCountResponse,
  DocumentResource,
  DocumentSearchParams,
  Language,
  Snippet,
  Snippets,
  SnippetsJustementPagination,
} from './resources/document';
import {
  AuthenticationError,
  DocumentNotFoundError,
  Errors as ErrorsAPIErrors,
  InternalError,
  ValidationError,
} from './resources/errors';

export interface ClientOptions {
  /**
   * Defaults to process.env['JUSTEMENT_API_KEY'].
   */
  apiKey?: string | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['JUSTEMENT_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   */
  timeout?: number;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery;
}

/**
 * API Client for interfacing with the Justement API.
 */
export class Justement extends Core.APIClient {
  apiKey: string;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Justement API.
   *
   * @param {string | undefined} [opts.apiKey=process.env['JUSTEMENT_API_KEY'] ?? undefined]
   * @param {string} [opts.baseURL=process.env['JUSTEMENT_BASE_URL'] ?? https://justement.ch] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = Core.readEnv('JUSTEMENT_BASE_URL'),
    apiKey = Core.readEnv('JUSTEMENT_API_KEY'),
    ...opts
  }: ClientOptions = {}) {
    if (apiKey === undefined) {
      throw new Errors.JustementError(
        "The JUSTEMENT_API_KEY environment variable is missing or empty; either provide it, or instantiate the Justement client with an apiKey option, like new Justement({ apiKey: 'My API Key' }).",
      );
    }

    const options: ClientOptions = {
      apiKey,
      ...opts,
      baseURL: baseURL || `https://justement.ch`,
    };

    super({
      baseURL: options.baseURL!,
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });

    this._options = options;

    this.apiKey = apiKey;
  }

  document: API.DocumentResource = new API.DocumentResource(this);
  errors: API.Errors = new API.Errors(this);

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  protected override authHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return { Authorization: `Bearer ${this.apiKey}` };
  }

  protected override stringifyQuery(query: Record<string, unknown>): string {
    return qs.stringify(query, { arrayFormat: 'comma' });
  }

  static Justement = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static JustementError = Errors.JustementError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;
  static fileFromPath = Uploads.fileFromPath;
}

Justement.DocumentResource = DocumentResource;
Justement.SnippetsJustementPagination = SnippetsJustementPagination;
Justement.Errors = ErrorsAPIErrors;
export declare namespace Justement {
  export type RequestOptions = Core.RequestOptions;

  export import JustementPagination = Pagination.JustementPagination;
  export {
    type JustementPaginationParams as JustementPaginationParams,
    type JustementPaginationResponse as JustementPaginationResponse,
  };

  export {
    DocumentResource as DocumentResource,
    type Decision as Decision,
    type Document as Document,
    type Language as Language,
    type Snippet as Snippet,
    type Snippets as Snippets,
    type DocumentCountResponse as DocumentCountResponse,
    SnippetsJustementPagination as SnippetsJustementPagination,
    type DocumentByIDParams as DocumentByIDParams,
    type DocumentByRefParams as DocumentByRefParams,
    type DocumentCountParams as DocumentCountParams,
    type DocumentSearchParams as DocumentSearchParams,
  };

  export {
    ErrorsAPIErrors as Errors,
    type AuthenticationError as AuthenticationError,
    type DocumentNotFoundError as DocumentNotFoundError,
    type InternalError as InternalError,
    type ValidationError as ValidationError,
  };
}

export { toFile, fileFromPath } from './uploads';
export {
  JustementError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} from './error';

export default Justement;
