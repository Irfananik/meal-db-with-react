import React from 'react';
import './SingleMeal.css'

const SingleMeal = (props) => {
    const {meal,image,category,instructions} = props
    return (
        <div className="Single-meal-body">
            <h3>Food name: {meal}</h3>
            <img className="meal-img" src= {image} alt="" />
            <p>Catagory: {category}</p>
            <p>instructions: {instructions.slice(0,100)} ...</p>
            <button>
                Add to Items
            </button>
        </div>
    );
};

export default SingleMeal;