import React from 'react'
import './App.css'

import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Feed from './components/Feed/Feed'
import Widgets from './components/Widgets/Widgets'
import Login from './components/Login/Login'
import {useStateValue} from './components/Login/helpers/StatePrivider'
const MyPic = "https://scontent-maa2-1.xx.fbcdn.net/v/t1.0-9/125883051_2642444949309587_1694810617717230487_o.jpg?_nc_cat=106&ccb=2&_nc_sid=730e14&_nc_ohc=uzSNgpRnGz0AX-hi66C&_nc_ht=scontent-maa2-1.xx&oh=f5c988a7fc6765b781405ad8e18c0544&oe=600BACB9"
let userName =null; 
const App = () => {
    const [{ user },dispatch] =useStateValue();
    userName =user
    return (
        <div className="app">
            {
                !userName ? (
                    <Login />
                ) : (
                        <>
                        
                            <Header  userImg={MyPic} userName={userName} /> {/* App Body */}
                            <div className="app__body">
                                {/* Slider */}
                                <Sidebar userName={userName} userImg={MyPic} />
                                {/* Feed */}
                                <Feed userName={userName} userImg={MyPic} bgImage={MyPic} /> {/* Widgets */}
                                {/* <Sidebar/>  */}
                                {/* Widgets */}
                                <Widgets />

                            </div>
                        </>
                    )
            }

        </div>

    );
}

export default App;
