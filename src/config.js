import { createThirdwebClient } from "thirdweb";
import { base, baseSepolia, optimism, optimismSepolia, polygon, polygonAmoy } from "thirdweb/chains";
import { inAppWallet } from "thirdweb/wallets";
const mode = "MAINNET";
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

export const RED_ADDRESS = mode === 'TESTNET' ?
  // TESTNET ADDRESSES
  {
    80002: '0x447DE318489bd25D7c111Aa825eF6D2EE5763caC',
    84532: "0x7e9B896FF7b9D623B96443a89af5Ac9FecD1D8E2",
    11155420: '0xDF974F66eEAEeEB5d4E7F57a1573b6C8b93A26c5'
  }
  :
  // MAINNET ADDRESSES
  {
    137: '0x447DE318489bd25D7c111Aa825eF6D2EE5763caC',
    8453: "0xfdb7Ad5111389007f2b5786368510c0fAA6425a5",
    10: '0xDF974F66eEAEeEB5d4E7F57a1573b6C8b93A26c5'
  }

export const conversionRates = {
  80002: 0.38, // POL
  84532: 2300.6, // ETH
  11155420: 1.46 // OP
}

export const USDC_ADDRESS = mode === 'TESTNET'
  ?
  // TESTNET ADDRESSES
  {
    80002: '0x41e94eb019c0762f9bfcf9fb1e58725bfb0e7582', // POL
    84532: "0x036CbD53842c5426634e7929541eC2318f3dCF7e", // Base
    11155420: "0x5fd84259d66Cd46123540766Be93DFE6D43130D7" // OP
  }
  :
  // MAINNET ADDRESSES
  {
    137: '0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359', // POL
    8453: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913", // Base
    10: "0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85" // OP 
  }


export const chains = mode === 'TESTNET' ? [baseSepolia, optimismSepolia, polygonAmoy] : [base, optimism, polygon]
export const defaultChain = mode === 'TESTNET' ? baseSepolia : base