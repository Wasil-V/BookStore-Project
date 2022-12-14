import { render, screen } from '@testing-library/react';
import { } from '@testing-library/jest-dom'
import Header from '../components/header.component';

test('renders BuyBooks', () => {
    render(<Header />)
    const text = screen.getByText(/BuyBooks/i);
    expect(text).toBeInTheDocument('BuyBooks');
});

test('renders img', () => {
    render(<Header />)
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
});