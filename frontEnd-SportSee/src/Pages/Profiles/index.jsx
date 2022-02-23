import Datas from '../../Utils/fetchDatas/index'
import { Link } from 'react-router-dom'
import { object_objMockedDatas } from '../../Utils/mockedDatas/index'

/**
 * Display all available profiles
 * @returns Profiles's component with users's name displayed dynamically.
 */

function Profiles() {
  //Is using mocked's datas to display the app?
  const isMockedDatas = true

  //User's Datas [12]
  const object_objUserDatas12 = isMockedDatas
    ? Datas(object_objMockedDatas.mainDatas.user12)
    : null
  const bool_bIsDatasNull12 = object_objUserDatas12 !== null
  const string_strFirstName12 =
    bool_bIsDatasNull12 && object_objUserDatas12.data.userInfos.firstName
  const number_nbId12 = bool_bIsDatasNull12 && object_objUserDatas12.data.id

  //User's Datas [18]
  const object_objUserDatas18 = isMockedDatas
    ? Datas(object_objMockedDatas.mainDatas.user18)
    : null
  const bool_bIsDatasNull18 = object_objUserDatas18 !== null
  const string_strFirstName18 =
    bool_bIsDatasNull18 && object_objUserDatas18.data.userInfos.firstName
  const number_nbId18 = bool_bIsDatasNull18 && object_objUserDatas18.data.id

  return bool_bIsDatasNull12 && bool_bIsDatasNull18 ? (
    <main>
      <h1>Choisissez le profil à visualiser</h1>
      <ul>
        <Link to={`/profiles/user/${number_nbId12}`}>
          {string_strFirstName12}
        </Link>
        <Link to={`/profiles/user/${number_nbId18}`}>
          {string_strFirstName18}
        </Link>
      </ul>
    </main>
  ) : (
    <div>afficher la page erreur</div>
  )
}
export default Profiles
