import '../style/css/style.css'
//Components
import Header from '../Components/Header/index'
import Home from '../Pages/Home/index'
import UserDatas from '../Modelization/UsersDatas/index'
import Error from '../Pages/Error'
import { DatasKindProvider } from '../service/context/index'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

/**
 * This app components display all the router logic of this application.
 * @returns { HtmlElements } App's component is displayed dynamically.
 */

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <DatasKindProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:id" element={<UserDatas />} />
          <Route path="/user/:id/error" element={<Error />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </DatasKindProvider>
    </Router>
  )
}

export default App
