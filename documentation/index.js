ReactDOM.render(<h1 className="header">Hello World</h1>, document.getElementById('root'))
ReactDOM.render(<ul>Hello World<li>ok</li><li>yes</li></ul>, document.getElementById('root'))

//--------------------------------------------------------------------

function MainContent() {
    return (
        <h1>Hello my first function</h1>
    )
}

ReactDOM.render(
    <div>
        <MainContent />
    </div>,
    document.getElementById('root')

)

//--------------------------------------------------------------------

//Declarative

//Imperative

const h1 = document.getElementById(h1)
h1.textContent = "This is an imperative way to program";
h1.className = "header";
document.getElementById('root').append(h1)

//--------------------------------------------------------------------

const element = <h1 className="header">This is JSX</h1>;
console.log(element)
//return all object in console (props:{className: header, children: "This is JSX").

ReactDOM.render(element, document.getElementById('root'))

//--------------------------------------------------------------------

//IMPORTANT --> div

ReactDOM.render(
    <div>
        <h1 className="header">Hello World</h1>
        <p>This is a pragraphe</p>
    </div>,
    document.getElementById('root')
)

//--------------------------------------------------------------------

//That's in JSX, but that's not the right way.

import React from "react"
import ReactDOM from "react-dom"

const navbar = (
    <nav>
        <li>first</li>
        <li>second</li>
    </nav>
)

console.log(navbar)
//return all objects in console.

ReactDOM.render(navbar, document.getElementById('root'))

//--------------------------------------------------------------------

//Second Example !!

import React from "react"
import ReactDOM from "react-dom"

const secnavbar = (
    <div>
        <h1 className="header">Hello World</h1>
        <p>This is a pragraphe</p>
    </div>
)

console.log(secnavbar)
//return all objects in console.

ReactDOM.render(secnavbar, document.getElementById('root'))

//--------------------------------------------------------------------

//Third Example !!!

import React from "react"

const thirdnavbar = (
    <div>
        <h1 className="header">Hello World</h1>
        <p>This is a pragraphe</p>
    </div>
)

//return all objects in console:
console.log(thirdnavbar)

//To obtain javascript object:
document.getElementById('root').append(JSON.stringify(thirdnavbar))

//--------------------------------------------------------------------

//Fourth Example !!!

import React from "react"
import ReactDOM from "react-dom"

const fourthelem = (
    <div>
        <h1 className="header">Hello World</h1>
        <p>This is a pragraphe</p>
    </div>
)

//return all objects in console:
console.log(fourthelem)

//To obtain javascript object:
ReactDOM.render(
    fourthelem, document.getElementById('root')
)

//--------------------------------------------------------------------

//JSX in right way.

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

//--------------------------------------------------------------------

//to export : export default functon...
//export defaut MyFirstCall() (to verify)
