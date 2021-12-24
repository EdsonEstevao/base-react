
import { render, screen } from '@testing-library/react';

import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

/*
describe('<Home />', ()=>{
  it('test one', () => {

    expect(1).toBe(1);

  });

  it('test two', () => {

    expect(1).toBe(1);

  });
  it('test three', () => {

    expect(1).toBe(1);

  });
    


})
*/