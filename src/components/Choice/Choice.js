import React from 'react';
import './Choice.css'

const Choice = (props) => {

    const { choice } = props
    let name = ''
    for (const car of choice) {
        name = car.name
    }


    return (
        <div className='choice'>
            <h2>Order List</h2>
            <div className="choice-info">
                <p>{name}</p>
                <button>Select One</button>
                <button>Again Select</button>
            </div>



        </div>
    );
};

export default Choice;