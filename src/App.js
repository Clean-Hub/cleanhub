import Navbar from './components/navbar/Navbar'
import './app.css'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/login/Login'
function App() {
  return (
    <div className='appContainer'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
