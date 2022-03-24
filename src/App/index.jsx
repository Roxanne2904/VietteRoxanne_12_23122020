import '../style/css/style.css'
//Components
import Header from '../Components/Header/index'
import Home from '../Pages/Home/index'
import UserDatas from '../Modelization/UsersDatas/index'
import Error from '../Pages/Error'
//Router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<UserDatas />} />
        <Route path="/user/:id/error" element={<Error />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  )
}

export default App
