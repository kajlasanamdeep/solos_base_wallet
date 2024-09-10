import React from 'react'
import { GrView } from "react-icons/gr";
import { useActiveAccount } from 'thirdweb/react';
import { RED_ADDRESS } from '../../client';

function ViewRed() {

    const activeAccount = useActiveAccount();
    const viewTransactionsUrl = `https://sepolia.basescan.org/token/${RED_ADDRESS}?a=${activeAccount?.address}`;

    return (
        <>
            <a target='_blank' href={viewTransactionsUrl} rel="noreferrer" className="d-flex justify-content-center align-items-center col-3 p-3 bg-white text-center text-decoration-none text-black rounded-5 border border-1 border-black">
                <GrView fontSize={20} />
            </a>
        </>
    )
}

export default ViewRed
