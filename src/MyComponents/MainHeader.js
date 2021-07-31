import React from 'react'
import { Link } from 'react-router-dom'


export const MainHeader = () => {
    return (
        <div>
            <nav>
                <h1>Main Header</h1>
                <ul>
                    <li>
                        <Link to="/home">Home Page</Link>
                    </li>
                    <li>
                        <Link to="/product">Products</Link>
                    </li>

                    <li>
                        <Link to="/product_details">Product Details</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}