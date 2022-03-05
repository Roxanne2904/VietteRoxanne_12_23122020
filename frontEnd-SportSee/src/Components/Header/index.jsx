import logo from '../../asset/png/logo.png'
import { Link } from 'react-router-dom'
/**
 * Display the header with the navigation.
 * @return { HtmlElements } Header's component is displayed dynamically.
 */

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
          <li className="header__nav__ul__li">Réglage</li>
          <li className=" header__nav__ul__li">Communauté</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
