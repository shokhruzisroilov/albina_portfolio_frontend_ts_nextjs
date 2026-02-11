import { render, screen } from '@testing-library/react';
import HomePage from '../page';

describe('HomePage Page', () => {
  it('renders HomePage text', () => {
    render(<HomePage />);
    expect(screen.getByText('HomePage')).toBeInTheDocument();
  });
});
