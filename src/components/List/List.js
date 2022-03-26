import React from 'react';
import './List.css'

const List = ({ car }) => {
    const { name, img } = car

    return (
        <div className='list'>
            <img src={img} alt="" />
            <h3>{name}</h3>
        </div>

    );
};

export default List;