import React, { useEffect, useState } from 'react';
import Car from '../Car/Car';
import Choice from '../Choice/Choice';
import './Bazar.css'

const Bazar = () => {
    const [cars, setCars] = useState([])
    const [choice, setChoice] = useState([])

    useEffect(() => {
        fetch('cars.json')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])

    const addToChoice = (car) => {
        const newChoice = [...choice, car]
        setChoice(newChoice)

    }

    return (
        <div>
            <div className="bazar-container">
                <div className="car-container">
                    {
                        cars.map(car => <Car
                            key={car.id}
                            car={car}
                            addToChoice={addToChoice}
                        ></Car>)
                    }
                </div>
                <div className="choice-container">
                    <Choice choice={choice}></Choice>
                </div>

            </div>
            <div className="theory">
                <h4>Question: How does react work?</h4>
                <p>Ans: React is implement of Virtual DOM tree that is representation of Javascript. When it need to update it find most efficient way to update the browser's DOM. Browser's DOM and React element are plain and it cheap to creat. React DOM takes care of updating DOM to match the React elements. That's reason javascript is so fast and work keeping a DOM tree in it speed to manupulated.  </p>
                <h4>Question: What is the difference of Props Vs State?</h4>
                <p>Ans: Props read only and state is write and read both. Props can be used with component and function where state is use only state components. Props can not be editable there state can be editable. Props pass data from one to another components where state pass data within the component only.  </p>

            </div>

        </div>
    );
};

export default Bazar;