import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

import { getFirestore, serverTimestamp } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBCTI_m0yUgH5cW6RUTvFrvjMJvEva5g1c',
  authDomain: 'vue-chatroom-b3121.firebaseapp.com',
  projectId: 'vue-chatroom-b3121',
  storageBucket: 'vue-chatroom-b3121.appspot.com',
  messagingSenderId: '234403158853',
  appId: '1:234403158853:web:4fa6dc18908b20456efc2c',
  measurementId: 'G-0ZQPH4V30B'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const projectAuth = getAuth(app)
const projectFirestore = getFirestore(app)

export { projectFirestore, serverTimestamp, projectAuth }
