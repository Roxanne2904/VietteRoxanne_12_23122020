import { useParams } from 'react-router-dom'
import VerticalLayout from '../../Components/VerticalLayout/index'
// import LoadingSpinner from '../../Components/LoadingSpinner/index'

/**
 * Display error's page.
 * @returns { HTMLElements } Error's component is displayed dynamically.
 */

function Error() {
  const { id } = useParams()

  if (window.location.pathname.split('/')[1] === 'user') {
    if (id === 'undefined' || (id !== '12' && id !== '18')) {
      window.location.pathname = `/error`
    } else {
      if (window.location.pathname !== `/user/${id}/error`) {
        window.location.pathname = `/user/${id}/error`
      }
    }
  } else {
    if (window.location.pathname !== `/error`) {
      window.location.pathname = `/error`
    }
  }

  /**
   * It Change the Url Path on Click.
   * @returns An Url path.
   */
  const changeUrlPath = () => {
    console.log(window.location.pathname)
    if (window.location.pathname === `/error`) {
      return (window.location.pathname = `/`)
    } else {
      return (window.location.pathname = `/user/${id}`)
    }
  }

  return (
    <main>
      <VerticalLayout />
      <section id="error" className="errorContent">
        <h1 className="errorContent__mainTitle">
          <span className="errorContent__mainTitle__oups">Oups!</span> Hmmm...
          😕
        </h1>
        <p className="errorContent__txt">
          Nous n'arrivons pas a récupérer vos données...
        </p>
        <button
          className="errorContent__refreshButton"
          onClick={() => {
            changeUrlPath()
          }}
        >
          Rafraichir la page ! 😀
        </button>
      </section>
    </main>
  )

  // return <LoadingSpinner />
}
export default Error
