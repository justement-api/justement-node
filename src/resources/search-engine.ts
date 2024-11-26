// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class SearchEngine extends APIResource {
  /**
   * Count the number of documents matching the search criteria.
   */
  count(
    query?: SearchEngineCountParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SearchEngineCountResponse>;
  count(options?: Core.RequestOptions): Core.APIPromise<SearchEngineCountResponse>;
  count(
    query: SearchEngineCountParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SearchEngineCountResponse> {
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
    query?: SearchEngineSearchParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SearchResultSnippets>;
  search(options?: Core.RequestOptions): Core.APIPromise<SearchResultSnippets>;
  search(
    query: SearchEngineSearchParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SearchResultSnippets> {
    if (isRequestOptions(query)) {
      return this.search({}, query);
    }
    return this._client.get('/api/search', { query, ...options });
  }
}

export type Language = 'de' | 'en' | 'fr' | 'it' | 'rm';

export interface SearchResultSnippet {
  docId: string;

  documentUrl: string;

  language: string;

  name: string;

  snippet: string;

  source: string;

  year: number;
}

export interface SearchResultSnippets {
  resultCount: number;

  results?: Array<SearchResultSnippet>;
}

export type SearchEngineCountResponse = number;

export interface SearchEngineCountParams {
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

export interface SearchEngineSearchParams {
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
   * Result page (1-based). Maximum page is total results / 10 rounded up.
   */
  page?: number;

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

export declare namespace SearchEngine {
  export {
    type Language as Language,
    type SearchResultSnippet as SearchResultSnippet,
    type SearchResultSnippets as SearchResultSnippets,
    type SearchEngineCountResponse as SearchEngineCountResponse,
    type SearchEngineCountParams as SearchEngineCountParams,
    type SearchEngineSearchParams as SearchEngineSearchParams,
  };
}
