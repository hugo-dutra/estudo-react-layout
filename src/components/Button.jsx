import './Button.css';
import React from 'react';
import PropTypes from 'prop-types';   

const Button = props => {
  const {label, type, buttonClass} = props;
  
  console.log(buttonClass)
  return (
    <button className={`${[...buttonClass].toString().replace(',',' ')}`}>
      {label}
    </button>
  )
}

Button.propTypes = {
  label:PropTypes.string.isRequired,
  type:PropTypes.func.isRequired,
  buttonClass:PropTypes.string.isRequired
};

export default Button;