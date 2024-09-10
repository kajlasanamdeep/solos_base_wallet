import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Main from './components/main';
import { useActiveAccount } from "thirdweb/react";
import Wallet from './components/Wallet';
import { useEffect } from 'react';
import { RED_ADDRESS } from './client';

function App() {
  const activeAccount = useActiveAccount();
  console.log("address", activeAccount?.address);
  useEffect(() => {
    if (activeAccount?.watchAsset) {
      activeAccount.watchAsset({ type: "ERC20", options: { address: RED_ADDRESS, symbol: "RED", decimals: 18 } });
    }
  }, [activeAccount])
  return (
    <div className="App text-neutral-200 tracking-tight">
      <Header />
      {
        activeAccount?.address ?
          <Wallet />
          :
          <>
            <Main />
            <Footer />
          </>
      }
    </div>
  );
}

export default App;
