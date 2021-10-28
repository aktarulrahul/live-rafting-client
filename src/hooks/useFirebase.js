import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  GithubAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  updateProfile,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import firebaseInitialization from '../firebase/init.firebase';

firebaseInitialization();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth();
  const signInUsingGoogle = () => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  const signInUsingGithub = () => {
    setIsLoading(true);
    const githubProvider = new GithubAuthProvider();
    return signInWithPopup(auth, githubProvider);
  };

  const signUpUsingEmailPassowrd = (email, password) => {
    setError('');
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUsingEmailPassowrd = (email, password) => {
    setError('');
    return signInWithEmailAndPassword(auth, email, password);
  };

  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser);
  };

  const restPassword = (email) => {
    setError('');
    sendPasswordResetEmail(auth, email)
      .then((result) => setError('Email Send'))
      .catch((err) => setError(err.message));
  };
  const updateName = (name) => {
    updateProfile(auth.currentUser, { displayName: name })
      .then((result) => {})
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      setIsLoading(true);
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, [auth]);

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(setUser({}))
      .finally(() => setIsLoading(false));
  };

  return {
    user,
    setUser,
    isLoading,
    setIsLoading,
    signInUsingGoogle,
    signInUsingGithub,
    logOut,
    signUpUsingEmailPassowrd,
    signInUsingEmailPassowrd,
    error,
    setError,
    verifyEmail,
    restPassword,
    updateName,
  };
};

export default useFirebase;
