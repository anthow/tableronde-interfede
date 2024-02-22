/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title} />
      <div>
        <main className="flex flex-col gap-20">{children}</main>
        <footer className="bg-bordeaux text-white px-2 text-center">
          Interfédé - 2024
        </footer>
      </div>
      <script async defer src="https://scripts.withcabin.com/hello.js"></script>
    </>
  )
}

export default Layout
