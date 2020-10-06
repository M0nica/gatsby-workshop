# 04 • Create a new navigation link

## Background 📚

Gatsby automagically turns Reacts component defined in `src/pages/*`into pages. The page will be created based on the default export in the file. For example you can look at the starter code and see that the component defined in `src/pages/index.js` is used to generate the site’s index.html file.

Update the header’s `NavLinks` to link to the `/tickets` page that was just created. If you look at the code you’ll see that the links in the nav use Gatsby’s link component. Gatsby Link is one of the performance optimizations of Gatsby ⚡️ that can be used to preload internal link. Preloading fetches the resources in the background, as a user navigate to the link component, so that the content is fetched before the user actually navigates to the page. Using the Link functionality vs. a regular HTML <a> hyperlink for internal links helps make Gatsby sites feel faster. You can learn more about the Link component here: https://www.gatsbyjs.com/docs/gatsby-link/. For external links you should continue using <a>.

## Exercise 🤓

Add a link to the `/tickets` page.

## Files 🗂

- src/components/header.js

## Extra Credit 💯

Check out what other pages are on the site by navigating to: http://localhost:8000/nonsense. This links to the development version of the 404 page of the site. A nifty feature of Gatsby’s 404 pages in development is that it’ll show you other available routes in the application. Feel free to add any of the links listed here that aren’t available in the navigation to the header’s NavLinks

## Example Solution Code
- [Exercise 4: Add Link in Navigation](https://github.com/M0nica/gatsby-workshop/pull/7/files)

## Example Solution Demo
- https://deploy-preview-7--gatsbyjsdemo.netlify.app/
