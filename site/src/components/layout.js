import { graphql, useStaticQuery } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Header from "./header";
import Footer from "./footer";

function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  const title = data.site.siteMetadata.title;

  return (
    <div className="flex flex-col font-sans min-h-screen text-gray-900">
      <Header siteTitle={title} />

      <main className="flex flex-col flex-1 md:justify-center max-w-4xl mx-auto px-4 py-8 md:p-8 w-full">
        {children}
      </main>

      <Footer
        siteTitle={title}
        siteDescription={data.site.siteMetadata.description}
      ></Footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
