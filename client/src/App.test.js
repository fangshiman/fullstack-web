import { fireEvent, render, screen } from '@testing-library/react';
import { toastMessage } from 'utils/functions';
import App from './App';

test('renders contact form', () => {
  render(<App />);
  const linkElement = screen.getByText(/contact form/i);
  expect(linkElement).toBeInTheDocument();
});

test('accessibility - Placeholder', async () => {
  render(<App />);
  const firstname = await screen.findAllByPlaceholderText(/first name/i);
  const lastname = await screen.findAllByPlaceholderText(/last name/i);
  const email = await screen.findAllByPlaceholderText(/email/i);
  const message = await screen.findAllByPlaceholderText(/message/i);
  
  expect(firstname[0]).toBeInTheDocument();

  expect(lastname[0]).toBeInTheDocument();

  expect(email[0]).toBeInTheDocument();

  expect(message[0]).toBeInTheDocument();
});

describe('Contact form validation', () => {
  test('to Validate - First & Last Name', async () => {
    render(<App />);
    const inputNode = screen.getByPlaceholderText(/email/i);
    fireEvent.change(inputNode, { target: { value: 'Entered wrong email' }});
    const firstElement = await screen.findByText(/first name is required/i);
    const lastElement = await screen.findByText(/last name is required/i);

    expect(firstElement).toBeInTheDocument();

    expect(lastElement).toBeInTheDocument();
  });

  test('to Validate - Email', async () => {
    render(<App />);
    const inputNode = screen.getByPlaceholderText(/email/i);
    fireEvent.change(inputNode, { target: { value: 'Entered wrong email' }});
    const linkElement = await screen.findByText(/invalid email/i);

    expect(linkElement).toBeInTheDocument();
  });

  test('to Validate - Message', async () => {
    render(<App />);
    const inputNode = screen.getByPlaceholderText(/email/i);
    fireEvent.change(inputNode, { target: { value: 'Entered wrong email' }});
    const messageElement = await screen.findByText(/message is required/i);

    expect(messageElement).toBeInTheDocument();

  });
})

describe('Testing Toast', () => {
  test('toast message pop up', async () => {
    render(<App />);
    toastMessage('success', 'Verifying Toast');
    const toastElement = await screen.findByText(/verifying toast/i);

    expect(toastElement).toBeInTheDocument();
  });
})
