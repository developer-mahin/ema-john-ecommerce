import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'

const Orders = () => {
    const { previousData } = useLoaderData()
    const [cart, setCart] = useState(previousData)

    const handleRemove = (id) => {
        const removeProduct = cart.filter(product => product._id !== id)
        setCart(removeProduct)
        removeFromDb(id)
    }

    const handleCartClear = () => {
        setCart([])
        deleteShoppingCart()
    }

    return (
        <div className='shop__container'>
            <div className='orders__container'>
                {
                    cart.map(product => <ReviewItem
                        key={product._id}
                        product={product}
                        handleRemove={handleRemove}
                    ></ReviewItem>)
                }
                {
                    cart.length === 0 && <h2 className='shop__now'>No data available please <Link to='/shop'> Shop now</Link></h2>
                }
            </div>
            <div className='cart__container'>
                <Cart
                    handleCartClear={handleCartClear}
                    cart={cart}>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;