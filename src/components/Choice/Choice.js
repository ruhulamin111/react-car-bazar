import React from 'react';
import './Choice.css'

const Choice = (props) => {
    const { choice } = props

    return (
        <div className='choice'>
            <h2>Choice List</h2>
            <div className="choice-info">
                {
                    choice.map((item) =>
                        <h3>{item.name}</h3>
                    )
                }
                <button>Select One</button>
                <button>Again Select</button>
            </div>



        </div>
    );
};

export default Choice;