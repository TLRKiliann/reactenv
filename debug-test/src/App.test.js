import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";


test("Test theme button toggle", () => {
  render(<App />);
  const buttonEl = screen.getByText(/Current theme/i);
    
  userEvent.click(buttonEl);
  expect(buttonEl).toHaveTextContent(/dark/i);
});

test("Test counter button handleCountAdd", () => {
  render(<App />);
  const buttonEl = screen.getByText(/Current counter/i);
    
  userEvent.click(buttonEl);
  expect(buttonEl).toHaveTextContent(/counter/i);
});

test("Test counter button handleCountSub", () => {
  render(<App />);
  const buttonEl = screen.getByText(/Current counter/i);
    
  userEvent.click(buttonEl);
  expect(buttonEl).toHaveTextContent(/counter/i);
});

test('Test Debug & Test h1', () => {
  render(<App />);
  screen.debug();
});


/*
import React from 'react'
import {render} from '@testing-library/react'

const HelloWorld = () => <h1>Hello World</h1>
const {debug} = render(<HelloWorld />)
debug()
*/

//npm run test
