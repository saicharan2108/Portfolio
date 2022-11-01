import { Routes , Route, BrowserRouter } from "react-router-dom"
import Home from "./components/Home/index"
import Experience from "./components/Experience/index"
import Projects from "./components/Projects/index"
import Certifications from "./components/Certifications/index"
import NotFound from "./components/NotFound/index"
import './App.css';

function App() {
  return (
    <>
    <div className="app-container">
      <BrowserRouter>
      <Routes>
      <Route exact path="/" element={ <Home/> } />
      <Route exact path="/projects" element={<Projects/>} />
      <Route exact path="/experience" element={<Experience/>} />
      <Route exact path="/certifications" element={<Certifications/>} />    
      <Route element={ <NotFound/>} />
      </Routes>
      </BrowserRouter> 
    </div>
      <div className="mobile-info">
        <img src="https://assets.ccbp.in/frontend/react-js/failure-img.png" alt="img" className="failure-img" />
        <h1 className="txt"> Currently Website is <b><i> <span style={{color:"red"}}>Under Construction</span></i></b>, It is available on <u>Large devices</u> only.   </h1>
      </div>
      </>
  );
}

export default App;
