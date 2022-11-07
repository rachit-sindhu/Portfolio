import Wrapper from "./HOC/Wrapper/wrapper";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import "./App.css";

import Home from './pages/Home/home';
import Projects from './pages/Projects/projects';
import Contact from './pages/Contact/contact';
import Skills from './pages/Skills/skills'

function App() {

  let location = useLocation();
  return (
    <Wrapper>
      <Routes location={location} key={location.pathname}>
        <Route exact path='/home' element={<Home />}></Route>
        <Route exact path="/projects" element={<Projects />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
        <Route exact path="/skills" element={<Skills />}></Route>
        <Route path="*" element={<Navigate to="/home" />}></Route>
      </Routes>
    </Wrapper>
  );
}

export default App;
