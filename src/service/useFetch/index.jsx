import { useEffect, useState } from 'react'

/**
 * This useFetch is a custom hook and it send custom request using fetch api.
 * @param { String } url
 * @returns { Object } Object.<isLoading: Booleen, datas: Object, error: Booleen>
 */

export function useFetch(url) {
  const [datas, setDatas] = useState({})
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    // console.log(!url) //false
    // console.log(url)
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

  // console.log({ isLoading, datas, error })
  return { isLoading, datas, error }
}
export default useFetch
