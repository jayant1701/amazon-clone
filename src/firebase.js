import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAjS39zGdXsDOb7FtW2gtx_1ovhBgrT2Cw",
  authDomain: "clone-972e1.firebaseapp.com",
  databaseURL: "https://clone-972e1.firebaseio.com",
  projectId: "clone-972e1",
  storageBucket: "clone-972e1.appspot.com",
  messagingSenderId: "805986109494",
  appId: "1:805986109494:web:57b144095ab6baf8d37097",
  measurementId: "G-TZC1TCNNTH"
}

const firebaseApp= firebase.initializeApp(firebaseConfig)

const db=firebaseApp.firestore()
const auth=firebaseApp.auth();

export {db,auth}