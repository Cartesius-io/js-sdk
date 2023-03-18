import ForwardRequest from './forward-request.model';
import forwardRequestToQueryParams from './forward-request-params.mapper';

describe('forward request to query params mapper', () => {
  it('should map correctly', () => {
    const request: Partial<ForwardRequest> = {
      proximity: {
        lon: 51.812378,
        lat: 10.781237,
      },
      bbox: {
        left: 12.3456,
        bottom: 13.4567,
        right: 14.5678,
        top: 15.6789,
      },
    };

    expect(forwardRequestToQueryParams(request)).toEqual({
      proximity: '51.812378,10.781237',
      bbox: '12.3456,13.4567,14.5678,15.6789',
    });
  });

  it('should map fuzzy correctly', () => {
    const request: Partial<ForwardRequest> = {
      fuzzy: 'auto',
    };
    expect(forwardRequestToQueryParams(request)).toEqual({
      fuzzy: '-1',
    });

    request.fuzzy = 2;
    expect(forwardRequestToQueryParams(request)).toEqual({
      fuzzy: '2',
    });
  });
});
