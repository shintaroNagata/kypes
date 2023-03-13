# kypes-rest

Type definitions for the Kintone REST APIs.

## Install

```console
npm install --save-dev @shin-chan/kypes-rest
```

## Usage

```ts
import { KintoneApi } from "@shin-chan/kypes-rest";

const recordJsonParam: KintoneApi.RecordsJson["GET"]["request"] = {
  app: 1,
  fields: ["Date", "Title" /* ... */],
};

const response = await kintone.api(
  "/k/v1/records.json",
  "GET",
  recordJsonParam
);

/* ... */
```

## Disclaimer

This OSS is my own personal work and does not have any relationship with Cybozu Inc. or any other organization which I belong to.

## License

kypes-rest is [MIT Licensed](LICENSE)
