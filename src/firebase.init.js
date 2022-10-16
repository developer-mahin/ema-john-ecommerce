// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfX2pj_mzp_yqIA_mP6DWxYEPZlMuxZb8",
  authDomain: "simple-ema-john-auth-dbdf5.firebaseapp.com",
  projectId: "simple-ema-john-auth-dbdf5",
  storageBucket: "simple-ema-john-auth-dbdf5.appspot.com",
  messagingSenderId: "1071361993829",
  appId: "1:1071361993829:web:370eb4587a5696fa796a8c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;