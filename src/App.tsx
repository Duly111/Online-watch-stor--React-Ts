import Header from "./conponents/Header"
import Footer from "./conponents/Footer"
import Cart from "./conponents/Cart"
import ProductList from "./conponents/ProductList"
import { useState } from "react"

function App() {
  const [viewCart,setViewCart] = useState<boolean>(false);

  const pageContent = viewCart ? <Cart/> : <ProductList/>
  
  const content = (
    <>
      <Header viewCart={viewCart} setViewCart={setViewCart}/>
      {pageContent}
      <Footer viewCart={viewCart} />
    </>
  )
  return content
}

export default App
