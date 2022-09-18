import React from 'react';
import Modal from 'react-bootstrap/Modal';

export const Checkout = (props) => {
    return (
        <Modal
            {...props}
            centered
        >
            <Modal.Body>
                <div className='d-flex justify-content-between m-3'>
                    <div>
                        <h2>
                            Card Details
                        </h2>
                    </div>
                    <div onClick={props.onHide} className="cursor"><i className="fa-solid fa-xmark fa-2x"></i></div>
                </div>

                <form className="col-11 mx-auto text-start my-3">
                    <div className="mb-3 fs-4 d-flex flex-column">
                        <label htmlFor="exampleFormControlInput1" className="form-label m-0">
                            Card Type
                        </label>
                        <div className="d-flex d-inline-flex">
                            <h5 className="mt-2 me-2 text-muted">Select One:</h5>
                            <button className="btn p-2 me-1">
                                <i className="fa-brands fa-cc-mastercard text-dark fs-4" />
                            </button>
                            <button className="btn p-2 me-1">
                                <i className="fa-brands fa-cc-visa text-dark fs-4" />
                            </button>
                            <button className="btn p-2 me-1">
                                <i className="fa-brands fa-cc-amex text-dark fs-4" />
                            </button>
                            <button className="btn p-2 me-1">
                                <i className="fa-brands fa-cc-discover text-dark fs-4" />
                            </button>
                        </div>
                    </div>

                    <div className="mb-2 fs-4">
                        <label htmlFor="exampleFormControlInput1" className="form-label">
                            Cardholder's Name
                        </label>
                        <input type="text" className="form-control" placeholder="John Doe" />
                    </div>

                    <div className="mb-3 fs-4">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">
                            Card Number
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="4242 4242 4242 4242"
                        ></input>
                    </div>

                    <div className="mb-4 fs-4">
                        <div className="d-flex d-inline-flex">
                            <div className="col-4 me-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                                    Expiration
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="02/26"
                                ></input>
                            </div>

                            <div className="col-4">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                                    CVV
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="652"
                                ></input>
                            </div>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-dark py-1 px-2 fs-5"
                        onClick={props.onHide}
                    >
                        {`Pay $${props.price.toFixed(2)}`}
                    </button>

                    <h5 className='mt-3'>Note: This Checkout does not work, it does not save or use the information you enter</h5>
                </form>
            </Modal.Body >
        </Modal >
    );
}
