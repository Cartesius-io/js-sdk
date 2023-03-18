import BaseClient from '../../../base-client';
import CartesiusGeoFeature from '../../../geo-feature.model';
import ApiResponse from '../../api-response.model';
import baseGeocodingRequestToQueryParams from '../base-geocoding-request-params.mapper';
import BaseGeocodingRequest from '../base-geocoding-request.model';

export default class Reverse extends BaseClient {
  reverse(
    lat: number,
    lon: number,
    radius?: number,
    requestData?: BaseGeocodingRequest,
  ): Promise<ApiResponse<CartesiusGeoFeature[]>> {
    return this.get('/reverse', {
      lon: String(lon),
      lat: String(lat),
      ...(radius ? { radius: String(radius) } : {}),
      ...(requestData ? baseGeocodingRequestToQueryParams(requestData) : {}),
    });
  }
}
