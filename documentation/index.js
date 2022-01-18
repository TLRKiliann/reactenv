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
//return all object in console (props:{className: header,
//children: "This is JSX").

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
//--------------------------------------------------------------------

//That's in JSX, but it isn't the right way.

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

const secelem = (
    <div>
        <h1 className="header">Hello World</h1>
        <p>This is a pragraphe</p>
    </div>
)

console.log(secelem)
//return all objects in console.

ReactDOM.render(secelem, document.getElementById('root'))

//--------------------------------------------------------------------

//Third Example !!!

import React from "react"

const thirelem = (
    <div>
        <h1 className="header">Hello World</h1>
        <p>This is a pragraphe</p>
    </div>
)

//return all objects in console:
console.log(thirelem)

//To obtain javascript object:
document.getElementById('root').append(JSON.stringify(thirelem))

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

//Fifth Example !!!

import React from "react"
import ReactDOM from "react-dom"

const fifth = (
    <div>
        <img src="./img-logo.png" width="40px" />
        <h1>...</h1>
    </div>
)

//return all objects in console:
console.log(fifth)

//To obtain javascript object:
ReactDOM.render(
    fifth, document.getElementById('root')
)

//--------------------------------------------------------------------
//--------------------------------------------------------------------

//JSX almost in right way.

import React from "react"
import ReactDOM from "react-dom"

//PascalCase with function
function MyFirstCall() {
    return (
        <div>
            <img src="./img-logo.png" width="40px" />
            <h1>My documentation(H1)</h1>
            <ul>
                <li>first line</li>
                <li>second line</li>
                <li>third line</li>
                <li>fourth line</li>
            </ul>
        </div>
    )
}

ReactDOM.render(MyFirstCall(), document.getElementById('root'))

//--------------------------------------------------------------------

//JSX in right way.

import React from "react"
import ReactDOM from "react-dom"

//PascalCase with function
function MyFirstCall() {
    return (
        <div>
            <img src="./img-logo.png" width="40px" />
            <h1>My documentation(H1)</h1>
            <ul>
                <li>first line</li>
                <li>second line</li>
                <li>third line</li>
                <li>fourth line</li>
            </ul>
        </div>
    )
}

ReactDOM.render(MyFirstCall(), document.getElementById('root'))

//--------------------------------------------------------------------

import React from "react"
import ReactDOM from "react-dom"


function MyHeader() {
    return (
        <header>
            <img src="./img-logo.png" width="40px" />
            <h1>My documentation(H1)</h1>
            <ol>
                <li>first</li>
                <li>second</li>
                <li>third</li>
            </ol>
        </header>
    )
}

function MyFooter() {
    return (
        <footer>
            <small>@ 2022 My favorite documentation for JSX.</small>
        </footer>
    )
}

//To call functions above:
function MyPage() {
    return (
        <div>
            <MyHeader />,
            <MyFooter />
        </div>
    )
}

ReactDOM.render(<MyPage />, document.getElementById('root'))

//--------------------------------------------------------------------

//to export : export default function Header() {...
//or after function (with export default)
//export defaut Header






