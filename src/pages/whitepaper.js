import React from "react"
import * as styles from "../styles/whitepaper.module.css"
import Landing from "../components/Landing"
import Layout from "../components/layout"

function whitepaper() {
  return (
    <Layout title="Zebra Finanace Whitepaper" description="Our strategy for success" index={0}>
      <Landing pattern="1" text={<h3>Whitepaper</h3>} />
      <div className={styles.container}>
        
       
        <h1 className="txtGradient2">Token breakdown</h1>
        <img src="/investment.svg" className={styles.money} />
        <h2 className="txtGradient">1 Billion total supply</h2>
        <hr/>
        <h2>147.2million tokens for IDO</h2>
   
        <h3>To Raise <span>80BNB</span></h3>
        <div className={styles.pieChart}></div>
        <ul className={styles.pieTag}>
        <li >70% Locked for liquidity</li>
        <li >20% for Marketing</li>
        <li >10% for Buyback</li>
        </ul>
        
        <ul className={styles.info}>
          <li>
          <span>80 million (8%)</span> to be distributed at <span>presale</span> (Purchasers must purchase <span>Min:0.5BNB</span> and <span>Max:1BNB</span>)
          </li>
          <li>
          <span>57.6 million (5.76%)</span>to the LP
          </li>
          <li>
          <span>8 million (0.8%)</span> for burn rate at <span>10% per transaction fee</span>
          </li>
          <li>
          <span>1.6 million (1.6%)</span> for fees
          </li>
          <li>
          <span>7 million (0.7%)</span> presale airdrop
          </li>
          <li>
          <span>6 million (0.6%)</span> marketing airdrop
          </li>
          <li>
          <span>250 million (25%)</span> Marketing (multisig wallet, 3 member marketing team)
          </li>
          <li>
          <span>100 million (10%)</span> Dev Funds (multisig 3 signers. To be used to pay Devs based on future work)
          </li>
          <li>
          <span>120 million (12%)</span> Future incentives
          </li>
          <li>
          <span>120 million (12%)</span> in team tokens
          </li>
        </ul>
        <h2>Total allocation for above: 954.2 million (95.42%)</h2>
        <h2>Remainder after allocation: 45.8 million (4.58%)</h2>
      </div>
    </Layout>
  )
}

export default whitepaper
