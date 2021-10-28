import { initializeApp } from 'firebase/app';
import firebaseConfig from './config.firebase';

const firebaseInitialization = () => {
  initializeApp(firebaseConfig);
};

export default firebaseInitialization;
