import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBsD9s298DaZheZ2pe-gjMllLo_Jpg0inc",
  authDomain: "gymkhana-recrave.firebaseapp.com",
  projectId: "gymkhana-recrave",
  storageBucket: "gymkhana-recrave.firebasestorage.app",
  messagingSenderId: "877400048477",
  appId: "1:877400048477:web:55a099d369952143321eb4",
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
