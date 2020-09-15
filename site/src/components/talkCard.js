import React from "react";
import { Link } from "gatsby";
import Avatar from "../images/woman-generated-avatar-1.png";

export default function talkCard({ talk }) {
  const { speaker, title, time, link } = talk;
  return (
    <Link to={link ? link : ""}>
      <div class="flex items-center hover:bg-indigo-100 border px-4 py-2">
        <img
          class="w-10 h-10 rounded-full mr-4"
          src={Avatar}
          alt={`Avatar of ${speaker}`}
        />
        <div class="text-lg">
          <p class="text-gray-900 leading-none">{speaker}</p>
          <p class="text-xl text-gray-600">{title}</p>
          <time>{time}</time>
        </div>
      </div>
    </Link>
  );
}
