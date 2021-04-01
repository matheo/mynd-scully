# @myndpm/scully-test

Proof of Concept with [scully](https://scully.io/) and [sanity](https://www.sanity.io/).

## Serve

Run `npm start` for a dev server and browse `http://localhost:4200/`.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Deploy Sanity

Run `npm run sanity:deploy` to deploy the statically built Sanity Studio.  
Also run `npm run schema:deploy` to sync the GraphQL API.

## Render Static Files

Run `npm run render` and after the files are generated you could  
also run `npm run scully:serve` to serve the dist files.
