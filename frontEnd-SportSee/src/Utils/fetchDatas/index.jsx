import { useEffect, useState } from 'react'

/**
 * Send custom request to fetch API
 * @param {string} url
 * @returns {object} body
 */

function Datas(url) {
  const [datas, setDatas] = useState(null)

  useEffect(() => {
    fetch(url).then((response) =>
      response
        .json()
        .then((body) => setDatas(body))
        .catch((error) => {
          console.log(error)
        })
    )
  }, [url])
  return datas
}
export default Datas
