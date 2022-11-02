import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Cart.css'
import { Link } from 'react-router-dom';

const Cart = ({ cart, handleCartClear, children }) => {

    let total = 0;
    let shipping = 0;
    let quantity = 0;

    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }

    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;
    return (
        <div className='cart__info'>
            <h2 className='order__summery'>Order Summery</h2>
            <p>Selected Items: {quantity}</p>
            <p>Total price: ${total}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h5>Grand Total: ${grandTotal}</h5>
            <button
                onClick={handleCartClear}
                className='clear__cart'
            >Clear Cart <FontAwesomeIcon className='clear__cart__icon' icon={faTrashCan}></FontAwesomeIcon>
            </button>
            <Link to='/shipping'>
                <button className='children__button'>Shipping Orders
                    <FontAwesomeIcon className='children__btn__icon' icon={faArrowRight}></FontAwesomeIcon>
                </button>
            </Link>
            {children}
        </div>
    );
};

export default Cart;