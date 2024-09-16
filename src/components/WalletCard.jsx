import React from 'react'

function WalletCard({
    logo,
    name,
    symbol,
    balance,
    conversionRate,
    SendButton,
    ReceiveButton,
    ViewButton
}) {
    return (
        <div class="wallet-card d-flex justify-content-between mb-2">
            <div class="title-container">
                <img class="asset-img" src={logo}
                    alt="" />
                <div>
                    <h5 class="asset-title text-start">{name}</h5>
                    <h6 class="asset-subtitle text-start">{+balance > 0 ? Number(balance).toFixed(3) : 0} {symbol}</h6>
                    <h6 class="asset-text text-start">${+(balance > 0 && conversionRate > 0) ? Number(balance * conversionRate).toFixed(6) : 0} USD</h6>
                </div>
            </div>
            <div class="icon-container">
                <SendButton />
                <ReceiveButton />
                <ViewButton />
            </div>
        </div>)
}

export default WalletCard
