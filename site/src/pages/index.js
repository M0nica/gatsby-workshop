import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import sketchnoting from "../images/taking-notes.svg";

const Hero = () => (
  <div className="text-center">
    <h1 className="text-5xl font-extrabold text-blue-500 leading-9 tracking-tight font-inter">
      October 7th, 2020
      <br />
      Cyberspace
    </h1>
    <br />
    <div className="grid grid-cols-6 gap-4">
      <div className="col-span-6 sm:col-span-6 md:col-span-4 lg:col-span-4 xl:col-span-4...">
        <img src={sketchnoting} alt="illustrated woman doodling" />
      </div>
      <div className="text-lg text-gray-700 col-span-6 sm:col-span-6 md:col-span-2 lg:col-span-2 xl:col-span-2...">
        <h2 className="text-3xl font-bold text-gray-800 leading-8 tracking-tight">
          Join Us!
        </h2>{" "}
        Voluptate Lorem laborum eiusmod occaecat fugiat exercitation cupidatat
        nulla. Consectetur labore aute irure dolore. Lorem adipisicing excepteur
        mollit nisi non exercitation. Aute quis consequat duis aliquip magna. Et
        ullamco officia nulla labore exercitation ea officia pariatur excepteur.
      </div>
    </div>
    <br />
    <h2 className="text-5xl font-extrabold text-blue-500 leading-9 tracking-tight font-inter">
      Schedule
    </h2>
    Placeholder Text!
  </div>
);

function IndexPage() {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />

      <Hero />
    </Layout>
  );
}

export default IndexPage;
