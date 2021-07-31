import React from "react"
import Layout from "../components/layout"

function vote(props) {
  return (
    <Layout
      pathname={props.location.pathname}
      title="Zebra Finanace lottery"
      index={2}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100vw",
          background:
            "radial-gradient(50% 50% at 50% 50%,rgba(32, 32, 32, 1) 0%,rgba(19, 19, 19, 1) 100%)",
        }}
      >
        <h2>Lottery Coming Soon</h2>
      </div>
    </Layout>
  )
}

export default vote
