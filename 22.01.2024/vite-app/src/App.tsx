import './App.scss'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { routes } from './helpers/routes'
import NavBar from './components/navbar'
import Footer from './components/footer'

function App() {
  return (
    <Router>
      <Routes>
        {routes.map((route) => (
            <Route
            key={route.path}
            path={route.path}
            element={route.element}
            />
          ))}
      </Routes>
        <NavBar/>
      <Footer/>
    </Router>
  )
}

export default App