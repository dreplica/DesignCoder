import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBip4YTrETN5Vd9NXmm8OoAXV5ha9gIQTE",
    authDomain: "designcodel.firebaseapp.com",
    databaseURL: "http://designcodel.firebaseio.com",
    storageBucket: "designcodel.appspot.com"
};

firebase.initializeApp(firebaseConfig);

export default firebase;