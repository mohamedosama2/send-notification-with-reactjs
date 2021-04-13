import firebase from "firebase";

const config = {
  apiKey: "AIzaSyD-T9H0zkzaifB5Iph2H1KXCVf_o1_rU3o",
  authDomain: "fir-lato.firebaseapp.com",
  projectId: "fir-lato",
  storageBucket: "fir-lato.appspot.com",
  messagingSenderId: "455084730479",
  appId: "1:455084730479:web:b06f21fe6e535fd393459a",
};

firebase.initializeApp(config)

export default firebase