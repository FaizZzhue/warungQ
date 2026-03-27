import Footer from './components/Layout/Footer'
import Navbar from './components/Layout/Navbar'
import Hero from './container/Hero/Hero'
import Info from './container/Info/Info'
import Menu from './container/Menu/Menu'
import './index.css'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Info />
      <Menu />
      <Footer />
    </>
  )
}

export default App
