import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
//import {screen} from '@testing-library/dom';
import App from "./App";


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

test("Test theme button toggle b", () => {
  render(<App />);
  const buttonEl = screen.getByText(/Current theme/i);
    
  userEvent.click(buttonEl);
  expect(buttonEl).toHaveTextContent(/dark/i);
});

test("Test button toggle handleToggle bb", () => {
  render(<App />);
  const buttonEl = screen.getByText(/ok/i);
    
  userEvent.click(buttonEl);
  expect(buttonEl).toHaveTextContent(/greetings/i);
});

test("Test button toggle handleTest bbb", () => {
  render(<App />);
  const buttonEl = screen.getByText(/test_1/i);
    
  userEvent.click(buttonEl);
  expect(buttonEl).toHaveTextContent(/test_2/i);
});

//npm run test
