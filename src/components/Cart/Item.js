import React from 'react'

export const Item = (props) => {
    const {item, onAdd, onRemove} = props

    return (
        <div
            className="rounded text-center border bg-white m-2 p-3 d-flex flex-column align-items-center"
            style={{ width: "15rem" }}
        >
            <div className="my-auto">
                <div style={{ width: "10rem" }} className="mx-auto my-2">
                    <img
                        src={item.api_featured_image}
                        className="img-fluid"
                        alt="product"
                    />
                </div>
                <div className="text-start">
                    <h5 className="my-3">{item.name}</h5>
                </div>
                <div className="d-flex justify-content-between">
                    <div className=''>
                        <button
                            className="btn btn-success me-2"
                            onClick={() => onAdd(item)}
                        >
                            <i className="fa-solid fa-plus" />
                        </button>
                        <button
                            className="btn btn-danger me-4"
                            onClick={() => onRemove(item)}
                        >
                            <i className="fa-solid fa-minus" />
                        </button>
                    </div>

                    <div className="mt-1 fs-5">
                        {item.qty} x ${parseInt(item.price).toFixed(2)}
                    </div>
                </div>
            </div>
        </div>
    )
}
