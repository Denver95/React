
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { getDatabase, ref } from "firebase/database";



const firebaseConfig = {
	apiKey: "AIzaSyASJ4maaEHu6eA35ifkkiRcLemaMqdE62U",
	authDomain: "homework-9-7d505.firebaseapp.com",
	databaseURL: "https://homework-9-7d505-default-rtdb.firebaseio.com",
	projectId: "homework-9-7d505",
	storageBucket: "homework-9-7d505.appspot.com",
	messagingSenderId: "29666620534",
	appId: "1:29666620534:web:a9efbe3242fe8ec0035b57"
};


const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);


export const registration = async (email, password) => await
	createUserWithEmailAndPassword(firebaseAuth, email, password,)


export const login = async (email, Password) => await signInWithEmailAndPassword(firebaseAuth, email, Password)

export const logOut = async () => await signOut(firebaseAuth)


const db = getDatabase(app)
export const userRef = ref(db, 'user')
export const messagesRef = ref(db, 'messages')

export const getChatById = (chatId) => ref(db, `messages/${chatId}`)

export const getMessageListById = (chatId) => ref(db, `messages/${chatId}/messageList`) 