import Barchart from '../../Components/BarChart'
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
  const userResponse = useFetch(isMockedDatas(false, userId, 'userActivity'))
  const { datas } = userResponse

  // console.log(datas.data)
  // console.log(userResponse.error)

  return datas.data !== undefined ? (
    <Barchart datas={datas.data} />
  ) : (
    <div>
      Oups! Nous en pouvons pas vous afficher les informations pour le moment...
      <button onClick={() => window.location.reload()}>cliquez moi !</button>
    </div>
  )
}

export default UserActivity
