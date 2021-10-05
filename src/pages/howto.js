import React, { useRef } from "react"
import * as styles from "../styles/howto.module.css"
import Layout from "../components/layout"
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

const Step = ({ index, title, info }) => {
  return (
    <div className={styles.stepContainer}>
      <h4 className={styles.stepTitle}>
        Step {index}: {title}
      </h4>
      {info}
    </div>
  )
}
function Howto(props) {
  const inputRef = useRef(null)
  console.log(props.data)
  return (
    <Layout
      pathname={props.location.pathname}
      title="Zebra Finanace how to buy"
      index={1}
    >
      <div className={styles.container}>
        <h2 className="gold">Connecting to Binance smart chain</h2>
        <p>
          Let's get you started on your journey to the moon 🚀 <br />
          This is a guide to assist in connecting to the Ekta Chain MainNet.
        </p>
        <hr />
        <div className={styles.flexContainer}>
          <Step
            index={1}
            title="Create a Wallet & add the Ekta network"
            info={
              <>
                <p>
                  Download
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://metamask.io/download"
                  >
                    {" "}
                    <span>Metamask</span>
                  </a>{" "}
                  and create a wallet. Keep your phrase a secret!
                  <span>
                    {" "}
                    Never share it with anyone and store it properly!
                  </span>
                  <br />
                  Now under the networks dropdown ensure you have{" "}
                  <span>Binance Smart Chain Network </span>
                  added and selected. If not follow the follwing instructions.
                  <br />
                  <br />
                  <ul>
                    <li>
                      Open the Networks Window by clicking the network dropdown
                    </li>
                    <li>
                      Select <span>custom RPC</span> & Fill the form with the
                      below data to set up the BSC mainnet. <br />
                      <br />
                      <span>Network Name:</span> Ekta Chain
                      <br />
                      <span>
                        RPC URL:
                      </span> https://mainnet.ekta.io <br />
                      <span>Chain ID: </span>
                      998
                      <br />
                      <span>Currency Symbol: </span> EKTA
                      <br />
                      <span>Block Explorer URL:</span>
                      (none currently)
                    </li>
                  </ul>{" "}
                  Click Save and Make sure to copy the contract address below
                  for the next step!
                </p>
              </>
            }
          />
          <div className={styles.img}>
            <GatsbyImage
              image={props.data.first.childImageSharp.gatsbyImageData}
            />
          </div>
        </div>
        <hr />
        <div className={styles.addressContainer}>
          <h4>Contract Address</h4>
          <input
            readOnly
            ref={inputRef}
            type="text"
            value="(make this zfi address)"
          />

          <button
            onClick={() => {
              inputRef.current.select()
              inputRef.current.setSelectionRange(0, 99999)
              document.execCommand("copy")
            }}
          >
            COPY
          </button>
        </div>
        <hr />
        <div className={styles.flexContainer}>
          <Step
            index={2}
            title="Add ZebraFiance to the Wallet"
            info={
              <>
                <p>
                  Ensure you have selected the{" "}
                  <span>Ekta network</span> in the network
                  dropdown and go ahead and click <span>Add Token</span> at the
                  bottom of your wallet, and then paste our contract address.
                  <br />
                  <br /> Meta mask will populate the remaining fields and you
                  should be good to go! <br />
                  If using trust wallet the manual input is as follows
                  <br /> <span>Name: </span>ZebraFinance <br />
                  <span>Symbol: </span>
                  ZFI <br /> <span>Decimals: </span>9
                </p>
              </>
            }
          />
          <div className={styles.img}>
            <GatsbyImage
              image={props.data.second.childImageSharp.gatsbyImageData}
            />
          </div>
        </div>
        <hr />
        <div className={styles.flexContainer}>
          <Step
            index={3}
            title="Swap Ekta for ZebraFinance!"
            info={
              <>
                <p>
                  Head over to the ZebraFiance Decentralised Exchange, by
                  clicking
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://dex.zebrafinance.app/#/swap?outputCurrency=zfiaddress"
                  >
                    <span> here</span>
                  </a>
                  . <br />
                  <br />
                  Click the{" "}
                  <svg
                    style={{ verticalAlign: "middle" }}
                    viewBox="0 0 24 24"
                    width="24px"
                    fill="#a8855d"
                    xmlns="http://www.w3.org/2000/svg"
                    class="sc-bdnxRM dpHAro"
                  >
                    <path d="M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12C19.5 11.66 19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.97 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H9.99996C9.74996 2 9.53996 2.18 9.50996 2.42L9.12996 5.07C8.51996 5.32 7.95996 5.66 7.43996 6.05L4.94996 5.05C4.71996 4.96 4.45996 5.05 4.33996 5.27L2.33996 8.73C2.20996 8.95 2.26996 9.22 2.45996 9.37L4.56996 11.02C4.52996 11.34 4.49996 11.67 4.49996 12C4.49996 12.33 4.52996 12.66 4.56996 12.98L2.45996 14.63C2.26996 14.78 2.21996 15.05 2.33996 15.27L4.33996 18.73C4.45996 18.95 4.72996 19.03 4.94996 18.95L7.43996 17.95C7.95996 18.35 8.51996 18.68 9.12996 18.93L9.50996 21.58C9.53996 21.82 9.74996 22 9.99996 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.95L19.05 18.95C19.28 19.04 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98ZM12 15.5C10.07 15.5 8.49996 13.93 8.49996 12C8.49996 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z"></path>
                  </svg>{" "}
                  icon and set the slippage to 12%. If you want to give it the
                  best possible change to clear, increase the deadline. By
                  default it should be set to 20 minutes, which is fine.
                </p>
                <GatsbyImage
                  image={props.data.slip.childImageSharp.gatsbyImageData}
                />
                <p>
                  Once the slippage is set, and you have the Ekta amount set that
                  you wish to swap for ZebraFiance as shown, just click Swap and
                  wait patiently for the transaction to clear.
                  <br />
                  <br /> This process may not be instant and can take
                  a few minutes, depending on traffic.
                  <br /> <br />
                  Once the transaction has been cleared, you should have
                  ZebraFinance in your Wallet! <br />
                  <br />
                  Now all that's left is to <span>HODL!</span>
                </p>
              </>
            }
          />
          <div className={styles.img}>
            <GatsbyImage
              imgStyle={{ borderRadius: ` 22px` }}
              image={props.data.exchange.childImageSharp.gatsbyImageData}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    first: file(
      relativeDirectory: { eq: "steps" }
      sourceInstanceName: { eq: "images" }
      name: { eq: "1" }
    ) {
      id
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED
          width: 300
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }

    second: file(
      relativeDirectory: { eq: "steps" }
      sourceInstanceName: { eq: "images" }
      name: { eq: "2" }
    ) {
      id
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED
          width: 300
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }

    slip: file(
      relativeDirectory: { eq: "steps" }
      sourceInstanceName: { eq: "images" }
      name: { eq: "slip" }
    ) {
      id
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED
          width: 250
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }

    exchange: file(
      relativeDirectory: { eq: "steps" }
      sourceInstanceName: { eq: "images" }
      name: { eq: "exchange" }
    ) {
      id
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED
          width: 300
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`

export default Howto
