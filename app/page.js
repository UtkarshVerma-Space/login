"use client"
import { useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBA8lVr378jFt2jQ2mfZx_7ZJq1bB6d2wc",
  authDomain: "crud-3a302.firebaseapp.com",
  projectId: "crud-3a302",
  storageBucket: "crud-3a302.appspot.com",
  messagingSenderId: "329882530656",
  appId: "1:329882530656:web:a60b77cc03e6a26bbda405",
  measurementId: "G-G7FC4XEG2P"
};

export default function Home() {
  useEffect(() => {
    let app = null;
    let analytics = null;

    // Check if the code is running on the client-side (browser)
    if (typeof window !== 'undefined') {
      app = initializeApp(firebaseConfig);
      analytics = getAnalytics(app);
    }

    // Use the app and analytics objects here

    // Cleanup function
    return () => {
      // Perform any necessary cleanup
    };
  }, []);

  const handleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    try {
      const result = await signInWithRedirect(auth, provider);
      // Handle the sign-in result
    } catch (error) {
      // Handle the error
    }
  };

  const handleLogin = () => {
    handleSignIn();
  };

  return (
    <>
      <button onClick={handleLogin}>Login</button>
    </>
  );
}
