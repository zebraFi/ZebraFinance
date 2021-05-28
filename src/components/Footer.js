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
              src="/twitter.svg"
            />
          </a>
          <a
            href="https://zebradfi.medium.com/introducing-zebra-finance-zfi-d9694b83ce1e"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <img
              src="/medium.svg"
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
