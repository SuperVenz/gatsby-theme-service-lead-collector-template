import React from "react";
import { graphql } from "gatsby";

function submit(props) {
  return (
    <Layout
      title={data.ThankYou.seo.pageTitle}
      keywords={data.sanityThankYou.seo.keywords}
      description={data.sanityThankYou.seo.description}
    >
      <h1>Thank You!</h1>
      <p>Form Submitted</p>
    </Layout>
  );
}
export const query = graphql`
  {
    sanityThankYou {
      seo {
        pageTitle
        keywords
        description
      }
    }
  }
`;
export default submit;
