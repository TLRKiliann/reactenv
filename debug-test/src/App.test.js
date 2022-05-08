import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
//import {screen} from '@testing-library/dom';
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
  const buttonEl = screen.getByText(/Current counte/i);
    
  userEvent.click(buttonEl);
  expect(buttonEl).toHaveTextContent(/counter/i);
});

test('Test Title Debug & Test h1', () => {
  render(<App />);

  const titleEl = screen.getByText(/Debug & Test/);
  expect(titleEl).toBeInTheDocument();
});

test('Test Example test p tag', () => {
  render(<App />);

  const titleEl = screen.getByText(/Example test p tag/);
  expect(titleEl).toBeInTheDocument();
});


//npm run test
