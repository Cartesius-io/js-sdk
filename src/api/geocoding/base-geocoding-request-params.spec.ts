import baseGeocodingRequestToQueryParams from './base-geocoding-request-params.mapper';
import BaseGeocodingRequest from './base-geocoding-request.model';

describe('base geocoding request to query params mapper', () => {
  it('should map correctly', () => {
    const request: BaseGeocodingRequest = {
      filter: {
        foo: 'bar',
        bar: 'baz',
        barbaz: 'bazbar',
      },
      fields: ['w3w', 'displayValue'],
      size: 5,
      languages: ['deu', 'en', 'es'],
      categories: [
        {
          type: 'someType',
          specification: 'someSpecification',
        },
        {
          type: 'onlyAType',
        },
        {
          type: 'anotherType',
          specification: 'anotherSpecification',
        },
      ],
    };

    expect(baseGeocodingRequestToQueryParams(request)).toEqual({
      filter: 'foo:bar,bar:baz,barbaz:bazbar',
      categories:
        'someType:someSpecification,onlyAType,anotherType:anotherSpecification',
      fields: 'w3w,displayValue',
      size: '5',
      languages: 'deu,en,es',
    });
  });

  it('should map category correctly', () => {
    const request: BaseGeocodingRequest = {
      categories: {
        type: 'someType',
        specification: 'someSpecification',
      },
    };

    expect(baseGeocodingRequestToQueryParams(request)).toEqual({
      categories: 'someType:someSpecification',
    });
  });
});
