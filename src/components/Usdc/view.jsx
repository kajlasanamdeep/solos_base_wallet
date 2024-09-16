import React from 'react'
import { FaEye } from "react-icons/fa";
import { useActiveAccount, useActiveWalletChain } from 'thirdweb/react';
import { USDC_ADDRESS } from '../../client';

function ViewRed() {
    const chain = useActiveWalletChain();
    const ScanUrl = chain?.blockExplorers?.[0]?.url;

    const activeAccount = useActiveAccount();
    const viewTransactionsUrl = `${ScanUrl}/token/${USDC_ADDRESS[chain.id]}?a=${activeAccount?.address}`;

    return (
        <>
            <a target='_blank' href={viewTransactionsUrl} rel="noreferrer" className="icon-circle text-decoration-none text-black rounded-5 border border-1 border-black">
                <FaEye />
            </a>
        </>
    )
}

export default ViewRed
