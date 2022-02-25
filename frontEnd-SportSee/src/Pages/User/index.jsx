import { useParams } from 'react-router-dom'
import VerticalLayout from '../../Components/VerticalLayout'

function User() {
  const { id } = useParams()
  console.log(id)
  return (
    <main>
      <VerticalLayout />
      <div>{`je suis sur le profil de l'utilisateur: ${id}`}</div>
    </main>
  )
}

export default User
