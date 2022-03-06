// import React,{Fragment} from 'react';
// useState hook:
import { useState } from 'react';
// import Header Component:
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
// import CartContextProvider:
import CartContextProvider from './store/CartContextProvider';
import Footer from './components/Layout/Footer';

function App() {

  // state management for Cart & Modal:
  const [cartVisible,setCartVisible]=useState(false);

  // show & hide functions :
  const showCartHandler=()=>{
    setCartVisible(true);
  };

  const hideCartHandler=()=>{
    setCartVisible(false);
  }

  return (
    <CartContextProvider>
     {cartVisible && <Cart onCloseCart={hideCartHandler}/>}
      <Header  onShowCart={showCartHandler}/>
      <main>
      <Meals/>
      </main>   
      <Footer />  
    </CartContextProvider>
  );
}

export default App;
