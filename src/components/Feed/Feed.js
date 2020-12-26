import React from 'react'
import './Feed.css'
import Story from './Story/Story'
import Message from './Message/Message'
import Post from './Post/Post'
import {useStateValue} from '../Login/helpers/Provider'
const xmus = "https://assets.website-files.com/5d3536a932a8017e41fd14b4/5f06be05119b0a505a47d541_codeorg2019_social.png"
export default function Feed({ bgImage }) {
    const [{ user }] = useStateValue();
    // var d = new Date();
    // var n = d.toTimeString();
    return (
        <div className="Feed">
            {/* Story */}
            <Story title={user.displayName} bgImage={bgImage} userImg={user.photoURL} />
            <Message userImg={user.photoURL} />
            <Post
                userName="Abin"
                userImg={user.photoURL}
                message="God is Love god is ausame"
                timestamp="Abin"
                PostImage={xmus}
            />
            <Post
                userName={user.displayName} userImg={user.photoURL} timestamp="" message="God is Love"
            />

            {/* Message */}
        </div>
    )
}
