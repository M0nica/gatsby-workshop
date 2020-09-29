# 03 • Create a new page in Gatsby

## Background 📚

Gatsby automagically turns Reacts component defined in `src/pages/*`into pages. The page will be created based on the default export in the file. For example you can look at the starter code and see that the component defined in `src/pages/index.js` is used to generate the site’s index.html file.

## Exercise 🤓

1. Create a new file `tickets.js` in `src/pages` and copy and paste the below starter code
2. Go to http://localhost:8000/tickets to view the base tickets page
3. Update the ticket page to dynamically replace placeholder conference with then name of the conference from the `gatsby-config` file.

## Starter Code for tickets.js

```
import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
const Ticket = ({ title = "placeholder conference" }) => (
<div className="text-center ">
  <h1 className="text-5xl font-extrabold text-blue-500 leading-9 tracking-tight">
    Grab Your Ticket To {title}
  </h1>
  <br />
  <div className="flex flex-col">
    <div className="bg-gray-300 rounded-lg m-2 p-2 h-30 align-middle hover:bg-purple-200 ">
      <h2>Full Pass</h2>
      <p className="text-3xl">$20</p>
    </div>
    <div className="bg-gray-300 rounded-lg m-2 p-2 h-30 align-middle hover:bg-purple-200 ">
      <div>
        <h2>VIP Pass</h2>
        <p className="text-3xl">$45</p>
      </div>
    </div>
  </div>
</div>
);

function TicketsPage() {
return (
  <Layout>
    <SEO title="Tickets" keywords={[`Tickets`]} />
    <Ticket />
  </Layout>
);
}

export default TicketsPage;
```

## Files 🗂

- src/pages/👀

## Extra Credit 💯

Make additional customizations to the /tickets page
