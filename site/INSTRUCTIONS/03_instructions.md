# 03 • Create a new page in Gatsby
## Background 📚
Gatsby automagically turns Reacts component defined in `src/pages/*`into pages. The page will be created based on the default export in the file. For example you can look at the starter code and see that the component defined in `src/pages/index.js` is used to generate the site’s index.html file. 
 
## Exercise 🤓
Create a new page `tickets.js` and copy and paste the following code:

```
import React from "react";
import { useStaticQuery, graphql } from "gatsby";
 
import Layout from "../components/layout";
import SEO from "../components/seo";
const Ticket = ({ title }) => (
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
 const data = useStaticQuery(graphql`
   query HeaderQuery {
     site {
       siteMetadata {
         title
       }
     }
   }
 `);
 
 return (
   <Layout>
     <SEO title="Tickets" keywords={[`Tickets`]} />
     <Ticket title={data.site.siteMetadata.title} />
   </Layout>
 );
}
 
export default TicketsPage;
``` 
 
 
## Files 🗂
- src/pages/👀

## Extra Credit 💯
- Customize the new tickets page a bit further!
 
