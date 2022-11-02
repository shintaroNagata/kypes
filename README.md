# kypes

Improve Kintone customization developer's experience by provide type definitions for `kintone`!

## Setup

Note: This package has not been published to `npm` yet. To try this package, you need to use `npm link`.

1. clone this project, and execute `npm link`.

```sh
$ cd path/to/your/workspace
$ git clone https://github.com/shintaroNagata/kypes.git
$ cd kypes
$ npm ci
$ npm run build
$ npm link
```

2. make a local project, and execute `npm link kypes`.

```sh
$ cd ../
$ mkdir sample-local-project
$ cd sample-local-project
$ npm init -y
$ npm link kypes
```

3. setup TypeScript.

```sh
$ npm install --save-dev typescript
$ npx tsc --init
```

4. create a Typescript file, and import this package.

```ts
// index.ts
import "kypes";

// write your customization codes!
```
