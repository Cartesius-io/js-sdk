<h1 align="center"> Cartesius SDK</h1>

> Please be aware that the Cartesius API and therefore also this package is currently in public beta. We intend to release a stable v1 of the API mid-2023! In the meantime you can reach out to us if you have any questions ([info@cartesius.io](https://cartesius.io/contact))

<p align="center">
  Welcome to the Cartesius SDK for JavaScript/TypeScript!
  The Cartesius API is a powerful geocoding and geolocation intelligence tool that provides access to over 3 billion geo-features from multiple sources.
  With the Cartesius SDK, you can easily integrate the capabilities of the Cartesius API and add location-awareness to your application.
</p>
<p align="center">
  The SDK provides an interface for performing common geolocation tasks such as address and placename autocomplete, reverse and forward geocoding and much more.
  Whether you're building a mapping application, a logistics platform, or any other location-based service, Cartesius can help you deliver better results to your users.
</p>

<hr>

**You are just looking for the complete documentation? Click [here](https://docs.cartesius.io/)!**
If you are looking for ready to use Geo-search/Autocomplete components, check out `@cartesius/components` <small>(coming soon!)</small>

## Usage

If you do not have an API-Key, you can simply create one [here](https://cartesius.io/plans-and-pricing/).

```bash
  yarn add @cartesius/sdk # or
  npm i @cartesius/sdk
```

You can safely use this package in the browser or with Node.js. Bun and Deno should work as well but are currently not supported.

```typescript
import { CartesiusClient } from "@cartesius/sdk" // ESM or
const { CartesiusClient } = require("@cartesius/sdk") // CJS

const client = new CartesiusClient({
  apiKey: '<YOUR-API-KEY>',
});

const result = await client.autocomplete("Freiheitsst", {
  languages: ["deu", "en"], // ISO 3166 ALPHA-2 or ALPHA-3
  fields: ["shape", "displayValue", "category"],
  // ... check documentation for detailed overview of options
})
```

Result would look like this (`CartesiusApiResponse<CartesiusGeoFeature[]>`). For a detailed schema of the Cartesius Geo-Feature click [here](https://docs.cartesius.io/reference/geo-feature-model).

```json
{
  "code": 200,
  "status": "success",
  "data": [
    {
      "id": "3af175223969876389ee96a0bf1a29ad",
      "type": "Feature",
      "bbox": [-74.04510690000001, 40.6888049, -74.0439637, 40.689674100000005],
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [-74.045004, 40.6892215],
            [-74.04510230000001, 40.6891073],
            [-74.0449107, 40.689072100000004],
            ...
          ]
        ]
      },
      "properties": {
        "centroid": {
          "geometry": {
            "coordinates": [-74.04454394214909, 40.689244288823055],
            "type": "Point"
          },
          "accuracy": "centroid"
        },
        "displayValue": {
          "local": "Statue of Liberty, New York, 10004, United States of America",
          "abbreviation": "Statue of Liberty, NYC, 10004, USA",
          "eng": "Statue of Liberty, New York, 10004, United States of America",
          "deu": "Freiheitsstatue, New York City, 10004, Vereinigte Staaten"
        },
        "category": { "type": "tourism", "specification": "attraction" },
        ...
```

The package is **non-throwing**, every error will be represented as `CartesiusApiResponse`. Success is being indicated with the `status` property and the HTTP Status code `code`.
If there has been an error with the request on the client side, the response will have the code -1. Check the messages for a detailed error descriptions.

# Documentation

The complete documentation with examples for all features can be found [here](https://docs.cartesius.io/).