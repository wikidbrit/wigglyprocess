import React from "react"
// import Post from '../components/newsblock'

import Layout from "../components/layout"

import SEO from "../components/seo"

import api from "../components/newsblock"

const callback = (response) =>{
  console.log("THIS IS CALLBACK LMAO KEK")
  console.log(response);
}

const IndexPage = () => {
  api.newsblock(callback);
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Latest News</h1>
      <p>Here is the latest news from your local Wiggly Process news source. Local news on the hour.</p>
      {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
    </Layout>
  )
}



export default IndexPage
