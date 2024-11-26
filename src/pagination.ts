// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { AbstractPage, Response, APIClient, FinalRequestOptions, PageInfo } from './core';

export interface PageNumberPaginationResponse<Item> {
  results: Array<Item>;

  result_count: number;
}

export interface PageNumberPaginationParams {
  page?: number;
}

export class PageNumberPagination<Item>
  extends AbstractPage<Item>
  implements PageNumberPaginationResponse<Item>
{
  results: Array<Item>;

  result_count: number;

  constructor(
    client: APIClient,
    response: Response,
    body: PageNumberPaginationResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.results = body.results || [];
    this.result_count = body.result_count || 0;
  }

  getPaginatedItems(): Item[] {
    return this.results ?? [];
  }

  // @deprecated Please use `nextPageInfo()` instead
  nextPageParams(): Partial<PageNumberPaginationParams> | null {
    const info = this.nextPageInfo();
    if (!info) return null;
    if ('params' in info) return info.params;
    const params = Object.fromEntries(info.url.searchParams);
    if (!Object.keys(params).length) return null;
    return params;
  }

  nextPageInfo(): PageInfo | null {
    const query = this.options.query as PageNumberPaginationParams;
    const currentPage = query?.page ?? 1;

    return { params: { page: currentPage + 1 } };
  }
}
