import { useParams } from 'react-router-dom'
import { useFetch } from '../../service/useFetch/index'
import { formatNumber } from '../../service/handleDatasModeling/index'
import isMockedDatas from '../../service/handleURI'
//Components
import VerticalLayout from '../../Components/VerticalLayout'
import InfosCard from '../../Components/InfosCard'
import Barchart from '../../Components/BarChart/index'
//icones
import caloriesIcon from '../../asset/calories-icon.png'
import carbsIcon from '../../asset/carbs-icon.png'
import fatIcon from '../../asset/fat-icon.png'
import proteinIcon from '../../asset/protein-icon.png'

function User() {
  const { id } = useParams()

  const { datas, error } = useFetch(isMockedDatas(false, id, 'userDatas'))
  const userActivity = useFetch(isMockedDatas(false, id, 'userActivity'))

  const { data } = datas
  const booleen_boolIsDatasGet = data !== undefined

  return booleen_boolIsDatasGet !== false && error !== true ? (
    <main>
      <VerticalLayout />
      <div className="userContent">
        <h1 className="userContent__mainTitle">
          <span>{'Bonjour '}</span>
          <span className="userContent__mainTitle userContent__mainTitle--color">{`${
            data && data.userInfos.firstName
          }`}</span>
        </h1>
        <div className="userContent__subTitle">{`Félicitation ! Vous avez explosé vos objectifs hier 👏`}</div>
        <div className="userContent__chartsContent">
          <div className="h">
            <Barchart userActivity={userActivity} />
          </div>
          <div>
            <InfosCard
              name="Calories"
              number={formatNumber(
                data && data.keyData.calorieCount,
                'calories'
              )}
              icone={`${caloriesIcon}`}
            />
            <InfosCard
              name="Proteines"
              number={formatNumber(
                data && data.keyData.proteinCount,
                'protein'
              )}
              icone={`${proteinIcon}`}
            />
            <InfosCard
              name="Glucides"
              number={formatNumber(
                data && data.keyData.carbohydrateCount,
                'carbs'
              )}
              icone={`${carbsIcon}`}
            />
            <InfosCard
              name="Lipides"
              number={formatNumber(data && data.keyData.lipidCount, 'lipid')}
              icone={`${fatIcon}`}
            />
          </div>
        </div>
      </div>
    </main>
  ) : (
    <div>Components Erreur</div>
  )
}

export default User
