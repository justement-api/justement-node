// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class Search extends APIResource {
  /**
   * Search Justement and receive a result page with up to 10 snippets of matching
   * documents, ranked by relevance.
   */
  execute(query?: SearchExecuteParams, options?: Core.RequestOptions): Core.APIPromise<SearchResultSnippets>;
  execute(options?: Core.RequestOptions): Core.APIPromise<SearchResultSnippets>;
  execute(
    query: SearchExecuteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SearchResultSnippets> {
    if (isRequestOptions(query)) {
      return this.execute({}, query);
    }
    return this._client.get('/api/search', { query, ...options });
  }
}

export interface SearchResultSnippets {
  resultCount: number;

  results?: Array<SearchResultSnippets.Result>;
}

export namespace SearchResultSnippets {
  export interface Result {
    docId: string;

    documentUrl: string;

    language: string;

    name: string;

    snippet: string;

    source: string;

    year: number;
  }
}

export interface SearchExecuteParams {
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
  language?: 'de' | 'en' | 'fr' | 'it' | 'rm';

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

export declare namespace Search {
  export {
    type SearchResultSnippets as SearchResultSnippets,
    type SearchExecuteParams as SearchExecuteParams,
  };
}
