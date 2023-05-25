// :blogId moet op alle pagina's gelijk zijn.
// Een posts.map(): moet een key=post.id bevatten, de <li> zit binnenin, moet een return bevatten, net als de grote function componenten die JSX naar de DOM geven
// App.js bepaalt in deze app of er authenticatie is en is de gate keeper
// props.isAuth correspondeert met de state value isAuthenticated (Geeft een boolean: true/false) --> isAuth=true/false. props.isAuth ingezet op Login.jsx en Menu.msx.
// toggleAuth, zoals de naam al impliceert, correspondeert met set state value: toggleIsAuthencicated. Je kunt dus met die props de state aanpassen die in App.jsx wordt beheerd.
// Props gekoppeld aan state value.
// props gekoppeld aan set state value. Met die props kun je state aanpassen.
// Geen props aanwezig op App. Alleen props op Menu en Login.

import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home/Home';
import Menu from './components/menu/Menu';
import BlogPost from './pages/blogposts/BlogPost';
import Login from './pages/login/Login';
import Footer from './components/footer/Footer';
import ArticleList from './pages/blogposts/ArticleList';
import NotFound from './pages/notfound/NotFound';
import './App.css';

export default function App() {
  const [isAuthenticated, toggleIsAuthenticated] = useState(false);

  console.log('ToggleAuth: ', isAuthenticated);
  console.log('toggleIsAuthenticated: ', toggleIsAuthenticated);

  return (
    <>
      <Menu isAuth={isAuthenticated} toggleAuth={toggleIsAuthenticated} />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/blogposts"
            element={
              isAuthenticated === true ? (
                <ArticleList />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/blogposts/:blogId"
            element={
              isAuthenticated === true ? <BlogPost /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/login"
            element={<Login toggleAuth={toggleIsAuthenticated} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
