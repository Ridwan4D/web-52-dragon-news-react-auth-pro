// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCXbxupwIoWMDTyZ8nhnlNQSUq-mQ09OHU",
    authDomain: "the-dragon-new-auth.firebaseapp.com",
    projectId: "the-dragon-new-auth",
    storageBucket: "the-dragon-new-auth.appspot.com",
    messagingSenderId: "31387378221",
    appId: "1:31387378221:web:81bd36fc80ed5cfddc0ea4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;