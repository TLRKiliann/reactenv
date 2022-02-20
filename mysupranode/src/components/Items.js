import React from 'react'

export default function Items(props) {
  return  <h3
            className='div--itemclass'
          >
            Current Quantity of Items in Cart: {props.quantity}
          </h3>
};

