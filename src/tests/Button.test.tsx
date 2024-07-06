import '@testing-library/jest-dom';

import { cleanup, fireEvent, render, screen } from '@testing-library/react';

import Button from '../components/Button';
import React from 'react';
import styles from '../components/Button/Button.module.css';

describe('Button', () => {
  //测试前清空
  afterEach(() => cleanup());
  //渲染
  it('renders', () => {
    render(<Button data-testid="btn">Hello</Button>);
    const button = screen.getByTestId('btn');
    expect(button).toBeInTheDocument();
  });
  //动作测试
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
  //样式测试
  it('style', () => {
    render(
      <Button data-testid="btn2" styleType="primary"> Hello  </Button>
    );
    const button = screen.getByTestId('btn2');
    console.log(styles.primary);
    expect(button).toHaveClass(styles.primary || 'primary');
  }); 
});
