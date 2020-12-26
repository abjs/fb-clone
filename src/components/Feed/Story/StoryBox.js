import React from 'react'
import './StoryBox.css'
import {Avatar} from '@material-ui/core';
export default function StoryBox({bgImage,userImg,title}) {
    return (
        <div className="StoryBox" style={{backgroundImage:`url(${bgImage})`}}>
            <Avatar className="StoryBox__avatar" src={userImg}/>
            <h4>{title}</h4>
        </div>
    )
}
