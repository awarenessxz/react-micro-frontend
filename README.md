# React Frontend Experiments

This project is to experiment with the different ways for teams to work together on a large and complex frontend 
application. 

## Key Concepts

It can be tough for multiple teams to work simultaneously on the same code base for frontend development especially 
when the product is large and complex. Suppose there are two teams working on the same frontend app. When Team B wants
to use a component created by Team A, the old school method would be to copy the codes and replicate it in Team B code.
This isn't very ideal. Hence, a better approach will be necessary.

### Shared Component Library

Some key benefits of a shared component library
- **Reusability** - teams will be much more aware of what's available instead of re-creating their own components
- **Collaborate Efficiently** - Easier to work with designers / across teams with platforms like **Storybook** or 
**Bit.dev**
- More consistent UI

### Micro Frontend

Some key benefits of Micro Frontend:
- **Improved Build Speed & Independent Deployment** - there is no need to rebuild the entire app when changing one 
small component. Especially for large apps
- **Reduced Code Duplication**: Shared options means that remotes will depend on host dependencies, if the host does 
not have a dependency, the remote will download its own. No code duplication, but built-in redundancy.

## Experiments

1. **[Experiment A - Component Library](ExperimentA)**
    - Using a custom reusable React Component Library to share common components across projects

2. **[Experiment B - Cam Jackson Micro Frontend Framework](ExperimentB)**
    - This is based on the article published by Cam Jackson in end 2019 on his idea on how to implement Micro-frontend.
    - **Findings**:
        1. There is an issue with linking microservices to container application
            - The current implementation depends on `assets-manifest.json` which is generated by `create-react-app`
            build scripts. 
        2. `react-app-rewired` is also installed in the Micro Frontend Projects to prevent code-splitting. But this
        seems to be resolvable. Refer to this commit - [c06170a](https://github.com/awarenessxz/react-micro-frontend/commit/c06170a272c71d4e2fa877bb26fa347cb48d3597)    
        3. As all our micro frontends and container will be hosted in different subdomains, we must enable CORS in all 
        our micro frontends

3. **[Experiment C - Webpack + Module Federation](ExperimentC)**
    - Module Federation is a JavaScript architecture invented by Zack Jackson, who then proposes to create a Webpack 
    plugin for it. The Webpack team agrees, and they collaborated to bring the plugin into Webpack 5.

## References
- **React Custom Reusable Component Library**
    - [Creating a React Component Library using Rollup, Typescript, Sass and Storybook](https://blog.harveydelaney.com/creating-your-own-react-component-library/)
    - [How to create react component library with typescript, rollup and storybook](https://medium.com/@dennisschneider/how-to-create-a-react-component-library-with-typescript-rollup-js-and-storybook-cc3fe95c9c44)
- **Micro Frontend - 2019: Cam Jackson Framework**
    - [Martinfowler.com](https://martinfowler.com/articles/micro-frontends.html)
    - [Micro Frontends - Extending microservice concepts to frontend development](https://micro-frontends.org/)
    - [5 steps to turn a random react application into micro frontend](https://medium.com/better-programming/5-steps-to-turn-a-random-react-application-into-a-micro-frontend-946718c147e7)
    - [How to develop microfrontends using React step by step](https://blog.bitsrc.io/how-to-develop-microfrontends-using-react-step-by-step-guide-47ebb479cacd)
- **Micro Frontend - 2020: Webpack Module Federation**
    - [Webpack 5 Module Federation: A game-changer in JavaScript architecture](https://indepth.dev/webpack-5-module-federation-a-game-changer-in-javascript-architecture)
        - [Merge Proposal: Module Federation](https://github.com/webpack/webpack/issues/10352) 
        - [module-federation.github.io](https://module-federation.github.io/)
        - [Module Federation Samples](https://github.com/module-federation/module-federation-examples)
        - [Video: Introducing Fedarated Modules in Webpack 5](https://www.youtube.com/watch?v=D3XYAx30CNc&feature=emb_title)
    - [Revolutionizing Micro Frontends with Webpack 5, Module Federation and Bit](https://blog.bitsrc.io/revolutionizing-micro-frontends-with-webpack-5-module-federation-and-bit-99ff81ceb0)
    - [Handling Routing](https://dev.to/marais/webpack-5-and-module-federation-4j1i)
    