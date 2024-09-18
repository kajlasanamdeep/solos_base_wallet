import React from 'react'
import { FaDownload } from "react-icons/fa";
import ThirdwebButton from '../ThirdwebButton';
import { USDC_ADDRESS } from '../../config';
import { useActiveWalletChain } from 'thirdweb/react';

function ReceiveRed() {
    const activeChain = useActiveWalletChain();
    return (
        <>
            <ThirdwebButton
                CustomDetailsButton={() =>
                    <div class="icon-circle">
                        <FaDownload />
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
                hideReceiveFunds={false}
                hideSendFunds={true}
            />
        </>
    )
}

export default ReceiveRed
