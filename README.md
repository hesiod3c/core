# Descco UI - Core

[![licence mit](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](http://hemersonvianna.mit-license.org/)
[![issues](https://img.shields.io/github/issues/descco-ui/core.svg?style=flat-square)](https://github.com/descco-ui/core/issues)

## Prerequisites

- [Node >= v6.10.3](https://nodejs.org/en/)
- NPM >= v3.10.10
- [Yarn >= v0.24.4](https://yarnpkg.com/en/docs/install#linux-tab) or `npm install -g yarn`

## Install

```
yarn
```

## In the your project

```bash
npm install --save-dev @descco/ui-core
// or
yarn add --dev @descco/ui-core
```

```bash
// package.json
"devDependencies": {
  "@descco/ui-core": "vX.X.X"
}
```

## Build

```
yarn build
```

## Lint

```bash
yarn lint
//[Rules in ESLint](http://eslint.org/docs/rules/)
```

## Test

```
yarn test
```

## Release

```bash
 npm install -g release-it
```
### Usage

Current release: v1.0.0-beta.4

Command:

```bash
release-it v1.0.0-beta.5
```

Questions and answers

**Release source repo**

```sh
- ? Show updated files? `Yes`
- M  package.json

- ? Commit (Release v1.0.0-beta.5)? `Yes`
- ? Tag (v1.0.0-beta.5)? `Yes`
- ? Push? `Yes`
- ? Publish "iron-fist" to npm? `No`
```

## Manual

1. [Git Flow](./docs/manual/01-git-flow.md)
2. [Commits](./docs/manual/02-commits.md)
3. [Architecture](./docs/manual/03-architecture.md)
4. [Dependencies](./docs/manual/04-dependencies.md)
5. [Technologies](./docs/manual/05-technologies.md)
6. [Identation (code style)](./docs/manual/06-identation-code-style.md)
7. [CSS (code style)](./docs/manual/07-css-code-style.md)
8. [Javascript (code style)](./docs/manual/08-javascript-code-style.md)

## Contributing

- Fork it!
- Create your feature branch: `git checkout -b my-new-feature`
- Commit your changes: `git commit -m 'Add some feature'`
- Push to the branch: `git push origin my-new-feature`
- Submit a pull request

## Log

Check [Releases](https://github.com/descco-ui/core/releases) for detailed changelog.

## License

[MIT license](http://hemersonvianna.mit-license.org/) © Hemerson Vianna

**[⬆ back to the top](#prerequisites)**
