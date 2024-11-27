// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { AbstractPage, Response, APIClient, FinalRequestOptions, PageInfo } from './core';

export interface JustementPaginationResponse<Item> {
  results: Array<Item>;
}

export interface JustementPaginationParams {
  page?: number;
}

export class JustementPagination<Item>
  extends AbstractPage<Item>
  implements JustementPaginationResponse<Item>
{
  results: Array<Item>;

  constructor(
    client: APIClient,
    response: Response,
    body: JustementPaginationResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.results = body.results || [];
  }

  getPaginatedItems(): Item[] {
    return this.results ?? [];
  }

  // @deprecated Please use `nextPageInfo()` instead
  nextPageParams(): Partial<JustementPaginationParams> | null {
    const info = this.nextPageInfo();
    if (!info) return null;
    if ('params' in info) return info.params;
    const params = Object.fromEntries(info.url.searchParams);
    if (!Object.keys(params).length) return null;
    return params;
  }

  nextPageInfo(): PageInfo | null {
    const query = this.options.query as JustementPaginationParams;
    const currentPage = query?.page ?? 1;

    return { params: { page: currentPage + 1 } };
  }
}
