import { createContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail
} from 'firebase/auth';

import { auth} from "./Firebase";
export const CreatconxteApi = createContext();

function AuthConxte({ children }) {

  const [creatconxtAli , setCreatconxtAli] = useState(null);
  const [loading , setLoading] = useState(true);

  const SignUp = async (email, password) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  }

  const Login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  const restEmail = (email) => {
    return sendPasswordResetEmail(auth , email)
  }

  useEffect(() => {
    const unSubcribe = onAuthStateChanged(auth, (user) => {
      setCreatconxtAli(user);
      setLoading(false);
    });
    return () => unSubcribe();
  }, []);

  return (
    <CreatconxteApi.Provider value={{ creatconxtAli, SignUp, Login, logout  , restEmail}}>
      {!loading && children}
    </CreatconxteApi.Provider>
  );
}
export default AuthConxte;