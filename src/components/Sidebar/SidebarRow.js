import React from 'react'
import './SidebarRow.css'
import {Avatar} from '@material-ui/core';
export default function SidebarRow({
    title = "My Title",
    src,
    Icon,
    img
}) {

    return (
        <div className="SidebarRow">
            {src && <Avatar src={src}/>}
            {Icon && <Icon/>}
            {img && <img src={img} alt="Images"/>}
            <h1>{title}</h1>           
        </div>
    )
}
