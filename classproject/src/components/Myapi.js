import React from 'react'
//import axios from "axios"
  
class Myapi extends React.Component {
  // Constructor 
  constructor(props) {
      super(props);
      this.state = {
          items: [],
          DataisLoaded: false
      };
  }
  // ComponentDidMount is used to execute the code 
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true
      });
    })
  }
  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded) return <div>
      <h1> Pleses wait some time.... </h1></div> ;
 
    return (
      <div className="div--api">
        <h3> Fetch data from an api in react </h3> {
          items.map((item) => ( 
            <nav key={ item.id } >
              <ol>User_Name: { item.username }</ol>
              <ol>Full_Name: { item.name }</ol>
              <ol>User_Email: { item.email }</ol> 
            </nav>
          ))
        }
      </div>
    );
  }
}
  
export default Myapi;