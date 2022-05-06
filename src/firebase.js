import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

/// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCQpE65JP4IXiJSmUvtS427DoM1a4etR-Y",
    authDomain: "peace-love-and-crafting.firebaseapp.com",
    projectId: "peace-love-and-crafting",
    storageBucket: "peace-love-and-crafting.appspot.com",
    messagingSenderId: "67354754220",
    appId: "1:67354754220:web:e218469e0298a2057f3309",
    measurementId: "G-PNSRY8M0JT"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};