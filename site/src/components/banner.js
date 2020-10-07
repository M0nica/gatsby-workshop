import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

export default function Banner() {
  const data = useStaticQuery(graphql`
    query BannerQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Link to="/tickets">
      <div className="bg-blue-500 text-white p-4 text-center">
        <blockquote>
          Tickets are on sale now for {data.site.siteMetadata.title}!
        </blockquote>
      </div>
    </Link>
  );
}
