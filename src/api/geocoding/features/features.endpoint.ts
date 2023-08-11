import BaseClient from '../../../base-client';
import CartesiusGeoFeature from '../../../geo-feature.model';
import ApiResponse from '../../api-response.model';
import { FeaturesRequest } from './features-request.model';
import baseGeocodingRequestToQueryParams from '../base-geocoding-request-params.mapper';

export default class Features extends BaseClient {
  getFeatureById(
    id: string,
    requestData?: FeaturesRequest,
  ): Promise<ApiResponse<CartesiusGeoFeature>> {
    return this.get(`/features/${id}`, {
      ...(requestData ? baseGeocodingRequestToQueryParams(requestData) : {}),
    });
  }
}
