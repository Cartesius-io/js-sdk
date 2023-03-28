import BaseApiRequest from './base-api-request.model';

export default function baseApiRequestToQueryParams(
  req: BaseApiRequest,
): Record<string, string> {
  const queryParams: Record<string, string> = {};

  if (req.noRecord) {
    queryParams['noRecord'] = 'true';
  }

  return queryParams;
}
