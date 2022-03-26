import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Car.css'

const Car = ({ car, addToChoice }) => {
    const { name, img, price, manufacture } = car;

    return (
        <div>
            <div className="car">
                <img src={img} alt="" />
                <div className="info">
                    <h3>Name: {name} </h3>
                    <h4>Price:$ {price} </h4>
                    <h5>Manufacture: {manufacture} </h5>
                </div>
                <button onClick={() => addToChoice(car)} className='btn-choice'>
                    <p>Purchase</p>
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>
            </div>

        </div >
    );
};

export default Car;