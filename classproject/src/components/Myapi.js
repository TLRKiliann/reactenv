import React from 'react'
//import axios from "axios"
  
export default class Myapi extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          items: [],
          DataisLoaded: false,
      };
  //this.componentDidMount = this.componentDidMount.bind(this)
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true,
        })
  console.log(this.state)
      /*.catch(() => {
        alert('Failed to fetch !');
      });*/
      //.catch((error) => console.log(error));
    })
  }
  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded) return <div>
      <h1> Pleses wait some time.... </h1></div>;
    else if (DataisLoaded) {
      console.log(this.state)
    }
    return (
      <div className="div--api">
        <h3 className='div--titapi'> Fetch data from an api in react </h3> {
          items.map((item) => (
            <nav key={ item.id } className='div--apinav'>
              <ol>UserName: { item.username }</ol>
              <ol>FullName: { item.name }</ol>
              <ol>Email: { item.email }</ol>
              <ol>Street: { item.address.street }</ol>
              <ol>City: { item.address.city }</ol>
              <ol>Latitude: { item.address.geo.lat }</ol>
              <ol>Longitude: { item.address.geo.lng }</ol>
            </nav>
          ))
        }
      </div>
    );
  }
}
  
//export default Myapi;
