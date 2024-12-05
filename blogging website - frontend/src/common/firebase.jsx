// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7krbqVGkl6gdGJoW5rtWHOiK22mZadKw",
  authDomain: "react-blog-4a854.firebaseapp.com",
  projectId: "react-blog-4a854",
  storageBucket: "react-blog-4a854.firebasestorage.app",
  messagingSenderId: "91380758136",
  appId: "1:91380758136:web:fda468873fded0c0abdf8d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//google auth
const provider = new GoogleAuthProvider();

const auth = getAuth();

export const authWithGoogle = async () => {
  let user = null;
  await signInWithPopup(auth, provider).then((result) => {
    user = result.user;
  });

  return user;
};
