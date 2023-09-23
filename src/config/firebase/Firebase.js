// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
// import {getFirestore} from 'firebase/firestore'
import {getAnalytics} from "firebase/analytics";
import 'firebase/auth'
// import 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "xxx",
	authDomain: "xxx",
	projectId: "xxx",
	storageBucket: "xxx",
	messagingSenderId: "xxx",
	appId: "xxx",
	measurementId: "xxx"
};

// Initialize Firebase
export const apps = initializeApp(firebaseConfig);
// export const firestore = getFirestore(apps)
export const analytics = getAnalytics(apps);
