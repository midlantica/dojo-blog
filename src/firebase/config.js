import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAW0XYKSriNE-MOQPATa-2OcJDUCtFSMN8",
  authDomain: "ninja-91-31d7e.firebaseapp.com",
  projectId: "ninja-91-31d7e",
  storageBucket: "ninja-91-31d7e.appspot.com",
  messagingSenderId: "95861582332",
  appId: "1:95861582332:web:f82e89d91bc7a8c311aa79"
}

// init firebase
firebase.initializeApp(firebaseConfig)

// inite firestore service
const projectFirestore = firebase.firestore()

export { projectFirestore }
