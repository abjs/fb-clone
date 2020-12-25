import React from 'react'
import './Feed.css'
import Story from './Story/Story'
import Message from './Message/Message'
export default function Feed({userName,userImg,bgImage}) {
    return (
        <div className="Feed">
            {/* Story */}
            <Story title={userName} bgImage={bgImage} userImg={userImg}  />
            <Message userImg={userImg}/>
            {/* Message */}
        </div>
    )
}
