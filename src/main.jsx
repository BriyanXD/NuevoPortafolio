import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from "./components/home/Home"
import Experience from "./components/experience/Experience";
import Navigation from "./components/navigation/Navigaction";
import Work from "./components/work/Work";
import Abount from "./components/abount/Abount"
import {BrowserRouter,Routes, Route} from "react-router-dom"
import Modal from './components/modal/Modal';
import AboutMe from "./components/AboutMe/AboutMe"
import {ThemeProvider} from "./context/ThemeContext"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <BrowserRouter>
        <ThemeProvider>
          <Routes>
            <Route path='/' element={<>
                <Navigation/>
                <Home/>
                <Experience/>
                <Work/>
                <Abount/>
            </>}/>
            <Route path='/project/:name' element={<Modal/>}/>
            <Route path='/about' element={<AboutMe/>}/>
          </Routes>
        </ThemeProvider>
        </BrowserRouter>
  </React.StrictMode>
)