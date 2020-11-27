import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBFuH-4wxcRXLIYaRCHEpnCM3LQrHwrqTo",
    authDomain: "pokedex-d0c74.firebaseapp.com",
    databaseURL: "https://pokedex-d0c74.firebaseio.com",
    projectId: "pokedex-d0c74",
    storageBucket: "pokedex-d0c74.appspot.com",
    messagingSenderId: "241676651939",
    appId: "1:241676651939:web:8e78fc46a5213a217d1e16"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();
