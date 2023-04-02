import {getApp, getApps, initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import{getStorage} from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBvjfn-N3Q6xkRRDWr_9hbQdIAbB5YJvmU",
    authDomain: "delivery-82f46.firebaseapp.com",
    databaseURL: "https://delivery-82f46-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "delivery-82f46",
    storageBucket: "delivery-82f46.appspot.com",
    messagingSenderId: "924754753543",
    appId: "1:924754753543:web:005e22a8679eb46d0652a2",
    measurementId: "G-CVDLJJ0Y63"
  };

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
  const firestore = getFirestore(app);
  const storage = getStorage(app);
  const analytics = getAnalytics(app);

  export {app, firestore, storage, analytics};