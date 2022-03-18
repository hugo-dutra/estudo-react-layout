import './Panel.css';
import React from 'react'
import { BUTTON_TYPES, BUTTON_CLASSES } from '../constants/enums';
import Button from './Button';

const Panel = props => {
  const buttons = [
    {label:'AC', type:BUTTON_TYPES.OPERATION, buttonClass:[BUTTON_CLASSES.GRAY_BUTTON] },
    {label:'+/-', type:BUTTON_TYPES.OPERATION, buttonClass:[BUTTON_CLASSES.GRAY_BUTTON] },
    {label:'%', type:BUTTON_TYPES.OPERATION, buttonClass:[BUTTON_CLASSES.GRAY_BUTTON] },
    {label:'÷', type:BUTTON_TYPES.OPERATION, buttonClass:[BUTTON_CLASSES.YELLOW_BUTTON] },
    
    {label:'7', type:BUTTON_TYPES.NUMBER, buttonClass:[BUTTON_CLASSES.GRAY_BUTTON] },
    {label:'8', type:BUTTON_TYPES.NUMBER, buttonClass:[BUTTON_CLASSES.GRAY_BUTTON] },
    {label:'9', type:BUTTON_TYPES.NUMBER, buttonClass:[BUTTON_CLASSES.GRAY_BUTTON] },
    {label:'X', type:BUTTON_TYPES.OPERATION, buttonClass:[BUTTON_CLASSES.YELLOW_BUTTON] },
    
    {label:'4', type:BUTTON_TYPES.NUMBER, buttonClass:[BUTTON_CLASSES.GRAY_BUTTON] },
    {label:'5', type:BUTTON_TYPES.NUMBER, buttonClass:[BUTTON_CLASSES.GRAY_BUTTON] },
    {label:'6', type:BUTTON_TYPES.NUMBER, buttonClass:[BUTTON_CLASSES.GRAY_BUTTON] },
    {label:'-', type:BUTTON_TYPES.OPERATION, buttonClass:[BUTTON_CLASSES.YELLOW_BUTTON] },
    
    {label:'1', type:BUTTON_TYPES.NUMBER, buttonClass:[BUTTON_CLASSES.GRAY_BUTTON] },
    {label:'2', type:BUTTON_TYPES.NUMBER, buttonClass:[BUTTON_CLASSES.GRAY_BUTTON] },
    {label:'3', type:BUTTON_TYPES.NUMBER, buttonClass:[BUTTON_CLASSES.GRAY_BUTTON] },
    {label:'+', type:BUTTON_TYPES.OPERATION, buttonClass:[BUTTON_CLASSES.YELLOW_BUTTON] },
    
    {label:'0', type:BUTTON_TYPES.NUMBER, buttonClass:[BUTTON_CLASSES.GRAY_BUTTON,BUTTON_CLASSES.START_DOUBLE_BUTTON] },
    {label:'.', type:BUTTON_TYPES.OPERATION, buttonClass:[BUTTON_CLASSES.GRAY_BUTTON] },
    {label:'=', type:BUTTON_TYPES.OPERATION, buttonClass:[BUTTON_CLASSES.YELLOW_BUTTON] },

  ]
  return (
    <div className='Panel'>
      {buttons.map((btn)=><Button label={btn.label} type={btn.type} buttonClass={btn.buttonClass}/>)}
    </div>
  )
}



export default Panel