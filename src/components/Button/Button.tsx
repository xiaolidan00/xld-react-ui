import { FC, ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  styleType?: 'primary' | 'info';
  color?: string;
}
const Button: FC<ButtonProps> = ({ styleType, ...props }) => {
  return (
    <button className={`${styles['xld-button']} ${styleType ? styles[styleType] : ''}`} {...props}>
      <i style={{ color: props.color }}>*</i>
      {props.children}
      <i style={{ color: props.color }}>*</i>
    </button>
  );
};
export default Button;
