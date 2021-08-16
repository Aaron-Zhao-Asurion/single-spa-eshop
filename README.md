# Single SPA Sample Monorepo - eshop
> This monorepo demonstrates the use of [Single SPA](https://single-spa.js.org/) to orchestrate micro frontends. eshop is an imitation of Amazon.com, it has only a few UI components right now but more to come to demonstrate more complex use cases. 

## Getting started
This monorepo uses yarn workspaces to manage the project scope, run the following commands in the root project directory to start the app locally

```sh
# first time install packages
$ yarn install
# start all micro front-ends
$ yarn start
```

http://localhost:9000

## Topics
* [Single SPA Layout](#single-spa-layout)
* [Routing](#routing)
* [Cross Micro App Communication](#cross-micro-app-communication)
* [Redirects](#redirects)
