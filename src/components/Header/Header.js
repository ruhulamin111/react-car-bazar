import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className='header'>
                <h1 className='name'>Car Bazar</h1>
                <div>
                    <a href="/home">Home</a>
                    <a href="/cart">Cart</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;