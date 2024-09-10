import React from 'react'
import { HiMiniArrowDownTray } from "react-icons/hi2";
import ThirdwebButton from '../ThirdwebButton';

function Receive() {
    return (
        <>
            <span className="d-flex justify-content-center align-items-center col-3 p-3 border border-1 border-black text-center cursor-pointer rounded-5 border border-1 border-black">
                <ThirdwebButton CustomDetailsButton={() => <HiMiniArrowDownTray fontSize={20} />}
                    hideReceiveFunds={false}
                    hideSendFunds={true}
                />
            </span>
        </>
    )
}

export default Receive
