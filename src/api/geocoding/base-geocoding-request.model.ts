import BaseApiRequest from '../base-api-request.model';

interface Category {
  type: string;
  specification?: string;
}
export default interface BaseGeocodingRequest extends BaseApiRequest {
  // Amount of features to return
  size?: number;
  // Fields to return
  fields?: (
    | 'address'
    | 'adminHierarchy'
    | 'category'
    | 'displayValue'
    | 'information'
    | 'name'
    | 'references'
    | 'shape'
    | 'timeAtLocation'
    | 'w3w'
  )[];
  // Filter on categories
  categories?: Category[] | Category;
  // Field, Value
  filter?: Record<string, string | boolean | number>;
  // ISO 639-1 or 639-1 codes for localized values.
  languages?: string[];
}
