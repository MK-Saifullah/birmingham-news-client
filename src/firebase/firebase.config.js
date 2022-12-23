// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRLfEwqWEO_SpYgZs_y4hI4APtu8VmnbA",
  authDomain: "birmingham-news.firebaseapp.com",
  projectId: "birmingham-news",
  storageBucket: "birmingham-news.appspot.com",
  messagingSenderId: "975104148610",
  appId: "1:975104148610:web:bc41c0ecde46355b2e209b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;