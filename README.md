# Instalação do projeto

- Precisa do [node.js](https://nodejs.org/en/) instalado
- Depois instale os pacotes globalmente:

```
  npm install -g electron-prebuilt
  npm install -g aurelia-cli
  npm install -g yarn
```

## Install for linux

- https://electronjs.org/docs/development/build-instructions-linux#prerequisites

## Getting Started

From the project folder, execute the following commands:

```
yarn install
```

## Development Build

To build the app in development mode run:

```
yarn build:dev
```

To build the app in development/watch mode with HMR in the renderer, run:

```
yarn watch
```

and in another console start the app with:

```
yarn start
```

## Production Build

To build the app in production mode and run it, run:

```
yarn build && yarn start
```

## Building Releases

To package the app and create a distributable for the current platform, run:

```
yarn build && yarn release
```
