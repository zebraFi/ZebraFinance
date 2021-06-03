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
        subTitle="Zebra Finanace"
        info={
          <p>
            Zebra Finance ($ZFI) is a passion project formed by a team of crypto
            veterans for the overall crypto community. Our token features a
            unique deflationary design that utilizes a linear regression burn
            function that decreases the total supply with every transaction
            made. Adding to the deflationary nature of our transactional burn
            function, we will also be burning 20% of the total supply in the
            first 8 weeks after launch. Zebra DAO is a 100% decentralized
            governance protocol.
          </p>
        }
      />
      <Section
        title="How Zebra will"
        subTitle="alter the future of DeFi"
        info={
          <p>
            Zebra Finance is introducing one of the first Regressive Linear
            burns into a governance token that will be managed through our Zebra
            DAO. The value of $ZFI will be derived both by the novel
            deflationary nature of the token and the community involvement in
            relation to future releases. Features will be implemented as we
            progress through our roadmap and voted on by token holders on our
            DAO.
          </p>
        }
      />

      {/* <p>
        How do we ($ZFI) plan to alter the future of DeFi? Zebra Finance is
        introducing one of the first Regressive Linear burns into a governance
        token that will be managed through our Zebra DAO. The value of $ZFI will
        be derived both by the novel deflationary nature of the token and the
        community involvement in relation to future releases. Features will be
        implemented as we progress through our roadmap and voted on by token
        holders on our DAO.
      </p> */}
    </div>
  )
}

export default about
