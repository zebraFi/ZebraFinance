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
    to: { y: collapse ? `-200%` : `0.3%` },
    config: config.gentle,
  })
  return (
    <div className={styles.container}>
      <nav className={styles.innerContainer}>
        <Link className={styles.logo} to="/">
          <img src="/Logo.svg"  />
        </Link>
        <ul className={styles.content}>
          {/* <li className={styles.navLink}>
            <Link
              style={index === 0 ? selectedStyle : unSelectedStyle}
              to="/tokenomics"
            >
              <span>
              Tokenomics
              </span>
              
            </Link>
          </li> */}
          <li className={styles.navLink}>
            <Link
              style={index === 1 ? selectedStyle : unSelectedStyle}
              to="/howto"
            >
              How to buy
            </Link>
          </li>
          <li className={styles.navLink}>
            <Link
              style={index === 2 ? selectedStyle : unSelectedStyle}
              to="/farm"
            >
              Farm
            </Link>
          </li>
          <li >
            <span
              style={{ fontSize: "16px",fontFamily: "Exo 2",cursor:'pointer', ...selectedStyle }}
              // target="_blank"
              // rel="noopener noreferrer"
              // href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xd7de0f4a2547d401dc145f40d76731f06c46ef7f"
            >
              Trade
            </span>
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
        </ul>
        <Hamburger collapse={collapse} setCollapse={setCollapse} />
      </nav>

      <animated.ul
        style={{
          ...props,
        }}
        className={styles.collapseContent}
      >
        {/* <li className={styles.navLink}>
          <Link
            style={index === 0 ? selectedStyle : unSelectedStyle}
            to="/tokenomics"
          >
            Tokenomics
          </Link>
        </li> */}
        <li className={styles.navLink}>
          <Link
            style={index === 1 ? selectedStyle : unSelectedStyle}
            to="/howto"
          >
            How to buy
          </Link>
        </li>
        <li className={styles.navLink}>
          <Link
            style={index === 2 ? selectedStyle : unSelectedStyle}
            to="/farm"
          >
            Farm
          </Link>
        </li>
        <li style={{ fontSize: "16px",fontFamily: "Exo 2",cursor:'pointer', ...selectedStyle }}>
          <span
          // target="_blank"
          // rel="noopener noreferrer"
          // href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xd7de0f4a2547d401dc145f40d76731f06c46ef7f"
          >
            Trade
          </span>
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
