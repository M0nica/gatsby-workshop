import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

export default function SpeakerPage({ data }) {
  const speaker = data.speakersYaml;
  return (
    <Layout>
      <div>
      <img
          className="w-10 h-10 rounded-full mr-4"
          src={`/${speaker.avatar}`}
          alt={`Avatar of ${speaker.name}`}
        />
        <h1 className="text-5xl font-extrabold text-blue-500 tracking-tight font-inter p-4">
          {speaker.title}
        </h1>
        <h2 className="text-4xl font-extrabold  tracking-tight font-inter p-4">
          with {speaker.name}
        </h2>
        <p className="text-sm">
          {speaker.description || "More information will be available soon"}
        </p>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query($slug: String!) {
    speakersYaml(fields: { slug: { eq: $slug } }) {
      name
      title
      description
      avatar
    }
  }
`;
