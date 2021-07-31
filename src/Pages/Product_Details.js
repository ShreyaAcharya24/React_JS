import React from 'react'
import { useParams } from 'react-router-dom'


export const Product_Details = () => {
    const params = useParams()
    return (
        <div>
            <h2><u>Product Details</u></h2>
            <h4>{params.productId}</h4>
            <h4>{params.productName}</h4>
        </div>
    )
}
