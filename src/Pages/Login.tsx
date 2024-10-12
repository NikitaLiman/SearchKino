import React, { useContext } from 'react';
import Styles from '../Scss/Login.module.scss';
import SignInWithGoogle from '../Components/signInWithGoogle';
import { SearchContext } from '../App';
import { useNavigate } from 'react-router-dom';
import Bg from '../../src/img/bg.jpg';
const Login = () => {
  const Navigate = useNavigate();
  const { user, setUser } = useContext(SearchContext);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');
  React.useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    const storedUsername = localStorage.getItem('username');
    if (storedEmail) {
      setEmail(storedEmail);
    }
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);
  const handleChangeUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
    localStorage.setItem('username', e.target.value);
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    localStorage.setItem('email', e.target.value);
  };

  // Обработчик изменения пароля
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    localStorage.setItem('password', e.target.value);
  };
  const HandleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMessage('Email and Password need to be required!');
      return;
    }
    if (!email.includes('@')) {
      setErrorMessage('Email need to be with @');
      return;
    }
    if (password.length < 4) {
      setErrorMessage('Passwrod to little');
      return;
    }

    const userData = {
      username: username || email,
    };
    setUser(userData);
    setErrorMessage('');
    Navigate('/Category');
  };
  return (
    <div
      className={Styles.MainCont}
      style={{ backgroundImage: `url(${Bg})`, backdropFilter: 'blur(10px)' }}>
      {user ? (
        <div className={Styles.ContainerActive}>
          <div className={Styles.ContainerRegistred}>
            <h1>{`Hello, ${user.displayName || user.username}...`}</h1>
          </div>
        </div>
      ) : (
        <div className={Styles.container}>
          <div className={Styles.content}>
            <h1>Sign In</h1>
            <div className={Styles.form}>
              <div className={Styles.mb1}>
                <label htmlFor="First">Username</label>
                <input
                  id="First"
                  type="email"
                  placeholder="Enter Username"
                  value={username}
                  onChange={handleChangeUserName}
                />
              </div>
              <div className={Styles.mb1}>
                <label htmlFor="Email">Email Address</label>
                <input
                  id="Email"
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div className={Styles.mb1}>
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
              {errorMessage && (
                <p className={Styles.error}>{errorMessage}</p> // Отображение ошибки
              )}

              <div className={Styles.Button}>
                <button onClick={HandleSubmit} type="submit">
                  Submit
                </button>
              </div>
            </div>
            <p>--Or continue with--</p>
            <div className={Styles.googleCont}>
              <SignInWithGoogle setUser={setUser} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
