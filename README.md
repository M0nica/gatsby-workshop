<div> 
  <h1 align="center">Gatsby Workshop</h1>
  <p>
    This workshop covers the fundamentals of developing fast, accessible sites with <a href="https://www.gatsbyjs.com/">Gatsby</a>, a React framework, and dive deep into the building blocks you’ll need to build your own custom Gatsby sites.
    
   After completing a mix of lectures and exercises you’ll be able to build a Gatsby site from the ground up and deploy it live. In particular, you’ll learn the ins and outs of creating Gatsby sites, from selecting a starter or theme, using GraphQL to generate the data layer, making Markdown content interactive with MDX, deploying your site, and more!

  </p>
</div>

<hr />

## Prerequisites

- This workshop is for JavaScript developers who haven't had extensive experience with Gatsby and want a deeper understanding of Gatsby.

## System Requirements

- [git][git] v2 or greater
- [NodeJS][node] v12 or greater
- [npm][npm] v6 or greater

All of these must be available in your `PATH`. To verify things are set up
properly, you can run this:

```shell
git --version
node --version
npm --version
```

If you have trouble with any of these, learn more about the PATH environment
variable and how to fix it here for [windows][win-path] or
[mac/linux][mac-path].

## Setup

After you've made sure to have the correct things (and versions) installed, you
should be able to just run a few commands to get set up:

```
git clone https://github.com/m0nica/gatsby-workshop.git
cd site
npm install
```

or

```
git clone https://github.com/m0nica/gatsby-workshop.git
cd site
yarn
```

## Running the app

To get the app up and running (and really see if it worked), run:

```shell
cd site
npm run start
```

or

```shell
cd site
yarn start
```

This should start up the site locally in your browser at http://localhost:8000/. For reference the production deployment of the inital site looks like: https://deploy-preview-4--gatsbyjsdemo.netlify.app/ and the production deploymeny of the final site looks like: https://deploy-preview-14--gatsbyjsdemo.netlify.app/ (subject to change).


### Exercises

The exercises each have a branch associated with them. You can find the exercises under `site/INSTRUCTIONS/` in files labelled like `01_instructions.md`. To get the latest working code for an exercise check out the exercise solution branch.

- [00 • Running a Gatsby Application Locally](site/INSTRUCTIONS/00_instructions.md)
- [01 • Customize Gatsby Site Information](site/INSTRUCTIONS/01_instructions.md)
- [02 • Make Footer Data Dynamic](site/INSTRUCTIONS/02_instructions.md)
- [03 • Create a new page in Gatsby](site/INSTRUCTIONS/03_instructions.md)
- [04 • Create a new navigation link](site/INSTRUCTIONS/04_instructions.md)
- [05 • Add site-wide banner](site/INSTRUCTIONS/05_instructions.md)
- [06 • Adding Speaker/Talk Data Type](site/INSTRUCTIONS/06_instructions.md)
- [07 • Render Speaker/Talk Data Type](site/INSTRUCTIONS/07_instructions.md)
- [08 • Programmatically Generate Speaker Pages](site/INSTRUCTIONS/08_instructions.md)
- [09 • Link to Speaker Pages](site/INSTRUCTIONS/09_instructions.md)
- [10 • Add Talk Descriptions and Render on Speaker Pages](site/INSTRUCTIONS/10_instructions.md)
- [11 • Add Page Listing All Speakers](site/INSTRUCTIONS/11_instructions.md)

### Workflow

- Checkout the main branch
- Read through the instructions in `site/INSTRUCTIONS` and complete one set of instructions at a time
- Start exercise
- Go through every mentioned file and follow the instructions
- We all come back together
- I go through the solution and answer questions
- Move on to the next exercise.
- Repeat.

### View Slides

- Go to www.monica.dev/gatsbyworkshop
-  The slides can be run locally from this repo by doing the following:
  - `cd slides`
  - `npm install`
  - `npm run dev`
  - View slides locally at: [http://localhost:3000/](http://localhost:3000/)

<!-- prettier-ignore-start -->
[npm]: https://www.npmjs.com/
[node]: https://nodejs.org
[git]: https://git-scm.com/
[win-path]: https://www.howtogeek.com/118594/how-to-edit-your-system-path-for-easy-command-line-access/
[mac-path]: http://stackoverflow.com/a/24322978/971592
<!-- prettier-ignore-end -->
