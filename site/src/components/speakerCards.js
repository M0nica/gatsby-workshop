import React from "react";
import { Link } from "gatsby";
import Avatar from "../images/woman-generated-avatar-1.png";

export default function speakerCard({ speakers }) {
  return (
    <div class="flex items-center flex-wrap ">
      {speakers.map(({ name, link }) => (
        <div class="w-1/3 p-2">
          <img class="rounded-full " src={Avatar} alt={`Avatar of ${name}`} />
          <Link to={link ? link : ""}> {name} </Link>
        </div>
      ))}
    </div>
  );
}
