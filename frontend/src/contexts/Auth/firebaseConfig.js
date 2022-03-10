import { initializeApp } from 'firebase/app'
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth'
// require('dotenv').config()
console.log(process.env)

// const firebaseConfig = {
//   apiKey: 'AIzaSyD3lZsYCPF2bvnoEKSPhsDznJrk9eHnv1Q',
//   authDomain: 'trackex-app.firebaseapp.com',
//   projectId: 'trackex-app',
//   storageBucket: 'trackex-app.appspot.com',
//   messagingSenderId: '994479060086',
//   appId: '1:994479060086:web:c07b47a3aee197ff2fdb57',
// }
// initializeApp(firebaseConfig)
initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
})

const auth = getAuth()

const firebase = {
  login: (email, password) => signInWithEmailAndPassword(auth, email, password),
}

export default firebase
