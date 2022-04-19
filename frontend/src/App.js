import { useContext } from "react";

import "./App.css";
import { providerSignerContext } from "./context/ProviderOrSignerContext";
function App() {
  const {
    walletConnected,
    connectWallet,
    address,
    getProviderContractOrSignerContract,
  } = useContext(providerSignerContext);

  ///sample code of how to use it
  const testing = async () => {
    //

    try {
      const signerContract = await getProviderContractOrSignerContract(true);
      console.log(signerContract)
      console.log(address)
      //     const testingContract = new Contract(
      //         CONTRACT_ADDRESS,
      //         abi,
      //         signer
      //     )
      //     console.log(testingContract)
      // const tx = await testingContract.setAccessUser()
      // setLoading(true);
      // // wait for the transaction to get mined
      // tx.wait()
      // setLoading(false)
      // console.log(tx)
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="App">
      <button onClick={connectWallet}>
        {walletConnected ? "Connected" : "Connect Wallet"}
      </button>
      <button onClick={testing}>Testing</button>
    </div>
  );
}

export default App;
