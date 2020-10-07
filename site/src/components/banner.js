import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";

export default function Banner() {
  const data = useStaticQuery(graphql`
  query BannereQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`);
  return (
    <div className="bg-blue-500 text-white p-4 text-center">
      <blockquote>
        <Link to="/tickets/">{`Tickets are on sale now for ${data.site.siteMetadata.title} Conf!`}</Link>
      </blockquote>
    </div>
  );
}
