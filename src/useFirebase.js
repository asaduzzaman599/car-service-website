import { useState } from "react"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase.init";
const useFirebase = () => {
    const [user, setUser] = useState(null);

    const userCreateWithEmailAndPassword = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(res => {
                setUser(res.user)
            }).catch(error => console.log(error.message))
    }

    const loginWIthEmailAndPassword = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(res => setUser(res.user))
            .catch(error => console.log(error.message))
    }

    return { user, userCreateWithEmailAndPassword, loginWIthEmailAndPassword }
}

export default useFirebase;