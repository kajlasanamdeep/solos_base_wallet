import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Main from './Components/Main';
import { useActiveAccount } from "thirdweb/react";
import Wallet from './Components/Wallet';

function App() {
  const activeAccount = useActiveAccount();
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
