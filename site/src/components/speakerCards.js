import React from "react";
import { Link } from "gatsby";

export default function speakerCard({ speakers }) {
  return (
    <div className="flex items-center flex-wrap ">
      {speakers.map(({ node }) => (
        <div className="w-1/3 p-2">
          <img
            className="rounded-full "
            src={node.avatar}
            alt={`Avatar of ${node.name}`}
          />
          <Link to={node.link ? node.link : ""}> {node.name} </Link>
        </div>
      ))}
    </div>
  );
}
