import { useParams } from 'react-router-dom'
import PropType from 'prop-types'
// import { useFetch } from '../../service/useFetch/index'
// import isMockedDatas from '../../service/handleURL'
//Components
import VerticalLayout from '../../Components/VerticalLayout'
import InfosCard from '../../Components/InfosCard'
import Error from '../Error'
import AverageSessions from '../../Modelization/AverageSessions'
import Performance from '../../Modelization/Performance'
// import Barchart from '../../Components/BarChart/index'
import UserActivity from '../../Modelization/UserActivity/index'
import Radialchart from '../../Components/Radialchart'
//icones

//PNG FILES
import energyPng from '../../asset/png/energyPng.png'
import chickenPng from '../../asset/png/chickenPng.png'
import applePng from '../../asset/png/applePng.png'
import cheeseburgerPng from '../../asset/png/cheeseburgerPng.png'
//SVG FILES
import energySvg from '../../asset/svg/energySvg.svg'
import chickenSvg from '../../asset/svg/chickenSvg.svg'
import appleSvg from '../../asset/svg/appleSvg.svg'
import cheeseburgerSvg from '../../asset/svg/cheeseburgerSvg.svg'

/**
 *@name activateProfileTag
 * It switch to red the profile's tag on the top navigation.
 * It update the class name to change the color.
 */
const activateProfileTag = () => {
  if (window.location.pathname.split('/')[1] === 'user') {
    let string_strProfileTag = document.querySelector('#profile')

    string_strProfileTag.className =
      ' header__nav__ul__li header__nav__ul__li--red'
  }
}
//------------------------------------
//------------------------------------
/**
 * Display user profile's page.
 * @returns { HtmlElements } User's component is displayed dynamically.
 */

function User({ datas }) {
  activateProfileTag()
  //----------------------
  let { id } = useParams()
  id = parseInt(id)
  const booleen_boolIsDatasGet = datas[0] !== false

  return booleen_boolIsDatasGet === true ? (
    <main>
      <VerticalLayout />

      <div className="userContent">
        <h1 className="userContent__mainTitle">
          <span>{'Bonjour '}</span>
          <span className="userContent__mainTitle userContent__mainTitle--color">{`${datas[0].userInfos.firstName}`}</span>
        </h1>
        <div className="userContent__subTitle">{`Félicitation ! Vous avez explosé vos objectifs hier 👏`}</div>
        <section id="sportResult" className="userContent__sportResult">
          <div className="userContent__sportResult__charts">
            <div className="userContent__sportResult__charts__BarChart">
              <UserActivity userId={id} />
            </div>
            <div className="userContent__sportResult__charts__secondariesCharts">
              <AverageSessions userId={id} />
              <Performance userId={id} />
              <Radialchart datas={datas} />
            </div>
          </div>

          <div className="userContent__sportResult__infos">
            <InfosCard
              name="Calories"
              unit={datas[0].keyData.calorieCount}
              png={`${energyPng}`}
              svg={`${energySvg}`}
              color="red"
            />
            <InfosCard
              name="Proteines"
              unit={datas[0].keyData.proteinCount}
              png={`${chickenPng}`}
              svg={`${chickenSvg}`}
              color="blue"
            />
            <InfosCard
              name="Glucides"
              unit={datas[0].keyData.carbohydrateCount}
              png={`${applePng}`}
              svg={`${appleSvg}`}
              color="yellow"
            />
            <InfosCard
              name="Lipides"
              unit={datas[0].keyData.lipidCount}
              png={`${cheeseburgerPng}`}
              svg={`${cheeseburgerSvg}`}
              color="pink"
            />
          </div>
        </section>
      </div>
    </main>
  ) : (
    <Error />
  )
}

User.propTypes = {
  datas: PropType.arrayOf(
    PropType.shape({
      id: PropType.number,
      keyData: PropType.objectOf(PropType.string),
      percentageScore: PropType.string,
      score: PropType.number,
      userInfos: PropType.shape({
        age: PropType.number,
        firstName: PropType.string,
        lastName: PropType.string,
      }),
    })
  ).isRequired,
}

export default User
