import { FC } from 'react';
type Props = {
  text: string;
};
const Button: FC<Props> = ({ text }) => {
  return <button>{text}</button>;
};
export default Button;
