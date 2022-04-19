import { useParams } from 'react-router-dom'
import { useFetch } from '../../service/useFetch/index'
import isMockedDatas from '../../service/handleURL'
import { formatUnit } from '../../CustomFormat'
import User from '../../Pages/User/index'
import Error from '../../Pages/Error'
import LoadingSpinner from '../../Pages/LoadingSpinner/index'
//*Context-DatasProvider
import { useContext } from 'react'
import { DatasKindContext } from '../../service/context/index'

/**
 * Fetch and modelized user's datas.
 * @returns { Component } User's component is returned with user user's datas in props.
 */

function UserDatas() {
  const { booleen_boolDatasKind } = useContext(DatasKindContext)
  console.log(booleen_boolDatasKind)
  let array_arrUserDatas = []
  const { id } = useParams()

  const fetchResponse = useFetch(
    isMockedDatas(booleen_boolDatasKind, id, 'userDatas')
  )
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
      return <LoadingSpinner />
    } else {
      return <Error />
    }
  } else if (!error) {
    if (isLoading) {
      return <LoadingSpinner />
    } else {
      return <User datas={array_arrUserDatas} />
    }
  }
}
export default UserDatas
