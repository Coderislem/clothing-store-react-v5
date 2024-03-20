import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore"; // Import getDoc

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDU09BFrlUu1yYP2C0dxXFKRL7G4WAU60g",
  authDomain: "spatial-ether-410521.firebaseapp.com",
  projectId: "spatial-ether-410521",
  storageBucket: "spatial-ether-410521.appspot.com",
  messagingSenderId: "289302229980",
  appId: "1:289302229980:web:a6725fa4b7847381f5d519",
  measurementId: "G-39Y2KMMXYL"
};

export const createUserProfileDocument = async (userAuth, additionalData) => { // Corrected function name
    if (!userAuth) return;

    const userRef = doc(getFirestore(), `users/${userAuth.uid}`);

    const snapshot = await getDoc(userRef); // Use getDoc instead of userRef.get()
    if (!snapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userRef, {
                displayName,
                email,
                createdAt,
                ...additionalData // Corrected additionalData variable name
            });
        } catch (error) {
            console.log(error);
        }
    }
    return userRef;
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Authentication
export const auth = getAuth(app);
export const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
        const result = await signInWithPopup(auth, provider);
        return result;
    } catch (error) {
        throw error;
    }
};

// Firestore
export const firestore = getFirestore(app);
