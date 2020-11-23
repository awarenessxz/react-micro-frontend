# Micro Frontend - using Webpack Module Federation

This is an implementation of module federation using examples from [module-federation-examples](https://github.com/module-federation/module-federation-examples)

```
root
├── container                # React Application that consumes the Micro-Fontends
├── mf-bidirectional         # React Micro-Frontend 1 (Host + Remote)
└── mf-remote                # React Micro-Frontend 2 (Remote)
```

## Usage

- **Test `mf-bidirectional` as a host**
    - Things you can try:
        - stop `mf-remote` and you will notice that `mf-bidirectional` will crash.
         
    - Start all the apps
        1. Start the remote app
            - `cd mf-remote`
            - `yarn install`
            - `yarn start`
        
        2. Start the Host/Remote app **[Will NOT work without `mf-remote` running]**
            - `cd mf-bidirectional`
            - `yarn install`
            - `yarn start`

- **Test the Main App (Dynamic Loading + Redux + Routing)**
    - Things you can try:
        - stop `mf-remote` or `mf-bidirectional` or both MFE. **`container` app will crash.
    
    - Start all the apps
        1. Start the remote app
            - `cd mf-remote`
            - `yarn install`
            - `yarn start`
        
        2. Start the Host/Remote app **[Will NOT work without `mf-remote` running]**
            - `cd mf-bidirectional`
            - `yarn install`
            - `yarn start`
        
        3. Start the Container app **[Will NOT work without `mf-remote` or `mf-bidirectional` running]**
            - `cd container`
            - `yarn install`
            - `yarn start`
