import BaseGeocodingRequest from '../base-geocoding-request.model';

export type FeaturesRequest = Omit<
  Omit<Omit<BaseGeocodingRequest, 'size'>, 'categories'>,
  'filter'
>;
