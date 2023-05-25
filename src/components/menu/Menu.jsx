import { NavLink, useNavigate } from 'react-router-dom';
import './Menu.css';

const Menu = ({ isAuth, toggleAuth }) => {
  const navigate = useNavigate();

  console.log('<Menu /> props.isAuth: ', isAuth);

  function signOut() {
    toggleAuth(false);
    navigate('/');
  }

  return (
    <header className="outer-container">
      <nav className="inner-container">
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive === true ? 'active-link' : 'default-link'
              }
            >
              Home
            </NavLink>
          </li>
          {/* To show or not to show blog: */}
          {isAuth === true ? (
            <>
              <li>
                <NavLink
                  to="/blogposts"
                  className={({ isActive }) =>
                    isActive === true ? 'active-link' : 'default-link'
                  }
                >
                  Blogposts
                </NavLink>
              </li>
              <li>
                <button type="button" onClick={signOut}>
                  Uitloggen
                </button>
              </li>
            </>
          ) : (
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive === true ? 'active-link' : 'default-link'
                }
              >
                Inloggen
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
