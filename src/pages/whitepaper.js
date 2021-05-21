import React, { useState, useEffect } from "react"
import * as styles from "../styles/whitepaper.module.css"
import Landing from "../components/Landing"
import Layout from "../components/layout"

const chartColors = [
  "#dc3912",
  "#bf7300",
  "#119618",
  "#810081",
  "#0099c6",
  "#bc3965",
  "#00ffc4",
  "#581515",
  "#ff69b4",
  "#1c21b5",
]
const chartLegend = [
  {
    color: "#bf7300",
    ele: (
      <>
        <span>80 million (8%)</span> to be distributed at <span>presale</span>{" "}
        (Purchasers must purchase <span>Min:0.5BNB</span> and{" "}
        <span>Max:1BNB</span>)
      </>
    ),
  },
  {
    color: "#119618",
    ele: (
      <>
        <span>57.6 million (5.76%)</span>to the LP
      </>
    ),
  },
  {
    color: "#dc3912",
    ele: (
      <>
        <span>8 million (0.8%)</span> for burn rate at{" "}
        <span>10% per transaction fee</span>
      </>
    ),
  },
  {
    color: "#0099c6",
    ele: (
      <>
        <span>1.6 million (1.6%)</span> for Fees
      </>
    ),
  },
  {
    color: "#00ffc4",
    ele: (
      <>
        <span>7 million (0.7%)</span> Presale Airdrop
      </>
    ),
  },
  {
    color: "#ff69b4",
    ele: (
      <>
        <span>6 million (0.6%)</span> Marketing Airdrop
      </>
    ),
  },
  {
    color: "#810081",
    ele: (
      <>
        <span>250 million (25%)</span> Marketing (multisig wallet, 3 member
        marketing team)
      </>
    ),
  },
  {
    color: "#bc3965",
    ele: (
      <>
        <span>100 million (10%)</span> Dev Funds (multisig 3 signers. To be used
        to pay Devs based on future work)
      </>
    ),
  },
  {
    color: "#581515",
    ele: (
      <>
        <span>120 million (12%)</span> Future incentives
      </>
    ),
  },
  {
    color: "#1c21b5",
    ele: (
      <>
        <span>120 million (12%)</span> in Team Tokens
      </>
    ),
  },
]
function Whitepaper() {
  const status = useScript("https://www.gstatic.com/charts/loader.js")
  //Initialise the chart
  status == "ready" && InitChart()
  console.log("Stat", status)
  const handleResize = () => {
    status == "ready" && drawChart()
  }
  useEffect(() => {
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [status])
  return (
    <Layout
      title="Zebra Finanace Whitepaper"
      description="Our strategy for success"
      index={0}
    >
      <Landing
        pattern="1"
        text={<h3 style={{ fontSize: "4rem" }}>Whitepaper</h3>}
      />
      <h1 style={{ marginTop: "6rem" }} className="txtGradient2">
        Token breakdown
      </h1>
      <img src="/investment.svg" className={styles.money} />
      <h2 className="txtGradient">1 Billion total supply</h2>
      <hr />
      <div className={styles.chartContainer}>
        <div className={styles.chart} id="chart_div"></div>
        <ul className={styles.pieTag}>
          {chartLegend.map((legend, index) => {
            return (
              <li key={index}>
                <div
                  style={{ backgroundColor: legend.color }}
                  className={styles.disc}
                />
                {legend.ele}
              </li>
            )
          })}
        </ul>
      </div>
      <hr />
      <div className={styles.container}>
        <h4 style={{ textAlign: "left" }}>
          <span>147.2 Million</span> tokens will be used to raise{" "}
          <span>80BNB</span> at IDO. These are utilised as follows:
        </h4>
        <ul className={styles.info}>
          <li>
            <span>70%</span> Locked for liquidity
          </li>
          <li>
            <span>20%</span> for Marketing
          </li>
          <li>
            <span>10%</span> for Buyback
          </li>
        </ul>
        <h2>Total allocation for above: 954.2 million (95.42%)</h2>
        <h2>Remainder after allocation: 45.8 million (4.58%)</h2>
      </div>
    </Layout>
  )
}

const InitChart = () => {
  // Load the Visualization API and the corechart package.
  window.google.charts.load("current", { packages: ["corechart"] })
  // Set a callback to run when the Google Visualization API is loaded.
  window.google.charts.setOnLoadCallback(drawChart)
}

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {
  // Create the data table.
  var data = new window.google.visualization.DataTable()
  data.addColumn("string", "Topping")
  data.addColumn("number", "Slices")
  data.addRows([
    ["Burn rate", 8000000],
    ["Presale", 80000000],
    ["Liquidity Pool", 57600000],

    ["Marketing", 250000000],
    ["Fees", 1600000],
    ["Dev Funds", 100000000],

    ["Presale Airdrop", 7000000],
    ["Future Incentives", 120000000],
    ["Marketing Airdrop", 6000000],
    ["Team Tokens", 120000000],
  ])

  // Set chart options
  var options = {
    title: "Tokenomics",
    width: "100%",
    legend: "none",
    height: "300",
    is3D: "true",
    backgroundColor: "transparent",
    chartArea: {
      height: "100%",
      width: "100%",
    },
    colors: chartColors,
    fontSize: 16,
    slices: {
      0: { offset: 0.1 },
      1: { offset: 0.1 },
      2: { offset: 0.1 },
      3: { offset: 0.1 },
      4: { offset: 0.1 },
      5: { offset: 0.1 },
      6: { offset: 0.1 },
      7: { offset: 0.1 },
      8: { offset: 0.1 },
      9: { offset: 0.1 },
      10: { offset: 0.1 },

      // 5: {offset: 0.4},
    },
  }

  // Instantiate and draw our chart, passing in some options.
  var chart = new window.google.visualization.PieChart(
    document.getElementById("chart_div")
  )
  chart.draw(data, options)
}

//Hook
function useScript(src) {
  // Keep track of script status ("idle", "loading", "ready", "error")
  const [status, setStatus] = useState(src ? "loading" : "idle")
  useEffect(
    () => {
      // Allow falsy src value if waiting on other data needed for
      // constructing the script URL passed to this hook.
      if (!src) {
        setStatus("idle")
        return
      }
      // Fetch existing script element by src
      // It may have been added by another intance of this hook
      let script = document.querySelector(`script[src="${src}"]`)
      if (!script) {
        // Create script
        script = document.createElement("script")
        script.src = src
        script.async = true
        script.setAttribute("data-status", "loading")
        // Add script to document body
        document.body.appendChild(script)
        // Store status in attribute on script
        // This can be read by other instances of this hook
        const setAttributeFromEvent = event => {
          script.setAttribute(
            "data-status",
            event.type === "load" ? "ready" : "error"
          )
        }
        script.addEventListener("load", setAttributeFromEvent)
        script.addEventListener("error", setAttributeFromEvent)
      } else {
        // Grab existing script status from attribute and set to state.
        setStatus(script.getAttribute("data-status"))
      }
      // Script event handler to update status in state
      // Note: Even if the script already exists we still need to add
      // event handlers to update the state for *this* hook instance.
      const setStateFromEvent = event => {
        setStatus(event.type === "load" ? "ready" : "error")
      }
      // Add event listeners
      script.addEventListener("load", setStateFromEvent)
      script.addEventListener("error", setStateFromEvent)
      // Remove event listeners on cleanup
      return () => {
        if (script) {
          script.removeEventListener("load", setStateFromEvent)
          script.removeEventListener("error", setStateFromEvent)
        }
      }
    },
    [src] // Only re-run effect if script src changes
  )
  return status
}

export default Whitepaper
