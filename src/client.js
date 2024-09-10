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

export const RED_ADDRESS = "0x7e9B896FF7b9D623B96443a89af5Ac9FecD1D8E2";