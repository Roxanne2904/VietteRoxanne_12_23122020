import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { DatasKindContext } from '../../service/context/index'
import VerticalLayout from '../../Components/VerticalLayout'

/**
 * Display the Home's page with available profiles to visit.
 * @returns { HtmlElements } Home's component is displayed dynamically.
 */

function Home() {
  const { toggleDatasKind, booleen_boolDatasKind } =
    useContext(DatasKindContext)

  return (
    <main>
      <VerticalLayout />
      <div className="homeContent">
        <h1 className="homeContent__mainTitle">
          <i className="homeContent__mainTitle__datasInfos">
            ~ Les données sont actuellement{' '}
            {booleen_boolDatasKind === true
              ? ` mockées ~`
              : ` récupérées auprès de l'API ~`}{' '}
          </i>
          Bienvenue sur{' '}
          <span className="homeContent__mainTitle__appName">SportSee</span>
        </h1>
        <button
          className="homeContent__switchDatas"
          onClick={() => toggleDatasKind()}
        >
          Lancer SportSee avec
          {booleen_boolDatasKind === true ? ` l'API` : ` des données mockées`}
        </button>
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
