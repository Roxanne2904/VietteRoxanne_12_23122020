import logo from '../../asset/logo.png'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="header">
      <div className="header__imgContent">
        <img
          className="header__imgContent__img"
          src={`${logo}`}
          alt="le logo"
        ></img>
      </div>
      <nav className="header__nav" aria-label="main">
        <ul className="header__nav__ul">
          <li>
            <Link
              className="header__nav__ul__li header__nav__ul__li--link"
              to="/"
            >
              Accueil
            </Link>
          </li>
          <li className="header__nav__ul__li">Profil</li>
          <li>
            <Link
              className="header__nav__ul__li header__nav__ul__li--link"
              to="/settings"
            >
              Réglage
            </Link>
          </li>
          <li>
            <Link
              className="header__nav__ul__li header__nav__ul__li--link"
              to="/community"
            >
              Communauté
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
