import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from "./App"
import MyCallTest from "./MyCallTest";
import reportWebVitals from './reportWebVitals';

//Add <App /> if you need
ReactDOM.render(
  <React.StrictMode>
    <MyCallTest />
  </React.StrictMode>,
  document.getElementById('root')
);

/*
function MyCallTest() {
    return (
        <div>
            <h1>My test with REACT</h1>
            <nav className="nav">
                <ul className="nav-items">
                    <li>first item</li>
                    <li>second item</li>
                    <li>third item</li>
                    <li>fourth item</li>
                    <li>fifth item</li>
                </ul>
            </nav>
        </div>
    )
};

ReactDOM.render(<MyCallTest />, document.getElementById('root'));
*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
