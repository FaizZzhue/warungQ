import Footer from './components/Layout/Footer'
import Navbar from './components/Layout/Navbar'
import Hero from './container/Hero/Hero'
import Info from './container/Info/Info'
import Menu from './container/Menu/Menu'
import useCart from './hooks/useCart'
import './index.css'

function App() {
  const { cart, addToCart, removeQuantity, removeFromCart, total } = useCart();

  return (
    <>
      <Navbar cart={cart} />
      <Hero />
      <Info />
      <Menu
        cart={cart}
        addToCart={addToCart}
        removeQuantity={removeQuantity}
        removeFromCart={removeFromCart}
        total={total}
      />
      <Footer />
    </>
  )
}

export default App