import React from 'react'
import logo from './images/icon/fb-logo.png';
// import logo from './icon/fb.svg';
// "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
import SearchIcon from '@material-ui/icons/Search';
// import HomeIcon from '@material-ui/icons/Home';
import home from './icon/Home.svg';
// import FlagIcon from '@material-ui/icons/Flag';
// import StorefrontIcon from '@material-ui/icons/Storefront';
import Stor from './icon/Marketplas.svg';
import Image from '../helper/Image.js'
// import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import Groupe from './icon/Groupe.svg';
// import SubscriptionsOutlined from '@material-ui/icons/SubscriptionsOutlined'
import Watch from './icon/Watch.svg';

// import FacebookIcon from '@material-ui/icons/Facebook';
// import IconButton from '@material-ui/core/IconButton';


import AddIcon from '@material-ui/icons/Add';
import {Avatar, IconButton} from '@material-ui/core';
import ForumIcon from '@material-ui/icons/Forum';

import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
// import Notifiction from './icon/Notifiction.svg';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import './Header.css'
function Header() {
    return (
        <div className="header">
            <div className="header_left">
                <img src={logo}
                    alt="logo"/>
                <div className="header_input">
                    <SearchIcon fontSize="large"/>
                    <input placeholder="Serch Hear" type="text"/>
                </div>
            </div>
            <div className="header_center">
                <div className="header_options  header_options--active">
                    <img src={home} alt="Home"/>
                </div>
                {/* <div className="header_options">
                    <FlagIcon fontSize="large"/>
                </div> */}
                <div className="header_options">
                    {/* <SubscriptionsOutlined fontSize="large"/> */}
                    <Image image={Watch}/>

                </div>
                <div className="header_options">
                    {/* <StorefrontIcon fontSize="large"/> */}
                    <Image image={Stor}/>
                </div>
                <div className="header_options">
                <Image image={Groupe}/>
                </div>
            </div>
            <div className="header_right">
                <div className="header_info">
                    <Avatar/>
                    <h4>itsmeabjs</h4>
                </div>
                <IconButton>
                    <AddIcon/>
                </IconButton>
                <IconButton>
                    <ForumIcon/>
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon/>
                </IconButton>

                <IconButton>
                    <ExpandMoreIcon/>
                </IconButton>


            </div>
        </div>
    )
}

export default Header
