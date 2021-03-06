import { useFetch } from '../../service/useFetch/index'
import isMockedDatas from '../../service/handleURL/index'
import Radarchart from '../../Components/Radarchart'
import { formatKind } from '../../CustomFormat/index'
import PropTypes from 'prop-types'
//*Context-DatasProvider
import { useContext } from 'react'
import { DatasKindContext } from '../../service/context/index'

/**
 * Fetch and modelized performance's datas.
 * @returns { Component } Radarchart's component is returned with performance's datas in props.
 */

function Performance({ userId }) {
  const { booleen_boolDatasKind } = useContext(DatasKindContext)
  let object_objCustomDatas
  const object_objFetchResponse = useFetch(
    isMockedDatas(booleen_boolDatasKind, userId, 'performance')
  )
  const { datas, isLoading, error } =
    object_objFetchResponse !== undefined && object_objFetchResponse
  const { data, kind } = datas.data !== undefined && datas.data

  object_objCustomDatas = formatKind(data, kind, datas.data)

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
      return <Radarchart datas={object_objCustomDatas} />
    }
  }
}

Performance.propTypes = {
  userId: PropTypes.number.isRequired,
}

export default Performance
