// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import { JustementPagination, type JustementPaginationParams } from '../pagination';

export class DocumentResource extends APIResource {
  /**
   * Retrieve a document by its document identifier.
   *
   * The docId is returned by the `search` endpoint as part of the result snippets.
   * The response includes the full document content and metadata.
   */
  byId(query: DocumentByIDParams, options?: Core.RequestOptions): Core.APIPromise<Document> {
    return this._client.get('/api/document', { query, ...options });
  }

  /**
   * Retrieve a document using its standard legal reference.
   *
   * This endpoint accepts Swiss legal references in their standard citation format
   * and returns the corresponding document if found.
   */
  byRef(query: DocumentByRefParams, options?: Core.RequestOptions): Core.APIPromise<Document> {
    return this._client.get('/api/documentByRef', { query, ...options });
  }

  /**
   * Count the number of documents matching the search criteria.
   */
  count(query?: DocumentCountParams, options?: Core.RequestOptions): Core.APIPromise<DocumentCountResponse>;
  count(options?: Core.RequestOptions): Core.APIPromise<DocumentCountResponse>;
  count(
    query: DocumentCountParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<DocumentCountResponse> {
    if (isRequestOptions(query)) {
      return this.count({}, query);
    }
    return this._client.get('/api/count', { query, ...options });
  }

  /**
   * Search Justement and receive a result page with up to 10 snippets of matching
   * documents, ranked by relevance.
   */
  search(
    query?: DocumentSearchParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<SnippetsJustementPagination, Snippet>;
  search(options?: Core.RequestOptions): Core.PagePromise<SnippetsJustementPagination, Snippet>;
  search(
    query: DocumentSearchParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<SnippetsJustementPagination, Snippet> {
    if (isRequestOptions(query)) {
      return this.search({}, query);
    }
    return this._client.getAPIList('/api/search', SnippetsJustementPagination, { query, ...options });
  }
}

export class SnippetsJustementPagination extends JustementPagination<Snippet> {}

export interface Decision {
  date: string;

  docId: string;

  language: string;

  name: string;

  organ: string;

  text: string;

  url: string;

  docRef?: Array<string>;

  lawRef?: Array<string>;
}

export type Document = Document.ActDocument | Decision;

export namespace Document {
  export interface ActDocument {
    date: string;

    docId: string;

    language: string;

    name: string;

    srId: string;

    text: string;

    url: string;

    availableLanguages?: Array<string>;

    hierarchy?: Array<string>;
  }
}

export type Language = 'de' | 'en' | 'fr' | 'it' | 'rm';

export interface Snippet {
  docId: string;

  documentUrl: string;

  language: string;

  name: string;

  snippet: string;

  source: string;

  year: number;
}

export interface Snippets {
  resultCount: number;

  results?: Array<Snippet>;
}

export type DocumentCountResponse = number;

export interface DocumentByIDParams {
  /**
   * The `docId` of the document that should be returned.
   */
  docId: string;

  /**
   * Preferred language for article references.
   */
  language?: Language;
}

export interface DocumentByRefParams {
  /**
   * The legal reference of the document.
   */
  docRef: string;

  /**
   * Preferred language for article references.
   */
  language?: Language;
}

export interface DocumentCountParams {
  /**
   * **Classification facet**: Filters results based on hierarchical categories. Each
   * element in the list represents a level in the hierarchy:
   *
   * - `["Staatsrecht", "Grundrecht"]`: filters to Staatsrecht (Public Law) and
   *   Grundrecht (Fundamental Rights).
   * - `["Privatrecht", "Zivilrecht", "Vertragsrecht"]`: filters to Privatrecht
   *   (Private Law), Zivilrecht (Civil Law), and Vertragsrecht (Contract Law).
   * - `["Strafrecht", "Straftaten"]`: filters to Strafrecht (Criminal Law) and
   *   Straftaten (Offenses).
   *
   * See the full classification hierarchy:
   *
   * ```plaintext
   * Staatsrecht
   * ├── Abgaberecht & öffentliche Finanzen
   * ├── Bau- & Planungsrecht
   * ├── Bürger- & Ausländerrecht
   * ├── Energie/Verkehr/Medien
   * │   └── Verkehr
   * ├── Grundrecht
   * ├── Gesundheit & soziale Sicherheit
   * ├── Öffentliches Dienstverhältnis
   * ├── Ökologisches Gleichgewicht
   * ├── Politische Rechte
   * ├── Rechtshilfe & Auslieferung
   * ├── Schuldbetreibungs- & Konkursrecht
   * ├── Sozialversicherungsrecht
   * │   ├── AHV
   * │   ├── ALV
   * │   ├── BV
   * │   ├── EL
   * │   ├── IV
   * │   ├── KV
   * │   └── UV
   * ├── Unterrichtswesen & Berufsausbildung
   * ├── Verfahren
   * │   ├── Strafprozess
   * │   ├── Zivilprozess
   * │   └── Zuständigkeitsfragen
   * └── Verfahrensrecht
   *
   * Privatrecht
   * ├── Immaterialgüter-, Wettbewerbs- & Kartellrecht
   * ├── Obligationen- & Handelsrecht
   * │   ├── Gesellschaftsrecht
   * │   ├── Haftpflichtrecht
   * │   ├── Obligationsrecht (allgemein)
   * │   └── Vertragsrecht
   * └── Zivilrecht
   *    ├── Erbrecht
   *    ├── Familienrecht
   *    ├── Personenrecht
   *    └── Sachenrecht
   *
   * Strafrecht
   * ├── Straf- & Massnahmenvollzug
   * ├── Straftaten
   * └── Strafrecht (allgemein)
   * ```
   */
  classificationFacet?: Array<string>;

  /**
   * **Search query**: Retrieves the count of documents matching the criteria.
   *
   * - Terms are **implicitly ANDed** (e.g., `hund biss` only matches documents
   *   containing both terms).
   * - Supports **exact phrases** (e.g., `"hund spazieren"`) and **proximity
   *   searches** (e.g., `"hund biss"~10`).
   * - **Excludes terms** with `-term` (e.g., `beschattung -besonnung`).
   * - **Prefix search** with `term*` for terms with at least 3 characters.
   * - **Synonym expansion and translations** with lower relevance ranking.
   *
   * For advanced operators and tips, see
   * [Justement Search Tips](https://justement.ch/en/search).
   */
  query?: string;
}

export interface DocumentSearchParams extends JustementPaginationParams {
  /**
   * **Classification facet**: Filters results based on hierarchical categories. Each
   * element in the list represents a level in the hierarchy:
   *
   * - `["Staatsrecht", "Grundrecht"]`: filters to Staatsrecht (Public Law) and
   *   Grundrecht (Fundamental Rights).
   * - `["Privatrecht", "Zivilrecht", "Vertragsrecht"]`: filters to Privatrecht
   *   (Private Law), Zivilrecht (Civil Law), and Vertragsrecht (Contract Law).
   * - `["Strafrecht", "Straftaten"]`: filters to Strafrecht (Criminal Law) and
   *   Straftaten (Offenses).
   *
   * See the full classification hierarchy:
   *
   * ```plaintext
   * Staatsrecht
   * ├── Abgaberecht & öffentliche Finanzen
   * ├── Bau- & Planungsrecht
   * ├── Bürger- & Ausländerrecht
   * ├── Energie/Verkehr/Medien
   * │   └── Verkehr
   * ├── Grundrecht
   * ├── Gesundheit & soziale Sicherheit
   * ├── Öffentliches Dienstverhältnis
   * ├── Ökologisches Gleichgewicht
   * ├── Politische Rechte
   * ├── Rechtshilfe & Auslieferung
   * ├── Schuldbetreibungs- & Konkursrecht
   * ├── Sozialversicherungsrecht
   * │   ├── AHV
   * │   ├── ALV
   * │   ├── BV
   * │   ├── EL
   * │   ├── IV
   * │   ├── KV
   * │   └── UV
   * ├── Unterrichtswesen & Berufsausbildung
   * ├── Verfahren
   * │   ├── Strafprozess
   * │   ├── Zivilprozess
   * │   └── Zuständigkeitsfragen
   * └── Verfahrensrecht
   *
   * Privatrecht
   * ├── Immaterialgüter-, Wettbewerbs- & Kartellrecht
   * ├── Obligationen- & Handelsrecht
   * │   ├── Gesellschaftsrecht
   * │   ├── Haftpflichtrecht
   * │   ├── Obligationsrecht (allgemein)
   * │   └── Vertragsrecht
   * └── Zivilrecht
   *    ├── Erbrecht
   *    ├── Familienrecht
   *    ├── Personenrecht
   *    └── Sachenrecht
   *
   * Strafrecht
   * ├── Straf- & Massnahmenvollzug
   * ├── Straftaten
   * └── Strafrecht (allgemein)
   * ```
   */
  classificationFacet?: Array<string>;

  /**
   * Preferred language for snippets.
   */
  language?: Language;

  /**
   * **Search query**: Retrieves the count of documents matching the criteria.
   *
   * - Terms are **implicitly ANDed** (e.g., `hund biss` only matches documents
   *   containing both terms).
   * - Supports **exact phrases** (e.g., `"hund spazieren"`) and **proximity
   *   searches** (e.g., `"hund biss"~10`).
   * - **Excludes terms** with `-term` (e.g., `beschattung -besonnung`).
   * - **Prefix search** with `term*` for terms with at least 3 characters.
   * - **Synonym expansion and translations** with lower relevance ranking.
   *
   * For advanced operators and tips, see
   * [Justement Search Tips](https://justement.ch/en/search).
   */
  query?: string;
}

DocumentResource.SnippetsJustementPagination = SnippetsJustementPagination;

export declare namespace DocumentResource {
  export {
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
}
