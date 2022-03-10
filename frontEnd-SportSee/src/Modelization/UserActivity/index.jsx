import Barchart from '../../Components/Barchart'
import { useFetch } from '../../service/useFetch/index'
import isMockedDatas from '../../service/handleURL'
//import { formatUnit } from '../../CustomFormat'
import PropType from 'prop-types'

/**
 * Get and custom user activity datas from the API using useFetch.
 * @returns { Components } return BarChart's component with custom datas in props.
 */

UserActivity.propTypes = {
  userId: PropType.number.isRequired,
}

function UserActivity({ userId }) {
  // console.log(userId)
  const fetchResponse = useFetch(isMockedDatas(false, userId, 'userActivity'))
  const { datas, isLoading, error } = fetchResponse
  const { data } = datas !== undefined && datas
  // console.log(datas.data)
  // console.log(userResponse.error)
  // console.log(data)

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
      return <Barchart datas={data} />
    }
  }
}

export default UserActivity
