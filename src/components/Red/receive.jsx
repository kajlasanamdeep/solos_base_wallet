import React from 'react'
import { HiMiniArrowDownTray } from "react-icons/hi2";
import ThirdwebButton from '../ThirdwebButton';
import { baseSepolia } from 'thirdweb/chains';
import { RED_ADDRESS } from '../../client';

function ReceiveRed() {
    return (
        <>
            <span className="d-flex justify-content-center align-items-center col-3 p-3 bg-white text-center cursor-pointer rounded-5 border border-1 border-black">
                <ThirdwebButton
                    CustomDetailsButton={() => <HiMiniArrowDownTray fontSize={20} />}
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
            </span>
        </>
    )
}

export default ReceiveRed
