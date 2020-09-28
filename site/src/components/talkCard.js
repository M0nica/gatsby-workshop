import React from "react";
import { Link } from "gatsby";
import Avatar from "../images/woman-generated-avatar-1.png";

export default function talkCard({ talk }) {
  const { speaker, title, time, link } = talk;
  return (
    <Link to={link ? link : ""}>
      <div className="flex items-center hover:bg-indigo-100 border px-4 py-2">
        <img
          className="w-10 h-10 rounded-full mr-4"
          src={Avatar}
          alt={`Avatar of ${speaker}`}
        />
        <div className="text-lg">
          <p className="text-gray-900 leading-none">{speaker}</p>
          <p className="text-xl text-gray-600">{title}</p>
          <time>{time}</time>
        </div>
      </div>
    </Link>
  );
}
