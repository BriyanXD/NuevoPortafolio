import React,{lazy, Suspense, useEffect} from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter,Routes, Route} from "react-router-dom"
import './index.css'
import {ThemeProvider} from "./context/ThemeContext"
import Load from "./components/load/Load";
const Home = lazy(() => import("./components/home/Home"));
const Experience = lazy(() => import("./components/experience/Experience"))
const Navigation = lazy(() => import("./components/navigation/Navigaction"))
const Work = lazy(() => import("./components/work/Work"));
const Abount = lazy(() => import("./components/abount/Abount"))
const Modal = lazy(() => import('./components/modal/Modal'))
const AboutMe = lazy(() => import("./components/AboutMe/AboutMe"))
const Error = lazy(() => import("./components/error/Error"))
const Contact = lazy(() => import("./components/contact/Contact"))
import Footer from './components/footer/Footer';
import ButtonUp from './components/button/ButtonUp';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <Suspense fallback={<Load/>}>
        <BrowserRouter>
        <ThemeProvider>
          <Routes>
            <Route path='/' element={<>
                <Navigation/>
                <Home/>
                <ButtonUp/>
                <Experience/>
                <Work/>
                <Abount/>
                <Contact/>
                <Footer/>
            </>}/>
            <Route path='/project/:name' element={<Modal/>}/>
            <Route path='/about' element={<AboutMe/>}/>
            <Route path='*' element={<Error/>}/>
          </Routes>
        </ThemeProvider>
        </BrowserRouter>
        </Suspense>
  </React.StrictMode>
)