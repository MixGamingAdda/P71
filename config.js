import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBeL8RkS-KswCMXHJZ_4oLGXmh_3OUpuDU",
  authDomain: "e-ride-8bf88.firebaseapp.com",
  projectId: "e-ride-8bf88",
  storageBucket: "e-ride-8bf88.appspot.com",
  messagingSenderId: "252438829925",
  appId: "1:252438829925:web:c9f915206c9853ebc75f8c",
  measurementId: "G-2Z3N22Y9RY"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
