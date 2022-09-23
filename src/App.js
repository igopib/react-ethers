import "./App.css";

function App() {
  // Helper Functions
  async function connectWallet() {}
  return (
    <div className="App">
      <h1>React Ethers</h1>
      <label>Connect Wallet: </label>{" "}
      <button onClick={() => connectWallet()}>Connect</button>
    </div>
  );
}

export default App;
