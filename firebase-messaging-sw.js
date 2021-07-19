importScripts("https://www.gstatic.com/firebasejs/8.6.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.6.1/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyDz2mDHwnKpQQRNbHoiG45XYYKsKPpAIO0",
  authDomain: "femtosoft-erp.firebaseapp.com",
  projectId: "femtosoft-erp",
  storageBucket: "femtosoft-erp.appspot.com",
  messagingSenderId: "780530478222",
  appId: "1:780530478222:web:9d1e0d83ade737b483eddf",
  databaseURL: "https://femtosoft-erp.firebaseio.com",
});
// Necessary to receive background messages:
const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((m) => {
  console.log("onBackgroundMessage", m);
});