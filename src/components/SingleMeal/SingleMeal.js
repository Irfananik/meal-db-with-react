import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './SingleMeal.css'

const SingleMeal = (props) => {
    const {meal,image,category,instructions,addItems} = props

    return (
        <div className="Single-meal-body">
            <h3>Food name: {meal}</h3>
            <img className="meal-img" src= {image} alt="" />
            <p>Catagory: {category}</p>
            <p>instructions: {instructions.slice(0,100)} ...</p>
            <button onClick = {() => addItems(meal)}>
               <p> Add to Items <FontAwesomeIcon icon = {faCartShopping}></FontAwesomeIcon></p>
            </button>
        </div>
    );
};

export default SingleMeal;