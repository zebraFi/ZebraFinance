/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Nav from "./Nav"
import SEO from "./seo"

import Footer from "./Footer"

const Layout = ({ children, index, description, title,pathname }) => {
  const data = useStaticQuery(graphql`
    query {
      socials: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "Socials.png" }
      ) {
        childImageSharp {
          resize(width: 1200) {
            src
            height
            width
          }
        }
      }
    }
  `)
  // console.log(data)
  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}
      <div
      // style={{
      //   margin: `0 auto`,
      //   maxWidth: 960,
      //   padding: `0 1.0875rem 1.45rem`,
      // }}
      >
        <SEO pathname={pathname} description={description} title={title} image={data.socials.childImageSharp.resize} />
        <Nav index={index} />
        <main style={{ margin: "80px 0 0 0" }}>{children}</main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
