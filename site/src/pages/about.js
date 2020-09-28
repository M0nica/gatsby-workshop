import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
const Hero = () => (
  <div className="text-center">
    <h1 className="text-5xl font-extrabold text-blue-500 leading-9 tracking-tight">
      About
    </h1>
    <br />
    <h2 className="text-3xl font-bold text-gray-800 leading-8 tracking-tight">
      Lorem Ipsum
    </h2>
    <p className="mt-1 text-lg text-gray-700 leading-2 text-left font-body">
      Voluptate Lorem laborum eiusmod occaecat fugiat exercitation cupidatat
      nulla. Consectetur labore aute irure dolore. Lorem adipisicing excepteur
      mollit nisi non exercitation. Aute quis consequat duis aliquip magna. Et
      ullamco officia nulla labore exercitation ea officia pariatur
      excepteur.Veniam officia anim nostrud pariatur sit ullamco non eu. Laboris
      cupidatat ad velit minim magna velit laboris magna reprehenderit sit
      proident do consectetur exercitation. Proident ea veniam ad adipisicing
      quis ut ipsum anim. Ullamco cillum non dolore elit sunt elit. Labore quis
      laborum cillum quis reprehenderit laborum esse minim elit eu non ea sunt
      velit. Non incididunt ullamco minim nostrud.Labore et anim labore ut et.
      Pariatur mollit qui sint eiusmod cupidatat officia veniam aliqua fugiat
      deserunt commodo ad nisi sit. Ut do irure laborum nisi in culpa ad. Dolore
      ea aute deserunt nulla labore anim. Aliquip duis excepteur veniam id
      exercitation anim incididunt elit veniam officia ex aliqua id.
    </p>
  </div>
);

function AboutPage() {
  return (
    <Layout>
      <SEO title="About" keywords={[`About`]} />

      <Hero />
    </Layout>
  );
}

export default AboutPage;
