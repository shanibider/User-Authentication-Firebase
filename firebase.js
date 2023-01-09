// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from '@firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwdKUXrEi50WphfxIDbIatxMU4s3K8wx8",
  authDomain: "myweb2-a1c2a.firebaseapp.com",
  projectId: "myweb2-a1c2a",
  storageBucket: "myweb2-a1c2a.appspot.com",
  messagingSenderId: "703656849722",
  appId: "1:703656849722:web:a4abe4ef05cedc8d312003"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export const db = getFirestore(app);

