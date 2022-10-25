import Navbar from "./components/navbar/Navbar"
import Landingpage from "./components/landingpage/Landingpage"
import About from "./components/about/About"
import Projects from "./components/projects/Projects"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <div className="app">
        <Navbar/>
      <div className="sections">
        <Routes>
          <Route path="/" element={<Landingpage/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<Projects/>} />
        </Routes>
      </div>

      </div>
    </>
  )
}

export default App
