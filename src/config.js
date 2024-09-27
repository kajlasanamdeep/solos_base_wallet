import { createThirdwebClient } from "thirdweb";
import { polygon, polygonAmoy } from "thirdweb/chains";
import { inAppWallet } from "thirdweb/wallets";
const mode = "TESTNET";
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
const logo_base_url = 'https://solo-s3-bucket.s3.amazonaws.com';
export const supportedTokens = [
  {
    icon: `${logo_base_url}/8roecqudk0logo_Real.jpg`,
    address: mode === 'TESTNET' ? '0x17f15959871842b8B424dd75FCa66CF27Cd433B5' : '',
    name: 'Real Estate Dollars',
    symbol: 'RED'
  },
  {
    icon: `${logo_base_url}/jz7hue1agwlogo_Reward.jpg`,
    address: mode === 'TESTNET' ? '0xd74BDB1768aA70fdF8Ec8F21e99C389fca4ec8bB' : '',
    name: 'Solos Rewards',
    symbol: 'SR'
  },
  {
    icon: `${logo_base_url}/jz7hue1agwlogo_Reward.jpg`,
    address: mode === 'TESTNET' ? '0x4502282d83462cB59C2659FF4Ba26E4047a3D8Ec' : '',
    name: 'Transaction Verify Token',
    symbol: 'TVT'
  }
]
export const chains = mode === 'TESTNET' ? [polygonAmoy] : [polygon];
export const defaultChain = mode === 'TESTNET' ? polygonAmoy : polygon;
export const TREASURY_ADDRESS = '0x9F2985565E358F8579befAd1474A74E090Ffb0AD';
export const API_URL = 'http://localhost:8003/api';

export const PermitAbi = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "nonces",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "deadline",
        "type": "uint256"
      },
      {
        "internalType": "uint8",
        "name": "v",
        "type": "uint8"
      },
      {
        "internalType": "bytes32",
        "name": "r",
        "type": "bytes32"
      },
      {
        "internalType": "bytes32",
        "name": "s",
        "type": "bytes32"
      }
    ],
    "name": "transferWithPermit",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];