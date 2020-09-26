
# 02 • Make Footer Data Dynamic
## Background 📚
Data is generally accessed in Gatsby sites via the GraphQL query language via either static queries or page queries.  Static means that these queries do not have variables and exist in components that have the same data context throughout the application. Pages within Gatsby the GraphQL queries can dynamically query data depending on the context of the page. The below code snippet shows how to write a static GraphQL query to query the title from the siteMetadata and return the value in the `<h1>` of that component.

```
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
export default function Header() {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
 
  return (
    <header>
      <h1>{data.site.siteMetadata.title}</h1>
    </header>
  )
}
```
 
The above example code from: https://www.gatsbyjs.com/docs/use-static-query/
 
## Exercise 🤓
Customize the site footer to render your conference title from siteMetadata instead of the hard-coded value of SketchXConf 2020
 
## Files 🗂
- src/components/footer.js

## Extra Credit 💯
Update the footer to display another data value from the siteMetadata in addition to the conference title.

## Related Files 🗂
- src/components/footer.js
