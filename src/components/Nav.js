import React, { useState } from "react"
import Hamburger from "./Hamburger"
import * as styles from "../styles/nav.module.css"
import { useSpring, animated, config } from "@react-spring/web"
import { Link } from "gatsby"

const selectedStyle = {
  color: "rgb(195 149 82)",
  padding: "1rem",
  borderRadius: "16px",
  border: "4px solid rgb(195 149 82)",
}
const unSelectedStyle = {
  color: "rgb(195 149 82)",
}
function Nav({ index }) {
  const [collapse, setCollapse] = useState(true)
  const props = useSpring({
    from: { y: `-200%` },
    to: { y: collapse ? `-200%` : `1%` },
    config: config.gentle,
  })
  return (
    <div className={styles.container}>
      <nav className={styles.innerContainer}>
        <div className={styles.logoContainer}>
          <Link to="/">
            <img src="/Logo.svg" className={styles.logo} />
          </Link>
        </div>

        {/* <img className={styles.logo} src="/Logo.svg" /> */}
        <ul className={styles.content}>
          <li>
            <Link
              style={index === 0 ? selectedStyle : unSelectedStyle}
              to="/whitepaper"
            >
              WhitePaper
            </Link>
          </li>
          <li>
            <Link
              style={index === 1 ? selectedStyle : unSelectedStyle}
              to="/howto"
            >
              How to buy
            </Link>
          </li>
          <li style={selectedStyle}>
            <span

            // target="_blank"
            // rel="noopener noreferrer"
            // href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xd7de0f4a2547d401dc145f40d76731f06c46ef7f"
            >
              Trade
            </span>
          </li>
        </ul>
        <Hamburger collapse={collapse} setCollapse={setCollapse} />
      </nav>

      <animated.ul
        style={{
          ...props,
        }}
        className={styles.collapseContent}
      >
        <li>
          <Link
            style={index === 0 ? selectedStyle : unSelectedStyle}
            to="/whitepaper"
          >
            WhitePaper
          </Link>
        </li>
        <li>
          <Link
            style={index === 1 ? selectedStyle : unSelectedStyle}
            to="/howto"
          >
            How to buy
          </Link>
        </li>
        <li style={selectedStyle}>
          <span
          // target="_blank"
          // rel="noopener noreferrer"
          // href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xd7de0f4a2547d401dc145f40d76731f06c46ef7f"
          >
            Trade
          </span>
        </li>
      </animated.ul>
    </div>
  )
}

export default Nav
