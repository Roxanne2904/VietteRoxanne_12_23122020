import LineChart from '../../Components/LineChart'
import { useFetch } from '../../service/useFetch/index'
import isMockedDatas from '../../service/handleURL/index'

function AverageSessions({ userId }) {
  //   console.log(userId)
  const userResponse = useFetch(isMockedDatas(false, userId, 'averageSessions'))
  const { datas, isLoading, error } = userResponse
  const { data } = datas !== undefined && datas

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
      return <LineChart datas={data} />
    }
  }
}

export default AverageSessions
