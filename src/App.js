// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavComp/NavBar';
import Home from './Components/HomeComp/Home.js';
import Resume from './Components/ResumeComp/Resume3';
import Projects from './Components/ProjectsComp/Projects2';
import Contact from './Components/ContactMeComp/ContactMe';
// import About from './Components/AboutComp/About';
import Footer from "./Components/Footer.js"

window.onload = ()=>{
  function toggle(){
    document.getElementsByClassName("nav-link")[0].onclick = ()=>{
      document.getElementById("navbarSupportedContent").setAttribute("class", "navbar-collapse collapse")
    };
    document.getElementsByClassName("nav-link")[1].onclick = ()=>{
      document.getElementById("navbarSupportedContent").setAttribute("class", "navbar-collapse collapse")
    };
    document.getElementsByClassName("nav-link")[2].onclick = ()=>{
      document.getElementById("navbarSupportedContent").setAttribute("class", "navbar-collapse collapse")
    };
    document.getElementsByClassName("nav-link")[3].onclick = ()=>{
      document.getElementById("navbarSupportedContent").setAttribute("class", "navbar-collapse collapse")
    };
  }
  toggle();
  console.clear();
}

function App() {

  return (
    <>
        <NavBar style={{width:'100%'}}/>
        <Home style={{width:'100%'}}/>
        <Projects style={{width:'100%'}}/>
        <Resume style={{width:'100%'}}/>
        <Contact style={{width:'100%'}}/>
        <Footer style={{width:'100%'}}/>      
    </>
);
}

export default App;
