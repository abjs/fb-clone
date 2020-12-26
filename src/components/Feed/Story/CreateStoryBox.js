import React from 'react'
import './CreateStoryBox.css'
export default function CreateStoryBox({bgImage}) {
    return (
        <div className="StoryBox" style={{backgroundImage:`url(${bgImage})`}}>
        </div>
    )
}
