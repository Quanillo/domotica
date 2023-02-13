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
  where
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";
// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: import.meta.env.VITE_FB_API_KEY,
  //"AIzaSyDl81dGE7Yp4tMus-LbHRzA8KT3QmNPVW0",
  authDomain: "domotica-caf63.firebaseapp.com",
  projectId: "domotica-caf63",
  storageBucket: "domotica-caf63.appspot.com",
  messagingSenderId: "238720006287",
  appId: "1:238720006287:web:9d6655269c05167e9898fa",
  measurementId: "G-P5WRDBW2E1"

};

//Conectamos con la base de datos
const app = initializeApp(firebaseConfig);
const db = getFirestore()

//CRUD

export const getDocuments = (ref) => getDocs(collection(db, ref));

export const onGetDocuments = (ref, callback) => onSnapshot(collection(db, ref), callback);


const q = query(collection(db, "dispositivos"), where("type","==", "sensor"))

const getSensoresFB = onSnapshot(q, (querySnapshot) =>{
  const dispositivos = []
  querySnapshot.forEach((doc) => {
    dispositivos.push(doc.data())
  })
})

export const SensoresFb = () => getSensoresFB

/*
  const q = query(collection(db, "cities"), where("state", "==", "CA"));
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const cities = [];
    querySnapshot.forEach((doc) => {
        cities.push(doc.data().name);
    });
    console.log("Current cities in CA: ", cities.join(", "));
  });
  */