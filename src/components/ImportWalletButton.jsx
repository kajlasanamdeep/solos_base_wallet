import React, { useState } from "react";
import Arrow from "../assets/arrow.svg";
import { Modal, Form } from "react-bootstrap";
import { privateKeyToAccount } from "thirdweb/wallets";
import { ThirdwebClient } from "../client";
import { fireToast } from "../utils/toast";
function ImportWalletButton() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [privateKey, setPrivateKey] = useState('');
  const handleSubmit = () => {
    if (privateKey) {
      try {
        privateKeyToAccount({
          client: ThirdwebClient,
          privateKey
        });
      } catch (error) {
        console.log(error);
        fireToast('error', 'Invalid Private Key !')
      }
    } else {
      fireToast('error', 'Private Key Required !')
    }
  };
  return (
    <>
      <button
        className="btn create-wallet-button fw-semibold"
        data-theme="dark"
        data-is-loading="false"
        type="button"
        data-test="connect-wallet-button"
        style={{ minWidth: "165px", height: "50px", fontSize: "16px" }}
        onClick={handleShow}
      >
        Import Wallet
      </button>
      <Modal
        className="bg-blur"
        show={show}
        onShow={() => setPrivateKey('')}
        onHide={handleClose}
        centered
        size="sm"
      >
        <Modal.Header
          closeButton
          closeVariant="white"
          className="bg-dark text-white border-0"
        >
          <Modal.Title
            style={{ fontSize: "20px", fontWeight: "600" }}
            className="text-white"
          >
            Import wallet
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark text-white">
          <Form className="bg-dark text-white">
            <Form.Group className="my-2 position-relative d-flex">
              <Form.Control
                className="text-white bg-dark placeholder-white border-gray"
                style={{ padding: "16px 45px 16px 16px" }}
                type="text"
                value={privateKey}
                onChange={(e) => setPrivateKey(e.target.value)}
                placeholder="Enter Private key"
              />
              <img
                src={Arrow}
                alt=""
                onClick={handleSubmit}
                className=" position-absolute input-arrow cursor-pointer"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="bg-dark border-gray border-0"></Modal.Footer>
      </Modal>
    </>
  );
}

export default ImportWalletButton;
