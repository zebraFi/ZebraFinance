import React from "react"
import * as styles from "../styles/howto.module.css"
import Layout from "../components/layout"

function howto(props) {
  return (
    <Layout pathname={props.location.pathname} title="Zebra Finanace how to buy" index={1}>
      <div className={styles.container}>
        <h2 className="gold">Connecting to Binance smart chain</h2>
        <p>
          Let's get you started on your journey to the moon 🚀 <br />
          This is a guide to assist in connecting to the Binance smart chain.
        </p>
        <hr />
        {/* <div style={{ margin: "5rem 0" }}>
          <h2 className="gold">Coming Soon</h2>
          <p>Big things are happening. Stay tuned.</p>
        </div>

        <hr />
        <h2 style={{ margin: "4rem 0 2rem 0" }} className="gold">
          Please follow this link to buy!
        </h2> */}
      </div>
    </Layout>
  )
}

export default howto
