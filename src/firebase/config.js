import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";
// import env from "../env";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBnJZutzMRyf9SRA1gjRALNy16PepCC_0",
  authDomain: "image-gallery-react-62cec.firebaseapp.com",
  projectId: "image-gallery-react-62cec",
  storageBucket: "image-gallery-react-62cec.appspot.com",
  messagingSenderId: "519495455566",
  appId: "1:519495455566:web:6a1a638f99eec12effc41f",
  measurementId: "G-DH1DNBDZ0Z",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectStorage, timestamp };
