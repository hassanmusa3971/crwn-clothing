import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


const config = {
  apiKey: "AIzaSyD6u3QKXACvyCWniJnldwZ3d1U43BNH-VU",
  authDomain: "crwn-db-1c183.firebaseapp.com",
  projectId: "crwn-db-1c183",
  storageBucket: "crwn-db-1c183.appspot.com",
  messagingSenderId: "510635671481",
  appId: "1:510635671481:web:8e4f4247b67b2490e70068",
  measurementId: "G-WX04ZVFFTQ",
};

const app = initializeApp(config);
export const database = getFirestore(app);
export const auth = getAuth();
//export const createUserEmailAndPassword = createUserWithEmailAndPassword();
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGoogle = () => signInWithPopup(auth, provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = doc(database, "users", userAuth.uid);
  const userSnap = await getDoc(userRef);

  if(!userSnap.exists()){
    const { displayName, email } = userAuth;
    const createAt = new Date();
    try {
      await setDoc(doc(database, 'users', userAuth.uid), {
        displayName,
        email,
        createAt,
        ...additionalData
      })
    
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }else{
    return userSnap;
  }

};
