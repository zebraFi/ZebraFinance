import React from "react"
import * as styles from "../styles/footer.module.css"

function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.logoContainer}>
          <img
            src="/Logo.svg"
            className={styles.logo}
            alt="Zebra Finance Logo"
          />
        </div>
        <div className={styles.links}>
          <a
            href="https://t.me/ZebraDefi"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <img
              style={{ height: "5rem", width: "5rem" }}
              src="/telegram.svg"
            />
          </a>
          <a
            href="https://twitter.com/FinanceZebra?s=20"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <img
              style={{ height: "5rem", width: "5rem" }}
              src="/twitter.svg"
            />
          </a>
        </div>
      </div>
      <hr />
      <p>
        © {new Date().getFullYear()}
        {` `}
        Zebra Finance
      </p>
    </footer>
  )
}

export default Footer
