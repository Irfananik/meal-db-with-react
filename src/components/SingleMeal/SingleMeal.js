import React from 'react';
import './SingleMeal.css'

const SingleMeal = (props) => {
    return (
        <div className="Single-meal-body">
            <h3>Food name: {props.meal}</h3>
            <img className="meal-img" src= {props.image} alt="" />
            <p>Catagory: {props.category}</p>
            <p>instructions: {props.instructions.slice(0,100)} ...</p>
        </div>
    );
};

export default SingleMeal;