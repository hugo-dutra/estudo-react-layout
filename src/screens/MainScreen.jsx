import './MainScreen.css'
import React from 'react'
import Display from '../components/Display';
import Panel from '../components/Panel';

const MainScreen = () =>{
    return(
        <div className='MainScreen'>
            <Display/>
            <Panel/>
            </div>
    )
}

export default MainScreen;