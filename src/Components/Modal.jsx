import React from "react";
import { useState } from "react";
import "./Modal.css";

export default function Modal({ code, message, modal, setModal }) {


    const toggleModal = () => {
        setModal(!modal)
    };

    if (modal) {
        document.body.classList.add("active-modal")
    } else {
        document.body.classList.remove("active-modal")
    }

    return (
        <>
            {/* <button onClick={toggleModal} className="btn-modal" >
                Open
            </button> */}

            {modal && (
                <div className="modal">
                    <div className="overlay" onClick={toggleModal}>
                        <div className="modal-content">
                            <h2>{code}</h2>
                            <p>
                                {message}
                            </p>
                            <button className="close-modal" onClick={toggleModal}>
                                CLOSE
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
} 