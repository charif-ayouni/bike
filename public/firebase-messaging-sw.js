// eslint-disable-next-line no-undef
importScripts('https://www.gstatic.com/firebasejs/8.1.2/firebase-app.js')
// eslint-disable-next-line no-undef
importScripts('https://www.gstatic.com/firebasejs/8.1.2/firebase-messaging.js')

firebase.initializeApp({
  apiKey: 'AIzaSyBFj9s1qZOdjoDNx8mrKESVQe1I5HdrZTw',
  projectId: 'bike-day',
  messagingSenderId: '206487854676',
  appId: '1:206487854676:web:86c25173073c26c6c2d7c1'
})

const messaging = firebase.messaging()
messaging.onBackgroundMessage(function (payload) {
  const notificationTitle = payload.notification.title
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image
  }
  self.registration.showNotification(notificationTitle, notificationOptions)
})
