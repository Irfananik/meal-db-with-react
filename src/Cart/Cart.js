import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    console.log(cart)
    return (
        <div className = "cart-container">
            <h2>Add Items List</h2>
            <p>Item: {cart} </p>
        </div>
    );
};

export default Cart;