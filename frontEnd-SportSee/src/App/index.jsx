import '../style/css/style.css'
//Components
import User from '../Pages/User/index'
import Header from '../Components/Header/index'
import Home from '../Pages/Home/index'
import Settings from '../Pages/Settings/index'
import Community from '../Pages/Community/index'

//Router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/community" element={<Community />} />
      </Routes>
    </Router>
  )
}

export default App
