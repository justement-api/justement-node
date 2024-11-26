// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type Agent } from './_shims/index';
import * as qs from './internal/qs';
import * as Core from './core';
import * as Errors from './error';
import * as Pagination from './pagination';
import { type PageNumberPaginationParams, PageNumberPaginationResponse } from './pagination';
import * as Uploads from './uploads';
import * as API from './resources/index';
import {
  DecisionDocument,
  Document,
  DocumentRetrieveByReferenceParams,
  DocumentRetrieveParams,
  Documents,
} from './resources/documents';
import {
  AuthenticationError,
  DocumentNotFoundError,
  Errors as ErrorsAPIErrors,
  InternalError,
  ValidationError,
} from './resources/errors';
import {
  Language,
  SearchEngine,
  SearchEngineCountParams,
  SearchEngineCountResponse,
  SearchEngineSearchParams,
  SearchResultSnippet,
  SearchResultSnippets,
} from './resources/search-engine';

export interface ClientOptions {
  /**
   * API key for authentication
   */
  bearerToken?: string | undefined;

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
  bearerToken: string;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Justement API.
   *
   * @param {string | undefined} [opts.bearerToken=process.env['BEARER_TOKEN'] ?? undefined]
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
    bearerToken = Core.readEnv('BEARER_TOKEN'),
    ...opts
  }: ClientOptions = {}) {
    if (bearerToken === undefined) {
      throw new Errors.JustementError(
        "The BEARER_TOKEN environment variable is missing or empty; either provide it, or instantiate the Justement client with an bearerToken option, like new Justement({ bearerToken: 'My Bearer Token' }).",
      );
    }

    const options: ClientOptions = {
      bearerToken,
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

    this.bearerToken = bearerToken;
  }

  searchEngine: API.SearchEngine = new API.SearchEngine(this);
  documents: API.Documents = new API.Documents(this);
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
    return { Authorization: `Bearer ${this.bearerToken}` };
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

Justement.SearchEngine = SearchEngine;
Justement.Documents = Documents;
Justement.Errors = ErrorsAPIErrors;
export declare namespace Justement {
  export type RequestOptions = Core.RequestOptions;

  export import PageNumberPagination = Pagination.PageNumberPagination;
  export {
    type PageNumberPaginationParams as PageNumberPaginationParams,
    type PageNumberPaginationResponse as PageNumberPaginationResponse,
  };

  export {
    SearchEngine as SearchEngine,
    type Language as Language,
    type SearchResultSnippet as SearchResultSnippet,
    type SearchResultSnippets as SearchResultSnippets,
    type SearchEngineCountResponse as SearchEngineCountResponse,
    type SearchEngineCountParams as SearchEngineCountParams,
    type SearchEngineSearchParams as SearchEngineSearchParams,
  };

  export {
    Documents as Documents,
    type DecisionDocument as DecisionDocument,
    type Document as Document,
    type DocumentRetrieveParams as DocumentRetrieveParams,
    type DocumentRetrieveByReferenceParams as DocumentRetrieveByReferenceParams,
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
