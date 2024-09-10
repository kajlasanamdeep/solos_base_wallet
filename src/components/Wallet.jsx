import React from 'react'
import BaseLogo from '../assets/base-logo-blue.png';
import Send from './Base/send';
import Receive from './Base/receive';
import View from './Base/view';
import SendRed from './Red/send';
import ReceiveRed from './Red/receive';
import ViewRed from './Red/view';
import WalletCard from './WalletCard';
import { FaCopy } from "react-icons/fa";
import { useActiveAccount, useReadContract } from 'thirdweb/react';
import { fireToast } from '../utils/toast';
import { useWalletBalance } from "thirdweb/react";
import { baseSepolia } from 'thirdweb/chains';
import { RED_ADDRESS, ThirdwebClient } from '../client';
import { getContract, toTokens } from 'thirdweb';

function Wallet() {
    const baseScanUrl = 'https://sepolia.basescan.org/address';
    const activeAccount = useActiveAccount();
    const contract = getContract({
        client: ThirdwebClient,
        address: RED_ADDRESS,
        chain: baseSepolia,
    });

    const { data: redPrice, isLoading: redPriceLoading } = useReadContract({
        contract,
        method: "function getPrice() external view returns (uint256)"
    });

    const { data: baseBalance, isLoading } = useWalletBalance({
        chain: baseSepolia,
        address: activeAccount?.address,
        client: ThirdwebClient,
    });
    const { data: redBalance, isLoading: redBalanceLoading } = useWalletBalance({
        chain: baseSepolia,
        address: activeAccount?.address,
        client: ThirdwebClient,
        tokenAddress: RED_ADDRESS,
    });

    function copyAddress() {
        navigator.clipboard.writeText(activeAccount?.address);
        fireToast("success", "Address Copied !");
    }
    const assets = [
        {
            logo: BaseLogo,
            name: 'BASE',
            symbol: 'ETH',
            balance: isLoading ? '...' : baseBalance?.displayValue,
            conversionRate: 2346.86,
            SendButton: Send,
            ReceiveButton: Receive,
            ViewButton: View
        },
        {
            logo: 'https://solo-s3-bucket.s3.amazonaws.com/8roecqudk0logo_Real.jpg',
            name: 'RED',
            symbol: 'RED',
            balance: redBalanceLoading ? '...' : redBalance.displayValue,
            conversionRate: redPriceLoading ? 0 : toTokens(redPrice, 18),
            SendButton: SendRed,
            ReceiveButton: ReceiveRed,
            ViewButton: ViewRed
        }
    ]
    return (
        <div class="container">
            <div className='row my-4 justify-content-center'>
                <div className='col-9 col-md-7 col-lg-6 col-xl-5 rounded-2 text-center border-1 border-gray p-2'><b className='text-black'>Wallet Address :</b> <a target='_blank' href={`${baseScanUrl}/${activeAccount?.address}`} className='text-decoration-none cursor-pointer text-break' rel="noreferrer">{activeAccount?.address}</a> <FaCopy onClick={copyAddress} className='cursor-pointer text-success' /></div>
            </div>
            <div className='row justify-content-center gap-4 gap-md-2'>
                {
                    assets.map((asset, i) => {
                        return (
                            <WalletCard {...asset} key={i} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Wallet
