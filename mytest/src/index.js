import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

function MyFirstCall() {
    return (
        <div>
            <h1>My documentation(H1)</h1>
            <p>Hope to helpfull.</p>
        </div>
    )
}

ReactDOM.render(<MyFirstCall />, document.getElementById('root'))

const navbar = (
        <nav>
            <li>first</li>
            <li>second</li>
        </nav>
)

ReactDOM.render(navbar, document.getElementById('root'));

console.log(navbar);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
