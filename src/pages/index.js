import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Landing from "../components/Landing"
import Roadmap from "../components/Roadmap"
import Tokenomics from "../components/Tokenomics"
import PoweredBy from "../components/PoweredBy"

import Layout from "../components/layout"


const IndexPage = () => (
  <Layout title="Zebra Finanace Homepage" description="Zebra Finance">
    <Landing
      text={
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h3>
      }
    />
    <Tokenomics/>
    <Roadmap />
    <PoweredBy />
  </Layout>
)

export default IndexPage
