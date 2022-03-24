/**
 * It sorts what kind of url should be returned based on data's type.
 * @param { Booleen } booleen
 * @param { Number } id Id of the user as an integer.
 * @param { String } datasType Datas's type of an existing URL.
 * @returns { String } It return the correct URL.
 */

function isMockedDatas(booleen, id, datasType) {
  if (booleen === true) {
    switch (datasType) {
      case 'userDatas':
        return `../mocked_user${id}Datas/userDatas.json`
      case 'userActivity':
        return `../mocked_user${id}Datas/userActivity.json`
      case 'averageSessions':
        return `../mocked_user${id}Datas/average-sessions.json`
      case 'performance':
        return `../mocked_user${id}Datas/userPerformance.json`
      default:
        return null
    }
  } else {
    switch (datasType) {
      case 'userDatas':
        return `http://localhost:3000/user/${id}`
      case 'userActivity':
        return `http://localhost:3000/user/${id}/activity`
      case 'averageSessions':
        return `http://localhost:3000/user/${id}/average-sessions`
      case 'performance':
        return `http://localhost:3000/user/${id}/performance`
      default:
        return null
    }
  }
}

export default isMockedDatas
