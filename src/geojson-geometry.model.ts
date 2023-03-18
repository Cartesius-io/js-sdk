export type GeoJSONGeometry =
  | GeoJSONPoint
  | GeoJSONMultiPoint
  | GeoJSONLineString
  | GeoJSONMultiLineString
  | GeoJSONPolygon
  | GeoJSONMultiPolygon
  | GeoJSONGeometryCollection;

export interface GeoJSONPoint {
  type: 'Point';
  coordinates: [number, number];
}

export interface GeoJSONMultiPoint {
  type: 'MultiPoint';
  coordinates: [number, number][];
}

export interface GeoJSONLineString {
  type: 'LineString';
  coordinates: [number, number][];
}

export interface GeoJSONMultiLineString {
  type: 'MultiLineString';
  coordinates: [number, number][][]; // array of LineStrings
}

export interface GeoJSONPolygon {
  type: 'Polygon';
  coordinates: [number, number][][]; // array of LinearRings
}

export interface GeoJSONMultiPolygon {
  type: 'MultiPolygon';
  coordinates: GeoJSONPolygon['coordinates'][]; // array of Polygons
}

export interface GeoJSONGeometryCollection {
  type: 'GeometryCollection';
  geometries: GeoJSONGeometry[];
}
