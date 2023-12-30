import React from 'react'
const Card = ({ product }) => {
    // const { image, title, price } = product;
    return (
        <div><div className="card" style={{ width: "13rem", height: "22rem" }}>
            <img src={product?.image} className="card-img-top" alt="..." style={{ width: "11rem", height: "11rem" }} />
            <div className="card-body">
                <h5 className="card-title">{product?.title}</h5>
                <p >Rs.{product.price}</p>
                <p >⭐⭐⭐⭐⭐(220)</p>
            </div>
        </div>
        </div>
    )
}

export default Card