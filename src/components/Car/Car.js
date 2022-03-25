import React from 'react';
import './Car.css'

const Car = ({ car }) => {
    const { name, img, price, manufacture, } = car;


    return (
        <div>
            <div className="car">
                <img src={img} alt="" />
                <div className="info">
                    <h3>Name: {name} </h3>
                    <h4>Price:$ {price} </h4>
                    <h5>Manufacture: {manufacture} </h5>
                </div>
                <button className='btn-choice'>
                    <p>Purchase</p>
                </button>

            </div>


        </div>
    );
};

export default Car;