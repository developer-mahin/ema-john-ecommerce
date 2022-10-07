import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({ product, handleRemove}) => {

    const { id, name, price, quantity, img } = product;
    return (
        <div className='review__container'>
            <div className='review__img'>
                <img src={img} alt="" />
            </div>
            <div className='review__info'>
                <div className='review__details'>
                    <h3>{name}</h3>
                    <p>Price: <span>${price}</span></p>
                    <p><small>Quantity: <span>{quantity}</span></small></p>
                </div>
                <div className='remove__btn'>
                    <button onClick={() => handleRemove(id)}>
                        <FontAwesomeIcon className='trash__icon' icon={faTrashCan} />
                    </button>
                </div>
            </div>

        </div>
    );
};

export default ReviewItem;