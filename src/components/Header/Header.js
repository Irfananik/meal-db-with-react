import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="header-container">
            <div>
                <h2>Meal db.com</h2>
            </div>
            <div>
                <a href="/home">Home</a>
                <a href="/additems">AddItems</a>
                <a href="/constact">Contact</a>
            </div>
        </div>
    );
};

export default Header;