import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCO2Cz3m8jJv9QdTP2FN_WaeqZA97r_dew",
  authDomain: "questionnaire-77997.firebaseapp.com",
  projectId: "questionnaire-77997",
  storageBucket: "questionnaire-77997.appspot.com",
  messagingSenderId: "859198707089",
  appId: "1:859198707089:web:35b528e65977db17607630",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
export default firebase;
