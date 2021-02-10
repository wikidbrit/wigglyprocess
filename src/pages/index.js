import Layout from "../components/layout";
import NewsField from "../components/newsfield"

import SEO from "../components/seo";

import React from "react";


function IndexPage() {


  return (
    <Layout>
      <SEO title="Home" />
      <h1>Latest News</h1>
      <p>Here is the latest news from your local Wiggly Process news source. Local news on the hour.</p>
      <NewsField />
    </Layout>
  );
}

export default IndexPage
