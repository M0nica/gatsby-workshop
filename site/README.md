# Custom Tailwind Starter

[![Deploy with ZEIT Now](https://zeit.co/button)](https://zeit.co/new/project?template=https://github.com/Mozart409/gatsby-custom-tailwind)
[![license](https://img.shields.io/github/stars/Mozart409/gatsby-custom-tailwind?style=for-the-badge)](#license)
[![forks](https://img.shields.io/github/forks/Mozart409/gatsby-custom-tailwind?style=for-the-badge)](#forks)
[![stars](https://img.shields.io/github/stars/Mozart409/gatsby-custom-tailwind?style=for-the-badge)](#stars)

## [Demo](https://gct.mozart409.space)

<div align="center">
  <img src="https://image.ibb.co/cJjPN7/gatsby_tailwind.png" alt="Gatsby and Tailwind CSS logos">
</div>

<div align="center">
  <strong>A <a href="https://www.gatsbyjs.org/">Gatsby</a> starter styled using <a href="https://tailwindcss.com/">Tailwind</a>, a utility-first CSS framework.</strong><br />
  Uses <a href="https://www.purgecss.com/">Purgecss</a> to remove unused CSS.<br />
  <br />
  <br />
</div>

## Lighthouse Audit

<img src="https://res.cloudinary.com/gooddeed/image/upload/v1586015947/GitHub%20Screenshots/Gatsby-Custom-Tailwind/Lighthouse.png" alt="Lighthouse Audit">

## Features

#### Custom Fonts

<img src="https://res.cloudinary.com/gooddeed/image/upload/v1586065286/GitHub%20Screenshots/Gatsby-Custom-Tailwind/gatsby-browser.png" alt="Custom Fonts" style="width:33%">

You can import your npm packaged fonts via the <code>gatsby-browser.js</code>

<img src="https://res.cloudinary.com/gooddeed/image/upload/v1586066043/GitHub%20Screenshots/Gatsby-Custom-Tailwind/Tailwind.config.png" alt="Tailwind.config.js" style="width:33%">

Those fonts can be imported via the tailwind.config.js and used globally, e.g. <code>className="font-inter"</code> or <code>className="font-body"</code>. You can change the names as you wish. Remember "Spaces" wont be escaped, so use "Open Sans" instead.

#### gatsby-plugin-react-helmet

For SEO optimization

#### gatsby-plugin-purgecss

To remove unused CSS styles <br>
<img src="https://res.cloudinary.com/gooddeed/image/upload/v1586015946/GitHub%20Screenshots/Gatsby-Custom-Tailwind/purgecss.png" alt="purgecss" >

#### Husky + pretty-quick

```sh
 "husky": {
    "hooks": {
      "pre-commit": "pretty-quick --staged"
    }
  }
```

Automatic prettify all staged files before you commit.

## What is Tailwind?

> "Tailwind is a utility-first CSS framework for rapidly building custom user interfaces."
> –[Tailwind](https://tailwindcss.com)

## What is Gatsby?

> "Gatsby is a free and open source framework based on React that helps developers build blazing fast websites and apps." -[Gatsby](https://www.gatsbyjs.org/)

## Get started

Install Gatsby CLI:

```sh
yarn global add gatsby-cli
npm i --global gatsby-cli
```

Create new Gatsby project using this starter:

```sh
gatsby new my-new-website https://github.com/Mozart409/gatsby-custom-tailwind
```

Change the directory and start the dev server.

```sh
cd my-new-website
yarn start or npm start
```

## Build your site

Each time you build, the cache and public folder will be deleted to prevent stale data and files. The production build will be served with zeit/serve server. Alternatively you can build without deleting the cache and public folder.

```sh
"build": "gatsby clean && gatsby build",
"build:noclean": "gatsby build",
"serve": "serve -l 9000 public",
"prod": "yarn build && yarn serve",
```

## Format and lint

- `yarn fix` or `npm run fix` - Run Prettier and ESLint with the `--fix` option

## Resources

- [Gatsby documentation](https://www.gatsbyjs.org/docs/)
- [Tailwind documentation](https://tailwindcss.com/docs/what-is-tailwind/)
- [Prettier documentation](https://prettier.io/docs/en/index.html)
- [ESLint documentation](https://eslint.org/docs/user-guide/configuring)

## License

MIT
