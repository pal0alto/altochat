import React, { useContext } from "react";
import Cam from "../img/cam.png";
import Add from "../img/add.png";
import More from "../img/more.png";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
      <img className="receiver-img" src={data.user?.photoURL} alt="" />
        <span className='receiver'>{data.user?.displayName}</span>
      </div>
      <Messages />
      <Input/>
    </div>
  );
};

export default Chat;
