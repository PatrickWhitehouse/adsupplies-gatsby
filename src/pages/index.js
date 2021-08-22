import React from "react"
import Hero from "../components/hero";
import Layout from "../components/layout";


const IndexPage = () => {
  return (
    <Layout>
      <Hero title="AD Supplies"/>
      <main>
        <h2>Who are we?</h2>
      </main>
    </Layout>
  )
}

export default IndexPage;