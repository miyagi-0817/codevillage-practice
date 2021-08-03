// import { useForm, Controller } from "react-hook-form";

// import Container from "@material-ui/core/Container";
// import { TextField } from "@material-ui/core";
// import Input from "@material-ui/core/Input";
// import { render } from "react-dom";
// import firebase from "../config/firebase";
// import React, { useEffect } from 'react'

// const Room = () => {
//     const [questioneares, setQuestioneares] = useState(null)
//     const [value, setValue] = useState('')

// useEffect(() => {
//   firebase
//     .firestore()
//     .collection("questionnaires")
//     .onSnapshot(() => {
//       const questionnaires = snapshot.docs.map((doc) => {
//         return doc.data();
//       });
//  setQuestioneares(questioneares)

//     });
// }, []);

import React, { useEffect } from "react";
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
