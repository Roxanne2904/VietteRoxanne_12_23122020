import { useParams } from 'react-router-dom'
// import { useFetch } from '../../service/useFetch/index'
// import isMockedDatas from '../../service/handleURL'
//Components
import VerticalLayout from '../../Components/VerticalLayout'
import InfosCard from '../../Components/InfosCard'
// import Barchart from '../../Components/BarChart/index'
import UserActivity from '../../Modelization/UserActivity/index'
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
import PropType from 'prop-types'
//context
// import { UsersDatasContext } from '../../Modelization/UsersDatas/UserDatasContext'
// import { useContext } from 'react'

/**
 * Display user profile's page.
 * @returns { HtmlElements } User's component is displayed dynamically.
 */

UserActivity.defaultProps = {
  datas: [],
}
UserActivity.propTypes = {
  datas: PropType.array.isRequired,
}

function User({ datas }) {
  let { id } = useParams()
  id = parseInt(id)

  // const { usersDatas } = useContext(UsersDatasContext)
  // const currentUser = usersDatas.filter(
  //   (user) => user !== undefined && user.id === parseInt(id)
  // )
  //-----------
  //-----------
  //-----------
  // const userActivity = useFetch(isMockedDatas(false, id, 'userActivity'))
  //------------
  //------------
  //------------
  // const booleen_boolIsDatasGet = currentUser[0] !== undefined
  const booleen_boolIsDatasGet = datas[0] !== false

  // console.log(booleen_boolIsDatasGet)
  // return null
  return booleen_boolIsDatasGet === true ? (
    <main>
      <VerticalLayout />

      <div className="userContent">
        <h1 className="userContent__mainTitle">
          <span>{'Bonjour '}</span>
          <span className="userContent__mainTitle userContent__mainTitle--color">{`${datas[0].userInfos.firstName}`}</span>
        </h1>
        <div className="userContent__subTitle">{`Félicitation ! Vous avez explosé vos objectifs hier 👏`}</div>
        <section id="performance" className="userContent__performance">
          <div className="userContent__performance__BarChart">
            <UserActivity userId={id} />
          </div>
          <div>
            <InfosCard
              name="Calories"
              numberUnit={datas[0].keyData.calorieCount}
              png={`${energyPng}`}
              svg={`${energySvg}`}
              color="red"
            />
            <InfosCard
              name="Proteines"
              numberUnit={datas[0].keyData.proteinCount}
              png={`${chickenPng}`}
              svg={`${chickenSvg}`}
              color="blue"
            />
            <InfosCard
              name="Glucides"
              numberUnit={datas[0].keyData.carbohydrateCount}
              png={`${applePng}`}
              svg={`${appleSvg}`}
              color="yellow"
            />
            <InfosCard
              name="Lipides"
              numberUnit={datas[0].keyData.lipidCount}
              png={`${cheeseburgerPng}`}
              svg={`${cheeseburgerSvg}`}
              color="pink"
            />
          </div>
        </section>
      </div>
    </main>
  ) : (
    <div>Components Erreur</div>
  )
}

export default User
