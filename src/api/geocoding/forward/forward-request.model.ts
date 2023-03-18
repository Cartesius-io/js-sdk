import BaseGeocodingRequest from '../base-geocoding-request.model';

export default interface ForwardRequest extends BaseGeocodingRequest {
  proximity?: {
    lat: number;
    lon: number;
  };

  fuzzy?: 'auto' | 0 | 1 | 2;

  bbox?: {
    left: number;
    bottom: number;
    right: number;
    top: number;
  };
}
