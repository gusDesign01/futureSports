import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SplashWindow from './Components/Main/SplashWindow';

//Test to see wether the SplashWindow is present when user first lands on the page
test('renders SplashWindow component', () => {
  const { getByText } = render(<SplashWindow />);
  const splashText = getByText('Welcome To Future Sports!');
  expect(splashText).toBeInTheDocument();
});

//Test to see wether the text input form is working as expected
test('form accepts user input correctly', () => {
  const handleSubmit = jest.fn(); //Acting as the form submission handler
  const { getByPlaceholderText } = render(
    <SplashWindow onSubmit={handleSubmit} />
    );

    const input = getByPlaceholderText ('Enter your Search Query');
    fireEvent.change(input, {target:{ value: 'Womens World Cup 2023' } });

    expect(input.value).toBe('Womens World Cup 2023');
});

