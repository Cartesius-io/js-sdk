import ForwardRequest from './forward-request.model';
import BaseClient from '../../../base-client';
import CartesiusGeoFeature from '../../../geo-feature.model';
import ApiResponse from '../../api-response.model';
import forwardRequestToQueryParams from './forward-request-params.mapper';

export default class Forward extends BaseClient {
  forward(
    query: string,
    requestData?: ForwardRequest,
  ): Promise<ApiResponse<CartesiusGeoFeature[]>> {
    return this.get('/forward', {
      q: query,
      ...(requestData ? forwardRequestToQueryParams(requestData) : {}),
    });
  }
}
