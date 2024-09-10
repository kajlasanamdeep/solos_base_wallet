import React from 'react'
import { FiSend } from "react-icons/fi";
import ThirdwebButton from '../ThirdwebButton';
import { baseSepolia } from 'thirdweb/chains';
import { RED_ADDRESS } from '../../client';

function SendRed() {

    return (
        <>
            <span className="d-flex justify-content-center align-items-center col-3 p-3 bg-white text-center cursor-pointer rounded-5 border border-1 border-black">
                <ThirdwebButton
                    CustomDetailsButton={() => <FiSend fontSize={18} />}
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
            </span>
        </>
    )
}

export default SendRed
