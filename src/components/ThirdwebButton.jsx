import { ConnectButton } from "thirdweb/react";
import { chains, defaultChain, supportedTokens, ThirdwebClient, wallets } from "../config";



export default function ThirdwebButton({ CustomDetailsButton = undefined, displayBalanceToken = undefined, hideReceiveFunds = true, hideSendFunds = true }) {
  return (
    <>
      <ConnectButton
        chain={defaultChain}
        chains={chains}
        client={ThirdwebClient}
        wallets={wallets}
        theme={'light'}
        supportedTokens={{
          [defaultChain.id]: supportedTokens
        }}
        connectButton={{
          label: "Create Wallet",
          className: "create-wallet-button",
        }}
        detailsButton={CustomDetailsButton ? {
          className: 'custom-wallet-button',
          displayBalanceToken,
          render() {
            return <CustomDetailsButton />
          }
        } : undefined}
        detailsModal={{
          hideSwitchWallet: true,
          hideBuyFunds: true,
          hideReceiveFunds,
          hideSendFunds
        }}
        connectModal={{ size: "compact", showThirdwebBranding: false }}
      />
    </>
  );
}
