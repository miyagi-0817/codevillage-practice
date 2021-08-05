import React from "react";

import { useEffect, useState } from "react";
import firebase from "../config/firebase";

const Room = () => {
  const [messages, setMessages] = useState(null);
  const [value, setValue] = useState("");

  useEffect(() => {
    firebase
      .firestore()
      .collection("messages")
      .onSnapshot((snapshot) => {
        const messages = snapshot.docs.map((doc) => {
          return doc.data();
        });

        setMessages(messages);
      });
  }, []);

  return (
    // ...
    <h1>firestore お試し</h1>
  );
};

export default Room;
