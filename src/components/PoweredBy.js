import React from "react"
import * as styles from '../styles/poweredby.module.css'

function PoweredBy() {
  return (
    <div className={styles.container}>
      <h1 className="gold" style={{ padding: "1rem" }}>
        Powered by
      </h1>
      <div className={styles.cryptoInfo}>
        <div className={styles.cryptoCard}>
          <img src="/pancake.svg" />
          <p
            style={{
              fontWeight: "800",
              fontSize: "2.5rem",
              padding: "4rem 0",
            }}
          >
            {" "}
            Pancake swap
          </p>
        </div>
      </div>
    </div>
  )
}

export default PoweredBy
