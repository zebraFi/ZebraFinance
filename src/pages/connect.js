import React, { useState } from "react"
import detectEthereumProvider from "@metamask/detect-provider"
import Layout from "../components/layout"

const Tick = () => {
  return (
    <svg
      style={{ height: "3rem", margin: "0 1rem", fill: "#4bda21" }}
      version="1.1"
      x="0px"
      y="0px"
      viewBox="0 0 512 512"
    >
      <g>
        <g>
          <path
            d="M497.36,69.995c-7.532-7.545-19.753-7.558-27.285-0.032L238.582,300.845l-83.522-90.713
			c-7.217-7.834-19.419-8.342-27.266-1.126c-7.841,7.217-8.343,19.425-1.126,27.266l97.126,105.481
			c3.557,3.866,8.535,6.111,13.784,6.22c0.141,0.006,0.277,0.006,0.412,0.006c5.101,0,10.008-2.026,13.623-5.628L497.322,97.286
			C504.873,89.761,504.886,77.54,497.36,69.995z"
          />
        </g>
      </g>
      <g>
        <g>
          <path
            d="M492.703,236.703c-10.658,0-19.296,8.638-19.296,19.297c0,119.883-97.524,217.407-217.407,217.407
			c-119.876,0-217.407-97.524-217.407-217.407c0-119.876,97.531-217.407,217.407-217.407c10.658,0,19.297-8.638,19.297-19.296
			C275.297,8.638,266.658,0,256,0C114.84,0,0,114.84,0,256c0,141.154,114.84,256,256,256c141.154,0,256-114.846,256-256
			C512,245.342,503.362,236.703,492.703,236.703z"
          />
        </g>
      </g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
    </svg>
  )
}

const detect = async (maskConnect, setMaskConnect) => {
  const provider = await detectEthereumProvider({ mustBeMetaMask: true })
  // provider === window.ethereum
  if (provider) {
    // console.log("Ethereum successfully detected!")
    setMaskConnect(state => {
      return {
        ...state,
        connect: false,
        installed: true,
        detectingMetaMask: false,
      }
    })
    try {
      if (!maskConnect.pending) {
        await provider.request({ method: "eth_requestAccounts" })
        setMaskConnect({
          connect: false,
          loading: false,
          success: true,
          pending: false,
          rejected: false,
          installed: true,
        })
      }
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
      }

      return
    }

    // From now on, this should always be true:

    // Access the decentralized web!

    // Legacy providers may only have ethereum.sendAsync
    //   const chainId = await provider.request({
    //     method: 'eth_chainId'
    //   })
  } else {
    // if the provider is not detected, detectEthereumProvider resolves to null
    setMaskConnect(state => {
      return {
        ...state,
        connect: false,
        installed: false,
        detectingMetaMask: false,
      }
    })
    // console.error("Please install MetaMask!")
  }
  return provider
}

function Connect() {
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
  maskConnect.connect && detect(maskConnect, setMaskConnect)

  return (
    <Layout title="connect with MetaMask">
      <div
        style={{
          minHeight: "80vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2 style={{ margin: "0 0 5rem 0" }} className="gold">
          Connect With MetaMask
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
                  style={{ color: "blue", textTransform: "underline" }}
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
                Please Cancel the open request and reload the page to start
                connection
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
          onClick={() =>
            setMaskConnect(state => {
              return {
                ...state,
                connect: true,
                detectingMetaMask: true,
                loading: true,
              }
            })
          }
        >
          {maskConnect.rejected ? "Restart" : "Connect"}
        </button>
      </div>
    </Layout>
  )
}

export default Connect
