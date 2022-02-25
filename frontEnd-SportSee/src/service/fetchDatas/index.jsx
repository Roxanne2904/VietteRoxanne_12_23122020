import { useEffect, useState } from 'react'

/**
 * Send custom request to fetch API
 * @param { String } url
 * @returns { Object.<datas: Object, error: Booleen> }
 */

function Datas(url) {
  const [datas, setDatas] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((body) => setDatas(body))
      .catch((error) => {
        setError(true)
        console.log(error)
      })
  }, [url])

  return { datas, error }
}
export default Datas
