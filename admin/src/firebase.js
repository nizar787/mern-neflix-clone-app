import firebase from "firebase";

const firebaseConfig = {
  apiKey: 'AIzaSyAtIZvZsCIybXA0n93pjilmCnn20jNWVBo',
  authDomain: 'netflix-a2047.firebaseapp.com',
  projectId: 'netflix-a2047',
  storageBucket: 'netflix-a2047.appspot.com',
  messagingSenderId: '852771126950',
  appId: '1:852771126950:web:a001cbbd04e36084e7be67',
  measurementId: 'G-YG0Z3PQ0HX',
}

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
