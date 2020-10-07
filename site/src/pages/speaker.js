import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import sketchnoting from "../images/taking-notes.svg";
import { useStaticQuery, graphql } from "gatsby";
import SpeakerCards from "../components/speakerCards";

const Hero = ({ speakers }) => (
  <div className="text-center">
    <h2
      className="text-5xl font-extrabold text-blue-500 leading-9 tracking-tight font-inter"
      id="schedule"
    >
      Speakers
    </h2>
    <SpeakerCards speakers={speakers} />;
  </div>
);

function SpeakersPage() {
  const data = useStaticQuery(graphql`
    query FetchSpeakersPage {
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
        title="Speakers"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />

      <Hero speakers={data.allSpeakersYaml.edges} />
    </Layout>
  );
}

export default SpeakersPage;
