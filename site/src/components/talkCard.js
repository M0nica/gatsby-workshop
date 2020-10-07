import React from "react";
import { Link } from "gatsby";

export default function TalkCard({ talk }) {
  const {
    name,
    title,
    time,
    avatar,
    fields: { slug },
  } = talk;

  return (
    <Link to={slug}>
      <div className="flex items-center hover:bg-indigo-100 border px-4 py-2">
        <img
          className="w-10 h-10 rounded-full mr-4"
          src={`/${avatar}`}
          alt={`Avatar of ${name}`}
        />
        <div className="text-lg text-left">
          <p className="text-gray-900 leading-none">{name}</p>
          <p className="text-xl text-gray-600">{title}</p>
          <time>{time}</time>
        </div>
      </div>
    </Link>
  );
}
