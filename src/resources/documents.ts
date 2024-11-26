// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Documents extends APIResource {
  /**
   * Retrieve a document by its document identifier.
   *
   * The docId is returned by the `search` endpoint as part of the result snippets.
   * The response includes the full document content and metadata.
   */
  retrieve(query: DocumentRetrieveParams, options?: Core.RequestOptions): Core.APIPromise<Document> {
    return this._client.get('/api/document', { query, ...options });
  }

  /**
   * Retrieve a document using its standard legal reference.
   *
   * This endpoint accepts Swiss legal references in their standard citation format
   * and returns the corresponding document if found.
   */
  referenceRetrieve(
    query: DocumentReferenceRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Document> {
    return this._client.get('/api/documentByRef', { query, ...options });
  }
}

export interface Document {
  docId: string;

  language: string;

  name: string;

  organ: string;

  text: string;

  url: string;

  year: number;
}

export interface DocumentRetrieveParams {
  /**
   * The `docId` of the document that should be returned.
   */
  docId: string;
}

export interface DocumentReferenceRetrieveParams {
  /**
   * The legal reference of the document.
   */
  docRef: string;
}

export declare namespace Documents {
  export {
    type Document as Document,
    type DocumentRetrieveParams as DocumentRetrieveParams,
    type DocumentReferenceRetrieveParams as DocumentReferenceRetrieveParams,
  };
}
