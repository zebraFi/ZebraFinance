import React, { useState } from "react"
import Hamburger from "./Hamburger"
import * as styles from "../styles/nav.module.css"
import { useSpring, animated, config } from "@react-spring/web"
import { Link } from "gatsby"

const selectedStyle = {
  color: "rgb(195 149 82)",
  transform: "scale(1.2)",
}
const unSelectedStyle = {
  color: "#fff",
}
function Nav({ index }) {
  const [collapse, setCollapse] = useState(true)
  const props = useSpring({
    from: { y: `-200%` },
    to: { y: collapse ? `-200%` : `0.3%` },
    config: config.gentle,
  })
  return (
    <div className={styles.container}>
      <nav className={styles.innerContainer}>
        <Link className={styles.logo} to="/">
          <img src="/Logo.svg" />
        </Link>
        <ul className={styles.content}>
          <li
            style={index === 0 ? selectedStyle : unSelectedStyle}
            className={styles.navLink}
          >
            <Link to="/vote">
              <span>Vote</span>
            </Link>
          </li>
          <li
            style={index === 1 ? selectedStyle : unSelectedStyle}
            className={styles.navLink}
          >
            <Link to="/howto">How to buy</Link>
          </li>
          <li
            style={index === 2 ? selectedStyle : unSelectedStyle}
            className={styles.navLink}
          >
            <Link to="/lottery">lottery</Link>
          </li>
          <li
            style={index === 3 ? selectedStyle : unSelectedStyle}
            className={styles.navLink}
          >
            <Link to="/farm">Farm</Link>
          </li>
          <li  className={styles.trade}>
            <a
              // target="_blank"
              // rel="noopener noreferrer"
              href="https://dex.zebrafinance.app/#/swap?outputCurrency=0xbF7BD762137B5859a1448Fa78Fc5D9B675429925"
            >
              Trade
            </a>
          </li>
        </ul>
        <div className={`${styles.socials} ${styles.socialsLg}`}>
          <a
            href="https://t.me/ZebraDefi"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <img src="/telegram.svg" />
          </a>
          <a
            href="https://twitter.com/FinanceZebra?s=20"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <img src="/twitter.svg" />
          </a>
          <a
            href="https://zebradfi.medium.com/introducing-zebra-finance-zfi-d9694b83ce1e"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <img src="/medium.svg" />
          </a>
        </div>
        <Hamburger collapse={collapse} setCollapse={setCollapse} />
      </nav>

      <animated.ul
        style={{
          ...props,
        }}
        className={styles.collapseContent}
      >
        <li
          style={index === 0 ? selectedStyle : unSelectedStyle}
          className={styles.navLink}
        >
          <Link to="/vote">vote</Link>
        </li>
        <li
          style={index === 1 ? selectedStyle : unSelectedStyle}
          className={styles.navLink}
        >
          <Link to="/howto">How to buy</Link>
        </li>
        <li
          style={index === 2 ? selectedStyle : unSelectedStyle}
          className={styles.navLink}
        >
          <Link to="/lottery">lottery</Link>
        </li>
        <li
          style={index === 3 ? selectedStyle : unSelectedStyle}
          className={styles.navLink}
        >
          <Link to="/farm">Farm</Link>
        </li>
        <li
        className={styles.trade}
        >
          <a
            // target="_blank"
            // rel="noopener noreferrer"
            href="https://dex.zebrafinance.app/#/swap?outputCurrency=0xbF7BD762137B5859a1448Fa78Fc5D9B675429925"
          >
            Trade
          </a>
        </li>
        <li className={styles.socials}>
          <a
            href="https://t.me/ZebraDefi"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <img src="/telegram.svg" />
          </a>
          <a
            href="https://twitter.com/FinanceZebra?s=20"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <img src="/twitter.svg" />
          </a>
          <a
            href="https://zebradfi.medium.com/introducing-zebra-finance-zfi-d9694b83ce1e"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <img src="/medium.svg" />
          </a>
        </li>
      </animated.ul>
    </div>
  )
}

export default Nav
