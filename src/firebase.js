// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlXmuzIFPOV_u_4tjxEK3VGexqwuFoS7k",
  authDomain: "pastry-app.firebaseapp.com",
  projectId: "pastry-app",
  storageBucket: "pastry-app.appspot.com",
  messagingSenderId: "560732448152",
  appId: "1:560732448152:web:91fd3b9dc2ff53f6c377ed"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);