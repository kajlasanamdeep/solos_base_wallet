import React from 'react'
import { FaPaperPlane } from "react-icons/fa";
import ThirdwebButton from '../ThirdwebButton';
import { USDC_ADDRESS } from '../../client';
import { useActiveWalletChain } from 'thirdweb/react';

function SendRed() {
    const activeChain = useActiveWalletChain()

    return (
        <>
            <ThirdwebButton
                CustomDetailsButton={() =>
                    <div class="icon-circle">
                        <FaPaperPlane />
                    </div>
                }
                displayBalanceToken={{
                    [activeChain.id]: USDC_ADDRESS[activeChain.id]
                }}
                supportedTokens={{
                    [activeChain.id]: [{
                        name: "USD Coin",
                        symbol: "USDC",
                        icon: '/USDC.svg',
                        address: USDC_ADDRESS[activeChain.id]
                    }]
                }}
                hideReceiveFunds={true}
                hideSendFunds={false}
            />
        </>
    )
}

export default SendRed
