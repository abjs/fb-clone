import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'

const App = () =>{
    return (
        <div className="App">
           <Header/>
          {/* App Body */}
          {/* Slider */}
          <Sidebar/>
          {/* Feed */}
          {/* Widgets */}
          {/* <h1 align="center">Good is Love</h1> */}
        </div>

    );
}

export default App;
