// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCiImkCRneo-1TuNxh3A3sZ9vTNuwY_epA",
  authDomain: "clone-6f84a.firebaseapp.com",
  projectId: "clone-6f84a",
  storageBucket: "clone-6f84a.appspot.com",
  messagingSenderId: "1013220983836",
  appId: "1:1013220983836:web:edbad2ef6b5838d6e7cbd9",
  measurementId: "G-BL9VPQRW49",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore;
const auth = firebase.auth();

export { db, auth };

// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyBrg2P64LIJBXiGaqE1y-OEGXksJgdbCXA",
//   authDomain: "fir-437f4.firebaseapp.com",
//   projectId: "fir-437f4",
//   storageBucket: "fir-437f4.appspot.com",
//   messagingSenderId: "773017216538",
//   appId: "1:773017216538:web:4f7ec5cc01cfb27d95d3a3",
// };

// // Initialize Firebase
// const app = firebase.initializeApp(firebaseConfig);
// const auth = firebase.auth();
// const db = app.firestore();

// export { auth, db };
