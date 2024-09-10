import React from 'react'
import { FaEye } from "react-icons/fa";
import { useActiveAccount } from 'thirdweb/react';
import { RED_ADDRESS } from '../../client';

function ViewRed() {

    const activeAccount = useActiveAccount();
    const viewTransactionsUrl = `https://sepolia.basescan.org/token/${RED_ADDRESS}?a=${activeAccount?.address}`;

    return (
        <>
            <a target='_blank' href={viewTransactionsUrl} rel="noreferrer" className="icon-circle text-decoration-none text-black rounded-5 border border-1 border-black">
                <FaEye />
            </a>
        </>
    )
}

export default ViewRed
