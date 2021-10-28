import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import Form from '../../components/Form/Form';
import useAuth from '../../hooks/useAuth';
import signinup from '../../images/signinup.jpg';

const SignInUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [haveAccount, setHaveAccount] = useState(false);
  const {
    signInUsingGoogle,
    signInUsingGithub,
    setIsLoading,
    setUser,
    signUpUsingEmailPassowrd,
    signInUsingEmailPassowrd,
    verifyEmail,
    error,
    setError,
    restPassword,
    updateName,
  } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || '/home';
  const handleGoogleLogin = () => {
    signInUsingGoogle()
      .then((result) => {
        history.push(redirect_uri);
        setUser(result.user);
        setError('');
      })
      .finally(() => setIsLoading(false));
  };
  const handleGithubLogin = () => {
    signInUsingGithub()
      .then((result) => {
        history.push(redirect_uri);
        setUser(result.user);
        setError('');
      })
      .finally(() => setIsLoading(false));
  };

  const toggleLogin = (e) => {
    setHaveAccount(e.target.checked);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleSubmission = (e) => {
    e.preventDefault();
    if (password.length < 8) {
      setError('Password should be at least 8 characters');
      return;
    }

    haveAccount
      ? signInUsingEmailPassowrd(email, password)
          .then((result) => {
            history.push(redirect_uri);
            setUser(result.user);
            setError('');
            setIsLoading('false');
          })
          .catch((error) => {
            setError(error.message);
          })
      : signUpUsingEmailPassowrd(email, password)
          .then((result) => {
            history.push(redirect_uri);
            setIsLoading(true);
            setUser(result.user);
            setError('');
            verifyEmail();
          })
          .then((res) => {
            updateName(name);
          })
          .catch((error) => {
            setError(error.message);
          });
  };

  const handleRestPassword = () => {
    restPassword(email);
    setError('Email Sent to', email);
  };

  return (
    <div className="md:flex justify-arround itrms-center md:border rounded shadow-lg overflow-hidden my-4">
      <div className="md:w-3/5 md:block hidden overflow-hidden my-auto">
        <img
          src={signinup}
          alt=""
          className="transition duration-500 ease-in-out transform hover:scale-105 "
        />
      </div>
      <div className="md:w-2/5 mx-2 my-auto h-full ">
        <Form
          type={haveAccount ? 'signin' : 'signup'}
          signInUsingGoogle={handleGoogleLogin}
          signInUsingGithub={handleGithubLogin}
          handleSubmission={handleSubmission}
          handleEmailChange={handleEmailChange}
          handlePasswordChange={handlePasswordChange}
          handleNameChange={handleNameChange}
          toggleLogin={toggleLogin}
          error={error}
          handleRestPassword={handleRestPassword}
        />
      </div>
    </div>
  );
};

export default SignInUp;
