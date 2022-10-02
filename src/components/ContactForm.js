import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Modal, Button } from "react-bootstrap";

export const ContactForm = () => {
    const form = useRef();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "gmail",
                "template_portfolio",
                form.current,
                "user_40gT501S2nuqnbm1EYjzt"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                },
                form.current.reset()
            );
    };

    return (
        <form className="col-11 mx-auto" ref={form} onSubmit={sendEmail}>
            <div className="mb-2 fs-4">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                    Name
                </label>
                <input
                    type="text"
                    className="form-control border border-dark"
                    id="exampleFormControlInput1"
                    placeholder="Type your name here"
                />
            </div>
            <div className="mb-2 fs-4">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                    Email
                </label>
                <input
                    type="email"
                    className="form-control border border-dark"
                    id="exampleFormControlInput2"
                    placeholder="nice.to.meet.you@gmail.com"
                />
            </div>
            <div className="mb-3 fs-4">
                <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label"
                >
                    Message
                </label>
                <textarea
                    className="form-control border border-dark"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Thank you for contacting us!"
                ></textarea>
            </div>

            <button
                type="submit"
                className="btn btn-dark py-1 px-2 fs-5"
                onClick={handleShow}
            >
                Send
            </button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
                className="text-center"
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h2 className="p-2">
                            Thank you for your message!
                        </h2>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h3 className="p-3">
                        We will review your message shortly
                    </h3>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="dark" className="p-2 px-3" onClick={handleClose}>
                        <h4 className="m-0">Close</h4>
                    </Button>
                </Modal.Footer>
            </Modal>
        </form>
    );
};