import { FC, ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  styleType?: 'primary' | 'info';
}
const Button: FC<ButtonProps> = ({ styleType, ...props }) => {
  return (
    <button className={`${styles['xld-button']} ${styleType ? styles[styleType] : ''}`} {...props}>
      {props.children}
    </button>
  );
};
export default Button;
