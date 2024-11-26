// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Justement from 'justement';
import { Response } from 'node-fetch';

const client = new Justement({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource documents', () => {
  test('retrieve: only required params', async () => {
    const responsePromise = client.documents.retrieve({ docId: 'docId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.documents.retrieve({ docId: 'docId' });
  });

  test('retrieveByReference: only required params', async () => {
    const responsePromise = client.documents.retrieveByReference({ docRef: 'docRef' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieveByReference: required and optional params', async () => {
    const response = await client.documents.retrieveByReference({ docRef: 'docRef' });
  });
});
