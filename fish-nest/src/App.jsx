import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navabar from "./components/Navbar/Navabar"
import Footer from "./components/Footer/Footer"
import Home from "./pages/Home"


function App() {

  return (
    <>
     <BrowserRouter>
      <Navabar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
      <Footer/>
     </BrowserRouter>
    </>
  )
}

export default App
