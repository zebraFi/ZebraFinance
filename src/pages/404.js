import * as React from "react"
import Layout from "../components/layout"

const NotFoundPage = () => (
  <Layout title="404: Not found">
    <div
      style={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>404: Not Found</h1>
      <p style={{ color: "black" }}>
        You just hit a route that doesn&#39;t exist... the sadness.
      </p>
    </div>
  </Layout>
)

export default NotFoundPage
