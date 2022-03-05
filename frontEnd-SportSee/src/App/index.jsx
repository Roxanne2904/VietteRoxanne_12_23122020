import '../style/css/style.css'
//Components
import Header from '../Components/Header/index'
import Home from '../Pages/Home/index'
import UserDatas from '../Modelization/UsersDatas/UserDatas'
//context
import { UsersDatasProvider } from '../Modelization/UsersDatas/UserDatasContext'

//Router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <UsersDatasProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:id" element={<UserDatas />} />
        </Routes>
      </UsersDatasProvider>
    </Router>
  )
}

export default App
