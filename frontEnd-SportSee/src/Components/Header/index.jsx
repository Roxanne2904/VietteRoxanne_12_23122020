import React from 'react'
import logo from '../../asset/png/logo.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'

/**
 * Display the header with the navigation.
 * @return { HtmlElements } Header's component is displayed dynamically.
 */

function Header() {
  let profileRef = React.createRef()
  const [color, setColor] = useState('white')
  //-----------------
  /**
   * @name switchToWhite
   * It switch to white the profile's tag on the top navigation.
   * It update the class name to change the color.
   */

  function switchToWhite() {
    setColor('white')
    profileRef.current.className = ` header__nav__ul__li header__nav__ul__li--${color}`
  }
  //-----------------
  //-----------------
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
              onClick={() => switchToWhite()}
              className="header__nav__ul__li header__nav__ul__li--link"
              to="/"
            >
              Accueil
            </Link>
          </li>
          <li
            ref={profileRef}
            id="profile"
            className="header__nav__ul__li header__nav__ul__li--none"
          >
            Profil
          </li>
          <li className="header__nav__ul__li">Réglage</li>
          <li className=" header__nav__ul__li">Communauté</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
