import { ConnectButton } from "thirdweb/react";
import { baseSepolia } from "thirdweb/chains";
import { ThirdwebClient, wallets } from "../client";



export default function ThirdwebButton({ CustomDetailsButton = undefined, supportedTokens = undefined, displayBalanceToken = undefined, hideReceiveFunds = true, hideSendFunds = true }) {
  return (
    <>
      <ConnectButton
        chain={baseSepolia}
        chains={[baseSepolia]}
        client={ThirdwebClient}
        wallets={wallets}
        theme={'light'}
        supportedTokens={supportedTokens}
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
