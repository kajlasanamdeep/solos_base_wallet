import React, { useState } from 'react'
import BaseLogo from '../assets/base-logo-blue.png';
import Send from './Base/send';
import Receive from './Base/receive';
import View from './Base/view';
import SendRed from './Red/send';
import ReceiveRed from './Red/receive';
import ViewRed from './Red/view';
import SendUsdc from './Usdc/send';
import ReceiveUsdc from './Usdc/receive';
import ViewUsdc from './Usdc/view';
import WalletCard from './WalletCard';
import { FaCopy } from "react-icons/fa";
import { useActiveAccount, useActiveWalletChain, useSwitchActiveWalletChain } from 'thirdweb/react';
import { fireToast } from '../utils/toast';
import { useNativeBalance, useRedBalance, useRedPrice, useUsdcBalance } from '../utils/hooks';
import { chains, conversionRates } from '../config';
import { ImSpinner9 } from 'react-icons/im';
function Wallet() {
    const activeChain = useActiveWalletChain();
    const switchChain = useSwitchActiveWalletChain();
    const ScanUrl = activeChain?.blockExplorers?.[0]?.url;
    const activeAccount = useActiveAccount();
    const [loading, setLoading] = useState(false);
    const { redPrice, redPriceLoading } = useRedPrice({
        chain: activeChain,
    });

    const { nativeBalance, isLoading } = useNativeBalance({
        chain: activeChain,
        address: activeAccount?.address,
    });

    const { redBalance, redBalanceLoading } = useRedBalance({
        chain: activeChain,
        address: activeAccount?.address,
    });

    const { usdcBalance, usdcBalanceLoading } = useUsdcBalance({
        chain: activeChain,
        address: activeAccount?.address,
    });

    function copyAddress() {
        navigator.clipboard.writeText(activeAccount?.address);
        fireToast("success", "Address Copied !");
    }

    const assets = [
        {
            logo: activeChain?.icon?.url || BaseLogo,
            name: activeChain.name,
            symbol: activeChain.nativeCurrency.symbol,
            balance: isLoading ? '...' : nativeBalance?.displayValue,
            conversionRate: conversionRates[activeChain.id],
            SendButton: () => <Send {...{
                logo: activeChain.icon,
                name: activeChain.name,
                symbol: activeChain.nativeCurrency.symbol,
                balance: isLoading ? '...' : nativeBalance?.displayValue,
            }}
            />,
            ReceiveButton: Receive,
            ViewButton: View
        },
        {
            logo: 'https://solo-s3-bucket.s3.amazonaws.com/8roecqudk0logo_Real.jpg',
            name: 'RED',
            symbol: 'RED',
            balance: redBalanceLoading ? '...' : redBalance.displayValue,
            conversionRate: redPriceLoading ? 0 : redPrice,
            SendButton: SendRed,
            ReceiveButton: ReceiveRed,
            ViewButton: ViewRed
        },
        {
            logo: '/USDC.svg',
            name: 'USD COIN',
            symbol: 'USDC',
            balance: usdcBalanceLoading ? '...' : usdcBalance.displayValue,
            conversionRate: usdcBalanceLoading ? 0 : 1,
            SendButton: SendUsdc,
            ReceiveButton: ReceiveUsdc,
            ViewButton: ViewUsdc
        }
    ];
    let timeoutId = null;
    const handleSwitchChain = (chain) => {
        clearTimeout(timeoutId);
        setLoading(true);
        switchChain(chain);
        timeoutId = setTimeout(() => {
            setLoading(false);
        }, 1000);
    }
    return (
        <div class="container">
            <div class="d-flex justify-content-center mt-5">
                <ul class="nav nav-pills">
                    {
                        chains.map((chain) => {
                            return <li class="nav-item" key={chain.id} onClick={() => handleSwitchChain(chain)}>
                                <span class={`nav-link rounded-5 ${chain.id === activeChain.id && 'active'}`}>{chain.name}</span>
                            </li>
                        })
                    }
                </ul>
            </div>
            {
                loading ?
                    <div className='d-flex justify-content-center align-items-center p-5'><ImSpinner9 color='black' fontSize={30} className='loading mx-2' /></div>
                    : <>
                        <div className='row my-4 justify-content-center'>
                            <div className='col-9 col-md-7 col-lg-6 col-xl-5 rounded-2 text-center border-1 border-gray p-2'><b className='text-black'>Wallet Address :</b> <a target='_blank' href={`${ScanUrl}/address/${activeAccount?.address}`} className='text-decoration-none cursor-pointer text-break' rel="noreferrer">{activeAccount?.address}</a> <FaCopy onClick={copyAddress} className='cursor-pointer text-success' /></div>
                        </div>
                        <div className='row justify-content-center gap-2'>
                            <div className='col-9 col-md-7 col-lg-6 col-xl-5 p-0'>
                                {
                                    assets.map((asset, i) => {
                                        return (
                                            <WalletCard {...asset} key={i} />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </>
            }
        </div>
    )
}

export default Wallet
