import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { auth } from "../firebase/firebase.init";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //create user  With Email Password
  const createUserWithEmailPassword = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //singIn user  With Email Password
  const singInEmailPassword = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //singIn with google
  const singInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  //singOut with google
  const singOutUser = () => {
    return signOut(auth);
  };
  // user update there data into Awesome popup ;)
  // Update user profile
  const updateUserProfile = async (name, photoURL) => {
    if (!auth.currentUser) return;

    await updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    });

    // Update state manually so UI updates instantly
    setUser({
      ...auth.currentUser,
      displayName: name,
      photoURL: photoURL,
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const authInfo = {
    createUserWithEmailPassword,
    singInEmailPassword,
    singInWithGoogle,
    singOutUser,
    updateUserProfile,
    user,
    loading,
  };

  return (
    <div>
      <AuthContext value={authInfo}>{children}</AuthContext>
    </div>
  );
};

export default AuthProvider;
