import React from 'react'
import ImportWalletButton from './ImportWalletButton'
import ThirdwebButton from './ThirdwebButton';

function Main() {
    return (
      <div className="max-w-3xl d-flex flex-column align-items-center mx-auto py-8 px-4">
        <div className="d-flex flex-column align-items-center w-full">
          <h1 className="fw-bold text-6xl text-center tracking-tight text-blck">
            Welcome to&nbsp;
            <span class="bg-clip-text text-transparent">Base Wallet</span>
          </h1>
          <div className="mx-auto">
            <img
              alt="base symbol"
              loading="lazy"
              width="400"
              height="320"
              decoding="async"
              data-nimg="1"
              src="/Base.svg"
            />
          </div>
          <div className="max-w-xs">
            <div className="my-1">
              <ThirdwebButton />
            </div>
            <div className="my-1">
              <ImportWalletButton />
            </div>
          </div>
        </div>
      </div>
    );
}

export default Main
