import BaseClient from '../../../base-client';
import ApiResponse from '../../api-response.model';
import CartesiusGeoFeature from '../../../geo-feature.model';
import ForwardRequest from './forward-request.model';
import forwardRequestToQueryParams from './forward-request-params.mapper';

export default class Autocomplete extends BaseClient {
  autocomplete(
    query: string,
    requestData?: ForwardRequest,
  ): Promise<ApiResponse<CartesiusGeoFeature[]>> {
    return this.get('/autocomplete', {
      q: query,
      ...(requestData ? forwardRequestToQueryParams(requestData) : {}),
    });
  }
}
