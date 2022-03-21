import './Panel.css';
import React, { useContext, useEffect } from 'react'
import { BUTTON_TYPES, BUTTON_CLASSES } from '../constants/enums';
import Button from './Button';
import { NumberContext } from '../data/NumberContext';

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

  const {dataState, setDataState} = useContext(NumberContext);

  const updateDataState = (key,value)=>{
    setDataState({...dataState,[`${key}`]:value});
  }

  useEffect(() => {
    console.log(dataState);
  }, [dataState])

const handleUpdateDataState = (label,type)=>{
  switch (type) {
    case 'number':
      updateDataState('number',label)
      break;
    case 'operation':
      updateDataState('currentOperation',label)
      break;    
    default:
      break;
  }
}
    
  return (
    <div className='Panel'>
      {buttons.map((btn,idx)=><Button key={`panel_key_${btn.label}_${idx}`} label={btn.label} type={btn.type} buttonClass={btn.buttonClass} updateData={handleUpdateDataState}/>)}
    </div>
  )
}



export default Panel