import '../css/style.css'

//Components
import Profiles from '../Pages/Profiles/index'
import User from '../Pages/User/index'
import VerticalLayout from '../Components/VerticalLayout'
import Header from '../Components/Header/index'
import Home from '../Pages/Home/index'

//Router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <VerticalLayout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profiles" element={<Profiles />} />
        <Route path="profiles/user/:id" element={<User />} />
      </Routes>
    </Router>
  )
}

export default App
