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
// import Video from './icon/Video.png'
export default function Sidebar() {
    return (
        <div >
       <SidebarRow src ="https://scontent-maa2-2.xx.fbcdn.net/v/t1.0-9/89942220_2385737541646997_3575095416724652032_o.jpg?_nc_cat=103&ccb=2&_nc_sid=09cbfe&_nc_ohc=yN-yKGllmIcAX_jWqZs&_nc_ht=scontent-maa2-2.xx&oh=49a84987ec2ae4530989cdfbd265927f&oe=600A7D0E"
            title="Abin Joseph"/>
            <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Information Centre"/>
            {/* <SidebarRow img={Covid} title="COVID-19 Information Centre"/> */}
        
            <SidebarRow Icon={PeopleIcon} title="Friends"/>
            {/* <SidebarRow img={Friends} title="Friends"/> */}
           

            {/* <SidebarRow img={Marketplas} title="Marketplace"/> */}
            <SidebarRow Icon={StorefrontIcon} title="Marketplace"/>
            

            {/* <SidebarRow img={Video} title="Video"/> */}
            <SidebarRow Icon={VideoLibraryIcon} title="Video"/>

        </div>
    )
}
