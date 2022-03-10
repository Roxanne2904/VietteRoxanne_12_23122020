import { useParams } from 'react-router-dom'
import { useFetch } from '../../service/useFetch/index'
import isMockedDatas from '../../service/handleURL'
import { formatUnit } from '../../CustomFormat'
import User from '../../Pages/User/index'
import Error from '../../Pages/Error'

function UserDatas() {
  let userDatas = []
  const { id } = useParams()

  const fetchResponse = useFetch(isMockedDatas(false, id, 'userDatas'))
  const { datas, isLoading, error } = fetchResponse

  const isDatasGet = datas.data !== undefined && datas.error !== true

  userDatas.push(isDatasGet !== false && datas.data)

  userDatas = userDatas.map((user) => {
    let newDatas
    let newKeyData = user !== false && {
      ...user.keyData,
      calorieCount: formatUnit(user.keyData.calorieCount, 'calories'),
      carbohydrateCount: formatUnit(user.keyData.carbohydrateCount, 'carbs'),
      lipidCount: formatUnit(user.keyData.lipidCount, 'lipid'),
      proteinCount: formatUnit(user.keyData.proteinCount, 'protein'),
    }

    if (user !== false && user.score === undefined) {
      if (user !== false) {
        user['score'] = user['todayScore']
        delete user['todayScore']
      }
    }

    newDatas = user !== false && {
      ...user,
      keyData: newKeyData,
      percentageScore: `${user.score * 100}%`,
    }

    return newDatas
  })
  // console.log(userDatas)

  if (error) {
    if (isLoading) {
      return '...'
    } else {
      return <Error />
    }
  } else if (!error) {
    if (isLoading) {
      return '...'
    } else {
      return <User datas={userDatas} />
    }
  }
}
export default UserDatas
