import './App.css'
import React, { useState } from  'react';
import MainScreen from './screens/MainScreen';
import { NumberContext,data } from './data/NumberContext';

const App = (props) =>{

  const [dataState, setDataState] = useState(data)

  return (
    <div className='App'>
      <NumberContext.Provider value={{dataState,setDataState}}>        
          <MainScreen/>
      </NumberContext.Provider>
    </div>
  )
}



export default App;



