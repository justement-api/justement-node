// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Justement from 'justement';
import { Response } from 'node-fetch';

const client = new Justement({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource count', () => {
  test('execute', async () => {
    const responsePromise = client.count.execute();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('execute: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.count.execute({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Justement.NotFoundError,
    );
  });

  test('execute: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.count.execute(
        { classificationFacet: ['string'], query: 'query' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Justement.NotFoundError);
  });
});
