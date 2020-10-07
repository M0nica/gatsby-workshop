import React from "react";
import { Link } from "gatsby";

export default function speakerCard({ speakers }) {
  return (
    <div className="flex items-center flex-wrap ">
      {speakers.map(({ node }) => (
        // TODO: pass slug from node into the Link component
        <Link to={`/${node.fields.slug}`} className="w-1/3 p-2" key={node.name}>
          <div>
            <img
              className="rounded-full inline"
              src={node.avatar}
              alt={`Avatar of ${node.name}`}
            />
            {node.name}
          </div>
        </Link>
      ))}
    </div>
  );
}
