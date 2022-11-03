import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addToDb, deleteShoppingCart, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([])
    const [count, setCount] = useState(0)
    const [cart, setCart] = useState([])
    const [page, setPage] = useState(0)
    const [size, setSize] = useState(10);

    const pages = Math.ceil(count / size)


    useEffect(() => {

        const url = `http://localhost:5000/products?page=${page}&size=${size}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProducts(data.products)
                setCount(data.count)
            })

    }, [page, size])


    const handleCartClear = () => {
        setCart([])
        deleteShoppingCart()
    }

    useEffect(() => {

        const storedCart = getStoredCart();
        const savedProduct = [];
        const ids = Object.keys(storedCart)

        fetch("http://localhost:5000/productsById", {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(ids)
        })
            .then(res => res.json())
            .then(data => {
                for (const id in storedCart) {
                    const addedProduct = data.find(product => product._id === id);
                    if (addedProduct) {
                        const quantity = storedCart[id]
                        addedProduct.quantity = quantity
                        savedProduct.push(addedProduct)
                    }
                }
                setCart(savedProduct)
            })



    }, [products])


    const handleAddToCart = (selectedProduct) => {
        let newCart = [];
        const exists = cart.find(product => product._id === selectedProduct._id)
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct]
        }
        else {
            const rest = cart.filter(product => product._id !== selectedProduct._id)
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists]
        }

        setCart(newCart)
        addToDb(selectedProduct._id)
    }

    return (
        <div>
            <div className='shop__container'>
                <div className="products__container">

                    {
                        products.map(product => <Product
                            key={product._id}
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

                <div className='pagination'>
                    <p>page number {page}</p>
                    {
                        [...Array(pages).keys()].map(number => <button

                            key={number}
                            onClick={() => setPage(number)}
                            className={page === number && "selected"}
                        >{number + 1}</button>)
                    }
                    <select name="" id="" onChange={(event) => setSize(event.target.value)}>
                        <option value="5">5</option>
                        <option value="10" selected>10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                    </select>
                </div>

            </div>
        </div >
    );
};

export default Shop;