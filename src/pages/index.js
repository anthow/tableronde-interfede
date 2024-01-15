import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Intervants from "../components/intervenants"
import Hero from "../components/hero"
import Programme from "../components/programme"
import Form from "../components/form/Form"
import Infos from "../components/info"

const IndexPage = () => (
  <Layout>
    <Hero />
    <Programme />
    <Intervants />
    <Form />
    <Infos className=""/>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="" />

export default IndexPage
