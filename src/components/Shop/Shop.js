import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import { Link, useLoaderData } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'; 

const Shop = () => {
    const products = useLoaderData()

    const [cart, setCart] = useState([])


    const handleCartClear = () => {
        setCart([])
        deleteShoppingCart()
    }

    useEffect(() => {

        const storedCart = getStoredCart();
        const savedProduct = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = storedCart[id]
                addedProduct.quantity = quantity
                savedProduct.push(addedProduct)
            }
        }
        setCart(savedProduct)
    }, [products])

    const handleAddToCart = (selectedProduct) => {
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id)
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct]
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id)
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists]
        }

        setCart(newCart)
        addToDb(selectedProduct.id)
    }

    return (
        <div>
            <div className='shop__container'>
                <div className="products__container">

                    {
                        products.map(product => <Product
                            key={product.id}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        ></Product>)
                    }
                </div>
                <div className="cart__container">
                    <Cart
                        handleCartClear={handleCartClear}
                        cart={cart}
                    >
                        <Link to='/orders'>
                            <button className='children__button'>Review Orders 
                            <FontAwesomeIcon className='children__btn__icon' icon={faArrowRight}></FontAwesomeIcon>
                            </button>
                        </Link>
                    </Cart>
                </div>
            </div>
        </div >
    );
};

export default Shop;