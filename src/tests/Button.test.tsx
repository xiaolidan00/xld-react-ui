import '@testing-library/jest-dom';
import { screen, fireEvent, render, cleanup } from '@testing-library/react';

import Button from '../components/Button';
import styles from '../components/Button/Button.module.css';

describe('Button', () => {
  afterEach(() => cleanup());
  it('renders', () => {
    render(<Button data-testid="btn">Hello</Button>);
    const button = screen.getByTestId('btn');
    expect(button).toBeInTheDocument();
  });
  it('click', () => {
    const fn = jest.fn();
    render(
      <Button data-testid="btn1" onClick={fn}>
        Hello
      </Button>
    );
    const button = screen.getByTestId('btn1');
    fireEvent.click(button);
    expect(fn).toHaveBeenCalled();
  });

  it('style', () => {
    render(
      <Button data-testid="btn2" styleType="primary">
        Hello
      </Button>
    );
    const button = screen.getByTestId('btn2');
    console.log(styles.primary);
    expect(button).toHaveClass(styles.primary || 'primary');
  });
});
