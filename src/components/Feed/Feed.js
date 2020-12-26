import React, { useState, useEffect } from 'react'
import './Feed.css'
import Story from './Story/Story'
import Message from './Message/Message'
import Post from './Post/Post'
import { useStateValue } from '../Login/helpers/Provider'
import db from '../helper/firebase'
// const xmus = "https://assets.website-files.com/5d3536a932a8017e41fd14b4/5f06be05119b0a505a47d541_codeorg2019_social.png"
export default function Feed({ bgImage }) {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data()
            })));
        })
    }, [])
    const [{ user }] = useStateValue();
    // var d = new Date();
    // var n = d.toTimeString();
    return (
        <div className="Feed">
            {/* Story */}
            <Story title={user.displayName} bgImage={bgImage} userImg={user.photoURL} />
            <Message userImg={user.photoURL} />
            {

                posts.map(post => (
                    <Post
                        key={post.data.id}

                        userImg={post.data.userImg}
                        message={post.data.message}
                        timestamp={post.data.timestamp}     
                        userName={post.data.userName}
                        PostImage={post.data.image}
                    />
                ))
            }
            {/* <Post
                userName="Abin"
                userImg={user.photoURL}
                message="God is Love god is ausame"
                timestamp="Abin"
                PostImage={xmus}
            /> */}

            {/* Message */}
        </div>
    )
}
