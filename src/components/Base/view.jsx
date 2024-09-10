import React from 'react'
import { FaEye } from "react-icons/fa";
import { useActiveAccount } from 'thirdweb/react';

function View() {
    const baseScanUrl = 'https://sepolia.basescan.org/address';
    const activeAccount = useActiveAccount();

    return (
        <>
            <a target='_blank' href={`${baseScanUrl}/${activeAccount?.address}`} rel="noreferrer" className="icon-circle text-decoration-none text-black rounded-5 border border-1 border-black">
                <FaEye />
            </a>
        </>
    )
}

export default View
