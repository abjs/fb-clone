import { Avatar } from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import moment from "moment";
import React from "react";
import "./Post.css";
export default function Post({
  userName,
  userImg,
  PostImage,
  timestamp,
  message,
}) {
  const Time = Date(timestamp?.toDate());
  const newTime = moment(Time).format("LLLL");
  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={userImg} className="post__avatar" />
        <div className="post__topInfo">
          <h3>{userName}</h3>
          <br />
          <p className="timestamp">{newTime}</p>
        </div>
      </div>
      <div className="post__bottom">
        <p>{message}</p>
      </div>
      <div className="post__image">
        <img src={PostImage} alt="" />
      </div>
      <div className="post__options">
        <div className="post__option">
          <ThumbUpIcon />
          <p>Like</p>
        </div>
        <div className="post__option">
          <ChatBubbleOutlineIcon />
          <p>Comment</p>
        </div>

        <div className="post__option">
          <ShareIcon />
          <p>Share</p>
        </div>
        <div className="post__option">
          {/* <Avatar src={userImg} style={{size:"1px"}}/> */}
          <AccountCircleIcon />
          <ExpandMoreIcon />
        </div>
      </div>
    </div>
  );
}
