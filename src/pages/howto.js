import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "../styles/howto.module.css"
import Layout from "../components/layout"

function howto() {
  return (
    <Layout title="Zebra Finanace Homepage"  index={1}>
      <div className={styles.container}>
        <h2 className="txtGradient">Connecting to Binance smart chain</h2>
        <p>
          Let's get you started on your journey to the moon 🚀 <br />
          This is a guide to assist in connecting to the Binance smart chain.
        </p>
        <div className={styles.row}>
          <div>
            <h2 className="txtGradient">How To Get Started </h2>
            <p>
              You need to install MetaMask and have an account before starting
              any steps below.
            </p>
          </div>
          <div style={{ height: "25rem" }}>
            <a
              href="https://metamask.io/download"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className={styles.fox} src="/fox.svg" />
              <p
                style={{ textAlign: "center", margin: "3rem 0", color: "red" }}
              >
                Click here to download Metamask
              </p>
            </a>
          </div>
        </div>

        <div className={styles.row}>
          <div>
            <h2 className="txtGradient">RPC Setup for MetaMask </h2>
            <p>
              Open MetaMask wallet by clicking the extension button. Then open
              the <span style={{color:'#b1874b',fontWeight:'700'}}>Networks Window </span>by clicking the network dropdown on the top,
              as demonstrated to the right.
              <br />
              <br />
              After the above steps, a custom RPC form will open. Fill the form
              with the below data to set up the BSC mainnet.
              <br />
              <br />
              <span style={{ color: "#f73104" }}>
                Network Name: Binance Smart Chain <br />
                RPC URL: https://bsc-dataseed.binance.org/ <br />
                Chain ID: 56
                <br /> Currency Symbol: BNB
                <br /> Block Explorer URL: https://bscscan.com
              </span>
              <br />
              <br />
              After clicking the save button, the Binance Smart Chain network
              will be added to MetaMask. That’s it. You can switch between
              Ethereum Mainnet and the newly created Binance Smart Chain using
              the network dropdown on the top.
            </p>
          </div>
          <div>
            <StaticImage
              style={{ width: "100%" }}
              src="../../static/maskOptions.jpeg"
              alt="A"
              placeholder="blurred"
            />
          </div>
        </div>

        <div className={styles.row}>
          <div>
            <h2 className="txtGradient">Ensure Network Selection </h2>
            <p>
              Ensure you select the <span style={{color:'#b1874b',fontWeight:'700'}}>Binance Smart Chain</span> network before proceeding.
             
            </p>
          </div>
          <div>
            <StaticImage
              style={{ width: "100%" }}
              src="../../static/network.jpeg"
              alt="A"
              placeholder="blurred"
            />
          </div>
        </div>
        <div className={styles.row}>
          <div>
            <h2 className="txtGradient">Adding ZeebraFinance Token to your wallet </h2>
            <p>
              Once all the above steps have been completed, it's time to add
              your newly purchased ZeebraFinance Token to your Metamask wallet.
              <br />
              <br />
              Go ahead and click <span style={{color:'#b1874b',fontWeight:'700'}}>Add Token</span> at the bottom of your wallet,
              and then <span style={{color:'#b1874b',fontWeight:'700'}}>paste our contract address</span>
              <br />
              <br />
              <span style={{ color: "#f73104" }}>
              Coming Soon
              </span>
              <br /> <br />
              Meta mask will populate the remaining fields and you should be
              good to go! If using trust wallet the manual input is as follows
              <br />
              <br />
              <span style={{ color: "#f73104" }}>
                Name: Coming Soon <br /> Symbol: Coming Soon <br /> Decimals:Coming Soon{" "}
              </span>
              <br />
            </p>
          </div>
          <div>
            <StaticImage
                style={{ width: "100%" }}
              src="../../static/AddToken.jpeg"
              alt="A"
              placeholder="blurred"
            />
          </div>
        </div>
        <hr/>
        <h2 style={{margin:'4rem 0 2rem 0'}} className="txtGradient">Please follow this link to buy!</h2>
        <p>
          Coming Soon
          {/* <a
            style={{ color: "#f73104", textDecoration: "underline" }}
            target="_blank"
            rel="noopener noreferrer"
            href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xd7de0f4a2547d401dc145f40d76731f06c46ef7f"
          >
            https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xd7de0f4a2547d401dc145f40d76731f06c46ef7f
          </a> */}
        </p>
      </div>
    </Layout>
  )
}

export default howto
