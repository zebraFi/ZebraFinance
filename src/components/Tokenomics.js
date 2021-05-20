import React, { useEffect, useState, useRef } from "react"
import * as styles from "../styles/tokenomics.module.css"
import { useSpring, animated } from "@react-spring/web"

const Card = ({ countStart, sub, src, num }) => {
  const props = useSpring({
    from: { number: num * 0.9, opacity: 0 },
    to: { number: countStart ? num : num * 0.9, opacity: countStart ? 1 : 0 },
    // config: config.molasses,
  })
  return (
    <div className={styles.card}>
      <img src={src} />
      <animated.h2
        style={{ opacity: props.opacity }}
        className={styles.content}
      >
        {props.number.to(x => {
          let length = (Math.log(x) * Math.LOG10E + 1) | 0
          let remainder = length % 3 !== 0
          let Ngroups = Math.floor(length / 3)
          let formattedNumber = ""
          while (Ngroups >= 1) {
            formattedNumber =
              x.toString().slice(length - 3, length) + "," + formattedNumber
            x = Math.floor(x / 1000)
            length -= 3
            Ngroups -= 1
          }
          remainder &&
            (formattedNumber =
              x.toString().slice(0, length) + "," + formattedNumber)
          return formattedNumber.slice(0, formattedNumber.length - 1)
        })}
      </animated.h2>
      {sub}
    </div>
  )
}

function Tokenomics() {
  const [countStart, setCountStart] = useState(false)
  const CardRef = useRef()
  useEffect(() => {
    const handleScroll = e => {
      CardRef.current &&
        CardRef.current.getBoundingClientRect().top <
          window.innerHeight * 0.65 &&
        !countStart &&
        setCountStart(true)
    }
    window.addEventListener("load", handleScroll)
    window.addEventListener("scroll", handleScroll, { passive: "true" })
    return () => {
      window.removeEventListener("scroll", handleScroll, { passive: "true" })
      window.removeEventListener("load", handleScroll)
    }
  }, [])
  return (
    <div className={styles.container}>
      <div ref={CardRef} className={styles.row}>
        <Card
          countStart={countStart}
          src="/coins.svg"
          num={1000000000}
          sub={<p>Total</p>}
        />
        <Card
          countStart={countStart}
          src="/airdrop.svg"
          num={190000000}
          sub={
            <p>
              19%
              <br />
              Multiple Airdrops
            </p>
          }
        />
        <Card
          countStart={countStart}
          src="/bullhorn.svg"
          num={150000000}
          sub={
            <p>
              15%
              <br />
              Marketing
            </p>
          }
        />

        <Card
          countStart={countStart}
          src="/investment.svg"
          num={60000000}
          sub={
            <p>
              6%
              <br />
              Dev Funds
            </p>
          }
        />
        <Card
          countStart={countStart}
          src="/strategic-plan.svg"
          num={70000000}
          sub={
            <p>
              7%
              <br />
              Future Incentives
            </p>
          }
        />
        <Card
          countStart={countStart}
          src="/burn.svg"
          num={200000000}
          sub={
            <p>
              Burn a total of 20% trailing off at random points
              <br />
              (before and after Airdrop){" "}
            </p>
          }
        />
        {/* <Card title="190,000,000" sub="Airdrop" /> */}
      </div>
    </div>
  )
}

export default Tokenomics
