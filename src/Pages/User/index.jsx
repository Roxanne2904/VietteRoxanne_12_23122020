import { useParams } from 'react-router-dom'
import PropType from 'prop-types'
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
//*Context-DatasProvider
import { useContext } from 'react'
import { DatasKindContext } from '../../service/context/index'

/**
 * It get profile's tag as a Dom Element and it generate scss's classNames as a string.
 * These ClassNames are generated in order to styled '<li></li>' from the Header's component.
 * @returns { Object } { Object.<string_strClassNames: String, string_strProfileTag: String> }
 */

const itGenerateClassNamesAndGetDomProfileTag = () => {
  if (window.location.pathname.split('/')[1] === 'user') {
    let string_strDomProfileTag = document.querySelector('#profile')
    let string_strClassNames = ' header__nav__ul__li header__nav__ul__li--red'
    return { string_strClassNames, string_strDomProfileTag }
  }
}

/**
 * Display user profile's page.
 * @returns { HtmlElements } User's component is displayed dynamically.
 */

function User({ datas }) {
  const { booleen_boolDatasKind } = useContext(DatasKindContext)
  // console.log(booleen_boolDatasKind)
  const { string_strDomProfileTag, string_strClassNames } =
    itGenerateClassNamesAndGetDomProfileTag()
  string_strDomProfileTag.className = string_strClassNames
  //----------------------
  let { id } = useParams()
  id = parseInt(id)
  const booleen_boolIsDatasGet = datas[0] !== false

  return booleen_boolIsDatasGet === true ? (
    <main>
      <VerticalLayout />
      <div id="wrapper">
        <div className="userContent">
          <h1 className="userContent__mainTitle">
            <i className="userContent__mainTitle__datasInfos">
              ~ Les données présentées sont{' '}
              {booleen_boolDatasKind === true
                ? ` mockées ~`
                : ` récupérées auprès de l'API ~`}{' '}
            </i>
            <span>{'Bonjour '}</span>
            <span className="userContent__mainTitle userContent__mainTitle--color">{`${datas[0].userInfos.firstName}`}</span>
          </h1>
          <p className="userContent__subTitle">{`Félicitation ! Vous avez explosé vos objectifs hier 👏`}</p>
          <div className="userContent__sportResult">
            <section id="charts" className="userContent__sportResult__charts">
              <div className="userContent__sportResult__charts__BarChart">
                <UserActivity userId={id} />
              </div>
              <div className="userContent__sportResult__charts__secondariesCharts">
                <AverageSessions userId={id} />
                <Performance userId={id} />
                <div className="userContent__sportResult__charts__secondariesCharts__radialChart">
                  <Radialchart datas={datas} />
                </div>
              </div>
            </section>

            <aside className="userContent__sportResult__infos">
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
            </aside>
          </div>
        </div>
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
