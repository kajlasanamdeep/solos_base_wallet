import React from 'react'
import { FiSend } from "react-icons/fi";
import ThirdwebButton from '../ThirdwebButton';

function Send() {
    return (
        <>
            <span className="d-flex justify-content-center align-items-center col-3 p-3 bg-white text-center cursor-pointer rounded-5 border border-1 border-black">
                <ThirdwebButton CustomDetailsButton={() => <FiSend fontSize={18} />}
                    hideReceiveFunds={true}
                    hideSendFunds={false}
                />
            </span>
        </>
    )
}

export default Send
