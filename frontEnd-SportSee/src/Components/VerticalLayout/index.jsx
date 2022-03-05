import IconToNavigate from '../IconeToNavigate/index'
import meditation from '../../asset/png/meditation.png'
import swim from '../../asset/png/swim.png'
import bodyBulding from '../../asset/png/bodyBulding.png'
import biking from '../../asset/png/biking.png'

/**
 * Display to the left a Vertical layout with icons to navigate.
 * @return { HtmlElements } VerticalLayout's component is displayed dynamically.
 */

function VerticalLayout() {
  return (
    <nav className="verticalLayout" aria-label="verticalLayout">
      <ul className="verticalLayout__ul">
        <li>
          <IconToNavigate url={`${meditation}`} name="meditation" id={1} />
        </li>
        <li>
          <IconToNavigate url={`${swim}`} name="swim" id={2} />
        </li>
        <li>
          <IconToNavigate url={`${biking}`} name="biking" id={4} />
        </li>
        <li>
          <IconToNavigate url={`${bodyBulding}`} name="bodyBulding" id={3} />
        </li>
      </ul>
      <span className="verticalLayout__copyRights">
        Copiryght, SportSee 2020
      </span>
    </nav>
  )
}
export default VerticalLayout
