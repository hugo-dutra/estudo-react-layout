import './Button.css';
import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';   
import { NumberContext } from '../data/NumberContext';

const Button = props => {
  const {label, type, buttonClass, updateData} = props;
  
  return (
    <button value={label} className={`${[...buttonClass].toString().replace(',',' ')}`} onClick={()=>{updateData(label,type)} }>
      {label}
    </button>
  )
}

Button.propTypes = {
  label:PropTypes.string.isRequired,
  type:PropTypes.string.isRequired,
  buttonClass:PropTypes.array.isRequired,
  updateData:PropTypes.func.isRequired
};

export default Button;