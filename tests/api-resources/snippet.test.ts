// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Justement from 'justement';
import { Response } from 'node-fetch';

const client = new Justement({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource snippet', () => {
  test('document: only required params', async () => {
    const responsePromise = client.snippet.document({ docId: 'docId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('document: required and optional params', async () => {
    const response = await client.snippet.document({ docId: 'docId' });
  });
});
