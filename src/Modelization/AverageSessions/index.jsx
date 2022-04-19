import Linechart from '../../Components/Linechart'
import { useFetch } from '../../service/useFetch/index'
import isMockedDatas from '../../service/handleURL/index'
import PropTypes from 'prop-types'
//*Context-DatasProvider
import { useContext } from 'react'
import { DatasKindContext } from '../../service/context/index'

/**
 * Fetch and modelized average sessions's datas.
 * @returns { Component } Linechart's component is returned with average sessions's datas in props.
 */

function AverageSessions({ userId }) {
  const { booleen_boolDatasKind } = useContext(DatasKindContext)

  const object_objFetchResponse = useFetch(
    isMockedDatas(booleen_boolDatasKind, userId, 'averageSessions')
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
      return <Linechart datas={data} />
    }
  }
}

AverageSessions.propTypes = {
  userId: PropTypes.number.isRequired,
}

export default AverageSessions
