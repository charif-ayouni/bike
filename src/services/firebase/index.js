import { Axios } from '../axios'
import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'
import 'firebase/messaging'

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
})

export const messaging = async () => {
  return await app
    .messaging()
    .getToken({ vapidKey: process.env.REACT_APP_FIREBASE_MESSAGING_VAPID })
}

export const sendNotification = async notification => {
  let config = {
    method: 'POST',
    url: process.env.REACT_APP_FIREBASE_MESSAGING_URL,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `key=${process.env.REACT_APP_FIREBASE_FCM_KEY}`
    }
  }
  return Axios(config, notification)
}

export const auth = app.auth()
export const database = app.database()
export const firestore = app.firestore()
export default app
