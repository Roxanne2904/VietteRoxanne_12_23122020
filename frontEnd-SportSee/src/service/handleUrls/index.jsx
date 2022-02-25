/**
 * It sorts what kind of url should be returned based on data's type.
 * @param { Booleen } Booleen
 * @param { Number } id Id of the user as an integer.
 * @param { String } components Components of an existing components from the app.
 * @returns { String } It return the correct url.
 */

function isMockedDatas(Booleen, id, components) {
  if (Booleen === true && components === 'profiles') {
    return `../mocked_user${id}Datas/mainDatas.json`
  } else {
    return `http://localhost:3000/user/${id}`
  }
}

export default isMockedDatas
