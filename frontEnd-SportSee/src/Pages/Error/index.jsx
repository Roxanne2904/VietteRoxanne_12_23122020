import { useParams } from 'react-router-dom'

function Error() {
  const { id } = useParams()
  // console.log(id)
  // console.log(window.location.pathname.split('/')[1])
  // console.log(window.location.pathname !== `/user/${id}/error`)

  // if (window.location.pathname !== `/user/${id}/error`) {
  //   console.log('okay')
  //   window.location.pathname = `/user/${id}/error`
  // }

  if (window.location.pathname.split('/')[1] === 'user') {
    if (id === 'undefined') {
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

  const changeUrlPath = () => {
    if (window.location.pathname === `/error`) {
      return (window.location.pathname = `/`)
    } else {
      return (window.location.pathname = `/user/${id}/`)
    }
  }

  return (
    <button
      onClick={() => {
        changeUrlPath()
      }}
    >
      Rafraichir la page!
    </button>
  )
}
export default Error
