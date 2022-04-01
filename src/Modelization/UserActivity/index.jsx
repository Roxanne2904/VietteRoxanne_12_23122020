import Barchart from '../../Components/Barchart'
import { useFetch } from '../../service/useFetch/index'
import isMockedDatas from '../../service/handleURL'
import PropType from 'prop-types'

/**
 * Fetch and modelized user activity's datas.
 * @returns { Component } Barchart's component is returned with user activity's datas in props.
 */

function UserActivity({ userId }) {
  const object_objFetchResponse = useFetch(
    isMockedDatas(true, userId, 'userActivity')
  )
  const { datas, isLoading, error } = object_objFetchResponse
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
      return <Barchart datas={data} />
    }
  }
}

UserActivity.propTypes = {
  userId: PropType.number.isRequired,
}

export default UserActivity
