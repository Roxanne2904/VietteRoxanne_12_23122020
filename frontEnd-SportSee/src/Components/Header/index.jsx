import logo from '../../asset/logo.png'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <div>
        <img src={`${logo}`} alt="le logo"></img>
      </div>
      <ul>
        <Link to="/">Accueil</Link>
        <li>Profil</li>
        <Link to="/settings">Réglage</Link>
        <Link to="/community">Communauté</Link>
      </ul>
    </header>
  )
}

export default Header
