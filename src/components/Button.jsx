import './Button.css';
import React from 'react';
import PropTypes from 'prop-types';   

const Button = props => {
  const {label} = props;
  return (
    <button>
      {label}
    </button>
  )
}

Button.propTypes = {
  label:PropTypes.string.isRequired,
  operation:PropTypes.func.isRequired
};

export default Button;