# React Component Library

react-component-library is a React Library which contains a collection of custom reusable React Components, documented with storybook and tested using Jest & React-Testing-Library. The intention is not to re-create the wheel, hence most of the React Component are created using third party libraries and stylesheets.

## Technology Stack

This library was designed using the following technology decisions:

- **React**
- **Typescript** (superset of JavaScript)
- **Eslint & Prettier**
- **Rollup** (javascript module bundler) for bundling the library and publishing to npm.
- **Storybook** (for documenting & developing/testing UI components in isolation).
- **Jest & React-Testing-Library** (for testing).
- **CSS Modules & SASS** (for styling)

## Usage

To use `react-component-libray` in your project, do the following:

1. Adding Library as dependency
    - `yarn add react-component-library`
2. Import components
    - `import { TestComponent } from 'react-component-library';`
