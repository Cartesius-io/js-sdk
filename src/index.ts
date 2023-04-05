import Autocomplete from './api/geocoding/forward/autocomplete.endpoint';
import BaseClient from './base-client';
import CartesiusConfig from './config.model';
import CartesiusGeoFeature from './geo-feature.model';
import Forward from './api/geocoding/forward/forward.endpoint';
import Reverse from './api/geocoding/reverse/reverse.endpoint';
import { default as CartesiusForwardRequest } from 'api/geocoding/forward/forward-request.model';
import { default as CartesiusApiResponse } from 'api/api-response.model';

/* eslint-disable */

function applyMixins(derivedCtor: any, baseCtors: any[]) {
  for (const baseCtor of baseCtors) {
    const propertyNames = Object.getOwnPropertyNames(baseCtor.prototype);
    for (const name of propertyNames) {
      const baseCtorName = Object.getOwnPropertyDescriptor(
        baseCtor.prototype,
        name,
      );
      if (!baseCtorName) {
        return;
      }
      Object.defineProperty(derivedCtor.prototype, name, baseCtorName);
    }
  }
}

class CartesiusClient extends BaseClient {}

interface CartesiusClient extends Autocomplete, Forward, Reverse {}

applyMixins(CartesiusClient, [Autocomplete, Forward, Reverse]);

export {
  CartesiusConfig,
  CartesiusClient,
  CartesiusGeoFeature,
  CartesiusForwardRequest,
  CartesiusApiResponse,
};
