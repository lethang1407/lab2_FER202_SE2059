import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  window.localStorage.clear();
});

test('toggles a movie as a favorite without removing it', () => {
  render(<App />);

  fireEvent.click(screen.getByRole('checkbox', { name: 'Yêu thích Interstellar' }));

  expect(screen.getByRole('button', { name: 'Bỏ yêu thích' })).toBeInTheDocument();
  expect(screen.getByRole('checkbox', { name: 'Yêu thích Interstellar' })).toBeChecked();
  expect(screen.getByText('Interstellar')).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: 'Bỏ yêu thích' }));

  expect(screen.getAllByRole('button', { name: 'Yêu thích' })).toHaveLength(6);
  expect(screen.getByRole('checkbox', { name: 'Yêu thích Interstellar' })).not.toBeChecked();
});

test('sorts movies by rating in ascending order', () => {
  render(<App />);

  fireEvent.change(screen.getByRole('combobox', { name: 'Sắp xếp theo rating' }), {
    target: { value: 'ascending' },
  });

  expect(screen.getByRole('list')).toHaveTextContent(
    /The Grand Budapest Hotel.*Your Name.*Parasite.*Spirited Away.*Interstellar.*The Dark Knight/,
  );
});
