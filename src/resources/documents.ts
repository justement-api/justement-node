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
  retrieveByReference(
    query: DocumentRetrieveByReferenceParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Document> {
    return this._client.get('/api/documentByRef', { query, ...options });
  }
}

export interface DecisionDocument {
  docId: string;

  language: string;

  name: string;

  organ: string;

  text: string;

  url: string;

  year: number;
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

export interface DocumentRetrieveByReferenceParams {
  /**
   * The legal reference of the document.
   */
  docRef: string;
}

export declare namespace Documents {
  export {
    type DecisionDocument as DecisionDocument,
    type Document as Document,
    type DocumentRetrieveParams as DocumentRetrieveParams,
    type DocumentRetrieveByReferenceParams as DocumentRetrieveByReferenceParams,
  };
}
