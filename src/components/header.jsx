import React from 'react'

function Header() {
    return (
        <header className='w-full p-4 mb-12'>
            <div className="max-w-5xl mx-auto d-flex justify-content-center align-items-center ">
                <div>
                    <img alt="solos" loading="lazy" width="194" height="28" decoding="async" data-nimg="1" className="img-fluid" style={{ color: "transparent" }} src='/logo.svg' />
                </div>
                <div className="max-w-xs">
                </div>
            </div>
        </header>
    )
}

export default Header
