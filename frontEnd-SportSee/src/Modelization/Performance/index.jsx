import { useFetch } from '../../service/useFetch/index'
import isMockedDatas from '../../service/handleURL/index'
import Radarchart from '../../Components/Radarchart'
import { formatKind } from '../../CustomFormat/index'
// import Error from '../../Pages/Error'

function Performance({ userId }) {
  // console.log(userId)
  // let customDatas
  // let customKind
  let customDatas
  const userResponse = useFetch(isMockedDatas(false, userId, 'performance'))
  const { datas, isLoading, error } = userResponse !== undefined && userResponse
  const { data, kind } = datas.data !== undefined && datas.data

  customDatas = formatKind(data, kind, datas.data)

  console.log(!error)
  if (error) {
    if (isLoading) {
      return '...'
    } else {
      window.location.pathname = `user/${userId}/error`
      return null
    }
  } else if (!error) {
    if (isLoading) {
      return '...'
    } else {
      return <Radarchart datas={customDatas} />
    }
  }
}

export default Performance
