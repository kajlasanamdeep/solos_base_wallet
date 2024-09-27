import React, { useState } from 'react';
import { isAddress } from "thirdweb";
import { Button, Form, InputGroup, FormControl, Modal } from 'react-bootstrap';
import { defaultChain, PermitAbi, TREASURY_ADDRESS } from '../config';
import { useActiveAccount } from 'thirdweb/react';
import { ImSpinner9 } from "react-icons/im";
import { fireToast, fireTransactionSuccessSwal } from '../Utils/Toast';
const ethers = require('ethers');
const SendFundsModal = ({
    tokenToSend,
    show,
    onHide
}) => {
    const wallet = useActiveAccount();

    const domain = {
        name: tokenToSend?.name,  // Token name
        version: "1",
        chainId: defaultChain.id,
        verifyingContract: tokenToSend?.tokenAddress
    };
    const types = {
        Permit: [
            { name: "owner", type: "address" },
            { name: "spender", type: "address" },
            { name: "value", type: "uint256" },
            { name: "nonce", type: "uint256" },
            { name: "deadline", type: "uint256" },
        ],
    };

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
        try {
            if (+amount > +tokenToSend?.balance) {
                fireToast('error', 'Insufficient funds !')
                return;
            }
            setSending(true);
            console.log(`Amount: ${amount}`);
            console.log(`Recipient: ${recipient}`);
            console.log('REACT_APP_PRIVATE_KEY',process.env.REACT_APP_PRIVATE_KEY);

            const provider = new ethers.JsonRpcProvider(defaultChain?.rpc);
            const treasurySigner = new ethers.Wallet(process.env.REACT_APP_PRIVATE_KEY, provider);
            const tokenContract = new ethers.Contract(tokenToSend?.tokenAddress, PermitAbi, treasurySigner);
            const nonce = await tokenContract.nonces(wallet?.address);

            const currentTime = Math.floor(Date.now() / 1000);
            const validityPeriod = 10 * 60;  // 10 min in seconds
            const deadlineTimestamp = currentTime + validityPeriod;
            const value = {
                owner: wallet?.address,    // User's address
                spender: TREASURY_ADDRESS, // Relayer's address (or the app's)
                value: ethers.parseUnits(Number(amount).toString(), 18).toString(),// Amount for the approval
                nonce: nonce,            // Nonce for the owner
                deadline: deadlineTimestamp, // Unix timestamp for the deadline
            };
            const signature = await wallet.signTypedData({ types, primaryType: 'Permit', domain, message: value });
            const splitSignature = ethers.Signature.from(signature)
            const { v, r, s } = splitSignature;
            const tx = await tokenContract.transferWithPermit(
                wallet?.address,
                recipient,
                value.value,
                deadlineTimestamp,
                v,
                r,
                s
            )
            // sendAndConfirmTransaction({
            //     signature,
            //     toAddress: recipient,
            //     fromAddress: wallet?.address,
            //     value: Number(amount).toString(),
            //     tokenAddress: tokenToSend?.tokenAddress,
            //     deadline: deadlineTimestamp
            // })
            tx.wait()
                .then((receipt) => {
                    // console.log('Send funds transaction receipt : ', response?.data?.data);
                    console.log('Send funds transaction receipt : ', receipt);
                    setSending(false);
                    onHide();
                    // fireTransactionSuccessSwal(response?.data?.data?.transactionHash);
                    fireTransactionSuccessSwal(receipt?.hash);
                }).catch((error) => {
                    console.log('Send funds transaction error : ', error);
                    setSending(false);
                    fireToast('error', 'Transaction Failed due to some reasons !')
                });
        } catch (error) {
            setSending(false);
            console.log(error);
            fireToast('error', 'Transaction Failed due to some reasons !')
        }
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
                            <img class="img-fluid rounded-5" height={30} width={30} src={tokenToSend?.icon}
                                alt="" />
                            <div>
                                <div className="" style={{ fontSize: "12px" }}
                                >
                                    {tokenToSend?.name}
                                </div>
                                <div className="" style={{ fontSize: "12px" }}>
                                    {+tokenToSend?.balance >= 0 ? Number(tokenToSend?.balance).toFixed(3) : 0} {tokenToSend?.symbol}
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
                                {tokenToSend?.symbol}
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