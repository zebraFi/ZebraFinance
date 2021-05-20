import React from "react"
import * as styles from "../styles/hamburger.module.css"

export default function Hamburger({ collapse, setCollapse }) {
  return (
    <div className={styles.container}>
      <div
        onClick={() => {
          setCollapse(state => !state)
        }}
        className={collapse ? styles.openIcon : styles.closeIcon}
      >
        <div className={`${styles.bar} ${styles.bar1}`}></div>
        <div className={`${styles.bar} ${styles.bar2}`}></div>
        <div className={`${styles.bar} ${styles.bar3}`}></div>
      </div>
    </div>
  )
}
