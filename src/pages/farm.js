import React, { useState, useEffect } from "react"
import detectEthereumProvider from "@metamask/detect-provider"
import Layout from "../components/layout"
import * as styles from "../styles/farm.module.css"


const getBlockchain = (maskconnect, setMaskConnect) =>
  new Promise(async (resolve, reject) => {
    // console.log("HEYYAAA", maskconnect)
    setMaskConnect(state => {
      return {
        ...state,
        connect: true,
        detectingMetaMask: true,
        loading: true,
      }
    })
    let provider = await detectEthereumProvider({ mustBeMetaMask: true })
    if (provider) {
      //Metamask detected
      setMaskConnect(state => {
        return {
          ...state,
          connect: false,
          installed: true,
          detectingMetaMask: false,
        }
      })
      try {
        //Ask user to connect their account
        //provider = abstraction to allow connection to the Ethereum Network (read-only access)
        await provider.request({ method: "eth_requestAccounts" })
        //Get the networkId from metamask
        setMaskConnect({
          connect: false,
          loading: false,
          success: true,
          pending: false,
          rejected: false,
          installed: true,
        })
        // resolve(testContract)
        resolve("DOne")
        return
      } catch (err) {
        reject({ code: err?.code })
      }
    }
    reject({ code: 404 })
  })

function Farm(props) {
  const [time, setTIme] = useState(getTime())
  useEffect(() => {
    const timer = setInterval(() => {
      setTIme(getTime())
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])

  const [maskConnect, setMaskConnect] = useState({
    //TO start connection process
    connect: false,
    //T Wait for user to accept/Reject connection process
    loading: false,
    //User has accepted
    success: false,
    //There is an open request
    pending: false,
    //Request is rejected
    rejected: false,
    //Detecting metamask
    detectingMetaMask: false,
    //Metamask installed or not
    installed: true,
  })
  //If button is clicked initiate the connect request
  // maskConnect.connect && detect(maskConnect, setMaskConnect)
  // maskConnect.connect && getBlockchain(maskConnect, setMaskConnect)
  const init = async () => {
    try {
      await getBlockchain(maskConnect, setMaskConnect)
    } catch (err) {
      if (err?.code === -32002) {
        //When a connection is already open
        setMaskConnect(state => {
          return {
            ...state,
            connect: false,
            loading: false,
            pending: true,
            installed: true,
          }
        })
        // console.log("Open Connection")
      } else if (err?.code === 4001) {
        //When connection is rejected
        setMaskConnect(state => {
          return {
            success: false,
            connect: false,
            loading: false,
            pending: false,
            rejected: true,
            installed: true,
          }
        })
      } else if (err.code === 404) {
        // if the provider is not detected, detectEthereumProvider resolves to null
        setMaskConnect(state => {
          return {
            ...state,
            connect: false,
            installed: false,
            detectingMetaMask: false,
          }
        })
      }
    }
  }
  // console.log("ROLADED")
  return (
    <Layout
      pathname={props.location.pathname}
      title="Farming ZebraFinance"
      index={3}
    >
      <div className={styles.container}>
        <h1 className={styles.text}>
          Farms open
          <br /> 11:00 am, August 15th, 2021. (UTC)
          <br />
          <div className={styles.timeblock}>
            <div className={styles.timeunit}>
              <span>{time.day}</span>
              <span>Day</span>
            </div>
            <div className={styles.timeunit}>
              <span>{time.hour <= 9 ? `0${time.hour}` : time.hour}</span>
              <span>Hour</span>
            </div>
            <div className={styles.timeunit}>
              <span>{time.min <= 9 ? `0${time.min}` : time.min}</span>
              <span>Minute</span>
            </div>
            <div className={styles.timeunit}>
              <span>{time.sec <= 9 ? `0${time.sec}` : time.sec}</span>
              <span>Second</span>
            </div>
          </div>
        </h1>
      </div>
      {/* <div
        style={{
          minHeight: "80vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "radial-gradient(#171717, #1d1d1d)",
        }}
      >
        <h2
          style={{ margin: "0 0 5rem 0", padding: "0 5rem" }}
          className="gold"
        >
          {maskConnect.success
            ? " Farming Coming Soon "
            : "Connect With MetaMask"}
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: " 0 0 5rem 0",
          }}
        >
          <h3 style={{ margin: "0" }} className="gold">
            {maskConnect.detectingMetaMask ? (
              "Checking for MetaMask"
            ) : !maskConnect.installed ? (
              <>
                MetaMask Not Detected. Please
                <a
                  style={{ color: "#d3d3ea", textTransform: "underline" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://metamask.io/download"
                >
                  &nbsp;Install&nbsp;
                </a>
                and try again
              </>
            ) : maskConnect.loading ? (
              "Waiting for confirmation"
            ) : maskConnect.rejected ? (
              <>
                Connection has been rejected <hr /> Lets start over.
              </>
            ) : maskConnect.pending ? (
              <>
                There seems to be an open connection request.
                <hr />
                Please accept the open request and reload the page.
              </>
            ) : maskConnect.success ? (
              <>Connection Successful</>
            ) : (
              "Click below to start"
            )}
          </h3>
          {maskConnect.success && <Tick />}
        </div>

        <button
          className={
            maskConnect.loading ||
            maskConnect.pending ||
            maskConnect.success ||
            !maskConnect.installed
              ? `disabledGoldBtn`
              : `goldBtn`
          }
          disabled={maskConnect.pending ? true : false}
          onClick={() => init()}
        >
          {maskConnect.rejected ? "Restart" : "Connect"}
        </button>
      </div> */}
    </Layout>
  )
}

export default Farm
