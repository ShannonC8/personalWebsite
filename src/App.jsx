import './App.css';
import React from 'react';
import Home from './components/Home.jsx';
import Navbar from './components/Navbar.jsx';
import {BrowserRouter, Route, Routes} from "react-router-dom";

//<Navbar className= "w-full"/>
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/project" element={<Home />} />
                <Route path="/about-me" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
