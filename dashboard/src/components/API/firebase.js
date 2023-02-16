// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  query,
  where,
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";


// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FB_API_KEY,
  authDomain: "domotica-caf63.firebaseapp.com",
  projectId: "domotica-caf63",
  storageBucket: "domotica-caf63.appspot.com",
  messagingSenderId: "238720006287",
  appId: "1:238720006287:web:f2eaca727555067b9898fa",
  measurementId: "G-BN9W03ZEL4"
};

//Conectamos con la base de datos
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

//User


//CRUD
export const getUser = (ref)=> getDocs(query(collection(db, "usuarios"), where("name","==", ref)))

export const getDocuments = (ref) => getDocs(collection(db, ref));

export const onGetDocuments = (ref, callback) => onSnapshot(collection(db, ref), callback);

export const onGetDispositivoLeaked = (field, ref, callback) => 
  onSnapshot(query(collection(db, "dispositivos"), where(field,"==", ref)), callback);

export const updateDocument = (ref, id, value) => updateDoc(doc(db, ref, id),{
  value: value
});

