import React from 'react'
import { FaDownload } from "react-icons/fa";
import ThirdwebButton from '../ThirdwebButton';
import { RED_ADDRESS } from '../../config';
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
                    [activeChain.id]: RED_ADDRESS[activeChain.id]
                }}
                supportedTokens={{
                    [activeChain.id]: [{
                        name: "Real Estate Dollar",
                        symbol: "RED",
                        icon: 'https://solo-s3-bucket.s3.amazonaws.com/8roecqudk0logo_Real.jpg',
                        address: RED_ADDRESS[activeChain.id]
                    }]
                }}
                hideReceiveFunds={false}
                hideSendFunds={true}
            />
        </>
    )
}

export default ReceiveRed
