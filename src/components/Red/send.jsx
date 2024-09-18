import React from 'react'
import { FaPaperPlane } from "react-icons/fa";
import ThirdwebButton from '../ThirdwebButton';
import { RED_ADDRESS } from '../../config';
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
                    [activeChain.id]: RED_ADDRESS[activeChain.id]
                }}
                hideReceiveFunds={true}
                hideSendFunds={false}
                supportedTokens={{
                    [activeChain.id]: [{
                        name: "Real Estate Dollar",
                        symbol: "RED",
                        icon: 'https://solo-s3-bucket.s3.amazonaws.com/8roecqudk0logo_Real.jpg',
                        address: RED_ADDRESS[activeChain.id]
                    }]
                }}
            />
        </>
    )
}

export default SendRed
