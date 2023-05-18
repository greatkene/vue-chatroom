import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBCTI_m0yUgH5cW6RUTvFrvjMJvEva5g1c',
  authDomain: 'vue-chatroom-b3121.firebaseapp.com',
  projectId: 'vue-chatroom-b3121',
  storageBucket: 'vue-chatroom-b3121.appspot.com',
  messagingSenderId: '234403158853',
  appId: '1:234403158853:web:4fa6dc18908b20456efc2c',
  measurementId: 'G-0ZQPH4V30B'
}

// init firebase
firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp }
