import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'

const Product = ({ product, handleAddToCart }) => {
    const { name, img, seller, ratings, price } = product
    return (
        <div className='product__wrapper'>
            <div>
                <img className='product__img' src={img} alt="" />
            </div>
            <div className='product__info'>
                <h1 className='product__name'>{name}</h1>
                <p className='product__price'>Price: ${price}</p>
                <p className='manufacturer'>Manufacturer: {seller}</p>
                <p className='rating'>Rating: {ratings} stars</p>
            </div>
            <div>
                <button onClick={() => handleAddToCart(product)} className='btn__cart'>
                    Add to Cart
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default Product;