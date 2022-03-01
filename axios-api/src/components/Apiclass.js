import axios from "axios";
import React from "react";


const baseURL = "https://jsonplaceholder.typicode.com/todos";

export default function Apiaxios() {
  const [post, setPost] = React.useState(null);
  const [error, setError] = React.useState(null);

  //React.useEffect is only working in a FUNCTION !!!
  //NOT with class
  React.useEffect(() => {
    axios.get(`${baseURL}/1`).then((response) => {
      setPost(response.data);
    }).catch(error => {
      setError(error);
    });
  }, []);

  function updatePost() {
    axios
      .put(`${baseURL}/1`, {
        title: "Hello Axios!",
        body: "This is an updated post."
      })
      .then((response) => {
        setPost(response.data);
      });
  }

  if (error) return `Error: ${error.message}`;
  if (!post) return "No post!"

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={updatePost}>Update Post</button>
    </div>
  );
}