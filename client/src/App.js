import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {DataProvider} from './GlobalState'
import MainPages from './components/mainpages/Pages'
import Header from './components/headers/Header'
import LinkUp from './img/linkup.svg'

function App() {
  return (
    <DataProvider>
      <Router>
        <div className="App">
        <div className='ai'>
                <img src={LinkUp} alt='' className='linkuplogo' width='200px'/>
              </div>
        <Header/>
        <MainPages/>
        </div>
      </Router>
    </DataProvider>
  );
}

export default App;
