import Footer from './components/Layout/Footer';
import Navbar from './components/Layout/Navbar';
import Hero from './container/Hero/Hero';
import Info from './container/Info/Info';
import Menu from './container/Menu/Menu';
import useCart from './hooks/useCart';
import './index.css';

function App() {
  const {
    cart,
    addToCart,
    removeQuantity,
    removeFromCart,
    activateDiscount,
    discountActivated,
    isEligibleForDiscount,
    subtotal,
    discountAmount,
    discountPercentage,
    total,
    resetCart,
  } = useCart();

  return (
    <>
      <Navbar cart={cart} />
      <Hero />
      <Info
        activateDiscount={activateDiscount}
        discountActivated={discountActivated}
        isEligibleForDiscount={isEligibleForDiscount}
      />
      <Menu
        cart={cart}
        addToCart={addToCart}
        removeQuantity={removeQuantity}
        removeFromCart={removeFromCart}
        subtotal={subtotal}
        discountAmount={discountAmount}
        discountPercentage={discountPercentage}
        total={total}
        onResetCart={resetCart}
      />
      <Footer />
    </>
  );
}

export default App;