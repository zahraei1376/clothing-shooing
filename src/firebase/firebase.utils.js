import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


const config={
    apiKey: "AIzaSyATWW9_N872XhsLFOcbcrIcf6OJNl2xg4c",
    authDomain: "clothingshoping-db.firebaseapp.com",
    databaseURL: "https://clothingshoping-db.firebaseio.com",
    projectId: "clothingshoping-db",
    storageBucket: "clothingshoping-db.appspot.com",
    messagingSenderId: "513486523867",
    appId: "1:513486523867:web:5d4e7ea06e646779ca2bfe",
    measurementId: "G-BQZ0LZLQZD"
  };

  export const createUserProfileDocument=async(userAuth,additionalData)=>{
    if(!userAuth) return;
  }

  firebase.initializeApp(config);

  export const auth=firebase.auth();
  export const firestore=firebase.firestore();

  const provider=new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});

  export const SignInWithGoogle=()=>auth.signInWithPopup(provider);

  export default firebase;