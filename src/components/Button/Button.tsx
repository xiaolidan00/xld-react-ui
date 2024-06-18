import { FC, ButtonHTMLAttributes } from 'react';
import './Button.css';
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  styleType?: 'primary' | 'info';
}
const Button: FC<ButtonProps> = ({ styleType, ...props }) => {
  return (
    <button className={`xld-button ${styleType || ''}`} {...props}>
      {props.children}
    </button>
  );
};
export default Button;
