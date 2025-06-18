import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCPq56EXB6jl4Hvs8vzlLSROGpiltiLGqU",
  authDomain: "my-support-app-46d3e.firebaseapp.com",
  projectId: "my-support-app-46d3e",
  storageBucket: "my-support-app-46d3e.firebasestorage.app",
  messagingSenderId: "639569638353",
  appId: "1:639569638353:web:e5c7fcc9a239fc3b3826f0"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
