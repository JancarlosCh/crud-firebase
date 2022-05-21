// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  collection,
  getDocs,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkwXAAnYOnQdGXY40v8VGk1gV6DNNm-Yg",
  authDomain: "crud-firebase-872cb.firebaseapp.com",
  projectId: "crud-firebase-872cb",
  storageBucket: "crud-firebase-872cb.appspot.com",
  messagingSenderId: "358489106312",
  appId: "1:358489106312:web:deb5e5d1aa709d87edbc3d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export const database = () => {
  const getUsers = async (setUsers) => {
    try {
      const data = await getDocs(collection(db, "users"));
      const users = data.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setUsers(users);
    } catch (error) {
      console.log(error);
    }
  };

  const insertUser = async (newUser, users, setUsers) => {
    try {
      const userData = await addDoc(collection(db, "users"), newUser);
      setUsers([...users, { id: userData.id, ...newUser }]);
    } catch (error) {
      console.error(error);
    }
  };

  const updateUser = async (userData) => {
    try {
      await updateDoc(doc(db, "users", userData.id), userData);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (id, users, setUsers) => {
    try {
      await deleteDoc(doc(db, "users", id));
      const leakedData = users.filter((user) => user.id != id);
      setUsers(leakedData);
    } catch (error) {
      console.log(error);
    }
  };

  return { getUsers, insertUser, updateUser, deleteUser };
};
