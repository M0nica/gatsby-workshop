import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

export default function SpeakerPage({ data }) {
  const speaker = data.speakersYaml;
  return (
    <Layout>
      <div>
        <h1>{speaker.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: speaker.name }} />
      </div>
    </Layout>
  );
}

export const query = graphql`
  query($slug: String!) {
    speakersYaml(fields: { slug: { eq: $slug } }) {
      name
      title
    }
  }
`;
