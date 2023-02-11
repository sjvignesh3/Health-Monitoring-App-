import firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
    apiKey: REACT_APP_FIREBASE_APIKEY,
    authDomain: REACT_APP_FIREBASE_AUTHDOMAIN,
    projectId: REACT_APP_FIREBASE_PROJECTID,
    storageBucket: REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: REACT_APP_FIREBASE_APPID
});    

export const auth = app.auth();
export default app;