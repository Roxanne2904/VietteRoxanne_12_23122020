import { useParams } from 'react-router-dom'
import User from '../../Pages/User/index'
import { useFetch } from '../../service/useFetch/index'
import isMockedDatas from '../../service/handleURL'
import { formatUnit } from '../../CustomFormat'

function UserDatas() {
  let userDatas = []
  const { id } = useParams()

  const userResponse = useFetch(isMockedDatas(false, id, 'userDatas'))
  const { datas } = userResponse

  const isDatasGet = datas.data !== undefined && datas.error !== true

  userDatas.push(isDatasGet !== false && datas.data)

  userDatas = userDatas.map((user) => {
    let newKeyData = user !== false && {
      ...user.keyData,
      calorieCount: formatUnit(user.keyData.calorieCount, 'calories'),
      carbohydrateCount: formatUnit(user.keyData.carbohydrateCount, 'carbs'),
      lipidCount: formatUnit(user.keyData.lipidCount, 'lipid'),
      proteinCount: formatUnit(user.keyData.proteinCount, 'protein'),
    }

    let newUser = user !== false && {
      ...user,
      keyData: newKeyData,
    }
    return newUser
  })
  // console.log(userDatas)
  return <User datas={userDatas} />
}
export default UserDatas
