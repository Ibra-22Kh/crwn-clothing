import { initializeApp } from 'firebase/app';

import {getAuth , GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCZHrZRB7FSg7LRTdsFNCXOtsoUlzVcS24",
//   authDomain: "crwn-db-23220.firebaseapp.com",
//   projectId: "crwn-db-23220",
//   storageBucket: "crwn-db-23220.appspot.com",
//   messagingSenderId: "525793109616",
//   appId: "1:525793109616:web:c2bf53cccef8ed8cac76b5",
//   measurementId: "G-SV33WZRT4E"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// const provider = new GoogleAuthProvider();

// export const signInWithGoogle = () =>{
//     signInWithPopup(auth,provider).then((result)=>{
//         console.log(result);
//     }).catch((error)=>{
//         console.log(error);
//     });
// }

const config = 
                {
                    apiKey: "AIzaSyCZHrZRB7FSg7LRTdsFNCXOtsoUlzVcS24",
                
                    authDomain: "crwn-db-23220.firebaseapp.com",
                
                    projectId: "crwn-db-23220",
                
                    storageBucket: "crwn-db-23220.appspot.com",
                
                    messagingSenderId: "525793109616",
                
                    appId: "1:525793109616:web:c2bf53cccef8ed8cac76b5",
                
                    measurementId: "G-SV33WZRT4E"
                
                };
        const app = initializeApp(config);

        export const auth = getAuth(app);
        //export const firestore = firebase.firestore();

        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({prompt : 'select_account'});
        export const signInWithGoogle = () =>{
        signInWithPopup(auth,provider).then((result)=>{
            console.log(result);
        }).catch((error)=>{
            console.log(error);
        });
    }


        //export default firebase;
