import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Feed from './components/Feed/Feed'
const MyPic="https://scontent-maa2-1.xx.fbcdn.net/v/t1.0-9/125883051_2642444949309587_1694810617717230487_o.jpg?_nc_cat=106&ccb=2&_nc_sid=730e14&_nc_ohc=uzSNgpRnGz0AX-hi66C&_nc_ht=scontent-maa2-1.xx&oh=f5c988a7fc6765b781405ad8e18c0544&oe=600BACB9"
const App = () => {
    return (
        <div className="app">
            <Header/> {/* App Body */}
            <div className="app__body">
                {/* Slider */}
                <Sidebar userName="Abin Joseph" userImg={MyPic} /> 
                {/* Feed */}
                <Feed userName="Abin Joseph" userImg={MyPic} bgImage={MyPic}/> {/* Widgets */}
                {/* <h1 align="center">Good is Love</h1> */} 
                {/* <Sidebar/>  */}

            </div>
        </div>

    );
}

export default App;
