import React from 'React'

export default function Todo(props) {
  return (
    <div>
      <h2>Todo</h2>
      {props.count}
    </div>
  );
};