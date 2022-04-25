import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
//import FaRegArrowAltCircleDown from './FaRegArrowAltCircleDown';


test('test scenario 1', () => {
   render(<App />);
   const element = screen.getByText(/App/i);
   expect(element).toBeInTheDocument();
});

/*test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});*/
