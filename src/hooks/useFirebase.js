import {useEffect, useState} from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, 
    createUserWithEmailAndPassword, signInWithEmailAndPassword ,  signOut} from "firebase/auth";
import initailizeAuthenticaton from '../Components/LogIn/Firebase/firebase.init';


initailizeAuthenticaton();
const useFirebase = () => {
    const [user , setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvidor = new GoogleAuthProvider();

    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  const toggleLogIn = e => {
    setIsLogin(e.target.checked);
  }


const handleEmailChange=e=> {
         setEmail(e.target.value);
}

const handlePasswordChange = e =>{
     setPassword(e.target.value)
}
  const handleRegistration = e => {
    e.preventDefault();
     console.log(email, password);
     if(password.length < 6){
       setError('password must be at least 6 charcters long')
       return;
     }
     if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
       setError('password Must contain 2 upper case');
       return;
     }

     isLogin? processLogin(email, password) : createNewUser(email, password);
  }
  

  const processLogin = (email, password) =>{
    signInWithEmailAndPassword(auth, email, password)
    .then(result=>{
      const user = result.user;
       console.log(user);
       setError('');
    })
    .catch(error =>{
      setError(error.message);
    })
  }
  const createNewUser = ( email, password) =>{
    createUserWithEmailAndPassword(auth, email, password)
     .then(result =>{
       const user = result.user;
       console.log(user);
       setError('');
     })
     .catch(error =>{
       setError(error.message);
     })
  }

    const signInUsingGoogle = () =>{
        setIsLoading(true);
       return signInWithPopup(auth, googleProvidor)
        
        .finally(() => setIsLoading(false));
    }
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
        .then(() => {
        setUser({})
        })
    }
    useEffect( () =>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
            setUser(user);
            } 
            else {
                setUser({});
            }
            setIsLoading(false);

          });
    }, [])
    return{
        user,
        error,
        isLoading,
        processLogin,
        createNewUser,
        handleEmailChange,
        handlePasswordChange,
        toggleLogIn,
        handleRegistration,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;