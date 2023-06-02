// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBA8lVr378jFt2jQ2mfZx_7ZJq1bB6d2wc",
  authDomain: "crud-3a302.firebaseapp.com",
  projectId: "crud-3a302",
  storageBucket: "crud-3a302.appspot.com",
  messagingSenderId: "329882530656",
  appId: "1:329882530656:web:a60b77cc03e6a26bbda405",
  measurementId: "G-G7FC4XEG2P"
};

let app = null;
let analytics = null
// Check if the code is running on the client-side (browser)
if (typeof window !== "undefined") {
  app = initializeApp(firebaseConfig);
  analytics = getAnalytics(app);
}

// Initialize Firebase
export {app, analytics}
export default firebaseConfig