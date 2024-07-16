importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');
// // Initialize the Firebase app in the service worker by passing the generated config


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAvIuN6vn3yGdBF0HBLYxZZB9Vk7tM8U4Y",
    authDomain: "usedfonug-web.firebaseapp.com",
    projectId: "usedfonug-web",
    storageBucket: "usedfonug-web.appspot.com",
    messagingSenderId: "59417133157",
    appId: "1:59417133157:web:98f2874d02f0dd32b1c68c",
    measurementId: "G-6ZK70K894B"
  };



firebase?.initializeApp(firebaseConfig)


// Retrieve firebase messaging
const messaging = firebase.messaging();

self.addEventListener('install', function (event) {
    console.log('Hello world from the Service Worker :call_me_hand:');
});

// Handle background messages
self.addEventListener('push', function (event) {
    const payload = event.data.json();
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
    };

    event.waitUntil(
        self.registration.showNotification(notificationTitle, notificationOptions)
    );
});