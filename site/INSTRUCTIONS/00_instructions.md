# 00 • Running a Gatsby Application Locally

## Background 📚

Gatsby websites are JavaScript applications and generally have a `package.json` that defines dependencies and scripts for development. In order to run this particular site you should:

1. Install dependencies by running either:
   `yarn`
   or `npm install`
2. Run the app locally by running `yarn start` or `npm run start`. Those scripts are shorthands for this particular application that run `gatsby develop` under the hood which kicks-off a local development environment at https://localhost:8000

## Exercise 🤓

- Install dependencies
- Run the application locally and visit http://localhost:8000 and http://localhost:8000/___graphql

Note: Changes to the gatsby-config require restarting the server to see them on the site (i.e. CTRL + C and then run `npm run start`)

## Files 🗂

- package.json
