import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import users from '../../data/users.json';
import './Login.css';

const Login = ({ toggleAuth }) => {
  console.clear();
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [formState, setFormState] = useState({
    username: '',
    password: '',
  });

  function handleChange(e) {
    const changedFieldName = e.target.name;
    const newValue =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormState({
      ...formState,
      [changedFieldName]: newValue,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Entered user credentials: ', formState);
    console.log('Submitted');
    userVerification(formState.username, formState.password);
  }

  function userVerification(username, password) {
    users.find((user) => {
      if (username === user.username && password === user.password) {
        signIn();
      } else {
        setError(true);
      }
    });
  }

  function signIn() {
    setError(false);
    toggleAuth(true); // props.toggleAuth
    navigate('/');
  }

  return (
    <>
      <section className="login-page">
        <h1>Login Pagina</h1>
        <p>Vul je gegevens in om in te loggen</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Gebruikersnaam:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Vul hier je gebruikersnaam in"
            value={formState.username}
            onChange={handleChange}
          />

          <label htmlFor="password">Wachtwoord:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Vul hier je wachtwoord in"
            value={formState.password}
            onChange={handleChange}
          />
          <button type="submit">Inloggen</button>
        </form>
        {error && (
          <p className="error">
            Helaas, de ingevoerde gegevens zijn niet correct.
          </p>
        )}
      </section>
    </>
  );
};

export default Login;
