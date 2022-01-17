import React from "react"
import ReactDOM from "react-dom"


function MyFirstCall() {
    return (
        <div>
            <h1>My documentation(H1)</h1>
            <p>Hope to helpfull.</p>
        </div>
    )
}

ReactDOM.render(<MyFirstCall />, document.getElementById('root'))

//to export : export default functon...
//export defaut MyFirstCall(); (to verify)


const navbar = (
        <nav>
            <li>first</li>
            <li>second</li>
        </nav>
)

ReactDOM.render(navbar, document.getElementById('root'));

console.log(navbar);
