import { initializeApp } from 'firebase/app';
import firebaseConfig from './FirebaseConfig';
import { getAuth, GoogleAuthProvider, signInWithPopup,createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";


export const initializeLoginFramework = () => {
    const app = initializeApp(firebaseConfig)
}



// handle google sign in
export const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth()
    return signInWithPopup(auth, provider)
    .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // destructure from user object
        const {displayName, email,photoURL} = user
        // set all information in an object and return it
        const signInUser = {
          name: displayName,
          email: email,
          photo: photoURL,
         }

         return signInUser

    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
    });
}


// handle create user with email and password
export const createNewUserEmailPassword = (name, email, password) =>{
    const auth = getAuth();
    return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
     const user = userCredential.user;
     // succesfull 
     const newUserInfo = {...user}
     return newUserInfo
   })
   .catch((error) => {
     const newUserInfo = {}
     newUserInfo.error = error.message
     newUserInfo.sucess = false;
     return newUserInfo
   });
} 


// handle sign in with email and password
export const signInWithEmailandpassword = (email, password) =>{
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
     // Signed in 
     const user = userCredential.user;
     const newUserInfo = {...user}
     return newUserInfo
  })
  .catch((error) => {
     const newUserInfo = {}
      newUserInfo.error = error.message
      newUserInfo.sucess = false;
      return newUserInfo
  });
}