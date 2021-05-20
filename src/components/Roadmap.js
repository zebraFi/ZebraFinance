import React, { useEffect } from "react"
import * as styles from "../styles/roadmap.module.css"
import Layout from "../components/layout"

const Left = ({ title, body }) => {
  return (
    <div className={`${styles.container} ${styles.left}`}>
      <div className={styles.circle} />
      <div className={styles.content}>
        <h2 className="txtGradient">{title}</h2>
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
        <h2 className="txtGradient">{title}</h2>
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
      <h2 className={`txtGradient ${styles.title}`}>Roadmap</h2>
      <div className={styles.timeline}>
        <Left
          title="May 2021"
          body={
            <p>
              Market Research.
              <br /> Draft whitepaper
            </p>
          }
          done={true}
        />
        <Right
          title="June 2021"
          body={
            <p>
              Pitch to early adopters and vendors
              <br />
              On-board first potential e-commerce platforms
            </p>
          }
        />
        <Left
          title="July 2021"
          body={
            <p>
              Finalize whitepaper
              <br />
              Develop CC token smart contract on test-net
              <br />
              Deploy smart contract to Ethereum main-net
            </p>
          }
        />
        <Right
          title="August 2021"
          body={
            <p>
              Develop website and social media
              <br />
              Begin marketing exposure campaign
              <br />
              Host Public sale via Unicrypt V2 for Safe Launch
              <br />
              Post-launch formalities and listings
              <br /> Expand core development team
            </p>
          }
        />
        <Left
          title="September 2021"
          body={
            <p>
              Develop marketplace on test-net
              <br />
              Integrate cashback and discount token utility on test-net
              <br />
              Beta testing to go live
            </p>
          }
        />
        <Right
          title="October 2021"
          body={
            <p>
              Fully implement all rewards systems on test-net
              <br />
              Develop redeemable NFT vouchers on ERC1155
            </p>
          }
        />
        <Left
          title="November 2021"
          body={
            <p>
              End of Beta testing
              <br />
              Release of Marketplace main-net
              <br />
              Expand marketing
            </p>
          }
        />
        <Right
          title="December 2021"
          body={
            <p>
              Begin to bridge CC Token to other blockchains
              <br />
              Expansion into global E-commerce marketplaces
            </p>
          }
        />
        <Left
          title="January 2022"
          body={<p>Begin mobile application development</p>}
        />
        <Right
          title="Q4 and beyond"
          body={
            <p>
              Begin development of CC coin blockchain
              <br />
              Incubate and absorb other E-commerce cryptocurrency marketplaces
            </p>
          }
        />
        <Left
          title="End-Goal"
          body={
            <p>
              Build a global ecosystem that ultimately provides the best
              cryptocurrency E-commerce available whilst retaining
              decentrailization and preserving the rights users have to spend
              their earned cryptocurrencies
            </p>
          }
        />
      </div>
    </div>
  )
}

export default Roadmap
