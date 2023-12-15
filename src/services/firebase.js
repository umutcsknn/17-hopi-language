// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import {
  getAuth,
  initializeAuth,
  // @ts-ignore
  getReactNativePersistence,
} from "firebase/auth";

import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyCViYoMZvOZebIhDi7DInlAPA_d3PFCEiA",
  authDomain: "umutcoskun-ba016.firebaseapp.com",
  projectId: "umutcoskun-ba016",
  storageBucket: "umutcoskun-ba016.appspot.com",
  messagingSenderId: "1095012503606",
  appId: "1:1095012503606:web:aa4588462b25f121d08897"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});