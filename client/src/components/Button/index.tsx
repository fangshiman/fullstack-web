import React from 'react';
import { MoonLoader } from 'react-spinners';

import './_button.scss';

interface ButtonProps {
  text: string;
  loading?: boolean;
  onClick: (a: any) => void;
}

const Button = ({ text, loading, onClick }: ButtonProps) => {
  return (
    <button type='button' className='Button' onClick={onClick}>
      {loading ? <MoonLoader color="#36d7b7" /> : text}
    </button>
  )
}

export default Button;