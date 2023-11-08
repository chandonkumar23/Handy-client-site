
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged,  signInWithEmailAndPassword,  signInWithPopup, signOut, updateProfile} from "firebase/auth";
import app from "../fireConfig";




export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user , setUser] = useState({});
    const[load ,setLoad] = useState(true);

    const createUser = (email , password)=>{
        setLoad(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const SignIN = (email , password) =>{
        setLoad(true);
        return signInWithEmailAndPassword(auth , email ,password)
       }
        
       const update= (name,photo)=>{
        setLoad(true)
        return updateProfile(auth.currentUser,{
        displaName:name,
        photoURL:photo,
       });

    }


       const logOut = () =>{
        setLoad(true);
        return signOut(auth);
    }

    

    const googleLogin = () =>{
        setLoad(true);
        return signInWithPopup(auth,googleProvider)
    }
       
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth , currentUser =>{
            console.log("user in the auth satate chamged")
           setUser(currentUser)
           setLoad(false);
       
        });
        return () =>{
            unSubscribe();
        }
    
    },[])

    

    const authInfo = {
    user,
    createUser,
    SignIN,
    logOut,
    googleLogin,
    load,
    update

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;