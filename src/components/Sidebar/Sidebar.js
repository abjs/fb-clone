import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
// import ClearIcon from '@material-ui/icons/Clear';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
// import Covid from './icon/covid.png'
import PeopleIcon from '@material-ui/icons/People';
// import Friends from './icon/Friends.png'
import StorefrontIcon from '@material-ui/icons/Storefront';
// import Marketplas from './icon/Marketplas.svg'   
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';  
import {useStateValue} from '../Login/helpers/Provider'
// import Video from './icon/Video.png'
export default function Sidebar({userName,userImg}) {
    const [{ user }] = useStateValue();
    return (
        <div className="Sidebar" >
       <SidebarRow src ={user.photoURL}
            title={user.displayName}/>
            <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Information Centre"/>
            {/* <SidebarRow img={Covid} title="CO

            VID-19 Information Centre"/> */}
        
            <SidebarRow Icon={PeopleIcon} title="Friends"/>
            {/* <SidebarRow img={Friends} title="Friends"/> */}
           

            {/* <SidebarRow img={Marketplas} title="Marketplace"/> */}
            <SidebarRow Icon={StorefrontIcon} title="Marketplace"/>
            

            {/* <SidebarRow img={Video} title="Video"/> */}
            <SidebarRow Icon={VideoLibraryIcon} title="Video"/>

        </div>
    )
}
