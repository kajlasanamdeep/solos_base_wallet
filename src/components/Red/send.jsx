import React from 'react'
import { FaPaperPlane } from "react-icons/fa";
import ThirdwebButton from '../ThirdwebButton';
import { baseSepolia } from 'thirdweb/chains';
import { RED_ADDRESS } from '../../client';

function SendRed() {

    return (
        <>
            <ThirdwebButton
                CustomDetailsButton={() =>
                    <div class="icon-circle">
                        <FaPaperPlane />
                    </div>
                }
                displayBalanceToken={{
                    [baseSepolia.id]: RED_ADDRESS
                }}
                hideReceiveFunds={true}
                hideSendFunds={false}
                supportedTokens={{
                    [baseSepolia.id]: [{
                        name: "Real Estate Dollar",
                        symbol: "RED",
                        icon: 'https://solo-s3-bucket.s3.amazonaws.com/8roecqudk0logo_Real.jpg',
                        address: RED_ADDRESS
                    }]
                }}
            />
        </>
    )
}

export default SendRed
