import React from 'react'
import { FaDownload } from "react-icons/fa";
import ThirdwebButton from '../ThirdwebButton';

function Receive() {
    return (
        <>
            <ThirdwebButton CustomDetailsButton={() =>
                <div class="icon-circle">
                    <FaDownload />
                </div>
            }
                hideReceiveFunds={false}
                hideSendFunds={true}
            />
        </>
    )
}

export default Receive
