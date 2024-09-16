import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Main from './components/main';
import { useActiveAccount } from "thirdweb/react";
import Wallet from './components/Wallet';

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
