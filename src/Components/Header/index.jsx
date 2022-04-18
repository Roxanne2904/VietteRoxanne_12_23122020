import React from 'react'
import logo from '../../asset/png/logo.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'

/**
 * It switch profile's tag  to white, on the top navigation.
 * It update the class name to change the color.
 * @param { String } color Color is related to useState().
 * @param { Function } setColor setColor is related to useState().
 * @param { Object } profileRef ProfileRef is related to React.createRef()
 */

function switchProfiletagToWhite(color, setColor, profileRef) {
  setColor('white')
  profileRef.current.className = ` header__nav__ul__li header__nav__ul__li--${color}`
}

/**
 * Display the header with the navigation.
 * @return { HtmlElements } Header's component is displayed dynamically.
 */

function Header() {
  let profileRef = React.createRef()
  const [color, setColor] = useState('white')

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
              onClick={() =>
                switchProfiletagToWhite(color, setColor, profileRef)
              }
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
