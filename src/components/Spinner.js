import React from 'react'
import "../index.css"

export const Spinner = () => {
    return (
        <div className="d-flex justify-content-center mt-5">
            <div className="spinner-border fs-1 pinkText" style={{width: "8rem", height: "8rem"}} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}