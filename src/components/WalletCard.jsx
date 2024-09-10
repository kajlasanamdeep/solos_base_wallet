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
        <div className='col-xl-3 col-xs-8 col-md-5 col-lg-4'>
            <div class="card wallet-card">
                <div class="card-header">
                    <div class="d-flex justify-content-between align-items-center">
                        <img class="card-img" src={logo}
                            alt="" />
                        <div>
                            <h5 class="card-title text-start">{name}</h5>
                            <h6 class="card-subtitle mb-2 text-start">{balance && Number(balance).toFixed(3)} {symbol}</h6>
                            <h6 class="card-text mb-2 text-start">${balance && Number(balance * conversionRate).toFixed(3)} USD</h6>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <p class=" d-flex justify-content-evenly ">
                        <SendButton />
                        <ReceiveButton />
                        <ViewButton />
                    </p>
                </div>
            </div>
        </div>)
}

export default WalletCard
