import React from "react"
import * as styles from "../styles/about.module.css"
import {  useTrail, animated, config } from "@react-spring/web"
import useScroll from "../helper/useScroll"

const Section = ({ title, subTitle, info }) => {
  const [ref, visible] = useScroll()

  const items = [
    <h2>{title}</h2>,
    <h3>{subTitle}</h3>,
    <div className={styles.divider} />,
    info,
  ]
  const trail = useTrail(items.length, {
    config: config.gentle,
    opacity: visible ? 1 : 0,
    y: visible ? 0 : 100,
    from: { opacity: 0, y: 100 },

  })
  return (
    <div ref={ref} className={styles.section}>
      {trail.map(({ ...style }, index) => (
        <animated.div
          key={index}
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            ...style,
          }}
        >
          {items[index]}
        </animated.div>
      ))}
    </div>
  )
}

function about() {
  return (
    <div className={styles.container}>
      <Section
        title="About"
        subTitle="Safari Finanace"
        info={
          <p>
            Safari Finance ($SFI) is a passion project formed by a team of crypto
            veterans Specifically made for $Cross Chain and reaching its entire DeFi community. Our token features are
            simular to your commonly known Decentralised DEX and offers complete cross chain trading function  
            birthed on BSC (Binance smart chain). Safari DAO is a 100% decentralized governance protocol meaning the 
            holders have a majority say on our future! 
          </p>
        }
      />
      <Section
        title="How Safari will"
        subTitle="alter the future of finance on the blockchain"
        info={
          <p>
            Safari Finance will be launching a new trading platform which currently operates on the 
            Binance Chain and will soon expand to other major networks such as
            Ethereum, Solana, Polygon, Phantom and more. By branching out to other networks, we
            can ensure scalability for our $afari Doa.
            As well as our trading platform we will introduce liquidity staking, vualts, much loved NFT's
            and interactive games e.g. Lotteries, Prediction, Lucky Pots and more!
          </p>
        }
      />

      {/* <p>
        How do we ($ZFI) plan to alter the future of DeFi? Zebra Finance is introducing one of the first Trading platforms on Ekta
            Chain and at the time of release is the only current DEX (decentralised exchange)
            on the Ekta network. This addition to the ecosystem will allow its functionality, 
            use case and set out the fundamentals on which we hope ekta will run.
            As well as our trading platform we will introduce liquidity staking, much loved NFT's
            and unity games e.g. Lotteries and lucky draws.
      </p> */}
    </div>
  )
}

export default about
