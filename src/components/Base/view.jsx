import React from 'react'
import { GrView } from "react-icons/gr";
import { useActiveAccount } from 'thirdweb/react';

function View() {
    const baseScanUrl = 'https://sepolia.basescan.org/address';
    const activeAccount = useActiveAccount();

    return (
        <>
            <a target='_blank' href={`${baseScanUrl}/${activeAccount?.address}`} rel="noreferrer" className="d-flex justify-content-center align-items-center col-3 p-3 bg-white text-center text-decoration-none text-black rounded-5 border border-1 border-black">
                <GrView fontSize={20} />
            </a>
        </>
    )
}

export default View
