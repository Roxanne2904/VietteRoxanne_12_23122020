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
      <div>
        <h1>Choisissez un profil à visualiser</h1>
        <ul>
          <Link to={`/user/12`}>
            Visualiser le profil du <strong>"User n°12"</strong>
          </Link>
          <Link to={`/user/18`}>
            Visualiser le profil du <strong>"User n°18"</strong>
          </Link>
        </ul>
      </div>
    </main>
  )
}
export default Home
