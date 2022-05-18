import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

// web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDIV1yMDMV2oxo1dDN5cdEVZtiPVLN2VDo",
    authDomain: "t-creative1.firebaseapp.com",
    projectId: "t-creative1",
    storageBucket: "t-creative1.appspot.com",
    messagingSenderId: "197120135612",
    appId: "1:197120135612:web:10dd375212bfde98b65bb9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;