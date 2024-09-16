import React, { useState } from 'react';
import { prepareTransaction, sendAndConfirmTransaction, toWei, isAddress } from "thirdweb";
import { baseSepolia } from "thirdweb/chains";
import { Button, Form, InputGroup, FormControl, Modal } from 'react-bootstrap';
import { ThirdwebClient } from '../client';
import { useActiveAccount } from 'thirdweb/react';
import { ImSpinner9 } from "react-icons/im";
import { fireToast, fireTransactionSuccessSwal } from '../utils/toast';
const SendFundsModal = ({
    logo,
    name,
    show,
    symbol,
    balance,
    onHide
}) => {
    const account = useActiveAccount();
    const [sending, setSending] = useState(false);
    const [recipient, setRecipient] = useState('');
    const [amount, setAmount] = useState(0);

    const handleRecipientChange = (event) => {
        setRecipient(event.target.value);
    };

    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (+amount > +balance) {
            fireToast('error', 'Insufficient funds !')
            return;
        }
        setSending(true);
        console.log(`Amount: ${amount}`);
        console.log(`Recipient: ${recipient}`);
        const transaction = prepareTransaction({
            to: recipient,
            chain: baseSepolia,
            client: ThirdwebClient,
            value: toWei(Number(amount).toString()),
        });
        sendAndConfirmTransaction({
            account,
            transaction,
        }).then((transactionReceipt) => {
            console.log('Send funds transaction receipt : ', transactionReceipt);
            setSending(false);
            onHide();
            fireTransactionSuccessSwal(transactionReceipt?.transactionHash);
        }).catch((error) => {
            console.log('Send funds transaction error : ', error);
            setSending(false);
            fireToast('error', 'Transaction Failed due to some reasons !')
        });
    };

    return (
        <Modal onShow={() => {
            setAmount('');
            setRecipient('');
            setSending(false);
        }} size='sm' className="bg-blur" backdrop='static' centered show={show} onHide={onHide}>
            <Modal.Header
                closeButton
                className="border-0"
            >
                <Modal.Title
                    style={{ fontSize: "20px", fontWeight: "600" }}
                >
                    Send Funds
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Token</Form.Label>
                        <div class="d-flex gap-2 align-items-center rounded-2 px-2 py-1 cursor-pointer" style={{ border: "1px solid #dee2e6" }}>
                            <img class="img-fluid rounded-5" height={30} width={30} src={logo}
                                alt="" />
                            <div>
                                <div className="" style={{ fontSize: "12px" }}
                                >
                                    {name}
                                </div>
                                <div className="" style={{ fontSize: "12px" }}>
                                    {+balance > 0 ? Number(balance).toFixed(3) : 0} {symbol}
                                </div>
                            </div>
                        </div>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Send to</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ox... or ENS name"
                            value={recipient}
                            onChange={handleRecipientChange}
                        />
                        <Form.Text className='text-danger'>{(recipient.length > 0 && !isAddress(recipient)) ? <>Invalid recipient address</> : null}</Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Amount</Form.Label>
                        <InputGroup className='rounded-2' style={{ border: "1px solid #dee2e6" }}>
                            <FormControl
                                className='border-0'
                                type="text"
                                min={0}
                                placeholder="0"
                                value={amount}
                                onChange={handleAmountChange}
                            />
                            <InputGroup.Text className="border-0 bg-transparent text-gray">
                                {symbol}
                            </InputGroup.Text>
                        </InputGroup>
                        <Form.Text className='text-danger'>{amount?.toString()?.length && +amount <= 0 ? <>Please enter valid amount to send.</> : null}</Form.Text>
                    </Form.Group>
                    <Button disabled={(+amount <= 0) || !isAddress(recipient) || sending} className='form-control' variant="primary" type="submit">
                        {sending ?
                            <><ImSpinner9 className='loading mx-2' /> Sending</>
                            :
                            <>Send</>
                        }
                    </Button>
                </Form>
            </Modal.Body>
        </Modal >
    );
};

export default SendFundsModal;