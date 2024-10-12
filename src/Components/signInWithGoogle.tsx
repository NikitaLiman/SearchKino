import React from 'react';
import Styles from '../Scss/Login.module.scss';
import { GoogleAuthProvider, signInWithPopup, User } from 'firebase/auth';
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';
interface PropsTake {
  setUser: (user: User | null) => void;
}

const SignInWithGoogle: React.FC<PropsTake> = ({ setUser }) => {
  const Navigate = useNavigate();
  function googleLogin() {
    const Provider = new GoogleAuthProvider();
    signInWithPopup(auth, Provider).then(async (result) => {
      console.log(result);
      if (result.user) {
      }
      setUser(result.user);
      Navigate('/Category');
    });
  }

  return (
    <div onClick={googleLogin} className={Styles.google}>
      <img src={require('../img/Google__G__logo.svg.png')} alt="" />
      <h2>Sing Up with Google</h2>
    </div>
  );
};

export default SignInWithGoogle;
