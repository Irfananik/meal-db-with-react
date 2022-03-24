import React, { useState, useEffect } from 'react';
import SingleMeal from '../SingleMeal/SingleMeal';
import './Food.css'

const Food = () => {
    const [meals,setMeals] = useState([])
    const [cart,setCart] = useState([])

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        .then(response => response.json())
        .then(data => setMeals(data.meals))
    },[])

    const addItems = (meals) => {
        console.log(meals)
        const newCart = [...cart,meals]
        setCart(newCart)
    }

    return (
        <div className="meal-container">
            <div className="meal">
                {
                    meals.map(meal => <SingleMeal key={meal.idMeal} meal={meal.strMeal} image = {meal.strMealThumb} category={meal.strCategory} instructions = {meal.strInstructions} addItems = {addItems}></SingleMeal>)
                }
            </div>
            <div className="add-items">
                <h2>Add Items List</h2>
                <p>Item: {cart.length}</p>
            </div>
        </div>
    );
};

export default Food;