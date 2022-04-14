import { useEffect, useState } from "react"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, sendEmailVerification } from "firebase/auth";
import { auth } from "./firebase.init";
import { useUpdateProfile } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
const useFirebase = () => {
    const [user, setUser] = useState(null);
    const [error,setError] = useState('');
    const [updateProfile] = useUpdateProfile(auth);
    const [loading,setloading] = useState(false)

    
    
    const googleLogIn =() =>{
        setloading(true)
        const googleProveider = new GoogleAuthProvider()
        signInWithPopup(auth,googleProveider)
        .then(res=>setUser(res.user))
        .catch(error=> setError(error.message))
    }
    const githubLogIn =() =>{
        setloading(true)
        const githubProveider = new GithubAuthProvider()
        signInWithPopup(auth,githubProveider)
        .then(res=>setUser(res.user))
        .catch(error=> setError(error.message))
    }
    
    const userCreateWithEmailAndPassword = (email, password,username) => {
        
        setloading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then(async res => {
                
                await updateProfile({displayName:username})
                setUser(res.user)
                sendEmailVerification(auth.currentUser).then().catch(error=>setError(error.message))
                console.log(res.user)
            }).catch(error => setError(error.message))
    }

    const loginWIthEmailAndPassword = (email, password) => {
        
        setloading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then(res => setUser(res.user))
            .catch(error => setError(error.message))
    }
    useEffect(()=>{
        if(user ||error){
            setloading(false)
        }
    },[user,error])
    if(error){
        toast.error(error)
    }
    return { user,loading, userCreateWithEmailAndPassword, loginWIthEmailAndPassword,googleLogIn,githubLogIn }
}

export default useFirebase;