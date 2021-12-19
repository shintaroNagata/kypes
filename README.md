# kypes

Improve Kintone customization developer's experience by provide type definitions for `kintone`!

## Setup

Note: This package has not been published to `npm` yet. To try this package, you need to use `yarn link`.

1. clone this project, and execute `yarn link`.

```sh
$ cd path/to/your/workspace
$ git clone https://github.com/shintaroNagata/kypes.git
$ cd kypes
$ yarn build
$ yarn link
```

2. make a local project, and execute `yarn link kypes`.

```sh
$ cd ../
$ mkdir sample-local-project
$ cd sample-local-project
$ yarn init -y
$ yarn link kypes
```

3. setup TypeScript.

```sh
$ yarn add -D typescript
$ yarn tsc --init
```

4. create a Typescript file, and import this package.

```ts
// index.ts
import "kypes";

// write your customization codes!
```
