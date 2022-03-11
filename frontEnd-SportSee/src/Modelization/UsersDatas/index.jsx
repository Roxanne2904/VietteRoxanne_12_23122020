import { useParams } from 'react-router-dom'
import { useFetch } from '../../service/useFetch/index'
import isMockedDatas from '../../service/handleURL'
import { formatUnit } from '../../CustomFormat'
import User from '../../Pages/User/index'
import Error from '../../Pages/Error'

/**
 * Fetch and modelized user's datas.
 * @returns { Component } User's component is returned with user user's datas in props.
 */

function UserDatas() {
  let array_arrUserDatas = []
  const { id } = useParams()

  const fetchResponse = useFetch(isMockedDatas(false, id, 'userDatas'))
  const { datas, isLoading, error } = fetchResponse

  const isDatasGet = datas.data !== undefined && datas.error !== true

  array_arrUserDatas.push(isDatasGet !== false && datas.data)

  array_arrUserDatas = array_arrUserDatas.map((user) => {
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
      return <User datas={array_arrUserDatas} />
    }
  }
}
export default UserDatas
