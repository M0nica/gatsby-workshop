import { useStaticQuery } from "gatsby";
import React from "react";

import Layout from "../components/layout";
import SpeakerCard from "../components/speakerCards";
import SEO from "../components/seo";
import sketchnoting from "../images/taking-notes.svg";

const Hero = ({ speakers }) => (
  <div className="text-center">
    <h2 className="text-5xl font-extrabold text-blue-500 leading-9 tracking-tight font-inter p-4">
      Speakers
    </h2>
    <SpeakerCard speakers={speakers} />;
  </div>
);

function SpeakerPage() {
  const data = useStaticQuery(graphql`
    query FetchSpeakerData {
      allSpeakersYaml {
        edges {
          node {
            id
            avatar
            name
            title
            time
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />
      <Hero speakers={data.allSpeakersYaml.edges} />
    </Layout>
  );
}

export default SpeakerPage;