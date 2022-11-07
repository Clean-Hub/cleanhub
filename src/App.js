import Navbar from './components/navbar/Navbar'
import './app.css'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className='appContainer'>
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

export default App
