import React from 'react';
import './Choose.css'

const Choose = (props) => {
    const { img, name } = props.choose
    return (
        <div className='list'>
            <img src={img} alt="" />
            <h3>{name}</h3>
        </div>
    );
};

export default Choose;