# Micro Frontend - using Webpack Module Federation

```
root
├── container                # React Application that consumes the Micro-Fontends
└── mf-bidirectional         # React Micro-Frontend 1 (Host + Remote)
├── mf-remote                # React Micro-Frontend 2 (Remote)
```

**Import Context Note:**
- **container** -- consumes remote components from both `mf-bidirection` and `mf-remote`
    - **dynamic loading** -- loads the remote components dynamically. Hence, there is a fallback if `mf-bidirection` 
    or `mf-remote` is down
    - **routing** -- demonstrates how to merge routing config from remote micro frontend.
    - **state-management** -- demonstrates how to merge redux states from remote micro frontend using 
    [reducer injection approach](https://redux.js.org/recipes/code-splitting#reducer-injection-approaches)
- **mf-bidirectional** -- provides remote components for `container` and consumes components from `mf-remote`
    - **static loading** -- loads remote components statically. Hence, if `mf-remote` is down, `mf-bidirection` will 
    be down as well
    - **routing** -- has its own routes. Implemented `react-router-dom` to demonstrate how to expose routing to consumer
    - **state-management** -- **no stage management implemented**, simply consumes `mf-remote` that has state-management.
- **mf-remote** -- provides remote components for `container` and `mf-remote`
    - **state-management** -- has its own state management. Implemented `redux` to demonstrate how to use redux

## Usage

- Test only `mf-bidirectional` & `mf-remote`
    1. Start the remote app
        - `cd mf-remote`
        - `yarn install`
        - `yarn start`
    
    2. Start the Host/Remote app **[Will not work without `mf-remote` running]**
        - `cd mf-bidirectional-static`
        - `yarn install`
        - `yarn start`

- Test the Main App (Dynamic Loading + Redux + Routing)
    - Start all the apps
        1. Start the remote app
            - `cd mf-remote`
            - `yarn install`
            - `yarn start`
        
        2. Start the Host/Remote app **[Will not work without `mf-remote` running]**
            - `cd mf-bidirectional`
            - `yarn install`
            - `yarn start`
        
        3. Start the Container app **[Will not work without `mf-remote` running because `mf-bidirectional` depends 
        on `mf-remote`]**
            - `cd container`
            - `yarn install`
            - `yarn start`
            
    - Some Demo you can try
        - with all 3 application running, stop `mf-bidirectional` app, `container` app shouldn't crash.
        - stop `mf-remote` and all the apps will crash. This is due to the fact that we are statically loading the 
        micro frontend app from `index.html` at compile time. Refer to `container` app on how it dynamically loads the 
        micro frontend apps.

