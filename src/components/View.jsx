import React from 'react'
import { FaEye } from "react-icons/fa";
import { useActiveAccount } from 'thirdweb/react';
import { defaultChain } from '../config';

function View({ address }) {
    const ScanUrl = defaultChain?.blockExplorers?.[0]?.url;

    const activeAccount = useActiveAccount();
    const viewTransactionsUrl = `${ScanUrl}/token/${address}?a=${activeAccount?.address}`;

    return (
        <>
            <a target='_blank' href={viewTransactionsUrl} rel="noreferrer" className="icon-circle text-decoration-none text-black rounded-5 border border-1 border-black">
                <FaEye />
            </a>
        </>
    )
}

export default View
