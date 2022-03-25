import React, { useEffect, useState } from 'react';
import Car from '../Car/Car';
import Choice from '../Choice/Choice';
import './Bazar.css'

const Bazar = () => {

    const [cars, setCars] = useState([])

    useEffect(() => {
        fetch('cars.json')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])

    return (
        <div>
            <div className="bazar-container">
                <div className="car-container">
                    {
                        cars.map(car => <Car
                            key={car.id}
                            car={car}
                        ></Car>)
                    }

                </div>
                <div className="choice-container">
                    <Choice></Choice>

                </div>
            </div>

        </div>
    );
};

export default Bazar;