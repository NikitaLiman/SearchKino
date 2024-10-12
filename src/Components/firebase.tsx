// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAhtLP4kxw8cPeihdtViTmSsOybjBHMrWA',
  authDomain: 'login-9af48.firebaseapp.com',
  projectId: 'login-9af48',
  storageBucket: 'login-9af48.appspot.com',
  messagingSenderId: '258864027470',
  appId: '1:258864027470:web:1a11bb2a96be2838d4301f',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
