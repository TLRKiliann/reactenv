import React from 'react'
import {useEffect} from "react";
import axios from "axios"
  
function Myapi() {
   
  useEffect(() => {
    (async () => {
      try {
        const result = await axios.get(
"https://jsonplaceholder.typicode.com/todos")
        console.log(result.data);
        //<h3>return.data.title</h3>
      } catch (error) {
        console.error(error);
      }
    })()
  })
  return (
    <div >
        Different ways to fetch Data
        Title: 
    </div>
  );
}
  
export default Myapi;