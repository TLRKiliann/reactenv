import React from "react"
import logo from './logo.svg';
import './App.css';

function MyCallTest() {
    return (
        <div className="flex-1">
            <img src={logo} className="img-up" alt="logo" />
            <h1 className="h1-title">My test with REACT</h1>

            <nav className="nav">
                <ul className="nav-items">
                    <li>first item</li>
                    <li>second item</li>
                    <li>third item</li>
                    <li>fourth item</li>
                    <li>fifth item</li>
                </ul>
            </nav>

            <small>
                @ 2022 created by ko@l@tr33
            </small>
        </div>

    );
}

export default MyCallTest;
