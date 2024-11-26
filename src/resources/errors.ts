// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';

export class Errors extends APIResource {}

export interface AuthenticationError {
  message: string;
}

export interface DocumentNotFoundError {
  message: string;
}

export interface InternalError {
  message: string;
}

export interface ValidationError {
  message: string;
}

export declare namespace Errors {
  export {
    type AuthenticationError as AuthenticationError,
    type DocumentNotFoundError as DocumentNotFoundError,
    type InternalError as InternalError,
    type ValidationError as ValidationError,
  };
}
