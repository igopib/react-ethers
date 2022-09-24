import { React, useState } from "react";
import styles from "./Wallet.module.css";
import { ethers } from "ethers";

const WalletConnect = () => {
  const [connButtonText, setConnButtonText] = useState("Connect");

  let provider = new ethers.providers.Web3Provider(window.ethereum);
  let signer;

  /* const connectButton = () => */ async function connectWalletHandler() {
    await provider.send("eth_requestAccounts", []);
    signer = provider.getSigner();
    setConnButtonText("Connected");
  }

  return (
    <div>
      <h1>React Ethers</h1>
      <button className={styles.button6} onClick={connectWalletHandler}>
        {connButtonText}
      </button>
    </div>
  );
};

export default WalletConnect;
