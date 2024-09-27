import React from 'react'
import WalletCard from './WalletCard';
import { FaCopy } from "react-icons/fa";
import { shortenAddress } from 'thirdweb/utils'
import { useActiveAccount, useActiveWallet, useActiveWalletChain, useDisconnect } from 'thirdweb/react';
import { fireToast, toastConfirm } from '../Utils/Toast';
import { supportedTokens } from '../config';
import SendFundsModal from './SendFundsModal';
import { RiLogoutBoxRLine } from "react-icons/ri";
function Wallet() {
    const { disconnect } = useDisconnect();
    const wallet = useActiveWallet();
    const [show, setShow] = React.useState(false);
    const [tokenToSend, setTokenToSend] = React.useState(null);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const activeChain = useActiveWalletChain();
    const ScanUrl = activeChain?.blockExplorers?.[0]?.url;
    const activeAccount = useActiveAccount();
    function copyAddress() {
        navigator.clipboard.writeText(activeAccount?.address);
        fireToast("success", "Address Copied !");
    }
    function handleDisconnect() {
        toastConfirm('Disconnect Wallet', '', '', '320px').fire().then((result) => {
            if (result.isConfirmed) {
                disconnect(wallet);
            }
        })
    }

    return (
        <div class="container">
            <div className='row my-4 justify-content-center'>
                <div className='col-9 col-md-7 col-lg-6 col-xl-5 p-0'>
                    <div className='d-flex rounded-3 border-1 border-gray p-2 justify-content-between'>
                        <div>
                            <b className='text-black mx-1'>Wallet Address :</b> <a target='_blank' href={`${ScanUrl}/address/${activeAccount?.address}`} className='mx-1 text-decoration-none cursor-pointer text-break' rel="noreferrer">{shortenAddress(activeAccount?.address, 6)}</a>
                            <FaCopy onClick={copyAddress} className='mx-1 cursor-pointer text-success' />
                        </div>
                        <div>
                            <RiLogoutBoxRLine fontSize={18} className='cursor-pointer text-dark' onClick={handleDisconnect} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='row justify-content-center gap-2'>
                <div className='col-9 col-md-7 col-lg-6 col-xl-5 p-0'>
                    {
                        supportedTokens.map((token, i) => {
                            return (
                                <WalletCard {...token} handleShow={handleShow} setTokenToSend={setTokenToSend} key={i} />
                            )
                        })
                    }
                </div>
            </div>
            <SendFundsModal tokenToSend={tokenToSend} show={show} onHide={handleClose} />
        </div>
    )
}

export default Wallet
