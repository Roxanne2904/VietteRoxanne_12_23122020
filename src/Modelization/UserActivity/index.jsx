import Barchart from '../../Components/Barchart'
import { useFetch } from '../../service/useFetch/index'
import isMockedDatas from '../../service/handleURL'
import PropType from 'prop-types'
//*Context-DatasProvider
import { useContext } from 'react'
import { DatasKindContext } from '../../service/context/index'
/**
 * Fetch and modelized user activity's datas.
 * @returns { Component } Barchart's component is returned with user activity's datas in props.
 */

function UserActivity({ userId }) {
  const { booleen_boolDatasKind } = useContext(DatasKindContext)
  const object_objFetchResponse = useFetch(
    isMockedDatas(booleen_boolDatasKind, userId, 'userActivity')
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
