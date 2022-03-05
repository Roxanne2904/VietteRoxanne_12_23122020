import { createContext } from 'react'
import { useFetch } from '../../service/useFetch/index'
import isMockedDatas from '../../service/handleURL'
import { formatUnit } from '../../CustomFormat'
//---------------------------------------------
//---------------------------------------------
export const UsersDatasContext = createContext()

export function UsersDatasProvider({ children }) {
  let usersDatas = []
  let user12 = {}
  let user18 = {}

  const user12Response = useFetch(isMockedDatas(false, 12, 'userDatas'))
  const user18Response = useFetch(isMockedDatas(false, 18, 'userDatas'))

  const isDatas12Get =
    user12Response.datas.data !== undefined && user12Response.error !== true
  const isDatas18Get =
    user18Response.datas.data !== undefined && user18Response.error !== true

  user12 = isDatas12Get !== false && user12Response.datas.data
  user18 = isDatas18Get !== false && user18Response.datas.data

  usersDatas.push(isDatas12Get !== false && user12)
  usersDatas.push(isDatas18Get !== false && user18)

  usersDatas = usersDatas.map((user) => {
    let newKeyData = user !== false && {
      ...user.keyData,
      calorieCount: formatUnit(user.keyData.calorieCount, 'calories'),
      carbohydrateCount: formatUnit(user.keyData.carbohydrateCount, 'carbs'),
      lipidCount: formatUnit(user.keyData.lipidCount, 'lipid'),
      proteinCount: formatUnit(user.keyData.proteinCount, 'protein'),
    }

    return {
      ...user,
      keyData: newKeyData,
    }
  })

  return (
    <UsersDatasContext.Provider value={{ usersDatas }}>
      {children}
    </UsersDatasContext.Provider>
  )
}
