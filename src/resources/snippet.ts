// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as DocumentAPI from './document';

export class Snippet extends APIResource {
  /**
   * Retrieve a document by its document identifier.
   *
   * The docId is returned by the `search` endpoint as part of the result snippets.
   * The response includes the full document content and metadata.
   */
  document(
    query: SnippetDocumentParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DocumentAPI.Document> {
    return this._client.get('/api/document', { query, ...options });
  }
}

export interface SnippetDocumentParams {
  /**
   * The `docId` of the document that should be returned.
   */
  docId: string;
}

export declare namespace Snippet {
  export { type SnippetDocumentParams as SnippetDocumentParams };
}
