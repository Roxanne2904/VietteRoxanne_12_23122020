import { Link } from 'react-router-dom'
import VerticalLayout from '../../Components/VerticalLayout'

/**
 * Display the Home's page with available profiles to visit.
 * @returns { HtmlElements } Home's component is displayed dynamically.
 */

function Home() {
  return (
    <main>
      <VerticalLayout />
      <div className="homeContent">
        <h1 className="homeContent__mainTitle">
          Bienvenue sur{' '}
          <span className="homeContent__mainTitle__appName">SportSee</span>
        </h1>
        <h2 className="homeContent__secondaryTitle">
          Choisissez un profil à visualiser
        </h2>
        <ul className="homeContent__profilesList">
          <Link to={`/user/12`} className="homeContent__profilesList__user12">
            Visualiser le profil du <strong>"User n°12"</strong>
          </Link>
          <Link to={`/user/18`} className="homeContent__profilesList__user18">
            Visualiser le profil du <strong>"User n°18"</strong>
          </Link>
        </ul>
      </div>
    </main>
  )
}
export default Home
