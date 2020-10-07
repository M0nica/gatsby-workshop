import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";
import Logo from "../images/rainbow-icon.jpg";
import Banner from "./banner";

function Header({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false);
  const NavLinks = [
    { href: "/", name: "Home" },
    { href: "/tickets/", name: "Tickets" },
    { href: "/#schedule", name: "Schedule" },
    { href: "/speakers", name: "Speakers" }
  ];

  return (
    <nav className="bg-white">
            <Banner></Banner>

      <div className="flex flex-wrap items-center justify-between max-w-4xl mx-auto p-4 md:p-8">
        <Link to="/" className="flex items-center no-underline text-black">
          <img src={Logo} alt="Logo" className="w-8" />
          <span className="pl-4 text-3xl font-Inter font-extrabold text-black leading-9 tracking-tight">
            {siteTitle}
          </span>
        </Link>

        <button
          className="block md:hidden border border-white flex items-center px-3 py-2 rounded text-white"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <div
          className={`${
            isExpanded ? `block` : `hidden`
          } md:block md:flex md:items-center w-full md:w-auto`}
        >
          <div className="">
            {NavLinks &&
              NavLinks.map((node) => (
                <Link
                  key={node.href}
                  to={node.href}
                  className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-black"
                >
                  {node.name}
                </Link>
              ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
