import { ForwardRequest } from './forward-request.model';
import baseGeocodingRequestToQueryParams from '../base-geocoding-request-params.mapper';

export default function forwardRequestToQueryParams(
  req: ForwardRequest,
): Record<string, string> {
  const queryParams: Record<string, string> = {};
  if (req.bbox) {
    queryParams[
      'bbox'
    ] = `${req.bbox.left},${req.bbox.bottom},${req.bbox.right},${req.bbox.top}`;
  }

  if (req.fuzzy) {
    queryParams['fuzzy'] = req.fuzzy === 'auto' ? '-1' : String(req.fuzzy);
  }

  if (req.proximity) {
    queryParams['proximity'] = `${req.proximity.lon},${req.proximity.lat}`;
  }

  return { ...queryParams, ...baseGeocodingRequestToQueryParams(req) };
}
