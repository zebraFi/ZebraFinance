import React, { useEffect } from "react"
import * as styles from "../styles/roadmap.module.css"
import Layout from "../components/layout"

const Left = ({ title, body }) => {
  return (
    <div className={`${styles.container} ${styles.left}`}>
      <div className={styles.circle} />
      <div className={styles.content}>
        <h2 className="gold">{title}</h2>
        {body}
      </div>
    </div>
  )
}
const Right = ({ title, body }) => {
  return (
    <div className={`${styles.container} ${styles.right}`}>
      <div className={styles.circle} />
      <div className={styles.content}>
        <h2 className="gold">{title}</h2>
        {body}
      </div>
    </div>
  )
}
function Roadmap() {
  useEffect(() => {
    const checkElements = () => {
      let elements = document.querySelectorAll(`.${styles.container}`)
      elements.forEach(ele => {
        if (ele.getBoundingClientRect().top < window.innerHeight * 0.8) {
          ele.classList.add(styles.bounce)
        }
      })
    }
    checkElements()
    const handleScroll = e => {
      checkElements()
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll, { passive: true })
    }
  }, [])
  return (
    <div className={styles.mainContainer}>
      <h2 className={`${styles.title}`}>Roadmap</h2>
      <div className={styles.timeline}>
        <Left
          title="Q4 2021"
          body={
            <p>
              Farming contracts released
              <br /> Lottery
              <br /> Governance Platform Integration
            </p>
          }
          done={true}
        />
        <Right
          title="Q1 2022"
          body={
            <p>
              Major marketing recommencing
              <br />
              Exchange listing
              <br />
              Premium NFT platform release
              <br />
              Release of limit order dex
              <br />
              New website + Launchpad
            </p>
          }
        />
      </div>
    </div>
  )
}

export default Roadmap
