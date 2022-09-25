import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {

    let totalPrice = 0;
    let shipping = 0;

    for (const product of cart) {
        totalPrice = totalPrice + product.price;
        shipping = shipping + product.shipping;
    }

    const totalTax = parseFloat((totalPrice * 10 / 100).toFixed(2));
    const grandTotal = totalPrice + shipping + totalTax;
    return (
        <div className='cart__info'>
            <h2 className='order__summery'>Order Summery</h2>
            <p>Selected Items: {cart.length}</p>
            <p>Total price: ${totalPrice}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: ${totalTax}</p>
            <h5>Grand Total: ${grandTotal}</h5>
        </div>
    );
};

export default Cart;