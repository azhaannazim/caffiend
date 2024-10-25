import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../../fireBase";
import { doc, getDoc } from "firebase/firestore";

const AuthContext = createContext()

export function useAuth(){
    return useContext(AuthContext);
}

export function AuthProvider(props){
    const {children} = props;
    const [globalUser , setGlobalUser] = useState(null);
    const [globalData , setGlobalData] = useState(null);
    const [isLoading , setIsLoading] = useState(false);

    function signup(email , password){
        return createUserWithEmailAndPassword(auth , email , password);
    }
    function login(email , password){
        return signInWithEmailAndPassword(auth , email , password);
    }
    function resetPassword(email){
        return sendPasswordResetEmail(auth , email);
    }
    function logout(){
        setGlobalUser(null);
        setGlobalData(null);
        return signOut(auth);
    }
    
    const value = {globalUser , globalData ,setGlobalData ,isLoading 
        ,signup ,login ,resetPassword ,logout }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth , async (user) => {

            console.log('currentUser : ', user);
            setGlobalUser(user)


            if(!user) {
                console.log("no user found")
                return;
            }

            try {
                setIsLoading(true);

                //creating reference to the doc, than taking a snap to see if there is anything userfull
                const docRef = doc(db , 'users' , user.uid);
                const docSnap = await getDoc(docRef)

                let data = {}
                if(docSnap.exists()){
                    console.log("data found!!");
                    data = docSnap.data();
                }
                setGlobalData(data);

            } catch (err) {
                console.log(err);
            }
            finally{
                setIsLoading(false);
            }
        })
        return unsubscribe;
    } , [])

    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}