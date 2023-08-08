import { GeoJSONGeometry, GeoJSONPoint } from './geojson-geometry.model';

export type CategoryMultiLang = Category & Record<string, string>;
interface Category {
  type: string;
  specification?: string;
}

interface Centroid {
  geometry: GeoJSONPoint;
  accuracy: string;
}

interface AdminComponent {
  local?: string;
  abbreviation?: string;
}

export type AdminComponentMultiLang = AdminComponent & Record<string, string>;

interface AdminHierarchy {
  continent?: AdminComponentMultiLang;

  ocean?: AdminComponentMultiLang;

  empire?: AdminComponentMultiLang;

  country?: AdminComponentMultiLang;

  dependency?: AdminComponentMultiLang;

  marinearea?: AdminComponentMultiLang;

  macroregion?: AdminComponentMultiLang;

  region?: AdminComponentMultiLang;

  macrocounty?: AdminComponentMultiLang;

  county?: AdminComponentMultiLang;

  locality?: AdminComponentMultiLang;

  borough?: AdminComponentMultiLang;

  localadmin?: AdminComponentMultiLang;

  neighbourhood?: AdminComponentMultiLang;
}

interface Address {
  street?: string;

  housenumber?: string;

  postcode?: string;

  unit?: string;

  housename?: string;

  postbox?: string;

  city?: string;

  country?: AdminComponentMultiLang;

  hamlet?: string;

  region?: AdminComponentMultiLang;

  neighborhood?: AdminComponentMultiLang;

  state?: string;

  county?: AdminComponentMultiLang;

  flats?: string;
}

export type NameMultiLang = Name & Record<string, string>;
interface Name {
  default?: string;

  local?: string;

  short?: string;

  ref?: string;

  alt?: string;
}

export type DisplayValueMultiLang = DisplayValue & Record<string, string>;
interface DisplayValue {
  abbreviation: string;

  local: string;
}

export interface ValueUnit {
  value: number;

  unit?: string;
}

type ValueUnitComponent = ValueUnit | string;

interface BuildingInformation {
  height?: ValueUnitComponent;

  flats?: number;

  levels?: number;

  fireproof?: boolean;

  roofShape?: string;

  material?: string;

  color?: string;
}

interface RoadInformation {
  maxSpeed?: ValueUnitComponent;

  maxAxleLoad?: ValueUnitComponent;

  maxHeight?: ValueUnitComponent;

  maxLength?: ValueUnitComponent;

  minSpeed?: ValueUnitComponent;

  lanes?: string;

  incline?: string;

  surface?: string;

  lit?: string | boolean;

  smoothness?: string;

  width?: ValueUnitComponent;

  noExit?: boolean;

  oneWay?: boolean;

  charge?: ValueUnitComponent;
}

interface RailwayInformation {
  electrified?: string | boolean;

  trackNumber?: string;

  usage?: string;

  voltage?: string;
}

interface Timezone {
  name: string;

  abbreviation?: string;

  offset?: number;

  isDst?: boolean;
}

interface Access {
  general?: string | boolean;

  foot?: string | boolean;

  atv?: string | boolean;

  bdouble?: string | boolean;

  bicycle?: string | boolean;

  horse?: string | boolean;

  motorboat?: string | boolean;

  hazmat?: string | boolean;

  emergency?: boolean;
}

interface Contact {
  operator?: string;

  owner?: string;

  email?: string;

  phone?: string;

  website?: string;

  fax?: string;
}

interface Currency {
  code?: string;

  symbol?: string;

  name?: string;

  namePlural?: string;

  decimalDigits?: number;
}

interface Information {
  building?: BuildingInformation;

  road?: RoadInformation;

  railway?: RailwayInformation;

  currency?: Currency;

  timezone?: Timezone;

  phonePrefix?: string;

  access?: Access;

  contact?: Contact;

  openingHours?: string;

  floodedByTidal?: string | boolean;

  wheelchairAccessible?: string | boolean;

  toilets?: string | boolean;

  wheelchairToilets?: string | boolean;

  internetAccess?: string | boolean;

  location?: string;

  parking?: string | boolean;

  shelter?: string | boolean;

  cuisine?: string | boolean;

  population?: number;

  languages?: string[];
}

interface References {
  wikidata?: string;

  wikipedia?: string;

  openstreetmap?: string;

  image?: string;
}

interface Properties {
  category?: CategoryMultiLang;

  centroid: Centroid;

  address?: Address;

  displayValue?: DisplayValueMultiLang;

  adminHierarchy?: AdminHierarchy;

  name?: NameMultiLang;

  information?: Information;

  references?: References;

  w3w?: Record<string, string>;
}

//endregion

export default interface CartesiusGeoFeature {
  id: string;

  geometry: GeoJSONGeometry;

  bbox?: [number, number, number, number];
  properties: Properties;
}
