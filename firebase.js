// firebase.js
import { initializeApp } from "firebase/app";
import {
  getAuth,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAV6WXvTGTnZYQpyBZlvGrwlMGdsIvjWCc",
  authDomain: "quickbet-movies.firebaseapp.com",
  projectId: "quickbet-movies",
  storageBucket: "quickbet-movies.firebasestorage.app",
  messagingSenderId: "461714540011",
  appId: "1:461714540011:web:1add8b47159bb4932485ae",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportar la instancia de autenticación
const auth = getAuth(app);

export {
  auth,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
};
