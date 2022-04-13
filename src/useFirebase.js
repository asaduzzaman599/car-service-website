import { useState } from "react"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase.init";
const useFirebase = ()=>{
    const [user,setUser] = useState(null);

    const userCreateWithEmailAndPassword = (email,password) =>{
        createUserWithEmailAndPassword(auth,email,password)
        .then(res=>{
            console.log(res.user)
            setUser(res.user)
        }).catch(error=> console.log(error.message))
    }

    return {user,userCreateWithEmailAndPassword}
}

export default useFirebase;