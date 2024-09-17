import { createThirdwebClient } from "thirdweb";
import { inAppWallet } from "thirdweb/wallets";
export const ThirdwebClient = createThirdwebClient({
  clientId: '6140fc51b8607086b797815a1ae9c42f'
});

export const wallets = [
  inAppWallet({
    auth: {
      options: ["google", "email"],
    }
  })
];
export const RED_ADDRESS = {
  80002: '0x447DE318489bd25D7c111Aa825eF6D2EE5763caC',
  84532: "0x7e9B896FF7b9D623B96443a89af5Ac9FecD1D8E2",
  11155420: '0xDF974F66eEAEeEB5d4E7F57a1573b6C8b93A26c5'
}
export const conversionRates = {
  80002: 0.38, // POL
  84532: 2300.6, // ETH
  11155420: 1.46 // OP
}
export const USDC_ADDRESS = {
  80002: '0x41E94Eb019C0762f9Bfcf9Fb1E58725BfB0e7582',
  84532: "0x036CbD53842c5426634e7929541eC2318f3dCF7e",
  11155420: "0x5fd84259d66Cd46123540766Be93DFE6D43130D7"
}