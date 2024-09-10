import React from 'react'
import { FaPaperPlane } from "react-icons/fa";
import ThirdwebButton from '../ThirdwebButton';

function Send() {
    return (
        <>
            <ThirdwebButton
                CustomDetailsButton={() =>
                    <div class="icon-circle">
                        <FaPaperPlane />
                    </div>
                }
                hideReceiveFunds={true}
                hideSendFunds={false}
            />
        </>
    )
}

export default Send
