// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Import the Firebase Auth SDK

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwjFU9h8UhNzjnUDKDGINQu-Owxoyyrf0",
  authDomain: "moodify-a3fab.firebaseapp.com",
  projectId: "moodify-a3fab",
  storageBucket: "moodify-a3fab.firebasestorage.app",
  messagingSenderId: "804300411890",
  appId: "1:804300411890:web:1b9e724522b0167475116b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

export { auth };
