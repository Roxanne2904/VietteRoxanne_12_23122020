import { useParams } from 'react-router-dom'

function User() {
  const { id } = useParams()

  console.log(id)
  return <div>{`je suis sur le profil de l'utilisateur: ${id}`}</div>
}

export default User
