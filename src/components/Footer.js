import React from "react"
import * as styles from "../styles/footer.module.css"

function Footer() {
  return (
    <footer
      className={styles.container}
    >
      <div className={styles.innerContainer}>
        <div className={styles.logoContainer}>
          <img
            src="/Logo.svg"
            className={styles.logo}
            alt="Zebra Finance Logo"
          />
        </div>
        <div className={styles.links}>
          <img style={{height:'5rem',width:'5rem'}} src="/telegram.svg" />
          <img style={{height:'5rem',width:'5rem'}} src="/twitter.svg" />
        </div>
      </div>
      <hr/>
      <p>
        © {new Date().getFullYear()}
        {` `}
        Zebra Finance
      </p>
    </footer>
  )
}

export default Footer
