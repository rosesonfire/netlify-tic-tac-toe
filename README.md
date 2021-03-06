# Tic Tac Toe

A simple tic tac toe game with
- React
- Redux
- Redux-obervables
- GraphQL
- NextJS

<img src="tic_tac_toe.gif" width="600"/>

Forked code from my other project: [Understand Qur'an](https://github.com/rosesonfire/understand-quran)

# Features

1. Persist play state on page reload
1. Shows game logs
1. [Static site generation with NextJS](front-end/README.md#Static-site-generation-with-NextJS)

# Requirements for development

1. Docker (^18.03.1)
1. Docker Compose (^1.27.3)

# Quick start

```bash
# Runs all services
./start

# View logs
./logs

# Once front-end is up you can access the site via http://localhost:3000
```

# Tech used

## Languages

1. <img src="icons/javascript.svg" height="16"/> Javascript
1. <img src="icons/typescript.svg" height="16"/> Typescript
1. <img src="icons/shellscript.png" height="16"/> Shell script
1. <img src="icons/css.png" height="16"/> CSS
1. <img src="icons/sass.png" height="16"/> SCSS
1. <img src="icons/yml.png" height="16"/> YAML
1. <img src="icons/graph_ql.png" height="16"/> GraphQL

## Frameworks and libraries
1. <img src="icons/react.png" height="16"/> ReactJS
1. <img src="icons/nextjs.jpeg" height="16"/> NextJS
    - With static site generation
1. <img src="icons/redux.svg" height="16"/> Redux
    - Reselect
    - React Redux
    - Redux Toolkit
    - Next Redux Wrapper
1. <img src="icons/rxjs.png" height="16"/> RxJS
1. <img src="icons/redux_observable.gif" height="16"/> Redux Observable
1. <img src="icons/docker.jpeg" height="16"/> Docker
1. <img src="icons/docker_compose.png" height="16"/> Docker Compose
1. <img src="icons/stylelint.png" height="16"/> Stylelint
1. <img src="icons/eslint.png" height="16"/> Eslint
1. <img src="icons/webpack.png" height="16"/> Webpack
1. <img src="icons/apollo_server.svg" height="16"/> Apollo server express
1. <img src="icons/apollo_client.jpg" height="16"/> Apollo client

## Conventions
1. [Suite CSS](https://suitcss.github.io/)
1. [Ducks pattern](https://github.com/erikras/ducks-modular-redux)

# Services

- [front-end](front-end/README.md): the React front end
- [api-server](api-server/README.md): a graphQL server for serving the data

# Production

Set `ENV=production` in [.env](.env).

## URLs

- front-end: http://localhost:3000
- api-server: http://localhost:4000
- [Static site generation](front-end/README.md#Static-site-generation-with-NextJS)

# Development

Set `ENV=development` in [.env](.env).

## URLs

- front-end: http://localhost:3001
- api-server: http://localhost:4001

## Debug

- [front-end](front-end/README.md#debug)
- [api-server](api-server/README.md#debug)

# Commands

## Run services

```bash
./start [<service name>]
```

## Restart services

```bash
./restart <service name>
```

## Stop a service

```bash
./stop <service name>
```

## Stop all services and remove containers

```bash
./killall
```

## View logs

```bash
./logs <service name>
```

## Shell into services

```bash
./shell <service name>
```
