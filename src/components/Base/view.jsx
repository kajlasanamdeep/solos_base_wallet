import React from 'react'
import { FaEye } from "react-icons/fa";
import { useActiveAccount, useActiveWalletChain } from 'thirdweb/react';

function View() {
    const chain = useActiveWalletChain();
    const ScanUrl = chain?.blockExplorers?.[0]?.url;
    const activeAccount = useActiveAccount();

    return (
        <>
            <a target='_blank' href={`${ScanUrl}/address/${activeAccount?.address}`} rel="noreferrer" className="icon-circle text-decoration-none text-black rounded-5 border border-1 border-black">
                <FaEye />
            </a>
        </>
    )
}

export default View
