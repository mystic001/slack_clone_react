import React, { useState, useEffect } from "react";
import "./Chat.css";
import { useParams } from "react-router-dom";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import InfoIcon from "@material-ui/icons/Info";
import db from "./firebase";
import Message from "./Message";

function Chat() {
  const { roomId } = useParams();
  const [roomDetails, setroomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState([]);

  useEffect(() => {
    if (roomId) {
      db.collection("room")
        .doc(roomId)
        .onSnapshot((snapshot) => setroomDetails(snapshot.data()));
    }

    console.log("Am bout to start collecting");
    db.collection("room")
      .doc(roomId)
      .collection("userpro")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) =>
        setRoomMessages(snapshot.docs.map((doc) => doc.data()))
      );
  }, [roomId]);

  console.log("Messages >>>>>", roomMessages);
  return (
    <div className="chatSpace">
      <div className="chatheader">
        <div className="chatheader__left">
          <strong>#{roomDetails?.name}</strong>
          <StarBorderIcon />
        </div>
        <div className="chatheader__right">
          <strong>Details</strong>
          <InfoIcon />
        </div>
      </div>

      {/**This renders the messages that appear in the channel */}

      {roomMessages.map((item) => (
        <div className="message">
          <Message
            message={item.message}
            username={item.username}
            userImage={item.image}
            timestamp={item.timestamp}
          />
        </div>
      ))}
    </div>
  );
}

export default Chat;
