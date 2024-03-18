import { Route, Routes} from "react-router-dom"
import { Container } from "react-bootstrap"
import { Home } from "./pages/Home"
import { Store } from "./pages/Store"
import { NavBar } from "./components/NavBar"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"


function App() {
  return (
  <>
    <ShoppingCartProvider>
  <NavBar/>
    <Container className="mb-4">
     <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Store" element={<Store />}/>
    </Routes>
      </Container>
    </ShoppingCartProvider>
  </>
  )
  
}

export default App
