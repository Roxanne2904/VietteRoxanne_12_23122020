import { useEffect, useState } from 'react'

function Datas() {
  const [datas, setData] = useState(null)
  useEffect(() => {
    //Mocked datas
    fetch(`../mocked_user12Datas/mainDatas.json`).then((response) =>
      response
        .json()
        .then((body) => setData(body))
        .catch((error) => console.log(error))
    )
  }, [])

  //   fetch(`http://localhost:3000/user/12`).then((response) =>
  //     response
  //       .json()
  //       .then((body) => setData(body))
  //       .catch((error) => console.log(error))
  //   )
  // }, [])

  console.log(datas)
  return null
}

export default Datas
