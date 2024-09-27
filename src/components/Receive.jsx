import React from 'react'
import { FaDownload } from "react-icons/fa";
import ThirdwebButton from './ThirdwebButton';
import { defaultChain } from '../config';

function Receive({ address }) {
    return (
        <>
            <ThirdwebButton
                CustomDetailsButton={() =>
                    <div class="icon-circle">
                        <FaDownload />
                    </div>
                }
                displayBalanceToken={{
                    [defaultChain.id]: address
                }}
                hideReceiveFunds={false}
                hideSendFunds={true}
            />
        </>
    )
}

export default Receive
