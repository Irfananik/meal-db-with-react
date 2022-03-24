import React, { useEffect, useState } from 'react';
import './Food.css'

const Food = () => {
    const [meals,setMeals] = useState([])

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        .then(response => response.json())
        .then(data => setMeals(data))
    },[])
    return (
        <div className="meal-container">
            <div className="meal">
                <h2>this is all food section:{meals.meals.length}</h2>
            </div>
            <div className="add-items">
                <h2>this is add items section</h2>
            </div>
        </div>
    );
};

export default Food;