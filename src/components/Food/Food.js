import React, { useState, useEffect } from 'react';
import SingleMeal from '../SingleMeal/SingleMeal';
import './Food.css'

const Food = () => {
    const [meals,setMeals] = useState([])

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        .then(response => response.json())
        .then(data => setMeals(data.meals))
    },[])
    return (
        <div className="meal-container">
            <div className="meal">
                {
                    meals.map(meal => <SingleMeal key={meal.idMeal} meal={meal.strMeal} image = {meal.strMealThumb} category={meal.strCategory} instructions = {meal.strInstructions}></SingleMeal>)
                }
            </div>
            <div className="add-items">
                <h2>this is add items section</h2>
            </div>
        </div>
    );
};

export default Food;