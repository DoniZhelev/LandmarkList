import firebase from 'firebase/app';

import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB5KBnxst-6dcSV9Nl8PjPWAF9uPSyeQb0",
    authDomain: "landmark-list.firebaseapp.com",
    projectId: "landmark-list",
    storageBucket: "landmark-list.appspot.com",
    messagingSenderId: "392244913814",
    appId: "1:392244913814:web:a5cdd1dd234d80b6ac04b7"
  };
if(!firebase.apps.length) {

    firebase.initializeApp(firebaseConfig);
}

export default firebase;
export const auth = firebase.auth();