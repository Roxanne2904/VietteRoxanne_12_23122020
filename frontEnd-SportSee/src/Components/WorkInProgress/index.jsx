import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWrench } from '@fortawesome/free-solid-svg-icons'

function WorkInProgress() {
  return (
    <div>
      <span>Oups!</span>
      <FontAwesomeIcon icon={faWrench} />
      <span>~ Affichage en cours de création ~</span>
    </div>
  )
}

export default WorkInProgress
