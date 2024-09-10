import React from 'react'
import { FaDownload } from "react-icons/fa";
import ThirdwebButton from '../ThirdwebButton';
import { baseSepolia } from 'thirdweb/chains';
import { RED_ADDRESS } from '../../client';

function ReceiveRed() {
    return (
        <>
            <ThirdwebButton
                CustomDetailsButton={() =>
                    <div class="icon-circle">
                        <FaDownload />
                    </div>
                }
                displayBalanceToken={{
                    [baseSepolia.id]: RED_ADDRESS
                }}
                supportedTokens={{
                    [baseSepolia.id]: [{
                        name: "Real Estate Dollar",
                        symbol: "RED",
                        icon: 'https://solo-s3-bucket.s3.amazonaws.com/8roecqudk0logo_Real.jpg',
                        address: RED_ADDRESS
                    }]
                }}
                hideReceiveFunds={false}
                hideSendFunds={true}
            />
        </>
    )
}

export default ReceiveRed
