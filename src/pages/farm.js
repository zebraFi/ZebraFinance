import React from 'react'
import Layout from "../components/layout"

function farm() {
    return (
        <Layout title="Farming ZebraFinance" index={2}>
        <div
          style={{
            minHeight: "80vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 className="txtGradient">Coming Soon</h1>
          <p style={{ color: "black" }}>
            Big things are happening. Stay tuned.
          </p>
        </div>
      </Layout>
    )
}

export default farm
