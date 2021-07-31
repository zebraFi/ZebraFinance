import React, { useEffect, useState, useRef } from "react"
import * as styles from "../styles/tokenomics.module.css"
import { useSpring, animated } from "@react-spring/web"

const Card = ({ countStart, sub, src, num, percent = false }) => {
  const props = useSpring({
    from: { number: percent ? 0 : num * 0.9, opacity: 0 },
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
          if (percent) {
            return `${x.toFixed(1)}%`
          } else {
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
            return `${formattedNumber.slice(0, formattedNumber.length - 1)}`
          }
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
          num={885000000}
          sub={
            <>
              <p>
                <b>Total</b> <br />
                <b style={{textDecoration:'underline'}}>Cross-chain liquidity:</b> <br/> 37.6%
                <br />
                <b style={{textDecoration:'underline'}}>BSC liquidity:</b><br/> 20%
              </p>
            </>
          }
        />
        <Card
          countStart={countStart}
          src="/bullhorn.svg"
          percent={true}
          num={15}
          sub={<p>Marketing & Future Incentives</p>}
        />
        {/* <Card
          countStart={countStart}
          src="/burn.svg"
          percent={true}
          num={20}
          sub={
            <p>20% of total supply burned in the first 8 weeks after launch</p>
          }
        /> */}
        <Card
          countStart={countStart}
          src="/IDO.svg"
          num={14.7}
          percent={true}
          sub={<p>IDO</p>}
        />
        <Card
          countStart={countStart}
          src="/team.svg"
          num={12.7}
          percent={true}
          sub={<p>Team Tokens & Dev Funds</p>}
        />
        {/* <Card
          countStart={countStart}
          src="/strategic-plan.svg"
          num={12}
          percent={true}
          sub={<p>Future Incentives</p>}
        /> */}
        {/* <Card
          countStart={countStart}
          src="/investment.svg"
          percent={true}
          num={10}
          sub={<p>Dev Funds</p>}
        /> */}

        {/* <Card title="190,000,000" sub="Airdrop" /> */}
      </div>
    </div>
  )
}

export default Tokenomics
