# ST Web App POC

This is a POC(proof of concept) for the ST Web App.

The project is built with Vite, React, Tailwind CSS, React Hook Form, Zod, Redux, Redux Toolkit and TypeScript.

## Table of Contents

- [Overview](#overview)
- [Requirements](#requirements)
- [Getting Started](#getting-started)
- [Test Suite](#testing)
- [DevTools](#devtools)
- [Installed Packages](#installed-packages)

## Overview

Built with type safety, scalability, and developer experience in mind. A batteries included Vite + React template.

- [pnpm](https://pnpm.io) - A strict and efficient alternative to npm with up to 3x faster performance
- [TypeScript](https://www.typescriptlang.org) - A typed superset of JavaScript designed with large scale applications in mind
- [ESLint](https://eslint.org) - Static code analysis to help find problems within a codebase
- [Prettier](https://prettier.io) - An opinionated code formatter
- [Vite](https://vitejs.dev) - Feature rich and highly optimized frontend tooling with TypeScript support out of the box
- [React](https://react.dev) - A modern front-end JavaScript library for building user interfaces based on components
- [Tailwind CSS](https://tailwindcss.com) - A utility-first CSS framework packed with classes to build any web design imaginable
- [React Hook Form](https://react-hook-form.com) - Performant, flexible and extensible forms with easy-to-use validation
- [Zod](https://zod.dev) - TypeScript-first schema validation with static type inference
- [React Testing Library](https://testing-library.com) - A very light-weight, best practice first, solution for testing React components
- [Vitest](https://vitest.dev) - A blazing fast unit test framework powered by Vite
- [Playwright](https://playwright.dev) - Enables reliable end-to-end testing for modern web apps
- [Nivo](https://nivo.rocks) - A rich set of data visualization components, built on top of D3 and React
- [react-i18next](https://react.i18next.com/) - A powerful internationalization framework for React/React Native based on i18next
- [Faker](https://fakerjs.dev/) - Generate massive amounts of fake (but realistic) data for testing and development
- [Dayjs](https://day.js.org/en/) - A minimalist JavaScript library that parses, validates, manipulates, and displays dates and times for modern browsers
- [Husky](https://github.com/typicode/husky#readme) + [Commitizen](https://github.com/commitizen/cz-cli#readme) + [Commitlint](https://github.com/conventional-changelog/commitlint#readme) - Git hooks and commit linting to ensure use of descriptive and practical commit messages
- [ts-reset](https://github.com/total-typescript/ts-reset#readme) - Improvements for TypeScripts built-in typings for use in applications
- [Docker](https://www.docker.com) - Containerization tool for deploying your vite-react-boilerplate app

A more detailed list of the included packages can be found in the [Installed Packages](#installed-packages) section. Packages not shown above include Devtools, ui helper libraries, and eslint plugins/configs.

## Requirements

- [NodeJS 18+](https://nodejs.org/en)
- [pnpm](https://pnpm.io) (or equivalent)
- [vscode](https://code.visualstudio.com)
- [Cursor](https://www.cursor.com)
- [Git](https://git-scm.com)

## Getting Started

Getting started is a simple as cloning the repository

```shell
git clone git@xxxx.git
```

Changing into the new directory

```shell
cd st-web-poc
```

Installing dependencies

```shell
pnpm install
```

Start the development server

```shell
pnpm run dev
```

Build the project

```shell
pnpm run build:all
```

Build the app

```shell
pnpm run build
```

Build the server

```shell
pnpm run build:server
```

Start the production server

```shell
pnpm run production
```

Run the unit tests

```shell
pnpm run test
```

Run the tests in coverage mode

```shell
pnpm run test:coverage
```

Run the linting

```shell
pnpm run lint
```

Run the package analyzer

```shell
pnpm run analyze
```

## Testing

Unit testing is handled by React Testing Library and Vitest while End-to-End (E2E) Testing is conducted by Playwright.

If you'd like to run all tests, Unit and E2E alike, execute the following command:

```shell
pnpm run test
```

### Unit Testing

If you'd like to execute unit tests specifically, the below command will execute vitest:

```shell
pnpm run test
```

If instead you are interested in coverage reporting, run:

```shell
pnpm run test:coverage
```

### End-to-End (E2E) Testing

Running E2E tests use a similar syntax to running unit tests:

```shell
pnpm run test:e2e
```

If you wish to see the reports, run:

```shell
pnpm run test:e2e:report
```

## Devtools

This project includes a set of Devtools. Some are additional package dependencies whereas others come built-in to the packages themselves.

### Devtool dependencies

- [React Devtools](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en-GB&utm_source=ext_sidebar)
- [Redux Devtools](https://chromewebstore.google.com/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en-GB&utm_source=ext_sidebar)
- [React Hook Form Devtools](https://react-hook-form.com/dev-tools)

## Installed Packages

A simplified list can be found in the [Overview](#overview) section.

### Base

- [NodeJS](https://nodejs.org/en)
- [pnpm](https://pnpm.io)
- [TypeScript](https://www.typescriptlang.org)
- [Vite](https://vitejs.dev)
- [React](https://react.dev)
- [React Router](https://reactrouter.com)
- [Tailwind CSS](https://tailwindcss.com)

### Routing

- [React Router](https://reactrouter.com)

### Linting & Formatting

- [ESLint](https://eslint.org)
  - [typescript-eslint](https://typescript-eslint.io)
  - [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier#readme)
  - [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react#readme)
  - [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
  - [eslint-plugin-react-refresh](https://github.com/ArnaudBarre/eslint-plugin-react-refresh)
  - [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn#readme)
  - [eslint-plugin-storybook](https://github.com/storybookjs/eslint-plugin-storybook#readme)
- [Prettier](https://prettier.io)

### State Management

- [Redux](https://redux.js.org)
- [Redux Toolkit](https://redux-toolkit.js.org)

### UI

- [Tailwind CSS](https://tailwindcss.com)
- [heroicons](https://heroicons.com)
- [Joy UI](https://mui.com/joy-ui/getting-started/)

### Forms

- [React Hook Form](https://react-hook-form.com)
- [Zod](https://zod.dev)

### Data Visualization

- [Nivo](https://nivo.rocks)
  - [Line](https://nivo.rocks/line/)
  - [Bar](https://nivo.rocks/bar/)
  - [Pie](https://nivo.rocks/pie/)

### Test Suite

- [Vitest](https://vitest.dev)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Playwright](https://playwright.dev)

### Git

- [Husky](https://github.com/typicode/husky#readme)
- [Commitizen](https://github.com/commitizen/cz-cli#readme)
- [Commitlint](https://github.com/conventional-changelog/commitlint#readme)

### Other

- [i18next-browser-languageDetector](https://github.com/i18next/i18next-browser-languageDetector)
- [i18next](https://www.i18next.com/)
- [react-i18next](https://react.i18next.com/)
- [ts-reset](https://github.com/total-typescript/ts-reset#readme)
- [Faker](https://fakerjs.dev/)
- [Dayjs](https://day.js.org/en/)
