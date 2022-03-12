import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


const config =  {
          apiKey: "AIzaSyD6u3QKXACvyCWniJnldwZ3d1U43BNH-VU",
          authDomain: "crwn-db-1c183.firebaseapp.com",
          projectId: "crwn-db-1c183",
          storageBucket: "crwn-db-1c183.appspot.com",
          messagingSenderId: "510635671481",
          appId: "1:510635671481:web:8e4f4247b67b2490e70068",
          measurementId: "G-WX04ZVFFTQ"
        };


       const app = initializeApp(config);
       export const firestore = getFirestore(app);
       export const auth = getAuth();
       //export const authStateChange = onAuthStateChanged(auth);
       const provider = new GoogleAuthProvider();
       provider.setCustomParameters({
          prompt: 'select_account'
        });

     
        export const signInWithGoogle = () => signInWithPopup(auth, provider);
        

       
