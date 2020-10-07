<a href="https://app.netlify.com/start/deploy?repository=https://github.com/M0nica/gatsby-workshop"><img src="https://www.netlify.com/img/deploy/button.svg" alt="deploy to netlify button"></a>

## [Demo](https://deploy-preview-14--gatsbyjsdemo.netlify.app)

<div align="center">
  <img src="https://image.ibb.co/cJjPN7/gatsby_tailwind.png" alt="Gatsby and Tailwind CSS logos">
</div>

## Get started

Change the directory and start the dev server.

```sh
cd site
yarn or npm install
yarn start or npm start
```

## Technologies Used:

### What is Tailwind?

> "Tailwind is a utility-first CSS framework for rapidly building custom user interfaces."
> –[Tailwind](https://tailwindcss.com)

### What is Gatsby?

> "Gatsby is a free and open source framework based on React that helps developers build blazing fast websites and apps." -[Gatsby](https://www.gatsbyjs.org/)

## Build your site

Each time you build, the cache and public folder will be deleted to prevent stale data and files. Alternatively you can build without deleting the cache and public folder.

```sh
"build": "gatsby clean && gatsby build",
"build:noclean": "gatsby build",
"serve": "serve -l 9000 public",
"prod": "yarn build && yarn serve",
```

## Format and lint

- `yarn fix` or `npm run fix` - Run Prettier and ESLint with the `--fix` option

## Lighthouse Audit

<img src="https://res.cloudinary.com/gooddeed/image/upload/v1586015947/GitHub%20Screenshots/Gatsby-Custom-Tailwind/Lighthouse.png" alt="Lighthouse Audit">

## Resources

- [Gatsby documentation](https://www.gatsbyjs.org/docs/)
- [Tailwind documentation](https://tailwindcss.com/docs/what-is-tailwind/)
- [Prettier documentation](https://prettier.io/docs/en/index.html)
- [ESLint documentation](https://eslint.org/docs/user-guide/configuring)

## License

MIT
