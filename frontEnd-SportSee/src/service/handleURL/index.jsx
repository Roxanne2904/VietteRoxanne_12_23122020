/**
 * It sorts what kind of url should be returned based on data's type.
 * @param { Booleen } booleen
 * @param { Number } id Id of the user as an integer.
 * @param { String } datasType Datas's type of an existing URI.
 * @returns { String } It return the correct url.
 */

function isMockedDatas(booleen, id, datasType) {
  if (booleen === true) {
    switch (datasType) {
      case 'userDatas':
        return `../mocked_user${id}Datas/userDatas.json`
      case 'userActivity':
        return `../mocked_user${id}Datas/userActivity.json`
      default:
        return ''
    }
  } else {
    switch (datasType) {
      case 'userDatas':
        return `http://localhost:3000/user/${id}`
      case 'userActivity':
        return `http://localhost:3000/user/${id}/activity`
      default:
        return ''
    }
  }
}

export default isMockedDatas
