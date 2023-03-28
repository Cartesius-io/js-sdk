import BaseGeocodingRequest from './base-geocoding-request.model';
import baseApiRequestToQueryParams from '../base-request-params.mapper';

export default function baseGeocodingRequestToQueryParams(
  req: BaseGeocodingRequest,
): Record<string, string> {
  const queryParams: Record<string, string> = {};
  if (req.size) {
    queryParams['size'] = String(req.size);
  }

  if (req.filter) {
    queryParams['filter'] = Object.entries(req.filter)
      .map(([field, value]) => `${field}:${value}`)
      .join(',');
  }

  if (req.fields) {
    queryParams['fields'] = req.fields.join(',');
  }

  if (req.categories) {
    queryParams['categories'] = (
      Array.isArray(req.categories) ? req.categories : [req.categories]
    )
      .map(
        (category) =>
          category.type +
          (category.specification ? `:${category.specification}` : ''),
      )
      .join(',');
  }

  if (req.languages) {
    queryParams['languages'] = req.languages.join(',');
  }

  return { ...queryParams, ...baseApiRequestToQueryParams(req) };
}
