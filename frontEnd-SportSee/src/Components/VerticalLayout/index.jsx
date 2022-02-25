import Icones from '../Icones/index'
import meditation from '../../asset/meditation.png'
import swim from '../../asset/swim.png'
import bodyBulding from '../../asset/bodyBulding.png'
import biking from '../../asset/biking.png'

function VerticalLayout() {
  return (
    <nav className="verticalLayout" aria-label="verticalLayout">
      <ul className="verticalLayout__ul">
        <li>
          <Icones url={`${meditation}`} name="meditation" id={`01`} />
        </li>
        <li>
          <Icones url={`${swim}`} name="swim" id={`02`} />
        </li>
        <li>
          <Icones url={`${biking}`} name="biking" id={`04`} />
        </li>
        <li>
          <Icones url={`${bodyBulding}`} name="bodyBulding" id={`03`} />
        </li>
      </ul>
      <span className="verticalLayout__copyRights">
        Copiryght, SportSee 2020
      </span>
    </nav>
  )
}
export default VerticalLayout
