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
        <Header/>
        <MainPages/>
        </div>
      </Router>
    </DataProvider>
  );
}

export default App;
