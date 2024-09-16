import React from 'react'
import { FaPaperPlane } from "react-icons/fa";
import ThirdwebButton from '../ThirdwebButton';
// import SendFundsModal from '../SendFundsModal';

function Send({ logo, name, symbol, balance }) {
    // const [show, setShow] = React.useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    return (
        <>
            <ThirdwebButton
                CustomDetailsButton={() =>
                    <div class="icon-circle" >
                        <FaPaperPlane />
                    </div>
                }
                hideReceiveFunds={true}
                hideSendFunds={false}
            />
            {/* <div class="icon-circle" onClick={handleShow}>
                <FaPaperPlane />
            </div>
            <SendFundsModal {...{ logo, name, symbol, balance }} show={show} onHide={handleClose} /> */}
        </>
    )
}

export default Send
