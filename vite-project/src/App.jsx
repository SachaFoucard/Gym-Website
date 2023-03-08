import './Styles/index.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HeaderNav from './Components/HeaderNav'
import Footer from "./Components/Footer"
import Home from "./Pages/Home"
import Blog from "./Pages/Blog"
import Services from "./Pages/Services"
import Concept from "./Pages/Concept"
function App() {

  return (
    <>
      <BrowserRouter>
      <HeaderNav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/concept" element={<Concept/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
