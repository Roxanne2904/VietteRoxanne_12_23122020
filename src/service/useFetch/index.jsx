import { useEffect, useState } from 'react'

/**
 * Send custom request using fetch api.
 * @name useFetch Custom Hook
 * @param { String } url
 * @returns { Object.<isLoading: Booleen, datas: Object, error: Booleen> }
 */

export function useFetch(url) {
  const [datas, setDatas] = useState({})
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    // console.log(!url) //false
    if (!url) return
    setLoading(true)

    async function fetchData() {
      try {
        const response = await fetch(url)
        const body = await response.json()
        setDatas(body)
      } catch (err) {
        console.log(err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [url])

  return { isLoading, datas, error }
}
export default useFetch
