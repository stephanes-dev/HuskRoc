// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders HuskRoc title', () => {
    render(<App />);
    const titleElement = screen.getByText(/HuskRoc/i);
    expect(titleElement).toBeInTheDocument();
});
