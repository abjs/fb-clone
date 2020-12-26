import React, { useState } from 'react'
import './Message.css'
import { Avatar } from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import db from '../../helper/firebase'
import firebase from 'firebase'
import {useStateValue} from '../../Login/helpers/Provider'
export default function Message({ userName = "", userImg }) {
    const [{ user }] = useStateValue();
    const [input, setInput] = useState("");
    const [imageUrl, setImageUrl] = useState("")
    const Message_onSubmit = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            userImg: user.photoURL,
            userName: user.displayName,
            image: imageUrl
        })

        setInput("")
        setImageUrl("")
        //data base uplode

    };
    return (
        <div className="Message">
            <div className="Message__top">
                <Avatar src={userImg} />
                <form>
                    <input
                    value={input}
                    onChange={(e)=>setInput(e.target.value)} 
                    type="text" className="Message__Input" placeholder={`What's on your mind ${userName}?`} />
                    <input
                    value={imageUrl}
                    onChange={(e)=>setImageUrl(e.target.value)} 
                     type="text" className="Message__Image" placeholder="Image URL if needed" />
                    <button onClick={Message_onSubmit} type="submit">
                        Hidden submit
                    </button>
                </form>

            </div>
            <div className="Message__bottom">
                <div className="Message__option">
                    <VideocamIcon style={{ color: "red" }} />
                    <h3>Live video</h3>
                </div>
                <div className="Message__option">
                    <PhotoLibraryIcon style={{ color: "green" }} />
                    <h3>Phone/video</h3>
                </div>
                <div className="Message__option">
                    <InsertEmoticonIcon style={{ color: "orange" }} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}
