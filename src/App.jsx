import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import ReactLenis from 'lenis/react'

function App() {

  return (
    <>
      <ReactLenis root>
        <Router>
          <Routes>
            <Route exact path='/' element={<Home />}></Route>
          </Routes>
        </Router>
      </ReactLenis>
    </>
  )
}

export default App
