import React, { useState } from 'react';
import Choose from '../Choose/Choose';
import List from '../List/List';
import './Choice.css'

const Choice = (props) => {
    const { choice } = props
    const [choose, setChoose] = useState([])

    const selectAdd = () => {
        const choose = choice[Math.floor(Math.random() * choice.length)];
        setChoose(choose)
    }

    return (
        <div className='choice'>
            <h2>Choice List</h2>
            <div className="choice-info">
                {
                    choice.map((car) => <List
                        car={car}
                        key={car.id}
                    ></List>)
                }
                <button onClick={() => selectAdd(choice)}>Select One</button>
                <Choose choose={choose}></Choose>
                <button>Again Select</button>
            </div>
        </div>
    );
};

export default Choice;