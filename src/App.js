import Navbar from './components/navbar/Navbar'
import './app.css'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import About from './pages/about/About'
import AboutIntro from './components/aboutIntro/AboutIntro'
function App() {
  return (
    <div className='appContainer'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/about' element={<About />}>
            <Route path='/about/aboutUs' element={<AboutIntro />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
